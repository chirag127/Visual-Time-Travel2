/**
 * Visual Time Travel - Timeline Script
 * 
 * Handles the timeline UI and history display
 */

import apiService from './api.js';
import storageService from './storage.js';

// DOM Elements
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const clearSearchBtn = document.getElementById('clear-search-btn');
const dateFilter = document.getElementById('date-filter');
const domainFilter = document.getElementById('domain-filter');
const timelineContainer = document.getElementById('timeline-container');
const loadingIndicator = document.getElementById('loading-indicator');
const emptyState = document.getElementById('empty-state');
const loadMoreBtn = document.getElementById('load-more-btn');

// State
let historyItems = [];
let domains = new Set();
let currentPage = 1;
let isLoading = false;
let hasMoreItems = true;
let currentSearch = '';
let currentDateFilter = 'all';
let currentDomainFilter = 'all';
const PAGE_SIZE = 20;

// Initialize timeline
async function initializeTimeline() {
  try {
    // Check authentication
    const isAuthenticated = await storageService.isAuthenticated();
    
    if (!isAuthenticated) {
      // Redirect to popup for login
      window.location.href = chrome.runtime.getURL('html/popup.html');
      return;
    }
    
    // Load initial history items
    await loadHistoryItems();
    
    // Set up event listeners
    setupEventListeners();
  } catch (error) {
    console.error('Error initializing timeline:', error);
    showError('Failed to load timeline. Please try again later.');
  }
}

// Load history items from API
async function loadHistoryItems(reset = true) {
  if (isLoading) return;
  
  try {
    isLoading = true;
    
    if (reset) {
      // Reset state
      currentPage = 1;
      historyItems = [];
      timelineContainer.innerHTML = '';
      timelineContainer.appendChild(loadingIndicator);
      loadingIndicator.classList.remove('hidden');
      emptyState.classList.add('hidden');
      loadMoreBtn.classList.add('hidden');
    }
    
    // Prepare query options
    const options = {
      limit: PAGE_SIZE,
      offset: (currentPage - 1) * PAGE_SIZE
    };
    
    // Add search if present
    if (currentSearch) {
      options.search = currentSearch;
    }
    
    // Add date filter if not 'all'
    if (currentDateFilter !== 'all') {
      options.dateFilter = currentDateFilter;
    }
    
    // Add domain filter if not 'all'
    if (currentDomainFilter !== 'all') {
      options.domainFilter = currentDomainFilter;
    }
    
    // Fetch history items
    const result = await apiService.getHistory(options);
    
    // Update state
    const newItems = result.items || [];
    historyItems = reset ? newItems : [...historyItems, ...newItems];
    hasMoreItems = newItems.length === PAGE_SIZE;
    
    // Extract domains for filter
    if (reset) {
      domains = new Set();
      result.domains?.forEach(domain => domains.add(domain));
      updateDomainFilter();
    }
    
    // Render items
    renderHistoryItems();
    
    // Update UI
    loadingIndicator.classList.add('hidden');
    
    if (historyItems.length === 0) {
      emptyState.classList.remove('hidden');
    } else {
      emptyState.classList.add('hidden');
    }
    
    if (hasMoreItems) {
      loadMoreBtn.classList.remove('hidden');
    } else {
      loadMoreBtn.classList.add('hidden');
    }
  } catch (error) {
    console.error('Error loading history items:', error);
    showError('Failed to load history items. Please try again later.');
  } finally {
    isLoading = false;
  }
}

// Render history items
function renderHistoryItems() {
  // Remove loading indicator
  if (timelineContainer.contains(loadingIndicator)) {
    timelineContainer.removeChild(loadingIndicator);
  }
  
  // Create and append item elements
  historyItems.forEach(item => {
    const itemElement = createHistoryItemElement(item);
    timelineContainer.appendChild(itemElement);
  });
}

// Create a history item element
function createHistoryItemElement(item) {
  const itemElement = document.createElement('div');
  itemElement.className = 'timeline-item';
  
  // Extract domain from URL
  const url = new URL(item.url);
  const domain = url.hostname;
  
  // Format timestamp
  const timestamp = new Date(item.timestamp);
  const formattedDate = timestamp.toLocaleDateString();
  const formattedTime = timestamp.toLocaleTimeString();
  
  itemElement.innerHTML = `
    <div class="timeline-item-image">
      <img src="${item.thumbnailUrl || item.imageUrl}" alt="${item.title}" loading="lazy">
    </div>
    <div class="timeline-item-content">
      <h3 class="timeline-item-title" title="${item.title}">${item.title}</h3>
      <div class="timeline-item-url" title="${item.url}">${item.url}</div>
      <div class="timeline-item-time">${formattedDate} at ${formattedTime}</div>
      <div class="timeline-item-actions">
        <div class="timeline-item-domain">
          ${item.favicon ? `<img src="${item.favicon}" class="timeline-item-favicon" alt="${domain}">` : ''}
          ${domain}
        </div>
        <button class="timeline-item-visit" data-url="${item.url}">Revisit</button>
      </div>
    </div>
  `;
  
  // Add event listener for revisit button
  const revisitButton = itemElement.querySelector('.timeline-item-visit');
  revisitButton.addEventListener('click', () => {
    chrome.tabs.create({ url: item.url });
  });
  
  return itemElement;
}

// Update domain filter dropdown
function updateDomainFilter() {
  // Save current selection
  const currentSelection = domainFilter.value;
  
  // Clear options except 'All Domains'
  while (domainFilter.options.length > 1) {
    domainFilter.remove(1);
  }
  
  // Add domain options
  domains.forEach(domain => {
    const option = document.createElement('option');
    option.value = domain;
    option.textContent = domain;
    domainFilter.appendChild(option);
  });
  
  // Restore selection if it still exists
  if (Array.from(domainFilter.options).some(option => option.value === currentSelection)) {
    domainFilter.value = currentSelection;
  } else {
    domainFilter.value = 'all';
    currentDomainFilter = 'all';
  }
}

// Set up event listeners
function setupEventListeners() {
  // Search button
  searchBtn.addEventListener('click', () => {
    currentSearch = searchInput.value.trim();
    loadHistoryItems();
  });
  
  // Search input (enter key)
  searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      currentSearch = searchInput.value.trim();
      loadHistoryItems();
    }
  });
  
  // Clear search button
  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    currentSearch = '';
    loadHistoryItems();
  });
  
  // Date filter
  dateFilter.addEventListener('change', () => {
    currentDateFilter = dateFilter.value;
    loadHistoryItems();
  });
  
  // Domain filter
  domainFilter.addEventListener('change', () => {
    currentDomainFilter = domainFilter.value;
    loadHistoryItems();
  });
  
  // Load more button
  loadMoreBtn.addEventListener('click', () => {
    if (!isLoading && hasMoreItems) {
      currentPage++;
      loadHistoryItems(false);
    }
  });
}

// Show error message
function showError(message) {
  loadingIndicator.classList.add('hidden');
  
  emptyState.textContent = message;
  emptyState.classList.remove('hidden');
  
  loadMoreBtn.classList.add('hidden');
}

// Initialize timeline when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeTimeline);
