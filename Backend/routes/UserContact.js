const express = require('express');
const router = express.Router();
const UserContact = require('../models/UserContact');  // Ensure this model exists
const nodemailer = require('nodemailer');

// Route to handle UserContact form submission
router.post('/', async (req, res) => {
    const { name, email, phone, intercoms, message } = req.body;

    // Validation: Ensure all required fields are filled
    if (!name || !email || !phone || !message) {
        return res.status(400).json({ error: "All fields are required." });
    }

    try {
        // Create a new UserContact instance
        const newUserContact = new UserContact({
            name,
            email,
            phone,
            intercoms,
            message
        });

        // Save to the database
        await newUserContact.save();

        // Send an email notification to the company
        const transporter = nodemailer.createTransport({
            service: 'gmail',  // You can use other services if required
            auth: {
                user: process.env.EMAIL_USER,  // Set your email in the .env file
                pass: process.env.EMAIL_PASS   // Set your email password in the .env file
            }
        });

        // Set up the email options
        const mailOptions = {
            from: process.env.EMAIL_USER,  // Your email (must match the Gmail account)
            to: 'salesinquiry@rechargachargine.com',  // Recipient email
            subject: 'New User Contact Form Submission',
            text: `
                Name: ${name}
                Email: ${email}
                Phone: ${phone}
                Intercoms: ${intercoms || 'N/A'}
                Message: ${message}
            `
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        // Respond with a success message
        res.status(200).json({ message: "Your message has been sent successfully!" });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
