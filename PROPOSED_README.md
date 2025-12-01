# 🤖 AGENT DIRECTIVES: ChronoLens Repository Compliance

<details>
<summary>📜 Apex Architectural & Operational Blueprint (December 2025)</summary>

## 1. IDENTITY & PRIME DIRECTIVE
**Role:** You are a Senior Principal Software Architect and Master Technical Copywriter with **40+ years of elite industry experience**. You operate with absolute precision, enforcing FAANG-level standards and the wisdom of "Managing the Unmanageable."
**Context:** This repository, `ChronoLens-Visual-History-Browser-Platform`, is a **Cloud-Native SaaS Platform** combining a **TypeScript/React Frontend** with a **Node.js/Express Backend** and a **Browser Extension (WXT)**.
**Output Standard:** Deliver **EXECUTION-ONLY** results. No plans, no "reporting"—only executed code, updated docs, and applied fixes.
**Philosophy:** "Zero-Defect, High-Velocity, Future-Proof."

---

## 2. INPUT PROCESSING & COGNITION (WEB/EXTENSION STACK FOCUS)
*   **SPEECH-TO-TEXT INTERPRETATION PROTOCOL:**
    *   **Context:** User inputs may contain phonetic errors (homophones, typos).
    *   **Semantic Correction:** **STRICTLY FORBIDDEN** from executing literal typos. You must **INFER** technical intent based on the project context (Web/Extension).
    *   **Logic Anchor:** Treat the `README.md` as the **Single Source of Truth (SSOT)**.
*   **MANDATORY MCP INSTRUMENTATION:**
    *   **No Guessing:** Do not hallucinate APIs.
    *   **Research First:** Use `linkup`/`brave` to search for **December 2025 Industry Standards**, **Security Threats** (especially XSS/CSRF in extensions), and **2026 UI Trends** (Signals, Server Components adoption if applicable).
    *   **Validation:** Use `docfork` to verify *every* external API signature (Browser APIs, Express Routes).
    *   **Reasoning:** Engage `clear-thought-two` to architect complex state management and cross-origin communication flows *before* writing code.

---

## 3. CONTEXT-AWARE APEX TOOLCHAIN (LATE 2025 STANDARDS)
*   **PRIMARY SCENARIO: WEB / APP / EXTENSION (TypeScript)**
    *   **Stack:** This project mandates **TypeScript 6.x (Strict Mode)**. We utilize **Vite 7** for lightning-fast bundling, **TailwindCSS v4** for utility-first styling, and **WXT** (or modern equivalent) for multi-browser extension management.
    *   **Architecture:** Adheres to **Feature-Sliced Design (FSD)** for the frontend/extension, ensuring strict separation between `shared`, `entities`, `features`, and `pages`/`widgets`. Backend follows a clean **Hexagonal Architecture**.
    *   **State Management:** **Preact Signals** (or equivalent standardized Signal library) must be the default for reactive state, prioritizing granular updates over monolithic store patterns.
    *   **Lint/Test:** **Biome** (Linter/Formatter) for speed and **Playwright** (E2E) integrated with **Vitest** (Unit).

---

## 4. DEVELOPMENT STANDARDS & VERIFICATION
*   **Principle Enforcement:** All code must adhere to **SOLID**, **DRY**, and **YAGNI**. Over-engineering for hypothetical future features is forbidden.
*   **Security Mandate:** All data storage (Local, Sync, or MongoDB via Express) must be encrypted at rest. The extension must implement strict content security policies (CSP).
*   **Verification Commands (Example for Front/Extension):**
    *   `pnpm install` (Assuming pnpm workspace)
    *   `pnpm run lint` (Biome check)
    *   `pnpm run test:unit` (Vitest)
    *   `pnpm run test:e2e` (Playwright launch)

</details>

---

# ChronoLens: Visual History Browser Platform

**Digital Journey Mapping. Securely Visualized. Infinitely Recallable.**

ChronoLens is a next-generation, privacy-first SaaS platform designed to reclaim your digital memory. By deploying a unified **TypeScript/React Extension** and a secure **Cloud Backend (Node/Mongo)**, it automatically transforms ephemeral browsing activity into a rich, searchable, visual timeline, granting you unparalleled mastery over your own data footprint.

[![Build Status](https://img.shields.io/github/actions/workflow/status/chirag127/ChronoLens-Visual-History-Browser-Platform/ci.yml?style=flat-square)](https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform/actions/workflows/ci.yml)
[![Coverage](https://img.shields.io/codecov/c/github/chirag127/ChronoLens-Visual-History-Browser-Platform?style=flat-square)](https://codecov.io/gh/chirag127/ChronoLens-Visual-History-Browser-Platform)
[![Language](https://img.shields.io/github/languages/top/chirag127/ChronoLens-Visual-History-Browser-Platform?style=flat-square)](https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform)
[![License](https://img.shields.io/badge/License-CC%20BY--NC%204.0-blue?style=flat-square)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/chirag127/ChronoLens-Visual-History-Browser-Platform?style=flat-square)](https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform)

[⭐ Star ⭐ this Repo if you are visualizing your digital legacy!]

***

## 🧭 Architecture Overview

ChronoLens utilizes a decoupled, three-tier architecture ensuring high availability for the SaaS component and robust client-side data capture.

mermaid
graph TD
    subgraph Client Layer (Browser Extension)
        A[Vite/React/TS UI] -- API Calls --> B(Extension Service Worker/WXT)
    end

    subgraph Data Ingestion & Sync
        B -- HTTPS/Auth Token --> C{Express API Gateway}
    end

    subgraph Core Services (Backend SaaS)
        C --> D[Authentication/Authorization Service]
        C --> E[Data Processing & Indexing Engine]
    end

    subgraph Data Persistence
        E --> F[(MongoDB Atlas - Secure Storage)]
    end

    style A fill:#e0f7fa,stroke:#00acc1
    style C fill:#fff3e0,stroke:#ff9800
    style F fill:#e8f5e9,stroke:#4caf50


## 📚 Table of Contents

1.  [Features](#-features)
2.  [Technology Stack](#-technology-stack)
3.  [Getting Started](#-getting-started)
    *   [Prerequisites](#-prerequisites)
    *   [Local Setup](#-local-setup)
    *   [Development Scripts](#-development-scripts)
4.  [Development Principles](#-development-principles)
5.  [Contributing](#-contributing)

---

## ✨ Features

*   **Visual Timeline Rendering:** Interactive, chronological view of visited domains and pages using React components.
*   **Encrypted Storage:** All history metadata is encrypted end-to-end before transmission to the MongoDB backend.
*   **Smart Tagging & Search:** Leverages on-device processing (if viable) or lightweight AI in the backend for semantic tagging of history entries.
*   **Cross-Browser Compatibility:** Built using WXT standards to support Chrome, Firefox, and Edge.
*   **SaaS Synchronization:** Seamless history sync across multiple user devices via the secure Express API.

## 💻 Technology Stack

| Layer | Core Technologies |
| :--- | :--- |
| **Extension/Frontend** | TypeScript 6.x, React 19, Vite 7, TailwindCSS v4, WXT |
| **Backend API** | Node.js, Express.js, RESTful/gRPC Hybrid |
| **Database** | MongoDB (Sharded for scale) |
| **CI/CD & DevOps** | GitHub Actions, Cloud Native Deployment (Placeholder: K8s/Serverless) |
| **Linting/Testing** | Biome, Vitest, Playwright |

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed globally:
*   Node.js v20.x or higher (LTS 2025 recommended)
*   pnpm (Package Manager) - *The default manager for this project.*
*   Docker (For potential backend service integration)

### Local Setup

This repository follows a monorepo structure encompassing the extension client and the cloud API service.

bash
# 1. Clone the repository
git clone https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform.git
cd ChronoLens-Visual-History-Browser-Platform

# 2. Install dependencies across all workspaces
pnpm install

# 3. Build the browser extension (Output in /dist)
pnpm run build:extension

# 4. Start the backend API development server
pnpm run dev:api

# 5. Load the extension in your browser (See WXT documentation for specific instructions)


### Development Scripts

| Command | Description |
| :--- | :--- |
| `pnpm run dev:ext` | Run Vite HMR for the extension frontend. |
| `pnpm run dev:api` | Start the Express server with hot-reloading (e.g., using `tsx watch`). |
| `pnpm run lint` | Execute Biome check across all TypeScript and CSS files. |
| `pnpm run test:unit` | Run Vitest suite for services and utility functions. |
| `pnpm run test:e2e` | Execute full Playwright integration tests against the staging API endpoint. |
| `pnpm run deploy:stage` | Trigger GitHub Actions for staging deployment. |

## 🏗 Development Principles

1.  **Feature-Sliced Design (FSD):** Mandatory structure for the extension/frontend. Features must not import from sibling features, only from `shared` or lower layers.
2.  **Type Safety First:** All data payloads between the extension and the API **must** be strictly typed using TypeScript interfaces.
3.  **Granular Reactivity:** Utilize Signals (or similar framework-native reactivity primitives) to minimize unnecessary component re-renders.
4.  **DRY & YAGNI:** Code must be minimal, reusable, and address only known requirements.

## 🤝 Contributing

We welcome contributions that enhance security, performance, or features. Please adhere to the **Standard 11** documentation structure.

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feat/amazing-feature`).
3.  Commit your changes following [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
4.  Submit a Pull Request targeting the `main` branch.

See [CONTRIBUTING.md](./.github/CONTRIBUTING.md) for detailed guidelines.

## 🛡 Security & Privacy

Security is paramount for a history tool. Review our security guidelines at [.github/SECURITY.md](./.github/SECURITY.md) and report vulnerabilities responsibly.

