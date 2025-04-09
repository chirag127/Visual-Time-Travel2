/**
 * Utility functions for image upload services
 * @module services/imageUpload/utils
 */

/**
 * Removes the data URL prefix from a base64 image string if present
 * @param {string} imageBase64 - The base64 image string, possibly with data URL prefix
 * @returns {string} - Clean base64 string without prefix
 */
const stripBase64Prefix = (imageBase64) => {
  if (!imageBase64) {
    return '';
  }
  
  // Remove data URL prefix if present (e.g., "data:image/png;base64,")
  const prefixPattern = /^data:image\/[a-zA-Z]+;base64,/;
  return imageBase64.replace(prefixPattern, '');
};

/**
 * Creates a standardized error object for image upload failures
 * @param {Error} error - The original error
 * @param {string} [customMessage] - Optional custom error message
 * @returns {Object} - Standardized error object
 */
const createImageUploadError = (error, customMessage) => {
  return {
    message: customMessage || 'Image upload failed',
    originalError: error.message,
    timestamp: new Date().toISOString(),
    code: error.code || 'UPLOAD_ERROR'
  };
};

/**
 * Formats the successful upload response to a standardized format
 * @param {Object} responseData - The raw API response data
 * @returns {Object} - Standardized response object
 */
const formatUploadResponse = (responseData) => {
  return {
    url: responseData.image.url,
    displayUrl: responseData.image.display_url || responseData.image.url,
    thumbnailUrl: responseData.image.thumb_url || null,
    size: responseData.image.size || null,
    width: responseData.image.width || null,
    height: responseData.image.height || null,
    timestamp: new Date().toISOString()
  };
};

module.exports = {
  stripBase64Prefix,
  createImageUploadError,
  formatUploadResponse
};
