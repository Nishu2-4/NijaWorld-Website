const { validationResult } = require("express-validator");
const Insight = require("../models/Insight");

// ─────────────────────────────────────────────
// @desc    Get all insights — with pagination & filtering
// @route   GET /api/insights
// @access  Public (published only) / Admin (all) / Editor (own + published)
// ─────────────────────────────────────────────
const getAllInsights = async (req, res, next) => {
    try {
        const { page = 1, limit = 50, tag, search, status } = req.query;

        const filter = {};

        const isAuthenticated = !!req.user;
        const isAdmin = isAuthenticated && req.user.role === "admin";
        const isEditor = isAuthenticated && req.user.role === "editor";

        if (!isAuthenticated) {
            filter.status = "published";
        } else if (isEditor) {
            filter.$or = [{ status: "published" }, { author: req.user._id }];
        }

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

        const [insights, total] = await Promise.all([
            Insight.find(filter)
                .populate("author", "name email role")
                .sort({ publishedAt: -1, createdAt: -1 })
                .skip(skip)
                .limit(Number(limit)),
            Insight.countDocuments(filter),
        ]);

        res.status(200).json({
            success: true,
            total,
            page: Number(page),
            pages: Math.ceil(total / Number(limit)),
            count: insights.length,
            insights,
        });
    } catch (error) {
        next(error);
    }
};

// ─────────────────────────────────────────────
// @desc    Get a single insight by slug
// @route   GET /api/insights/:slug
// @access  Public (published) / Private (own draft or admin)
// ─────────────────────────────────────────────
const getInsightBySlug = async (req, res, next) => {
    try {
        const insight = await Insight.findOne({
            slug: req.params.slug,
        }).populate("author", "name email role");

        if (!insight) {
            return res
                .status(404)
                .json({ success: false, message: "Insight not found." });
        }

        if (insight.status === "draft") {
            if (!req.user) {
                return res
                    .status(404)
                    .json({ success: false, message: "Insight not found." });
            }
            const isOwner =
                insight.author &&
                insight.author._id.toString() === req.user._id.toString();
            const isAdmin = req.user.role === "admin";
            if (!isOwner && !isAdmin) {
                return res
                    .status(403)
                    .json({ success: false, message: "Access denied." });
            }
        }

        res.status(200).json({ success: true, insight });
    } catch (error) {
        next(error);
    }
};

// ─────────────────────────────────────────────
// @desc    Create a new insight
// @route   POST /api/insights
// @access  Private (Admin, Editor)
// ─────────────────────────────────────────────
const createInsight = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res
                .status(422)
                .json({ success: false, errors: errors.array() });
        }

        const {
            title,
            slug,
            category,
            readTime,
            heroHeadline,
            excerpt,
            content,
            tags,
            status,
            ctaLinks,
        } = req.body;

        // Editors can only create drafts
        const assignedStatus =
            req.user.role === "editor" ? "draft" : status || "draft";

        const insightData = {
            title,
            category: category || "",
            readTime: readTime || "",
            heroHeadline: heroHeadline || "",
            excerpt: excerpt || "",
            content,
            tags: tags ? tags.map((t) => t.toLowerCase().trim()) : [],
            status: assignedStatus,
            ctaLinks: ctaLinks || [],
            author: req.user._id,
        };

        // Allow manual slug override
        if (slug && slug.trim()) {
            insightData.slug = slug.trim().toLowerCase();
        }

        const insight = await Insight.create(insightData);
        await insight.populate("author", "name email role");

        res.status(201).json({
            success: true,
            message: "Insight created successfully.",
            insight,
        });
    } catch (error) {
        next(error);
    }
};

// ─────────────────────────────────────────────
// @desc    Update an insight
// @route   PUT /api/insights/:id
// @access  Private (Admin: any | Editor: own only)
// ─────────────────────────────────────────────
const updateInsight = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res
                .status(422)
                .json({ success: false, errors: errors.array() });
        }

        const insight = await Insight.findById(req.params.id);

        if (!insight) {
            return res
                .status(404)
                .json({ success: false, message: "Insight not found." });
        }

        const isAdmin = req.user.role === "admin";
        const isOwner =
            insight.author &&
            insight.author.toString() === req.user._id.toString();

        if (!isAdmin && !isOwner) {
            return res.status(403).json({
                success: false,
                message:
                    "Access denied. You can only edit your own insights.",
            });
        }

        const {
            title,
            slug,
            category,
            readTime,
            heroHeadline,
            excerpt,
            content,
            tags,
            status,
            ctaLinks,
        } = req.body;

        // Editors cannot publish
        if (!isAdmin && status === "published") {
            return res.status(403).json({
                success: false,
                message:
                    "Editors cannot publish insights. Contact an admin to publish.",
            });
        }

        if (title !== undefined) insight.title = title;
        if (slug !== undefined && isAdmin) insight.slug = slug.trim().toLowerCase();
        if (category !== undefined) insight.category = category;
        if (readTime !== undefined) insight.readTime = readTime;
        if (heroHeadline !== undefined) insight.heroHeadline = heroHeadline;
        if (excerpt !== undefined) insight.excerpt = excerpt;
        if (content !== undefined) insight.content = content;
        if (tags !== undefined)
            insight.tags = tags.map((t) => t.toLowerCase().trim());
        if (status !== undefined && isAdmin) insight.status = status;
        if (ctaLinks !== undefined) insight.ctaLinks = ctaLinks;

        await insight.save();
        await insight.populate("author", "name email role");

        res.status(200).json({
            success: true,
            message: "Insight updated successfully.",
            insight,
        });
    } catch (error) {
        next(error);
    }
};

// ─────────────────────────────────────────────
// @desc    Delete an insight
// @route   DELETE /api/insights/:id
// @access  Private (Admin only)
// ─────────────────────────────────────────────
const deleteInsight = async (req, res, next) => {
    try {
        const insight = await Insight.findById(req.params.id);

        if (!insight) {
            return res
                .status(404)
                .json({ success: false, message: "Insight not found." });
        }

        await insight.deleteOne();

        res.status(200).json({
            success: true,
            message: "Insight deleted successfully.",
        });
    } catch (error) {
        next(error);
    }
};

// ─────────────────────────────────────────────
// @desc    Toggle publish/unpublish
// @route   PATCH /api/insights/:id/publish
// @access  Private (Admin only)
// ─────────────────────────────────────────────
const togglePublish = async (req, res, next) => {
    try {
        const insight = await Insight.findById(req.params.id);

        if (!insight) {
            return res
                .status(404)
                .json({ success: false, message: "Insight not found." });
        }

        insight.status = insight.status === "published" ? "draft" : "published";
        if (insight.status === "published" && !insight.publishedAt) {
            insight.publishedAt = new Date();
        }
        await insight.save();

        res.status(200).json({
            success: true,
            message: `Insight ${insight.status === "published" ? "published" : "unpublished"
                } successfully.`,
            status: insight.status,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllInsights,
    getInsightBySlug,
    createInsight,
    updateInsight,
    deleteInsight,
    togglePublish,
};
