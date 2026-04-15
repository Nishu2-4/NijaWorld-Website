const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const {
    login,
    verifyLoginOtp,
    register,
    getMe,
    getAllUsers,
    toggleUserStatus,
    sendForgotPasswordOtp,
    verifyOtpAndReset,
} = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");


// Validation rules
const loginValidation = [
    body("email").isEmail().withMessage("Please enter a valid email.").normalizeEmail(),
    body("password").notEmpty().withMessage("Password is required."),
];

const registerValidation = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required.")
        .isLength({ min: 2, max: 50 })
        .withMessage("Name must be between 2 and 50 characters."),
    body("email")
        .isEmail()
        .withMessage("Please enter a valid email.")
        .normalizeEmail(),
    body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters."),
    body("role")
        .optional()
        .isIn(["admin", "editor"])
        .withMessage("Role must be admin or editor."),
];

// Routes
router.post("/login", loginValidation, login);
router.post("/verify-login-otp", verifyLoginOtp); // Step 2: complete login with OTP
router.post("/register", protect, authorize("admin"), registerValidation, register);
router.get("/me", protect, getMe);

// User management (admin)
router.get("/users", protect, authorize("admin"), getAllUsers);
router.patch("/users/:id/toggle", protect, authorize("admin"), toggleUserStatus);

// OTP-based password reset flow (public — no auth required)
router.post("/send-otp", sendForgotPasswordOtp);
router.post("/verify-otp-reset", verifyOtpAndReset);

module.exports = router;
