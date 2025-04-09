/**
 * Examples of using the image upload services
 * @module services/imageUpload/examples
 */

const { uploadToFreeImageHost } = require('./index');

/**
 * Example: Basic usage of uploadToFreeImageHost
 * @async
 */
const basicUploadExample = async () => {
  try {
    // Sample base64 image (a 1x1 transparent pixel)
    const sampleBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==';
    
    // Upload the image
    const result = await uploadToFreeImageHost(sampleBase64);
    
    console.log('Upload successful!');
    console.log('Image URL:', result.url);
    console.log('Thumbnail URL:', result.thumbnailUrl);
    
    return result;
  } catch (error) {
    console.error('Upload failed:', error.message);
    throw error;
  }
};

/**
 * Example: Advanced usage with custom options
 * @async
 */
const advancedUploadExample = async () => {
  try {
    // Sample base64 image with data URL prefix
    const sampleBase64WithPrefix = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==';
    
    // Custom options
    const options = {
      apiKey: process.env.CUSTOM_API_KEY, // Use custom API key from environment
      additionalFormData: {
        expiration: '1d', // Set expiration to 1 day
        title: 'My Custom Image'
      },
      axiosConfig: {
        timeout: 10000, // 10 second timeout
        headers: {
          'User-Agent': 'MyApp/1.0'
        }
      }
    };
    
    // Upload with custom options
    const result = await uploadToFreeImageHost(sampleBase64WithPrefix, options);
    
    console.log('Advanced upload successful!');
    console.log('Image URL:', result.url);
    
    return result;
  } catch (error) {
    console.error('Advanced upload failed:', error.message);
    throw error;
  }
};

// Export examples
module.exports = {
  basicUploadExample,
  advancedUploadExample
};

// Run examples if this file is executed directly
if (require.main === module) {
  console.log('Running image upload examples...');
  
  basicUploadExample()
    .then(() => advancedUploadExample())
    .then(() => console.log('All examples completed successfully!'))
    .catch(err => console.error('Example execution failed:', err));
}
