const express = require('express');
const router = express.Router();
const { getHistory } = require('../controllers/historyController');
const { authenticateJWT } = require('../middleware/authMiddleware');

// @route GET /api/history
router.get('/', authenticateJWT, getHistory);

module.exports = router;