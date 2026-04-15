const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { requestChangeOtp, verifyChangeOtp } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

// Step 1: Verify current password + send OTP
router.post("/request-change-otp", protect, requestChangeOtp);

// Step 2: Verify OTP + save new password
router.post("/verify-change-otp", protect, verifyChangeOtp);

module.exports = router;
