# Contributing to ChronoLens-Visual-History-Browser-Platform

Welcome! We value contributions that adhere to our **Apex Technical Authority** standards. As an enterprise-grade SaaS platform, precision, security, and long-term maintainability are non-negotiable. 

By contributing, you agree to operate under the principles of **Zero-Defect, High-Velocity, Future-Proof** development.

--- 

## 1. Prerequisites & Environment Setup

Before submitting a Pull Request (PR), ensure your local environment mirrors our production toolchain:

1.  **Fork** this repository.
2.  **Clone** your fork locally.
3.  **Install Dependencies** using the recommended package manager:
    ```bash
    # Assuming Node.js 20+ and npm/pnpm/yarn are set up
    npm install
    # or pnpm install
    ```
4.  **Configure Hooks:** Ensure Biome and related pre-commit hooks are active.

## 2. Branching Strategy: Feature-First Development

We use a streamlined **Trunk-Based Development** model reinforced by detailed PR descriptions.

*   **Main Branch:** `main` (Always production-ready, protected).
*   **Feature Branches:** Base all new work off `main`.
*   **Naming Convention:** Branches must follow Conventional Commits structure:
    *   `feat/short-description` (New features)
    *   `fix/short-description` (Bug fixes)
    *   `chore/update-deps` (Maintenance/Tooling)

```bash
git checkout -b feat/visual-timeline-rendering
git push -u origin feat/visual-timeline-rendering
```

## 3. The Apex Contribution Workflow (Zero-Error Mandate)

Every contribution must pass the **Recursive Perfection Loop** before merging.

### A. CODE QUALITY & PATTERNS

1.  **Architecture:** Adhere strictly to **Feature-Sliced Design (FSD)** principles. Isolate logic into `entities`, `features`, `pages`, and `shared` layers.
2.  **TypeScript Strictness:** All new TypeScript code must compile with `"strict": true` and pass Biome checks.
3.  **SOLID & DRY:** Refactor legacy code immediately if encountered. Code must be self-documenting.
4.  **Security (DEVSECOPS):** Validate ALL user inputs. Never trust external data sources without sanitization or validation (OWASP 2025).

### B. TESTING (F.I.R.S.T. Mandate)

*   **Unit Tests:** Must accompany every new function or component. Use Vitest.
*   **Integration/E2E Tests:** For complex flows, use Playwright. Always mock external API calls unless explicitly testing integration.
*   **Coverage:** Aim for 100% scenario coverage on modified logic. If you touch a file, update its corresponding test file.

### C. LINTING & FORMATTING

**Formatting (Biome) and Linting (Ruff equivalents for JS/TS) are mandatory.**

Run the following command **before committing**:

```bash
# Apply formatting fixes automatically
biome check --apply
# Check for logical errors
vitest
```

If automated checks fail, your PR will be rejected by CI.

## 4. Submitting a Pull Request

Use the provided **Pull Request Template** (`.github/PULL_REQUEST_TEMPLATE.md`) as your checklist.

1.  **Atomic Commits:** Each commit should represent one logical change (a feature addition, a specific fix, or a refactor). Utilize `git rebase -i` to squash minor fixes before submission.
2.  **Conventional Commits:** All commit messages must strictly follow the `type(scope): subject` format (e.g., `feat(history): add search indexing capability`).
3.  **Description:** Detail the *Why* and *How*. Reference any linked issues (`Closes #123`).
4.  **Review:** Assign appropriate reviewers based on the affected system (`backend-auth`, `frontend-ux`).

## 5. Reporting Issues

If you find a bug or wish to propose a feature, please use the **Issue Templates** (`.github/ISSUE_TEMPLATE/`). Be detailed and follow the prompts provided in the template.

## 6. License & Governance

All contributions are licensed under the **CC BY-NC (Creative Commons Attribution-NonCommercial 4.0 International)** license, as specified in the `LICENSE` file. Please ensure any third-party code or assets used comply with this structure.