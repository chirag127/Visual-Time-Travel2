/**
 * Visual Time Travel - Popup Script (Debug Version)
 *
 * Handles the popup UI and user interactions with additional debugging
 */

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
const retentionDays = document.getElementById("retention-days");
const savePreferencesBtn = document.getElementById("save-preferences-btn");
const preferencesMessage = document.getElementById("preferences-message");

const timelineSection = document.getElementById("timeline-section");
const openTimelineBtn = document.getElementById("open-timeline-btn");

// API Base URL
const API_BASE_URL = "https://visual-time-travel2.onrender.com/api";

// Debug logging
function debugLog(message, data = null) {
    const logElement = document.createElement("div");
    logElement.style.color = "#666";
    logElement.style.fontSize = "10px";
    logElement.style.margin = "5px 0";
    logElement.style.padding = "5px";
    logElement.style.backgroundColor = "#f5f5f5";
    logElement.style.borderRadius = "3px";
    logElement.textContent = message;

    if (data) {
        const dataElement = document.createElement("pre");
        dataElement.style.fontSize = "9px";
        dataElement.style.margin = "3px 0 0 0";
        dataElement.style.padding = "3px";
        dataElement.style.backgroundColor = "#eee";
        dataElement.textContent =
            typeof data === "object" ? JSON.stringify(data, null, 2) : data;
        logElement.appendChild(dataElement);
    }

    document.body.appendChild(logElement);
    console.log(message, data);
}

// Initialize popup
async function initializePopup() {
    try {
        debugLog("Initializing popup...");

        // Check authentication status
        const auth = await getAuth();
        const isAuthenticated = !!auth;

        debugLog("Authentication status:", isAuthenticated);

        if (isAuthenticated) {
            // Show user info
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
            retentionDays.value = preferences.retentionDays;

            debugLog("Loaded preferences:", preferences);
        } else {
            // Show login form
            loginForm.classList.remove("hidden");
            userInfo.classList.add("hidden");
            signupForm.classList.add("hidden");

            // Hide controls and timeline sections
            controlsSection.classList.add("hidden");
            timelineSection.classList.add("hidden");

            debugLog("Showing login form");
        }
    } catch (error) {
        debugLog("Error initializing popup:", error.message);
    }
}

// Get authentication data from storage
async function getAuth() {
    return new Promise((resolve) => {
        chrome.storage.local.get(["auth"], (result) => {
            const auth = result.auth;

            if (auth && auth.token && new Date(auth.expiresAt) > new Date()) {
                resolve(auth);
            } else {
                resolve(null);
            }
        });
    });
}

// Get preferences from storage
async function getPreferences() {
    return new Promise((resolve) => {
        chrome.storage.local.get(["preferences"], (result) => {
            const defaultPreferences = {
                isCapturingEnabled: true,
                retentionDays: 30,
            };

            resolve(result.preferences || defaultPreferences);
        });
    });
}

// Make API request
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

    debugLog(`API Request: ${options.method || "GET"} ${url}`, options.body);

    try {
        const response = await fetch(url, config);
        const data = await response.json();

        debugLog("API Response:", data);

        if (!response.ok) {
            throw new Error(
                data.message ||
                    `Server responded with ${response.status}: ${response.statusText}`
            );
        }

        return data;
    } catch (error) {
        debugLog("API Error:", error.message);
        throw error;
    }
}

// Login user
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
        await new Promise((resolve) => {
            chrome.storage.local.set(
                {
                    auth: {
                        token: result.token,
                        userId: result.userId,
                        email: credentials.email,
                        expiresAt: expiresAt.toISOString(),
                    },
                },
                resolve
            );
        });
    }

    return result;
}

// Register user
async function register(userData) {
    return apiRequest("/auth/signup", {
        method: "POST",
        body: JSON.stringify(userData),
    });
}

// Logout user
async function logout() {
    try {
        await apiRequest("/auth/logout", { method: "POST" });
    } catch (error) {
        debugLog("Logout API call failed, clearing local storage anyway");
    }

    // Clear authentication data
    return new Promise((resolve) => {
        chrome.storage.local.remove("auth", resolve);
    });
}

// Handle login form submission
loginFormElement.addEventListener("submit", async (event) => {
    event.preventDefault();
    debugLog("Login form submitted");

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    debugLog("Login credentials:", { email, password: "********" });

    try {
        loginError.classList.add("hidden");

        // Login user
        const result = await login({ email, password });
        debugLog("Login successful:", result);

        // Refresh popup
        initializePopup();
    } catch (error) {
        debugLog("Login error:", error.message);
        loginError.textContent =
            error.message || "Login failed. Please try again.";
        loginError.classList.remove("hidden");
    }
});

// Handle signup form submission
signupFormElement.addEventListener("submit", async (event) => {
    event.preventDefault();
    debugLog("Signup form submitted");

    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    debugLog("Signup data:", {
        email,
        password: "********",
        confirmPassword: "********",
    });

    // Validate passwords match
    if (password !== confirmPassword) {
        signupError.textContent = "Passwords do not match.";
        signupError.classList.remove("hidden");
        debugLog("Passwords do not match");
        return;
    }

    try {
        signupError.classList.add("hidden");

        // Register user
        const registerResult = await register({ email, password });
        debugLog("Registration successful:", registerResult);

        // Login after successful registration
        const loginResult = await login({ email, password });
        debugLog("Auto-login after registration successful:", loginResult);

        // Refresh popup
        initializePopup();
    } catch (error) {
        debugLog("Signup error:", error.message);
        signupError.textContent =
            error.message || "Registration failed. Please try again.";
        signupError.classList.remove("hidden");
    }
});

// Handle logout button click
logoutBtn.addEventListener("click", async () => {
    debugLog("Logout button clicked");

    try {
        await logout();
        debugLog("Logout successful");
        initializePopup();
    } catch (error) {
        debugLog("Logout error:", error.message);
    }
});

// Handle show signup button click
showSignupBtn.addEventListener("click", () => {
    debugLog("Show signup button clicked");
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
});

// Handle show login button click
showLoginBtn.addEventListener("click", () => {
    debugLog("Show login button clicked");
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
});

// Handle save preferences button click
savePreferencesBtn.addEventListener("click", async () => {
    debugLog("Save preferences button clicked");

    try {
        const preferences = {
            isCapturingEnabled: captureToggle.checked,
            retentionDays: parseInt(retentionDays.value, 10),
        };

        debugLog("Saving preferences:", preferences);

        // Update local preferences
        await new Promise((resolve) => {
            chrome.storage.local.set({ preferences }, resolve);
        });

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
        debugLog("Save preferences error:", error.message);

        // Show error message
        preferencesMessage.textContent = "Failed to save preferences.";
        preferencesMessage.classList.remove("hidden", "success");
        preferencesMessage.classList.add("error");
    }
});

// Handle open timeline button click
openTimelineBtn.addEventListener("click", () => {
    debugLog("Open timeline button clicked");
    chrome.tabs.create({ url: chrome.runtime.getURL("html/timeline.html") });
});

// Initialize popup when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    debugLog("DOM loaded, initializing popup");
    initializePopup();

    // Log DOM elements for debugging
    debugLog("DOM Elements:", {
        authSection: !!authSection,
        loginForm: !!loginForm,
        loginFormElement: !!loginFormElement,
        signupForm: !!signupForm,
        signupFormElement: !!signupFormElement,
        userInfo: !!userInfo,
    });
});
