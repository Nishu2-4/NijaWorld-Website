const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const {
    getAllInsights,
    getInsightBySlug,
    createInsight,
    updateInsight,
    deleteInsight,
    togglePublish,
} = require("../controllers/insightController");
const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

// ── Validation ────────────────────────────────────────
const createValidation = [
    body("title")
        .trim()
        .notEmpty()
        .withMessage("Title is required.")
        .isLength({ min: 5, max: 200 })
        .withMessage("Title must be between 5 and 200 characters."),
    body("content")
        .trim()
        .notEmpty()
        .withMessage("Content is required.")
        .isLength({ min: 20 })
        .withMessage("Content must be at least 20 characters."),
    body("excerpt")
        .optional()
        .trim()
        .isLength({ max: 500 })
        .withMessage("Excerpt cannot exceed 500 characters."),
    body("tags").optional().isArray().withMessage("Tags must be an array."),
    body("status")
        .optional()
        .isIn(["draft", "published"])
        .withMessage("Status must be draft or published."),
    body("ctaLinks").optional().isArray().withMessage("ctaLinks must be an array."),
];

const updateValidation = [
    body("title")
        .optional()
        .trim()
        .isLength({ min: 5, max: 200 })
        .withMessage("Title must be between 5 and 200 characters."),
    body("content")
        .optional()
        .trim()
        .isLength({ min: 20 })
        .withMessage("Content must be at least 20 characters."),
    body("excerpt")
        .optional()
        .trim()
        .isLength({ max: 500 })
        .withMessage("Excerpt cannot exceed 500 characters."),
    body("tags").optional().isArray().withMessage("Tags must be an array."),
    body("status")
        .optional()
        .isIn(["draft", "published"])
        .withMessage("Status must be draft or published."),
    body("ctaLinks").optional().isArray().withMessage("ctaLinks must be an array."),
];

// ── Optional-auth helper ──────────────────────────────
const optionalAuth = (handler) => (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
        protect(req, res, () => handler(req, res, next));
    } else {
        handler(req, res, next);
    }
};

// ── Public Routes ─────────────────────────────────────
router.get("/", optionalAuth(getAllInsights));
router.get("/:slug", optionalAuth(getInsightBySlug));

// ── Protected Routes ──────────────────────────────────
router.post("/", protect, authorize("admin", "editor"), createValidation, createInsight);
router.put("/:id", protect, authorize("admin", "editor"), updateValidation, updateInsight);
router.delete("/:id", protect, authorize("admin"), deleteInsight);
router.patch("/:id/publish", protect, authorize("admin"), togglePublish);

module.exports = router;
