<!-- HERO BANNER -->
<p align="center">
  <img src="https://raw.githubusercontent.com/chirag127/ChronoLens-Visual-History-Browser-Platform/main/.github/assets/hero-banner.png" alt="ChronoLens Hero Banner">
</p>

<!-- BADGES -->
<p align="center">
    <a href="https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/chirag127/ChronoLens-Visual-History-Browser-Platform/ci.yml?branch=main&style=flat-square&logo=githubactions&logoColor=white" alt="Build Status"></a>
    <a href="https://codecov.io/gh/chirag127/ChronoLens-Visual-History-Browser-Platform"><img src="https://img.shields.io/codecov/c/github/chirag127/ChronoLens-Visual-History-Browser-Platform?style=flat-square&logo=codecov&logoColor=white" alt="Code Coverage"></a>
    <a href="https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript"></a>
    <a href="https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform"><img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React"></a>
    <a href="https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform"><img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js"></a>
    <a href="https://github.com/biomejs/biome"><img src="https://img.shields.io/badge/Lint%20%26%20Format-Biome-000000?style=flat-square&logo=biome&logoColor=white" alt="Biome"></a>
    <a href="https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey?style=flat-square" alt="License"></a>
    <a href="https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform/stargazers"><img src="https://img.shields.io/github/stars/chirag127/ChronoLens-Visual-History-Browser-Platform?style=flat-square&logo=github&logoColor=white" alt="GitHub stars"></a>
</p>

<!-- SOCIAL PROOF -->
<p align="center">
  <a href="https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform/stargazers" target="_blank"><strong>Star ⭐ this Repo</strong></a> to support its development!
</p>

<h1 align="center">ChronoLens: Visual History Browser Platform</h1>

**ChronoLens is a cloud-native SaaS platform that transforms your web history into a searchable, secure visual timeline.** Its privacy-focused browser extension captures your digital journey, enabling you to effortlessly organize, search, and recall every site you've visited.

---

## 🏛️ Architecture Overview

ChronoLens employs a modern, decoupled full-stack architecture designed for scalability, security, and performance. The system consists of three primary components: the Browser Extension, the Backend API, and the Web Dashboard.

mermaid
graph TD
    subgraph User Interaction
        A[User's Browser]
    end

    subgraph Client-Side Components
        B[Browser Extension (WXT, React, TypeScript)];
        C[Web Dashboard (Vite, React, TypeScript)];
    end

    subgraph Server-Side Infrastructure
        D[Secure REST API (Node.js, Express, TypeScript)];
        E[Database (MongoDB)];
        F[Authentication Service];
    end

    A -- "Captures History" --> B;
    B -- "Sends Encrypted Data" --> D;
    C -- "Fetches Timeline Data" --> D;
    D -- "Manages User Data" --> F;
    D -- "Stores & Retrieves Data" --> E;


---

## ✨ Key Features

*   **🖼️ Visual Timeline:** Automatically captures screenshots and metadata to create a rich, visual representation of your browsing history.
*   **☁️ Secure Cloud Sync:** Safely syncs your data across devices, encrypted end-to-end for maximum privacy.
*   **🔒 Privacy-First Design:** All data is encrypted locally before being sent to the cloud. You own your data.
*   **🔍 Advanced Full-Text Search:** Instantly find any page you've visited by searching its title, URL, or even the full text content.
*   **📦 Cross-Browser Support:** Built with WXT to support Chrome, Firefox, and other WebExtensions-compatible browsers.
*   **📊 Insightful Analytics:** (Coming Soon) Visualize your browsing habits and productivity trends.

---

## 🛠️ Tech Stack & Tooling

| Category             | Technology / Tool                                     |
| -------------------- | ----------------------------------------------------- |
| **Browser Extension**| `TypeScript`, `React`, `WXT`, `TailwindCSS`           |
| **Web Dashboard**    | `TypeScript`, `React`, `Vite`, `TailwindCSS`, `FSD`   |
| **Backend API**      | `Node.js`, `Express.js`, `TypeScript`, `JWT`          |
| **Database**         | `MongoDB` with `Mongoose`                             |
| **Testing**          | `Vitest` (Unit/Integration), `Playwright` (E2E)       |
| **Linting/Formatting**| `Biome` (High-performance unified toolchain)          |
| **DevOps & CI/CD**   | `GitHub Actions`, `Docker`                            |
| **Package Manager**  | `pnpm` (Fast, disk space efficient)                   |

---

## 🚀 Getting Started

### Prerequisites

*   **Node.js**: v20.x or higher
*   **pnpm**: v8.x or higher
*   **Docker** & **Docker Compose** (for local database)

### Installation & Setup

1.  **Clone the repository:**
    bash
    git clone https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform.git
    cd ChronoLens-Visual-History-Browser-Platform
    

2.  **Install dependencies:**
    bash
    pnpm install
    

3.  **Configure environment variables:**
    *   Copy the example environment file: `cp .env.example .env`
    *   Populate the `.env` file with your database connection string, JWT secret, and other required credentials.

4.  **Start the local database:**
    bash
    docker-compose up -d
    

5.  **Run the development servers:**
    *   This will start the backend API, the web dashboard, and the browser extension development server concurrently.
    bash
    pnpm dev
    

---

<details>
<summary>🤖 <strong>AI Agent Directives (2026 Standard)</strong></summary>

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
    *   **Logic Anchor:** Treat this `README.md` as the **Single Source of Truth (SSOT)**.
*   **MANDATORY MCP INSTRUMENTATION:**
    *   **No Guessing:** Do not hallucinate APIs.
    *   **Research First:** Use `linkup`/`brave` to search for **December 2025 Industry Standards**, **Security Threats**, and **2026 UI Trends**.
    *   **Validation:** Use `docfork` to verify *every* external API signature.
    *   **Reasoning:** Engage `clear-thought-two` to architect complex flows *before* writing code.

---

## 3. CONTEXT-AWARE APEX TECH STACKS (LATE 2025 STANDARDS)
**Directives:** This repository, `ChronoLens-Visual-History-Browser-Platform`, is a full-stack TypeScript-based SaaS application. The Apex Toolchain must be applied accordingly.

*   **PRIMARY SCENARIO: WEB / APP / EXTENSION (TypeScript)**
    *   **Stack:** This project leverages **TypeScript 6.x (Strict)** across the entire stack. The frontend (Web Dashboard) is built with **React** and **Vite 7** (with Rolldown), while the browser extension uses the **WXT** framework. The backend API is powered by **Node.js** and **Express.js**.
    *   **State Management:** Utilize **Signals** as the primary state management paradigm for modern, fine-grained reactivity in all React-based components.
    *   **Styling:** Employ **TailwindCSS v4** for a utility-first, high-performance styling architecture.
    *   **Linting & Formatting:** **Biome** is the **MANDATORY** tool for all linting, formatting, and import sorting tasks to ensure maximum performance and consistency.
    *   **Testing:**
        *   **Unit/Integration:** `Vitest` is the standard for fast, reliable tests.
        *   **End-to-End (E2E):** `Playwright` is required for comprehensive browser automation testing of both the web app and the browser extension.
    *   **Architecture:**
        *   **Frontend (Web App/Extension):** Adhere strictly to **Feature-Sliced Design (FSD)** to maintain scalability and clear module boundaries.
        *   **Backend (API):** Implement **Hexagonal Architecture (Ports & Adapters)** to decouple business logic from external concerns like databases and frameworks.

*   **SECONDARY SCENARIO B: SYSTEMS / PERFORMANCE (Rust/Go) - *Not applicable for this project's primary function. Reference only for potential future performance-critical microservices.***
    *   **Stack:** Rust (Cargo) or Go (Modules).
    *   **Lint:** Clippy / GolangCI-Lint.
    *   **Architecture:** Hexagonal Architecture (Ports & Adapters).

</details>

---

## 📦 Scripts & Commands

This project uses `pnpm` as its package manager.

| Command             | Description                                          |
| ------------------- | ---------------------------------------------------- |
| `pnpm install`      | Installs all dependencies across the monorepo.       |
| `pnpm dev`          | Starts all services (API, web, extension) in dev mode. |
| `pnpm build`        | Builds all applications for production.              |
| `pnpm test`         | Runs all unit and integration tests with Vitest.     |
| `pnpm test:e2e`     | Runs all end-to-end tests with Playwright.           |
| `pnpm lint`         | Checks for linting errors using Biome.               |
| `pnpm format`       | Formats all code and fixes linting issues with Biome. |
| `pnpm db:start`     | Starts the local MongoDB container via Docker.       |
| `pnpm db:stop`      | Stops the local MongoDB container.                   |

---

## 🤝 Contributing

Contributions are welcome! Please read the [**Contributing Guidelines**](.github/CONTRIBUTING.md) to get started. Before submitting a pull request, ensure your code adheres to the project's coding standards and all tests pass.

## 📄 License

This project is licensed under the [**Creative Commons Attribution-NonCommercial 4.0 International License**](LICENSE). See the `LICENSE` file for more details.
