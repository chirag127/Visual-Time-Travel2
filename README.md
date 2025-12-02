# ChronoLens - Visual History Browser Platform

[![Build Status](https://img.shields.io/github/actions/workflow/status/chirag127/ChronoLens-Visual-History-Browser-Platform/ci.yml?style=flat-square&label=Build)](https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform/actions/workflows/ci.yml)
[![Code Coverage](https://img.shields.io/codecov/c/github/chirag127/ChronoLens-Visual-History-Browser-Platform?style=flat-square)](https://codecov.io/gh/chirag127/ChronoLens-Visual-History-Browser-Platform)
[![License](https://img.shields.io/github/license/chirag127/ChronoLens-Visual-History-Browser-Platform?style=flat-square)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/chirag127/ChronoLens-Visual-History-Browser-Platform?style=flat-square)](https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform)

**ChronoLens** is a comprehensive, cloud-native SaaS platform that redefines digital memory by transforming raw web history into a secure, searchable, and visually rich timeline. Capture, organize, and recall your complete digital journey with a privacy-focused browser extension acting as the primary data ingestion point.

[⭐ Star this Repo](#) to support the future of personal digital archival!

---

## 🏛️ Architecture Overview

The platform utilizes a modern decoupled architecture: TypeScript/React for the front-end dashboard, WXT/Vite for the cross-browser extension, and Node.js/Express with MongoDB serving as the persistence layer for scalable data handling.

mermaid
graph TD
    subgraph Ingestion Layer
        A[Browser Extension (WXT/TS)] -->|HTTPS/Auth| B(API Gateway: Express/Node.js);
    end

    subgraph Platform Services
        B --> C{Authentication/Validation};
        C --> D[Data Processing Pipeline];
        D --> E(MongoDB Atlas - History Records);
        D --> F(Search Indexing Service);
    end

    subgraph Presentation Layer
        G[Web Dashboard (React/Vite)] -->|GraphQL/REST| C;
        G -->|Query| F;
    end

    style A fill:#f9f,stroke:#333,stroke-width:2px
    style G fill:#ccf,stroke:#333,stroke-width:2px


## 📋 Table of Contents

1.  [Architecture Overview](#-architecture-overview)
2.  [Table of Contents](#-table-of-contents)
3.  [Key Features](#-key-features)
4.  [Technology Stack](#-technology-stack)
5.  [Development Setup](#-development-setup)
6.  [Core Architectural Principles](#-core-architectural-principles)
7.  [🤖 AI Agent Directives (Apex Standard)](#-ai-agent-directives-apex-standard)
8.  [Contributing](#-contributing)
9.  [License](#-license)

## ✨ Key Features

*   **Visual Timeline Rendering:** Presents browsing history not as lists, but as a navigable, time-series visual graph.
*   **Privacy-by-Design:** Client-side encryption support and optional local-only storage mode via the extension.
*   **Cross-Browser Support:** Unified experience across Chrome, Firefox, and Edge using the WXT framework.
*   **Smart Categorization:** Leverages backend services to automatically tag and categorize visited sites (e.g., Research, Shopping, Development).
*   **Secure API:** Robust, authenticated RESTful API for dashboard synchronization and data retrieval.

## 🛠️ Technology Stack

| Layer | Primary Technology | Secondary/Tooling | Status |
| :--- | :--- | :--- | :--- |
| **Browser Extension** | TypeScript, WXT Framework | Vite, Playwright (E2E) | Active |
| **Web Frontend** | React 19 (TSX), TailwindCSS v4 | Biome (Lint/Format), Vitest | Active |
| **Backend API** | Node.js, Express.js | TypeScript, Jest/Vitest | Active |
| **Database** | MongoDB Atlas | Mongoose ODM | Active |
| **CI/CD** | GitHub Actions | Biome, Vitest/Playwright | Operational |

## 🚀 Development Setup

This repository contains multiple distinct sub-projects (extension, backend, frontend dashboard). Navigate to the relevant directory before running setup commands.

bash
# 1. Clone the repository
git clone https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform.git
cd ChronoLens-Visual-History-Browser-Platform

# 2. Setup Backend (Assuming Node.js/npm is installed)
cd backend
npm install
npm run dev

# 3. Setup Frontend Dashboard (Assuming Node.js/npm is installed)
cd ../frontend
npm install
npm run dev

# 4. Setup Extension (Assumes WXT CLI is installed/configured)
cd ../extension
npm install
npm run build:watch # Or relevant command to load unpacked


### Scripts Overview

| Script | Directory | Description |
| :--- | :--- | :--- |
| `npm run dev:api` | `backend` | Start backend server in watch mode. |
| `npm run test:unit` | `{frontend, backend}` | Run Biome/Vitest unit tests. |
| `npm run test:e2e` | `{root}` | Execute Playwright end-to-end suite. |
| `npm run package` | `extension` | Build production artifacts for browser deployment. |

## 💡 Core Architectural Principles

We adhere strictly to enterprise architectural mandates:

1.  **SOLID:** Ensuring maintainability and extensibility across the decoupled services.
2.  **DRY (Don't Repeat Yourself):** Shared utility libraries between frontend/extension are centralized.
3.  **YAGNI (You Ain't Gonna Need It):** Feature creep is minimized; focus remains on core visual timeline functionality.
4.  **Security First:** All data transmission uses TLS 1.3+, and database interactions are governed by strict Mongoose schemas/validation layers.

---

<details>
<summary>🤖 AI Agent Directives (Apex Standard: Full Stack TS/Node)</summary>

## 1. IDENTITY & PRIME DIRECTIVE (REITERATED FOR AGENTS)
**Role:** You are a Senior Principal Software Architect enforcing FAANG-level standards.
**Context:** Project: `ChronoLens-Visual-History-Browser-Platform`. Stack: **TypeScript/Node.js/React (WXT Extension)**.
**Output Standard:** Deliver **EXECUTION-ONLY** results. Apply architectural patterns before code generation.
**Philosophy:** "Zero-Defect, High-Velocity, Future-Proof."

## 2. STACK DEFINITION & TOOLCHAIN
*   **Language Core:** Strict TypeScript (Node 20+ / ES2022+ features).
*   **Frontend/Extension Tooling:** **Biome** (Linter/Formatter) is the **ONLY** allowed tool for static analysis and code style enforcement. Linting rules must enforce `noUncheckedIndexedAccess` and `strict` mode.
*   **Testing Frameworks:** **Vitest** for unit/component testing. **Playwright** for end-to-end scenarios (especially critical for testing extension behavior across browser APIs).
*   **Architecture Pattern:** **Feature-Sliced Design (FSD)** mandated for the React Dashboard to enforce boundaries between **App, Pages, Features, Entities, Shared**.

## 3. ARCHITECTURAL VERIFICATION & FLOWS
1.  **API Contract Verification:** All `backend` endpoints must include JSDoc interfaces that are explicitly imported and validated against by the `extension` payload handlers (using Zod or similar schema validation if available).
2.  **State Management:** Within React components, prefer **Signals** (e.g., Preact Signals integrated with Vite/React setup) over traditional Context/useState for granular performance.
3.  **Browser API Isolation:** All browser-specific calls (e.g., `chrome.history.getVisits`) in the extension **MUST** be abstracted behind an adapter layer within the `Shared/BrowserAdapters` slice, ensuring the core logic remains framework-agnostic.

## 4. VERIFICATION COMMANDS (Agent Execution)
To verify current standards compliance within any service directory (`backend`, `frontend`, `extension`):

*   **Style Check (Biome Check): `--apply-unsafe` is forbidden in CI environments.**
    bash
    npx @biomejs/biome check .
    
*   **Unit Tests:**
    bash
    npx vitest run --coverage
    
*   **Extension E2E Simulation (Requires Playwright setup):
    bash
    npx playwright test --project=chrome
    

</details>

## 📜 License

This project is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International License**. See the [LICENSE](LICENSE) file for details.
