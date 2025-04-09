# Visual Time Travel - Browser Extension

The browser extension component of Visual Time Travel that captures screenshots and provides a visual timeline of browsing history.

## Features

- Automatic screenshot capture on tab switch
- Visual timeline of browsing history
- User authentication
- Customizable preferences
- Cross-browser support (Chrome, Edge, Firefox)

## Directory Structure

```
extension/
├── css/                  # Stylesheets
│   ├── popup.css         # Popup UI styles
│   └── timeline.css      # Timeline UI styles
├── html/                 # HTML files
│   ├── popup.html        # Popup UI
│   └── timeline.html     # Timeline UI
├── images/               # Icons and images
│   ├── icon16.png        # 16x16 icon
│   ├── icon48.png        # 48x48 icon
│   └── icon128.png       # 128x128 icon
├── js/                   # JavaScript files
│   ├── api.js            # API service
│   ├── background.js     # Background script
│   ├── popup.js          # Popup UI script
│   ├── storage.js        # Storage service
│   └── timeline.js       # Timeline UI script
├── manifest.json         # Extension manifest
├── package.json          # Package configuration
└── README.md             # This file
```

## Installation

### Development Mode

1. Clone the repository
2. Open Chrome/Edge/Firefox and navigate to the extensions page
   - Chrome: `chrome://extensions/`
   - Edge: `edge://extensions/`
   - Firefox: `about:debugging#/runtime/this-firefox`
3. Enable Developer Mode
4. Click "Load unpacked" (Chrome/Edge) or "Load Temporary Add-on" (Firefox)
5. Select the `extension` directory

### Production Mode

1. Run `npm run package` to create a ZIP file
2. Upload the ZIP file to the Chrome Web Store, Edge Add-ons, or Firefox Add-ons

## Usage

1. Click the extension icon to open the popup
2. Sign up or log in to your account
3. Toggle screenshot capturing on/off
4. Click "View Timeline" to see your browsing history
5. Use filters and search to find specific history items
6. Click "Revisit" to open a history item in a new tab

## Development

- The extension uses Manifest V3
- Background script runs as a service worker
- All API calls go through the backend server
- Authentication uses JWT stored in local storage

## License

MIT
