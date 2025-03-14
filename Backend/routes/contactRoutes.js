const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

// Route to handle contact form submission
router.post("/", async (req, res) => {
        const { name, phone, email, consultationType} = req.body;

        // Validation: Ensure all required fields are filled
        if (!name || !phone || !email || !consultationType) {
            return res.status(400).json({ error: "All fields are required." });
        }

        // Save to database
        const newContact = new Contact({
            name,
            phone,
            email,
            consultationType,
            
        });
        await newContact.save();

        // Send Email
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS   
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "charginerecharga@gmail.com",  // Change to your recipient email
            subject: "New Contact Form Submission",
            text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nConsultation Type: ${consultationType}`
        };
try{
        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: "Your message has been sent successfully!" });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
