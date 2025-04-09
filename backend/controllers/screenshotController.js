/**
 * Screenshot Controller
 * @module controllers/screenshotController
 */

const { uploadToFreeImageHost } = require('../services/imageUpload');

/**
 * Upload a screenshot to the image hosting service
 * @async
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} - JSON response with upload result
 */
const uploadScreenshot = async (req, res) => {
  try {
    // Validate request
    if (!req.body.imageData) {
      return res.status(400).json({
        success: false,
        message: 'Image data is required'
      });
    }

    // Get user ID from authenticated request
    const userId = req.user?.id;
    
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      });
    }

    // Upload the image
    const uploadResult = await uploadToFreeImageHost(req.body.imageData);

    // Prepare response data
    const responseData = {
      success: true,
      imageUrl: uploadResult.url,
      thumbnailUrl: uploadResult.thumbnailUrl,
      timestamp: uploadResult.timestamp
    };

    // Return success response
    return res.status(200).json(responseData);
  } catch (error) {
    console.error('Screenshot upload failed:', error);
    
    // Return error response
    return res.status(500).json({
      success: false,
      message: 'Failed to upload screenshot',
      error: error.message
    });
  }
};

module.exports = {
  uploadScreenshot
};
