# 03 — Portal Internal IPEKA BSD (Iterasi 2: PRD, 116 Web TC, Cross-Browser Playwright, & Mobile Testing Pack)

| Atribut Proyek | Detail |
| :--- | :--- |
| **System Under Test (SUT)** | Ekosistem Portal Internal IPEKA BSD (`https://app.ipekabsd.my.id/` + 9 Subdomain Layanan) |
| **Test Plan ID** | `TP-IPEKA-R2-V1.0` (`TestPlan.md`) & Mobile Test Plan `TP-IPEKA-MOB-V1.0` (`Mobile_Testing/test-plan.md`) |
| **Product Requirements (PRD)** | `PRD.md` (10 Modul `MOD-01` s.d. `MOD-10` + 5 NFR) |
| **Traceability Matrix (RTM)** | `TraceabilityMatrix.md` & `TraceabilityMatrix.xlsx` (116 Web TC, 15 kolom standar MySkill) + Mobile RTM di `Mobile_Testing/test-cases.md` |
| **QA Engineer** | Benedict Timothy |
| **Metodologi** | **Human-in-the-Loop AI-Assisted QA**: Manual *Black-Box* (`116 Web TC`: `79 Passed`, `37 Blocked` karena gerbang SSO/Admin) + **Playwright Cross-Browser Smoke** (`Chromium`, `Firefox`, `WebKit`: `42/42 Passed`) + **Mobile Testing Pack** (`20 TC: No Run — Ready for Joint Execution`) |
| **Temuan Defect** | **6 Bug Reports** (`BUG-001` s.d. `BUG-006`) |

---

## Struktur Artefak & Direktori
- `PRD.md` — Dokumen *Product Requirements Document* hasil *reverse-engineering* 10 layanan sekolah.
- `TestPlan.md` — *Software Test Plan* berstandar ISO/IEC/IEEE 29119-3 (`TP-IPEKA-R2-V1.0`).
- `EnvironmentConfig.md` — Dokumentasi topologi DNS/TLS, *headers*, dan matriks peramban.
- `TestCases.md` & `TestCases.xlsx` — Spesifikasi 116 *Test Case* Web beserta 6 laporan *bug*.
- `TraceabilityMatrix.md` & `TraceabilityMatrix.xlsx` — *Requirement Traceability Matrix* (15 kolom standar MySkill).
- `SummaryReport.html` & `SummaryReport.pdf` — Laporan eksekutif hasil pengujian Iterasi 2.
- `Automation/` — Proyek Playwright TypeScript (*Page Object Model*) untuk pengujian *Cross-Browser Smoke* (`Chromium`, `Firefox`, `WebKit`).
- `Evidence/` — 33 tangkapan layar *Cross-Browser* (`Chromium/`, `Firefox/`, `WebKit/`).
- `Mobile_Testing/` — Paket lengkap pengujian *Mobile Web* (`test-plan.md`, `test-cases.md`, `execution-report.md`, `device-matrix.md`, `test-data.md`, `bug-reports.md`) berstatus `No Run (Ready for Execution)`.
