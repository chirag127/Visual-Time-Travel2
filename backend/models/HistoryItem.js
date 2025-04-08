const mongoose = require('mongoose');

const historyItemSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        required: true,
    },
    favicon: {
        type: String,
    },
}, { timestamps: true });

module.exports = mongoose.model('HistoryItem', historyItemSchema);