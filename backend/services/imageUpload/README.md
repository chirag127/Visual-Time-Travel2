# Image Upload Service

A modular, reusable service for uploading images to various image hosting providers.

## Features

- Upload images to FreeImage.host
- Configurable API settings
- Comprehensive error handling
- Input validation
- Standardized response format
- Well-documented with JSDoc comments

## Installation

This service is part of the Visual Time Travel backend. No additional installation is required.

## Usage

### Basic Usage

```javascript
const { uploadToFreeImageHost } = require('./services/imageUpload');

// Upload a base64 image
async function uploadScreenshot(base64Image) {
  try {
    const result = await uploadToFreeImageHost(base64Image);
    console.log('Image uploaded successfully:', result.url);
    return result.url;
  } catch (error) {
    console.error('Upload failed:', error.message);
    throw error;
  }
}
```

### Advanced Usage

```javascript
const { uploadToFreeImageHost } = require('./services/imageUpload');

// Upload with custom options
async function uploadWithOptions(base64Image) {
  const options = {
    apiKey: process.env.CUSTOM_API_KEY,
    additionalFormData: {
      expiration: '1d',
      title: 'My Custom Image'
    },
    axiosConfig: {
      timeout: 10000
    }
  };
  
  const result = await uploadToFreeImageHost(base64Image, options);
  return result;
}
```

## API Reference

### `uploadToFreeImageHost(imageBase64, options)`

Uploads an image to FreeImage.host.

#### Parameters

- `imageBase64` (string): Base64 encoded image data (with or without data URL prefix)
- `options` (object, optional): Configuration options
  - `apiKey` (string, optional): Custom API key
  - `apiUrl` (string, optional): Custom API URL
  - `additionalFormData` (object, optional): Additional form data to include
  - `axiosConfig` (object, optional): Additional axios configuration

#### Returns

Promise that resolves to an object containing:

- `url` (string): Direct URL to the uploaded image
- `displayUrl` (string): URL for displaying the image
- `thumbnailUrl` (string): URL to the thumbnail version
- `size` (number): Size of the image in bytes
- `width` (number): Width of the image in pixels
- `height` (number): Height of the image in pixels
- `timestamp` (string): ISO timestamp of when the upload completed

#### Throws

- Error if the image data is invalid
- Error if the upload fails

## Error Handling

All errors from the service are standardized with the following structure:

```javascript
{
  message: 'Human-readable error message',
  originalError: 'Original error message from the API or library',
  timestamp: '2023-05-01T12:34:56.789Z',
  code: 'ERROR_CODE'
}
```

## Testing

Run the tests with Jest:

```bash
npm test -- --testPathPattern=services/imageUpload
```

## License

MIT
