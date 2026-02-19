const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    city: { type: String, required: true },
    neetStatus: { type: String, required: true },
    collegePreference: { type: String, required: true },
    educationLoan: { type: String, enum: ['Yes', 'No'], required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Registration', RegistrationSchema);