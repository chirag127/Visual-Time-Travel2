/**
 * FreeImage.host upload service
 * @module services/imageUpload/freeImageHostService
 */

const axios = require('axios');
const FormData = require('form-data');
const { freeImageHost } = require('./config');
const { isValidBase64Image, isValidImageUploadResponse } = require('./validators');
const { stripBase64Prefix, createImageUploadError, formatUploadResponse } = require('./utils');

/**
 * Uploads an image to FreeImage.host
 * @async
 * @param {string} imageBase64 - Base64 encoded image data (with or without data:image/png;base64, prefix)
 * @param {Object} [options] - Optional configuration options
 * @param {string} [options.apiKey] - Custom API key (overrides default)
 * @param {string} [options.apiUrl] - Custom API URL (overrides default)
 * @param {Object} [options.additionalFormData] - Additional form data to include in the request
 * @param {Object} [options.axiosConfig] - Additional axios configuration options
 * @returns {Promise<Object>} - Object containing the uploaded image URL and metadata
 * @throws {Error} If the upload fails or validation fails
 */
const uploadImage = async (imageBase64, options = {}) => {
  // Validate input
  if (!isValidBase64Image(imageBase64)) {
    throw new Error('Invalid base64 image data provided');
  }

  // Clean the base64 string if needed
  const cleanBase64 = stripBase64Prefix(imageBase64);
  
  // Prepare configuration
  const apiKey = options.apiKey || freeImageHost.apiKey;
  const apiUrl = options.apiUrl || freeImageHost.apiUrl;
  
  // Create form data
  const formData = new FormData();
  formData.append('key', apiKey);
  formData.append('source', cleanBase64);
  formData.append('action', freeImageHost.action);
  formData.append('format', freeImageHost.format);
  
  // Add any additional form data if provided
  if (options.additionalFormData) {
    Object.entries(options.additionalFormData).forEach(([key, value]) => {
      formData.append(key, value);
    });
  }
  
  try {
    // Prepare axios config
    const axiosConfig = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      ...options.axiosConfig
    };
    
    // Make the request
    const response = await axios.post(apiUrl, formData, axiosConfig);
    
    // Validate response
    if (response.status !== 200 || !isValidImageUploadResponse(response)) {
      throw new Error('Invalid response from image hosting service');
    }
    
    // Format and return the response
    return formatUploadResponse(response.data);
  } catch (error) {
    console.error('Error uploading image:', error.message);
    throw createImageUploadError(error, 'Failed to upload image to FreeImage.host');
  }
};

module.exports = {
  uploadImage
};
