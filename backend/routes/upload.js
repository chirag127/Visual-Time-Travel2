const express = require('express');
const router = express.Router();
const { uploadScreenshot } = require('../controllers/uploadController');
const { authenticateJWT } = require('../middleware/authMiddleware');

// @route POST /api/upload-screenshot
router.post('/', authenticateJWT, uploadScreenshot);

module.exports = router;