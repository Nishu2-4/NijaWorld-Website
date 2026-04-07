const mongoose = require("mongoose");
const slugify = require("slugify");

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Blog title is required"],
            trim: true,
            minlength: [5, "Title must be at least 5 characters"],
            maxlength: [150, "Title cannot exceed 150 characters"],
        },
        slug: {
            type: String,
            unique: true,
            lowercase: true,
            trim: true,
        },
        content: {
            type: String,
            required: [true, "Blog content is required"],
            minlength: [20, "Content must be at least 20 characters"],
        },
        excerpt: {
            type: String,
            trim: true,
            maxlength: [300, "Excerpt cannot exceed 300 characters"],
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: [true, "Blog author is required"],
        },
        status: {
            type: String,
            enum: {
                values: ["draft", "published"],
                message: "Status must be draft or published",
            },
            default: "draft",
        },
        tags: {
            type: [String],
            default: [],
        },
        coverImage: {
            type: String,
            default: null,
        },
    },
    {
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    }
);

// --- Pre-save hook: auto-generate unique slug from title ---
blogSchema.pre("save", async function (next) {
    if (!this.isModified("title")) return next();

    let baseSlug = slugify(this.title, { lower: true, strict: true });
    let slug = baseSlug;
    let counter = 1;

    // Ensure slug uniqueness
    while (await mongoose.model("Blog").findOne({ slug, _id: { $ne: this._id } })) {
        slug = `${baseSlug}-${counter}`;
        counter++;
    }

    this.slug = slug;
    next();
});

// --- Virtual: populate author details on query ---
blogSchema.set("toJSON", { virtuals: true });
blogSchema.set("toObject", { virtuals: true });

// --- Text index for search ---
blogSchema.index({ title: "text", content: "text", tags: "text" });

module.exports = mongoose.model("Blog", blogSchema);
