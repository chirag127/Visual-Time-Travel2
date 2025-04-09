/**
 * Validation utilities for image upload services
 * @module services/imageUpload/validators
 */

/**
 * Validates if a string is a valid base64 encoded image
 * @param {string} base64String - The base64 string to validate
 * @returns {boolean} - True if valid, false otherwise
 */
const isValidBase64Image = (base64String) => {
  if (!base64String || typeof base64String !== 'string') {
    return false;
  }
  
  // Check if the string has a reasonable length for an image
  if (base64String.length < 100) {
    return false;
  }
  
  // Basic regex pattern for base64
  const base64Pattern = /^[A-Za-z0-9+/=]+$/;
  return base64Pattern.test(base64String);
};

/**
 * Validates API response from image hosting service
 * @param {Object} response - The API response object
 * @returns {boolean} - True if valid, false otherwise
 */
const isValidImageUploadResponse = (response) => {
  return (
    response &&
    response.data &&
    response.data.image &&
    typeof response.data.image.url === 'string'
  );
};

module.exports = {
  isValidBase64Image,
  isValidImageUploadResponse
};
