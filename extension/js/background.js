/**
 * Visual Time Travel - Background Script
 * 
 * This script runs in the background and handles:
 * - Tab switching detection
 * - Screenshot capture
 * - Communication with the backend API
 */

// Configuration
const API_BASE_URL = 'http://localhost:5000/api';
let isCapturingEnabled = true;
let lastActiveTabId = null;
let processingTab = false;

// Initialize extension
async function initialize() {
  console.log('Visual Time Travel: Initializing extension...');
  
  // Load user preferences
  const preferences = await loadPreferences();
  isCapturingEnabled = preferences.isCapturingEnabled;
  
  // Check authentication status
  const authStatus = await checkAuthStatus();
  
  // Set badge based on capture status
  updateBadge();
  
  console.log('Visual Time Travel: Initialization complete');
  console.log('Capturing enabled:', isCapturingEnabled);
  console.log('Authentication status:', authStatus ? 'Logged in' : 'Not logged in');
}

// Load user preferences from storage
async function loadPreferences() {
  return new Promise((resolve) => {
    chrome.storage.local.get(['preferences'], (result) => {
      const defaultPreferences = {
        isCapturingEnabled: true,
        retentionDays: 30
      };
      
      resolve(result.preferences || defaultPreferences);
    });
  });
}

// Save user preferences to storage
async function savePreferences(preferences) {
  return new Promise((resolve) => {
    chrome.storage.local.set({ preferences }, resolve);
  });
}

// Check if user is authenticated
async function checkAuthStatus() {
  return new Promise((resolve) => {
    chrome.storage.local.get(['auth'], (result) => {
      const isAuthenticated = !!(result.auth && result.auth.token && result.auth.expiresAt && new Date(result.auth.expiresAt) > new Date());
      resolve(isAuthenticated);
    });
  });
}

// Get authentication token
async function getAuthToken() {
  return new Promise((resolve) => {
    chrome.storage.local.get(['auth'], (result) => {
      if (result.auth && result.auth.token && new Date(result.auth.expiresAt) > new Date()) {
        resolve(result.auth.token);
      } else {
        resolve(null);
      }
    });
  });
}

// Update extension badge based on capture status
function updateBadge() {
  const badgeText = isCapturingEnabled ? 'ON' : 'OFF';
  const badgeColor = isCapturingEnabled ? '#4CAF50' : '#F44336';
  
  chrome.action.setBadgeText({ text: badgeText });
  chrome.action.setBadgeBackgroundColor({ color: badgeColor });
}

// Toggle screenshot capturing
async function toggleCapturing() {
  isCapturingEnabled = !isCapturingEnabled;
  
  // Update preferences
  const preferences = await loadPreferences();
  preferences.isCapturingEnabled = isCapturingEnabled;
  await savePreferences(preferences);
  
  // Update badge
  updateBadge();
  
  return isCapturingEnabled;
}

// Capture screenshot of active tab
async function captureScreenshot(tabId, tabInfo) {
  if (processingTab) {
    console.log('Already processing a tab, skipping capture');
    return;
  }
  
  processingTab = true;
  
  try {
    // Check if capturing is enabled and user is authenticated
    const isAuthenticated = await checkAuthStatus();
    
    if (!isCapturingEnabled || !isAuthenticated) {
      processingTab = false;
      return;
    }
    
    // Skip capturing for certain URLs
    if (shouldSkipCapture(tabInfo.url)) {
      processingTab = false;
      return;
    }
    
    console.log('Capturing screenshot for tab:', tabId, tabInfo.url);
    
    // Capture screenshot
    const screenshotDataUrl = await chrome.tabs.captureVisibleTab(null, { format: 'png' });
    
    // Extract base64 data from data URL
    const base64Data = screenshotDataUrl.replace(/^data:image\/png;base64,/, '');
    
    // Get favicon URL
    let faviconUrl = '';
    if (tabInfo.favIconUrl) {
      faviconUrl = tabInfo.favIconUrl;
    }
    
    // Upload to backend
    await uploadScreenshot({
      imageData: base64Data,
      url: tabInfo.url,
      title: tabInfo.title,
      favicon: faviconUrl,
      timestamp: new Date().toISOString()
    });
    
    console.log('Screenshot captured and uploaded successfully');
  } catch (error) {
    console.error('Error capturing screenshot:', error);
  } finally {
    processingTab = false;
  }
}

// Check if we should skip capturing for certain URLs
function shouldSkipCapture(url) {
  // Skip chrome:// URLs
  if (url.startsWith('chrome://') || url.startsWith('chrome-extension://')) {
    return true;
  }
  
  // Skip new tab page
  if (url === 'chrome://newtab/' || url === 'about:blank') {
    return true;
  }
  
  // Skip our own extension pages
  if (url.includes(chrome.runtime.id)) {
    return true;
  }
  
  return false;
}

// Upload screenshot to backend
async function uploadScreenshot(data) {
  const token = await getAuthToken();
  
  if (!token) {
    console.error('No authentication token available');
    return;
  }
  
  try {
    const response = await fetch(`${API_BASE_URL}/upload-screenshot`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
    
    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}: ${response.statusText}`);
    }
    
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error uploading screenshot:', error);
    throw error;
  }
}

// Listen for tab activation changes
chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const { tabId } = activeInfo;
  
  // Skip if it's the same tab
  if (tabId === lastActiveTabId) {
    return;
  }
  
  // Update last active tab
  lastActiveTabId = tabId;
  
  try {
    // Get tab info
    const tab = await chrome.tabs.get(tabId);
    
    // Capture screenshot
    await captureScreenshot(tabId, tab);
  } catch (error) {
    console.error('Error handling tab activation:', error);
  }
});

// Listen for tab updates (URL changes)
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  // Only capture when the page has completed loading
  if (changeInfo.status === 'complete' && tab.active) {
    try {
      // Capture screenshot
      await captureScreenshot(tabId, tab);
    } catch (error) {
      console.error('Error handling tab update:', error);
    }
  }
});

// Listen for messages from popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  (async () => {
    try {
      if (message.action === 'getCapturingStatus') {
        sendResponse({ isCapturingEnabled });
      } else if (message.action === 'toggleCapturing') {
        const newStatus = await toggleCapturing();
        sendResponse({ isCapturingEnabled: newStatus });
      } else if (message.action === 'checkAuth') {
        const isAuthenticated = await checkAuthStatus();
        sendResponse({ isAuthenticated });
      } else if (message.action === 'login') {
        // Store auth data
        chrome.storage.local.set({ auth: message.data }, () => {
          sendResponse({ success: true });
        });
      } else if (message.action === 'logout') {
        // Clear auth data
        chrome.storage.local.remove('auth', () => {
          sendResponse({ success: true });
        });
      }
    } catch (error) {
      console.error('Error handling message:', error);
      sendResponse({ error: error.message });
    }
  })();
  
  // Return true to indicate we'll respond asynchronously
  return true;
});

// Initialize extension when installed or updated
chrome.runtime.onInstalled.addListener(initialize);

// Initialize when extension is loaded
initialize();
