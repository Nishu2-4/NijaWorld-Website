const { validationResult } = require("express-validator");
const crypto = require("crypto");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");

// ─────────────────────────────────────────────
// @desc    Login user
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
// @desc    Request password reset
// @route   POST /api/auth/forgot-password
// @access  Public
// ─────────────────────────────────────────────
const forgotPassword = async (req, res, next) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ success: false, message: "Email is required." });
        }

        // Generic response to avoid user enumeration
        const GENERIC_MSG = "If this email is registered, you will receive a password reset link shortly.";

        const user = await User.findOne({ email: email.toLowerCase().trim() });

        // Return generic response even if user not found
        if (!user) {
            return res.status(200).json({ success: true, message: GENERIC_MSG });
        }

        // Generate raw 32-byte token
        const rawToken = crypto.randomBytes(32).toString("hex");

        // Hash token for storage (never store plain token in DB)
        const hashedToken = crypto.createHash("sha256").update(rawToken).digest("hex");

        user.resetPasswordToken = hashedToken;
        user.resetPasswordExpire = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

        await user.save({ validateBeforeSave: false });

        // Build reset URL (frontend handles consuming the raw token)
        const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";
        const resetUrl = `${CLIENT_URL}/reset-password/${rawToken}`;

        // In production, send via email. For now, log to console.
        console.log("─────────────────────────────────────────────────");
        console.log(`🔑 PASSWORD RESET LINK (log only — configure email to send)`);
        console.log(`   User : ${user.email}`);
        console.log(`   Link : ${resetUrl}`);
        console.log(`   Expires : ${user.resetPasswordExpire.toISOString()}`);
        console.log("─────────────────────────────────────────────────");

        res.status(200).json({ success: true, message: GENERIC_MSG });
    } catch (error) {
        next(error);
    }
};

// ─────────────────────────────────────────────
// @desc    Reset password using token
// @route   PUT /api/auth/reset-password/:token
// @access  Public
// ─────────────────────────────────────────────
const resetPassword = async (req, res, next) => {
    try {
        const { token } = req.params;
        const { newPassword, confirmPassword } = req.body;

        if (!newPassword || !confirmPassword) {
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

        // Hash the incoming raw token to compare against DB
        const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

        const user = await User.findOne({
            resetPasswordToken: hashedToken,
            resetPasswordExpire: { $gt: Date.now() },
        }).select("+resetPasswordToken +resetPasswordExpire +password");

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid or expired password reset token.",
            });
        }

        // Set new password (pre-save hook hashes it)
        user.password = newPassword;
        // Clear reset token fields
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();

        res.status(200).json({
            success: true,
            message: "Password has been reset successfully. You can now log in.",
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { login, register, getMe, getAllUsers, toggleUserStatus, forgotPassword, resetPassword };

