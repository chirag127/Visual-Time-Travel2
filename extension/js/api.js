/**
 * Visual Time Travel - API Service
 *
 * Handles all communication with the backend API
 */

class ApiService {
    constructor() {
        this.baseUrl = "https://visual-time-travel2.onrender.com/api";
    }

    /**
     * Get the authentication token from storage
     * @returns {Promise<string|null>} The authentication token or null if not authenticated
     */
    async getAuthToken() {
        return new Promise((resolve) => {
            chrome.storage.local.get(["auth"], (result) => {
                if (
                    result.auth &&
                    result.auth.token &&
                    new Date(result.auth.expiresAt) > new Date()
                ) {
                    resolve(result.auth.token);
                } else {
                    resolve(null);
                }
            });
        });
    }

    /**
     * Make an authenticated API request
     * @param {string} endpoint - API endpoint
     * @param {Object} options - Fetch options
     * @returns {Promise<Object>} API response
     */
    async request(endpoint, options = {}) {
        const token = await this.getAuthToken();
        const url = `${this.baseUrl}${endpoint}`;

        const headers = {
            "Content-Type": "application/json",
            ...options.headers,
        };

        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }

        const config = {
            ...options,
            headers,
        };

        try {
            const response = await fetch(url, config);

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(
                    errorData.message ||
                        `Server responded with ${response.status}: ${response.statusText}`
                );
            }

            return await response.json();
        } catch (error) {
            console.error(`API request failed: ${endpoint}`, error);
            throw error;
        }
    }

    /**
     * Register a new user
     * @param {Object} userData - User registration data
     * @returns {Promise<Object>} Registration result
     */
    async register(userData) {
        return this.request("/auth/signup", {
            method: "POST",
            body: JSON.stringify(userData),
        });
    }

    /**
     * Login a user
     * @param {Object} credentials - User login credentials
     * @returns {Promise<Object>} Login result with token
     */
    async login(credentials) {
        const result = await this.request("/auth/login", {
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
                            expiresAt: expiresAt.toISOString(),
                        },
                    },
                    resolve
                );
            });
        }

        return result;
    }

    /**
     * Logout the current user
     * @returns {Promise<void>}
     */
    async logout() {
        try {
            await this.request("/auth/logout", { method: "POST" });
        } catch (error) {
            console.warn(
                "Logout API call failed, clearing local storage anyway"
            );
        }

        // Clear authentication data
        return new Promise((resolve) => {
            chrome.storage.local.remove("auth", resolve);
        });
    }

    /**
     * Upload a screenshot
     * @param {Object} screenshotData - Screenshot data
     * @returns {Promise<Object>} Upload result
     */
    async uploadScreenshot(screenshotData) {
        return this.request("/upload-screenshot", {
            method: "POST",
            body: JSON.stringify(screenshotData),
        });
    }

    /**
     * Get browsing history
     * @param {Object} options - Query options (limit, offset, search)
     * @returns {Promise<Object>} History items
     */
    async getHistory(options = {}) {
        const queryParams = new URLSearchParams();

        if (options.limit) queryParams.append("limit", options.limit);
        if (options.offset) queryParams.append("offset", options.offset);
        if (options.search) queryParams.append("search", options.search);

        const queryString = queryParams.toString();
        const endpoint = `/history${queryString ? `?${queryString}` : ""}`;

        return this.request(endpoint);
    }

    /**
     * Update user preferences
     * @param {Object} preferences - User preferences
     * @returns {Promise<Object>} Updated preferences
     */
    async updatePreferences(preferences) {
        return this.request("/preferences", {
            method: "PUT",
            body: JSON.stringify(preferences),
        });
    }
}

// Export as singleton
const apiService = new ApiService();
export default apiService;
