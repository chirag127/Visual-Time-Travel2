/**
 * History Model
 * @module models/History
 */

const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  url: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  thumbnailUrl: {
    type: String
  },
  favicon: {
    type: String
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Create index for efficient querying
historySchema.index({ userId: 1, timestamp: -1 });
historySchema.index({ userId: 1, url: 1 });

// Virtual for domain
historySchema.virtual('domain').get(function() {
  try {
    const url = new URL(this.url);
    return url.hostname;
  } catch (error) {
    return '';
  }
});

// Configure toJSON
historySchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret.__v;
    return ret;
  }
});

const History = mongoose.model('History', historySchema);

module.exports = History;
