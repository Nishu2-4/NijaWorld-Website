const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const {
    getAllBlogs,
    getBlogBySlug,
    createBlog,
    updateBlog,
    deleteBlog,
    togglePublish,
} = require("../controllers/blogController");
const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

// Validation rules for create/update
const blogValidation = [
    body("title")
        .trim()
        .notEmpty()
        .withMessage("Title is required.")
        .isLength({ min: 5, max: 150 })
        .withMessage("Title must be between 5 and 150 characters."),
    body("content")
        .trim()
        .notEmpty()
        .withMessage("Content is required.")
        .isLength({ min: 20 })
        .withMessage("Content must be at least 20 characters."),
    body("excerpt")
        .optional()
        .trim()
        .isLength({ max: 300 })
        .withMessage("Excerpt cannot exceed 300 characters."),
    body("tags")
        .optional()
        .isArray()
        .withMessage("Tags must be an array."),
    body("status")
        .optional()
        .isIn(["draft", "published"])
        .withMessage("Status must be draft or published."),
];

const updateBlogValidation = [
    body("title")
        .optional()
        .trim()
        .isLength({ min: 5, max: 150 })
        .withMessage("Title must be between 5 and 150 characters."),
    body("content")
        .optional()
        .trim()
        .isLength({ min: 20 })
        .withMessage("Content must be at least 20 characters."),
    body("excerpt")
        .optional()
        .trim()
        .isLength({ max: 300 })
        .withMessage("Excerpt cannot exceed 300 characters."),
    body("tags")
        .optional()
        .isArray()
        .withMessage("Tags must be an array."),
    body("status")
        .optional()
        .isIn(["draft", "published"])
        .withMessage("Status must be draft or published."),
];

// ─────────────────────────────────────────────
// Public Routes (no auth required)
// ─────────────────────────────────────────────

// GET /api/blogs         - list all published blogs (with optional ?status= for admins)
// Uses optional auth to allow editors to see their drafts in listing
router.get("/", (req, res, next) => {
    // Optionally attach user if token provided — non-blocking
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
        protect(req, res, () => getAllBlogs(req, res, next));
    } else {
        getAllBlogs(req, res, next);
    }
});

// GET /api/blogs/:slug   - get single blog by slug
router.get("/:slug", (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
        protect(req, res, () => getBlogBySlug(req, res, next));
    } else {
        getBlogBySlug(req, res, next);
    }
});

// ─────────────────────────────────────────────
// Protected Routes
// ─────────────────────────────────────────────

// POST /api/blogs           - create blog (admin or editor)
router.post("/", protect, authorize("admin", "editor"), blogValidation, createBlog);

// PUT /api/blogs/:id        - update blog (admin: any, editor: own only)
router.put("/:id", protect, authorize("admin", "editor"), updateBlogValidation, updateBlog);

// DELETE /api/blogs/:id     - delete blog (admin only)
router.delete("/:id", protect, authorize("admin"), deleteBlog);

// PATCH /api/blogs/:id/publish - toggle publish status (admin only)
router.patch("/:id/publish", protect, authorize("admin"), togglePublish);

module.exports = router;
