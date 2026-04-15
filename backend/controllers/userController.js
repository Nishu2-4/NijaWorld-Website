const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const User = require("../models/User");
const { sendOtpEmail } = require("../utils/emailService");

/** Generate a cryptographically secure 6-digit plain OTP. */
function generateOtp() {
    return String(crypto.randomInt(100000, 999999));
}

/** Hash a plain OTP with SHA-256 for safe DB storage. */
function hashOtp(plain) {
    return crypto.createHash("sha256").update(plain).digest("hex");
}

// ─────────────────────────────────────────────
// @desc    Step 1 — Verify current password & send OTP to email
// @route   POST /api/users/request-change-otp
// @access  Private (JWT required)
// ─────────────────────────────────────────────
const requestChangeOtp = async (req, res, next) => {
    try {
        const { currentPassword, newPassword, confirmPassword } = req.body;

        if (!currentPassword || !newPassword || !confirmPassword) {
            return res.status(400).json({ success: false, message: "All fields are required." });
        }

        if (newPassword.length < 8) {
            return res.status(400).json({
                success: false,
                message: "New password must be at least 8 characters.",
            });
        }

        if (newPassword !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "New passwords do not match.",
            });
        }

        // Fetch user with password for verification
        const user = await User.findById(req.user._id).select("+password");
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found." });
        }

        // Verify current password first
        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Current password is incorrect.",
            });
        }

        // Prevent reusing the same password
        const isSame = await bcrypt.compare(newPassword, user.password);
        if (isSame) {
            return res.status(400).json({
                success: false,
                message: "New password must be different from the current password.",
            });
        }

        // Generate OTP and store hash + pending new password
        const plainOtp = generateOtp();
        user.otp = hashOtp(plainOtp);
        user.otpExpire = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
        user.otpPurpose = "change-password";

        await user.save({ validateBeforeSave: false });

        console.log("─────────────────────────────────────────────────");
        console.log(`🔐 CHANGE PASSWORD OTP`);
        console.log(`   User   : ${user.email}`);
        console.log(`   OTP    : ${plainOtp}`);
        console.log(`   Expires: ${user.otpExpire.toISOString()}`);
        console.log("─────────────────────────────────────────────────");

        try {
            await sendOtpEmail({
                name: user.name || "Admin",
                email: user.email,
                otp: plainOtp,
                purpose: "change-password",
            });
            console.log(`✅ Change-password OTP sent to ${user.email}`);
        } catch (emailErr) {
            console.error("❌ Failed to send OTP email:", emailErr.message);
        }

        res.status(200).json({
            success: true,
            message: "OTP sent to your registered email. It expires in 10 minutes.",
        });
    } catch (error) {
        next(error);
    }
};

// ─────────────────────────────────────────────
// @desc    Step 2 — Verify OTP and save new password
// @route   POST /api/users/verify-change-otp
// @access  Private (JWT required)
// ─────────────────────────────────────────────
const verifyChangeOtp = async (req, res, next) => {
    try {
        const { otp, newPassword, confirmPassword } = req.body;

        if (!otp || !newPassword || !confirmPassword) {
            return res.status(400).json({ success: false, message: "All fields are required." });
        }

        if (newPassword !== confirmPassword) {
            return res.status(400).json({ success: false, message: "Passwords do not match." });
        }

        // Hash the incoming OTP to compare against stored hash
        const hashedOtp = hashOtp(otp.trim());

        const user = await User.findOne({
            _id: req.user._id,
            otp: hashedOtp,
            otpPurpose: "change-password",
            otpExpire: { $gt: Date.now() },
        }).select("+otp +otpExpire +otpPurpose +password");

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Invalid or expired OTP. Please start the process again.",
            });
        }

        // Save the new password (pre-save hook hashes it)
        user.password = newPassword;
        user.otp = undefined;
        user.otpExpire = undefined;
        user.otpPurpose = undefined;

        await user.save();

        res.status(200).json({
            success: true,
            message: "Password changed successfully.",
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { requestChangeOtp, verifyChangeOtp };
