/**
 * Background script for Visual Time Travel extension
 * Handles tab switch detection, screenshot capture, and API communication
 */

chrome.tabs.onActivated.addListener(async (activeInfo) => {
    console.log('Tab activated:', activeInfo);
    // Placeholder: capture screenshot and send to backend
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
        console.log('Tab updated:', tab);
        // Placeholder: capture screenshot and send to backend
    }
});

/**
 * Capture visible tab screenshot
 */
async function captureAndSend(tabId) {
    try {
        const imageUri = await chrome.tabs.captureVisibleTab();
        console.log('Captured screenshot for tab', tabId);

        // Placeholder: send imageUri and metadata to backend API
    } catch (error) {
        console.error('Error capturing screenshot:', error);
    }
}