const mongoose = require("mongoose");

const contactRequestSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 120,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },
        company: {
            type: String,
            trim: true,
            maxlength: 120,
            default: "",
        },
        message: {
            type: String,
            required: true,
            trim: true,
            maxlength: 5000,
        },
        // Track email delivery
        teamEmailSent: { type: Boolean, default: false },
        userEmailSent: { type: Boolean, default: false },
        // Source IP for rate-limiting audit
        ip: { type: String, default: "" },
    },
    { timestamps: true }
);

module.exports = mongoose.model("ContactRequest", contactRequestSchema);
