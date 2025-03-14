const nodemailer = require("nodemailer");
require("dotenv").config();

// Create a transporter only once
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Define mail options only once
let mailOptions = {
    from: process.env.EMAIL_USER,
    to: "your-email@example.com", // Change this to your recipient email
    subject: "Test Email",
    text: "Hello, this is a test email from Node.js!",
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error("❌ Error sending email:", error);
    } else {
        console.log("✅ Email sent successfully!", info.response);
    }
});
