# Testing the Visual Time Travel Extension

This document provides instructions on how to test the Visual Time Travel browser extension.

## Prerequisites

1. Make sure the backend server is running on `https://visual-time-travel2.onrender.com`
2. Make sure you have Chrome, Edge, or Firefox installed

## Loading the Extension in Chrome

### Method 1: Using the load-extension.bat script

1. Close all Chrome windows
2. Double-click the `load-extension.bat` file
3. Chrome will start with the extension loaded

### Method 2: Manual loading

1. Open Chrome
2. Navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in the top-right corner)
4. Click "Load unpacked"
5. Select the `extension` directory

## Testing the Extension

### 1. Authentication

1. Click on the extension icon in the toolbar to open the popup
2. Sign up with an email and password
3. After successful registration, you should be automatically logged in
4. You should see your email displayed and the controls section

### 2. Capturing Screenshots

1. Navigate to different websites
2. The extension should automatically capture screenshots when you switch tabs
3. You can toggle screenshot capturing on/off in the extension popup

### 3. Viewing Timeline

1. Click on "View Timeline" in the extension popup
2. You should see a grid of screenshots representing your browsing history
3. Try filtering by date or domain
4. Try searching for specific content
5. Click "Revisit" on a history item to open that page

### 4. Debugging

If you encounter issues, you can use the test page to diagnose problems:

1. Open a new tab
2. Navigate to `chrome-extension://[EXTENSION_ID]/html/test.html`
   (Replace `[EXTENSION_ID]` with your actual extension ID from `chrome://extensions/`)
3. Use the buttons on the test page to check:
    - Authentication status
    - Storage data
    - API connection

### 5. Checking the Backend

You can also check if data is being saved to the backend:

1. Open a terminal
2. Run the following command to check if history items are being saved:
    ```
    curl https://visual-time-travel2.onrender.com/api/history -H "Authorization: Bearer YOUR_TOKEN"
    ```
    (Replace `YOUR_TOKEN` with the actual token from the test page)

## Troubleshooting

### Login/Registration Issues

-   Check if the backend server is running
-   Check browser console for errors
-   Try using the test page to diagnose authentication issues

### Screenshot Capture Issues

-   Make sure you're logged in
-   Check if capturing is enabled in the popup
-   Check browser console for errors
-   Try navigating to different websites

### Timeline Issues

-   Make sure you have captured some screenshots
-   Check browser console for errors
-   Try refreshing the timeline page
