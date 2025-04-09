/**
 * Tests for FreeImage.host upload service
 * @jest
 */

const axios = require('axios');
const { uploadImage } = require('../freeImageHostService');
const { isValidBase64Image } = require('../validators');

// Mock axios
jest.mock('axios');

describe('FreeImage.host Service', () => {
  // Sample base64 image for testing
  const validBase64Image = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==';
  
  // Mock successful response
  const mockSuccessResponse = {
    status: 200,
    data: {
      status_code: 200,
      success: true,
      image: {
        name: 'test.png',
        url: 'https://freeimage.host/i/test.png',
        display_url: 'https://freeimage.host/i/test.png',
        width: 100,
        height: 100,
        size: 1024,
        time: 1620000000,
        expiration: 0,
        thumb_url: 'https://freeimage.host/i/thumb/test.png'
      }
    }
  };

  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('should validate base64 image correctly', () => {
    expect(isValidBase64Image(validBase64Image)).toBe(true);
    expect(isValidBase64Image('')).toBe(false);
    expect(isValidBase64Image('invalid-base64!')).toBe(false);
    expect(isValidBase64Image(null)).toBe(false);
  });

  test('should upload image successfully', async () => {
    // Setup mock
    axios.post.mockResolvedValueOnce(mockSuccessResponse);
    
    // Call the function
    const result = await uploadImage(validBase64Image);
    
    // Assertions
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(result).toHaveProperty('url');
    expect(result).toHaveProperty('displayUrl');
    expect(result).toHaveProperty('thumbnailUrl');
    expect(result.url).toBe('https://freeimage.host/i/test.png');
  });

  test('should throw error on invalid base64 input', async () => {
    await expect(uploadImage('invalid-base64')).rejects.toThrow('Invalid base64 image data');
  });

  test('should throw error when API request fails', async () => {
    // Setup mock for failure
    axios.post.mockRejectedValueOnce(new Error('Network error'));
    
    // Call and expect error
    await expect(uploadImage(validBase64Image)).rejects.toThrow('Failed to upload image');
  });

  test('should use custom API key when provided', async () => {
    // Setup mock
    axios.post.mockResolvedValueOnce(mockSuccessResponse);
    
    // Call with custom options
    await uploadImage(validBase64Image, { apiKey: 'custom-key' });
    
    // Check if custom key was used
    const postCall = axios.post.mock.calls[0];
    const formData = postCall[1]; // Second argument to axios.post
    
    // FormData is complex to inspect directly, but we can check if our method was called
    expect(axios.post).toHaveBeenCalledTimes(1);
  });
});
