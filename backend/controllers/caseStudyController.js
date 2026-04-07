const { validationResult } = require("express-validator");
const CaseStudy = require("../models/CaseStudy");

// ─────────────────────────────────────────────
// @desc    Get all case studies (public: published only, admin: all)
// @route   GET /api/case-studies
// @access  Public
// ─────────────────────────────────────────────
const getAllCaseStudies = async (req, res, next) => {
    try {
        const { page = 1, limit = 50, tag, search, status } = req.query;

        const filter = {};

        const isAuthenticated = !!req.user;
        const isAdmin = isAuthenticated && req.user.role === "admin";
        const isEditor = isAuthenticated && req.user.role === "editor";

        if (!isAuthenticated) {
            filter.status = "published";
        } else if (isEditor) {
            filter.$or = [{ status: "published" }, { createdBy: req.user._id }];
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

        const [caseStudies, total] = await Promise.all([
            CaseStudy.find(filter)
                .populate("createdBy", "name email role")
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(Number(limit)),
            CaseStudy.countDocuments(filter),
        ]);

        res.status(200).json({
            success: true,
            total,
            page: Number(page),
            pages: Math.ceil(total / Number(limit)),
            count: caseStudies.length,
            caseStudies,
        });
    } catch (error) {
        next(error);
    }
};

// ─────────────────────────────────────────────
// @desc    Get a single case study by slug
// @route   GET /api/case-studies/:slug
// @access  Public (published) / Private (own draft / admin)
// ─────────────────────────────────────────────
const getCaseStudyBySlug = async (req, res, next) => {
    try {
        const cs = await CaseStudy.findOne({ slug: req.params.slug }).populate(
            "createdBy",
            "name email role"
        );

        if (!cs) {
            return res
                .status(404)
                .json({ success: false, message: "Case study not found." });
        }

        if (cs.status === "draft") {
            if (!req.user) {
                return res
                    .status(404)
                    .json({ success: false, message: "Case study not found." });
            }
            const isOwner =
                cs.createdBy._id.toString() === req.user._id.toString();
            const isAdmin = req.user.role === "admin";
            if (!isOwner && !isAdmin) {
                return res
                    .status(403)
                    .json({ success: false, message: "Access denied." });
            }
        }

        res.status(200).json({ success: true, caseStudy: cs });
    } catch (error) {
        next(error);
    }
};

// ─────────────────────────────────────────────
// @desc    Create a new case study
// @route   POST /api/case-studies
// @access  Private (Admin, Editor)
// ─────────────────────────────────────────────
const createCaseStudy = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res
                .status(422)
                .json({ success: false, errors: errors.array() });
        }

        const {
            title,
            clientContext,
            outcomeSummary,
            industry,
            kpiHighlight,
            tags,
            executiveSummary,
            businessChallenge,
            solutionOverview,
            implementationApproach,
            results,
            whatsNext,
            status,
        } = req.body;

        // Editors always create as draft
        const assignedStatus =
            req.user.role === "editor" ? "draft" : status || "draft";

        const cs = await CaseStudy.create({
            title,
            clientContext,
            outcomeSummary,
            industry,
            kpiHighlight,
            tags: tags ? tags.map((t) => t.trim()) : [],
            executiveSummary,
            businessChallenge,
            solutionOverview,
            implementationApproach,
            results,
            whatsNext,
            status: assignedStatus,
            createdBy: req.user._id,
        });

        await cs.populate("createdBy", "name email role");

        res.status(201).json({
            success: true,
            message: "Case study created successfully.",
            caseStudy: cs,
        });
    } catch (error) {
        next(error);
    }
};

// ─────────────────────────────────────────────
// @desc    Update a case study
// @route   PUT /api/case-studies/:id
// @access  Private (Admin: any | Editor: own only)
// ─────────────────────────────────────────────
const updateCaseStudy = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res
                .status(422)
                .json({ success: false, errors: errors.array() });
        }

        const cs = await CaseStudy.findById(req.params.id);

        if (!cs) {
            return res
                .status(404)
                .json({ success: false, message: "Case study not found." });
        }

        const isAdmin = req.user.role === "admin";
        const isOwner =
            cs.createdBy.toString() === req.user._id.toString();

        if (!isAdmin && !isOwner) {
            return res.status(403).json({
                success: false,
                message: "Access denied. You can only edit your own case studies.",
            });
        }

        const {
            title,
            clientContext,
            outcomeSummary,
            industry,
            kpiHighlight,
            tags,
            executiveSummary,
            businessChallenge,
            solutionOverview,
            implementationApproach,
            results,
            whatsNext,
            status,
        } = req.body;

        if (!isAdmin && status === "published") {
            return res.status(403).json({
                success: false,
                message:
                    "Editors cannot publish case studies. Contact an admin.",
            });
        }

        if (title !== undefined) cs.title = title;
        if (clientContext !== undefined) cs.clientContext = clientContext;
        if (outcomeSummary !== undefined) cs.outcomeSummary = outcomeSummary;
        if (industry !== undefined) cs.industry = industry;
        if (kpiHighlight !== undefined) cs.kpiHighlight = kpiHighlight;
        if (tags !== undefined) cs.tags = tags.map((t) => t.trim());
        if (executiveSummary !== undefined) cs.executiveSummary = executiveSummary;
        if (businessChallenge !== undefined) cs.businessChallenge = businessChallenge;
        if (solutionOverview !== undefined) cs.solutionOverview = solutionOverview;
        if (implementationApproach !== undefined)
            cs.implementationApproach = implementationApproach;
        if (results !== undefined) cs.results = results;
        if (whatsNext !== undefined) cs.whatsNext = whatsNext;
        if (status !== undefined && isAdmin) cs.status = status;

        await cs.save();
        await cs.populate("createdBy", "name email role");

        res.status(200).json({
            success: true,
            message: "Case study updated successfully.",
            caseStudy: cs,
        });
    } catch (error) {
        next(error);
    }
};

// ─────────────────────────────────────────────
// @desc    Delete a case study
// @route   DELETE /api/case-studies/:id
// @access  Private (Admin only)
// ─────────────────────────────────────────────
const deleteCaseStudy = async (req, res, next) => {
    try {
        const cs = await CaseStudy.findById(req.params.id);

        if (!cs) {
            return res
                .status(404)
                .json({ success: false, message: "Case study not found." });
        }

        await cs.deleteOne();

        res.status(200).json({
            success: true,
            message: "Case study deleted successfully.",
        });
    } catch (error) {
        next(error);
    }
};

// ─────────────────────────────────────────────
// @desc    Toggle publish / unpublish
// @route   PATCH /api/case-studies/:id/publish
// @access  Private (Admin only)
// ─────────────────────────────────────────────
const togglePublish = async (req, res, next) => {
    try {
        const cs = await CaseStudy.findById(req.params.id);

        if (!cs) {
            return res
                .status(404)
                .json({ success: false, message: "Case study not found." });
        }

        cs.status = cs.status === "published" ? "draft" : "published";
        await cs.save();

        res.status(200).json({
            success: true,
            message: `Case study ${cs.status === "published" ? "published" : "unpublished"
                } successfully.`,
            status: cs.status,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllCaseStudies,
    getCaseStudyBySlug,
    createCaseStudy,
    updateCaseStudy,
    deleteCaseStudy,
    togglePublish,
};
