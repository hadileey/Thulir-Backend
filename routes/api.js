const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');
const { body, validationResult } = require('express-validator');

const registrationValidation = [
    body('fullName').trim().notEmpty().withMessage('Full Name is required'),
    
    body('mobileNumber')
        .isLength({ min: 10, max: 10 }).withMessage('Mobile number must be 10 digits')
        .isNumeric().withMessage('Mobile number must contain only numbers'),
    
    body('city').trim().notEmpty().withMessage('City is required'),
    
    body('neetStatus').notEmpty().withMessage('Please select your NEET status'),
    
    body('collegePreference').notEmpty().withMessage('Please select a college preference'),
    
    body('educationLoan')
        .isIn(['Yes', 'No']).withMessage('Education loan must be Yes or No')
];

router.post('/register', registrationValidation, async (req, res) => {
   
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ 
            success: false, 
            errors: errors.array()
        });
    }

    try {
        const { fullName, mobileNumber, city, neetStatus, collegePreference, educationLoan } = req.body;

        const newRegistration = new Registration({
            fullName, mobileNumber, city, neetStatus, collegePreference, educationLoan
        });

        await newRegistration.save();
        res.status(201).json({ success: true, message: "Registration successful!" });

    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Server error, try again later." });
    }
});

module.exports = router;