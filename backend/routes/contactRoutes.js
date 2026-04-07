const express = require("express");
const rateLimit = require("express-rate-limit");
const { body } = require("express-validator");
const { submitContact, getContacts, deleteContact } = require("../controllers/contactController");
const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

const router = express.Router();

// ── Rate limiter: max 5 submissions per IP per 15 minutes ─────────────
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        success: false,
        message: "Too many requests from this IP. Please wait 15 minutes before submitting again.",
    },
});

// ── Validation rules ──────────────────────────────────────────────────
const contactValidation = [
    body("name")
        .trim()
        .notEmpty().withMessage("Full name is required.")
        .isLength({ max: 120 }).withMessage("Name must be under 120 characters.")
        .escape(),
    body("email")
        .trim()
        .notEmpty().withMessage("Work email is required.")
        .isEmail().withMessage("Please enter a valid email address.")
        .normalizeEmail(),
    body("company")
        .optional()
        .trim()
        .isLength({ max: 120 }).withMessage("Company name must be under 120 characters.")
        .escape(),
    body("message")
        .trim()
        .notEmpty().withMessage("Message is required.")
        .isLength({ min: 10, max: 5000 }).withMessage("Message must be between 10 and 5000 characters.")
        .escape(),
];

// ── Routes ─────────────────────────────────────────────────────────────
router.post("/", contactLimiter, contactValidation, submitContact);

// Admin: list all contact submissions
router.get("/", protect, authorize("admin"), getContacts);

// Admin: delete a single contact submission
router.delete("/:id", protect, authorize("admin"), deleteContact);

module.exports = router;
