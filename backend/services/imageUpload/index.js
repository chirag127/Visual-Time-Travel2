/**
 * Image Upload Services
 * @module services/imageUpload
 */

const freeImageHostService = require('./freeImageHostService');
const utils = require('./utils');
const validators = require('./validators');
const config = require('./config');

/**
 * Upload an image to FreeImage.host
 * @async
 * @param {string} imageBase64 - Base64 encoded image data
 * @param {Object} [options] - Optional configuration
 * @returns {Promise<Object>} - Upload result with image URL and metadata
 */
const uploadToFreeImageHost = freeImageHostService.uploadImage;

module.exports = {
  // Main service functions
  uploadToFreeImageHost,
  
  // Expose sub-modules for advanced usage
  freeImageHostService,
  utils,
  validators,
  config
};
