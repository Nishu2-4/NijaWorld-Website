const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const {
    getAllCaseStudies,
    getCaseStudyBySlug,
    createCaseStudy,
    updateCaseStudy,
    deleteCaseStudy,
    togglePublish,
} = require("../controllers/caseStudyController");
const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

// Validation for create
const csCreateValidation = [
    body("title")
        .trim()
        .notEmpty()
        .withMessage("Title is required.")
        .isLength({ min: 5, max: 200 })
        .withMessage("Title must be between 5 and 200 characters."),
    body("tags").optional().isArray().withMessage("Tags must be an array."),
    body("status")
        .optional()
        .isIn(["draft", "published"])
        .withMessage("Status must be draft or published."),
];

// Validation for update (all optional)
const csUpdateValidation = [
    body("title")
        .optional()
        .trim()
        .isLength({ min: 5, max: 200 })
        .withMessage("Title must be between 5 and 200 characters."),
    body("tags").optional().isArray().withMessage("Tags must be an array."),
    body("status")
        .optional()
        .isIn(["draft", "published"])
        .withMessage("Status must be draft or published."),
];

// ─────────────────────────────────────────────
// Public Routes
// ─────────────────────────────────────────────

// GET /api/case-studies — list (with optional auth for editors)
router.get("/", (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
        protect(req, res, () => getAllCaseStudies(req, res, next));
    } else {
        getAllCaseStudies(req, res, next);
    }
});

// GET /api/case-studies/:slug — single by slug
router.get("/:slug", (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
        protect(req, res, () => getCaseStudyBySlug(req, res, next));
    } else {
        getCaseStudyBySlug(req, res, next);
    }
});

// ─────────────────────────────────────────────
// Protected Routes
// ─────────────────────────────────────────────

// POST /api/case-studies — create (admin or editor)
router.post(
    "/",
    protect,
    authorize("admin", "editor"),
    csCreateValidation,
    createCaseStudy
);

// PUT /api/case-studies/:id — update (admin: any, editor: own)
router.put(
    "/:id",
    protect,
    authorize("admin", "editor"),
    csUpdateValidation,
    updateCaseStudy
);

// DELETE /api/case-studies/:id — admin only
router.delete("/:id", protect, authorize("admin"), deleteCaseStudy);

// PATCH /api/case-studies/:id/publish — admin only
router.patch("/:id/publish", protect, authorize("admin"), togglePublish);

module.exports = router;
