# Automation Suite — IPEKA BSD Internal Portal

Playwright (TypeScript) tests for learning and regression.

## Setup
```bash
npm install
npx playwright install
```

## Run
```bash
npm test
npm run test:smoke
npm run test:report
```

## Notes
- Tests targeting authenticated admin flows are marked `test.skip` and require credentials.
- Evidence (screenshots/videos/traces) saved by Playwright on failure.
- Config: `playwright.config.ts`.

---
**Test Designer & Reviewer:** Benedict Timothy — Manual QA & AI-Assisted Automation | **Date:** 06 Nov 2026

## Cross-Browser Run (09 Nov 2026)
- **Smoke Suite**: 42/42 Passed (`Chromium`, `Firefox`, `WebKit` — 14 checks per browser)
- **Execution Mode**: Automated via Playwright TypeScript Suite (Verified by Benedict Timothy)
- **Evidence**: `../Evidence/<Browser>`
