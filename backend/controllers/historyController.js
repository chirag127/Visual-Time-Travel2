/**
 * History Controller
 * @module controllers/historyController
 */

const History = require('../models/History');

/**
 * Get user's browsing history
 * @async
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} - JSON response with history items
 */
const getHistory = async (req, res) => {
  try {
    const userId = req.user.id;
    const { limit = 20, offset = 0, search, dateFilter, domainFilter } = req.query;
    
    // Build query
    const query = { userId };
    
    // Add search filter if provided
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { url: { $regex: search, $options: 'i' } }
      ];
    }
    
    // Add date filter if provided
    if (dateFilter) {
      const now = new Date();
      let startDate;
      
      switch (dateFilter) {
        case 'today':
          startDate = new Date(now.setHours(0, 0, 0, 0));
          break;
        case 'yesterday':
          startDate = new Date(now.setDate(now.getDate() - 1));
          startDate.setHours(0, 0, 0, 0);
          break;
        case 'week':
          startDate = new Date(now.setDate(now.getDate() - 7));
          break;
        case 'month':
          startDate = new Date(now.setMonth(now.getMonth() - 1));
          break;
        default:
          startDate = null;
      }
      
      if (startDate) {
        query.timestamp = { $gte: startDate };
      }
    }
    
    // Add domain filter if provided
    if (domainFilter && domainFilter !== 'all') {
      // Extract domain from URL
      query.url = { $regex: domainFilter, $options: 'i' };
    }
    
    // Get history items
    const items = await History.find(query)
      .sort({ timestamp: -1 })
      .skip(parseInt(offset))
      .limit(parseInt(limit));
    
    // Get unique domains for filter
    const domains = await History.aggregate([
      { $match: { userId: userId } },
      { $addFields: { domain: { $regexFind: { input: "$url", regex: /https?:\/\/([^\/]+)/ } } } },
      { $addFields: { domain: { $arrayElemAt: ["$domain.captures", 0] } } },
      { $group: { _id: "$domain" } },
      { $sort: { _id: 1 } }
    ]);
    
    // Return success response
    return res.status(200).json({
      success: true,
      count: items.length,
      items,
      domains: domains.map(d => d._id).filter(Boolean)
    });
  } catch (error) {
    console.error('Get history error:', error);
    
    return res.status(500).json({
      success: false,
      message: 'Failed to get history',
      error: error.message
    });
  }
};

/**
 * Save a history item
 * @async
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} - JSON response
 */
const saveHistoryItem = async (req, res) => {
  try {
    const userId = req.user.id;
    const { url, title, imageUrl, thumbnailUrl, favicon, timestamp } = req.body;
    
    // Validate input
    if (!url || !title || !imageUrl) {
      return res.status(400).json({
        success: false,
        message: 'URL, title, and imageUrl are required'
      });
    }
    
    // Create history item
    const historyItem = await History.create({
      userId,
      url,
      title,
      imageUrl,
      thumbnailUrl,
      favicon,
      timestamp: timestamp || new Date()
    });
    
    // Return success response
    return res.status(201).json({
      success: true,
      message: 'History item saved successfully',
      historyItem
    });
  } catch (error) {
    console.error('Save history item error:', error);
    
    return res.status(500).json({
      success: false,
      message: 'Failed to save history item',
      error: error.message
    });
  }
};

/**
 * Delete a history item
 * @async
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} - JSON response
 */
const deleteHistoryItem = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    
    // Find and delete history item
    const historyItem = await History.findOneAndDelete({
      _id: id,
      userId
    });
    
    if (!historyItem) {
      return res.status(404).json({
        success: false,
        message: 'History item not found'
      });
    }
    
    // Return success response
    return res.status(200).json({
      success: true,
      message: 'History item deleted successfully'
    });
  } catch (error) {
    console.error('Delete history item error:', error);
    
    return res.status(500).json({
      success: false,
      message: 'Failed to delete history item',
      error: error.message
    });
  }
};

/**
 * Clear all history
 * @async
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} - JSON response
 */
const clearHistory = async (req, res) => {
  try {
    const userId = req.user.id;
    
    // Delete all history items for user
    await History.deleteMany({ userId });
    
    // Return success response
    return res.status(200).json({
      success: true,
      message: 'History cleared successfully'
    });
  } catch (error) {
    console.error('Clear history error:', error);
    
    return res.status(500).json({
      success: false,
      message: 'Failed to clear history',
      error: error.message
    });
  }
};

module.exports = {
  getHistory,
  saveHistoryItem,
  deleteHistoryItem,
  clearHistory
};
