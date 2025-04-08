const express = require('express');
const router = express.Router();
const { signup, login, logout, forgotPassword } = require('../controllers/authController');

// @route POST /api/auth/signup
router.post('/signup', signup);

// @route POST /api/auth/login
router.post('/login', login);

// @route POST /api/auth/logout
router.post('/logout', logout);

// @route POST /api/forgot-password
router.post('/forgot-password', forgotPassword);

module.exports = router;