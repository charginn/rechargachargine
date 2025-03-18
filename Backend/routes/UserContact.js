const express = require('express');
const router = express.Router();
const UserContact = require('../models/UserContact'); 
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const validator = require("validator");

dotenv.config();

// POST request to handle user contact form submission
router.post('/', async (req, res) => {
    const { name, email, phone, intercoms, message } = req.body;

    if (!name || !email || !phone || !message) {
        return res.status(400).json({ error: "All fields are required." });
    }
    
    if (!validator.isMobilePhone(phone, 'any')) {
        return res.status(400).json({ error: "Invalid phone number." });
    }

    try {
        // 1️⃣ Save Data to Database
        const newUserContact = new UserContact({ name, email, phone, intercoms, message });
        await newUserContact.save();
        console.log("✅ Data saved to database");

        // 2️⃣ Setup Nodemailer Transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS 
            }
        });

        // Verify SMTP Connection
        transporter.verify((error, success) => {
            if (error) {
                console.error("❌ SMTP Connection Failed:", error);
            } else {
                console.log("✅ SMTP Server is Ready to Send Emails");
            }
        });

        // 3️⃣ Email Content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "charginerecharga@gmail.com", // Change to recipient email
            subject: "New Contact Form Submission",
            text: ` New User Contact Form Submitted\n\n
                   Name: ${name}\n
                   Email: ${email}\n
                   Phone: ${phone}\n
                   Intercoms: ${intercoms || "N/A"}\n
                   Message: ${message}`
        };

        // 4️⃣ Send Email
        console.log("📤 Sending email...");
        await transporter.sendMail(mailOptions);
        console.log("✅ Email sent successfully");

        res.status(201).json({ message: "Form submitted & email sent successfully!" });

    } catch (error) {
        console.error("❌ Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
