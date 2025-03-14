const mongoose = require('mongoose');

// Define the schema for UserContact
const UserContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    intercoms: { type: String },
    message: { type: String, required: true },
}, { timestamps: true });

// Export the model
module.exports = mongoose.model('UserContact', UserContactSchema);
