# 🛡️ Security Policy for ChronoLens Platform

This document outlines the security policy, reporting process, and commitment to maintaining the integrity and confidentiality of the `ChronoLens-Visual-History-Browser-Platform`.

As an enterprise-grade SaaS platform handling sensitive user browsing data, security is the **highest priority**. We adhere strictly to Zero Trust principles and follow OWASP Top 10 (2025) guidelines.

## 1. Supported Versions

We provide security updates for the latest stable release and the two previous major versions of the platform components (Extension, Backend Service, API).

| Component | Supported Version | Status |
| :--- | :--- | :--- |
| Platform Core | Latest Stable | Actively Maintained |
| Frontend (TS/Vite) | 6.x / 7.x | Actively Maintained |
| Extension Runtime | Latest Manifest V3 | Actively Maintained |

## 2. Reporting a Security Vulnerability

We welcome responsible disclosure of security vulnerabilities. By reporting in good faith, you agree not to disclose the vulnerability publicly until the vendor has had adequate time to patch it.

**Do NOT use public channels (Issues, Pull Requests) for reporting vulnerabilities.**

### Private Reporting Channels

1.  **Email (Preferred):** Send a detailed report to `security@chronolens.io`.
2.  **Encrypted Channel (Alternative):** Contact the Chief Architect via Signal/Keybase (details available upon initial email request).

### Required Report Content

Please include as much detail as possible to facilitate rapid triage:

*   **Vulnerability Type:** (e.g., XSS, CSRF, Insecure Direct Object Reference (IDOR)).
*   **Affected Component:** (e.g., Browser Extension Content Script, History Ingestion API).
*   **Proof of Concept (PoC):** Step-by-step instructions to reproduce the issue.
*   **Potential Impact:** Severity of exploitation.
*   **Suggested Mitigation (Optional):** If you have a fix, please include it.

## 3. Disclosure Timeline & SLA

We are committed to a rapid, professional response. This timeline initiates upon confirmed receipt of a valid vulnerability report via the private channels listed above.

| Stage | Target SLA (Business Days) |
| :--- | :--- |
| Acknowledgement of Receipt | 1 Day |
| Triage & Severity Assignment | 3 Days |
| Patch Development Complete | 14 Days (For critical/high) |
| Coordinated Public Disclosure | Post-Patch Deployment |

We will maintain continuous communication throughout the patching process.

## 4. Security Practices & Architecture

We architect the ChronoLens platform following proactive security measures:

*   **Data Minimization:** Browsing history is encrypted end-to-end, with only necessary metadata indexed for search. PII is heavily restricted.
*   **Input Sanitization:** Strict use of **Biome's** formatting and validation rules, coupled with server-side input validation (Defense in Depth).
*   **Extension Security:** All extension code utilizes strict Manifest V3 isolation, content security policies (CSP), and minimizes host permissions.
*   **Dependency Scanning:** Automated SBOM generation and dependency checks are run in every CI pipeline using tools like Snyk or similar vulnerability scanners.
*   **Secrets Management:** All credentials leverage cloud-native secrets managers (e.g., AWS Secrets Manager, Azure Key Vault). No secrets are committed to source control.

## 5. Automated Security Monitoring (DevSecOps)

Our continuous integration process (`.github/workflows/ci.yml`) enforces the following security gates before any merge is permitted:

1.  **Static Analysis:** Strict linting via Biome/Ruff to catch basic coding errors that could lead to vulnerabilities.
2.  **Dependency Scanning:** Automated checks for known CVEs in `package.json` dependencies.
3.  **Secret Scanning:** GitHub Secret Scanning is enabled organization-wide.

*We enforce the **Fail Fast** principle; any security gate failure halts the deployment pipeline.*