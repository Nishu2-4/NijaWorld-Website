/**
 * Seed Script: Create Initial Admin User
 *
 * Run with: npm run seed
 * (from inside the /backend directory)
 *
 * This creates the first admin account. Should only be run ONCE
 * on a fresh database. Subsequent runs will skip if admin exists.
 */

require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

// ─── Admin credentials (change these before running!) ───────────────
const ADMIN_NAME = "NijaWorld Admin";
const ADMIN_EMAIL = "admin@nijaworld.com";
const ADMIN_PASSWORD = "Admin@NijaWorld2024"; // Must be ≥6 chars
// ────────────────────────────────────────────────────────────────────

const createAdmin = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ Connected to MongoDB");

        // Check if admin already exists
        const existingAdmin = await User.findOne({ email: ADMIN_EMAIL });
        if (existingAdmin) {
            console.log(`⚠️  Admin with email '${ADMIN_EMAIL}' already exists.`);
            console.log("   Skipping seed to avoid duplicates.");
            await mongoose.connection.close();
            process.exit(0);
        }

        // Create admin user (the model pre-save hook will hash the password)
        const admin = await User.create({
            name: ADMIN_NAME,
            email: ADMIN_EMAIL,
            password: ADMIN_PASSWORD,
            role: "admin",
            isActive: true,
        });

        console.log("─────────────────────────────────────────────");
        console.log("🎉 Admin user created successfully!");
        console.log(`   Name  : ${admin.name}`);
        console.log(`   Email : ${admin.email}`);
        console.log(`   Role  : ${admin.role}`);
        console.log("─────────────────────────────────────────────");
        console.log("⚠️  IMPORTANT: Change the admin password after first login!");
        console.log("─────────────────────────────────────────────");

        await mongoose.connection.close();
        process.exit(0);
    } catch (error) {
        console.error("❌ Seed Error:", error.message);
        await mongoose.connection.close();
        process.exit(1);
    }
};

createAdmin();
