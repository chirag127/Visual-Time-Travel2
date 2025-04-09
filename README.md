# 📘 Visual Time Travel

A browser extension that captures and organizes a visual timeline of your browsing history, making it easier to find and revisit important information.

![Visual Time Travel Banner](https://i.imgur.com/JKgvHqZ.png)

## ✨ Description

Visual Time Travel is a powerful browser extension that automatically captures screenshots as you browse the web, creating a visual record of your browsing history. Unlike traditional text-based history, Visual Time Travel gives you a visual snapshot of each page, making it easier to recognize and recall the content you've seen before.

The extension works seamlessly in the background, capturing screenshots when you navigate to new tabs and organizing them in a chronological timeline. You can easily search and filter your visual history by date, domain, or keywords, and revisit any page with a single click.

## 🚀 Live Demo

Check out our [Visual Time Travel Website](https://chirag127.github.io/Visual-Time-Travel2/) for more information and installation instructions.

## 🧪 Features

-   **Automatic Screenshot Capture**: Captures screenshots when you navigate to new tabs
-   **Visual Timeline**: Browse your history with an intuitive visual interface
-   **Search & Filter**: Find pages by date, domain, or keywords
-   **Secure Storage**: All data is stored securely with proper authentication
-   **Cross-Browser Support**: Works on Chrome, Firefox, and Edge
-   **User Authentication**: Secure login with JWT
-   **Customizable Settings**: Control when screenshots are captured
-   **Responsive Design**: Works on various screen sizes

---

## 💻 Project Structure

```
visual-time-travel/
├── extension/
│   ├── manifest.json
│   ├── js/
│   │   ├── background-simple.js
│   │   ├── popup-simple.js
│   │   ├── api.js
│   │   ├── storage.js
│   │   └── timeline.js
│   ├── html/
│   │   ├── popup.html
│   │   └── timeline.html
│   ├── css/
│   │   ├── popup.css
│   │   └── timeline.css
│   └── images/
├── backend/
│   ├── server.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── screenshotRoutes.js
│   │   └── historyRoutes.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── screenshotController.js
│   │   └── historyController.js
│   ├── models/
│   │   ├── User.js
│   │   └── History.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   └── services/
│       └── imageUpload/
└── README.md
```

## 💪 Tech Stack / Tools Used

-   **Frontend**: HTML, CSS, JavaScript (Vanilla)
-   **Backend**: Node.js, Express.js
-   **Database**: MongoDB
-   **Authentication**: JWT (JSON Web Tokens)
-   **Image Hosting**: FreeImage.host API
-   **Browser APIs**: Chrome Extension API, Tabs API, Storage API
-   **Version Control**: Git, GitHub

---

## 📦 Installation Instructions

### Prerequisites

-   Node.js (v18 or higher)
-   MongoDB
-   Chrome, Firefox, or Edge browser

### Backend Setup

1. Clone the repository:

    ```
    git clone https://github.com/chirag127/Visual-Time-Travel2.git
    cd Visual-Time-Travel2
    ```

2. Install backend dependencies:

    ```
    cd backend
    npm install
    ```

3. Create a `.env` file in the backend directory with the following variables:

    ```
    PORT=5000
    MONGODB_URI=mongodb://localhost:27017/visual-time-travel
    JWT_SECRET=your-secret-key
    FREE_IMAGE_HOST_API_KEY=your-freeimage-host-api-key
    ```

4. Start the backend server:
    ```
    npm run dev
    ```

### Extension Setup

1. Navigate to the extension directory:

    ```
    cd extension
    ```

2. Load the extension in your browser:

    - **Chrome/Edge**:

        1. Go to `chrome://extensions/` or `edge://extensions/`
        2. Enable "Developer mode"
        3. Click "Load unpacked"
        4. Select the `extension` directory

    - **Firefox**:
        1. Go to `about:debugging#/runtime/this-firefox`
        2. Click "Load Temporary Add-on"
        3. Select any file in the `extension` directory

---

## 🔧 Usage

1. **Sign Up/Login**: Click on the extension icon and create an account or log in.
2. **Browse Normally**: The extension will automatically capture screenshots as you browse.
3. **View Timeline**: Click on the extension icon and select "View Timeline" to see your visual history.
4. **Search & Filter**: Use the search bar and filters to find specific pages.
5. **Revisit Pages**: Click on any screenshot to revisit that page in a new tab.
6. **Toggle Capturing**: Enable or disable screenshot capturing through the extension popup.

## 👨‍💻 API Endpoints

-   `POST /api/auth/signup` - Register a new user
-   `POST /api/auth/login` - Login and get JWT token
-   `POST /api/auth/logout` - Logout and invalidate token
-   `POST /api/upload-screenshot` - Upload a screenshot
-   `GET /api/history` - Get user's browsing history

## 👍 Contributing

We welcome contributions to Visual Time Travel! Here's how you can help:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

Please make sure to update tests as appropriate and follow our code of conduct.

## 🚪 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [Chirag Singhal](https://github.com/chirag127)
