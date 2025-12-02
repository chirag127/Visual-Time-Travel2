# ChronoLens-Visual-History-Browser-Platform

[![Build Status](https://img.shields.io/github/actions/workflow/status/chirag127/ChronoLens-Visual-History-Browser-Platform/ci.yml?style=flat-square)](https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform/actions/workflows/ci.yml)
[![Code Coverage](https://img.shields.io/codecov/c/github/chirag127/ChronoLens-Visual-History-Browser-Platform?style=flat-square)](https://codecov.io/gh/chirag127/ChronoLens-Visual-History-Browser-Platform)
[![Tech Stack](https://img.shields.io/badge/tech-stack-TS%2C%20React%2C%20Vite%2C%20WXT%2C%20Node.js%2C%20Express.js%2C%20MongoDB-blue?style=flat-square)](https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform)
[![License](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey?style=flat-square)](https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform/blob/main/LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/chirag127/ChronoLens-Visual-History-Browser-Platform?style=flat-square)](https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform)

## Transform Your Digital Journey into a Secure, Visual Timeline

A cloud-native SaaS platform that transforms your web history into a searchable, secure visual timeline. Capture, organize, and recall your digital journey with a privacy-focused browser extension.

<details>
<summary>🤖 AI AGENT DIRECTIVES (DECEMBER 2025 EDITION)</summary>

## 1. IDENTITY & PRIME DIRECTIVE
**Role:** You are a Senior Principal Software Architect and Master Technical Copywriter with **40+ years of elite industry experience**. You operate with absolute precision, enforcing FAANG-level standards and the wisdom of "Managing the Unmanageable."
**Context:** Current Date is **December 2025**. You are building for the 2026 standard.
**Output Standard:** Deliver **EXECUTION-ONLY** results. No plans, no "reporting"—only executed code, updated docs, and applied fixes.
**Philosophy:** "Zero-Defect, High-Velocity, Future-Proof."

---

## 2. INPUT PROCESSING & COGNITION
*   **SPEECH-TO-TEXT INTERPRETATION PROTOCOL:**
    *   **Context:** User inputs may contain phonetic errors (homophones, typos).
    *   **Semantic Correction:** **STRICTLY FORBIDDEN** from executing literal typos. You must **INFER** technical intent based on the project context.
    *   **Logic Anchor:** Treat the `README.md` as the **Single Source of Truth (SSOT)**.
*   **MANDATORY MCP INSTRUMENTATION:**
    *   **No Guessing:** Do not hallucinate APIs.
    *   **Research First:** Use `linkup`/`brave` to search for **December 2025 Industry Standards**, **Security Threats**, and **2026 UI Trends**.
    *   **Validation:** Use `docfork` to verify *every* external API signature.
    *   **Reasoning:** Engage `clear-thought-two` to architect complex flows *before* writing code.

---

## 3. CONTEXT-AWARE APEX TECH STACKS (LATE 2025 STANDARDS)
*   **PRIMARY SCENARIO: WEB / APP / EXTENSION (TypeScript)**
    *   **Stack:** This project leverages **TypeScript 6.x (Strict)**, **Vite 7 (Rolldown)**, **Tauri v2.x (Native)**, and **WXT (Web Extension Tooling)** for the browser extension, and **Node.js** with **Express.js** for the backend API. **MongoDB** is used for data persistence. **React** is the frontend framework.
    *   **Linting/Formatting:** Utilizes **Biome** for ultra-fast linting and formatting across the entire codebase.
    *   **Testing:** Employs **Vitest** for unit and integration tests, and **Playwright** for end-to-end testing of the browser extension and web application components.
    *   **Architecture:** Adheres to **Feature-Sliced Design (FSD)** principles for the frontend (browser extension and any potential web UI) and a **Modular Monolith** or **Microservices** pattern for the backend, ensuring clear separation of concerns, maintainability, and scalability.

---

## 4. DEVELOPMENT STANDARDS & VERIFICATION
*   **Principles:** SOLID, DRY, KISS, YAGNI.
*   **Setup Commands:**
    *   Clone the repository:
        bash
        git clone https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform.git
        cd ChronoLens-Visual-History-Browser-Platform
        
    *   Install dependencies:
        bash
        # Frontend (Browser Extension & Web App)
        npm install
        # Backend
        npm install --prefix ./server
        
*   **Scripts Table:**
    | Script                | Description                                                 |
    | --------------------- | ----------------------------------------------------------- |
    | `npm run dev`         | Starts the Vite development server for frontend/extension   |
    | `npm run build`       | Builds the production-ready frontend/extension artifact     |
    | `npm run test:unit`   | Runs Vitest unit tests                                      |
    | `npm run test:e2e`    | Runs Playwright end-to-end tests                            |
    | `npm run lint`        | Runs Biome linter                                           |
    | `npm run format`      | Runs Biome formatter                                        |
    | `npm run server:dev`  | Starts the Express.js development server                    |
    | `npm run server:build`| Builds the production backend                             |

</details>

## Table of Contents

*   [Key Features](#key-features)
*   [Architecture Overview](#architecture-overview)
*   [Technology Stack](#technology-stack)
*   [Getting Started](#getting-started)
*   [Development Setup](#development-setup)
*   [Contributing](#contributing)
*   [License](#license)

## Key Features

*   **Visual History Timeline:** Browse your web history as an interactive visual map.
*   **Secure & Private:** End-to-end encryption and local-first storage options ensure your data stays yours.
*   **Smart Organization:** AI-powered tagging and categorization of visited sites.
*   **Searchable Archive:** Quickly find past information with advanced semantic search.
*   **Cross-Browser Support:** Works seamlessly on Chrome and Firefox.
*   **Cloud-Native SaaS:** Scalable backend infrastructure for seamless syncing and access.

## Architecture Overview

mermaid
graph TD
    A[User Browser]
    B[WXT Browser Extension]
    C[Frontend App (React/Vite)]
    D[Backend API (Node.js/Express.js)]
    E[Database (MongoDB)]
    F[Cloud Infrastructure]

    A --> B
    B --> C
    B --> D
    C --> D
    D --> E
    D --> F
    E --> F


## Technology Stack

*   **Frontend/Extension:** TypeScript, React, Vite, WXT (Web Extension Tooling)
*   **Backend:** Node.js, Express.js
*   **Database:** MongoDB
*   **Infrastructure:** Cloud-Native (e.g., AWS, GCP, Azure)
*   **Linting/Formatting:** Biome
*   **Testing:** Vitest (Unit/Integration), Playwright (E2E)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have the following installed:

*   Node.js (v20+ recommended)
*   npm (comes with Node.js)
*   MongoDB

### Installation

1.  **Clone the repo:**
    bash
    git clone https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform.git
    cd ChronoLens-Visual-History-Browser-Platform
    

2.  **Install Frontend Dependencies:**
    bash
    npm install
    

3.  **Install Backend Dependencies:**
    bash
    npm install --prefix ./server
    

4.  **Configure Environment Variables:**
    Create a `.env` file in the `server` directory with your MongoDB connection string and any other necessary variables.

## Development Setup

### Running the Development Server

*   **Start the backend server:**
    bash
    npm run server:dev
    

*   **Start the frontend/extension development server:**
    bash
    npm run dev
    

*   **Load the extension:** Follow instructions for your browser (e.g., `chrome://extensions/` and load unpacked extension from the `.wxt/` output directory).

### Running Tests

*   **Run unit and integration tests:**
    bash
    npm run test:unit
    

*   **Run end-to-end tests:**
    bash
    npm run test:e2e
    

### Linting and Formatting

*   **Check code style:**
    bash
    npm run lint
    

*   **Format code:**
    bash
    npm run format
    

## Contributing

Contributions are always welcome! Please read the [CONTRIBUTING.md](https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform/blob/main/.github/CONTRIBUTING.md) file for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0) - see the [LICENSE](https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform/blob/main/LICENSE) file for details.
