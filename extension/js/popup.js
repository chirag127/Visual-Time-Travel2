/**
 * Visual Time Travel - Popup Script
 * 
 * Handles the popup UI and user interactions
 */

import apiService from './api.js';
import storageService from './storage.js';

// DOM Elements
const authSection = document.getElementById('auth-section');
const loginForm = document.getElementById('login-form');
const loginFormElement = document.getElementById('login-form-element');
const loginError = document.getElementById('login-error');
const signupForm = document.getElementById('signup-form');
const signupFormElement = document.getElementById('signup-form-element');
const signupError = document.getElementById('signup-error');
const userInfo = document.getElementById('user-info');
const userEmail = document.getElementById('user-email');
const logoutBtn = document.getElementById('logout-btn');
const showSignupBtn = document.getElementById('show-signup-btn');
const showLoginBtn = document.getElementById('show-login-btn');

const controlsSection = document.getElementById('controls-section');
const captureToggle = document.getElementById('capture-toggle');
const retentionDays = document.getElementById('retention-days');
const savePreferencesBtn = document.getElementById('save-preferences-btn');
const preferencesMessage = document.getElementById('preferences-message');

const timelineSection = document.getElementById('timeline-section');
const openTimelineBtn = document.getElementById('open-timeline-btn');

// Initialize popup
async function initializePopup() {
  try {
    // Check authentication status
    const isAuthenticated = await storageService.isAuthenticated();
    
    if (isAuthenticated) {
      // Show user info
      const auth = await storageService.getAuth();
      userEmail.textContent = auth.email || 'User';
      userInfo.classList.remove('hidden');
      loginForm.classList.add('hidden');
      signupForm.classList.add('hidden');
      
      // Show controls and timeline sections
      controlsSection.classList.remove('hidden');
      timelineSection.classList.remove('hidden');
      
      // Load preferences
      const preferences = await storageService.getPreferences();
      captureToggle.checked = preferences.isCapturingEnabled;
      retentionDays.value = preferences.retentionDays;
    } else {
      // Show login form
      loginForm.classList.remove('hidden');
      userInfo.classList.add('hidden');
      signupForm.classList.add('hidden');
      
      // Hide controls and timeline sections
      controlsSection.classList.add('hidden');
      timelineSection.classList.add('hidden');
    }
  } catch (error) {
    console.error('Error initializing popup:', error);
  }
}

// Handle login form submission
loginFormElement.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  try {
    loginError.classList.add('hidden');
    
    // Login user
    const result = await apiService.login({ email, password });
    
    // Store email in auth data
    const auth = await storageService.getAuth();
    await storageService.setAuth({ ...auth, email });
    
    // Refresh popup
    initializePopup();
  } catch (error) {
    console.error('Login error:', error);
    loginError.textContent = error.message || 'Login failed. Please try again.';
    loginError.classList.remove('hidden');
  }
});

// Handle signup form submission
signupFormElement.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  
  // Validate passwords match
  if (password !== confirmPassword) {
    signupError.textContent = 'Passwords do not match.';
    signupError.classList.remove('hidden');
    return;
  }
  
  try {
    signupError.classList.add('hidden');
    
    // Register user
    await apiService.register({ email, password });
    
    // Login after successful registration
    await apiService.login({ email, password });
    
    // Store email in auth data
    const auth = await storageService.getAuth();
    await storageService.setAuth({ ...auth, email });
    
    // Refresh popup
    initializePopup();
  } catch (error) {
    console.error('Signup error:', error);
    signupError.textContent = error.message || 'Registration failed. Please try again.';
    signupError.classList.remove('hidden');
  }
});

// Handle logout button click
logoutBtn.addEventListener('click', async () => {
  try {
    await apiService.logout();
    initializePopup();
  } catch (error) {
    console.error('Logout error:', error);
  }
});

// Handle show signup button click
showSignupBtn.addEventListener('click', () => {
  loginForm.classList.add('hidden');
  signupForm.classList.remove('hidden');
});

// Handle show login button click
showLoginBtn.addEventListener('click', () => {
  signupForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
});

// Handle save preferences button click
savePreferencesBtn.addEventListener('click', async () => {
  try {
    const preferences = {
      isCapturingEnabled: captureToggle.checked,
      retentionDays: parseInt(retentionDays.value, 10)
    };
    
    // Update local preferences
    await storageService.updatePreferences(preferences);
    
    // Update background script
    chrome.runtime.sendMessage({ action: 'toggleCapturing', enabled: preferences.isCapturingEnabled });
    
    // Show success message
    preferencesMessage.textContent = 'Preferences saved successfully.';
    preferencesMessage.classList.remove('hidden', 'error');
    preferencesMessage.classList.add('success');
    
    // Hide message after 3 seconds
    setTimeout(() => {
      preferencesMessage.classList.add('hidden');
    }, 3000);
  } catch (error) {
    console.error('Save preferences error:', error);
    
    // Show error message
    preferencesMessage.textContent = 'Failed to save preferences.';
    preferencesMessage.classList.remove('hidden', 'success');
    preferencesMessage.classList.add('error');
  }
});

// Handle open timeline button click
openTimelineBtn.addEventListener('click', () => {
  chrome.tabs.create({ url: chrome.runtime.getURL('html/timeline.html') });
});

// Initialize popup when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePopup);
