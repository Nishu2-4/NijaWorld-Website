const { validationResult } = require("express-validator");
const Blog = require("../models/Blog");

// ─────────────────────────────────────────────
// @desc    Get all published blogs (public) — with pagination & filtering
// @route   GET /api/blogs
// @access  Public
// ─────────────────────────────────────────────
const getAllBlogs = async (req, res, next) => {
    try {
        const { page = 1, limit = 10, tag, search, status } = req.query;

        // Build filter object
        const filter = {};

        // Public users only see published blogs; authenticated users: admin can see all, editor sees own
        const isAuthenticated = !!req.user;
        const isAdmin = isAuthenticated && req.user.role === "admin";
        const isEditor = isAuthenticated && req.user.role === "editor";

        if (!isAuthenticated) {
            filter.status = "published";
        } else if (isEditor) {
            // Editors see published blogs + their own drafts
            filter.$or = [{ status: "published" }, { author: req.user._id }];
        }
        // Admin sees everything (no filter on status unless explicitly requested)
        if (isAdmin && status) {
            filter.status = status;
        }

        if (tag) {
            filter.tags = { $in: [tag.toLowerCase()] };
        }

        if (search) {
            filter.$text = { $search: search };
        }

        const skip = (Number(page) - 1) * Number(limit);

        const [blogs, total] = await Promise.all([
            Blog.find(filter)
                .populate("author", "name email role")
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(Number(limit)),
            Blog.countDocuments(filter),
        ]);

        res.status(200).json({
            success: true,
            total,
            page: Number(page),
            pages: Math.ceil(total / Number(limit)),
            count: blogs.length,
            blogs,
        });
    } catch (error) {
        next(error);
    }
};

// ─────────────────────────────────────────────
// @desc    Get a single blog by slug
// @route   GET /api/blogs/:slug
// @access  Public (published only) / Private (own draft)
// ─────────────────────────────────────────────
const getBlogBySlug = async (req, res, next) => {
    try {
        const blog = await Blog.findOne({ slug: req.params.slug }).populate(
            "author",
            "name email role"
        );

        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found." });
        }

        // Draft visibility: only the author or admin can view drafts
        if (blog.status === "draft") {
            if (!req.user) {
                return res.status(404).json({ success: false, message: "Blog not found." });
            }
            const isOwner = blog.author._id.toString() === req.user._id.toString();
            const isAdmin = req.user.role === "admin";
            if (!isOwner && !isAdmin) {
                return res.status(403).json({ success: false, message: "Access denied." });
            }
        }

        res.status(200).json({ success: true, blog });
    } catch (error) {
        next(error);
    }
};

// ─────────────────────────────────────────────
// @desc    Create a new blog
// @route   POST /api/blogs
// @access  Private (Admin, Editor)
// ─────────────────────────────────────────────
const createBlog = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ success: false, errors: errors.array() });
        }

        const { title, content, excerpt, tags, status, coverImage } = req.body;

        // Editors can only create drafts (admins can publish directly)
        const assignedStatus =
            req.user.role === "editor" ? "draft" : status || "draft";

        const blog = await Blog.create({
            title,
            content,
            excerpt,
            tags: tags ? tags.map((t) => t.toLowerCase().trim()) : [],
            status: assignedStatus,
            coverImage: coverImage || null,
            author: req.user._id,
        });

        await blog.populate("author", "name email role");

        res.status(201).json({
            success: true,
            message: "Blog created successfully.",
            blog,
        });
    } catch (error) {
        next(error);
    }
};

// ─────────────────────────────────────────────
// @desc    Update a blog
// @route   PUT /api/blogs/:id
// @access  Private (Admin: any | Editor: own only)
// ─────────────────────────────────────────────
const updateBlog = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ success: false, errors: errors.array() });
        }

        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found." });
        }

        const isAdmin = req.user.role === "admin";
        const isOwner = blog.author.toString() === req.user._id.toString();

        if (!isAdmin && !isOwner) {
            return res.status(403).json({
                success: false,
                message: "Access denied. You can only edit your own blogs.",
            });
        }

        const { title, content, excerpt, tags, status, coverImage } = req.body;

        // Editors cannot publish — only admins can change status to published
        if (!isAdmin && status === "published") {
            return res.status(403).json({
                success: false,
                message: "Editors cannot publish blogs. Contact an admin to publish.",
            });
        }

        if (title !== undefined) blog.title = title;
        if (content !== undefined) blog.content = content;
        if (excerpt !== undefined) blog.excerpt = excerpt;
        if (tags !== undefined) blog.tags = tags.map((t) => t.toLowerCase().trim());
        if (status !== undefined && isAdmin) blog.status = status;
        if (coverImage !== undefined) blog.coverImage = coverImage;

        await blog.save();
        await blog.populate("author", "name email role");

        res.status(200).json({
            success: true,
            message: "Blog updated successfully.",
            blog,
        });
    } catch (error) {
        next(error);
    }
};

// ─────────────────────────────────────────────
// @desc    Delete a blog
// @route   DELETE /api/blogs/:id
// @access  Private (Admin only)
// ─────────────────────────────────────────────
const deleteBlog = async (req, res, next) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found." });
        }

        await blog.deleteOne();

        res.status(200).json({
            success: true,
            message: "Blog deleted successfully.",
        });
    } catch (error) {
        next(error);
    }
};

// ─────────────────────────────────────────────
// @desc    Toggle publish/unpublish
// @route   PATCH /api/blogs/:id/publish
// @access  Private (Admin only)
// ─────────────────────────────────────────────
const togglePublish = async (req, res, next) => {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({ success: false, message: "Blog not found." });
        }

        blog.status = blog.status === "published" ? "draft" : "published";
        await blog.save();

        res.status(200).json({
            success: true,
            message: `Blog ${blog.status === "published" ? "published" : "unpublished"} successfully.`,
            status: blog.status,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllBlogs,
    getBlogBySlug,
    createBlog,
    updateBlog,
    deleteBlog,
    togglePublish,
};
