/**
 * History Routes
 * @module routes/historyRoutes
 */

const express = require("express");
const router = express.Router();
const historyController = require("../controllers/historyController");
const authMiddleware = require("../middleware/authMiddleware");

/**
 * @route GET /api/history
 * @desc Get user's browsing history
 * @access Private
 */
router.get("/history", authMiddleware, historyController.getHistory);

/**
 * @route POST /api/history
 * @desc Save a history item
 * @access Private
 */
router.post("/history", authMiddleware, historyController.saveHistoryItem);

// Removed DELETE routes - history will never be deleted

module.exports = router;
