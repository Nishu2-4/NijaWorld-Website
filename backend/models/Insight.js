const mongoose = require("mongoose");
const slugify = require("slugify");

const insightSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Insight title is required"],
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
        category: {
            type: String,
            trim: true,
            default: "",
        },
        readTime: {
            type: String,
            trim: true,
            default: "",
        },
        heroHeadline: {
            type: String,
            trim: true,
            default: "",
        },
        excerpt: {
            type: String,
            trim: true,
            maxlength: [500, "Excerpt cannot exceed 500 characters"],
            default: "",
        },
        content: {
            type: String,
            required: [true, "Content is required"],
            minlength: [20, "Content must be at least 20 characters"],
        },
        tags: {
            type: [String],
            default: [],
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: null,
        },
        status: {
            type: String,
            enum: {
                values: ["draft", "published"],
                message: "Status must be draft or published",
            },
            default: "draft",
        },
        ctaLinks: {
            type: [
                {
                    label: { type: String, trim: true },
                    href: { type: String, trim: true },
                    variant: {
                        type: String,
                        enum: ["primary", "outline"],
                        default: "outline",
                    },
                },
            ],
            default: [],
        },
        publishedAt: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    }
);

// --- Pre-save hook: auto-generate unique slug from title ---
insightSchema.pre("save", async function (next) {
    // Auto-generate slug only if title changed and no manual slug set
    if (this.isModified("title") && !this.isModified("slug")) {
        let baseSlug = slugify(this.title, { lower: true, strict: true });
        let slug = baseSlug;
        let counter = 1;

        while (
            await mongoose
                .model("Insight")
                .findOne({ slug, _id: { $ne: this._id } })
        ) {
            slug = `${baseSlug}-${counter}`;
            counter++;
        }
        this.slug = slug;
    }

    // Set publishedAt when first published
    if (
        this.isModified("status") &&
        this.status === "published" &&
        !this.publishedAt
    ) {
        this.publishedAt = new Date();
    }

    next();
});

insightSchema.set("toJSON", { virtuals: true });
insightSchema.set("toObject", { virtuals: true });

// Text index for search
insightSchema.index({ title: "text", content: "text", tags: "text" });

module.exports = mongoose.model("Insight", insightSchema);
