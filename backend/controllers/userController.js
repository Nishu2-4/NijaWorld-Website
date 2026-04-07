const bcrypt = require("bcryptjs");
const User = require("../models/User");

// ─────────────────────────────────────────────
// @desc    Change own password (authenticated)
// @route   PUT /api/users/change-password
// @access  Private (JWT required)
// ─────────────────────────────────────────────
const changePassword = async (req, res, next) => {
    try {
        const { currentPassword, newPassword, confirmPassword } = req.body;

        // ── Basic field validation ────────────────────────────────
        if (!currentPassword || !newPassword || !confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "All fields are required.",
            });
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

        // ── Fetch user with password field ───────────────────────
        const user = await User.findById(req.user._id).select("+password");

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found." });
        }

        // ── Verify current password ──────────────────────────────
        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Current password is incorrect.",
            });
        }

        // ── Prevent reuse of same password ───────────────────────
        const isSame = await bcrypt.compare(newPassword, user.password);
        if (isSame) {
            return res.status(400).json({
                success: false,
                message: "New password must be different from the current password.",
            });
        }

        // ── Hash and save new password ───────────────────────────
        // The pre-save hook in User.js handles hashing automatically
        user.password = newPassword;
        await user.save();

        res.status(200).json({
            success: true,
            message: "Password changed successfully.",
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { changePassword };
