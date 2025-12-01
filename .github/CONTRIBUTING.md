# Contribution Guidelines for ChronoLens-Visual-History-Browser-Platform

As the Apex Technical Authority, we enforce rigorous standards to maintain a future-proof, zero-defect codebase. Contributions that align with these principles are highly valued.

## 1. Core Philosophy: Apex Standards

All contributions must adhere to the following principles, derived from the December 2025 Apex Authority Directives:

*   **Zero-Defect Mentality:** Robust error handling, comprehensive testing, and immutable data patterns where appropriate.
*   **High-Velocity Development:** Leverage modern tooling (**Vite 7, TypeScript 6.x, Tauri v2**) for rapid iteration.
*   **Architectural Purity:** Favor **Feature-Sliced Design (FSD)** for the frontend (React/TypeScript) and **Hexagonal Architecture** for the backend (NodeJS/Express) components, ensuring clear separation of concerns.
*   **Security First:** Privacy is paramount for a history platform. All data handling must be audited against OWASP Top 10 (2025).

## 2. Workflow Overview

We follow a structured Gitflow enhanced by the Apex standard:

1.  **Fork:** Fork the repository (`https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform`).
2.  **Branch:** Create a new feature branch (e.g., `feat/new-timeline-filter` or `fix/auth-bug`). Branch names must be descriptive.
3.  **Commit:** Write atomic, descriptive commits. Use conventional commit prefixes (`feat:`, `fix:`, `docs:`, `refactor:`, `chore:`).
4.  **Develop & Test:** Implement changes and ensure **100% test coverage** for new logic (Unit via Vitest, E2E via Playwright).
5.  **Pull Request (PR):** Open a PR targeting the `main` branch. Ensure the PR template is fully populated.
6.  **Review:** Your PR will be automatically checked by **CI/CD (`ci.yml`)** for linting, formatting (Biome), and tests before manual review.

## 3. Branching Strategy

We enforce a strict branching model:

| Branch Name Prefix | Purpose | Required Approvals |
| :--- | :--- | :--- |
| `feat/` | New feature development. | 1 Senior Reviewer |
| `fix/` | Patching critical bugs in production code. | 1 Senior Reviewer |
| `refactor/` | Code restructuring without changing external behavior. | 1 Peer Reviewer |
| `docs/` | Documentation updates (README, CONTRIBUTING, etc.). | None (Automated Check) |
| `chore/` | Build process, tooling, dependency upgrades. | None (Automated Check) |

## 4. Development Environment Setup

Ensure your local environment mirrors the CI environment as closely as possible.

bash
# 1. Clone your fork
git clone https://github.com/YOUR_USERNAME/ChronoLens-Visual-History-Browser-Platform.git
cd ChronoLens-Visual-History-Browser-Platform

# 2. Install dependencies (Using the modern NodeJS/NPM standard)
npm install

# 3. Run static analysis checks (Mandatory before committing code)
npm run lint
npm run format

# 4. Run the local development server for the Extension Frontend
npm run dev:extension

# 5. Run Backend Tests (Node/Express)
npm run test:server


## 5. Code Style and Quality Enforcement

**LINTING & FORMATTING:** We mandate **Biome** for all TypeScript/JavaScript/CSS files. Style violations will cause the CI build to fail.

**TESTING MANDATE:**

*   **Unit Tests:** Must achieve **100% coverage** for all new functions/modules using **Vitest**.
*   **E2E Tests:** Must use **Playwright** to validate critical user journeys (e.g., History Capture -> Timeline Visualization).

## 6. Reporting Issues and Security Vulnerabilities

### Bug Reports
Please use the provided issue template (`.github/ISSUE_TEMPLATE/bug_report.md`). Provide **reproducible steps** and clearly specify the environment (Browser, OS).

### Security Disclosure

**CRITICAL:** Any finding related to user privacy, data leakage, or authentication bypass must be reported immediately following the guidelines in `.github/SECURITY.md`. **Do not** open a public issue for security matters.

## 7. License

All contributions are made under the terms of the **CC BY-NC 4.0 License** (LICENSE file). By submitting a Pull Request, you confirm your right to contribute the code under this license.