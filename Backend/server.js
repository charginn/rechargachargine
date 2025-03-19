import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import path from 'path';

import contactRouter from './routes/contactRoutes.js'; // Corrected import
import userContact from '../Backend/routes/UserContact.js'; // Added missing import

dotenv.config();

const app = express();
app.use(cors({
 
  methods: "GET,POST,PUT,DELETE",
  credentials: true 
}));

app.use(express.json());
app.use(morgan('dev'));

// Check if MONGO_URI is defined
if (!process.env.MONGO_URI) {
    console.error("❌ MongoDB URI is not defined!");
    process.exit(1);
}

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }) // Added options for compatibility
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/dist", "index.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong' });
});

app.use('/contact', contactRouter); // Fixed route handler
app.use('/UserContact', userContact); // Fixed route handler

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});
