const nodemailer = require("nodemailer");

/**
 * Create a transporter using SMTP credentials from environment variables.
 * Configure SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in your .env file.
 */
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10) || 587,
    secure: parseInt(process.env.SMTP_PORT, 10) === 465, // true for port 465, false for 587
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

const FROM = process.env.EMAIL_FROM || "reach@nija.world";
const TEAM_EMAIL = process.env.SMTP_USER || "reach@nija.world";

/**
 * Sends a notification email to the Nija World team.
 */
async function sendTeamNotification({ name, email, company, message }) {
    const timestamp = new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "full",
        timeStyle: "short",
    });

    await transporter.sendMail({
        from: `"Nija World Website" <${FROM}>`,
        to: TEAM_EMAIL,
        subject: "New Demo Request from Website",
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0b0f14; color: #e0e6f0; border-radius: 12px; overflow: hidden;">
            <div style="background: linear-gradient(135deg, #00c896, #0a7c5c); padding: 28px 32px;">
                <h1 style="margin: 0; font-size: 22px; color: #fff;">🚀 New Demo Request</h1>
                <p style="margin: 6px 0 0; color: rgba(255,255,255,0.85); font-size: 14px;">Submitted via nija.world contact form</p>
            </div>
            <div style="padding: 28px 32px;">
                <table style="width:100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 10px 0; color: #8899aa; font-size: 13px; width: 100px;">Name</td>
                        <td style="padding: 10px 0; font-weight: 600; color: #ffffff;">${name}</td>
                    </tr>
                    <tr style="border-top: 1px solid rgba(255,255,255,0.07);">
                        <td style="padding: 10px 0; color: #8899aa; font-size: 13px;">Email</td>
                        <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #00c896;">${email}</a></td>
                    </tr>
                    <tr style="border-top: 1px solid rgba(255,255,255,0.07);">
                        <td style="padding: 10px 0; color: #8899aa; font-size: 13px;">Company</td>
                        <td style="padding: 10px 0; color: #ffffff;">${company || "—"}</td>
                    </tr>
                    <tr style="border-top: 1px solid rgba(255,255,255,0.07);">
                        <td style="padding: 10px 0; color: #8899aa; font-size: 13px; vertical-align: top;">Message</td>
                        <td style="padding: 10px 0; color: #c8d0de; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</td>
                    </tr>
                    <tr style="border-top: 1px solid rgba(255,255,255,0.07);">
                        <td style="padding: 10px 0; color: #8899aa; font-size: 13px;">Received</td>
                        <td style="padding: 10px 0; color: #6b7a93; font-size: 13px;">${timestamp} IST</td>
                    </tr>
                </table>
            </div>
            <div style="padding: 16px 32px 24px; border-top: 1px solid rgba(255,255,255,0.07);">
                <a href="mailto:${email}?subject=Re: Your Nija World Demo Request" style="display:inline-block; background:#00c896; color:#000; padding:10px 22px; border-radius:8px; font-weight:600; font-size:14px; text-decoration:none;">Reply to ${name}</a>
            </div>
        </div>
        `,
    });
}

/**
 * Sends a confirmation email to the user.
 */
async function sendUserConfirmation({ name, email }) {
    await transporter.sendMail({
        from: `"Nija World" <${FROM}>`,
        to: email,
        subject: "We've received your request – Nija World",
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0b0f14; color: #e0e6f0; border-radius: 12px; overflow: hidden;">
            <div style="background: linear-gradient(135deg, #00c896, #0a7c5c); padding: 28px 32px;">
                <img src="https://nijaworld.com/logo.png" alt="Nija World" style="height:36px; margin-bottom:12px;" onerror="this.style.display='none'">
                <h1 style="margin: 0; font-size: 22px; color: #fff;">Thank you, ${name}!</h1>
                <p style="margin: 6px 0 0; color: rgba(255,255,255,0.85); font-size: 14px;">We've received your demo request.</p>
            </div>
            <div style="padding: 28px 32px; line-height: 1.75;">
                <p style="margin: 0 0 16px; color: #c8d0de;">Hi <strong style="color:#fff">${name}</strong>,</p>
                <p style="margin: 0 0 16px; color: #c8d0de;">Thank you for reaching out to <strong style="color:#fff">Nija World</strong>. We've received your request and our team will review it shortly.</p>
                <p style="margin: 0 0 24px; color: #c8d0de;">If your request requires immediate attention, you can reach us directly at:</p>
                <div style="background: rgba(0,200,150,0.07); border: 1px solid rgba(0,200,150,0.2); border-radius: 10px; padding: 18px 22px; margin-bottom: 24px;">
                    <p style="margin: 0 0 8px; color: #c8d0de;">📧 <strong style="color:#fff">Email:</strong> <a href="mailto:reach@nija.world" style="color:#00c896;">reach@nija.world</a></p>
                    <p style="margin: 0; color: #c8d0de;">📞 <strong style="color:#fff">Phone:</strong> <a href="tel:+919739666347" style="color:#00c896;">+91 97396 66347</a></p>
                </div>
                <p style="margin: 0; color: #6b7a93; font-size: 14px;">Best regards,<br><strong style="color:#c8d0de;">The Nija World Team</strong></p>
            </div>
            <div style="padding: 16px 32px; background: rgba(255,255,255,0.03); border-top: 1px solid rgba(255,255,255,0.07); font-size: 12px; color: #4a5568;">
                © ${new Date().getFullYear()} Nija World · <a href="https://nija.world" style="color:#00c896;">nija.world</a>
            </div>
        </div>
        `,
    });
}

/**
 * Sends a 6-digit OTP email for password reset or change-password verification.
 * @param {object} opts
 * @param {string} opts.name         - User's display name
 * @param {string} opts.email        - Recipient email address
 * @param {string} opts.otp          - Plain 6-digit OTP (never stored; only used here)
 * @param {"reset"|"change-password"} opts.purpose
 * @param {number} [opts.expiresMinutes=10]
 */
async function sendOtpEmail({ name, email, otp, purpose, expiresMinutes = 10 }) {
    const isReset = purpose === "reset";
    const isLogin = purpose === "login";

    const subject = isReset
        ? "Your Nija World Password Reset OTP"
        : isLogin
        ? "Your Nija World Login Verification OTP"
        : "Your Nija World Password Change OTP";

    const heading = isReset
        ? "🔑 Password Reset OTP"
        : isLogin
        ? "🔐 Login Verification OTP"
        : "🔐 Password Change OTP";

    const bodyLine = isReset
        ? "We received a request to reset your Nija World admin password. Use the OTP below to proceed:"
        : isLogin
        ? "A sign-in attempt was made to your Nija World admin account. Enter the OTP below to complete login:"
        : "A password change was initiated for your Nija World admin account. Enter the OTP below to confirm:";

    // Render each digit in its own styled box
    const digits = otp.split("");
    const digitBoxes = digits
        .map(
            (d) =>
                `<span style="display:inline-block;width:44px;height:54px;line-height:54px;text-align:center;font-size:28px;font-weight:700;background:#0e1624;border:2px solid #00c896;border-radius:10px;color:#00c896;margin:0 4px;">${d}</span>`
        )
        .join("");

    await transporter.sendMail({
        from: `"Nija World" <${FROM}>`,
        to: email,
        subject,
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0b0f14; color: #e0e6f0; border-radius: 12px; overflow: hidden;">
            <div style="background: linear-gradient(135deg, #00c896, #0a7c5c); padding: 28px 32px;">
                <h1 style="margin: 0; font-size: 22px; color: #fff;">${heading}</h1>
                <p style="margin: 6px 0 0; color: rgba(255,255,255,0.85); font-size: 14px;">Nija World Admin Portal</p>
            </div>
            <div style="padding: 28px 32px; line-height: 1.75;">
                <p style="margin: 0 0 8px; color: #c8d0de;">Hi <strong style="color:#fff">${name}</strong>,</p>
                <p style="margin: 0 0 24px; color: #c8d0de;">${bodyLine}</p>

                <div style="text-align: center; margin: 28px 0;">
                    ${digitBoxes}
                </div>

                <div style="background: rgba(255,200,0,0.05); border: 1px solid rgba(255,200,0,0.15); border-radius: 10px; padding: 14px 18px; margin: 24px 0;">
                    <p style="margin: 0; color: #c8a800; font-size: 13px;">⏰ This OTP expires in <strong>${expiresMinutes} minutes</strong>. Do not share it with anyone.</p>
                </div>

                <p style="margin: 0; color: #6b7a93; font-size: 13px;">
                    If you did not request this, you can safely ignore this email — your password will not change.
                </p>
            </div>
            <div style="padding: 16px 32px; background: rgba(255,255,255,0.03); border-top: 1px solid rgba(255,255,255,0.07); font-size: 12px; color: #4a5568;">
                © ${new Date().getFullYear()} Nija World · <a href="https://nija.world" style="color:#00c896;">nija.world</a>
            </div>
        </div>
        `,
    });
}

module.exports = { sendTeamNotification, sendUserConfirmation, sendOtpEmail };

