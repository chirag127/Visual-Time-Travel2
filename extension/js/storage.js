/**
 * Visual Time Travel - Storage Service
 * 
 * Handles all local storage operations
 */

class StorageService {
  /**
   * Get a value from storage
   * @param {string} key - Storage key
   * @param {*} defaultValue - Default value if key doesn't exist
   * @returns {Promise<*>} The stored value or default value
   */
  async get(key, defaultValue = null) {
    return new Promise((resolve) => {
      chrome.storage.local.get([key], (result) => {
        resolve(result[key] !== undefined ? result[key] : defaultValue);
      });
    });
  }

  /**
   * Set a value in storage
   * @param {string} key - Storage key
   * @param {*} value - Value to store
   * @returns {Promise<void>}
   */
  async set(key, value) {
    return new Promise((resolve) => {
      chrome.storage.local.set({ [key]: value }, resolve);
    });
  }

  /**
   * Remove a value from storage
   * @param {string} key - Storage key
   * @returns {Promise<void>}
   */
  async remove(key) {
    return new Promise((resolve) => {
      chrome.storage.local.remove(key, resolve);
    });
  }

  /**
   * Clear all storage
   * @returns {Promise<void>}
   */
  async clear() {
    return new Promise((resolve) => {
      chrome.storage.local.clear(resolve);
    });
  }

  /**
   * Get user authentication data
   * @returns {Promise<Object|null>} Authentication data or null if not authenticated
   */
  async getAuth() {
    const auth = await this.get('auth');
    
    if (auth && auth.token && new Date(auth.expiresAt) > new Date()) {
      return auth;
    }
    
    return null;
  }

  /**
   * Check if user is authenticated
   * @returns {Promise<boolean>} True if authenticated, false otherwise
   */
  async isAuthenticated() {
    const auth = await this.getAuth();
    return !!auth;
  }

  /**
   * Set authentication data
   * @param {Object} authData - Authentication data
   * @returns {Promise<void>}
   */
  async setAuth(authData) {
    return this.set('auth', authData);
  }

  /**
   * Clear authentication data
   * @returns {Promise<void>}
   */
  async clearAuth() {
    return this.remove('auth');
  }

  /**
   * Get user preferences
   * @returns {Promise<Object>} User preferences
   */
  async getPreferences() {
    const defaultPreferences = {
      isCapturingEnabled: true,
      retentionDays: 30
    };
    
    return this.get('preferences', defaultPreferences);
  }

  /**
   * Update user preferences
   * @param {Object} preferences - User preferences
   * @returns {Promise<Object>} Updated preferences
   */
  async updatePreferences(preferences) {
    const currentPreferences = await this.getPreferences();
    const updatedPreferences = { ...currentPreferences, ...preferences };
    await this.set('preferences', updatedPreferences);
    return updatedPreferences;
  }
}

// Export as singleton
const storageService = new StorageService();
export default storageService;
