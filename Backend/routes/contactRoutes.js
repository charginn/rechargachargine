const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const validator = require("validator");


dotenv.config();

// Debugging: Check if .env variables are loaded
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Not Loaded");

// Route to handle contact form submission
router.post("/", async (req, res) => {
    const { name, phone, email, consultationType } = req.body;

    // Validation: Ensure all required fields are filled
    if (!name || !phone || !email || !consultationType) {
        return res.status(400).json({ error: "All fields are required." });
    } if (!validator.isEmail(email)) {
        return res.status(400).json({ error: "Invalid email format." });
    }


    try {
        // Save to database
        const newContact = new Contact({ name, phone, email, consultationType });
        await newContact.save();
        console.log("✅ Data saved to database");

        // Send Email using Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS 
            }
        }); transporter.verify((error, success) => {
            if (error) {
                console.error("❌ SMTP Connection Failed:", error);
            } else {
                console.log("✅ SMTP Server is Ready to Send Emails");
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER || "charginerecharga@gmail.com", // Change to your company email
            subject: "New Contact Form Submission",
            text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nConsultation Type: ${consultationType}`
        };

        console.log("📤 Attempting to send email...");
        const info = await transporter.sendMail(mailOptions);
        console.log("✅ Email sent successfully:", info.response);

        res.status(200).json({ message: "Your mail has been sent successfully!" });
    } catch (error) {
        console.error("❌ Error sending email:", error);
        res.status(500).json({ error: "Failed to send email", details: error.message });
    }

    router.get("/", (req, res) => {
        res.json({ message: "Contact route is working!" });
    });
    
   
    
});

module.exports = router;
