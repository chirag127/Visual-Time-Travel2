# Visual Time Travel

A browser extension + backend service that captures and organizes a visual timeline of your browsing history.

---

## Features

- Automatic screenshot capture on tab switch
- Uploads screenshots to freeimage.host
- Stores metadata in MongoDB
- User authentication with JWT
- Interactive timeline viewer with revisit option
- Filter/search history
- User preferences for capture toggle and retention
- Cross-browser support (Chrome, Edge, Firefox)

---

## Project Structure

```
visual-time-travel/
├── extension/
│   ├── manifest.json
│   ├── background.js
│   ├── content.js
│   ├── popup.html
│   ├── popup.js
│   └── styles/
│       └── popup.css
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   └── config/
│       └── db.js
└── README.md
```

---

## Setup Instructions

### Prerequisites

- Node.js (latest LTS)
- npm
- MongoDB Atlas account
- Git

### Backend

```bash
cd backend
npm install
# Create .env with your MongoDB URI and JWT secret
npm start
```

### Extension

Load `extension/` as an unpacked extension in your browser.

---

## API Endpoints

- `POST /api/auth/signup`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `POST /api/forgot-password`
- `POST /api/upload-screenshot`
- `GET /api/history`

---

## License

MIT

---

## Author

[chirag127](https://github.com/chirag127)
