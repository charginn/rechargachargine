const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan'); // Add morgan for logging
const contactRouter = require("./routes/contactRoutes");
const UserContact = require("./routes/UserContact");

dotenv.config();

const app = express();

// Check if MONGO_URI is defined
if (!process.env.MONGO_URI) {
    console.error("❌ MongoDB URI is not defined!");
    process.exit(1);
}

// Middleware setup
app.use(cors());
app.use(express.json()); // Parse JSON data from incoming requests
app.use(morgan('dev')); // Log incoming HTTP requests in 'dev' format

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // Exit the app if MongoDB connection fails
  });

// Use the contact route
app.use('/contact', contactRouter);

// Use the UserContact route
app.use('/UserContact', UserContact);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
