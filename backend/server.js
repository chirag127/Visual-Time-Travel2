/**
 * Visual Time Travel - Backend Server
 * @module server
 */

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Import routes
const authRoutes = require("./routes/authRoutes");
const screenshotRoutes = require("./routes/screenshotRoutes");
const historyRoutes = require("./routes/historyRoutes");

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" })); // Increased limit for base64 images
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose
    .connect(
        process.env.MONGODB_URI ||
            "mongodb://localhost:27017/visual-time-travel"
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", screenshotRoutes);
app.use("/api", historyRoutes);

// Root route
app.get("/", (req, res) => {
    res.json({
        message: "Visual Time Travel API",
        status: "running",
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error("Server error:", err.stack);
    res.status(500).json({
        success: false,
        message: "Internal server error",
        error: process.env.NODE_ENV === "production" ? null : err.message,
    });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
