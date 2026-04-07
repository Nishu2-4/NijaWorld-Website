const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { changePassword } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

// Validation rules
const changePasswordValidation = [
    body("currentPassword").notEmpty().withMessage("Current password is required."),
    body("newPassword")
        .isLength({ min: 8 })
        .withMessage("New password must be at least 8 characters."),
    body("confirmPassword").notEmpty().withMessage("Confirm password is required."),
];

// Routes
router.put("/change-password", protect, changePasswordValidation, changePassword);

module.exports = router;
