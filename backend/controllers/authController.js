const { validationResult } = require("express-validator");
const crypto = require("crypto");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const { sendOtpEmail } = require("../utils/emailService");

// ─── Helpers ───────────────────────────────────────────────────────────────

/** Generate a cryptographically secure 6-digit plain OTP. */
function generateOtp() {
    // Use random bytes to avoid modulo bias
    const num = crypto.randomInt(100000, 999999);
    return String(num);
}

/** Hash a plain OTP value with SHA-256 for safe DB storage. */
function hashOtp(plain) {
    return crypto.createHash("sha256").update(plain).digest("hex");
}

// ─────────────────────────────────────────────
// @desc    Login Step 1 — verify credentials, send OTP
// @route   POST /api/auth/login
// @access  Public
// ─────────────────────────────────────────────
const login = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ success: false, errors: errors.array() });
        }

        const { email, password } = req.body;

        // Fetch user WITH password for comparison
        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password.",
            });
        }

        if (!user.isActive) {
            return res.status(403).json({
                success: false,
                message: "Account is deactivated. Contact an administrator.",
            });
        }

        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password.",
            });
        }

        // Credentials are valid — generate a login OTP instead of issuing JWT
        const plainOtp = generateOtp();
        user.otp = hashOtp(plainOtp);
        user.otpExpire = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
        user.otpPurpose = "login";
        await user.save({ validateBeforeSave: false });

        console.log("─────────────────────────────────────────────────");
        console.log(`🔑 LOGIN OTP`);
        console.log(`   User   : ${user.email}`);
        console.log(`   OTP    : ${plainOtp}`);
        console.log(`   Expires: ${user.otpExpire.toISOString()}`);
        console.log("─────────────────────────────────────────────────");

        try {
            await sendOtpEmail({
                name: user.name || "Admin",
                email: user.email,
                otp: plainOtp,
                purpose: "login",
            });
            console.log(`✅ Login OTP email sent to ${user.email}`);
        } catch (emailErr) {
            console.error("❌ Failed to send login OTP email:", emailErr.message);
        }

        res.status(200).json({
            success: true,
            requiresOtp: true,
            message: "Credentials verified. A 6-digit OTP has been sent to your email.",
            email: user.email, // return so frontend can use it in step 2
        });
    } catch (error) {
        next(error);
    }
};

// ─────────────────────────────────────────────
// @desc    Login Step 2 — verify OTP, issue JWT
// @route   POST /api/auth/verify-login-otp
// @access  Public
// ─────────────────────────────────────────────
const verifyLoginOtp = async (req, res, next) => {
    try {
        const { email, otp } = req.body;

        if (!email || !otp) {
            return res.status(400).json({ success: false, message: "Email and OTP are required." });
        }

        const hashedOtp = hashOtp(otp.trim());

        const user = await User.findOne({
            email: email.toLowerCase().trim(),
            otp: hashedOtp,
            otpPurpose: "login",
            otpExpire: { $gt: Date.now() },
        }).select("+otp +otpExpire +otpPurpose");

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid or expired OTP. Please try again or go back to request a new one.",
            });
        }

        // Clear OTP fields and issue JWT
        user.otp = undefined;
        user.otpExpire = undefined;
        user.otpPurpose = undefined;
        await user.save({ validateBeforeSave: false });

        const token = generateToken(user._id);

        res.status(200).json({
            success: true,
            message: "Login successful.",
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                isActive: user.isActive,
            },
        });
    } catch (error) {
        next(error);
    }
};

// ─────────────────────────────────────────────
// @desc    Register new user (admin creates editors)
// @route   POST /api/auth/register
// @access  Private (Admin only)
// ─────────────────────────────────────────────
const register = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ success: false, errors: errors.array() });
        }

        const { name, email, password, role } = req.body;

        // Prevent creating another admin unless you explicitly allow it
        const allowedRoles = ["editor", "admin"];
        const assignedRole = allowedRoles.includes(role) ? role : "editor";

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "A user with this email already exists.",
            });
        }

        const user = await User.create({
            name,
            email,
            password,
            role: assignedRole,
        });

        res.status(201).json({
            success: true,
            message: `User '${user.name}' created successfully as ${user.role}.`,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                isActive: user.isActive,
                createdAt: user.createdAt,
            },
        });
    } catch (error) {
        next(error);
    }
};

// ─────────────────────────────────────────────
// @desc    Get current authenticated user
// @route   GET /api/auth/me
// @access  Private
// ─────────────────────────────────────────────
const getMe = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found.",
            });
        }

        res.status(200).json({
            success: true,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                isActive: user.isActive,
                createdAt: user.createdAt,
            },
        });
    } catch (error) {
        next(error);
    }
};

// ─────────────────────────────────────────────
// @desc    Get all users (admin: manage editors)
// @route   GET /api/auth/users
// @access  Private (Admin only)
// ─────────────────────────────────────────────
const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find().select("-password").sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: users.length,
            users,
        });
    } catch (error) {
        next(error);
    }
};

// ─────────────────────────────────────────────
// @desc    Toggle user active status (admin)
// @route   PATCH /api/auth/users/:id/toggle
// @access  Private (Admin only)
// ─────────────────────────────────────────────
const toggleUserStatus = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found." });
        }

        // Prevent admin from deactivating themselves
        if (user._id.toString() === req.user._id.toString()) {
            return res.status(400).json({
                success: false,
                message: "You cannot deactivate your own account.",
            });
        }

        user.isActive = !user.isActive;
        await user.save();

        res.status(200).json({
            success: true,
            message: `User ${user.isActive ? "activated" : "deactivated"} successfully.`,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                isActive: user.isActive,
            },
        });
    } catch (error) {
        next(error);
    }
};

// ─────────────────────────────────────────────
// @desc    Send OTP to email for password reset (forgot password)
// @route   POST /api/auth/send-otp
// @access  Public
// ─────────────────────────────────────────────
const sendForgotPasswordOtp = async (req, res, next) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ success: false, message: "Email is required." });
        }

        // Generic response to avoid user enumeration
        const GENERIC_MSG = "If this email is registered, you will receive a 6-digit OTP shortly.";

        const user = await User.findOne({ email: email.toLowerCase().trim() });

        if (!user) {
            return res.status(200).json({ success: true, message: GENERIC_MSG });
        }

        // Generate plain OTP and store its hash
        const plainOtp = generateOtp();
        user.otp = hashOtp(plainOtp);
        user.otpExpire = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
        user.otpPurpose = "reset";

        await user.save({ validateBeforeSave: false });

        console.log("─────────────────────────────────────────────────");
        console.log(`🔑 FORGOT PASSWORD OTP`);
        console.log(`   User   : ${user.email}`);
        console.log(`   OTP    : ${plainOtp}`);
        console.log(`   Expires: ${user.otpExpire.toISOString()}`);
        console.log("─────────────────────────────────────────────────");

        try {
            await sendOtpEmail({
                name: user.name || "Admin",
                email: user.email,
                otp: plainOtp,
                purpose: "reset",
            });
            console.log(`✅ OTP email sent to ${user.email}`);
        } catch (emailErr) {
            console.error("❌ Failed to send OTP email:", emailErr.message);
        }

        res.status(200).json({ success: true, message: GENERIC_MSG });
    } catch (error) {
        next(error);
    }
};

// ─────────────────────────────────────────────
// @desc    Verify OTP and reset password (forgot password)
// @route   POST /api/auth/verify-otp-reset
// @access  Public
// ─────────────────────────────────────────────
const verifyOtpAndReset = async (req, res, next) => {
    try {
        const { email, otp, newPassword, confirmPassword } = req.body;

        if (!email || !otp || !newPassword || !confirmPassword) {
            return res.status(400).json({ success: false, message: "All fields are required." });
        }

        if (newPassword.length < 8) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 8 characters.",
            });
        }

        if (newPassword !== confirmPassword) {
            return res.status(400).json({ success: false, message: "Passwords do not match." });
        }

        // Hash incoming OTP and compare against stored hash
        const hashedOtp = hashOtp(otp.trim());

        const user = await User.findOne({
            email: email.toLowerCase().trim(),
            otp: hashedOtp,
            otpPurpose: "reset",
            otpExpire: { $gt: Date.now() },
        }).select("+otp +otpExpire +otpPurpose +password");

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid or expired OTP. Please request a new one.",
            });
        }

        // Set new password — pre-save hook will hash it
        user.password = newPassword;
        user.otp = undefined;
        user.otpExpire = undefined;
        user.otpPurpose = undefined;

        await user.save();

        res.status(200).json({
            success: true,
            message: "Password has been reset successfully. You can now log in.",
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    login,
    verifyLoginOtp,
    register,
    getMe,
    getAllUsers,
    toggleUserStatus,
    sendForgotPasswordOtp,
    verifyOtpAndReset,
};
