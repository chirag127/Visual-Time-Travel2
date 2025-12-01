---
name: Bug Report
about: Report a bug or unexpected behavior.
title: "[BUG] Short, descriptive summary of the issue"
labels: "bug"
assignees:

body:
  - type: markdown
    attributes:
      value: | # Issue Report Title
        ## Bug Report

        Thank you for reporting a bug! Please provide as much detail as possible to help us understand and resolve the issue quickly. Use the **Apex Technical Authority's Zero-Error Mandate** to ensure clarity and actionable information.

        --- # Issue Details

  - type: dropdown
    id: environment
    attributes:
      label: "Environment"
      description: "Please specify the environment where the bug occurred."
      options:
        - "Production (Live SaaS Platform)"
        - "Staging Environment"
        - "Local Development Environment"
        - "Browser Extension"
        - "Other (Please specify in details)"
      is_required: true

  - type: input
    id: affected-component
    attributes:
      label: "Affected Component(s)"
      description: "Which part of ChronoLens is exhibiting the bug? (e.g., Browser Extension, Web App UI, API Service, Database Layer)"
      placeholder: "e.g., Browser Extension, Web App Dashboard, User Authentication API"
    validations:
      required: true

  - type: input
    id: browser-version
    attributes:
      label: "Browser & Version (if applicable)"
      description: "Specify the browser and its version (e.g., Chrome 120.0.6099.109)"
      placeholder: "e.g., Chrome 120.0.6099.109"
    validations:
      required: false

  - type: input
    id: os-version
    attributes:
      label: "Operating System & Version (if applicable)"
      description: "Specify the OS and its version (e.g., Windows 11 Pro, macOS Sonoma 14.2)"
      placeholder: "e.g., Windows 11 Pro"
    validations:
      required: false

  - type: textarea
    id: steps-to-reproduce
    attributes:
      label: "Steps to Reproduce"
      description: | # Steps to Reproduce
        Please provide a concise, step-by-step guide to reproduce the behavior.
        **Mandate:** Follow the **Apex Technical Authority's Recursive Perfection Loop** for clarity.
        1. **Action:** (e.g., Navigate to X page)
        2. **Action:** (e.g., Click button Y)
        3. **Action:** (e.g., Observe effect Z)
      placeholder: |
        1. Open the ChronoLens browser extension.
        2. Go to the 'Timeline' view.
        3. Filter history by 'Date Range: Last 7 Days'.
        4. Observe that the data does not load.
      rows: 5
    validations:
      required: true

  - type: textarea
    id: expected-behavior
    attributes:
      label: "Expected Behavior"
      description: "What did you expect to happen?"
      placeholder: "e.g., The timeline should display all browsing history entries from the last 7 days."
      rows: 3
    validations:
      required: true

  - type: textarea
    id: actual-behavior
    attributes:
      label: "Actual Behavior"
      description: "What actually happened? Describe the bug in detail."
      placeholder: "e.g., The timeline remains empty or shows an error message 'Failed to load data'. The console logs show a 500 Internal Server Error."
      rows: 5
    validations:
      required: true

  - type: textarea
    id: screenshots-logs
    attributes:
      label: "Screenshots or Logs (Optional but Recommended)"
      description: | # Screenshots/Logs
        Attach any relevant screenshots, screen recordings, or console logs that illustrate the issue. For console logs, please use the **Zero-Error Mandate** and capture only essential error messages.
      placeholder: "Drag and drop screenshots or paste relevant log snippets here."
      rows: 5
    validations:
      required: false

  - type: textarea
    id: additional-context
    attributes:
      label: "Additional Context"
      description: "Any other information that could be helpful, such as potential causes, workarounds you've found, or related issues."
      placeholder: "e.g., This bug started occurring after the latest update to the browser extension. It doesn't happen on Firefox, only Chrome."
      rows: 5
    validations:
      required: false

  - type: markdown
    attributes:
      value: | # Developer Notes
        --- # Developer Notes

        * **Apex Technical Authority Protocol:** All reports are processed under the **Recursive Perfection Loop**. Ensure clarity and reproducibility.
        * **Security:** If the bug involves a potential security vulnerability, please use the `SECURITY.md` channel and **DO NOT** report it here.
        * **Prioritization:** Issues will be prioritized based on severity, impact, and reproducibility.
