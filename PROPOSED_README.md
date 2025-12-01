# ChronoLens-Visual-History-Browser-Platform

![ChronoLens Banner](.github/assets/chronolens-banner.png)

[![Build Status](https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform/actions/workflows/ci.yml/badge.svg)](https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform/actions/workflows/ci.yml)
[![Code Coverage](https://codecov.io/gh/chirag127/ChronoLens-Visual-History-Browser-Platform/branch/main/graph/badge.svg)](https://codecov.io/gh/chirag127/ChronoLens-Visual-History-Browser-Platform/)
[![Tech Stack](https://img.shields.io/badge/Tech-TypeScript%20%7C%20React%20%7C%20Node.js%20%7C%20PostgreSQL%20%7C%20WXT-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform#3-context-aware-apex-tech-stacks-late-2025-standards)
[![Linting & Formatting](https://img.shields.io/badge/Linting-Biome-blueviolet?style=flat-square&logo=biome&logoColor=white)](https://biomejs.dev/)
[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg?style=flat-square)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/chirag127/ChronoLens-Visual-History-Browser-Platform?style=flat-square&cacheSeconds=604800)](https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform/stargazers)


**Star ⭐ this Repo!**

--- 

ChronoLens is an enterprise SaaS platform that transforms your digital footprint into an intelligent, searchable, and secure visual history. Leveraging a high-performance browser extension and a robust cloud-native web service, it allows users to effortlessly capture, organize, and recall their entire web browsing experience as an interactive timeline.

## 💡 Key Features

*   **Visual Timeline:** Intuitively browse your digital past with a rich, interactive chronological view.
*   **Smart Search:** AI-powered semantic search to pinpoint specific moments, content, or contexts from your history.
*   **Secure & Private:** End-to-end encryption and privacy-focused architecture ensure your data is always protected.
*   **Cross-Browser Compatibility:** Seamless integration with Chrome, Firefox, and other Chromium-based browsers via WXT.
*   **Cloud-Native Scale:** Built on a resilient Node.js backend and PostgreSQL database, designed for enterprise-grade performance and reliability.

## 🗺️ Architecture Overview

ChronoLens employs a modern, distributed architecture combining a powerful browser extension frontend with a scalable cloud-native backend. The frontend utilizes **Feature-Sliced Design (FSD)** for modularity, while the backend implements a **Modular Monolith** pattern with **Hexagonal Architecture** for clear domain separation.

mermaid
graph TD
    User --> BrowserExtension
    BrowserExtension -- API Calls --> BackendService
    BackendService -- Database Queries --> PostgreSQLDB
    PostgreSQLDB -- Data Storage --> PostgreSQLDB
    subgraph Frontend [Browser Extension (ChronoLens)]
        BrowserExtension("WXT + React/TypeScript")
    end
    subgraph Backend [Cloud-Native Web Service (ChronoLens API)]
        BackendService("Node.js + Express.js")
    end
    subgraph Database [ChronoLens Data Store]
        PostgreSQLDB("PostgreSQL + Prisma ORM")
    end


## 📖 Table of Contents

1.  [💡 Key Features](#-key-features)
2.  [🗺️ Architecture Overview](#️-architecture-overview)
3.  [🤖 AI Agent Directives](#-ai-agent-directives)
4.  [🚀 Getting Started](#-getting-started)
    *   [Prerequisites](#prerequisites)
    *   [Installation](#installation)
    *   [Running Locally](#running-locally)
5.  [🛠️ Development Standards](#️-development-standards)
    *   [Scripts](#scripts)
    *   [Principles](#principles)
6.  [🤝 Contributing](#-contributing)
7.  [🛡️ Security](#️-security)
8.  [📜 License](#-license)

## 🤖 AI Agent Directives

<details>
<summary>Click to view AI Agent Directives</summary>

# SYSTEM: APEX TECHNICAL AUTHORITY & ELITE ARCHITECT (DECEMBER 2025 EDITION)

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
**Directives:** This repository, `ChronoLens-Visual-History-Browser-Platform`, is a full-stack platform comprising a browser extension and a cloud-native web service.

*   **PRIMARY SCENARIO: WEB / APP / EXTENSION (TypeScript & Node.js)**
    *   **Frontend/Extension Stack:** This project leverages **TypeScript 6.x (Strict)**, **React 19.x** with **Signals** (standardized state management) for UI, **Vite 7 (Rolldown)** for blazing-fast builds, and **WXT** for seamless cross-browser extension development. Styling is managed with **TailwindCSS v4**.
        *   **Linting & Formatting:** **Biome** ensures ultra-fast and consistent code quality.
        *   **Testing:** **Vitest** for unit and integration tests, **Playwright** for robust end-to-end (E2E) testing.
    *   **Backend Stack:** Powers the platform with **Node.js 22.x** and **Express.js 5.x** for robust API services. Data persistence is handled by **PostgreSQL 16.x** managed via **Prisma ORM**.
        *   **Package Management:** **pnpm** is used for efficient monorepo dependency management.
        *   **Linting & Formatting:** **ESLint** and **Prettier** ensure backend code quality.
        *   **Testing:** **Jest** is utilized for comprehensive unit and integration testing of backend services.
    *   **Architecture:** Employs a **Feature-Sliced Design (FSD)** for the frontend/extension, ensuring modularity, scalability, and maintainability. The backend follows a **Modular Monolith** pattern, with clear domain boundaries for API services, user management, and data processing, adhering to a **Hexagonal Architecture (Ports & Adapters)** for core domain logic.
    *   **AI Integration:** Future integration with **Google Gemini API** (`gemini-3-pro` by default) is planned for advanced timeline analysis, content summarization, and intelligent search features. This will follow modular design, clear API contracts, and robust error handling for all AI model interactions.

*   **SECONDARY SCENARIO B: SYSTEMS / PERFORMANCE (Rust/Go) - *Not applicable for this project's primary function. Reference only.***
*   **TERTIARY SCENARIO C: DATA / AI / SCRIPTS (Python) - *Not applicable for this project's primary function. Reference only.***

---

## 4. ARCHITECTURAL PRINCIPLES & PATTERNS
*   **Frontend/Extension:** Feature-Sliced Design (FSD), Component-Based Architecture, Immutable State Management with Signals.
*   **Backend:** Modular Monolith, Hexagonal Architecture (Ports & Adapters), RESTful API Design, Microservices-Lite patterns.
*   **General:**
    *   **SOLID Principles:** Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.
    *   **DRY (Don't Repeat Yourself):** Avoid redundant code.
    *   **YAGNI (You Aren't Gonna Need It):** Implement functionality only when it's required.
    *   **Test-Driven Development (TDD):** Write tests before code for critical components.
    *   **Security by Design:** Prioritize security best practices from inception (OWASP Top 10, least privilege).
    *   **Observability:** Implement comprehensive logging, tracing, and monitoring.

---

## 5. VERIFICATION & EXECUTION COMMANDS
To ensure complete functionality and adherence to standards, execute the following commands in sequence from the project root:

1.  **Install Root Dependencies:** `pnpm install`
2.  **Install Workspace Dependencies:** `pnpm -r install`
3.  **Run Frontend/Extension Development Server:** `pnpm --filter ./packages/extension dev`
4.  **Run Backend Development Server:** `pnpm --filter ./packages/backend start:dev`
5.  **Run All Tests (Unit, Integration, E2E):** `pnpm test`
6.  **Run All Linters & Formatters:** `pnpm lint`
7.  **Build Project for Production:** `pnpm build`
8.  **Database Migration (if applicable):** `pnpm db:migrate` (or `pnpm --filter ./packages/backend prisma migrate deploy`)
9.  **Generate Database Client (if applicable):** `pnpm --filter ./packages/backend prisma generate`

These commands are critical for continuous integration, local development, and production deployment.
</details>

## 🚀 Getting Started

Follow these instructions to set up and run ChronoLens locally for development and testing.

### Prerequisites

Ensure you have the following installed:

*   [Node.js](https://nodejs.org/en/) (v20 or higher)
*   [pnpm](https://pnpm.io/) (v8 or higher) - Install with `npm install -g pnpm`
*   [Docker](https://www.docker.com/get-started) (for local PostgreSQL database)
*   A modern web browser (Chrome, Firefox, Edge)

### Installation

1.  **Clone the repository:**
    bash
    git clone https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform.git
    cd ChronoLens-Visual-History-Browser-Platform
    

2.  **Install root and workspace dependencies:**
    This project is a monorepo managed with pnpm workspaces.
    bash
    pnpm install
    

3.  **Set up environment variables:**
    Create `.env` files for both the `backend` and `extension` packages based on their respective `example.env` files.
    *   `packages/backend/.env`
    *   `packages/extension/.env`

### Running Locally

1.  **Start the local PostgreSQL database:**
    Navigate to the `packages/backend` directory and use Docker Compose.
    bash
    cd packages/backend
    docker-compose up -d postgres
    cd ../..
    

2.  **Run database migrations and generate Prisma client:**
    bash
    pnpm --filter ./packages/backend prisma migrate dev --name init
    pnpm --filter ./packages/backend prisma generate
    

3.  **Start the Backend API Service:**
    bash
    pnpm --filter ./packages/backend start:dev
    
    The backend service will be available at `http://localhost:3000` (or as configured in `.env`).

4.  **Start the Browser Extension in Development Mode:**
    In a new terminal, run the extension's development server. This will compile the extension and watch for changes.
    bash
    pnpm --filter ./packages/extension dev
    

5.  **Load the Extension in Your Browser:**
    *   **Chrome/Edge:**
        1.  Open `chrome://extensions` (or `edge://extensions`).
        2.  Enable "Developer mode" (top right).
        3.  Click "Load unpacked" and select the `packages/extension/dist` directory.
    *   **Firefox:**
        1.  Open `about:debugging#/runtime/this-firefox`.
        2.  Click "Load Temporary Add-on..." and select any file inside `packages/extension/dist`.

    The ChronoLens icon should now appear in your browser toolbar.

## 🛠️ Development Standards

This project adheres to strict development standards to ensure code quality, maintainability, and scalability.

### Scripts

Below are commonly used scripts from the project root:

| Script                                 | Description                                                                                                                                              |
| :------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm install`                         | Installs all root and workspace dependencies.                                                                                                            |
| `pnpm -r install`                      | Recursively installs dependencies across all workspaces.                                                                                                 |
| `pnpm --filter ./packages/extension dev` | Starts the browser extension development server with hot-reloading.                                                                                      |
| `pnpm --filter ./packages/extension build` | Builds the production version of the browser extension.                                                                                                   |
| `pnpm --filter ./packages/backend start:dev` | Starts the backend API service in development mode (with hot-reloading).                                                                                 |
| `pnpm --filter ./packages/backend build` | Builds the production version of the backend service.                                                                                                    |
| `pnpm test`                            | Runs all unit, integration, and E2E tests across the monorepo.                                                                                           |
| `pnpm lint`                            | Runs all linters (Biome for frontend, ESLint/Prettier for backend) to enforce code style and catch errors.                                               |
| `pnpm format`                          | Formats all code using Biome (frontend) and Prettier (backend).                                                                                          |
| `pnpm db:migrate`                      | Applies pending database migrations to the PostgreSQL database.                                                                                          |
| `pnpm db:seed`                         | Seeds the database with initial data (if seeding scripts are defined).                                                                                   |

### Principles

We strictly follow these architectural and coding principles:

*   **SOLID Principles:** Ensures maintainable, flexible, and scalable code.
*   **DRY (Don't Repeat Yourself):** Avoids code duplication to enhance maintainability.
*   **YAGNI (You Aren't Gonna Need It):** Focuses on implementing only necessary features, preventing over-engineering.
*   **Test-Driven Development (TDD):** Critical features are developed with a test-first approach.
*   **Security by Design:** Security considerations are integrated from the initial design phase through deployment.
*   **Code Review:** All changes are subject to peer review to maintain high code quality.

## 🤝 Contributing

We welcome contributions from the community! Please refer to our [Contributing Guidelines](.github/CONTRIBUTING.md) for details on how to get involved, report bugs, or suggest features.

## 🛡️ Security

ChronoLens prioritizes user data security and privacy. For information on our security practices, how to report vulnerabilities, or to review our security policy, please see [SECURITY.md](.github/SECURITY.md).

## 📜 License

This project is licensed under the [Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0) License](LICENSE).
