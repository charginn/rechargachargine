const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require("path");

const contactRouter = require("./routes/contactRoutes");
const userContact = require("./routes/UserContact"); // ✅ Fixed import

dotenv.config();

const app = express();
app.use(cors({
 
  methods: "GET,POST,PUT,DELETE",
  credentials: true 
}));

app.use(express.json());
app.use(morgan('dev'));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => {
    console.error(" MongoDB connection error:", err);
    process.exit(1);
  });

// Check if MONGO_URI is defined
if (!process.env.MONGO_URI) {
    console.error("❌ MongoDB URI is not defined!");
    process.exit(1);
}

app.use('/contact', contactRouter);
app.use('/UserContact', userContact); // ✅ Corrected variable name


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});
