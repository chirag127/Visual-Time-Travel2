/**
 * Screenshot Routes
 * @module routes/screenshotRoutes
 */

const express = require('express');
const router = express.Router();
const { uploadScreenshot } = require('../controllers/screenshotController');
const authMiddleware = require('../middleware/authMiddleware');

/**
 * @route POST /api/upload-screenshot
 * @desc Upload a screenshot to the image hosting service
 * @access Private (requires authentication)
 */
router.post('/upload-screenshot', authMiddleware, uploadScreenshot);

module.exports = router;
