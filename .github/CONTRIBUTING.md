# 🚀 Contributing to ChronoLens-Visual-History-Browser-Platform

Welcome, Apex Contributor! We are thrilled that you're considering contributing to ChronoLens, a high-performance, privacy-focused platform for visualizing your digital history. This project adheres to the highest engineering standards and the **Apex Technical Authority** philosophy: "Zero-Defect, High-Velocity, Future-Proof." Your contributions are vital to achieving this vision.

By contributing, you agree to uphold our stringent quality benchmarks and collaborative principles. Together, we build elegant, robust, and secure solutions.

## 💡 How to Contribute

### 🐞 Reporting Bugs
Found an anomaly? Help us achieve zero-defect status!

1.  **Search Existing Issues**: Before creating a new issue, please check our [issues page](https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform/issues) to see if the bug has already been reported.
2.  **Use the Bug Report Template**: If it's a new bug, open a new issue using our [Bug Report Template](https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform/blob/main/.github/ISSUE_TEMPLATE/bug_report.md). Provide clear, concise steps to reproduce the issue, expected behavior, and actual behavior. Include browser details (Chrome, Firefox, etc.) and ChronoLens extension version.

### ✨ Suggesting Enhancements & Features
Do you have an idea for an enhancement or a groundbreaking new feature?

1.  **Search Existing Issues**: Check if a similar suggestion already exists.
2.  **Open an Issue**: Describe your proposed feature or enhancement in detail. Explain its purpose, potential impact, and how it aligns with ChronoLens's mission. We encourage thoughtful discussion and detailed proposals.

### 🛠️ Your First Code Contribution
Ready to dive into the codebase? We appreciate every line of well-crafted code.

1.  **Fork the Repository**: Start by forking `ChronoLens-Visual-History-Browser-Platform` to your GitHub account.
2.  **Clone Your Fork**: Clone your forked repository to your local machine:
    bash
    git clone https://github.com/your-username/ChronoLens-Visual-History-Browser-Platform.git
    cd ChronoLens-Visual-History-Browser-Platform
    
3.  **Create a New Branch**: Always work on a new branch. Name it descriptively (e.g., `feat/add-timeline-filter`, `fix/login-bug`):
    bash
    git checkout -b your-branch-name
    
4.  **Make Your Changes**: Implement your feature or fix, adhering to our coding standards (detailed below).
5.  **Test Your Changes**: Ensure all existing tests pass and add new tests for your features or bug fixes. Run linting and formatting.
6.  **Commit Your Changes**: Follow our [Commit Guidelines](#commit-guidelines).
7.  **Push to Your Fork**: Push your branch to your forked repository on GitHub.
8.  **Create a Pull Request**: Open a Pull Request from your branch to the `main` branch of the original repository. Provide a clear description using our [Pull Request Template](https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform/blob/main/.github/PULL_REQUEST_TEMPLATE.md).

## 👨‍💻 Development Setup

ChronoLens is a full-stack TypeScript application comprising a browser extension, a Node.js/Express.js backend, and a React web dashboard. MongoDB is used for data persistence.

### Prerequisites
*   [Node.js](https://nodejs.org/) (LTS version recommended)
*   [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/) (preferred)
*   [MongoDB](https://www.mongodb.com/try/download/community) (running locally or accessible via URI)
*   Code Editor (e.g., VS Code) with [Biome extension](https://biomejs.dev/integrations/editors/) recommended.

### Getting Started

1.  **Clone the Repository**:
    bash
    git clone https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform.git
    cd ChronoLens-Visual-History-Browser-Platform
    

2.  **Install Dependencies**:
    The project is a monorepo structure, but for simplicity, we'll assume a shared root `package.json` for initial setup or separate `frontend`, `backend`, and `extension` directories.

    bash
    # Install root dependencies
    pnpm install

    # Navigate to frontend (React App) and install
    cd frontend
    pnpm install

    # Navigate to backend (Node.js/Express.js) and install
    cd ../backend
    pnpm install

    # Navigate to extension (WXT) and install
    cd ../extension
    pnpm install
    

3.  **Environment Variables**:
    Create `.env` files in `backend/` and potentially `frontend/` and `extension/` based on provided `.env.example` files (if present). These will typically include:
    *   `MONGO_URI=mongodb://localhost:27017/chronolens`
    *   `JWT_SECRET=your_super_secret_key`
    *   `PORT=3001` (for backend)

4.  **Run Development Servers**:

    *   **Backend**:
        bash
        # In backend/ directory
        pnpm dev # or npm run dev
        

    *   **Frontend (React Dashboard)**:
        bash
        # In frontend/ directory
        pnpm dev # or npm run dev
        

    *   **Browser Extension (WXT)**:
        bash
        # In extension/ directory
        pnpm dev # or npm run dev
        
        Follow WXT's instructions to load the unpacked extension into your browser (Chrome/Firefox).

## 📝 Coding Standards

We enforce rigorous coding standards to maintain code quality, readability, and maintainability. All code must conform to these principles.

### Architecture
*   **Feature-Sliced Design (FSD)**: We adhere to the FSD methodology for structuring our frontend application, ensuring clear boundaries between layers (App, Pages, Widgets, Features, Entities, Shared) and promoting scalability and testability.
*   **Modular Monolith**: The backend follows a modular monolith approach, encapsulating distinct domains with clear interfaces.

### Language & Tooling
*   **TypeScript (Strict)**: All new code must be written in TypeScript, leveraging strict mode for enhanced type safety and fewer runtime errors.
*   **Biome**: Used for ultra-fast linting and formatting across the entire codebase. Ensure your editor is configured to use Biome on save.
    *   Run `pnpm biome check --apply .` and `pnpm biome format --write .` before committing.

### Testing
*   **Unit Tests (Vitest)**: All new features and significant bug fixes require corresponding unit tests using Vitest. Aim for high code coverage on critical paths.
*   **End-to-End Tests (Playwright)**: Crucial user flows and integration points are covered by Playwright E2E tests. Add E2E tests for new full-stack features.
    *   Run tests with `pnpm test` (for unit) and `pnpm test:e2e` (for E2E).

### Principles
*   **SOLID**: Adhere to Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion Principles.
*   **DRY (Don't Repeat Yourself)**: Eliminate redundant code and information.
*   **YAGNI (You Aren't Gonna Need It)**: Implement only what is required, avoid premature optimization or complex generalizations.

## 📜 Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for commit messages. This ensures a readable history and facilitates automated changelog generation.

**Commit Message Format**:


<type>(<scope>): <short description>

[optional body]

[optional footer]


**Examples**:
*   `feat(extension): add tab history capture`
*   `fix(backend): correct timestamp parsing in API`
*   `docs(readme): update development setup`
*   `refactor(frontend): streamline history item component`

## 🛡️ Security Vulnerabilities

If you discover any security vulnerabilities, please do NOT open an issue. Refer to our [Security Policy](https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform/blob/main/.github/SECURITY.md) for instructions on how to responsibly disclose them.

## 📄 License

By contributing to ChronoLens-Visual-History-Browser-Platform, you agree that your contributions will be licensed under the [CC BY-NC 4.0 License](https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform/blob/main/LICENSE).

## 🤖 AI Agent Directives

For AI-driven development and context, refer to the project's [AGENTS.md](https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform/blob/main/AGENTS.md) file. This document outlines the core technical vision, architectural patterns, and verification commands essential for machine-driven code generation and analysis. Adherence to these directives ensures consistency and accelerates development velocity.