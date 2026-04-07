require("dotenv").config();
const nodemailer = require("nodemailer");

console.log("\n🔍 SMTP Configuration:");
console.log("  HOST:", process.env.SMTP_HOST);
console.log("  PORT:", process.env.SMTP_PORT);
console.log("  USER:", process.env.SMTP_USER);
console.log("  PASS:", process.env.SMTP_PASS ? `${"*".repeat(process.env.SMTP_PASS.length)} (set)` : "❌ NOT SET");
console.log("  FROM:", process.env.EMAIL_FROM);
console.log("");

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10) || 587,
    secure: parseInt(process.env.SMTP_PORT, 10) === 465,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

(async () => {
    try {
        console.log("⏳ Verifying SMTP connection...");
        await transporter.verify();
        console.log("✅ SMTP connection successful!\n");

        console.log("⏳ Sending test email to:", process.env.SMTP_USER);
        const info = await transporter.sendMail({
            from: `"Nija World Test" <${process.env.EMAIL_FROM}>`,
            to: process.env.SMTP_USER,
            subject: "✅ SMTP Test — Nija World",
            text: "If you see this, SMTP is working correctly!",
        });
        console.log("✅ Email sent! Message ID:", info.messageId);
    } catch (err) {
        console.error("❌ SMTP Error:", err.message);
        if (err.code) console.error("   Code:", err.code);
        if (err.responseCode) console.error("   Response:", err.responseCode, err.response);
    } finally {
        process.exit(0);
    }
})();
