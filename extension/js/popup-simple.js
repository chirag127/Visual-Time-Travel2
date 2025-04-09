/**
 * Visual Time Travel - Popup Script (Simplified Version)
 *
 * Handles the popup UI and user interactions
 */

// API Base URL
const API_BASE_URL = "https://visual-time-travel2.onrender.com/api";

// DOM Elements
const authSection = document.getElementById("auth-section");
const loginForm = document.getElementById("login-form");
const loginFormElement = document.getElementById("login-form-element");
const loginError = document.getElementById("login-error");
const signupForm = document.getElementById("signup-form");
const signupFormElement = document.getElementById("signup-form-element");
const signupError = document.getElementById("signup-error");
const userInfo = document.getElementById("user-info");
const userEmail = document.getElementById("user-email");
const logoutBtn = document.getElementById("logout-btn");
const showSignupBtn = document.getElementById("show-signup-btn");
const showLoginBtn = document.getElementById("show-login-btn");

const controlsSection = document.getElementById("controls-section");
const captureToggle = document.getElementById("capture-toggle");
// Removed retention days
const savePreferencesBtn = document.getElementById("save-preferences-btn");
const preferencesMessage = document.getElementById("preferences-message");

const timelineSection = document.getElementById("timeline-section");
const openTimelineBtn = document.getElementById("open-timeline-btn");

// Storage functions
function getFromStorage(key) {
    return new Promise((resolve) => {
        chrome.storage.local.get([key], (result) => {
            resolve(result[key]);
        });
    });
}

function saveToStorage(key, value) {
    return new Promise((resolve) => {
        chrome.storage.local.set({ [key]: value }, resolve);
    });
}

function removeFromStorage(key) {
    return new Promise((resolve) => {
        chrome.storage.local.remove(key, resolve);
    });
}

// Authentication functions
async function getAuth() {
    const auth = await getFromStorage("auth");

    if (auth && auth.token && new Date(auth.expiresAt) > new Date()) {
        return auth;
    }

    return null;
}

async function isAuthenticated() {
    const auth = await getAuth();
    return !!auth;
}

// API functions
async function apiRequest(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;

    const headers = {
        "Content-Type": "application/json",
        ...options.headers,
    };

    const auth = await getAuth();
    if (auth && auth.token) {
        headers["Authorization"] = `Bearer ${auth.token}`;
    }

    const config = {
        ...options,
        headers,
    };

    console.log(`API Request: ${options.method || "GET"} ${url}`, options.body);

    try {
        const response = await fetch(url, config);
        const data = await response.json();

        console.log("API Response:", data);

        if (!response.ok) {
            throw new Error(
                data.message ||
                    `Server responded with ${response.status}: ${response.statusText}`
            );
        }

        return data;
    } catch (error) {
        console.error("API Error:", error.message);
        throw error;
    }
}

async function login(credentials) {
    const result = await apiRequest("/auth/login", {
        method: "POST",
        body: JSON.stringify(credentials),
    });

    if (result.token) {
        // Calculate token expiration (default: 7 days)
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 7);

        // Store authentication data
        await saveToStorage("auth", {
            token: result.token,
            userId: result.userId,
            email: credentials.email,
            expiresAt: expiresAt.toISOString(),
        });
    }

    return result;
}

async function register(userData) {
    return apiRequest("/auth/signup", {
        method: "POST",
        body: JSON.stringify(userData),
    });
}

async function logout() {
    try {
        await apiRequest("/auth/logout", { method: "POST" });
    } catch (error) {
        console.warn("Logout API call failed, clearing local storage anyway");
    }

    // Clear authentication data
    await removeFromStorage("auth");
}

// Preferences functions
async function getPreferences() {
    const defaultPreferences = {
        isCapturingEnabled: true,
        // Removed retentionDays property
    };

    const preferences = await getFromStorage("preferences");
    return preferences || defaultPreferences;
}

async function updatePreferences(newPreferences) {
    const currentPreferences = await getPreferences();
    const updatedPreferences = { ...currentPreferences, ...newPreferences };
    await saveToStorage("preferences", updatedPreferences);
    return updatedPreferences;
}

// Initialize popup
async function initializePopup() {
    try {
        console.log("Initializing popup...");

        // Check authentication status
        const authenticated = await isAuthenticated();

        console.log("Authentication status:", authenticated);

        if (authenticated) {
            // Show user info
            const auth = await getAuth();
            userEmail.textContent = auth.email || "User";
            userInfo.classList.remove("hidden");
            loginForm.classList.add("hidden");
            signupForm.classList.add("hidden");

            // Show controls and timeline sections
            controlsSection.classList.remove("hidden");
            timelineSection.classList.remove("hidden");

            // Load preferences
            const preferences = await getPreferences();
            captureToggle.checked = preferences.isCapturingEnabled;
            // Removed retentionDays setting
        } else {
            // Show login form
            loginForm.classList.remove("hidden");
            userInfo.classList.add("hidden");
            signupForm.classList.add("hidden");

            // Hide controls and timeline sections
            controlsSection.classList.add("hidden");
            timelineSection.classList.add("hidden");
        }
    } catch (error) {
        console.error("Error initializing popup:", error);
    }
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded, initializing popup");

    // Initialize popup
    initializePopup();

    // Handle login form submission
    loginFormElement.addEventListener("submit", async (event) => {
        event.preventDefault();
        console.log("Login form submitted");

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            loginError.classList.add("hidden");

            // Login user
            await login({ email, password });

            // Refresh popup
            initializePopup();
        } catch (error) {
            console.error("Login error:", error);
            loginError.textContent =
                error.message || "Login failed. Please try again.";
            loginError.classList.remove("hidden");
        }
    });

    // Handle signup form submission
    signupFormElement.addEventListener("submit", async (event) => {
        event.preventDefault();
        console.log("Signup form submitted");

        const email = document.getElementById("signup-email").value;
        const password = document.getElementById("signup-password").value;
        const confirmPassword =
            document.getElementById("confirm-password").value;

        // Validate passwords match
        if (password !== confirmPassword) {
            signupError.textContent = "Passwords do not match.";
            signupError.classList.remove("hidden");
            return;
        }

        try {
            signupError.classList.add("hidden");

            // Register user
            await register({ email, password });

            // Login after successful registration
            await login({ email, password });

            // Refresh popup
            initializePopup();
        } catch (error) {
            console.error("Signup error:", error);
            signupError.textContent =
                error.message || "Registration failed. Please try again.";
            signupError.classList.remove("hidden");
        }
    });

    // Handle logout button click
    logoutBtn.addEventListener("click", async () => {
        console.log("Logout button clicked");

        try {
            await logout();
            initializePopup();
        } catch (error) {
            console.error("Logout error:", error);
        }
    });

    // Handle show signup button click
    showSignupBtn.addEventListener("click", () => {
        console.log("Show signup button clicked");
        loginForm.classList.add("hidden");
        signupForm.classList.remove("hidden");
    });

    // Handle show login button click
    showLoginBtn.addEventListener("click", () => {
        console.log("Show login button clicked");
        signupForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    });

    // Handle save preferences button click
    savePreferencesBtn.addEventListener("click", async () => {
        console.log("Save preferences button clicked");

        try {
            const preferences = {
                isCapturingEnabled: captureToggle.checked,
                // Removed retentionDays property
            };

            // Update local preferences
            await updatePreferences(preferences);

            // Update background script
            chrome.runtime.sendMessage({
                action: "toggleCapturing",
                enabled: preferences.isCapturingEnabled,
            });

            // Show success message
            preferencesMessage.textContent = "Preferences saved successfully.";
            preferencesMessage.classList.remove("hidden", "error");
            preferencesMessage.classList.add("success");

            // Hide message after 3 seconds
            setTimeout(() => {
                preferencesMessage.classList.add("hidden");
            }, 3000);
        } catch (error) {
            console.error("Save preferences error:", error);

            // Show error message
            preferencesMessage.textContent = "Failed to save preferences.";
            preferencesMessage.classList.remove("hidden", "success");
            preferencesMessage.classList.add("error");
        }
    });

    // Handle open timeline button click
    openTimelineBtn.addEventListener("click", () => {
        console.log("Open timeline button clicked");
        chrome.tabs.create({
            url: chrome.runtime.getURL("html/timeline.html"),
        });
    });
});
