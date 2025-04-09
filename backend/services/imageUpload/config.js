/**
 * Configuration for image upload services
 * @module services/imageUpload/config
 */

/**
 * FreeImage.host API configuration
 * @type {Object}
 */
const freeImageHost = {
  /**
   * API key for FreeImage.host
   * @type {string}
   */
  apiKey: process.env.FREE_IMAGE_HOST_API_KEY || '6d207e02198a847aa98d0a2a901485a5',
  
  /**
   * API URL for FreeImage.host
   * @type {string}
   */
  apiUrl: 'https://freeimage.host/api/1/upload',
  
  /**
   * Default action for the API
   * @type {string}
   */
  action: 'upload',
  
  /**
   * Default response format
   * @type {string}
   */
  format: 'json'
};

/**
 * Export configuration objects
 */
module.exports = {
  freeImageHost
};
