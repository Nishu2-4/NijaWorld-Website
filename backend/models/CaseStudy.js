const mongoose = require("mongoose");
const slugify = require("slugify");

const caseStudySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Case study title is required"],
            trim: true,
            minlength: [5, "Title must be at least 5 characters"],
            maxlength: [200, "Title cannot exceed 200 characters"],
        },
        slug: {
            type: String,
            unique: true,
            lowercase: true,
            trim: true,
        },
        clientContext: {
            type: String,
            trim: true,
            default: "",
        },
        outcomeSummary: {
            type: String,
            trim: true,
            default: "",
        },
        industry: {
            type: String,
            trim: true,
            default: "",
        },
        kpiHighlight: {
            type: String,
            trim: true,
            default: "",
        },
        tags: {
            type: [String],
            default: [],
        },
        executiveSummary: {
            type: String,
            default: "",
        },
        businessChallenge: {
            type: String,
            default: "",
        },
        solutionOverview: {
            type: String,
            default: "",
        },
        implementationApproach: {
            type: String,
            default: "",
        },
        results: {
            type: String,
            default: "",
        },
        whatsNext: {
            type: String,
            default: "",
        },
        status: {
            type: String,
            enum: {
                values: ["draft", "published"],
                message: "Status must be draft or published",
            },
            default: "draft",
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: [true, "Creator is required"],
        },
    },
    {
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    }
);

// --- Pre-save hook: auto-generate unique slug from title ---
caseStudySchema.pre("save", async function (next) {
    if (!this.isModified("title")) return next();

    let baseSlug = slugify(this.title, { lower: true, strict: true });
    let slug = baseSlug;
    let counter = 1;

    while (
        await mongoose
            .model("CaseStudy")
            .findOne({ slug, _id: { $ne: this._id } })
    ) {
        slug = `${baseSlug}-${counter}`;
        counter++;
    }

    this.slug = slug;
    next();
});

caseStudySchema.set("toJSON", { virtuals: true });
caseStudySchema.set("toObject", { virtuals: true });

// Text index for search
caseStudySchema.index({ title: "text", industry: "text", tags: "text" });

module.exports = mongoose.model("CaseStudy", caseStudySchema);
