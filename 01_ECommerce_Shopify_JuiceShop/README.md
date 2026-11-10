# 01 — E-Commerce & Account Security Testing (SauceDemo Shopify & OWASP Juice Shop)

| Atribut Proyek | Detail |
| :--- | :--- |
| **System Under Test (SUT)** | **SauceDemo Shopify** (`https://sauce-demo.myshopify.com`) & **OWASP Juice Shop v20.3.0** (`http://localhost:3000`) |
| **Test Plan ID** | `TP-WEBDEMO-V1.1` (`01_Test_Plan/Test-Plan.md` & `01_Test_Plan/SOFTWARE TEST PLAN DOCUMENT.docx`) |
| **Traceability Matrix (RTM)** | `02_Test_Cases/rtm.md`, sheet `RTM` di `02_Test_Cases/Test-Cases.xlsx`, & `03_Test_Report/Test-Results.xlsx` |
| **QA Engineer** | Benedict Timothy |
| **Metodologi** | **Human-in-the-Loop Manual QA**: *Black-Box Testing* (*Equivalence Partitioning*, *Boundary Value Analysis*, *Session/RBAC Security*, & *Environment Fallback Analysis*) |
| **Hasil Eksekusi** | **54 Test Cases**: `42 Passed (77,8%)`, `2 Failed (3,7%)`, `8 Blocked (14,8%)`, `2 No Run (3,7%)` — *Executable Pass Rate: 95,5% (42/44)* |
| **Total Temuan Bug** | **9 Laporan Bug/Blocker** (`BUG-SD-001`..`006`, `BUG-JS-001`, `BUG-ENV-001`..`002`) |

---

## Struktur Direktori
- `01_Test_Plan/` — Dokumen *Software Test Plan* berstandar ISO/IEC/IEEE 29119-3 (`Test-Plan.md` & `SOFTWARE TEST PLAN DOCUMENT.docx`).
- `02_Test_Cases/` — Kumpulan 54 *Test Case* (`Test-Cases.xlsx`), *Requirement Traceability Matrix* 15 kolom (`rtm.md`), dan spesifikasi data uji (`test-data.md`).
- `03_Test_Report/` — Laporan eksekusi lengkap (`Test-Execution-Report.md`), daftar 9 laporan *defect* (`Bug-Reports.md`), buku kerja hasil (`Test-Results.xlsx`), dan 45 tangkapan layar bukti di `03_Test_Report/evidence/`.
