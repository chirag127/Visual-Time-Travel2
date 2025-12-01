--- 
name: Feature / Fix / Refactor Pull Request
about: High-velocity contribution template for the ChronoLens platform.
title: "[TYPE]: Concise and descriptive title (e.g., [FEAT]: Implement visual timeline component)"
labels: ['needs review', 'priority: medium']
assignees: ['chirag127']
---

## 🚀 High-Level Summary

Please provide a brief, high-impact summary of this change. Why is it needed, and what problem does it solve?

## 🔗 Related Issues

Closes # (If applicable, link to the related issue)

## 📋 Pre-Merge Checklist (Mandatory Gates)

Reviewers: Please verify that all checks below are marked by the author.

### Code Quality & Standards
- [ ] **Code Alignment:** All changes adhere to the Architectural Guidelines defined in `AGENTS.md` (SOLID, FSD Principles).
- [ ] **Linting & Formatting:** `pnpm lint` (or equivalent `biome check --apply-unsafe`) has been run and passed successfully.
- [ ] **Type Safety:** All TypeScript files are strictly typed, and no implicit `any` usage is introduced.
- [ ] **Performance:** Changes avoid introducing complexity that impacts the critical rendering path or extension startup time.
- [ ] **Error Handling:** Robust try/catch or promise rejection handling is implemented for all I/O, API, and asynchronous operations (client and server).

### Testing & Verification
- [ ] **Unit Tests:** New or updated functionality is covered by appropriate Vitest/Jest unit tests (Code Coverage maintained or increased).
- [ ] **E2E/Integration Tests:** Relevant Playwright tests (especially for core user flows in the extension) have been updated or added.
- [ ] **Local Verification:** Changes have been tested locally on the target browsers (Chrome/Firefox) and the Node.js backend environment.
- [ ] **Security:** No secrets or credentials are hardcoded, and input validation is implemented to prevent XSS/Injection.

### Documentation & Artifacts
- [ ] **JSDoc/TSDoc:** Public APIs, exported functions, and complex logic blocks are clearly documented.
- [ ] **README/Docs:** If this PR changes configuration or public APIs, relevant documentation (e.g., API routes, setup instructions) has been updated.

## ⚙️ Architectural Impact Analysis

### Components Affected (e.g., `extension/src/features/timeline`, `server/api/history`)
*   [List affected files/modules]

### Data Model Changes (If applicable)
*   [ ] MongoDB Schema updated? (Specify collection and fields)
*   [ ] State management changes (e.g., new global state in React)?

## 🔎 Guidance for Reviewers

Please focus your review primarily on these areas:

1.  **TypeScript Logic:** Verify strict type adherence in the WXT extension service workers.
2.  **API Contract:** Ensure the client-server interaction adheres to the defined REST contracts.
3.  **FSD Compliance:** Check if the changes follow the Feature-Sliced Design structure for the frontend components.
4.  **Security:** Scrutinize database queries and input sanitization on the Node.js backend.

---
### CI/CD Status Reference

| Status | Link |
| :--- | :--- |
| **Build Pipeline** | [CI Workflow Status](https://github.com/chirag127/ChronoLens-Visual-History-Browser-Platform/actions/workflows/ci.yml) |
| **Code Coverage** | [Latest Coverage Report](https://app.codecov.io/gh/chirag127/ChronoLens-Visual-History-Browser-Platform) |

*Thank you for contributing to ChronoLens!*