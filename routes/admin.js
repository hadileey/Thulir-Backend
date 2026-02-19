const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');


const authMiddleware = (req, res, next) => {
    if (req.session.isAdmin) {
        next();
    } else {
        res.status(403).json({ message: "Access Denied. Please Login." });
    }
};


router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (
        username === process.env.ADMIN_USERNAME &&
        password === process.env.ADMIN_PASSWORD
    ) {
        req.session.isAdmin = true;
        return res.json({ success: true, message: "Logged in successfully" });
    } else {
        return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
});


router.get('/registrations', authMiddleware, async (req, res) => {
    try {
        const data = await Registration.find().sort({ createdAt: -1 });
        res.json({ success: true, data });
    } catch (err) {
        res.status(500).json({ success: false, message: "Server error" });
    }
});


router.get('/check-auth', (req, res) => {
    res.json({ authenticated: !!req.session.isAdmin });
});


router.post('/logout', (req, res) => {
    req.session.destroy();
    res.json({ message: "Logged out" });
});


module.exports = { adminRouter: router };
