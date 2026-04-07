const { validationResult } = require("express-validator");
const ContactRequest = require("../models/ContactRequest");
const mongoose = require("mongoose");
const { sendTeamNotification, sendUserConfirmation } = require("../utils/emailService");

/**
 * POST /api/contact
 * Public endpoint — no authentication required.
 */
exports.submitContact = async (req, res) => {
    // Validation errors from express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            message: "Please fix the form errors below.",
            errors: errors.array().map((e) => ({ field: e.path, msg: e.msg })),
        });
    }

    const { name, email, company = "", message } = req.body;
    const ip = req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress || "";

    // 1. Save to database
    let submission;
    try {
        submission = await ContactRequest.create({ name, email, company, message, ip });
    } catch (err) {
        console.error("[Contact] DB save failed:", err.message);
        return res.status(500).json({ success: false, message: "Failed to save your request. Please try again." });
    }

    // 2. Send team notification (non-blocking: don't fail the response if email errors)
    let teamEmailSent = false;
    let userEmailSent = false;

    try {
        await sendTeamNotification({ name, email, company, message });
        teamEmailSent = true;
    } catch (err) {
        console.error("[Contact] Team email failed:", err.message);
    }

    // 3. Send user confirmation
    try {
        await sendUserConfirmation({ name, email });
        userEmailSent = true;
    } catch (err) {
        console.error("[Contact] User confirmation email failed:", err.message);
    }

    // 4. Update email delivery status
    submission.teamEmailSent = teamEmailSent;
    submission.userEmailSent = userEmailSent;
    await submission.save().catch(() => {}); // best-effort

    return res.status(201).json({
        success: true,
        message: "Your request has been received. A confirmation email has been sent.",
        emailsSent: { team: teamEmailSent, user: userEmailSent },
    });
};

/**
 * GET /api/contact
 * Admin-only: retrieve all contact submissions, newest first, paginated.
 */
exports.getContacts = async (req, res) => {
    const page  = Math.max(1, parseInt(req.query.page)  || 1);
    const limit = Math.min(100, parseInt(req.query.limit) || 20);
    const skip  = (page - 1) * limit;

    try {
        const [contacts, total] = await Promise.all([
            ContactRequest.find()
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limit)
                .lean(),
            ContactRequest.countDocuments(),
        ]);

        return res.status(200).json({
            success: true,
            total,
            page,
            pages: Math.ceil(total / limit),
            contacts,
        });
    } catch (err) {
        console.error("[Contact] getContacts error:", err.message);
        return res.status(500).json({ success: false, message: "Failed to fetch contacts." });
    }
};

/**
 * DELETE /api/contact/:id
 * Admin-only: permanently remove a contact submission.
 */
exports.deleteContact = async (req, res) => {
    try {
        const contact = await ContactRequest.findByIdAndDelete(req.params.id);
        if (!contact) {
            return res.status(404).json({ success: false, message: "Contact submission not found." });
        }
        return res.status(200).json({ success: true, message: "Contact deleted successfully." });
    } catch (err) {
        console.error("[Contact] deleteContact error:", err.message);
        return res.status(500).json({ success: false, message: "Failed to delete contact." });
    }
};
