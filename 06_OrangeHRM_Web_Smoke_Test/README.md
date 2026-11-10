# 06 — OrangeHRM OS 5.9 Web Smoke Testing

| Atribut Proyek | Detail |
| :--- | :--- |
| **System Under Test (SUT)** | OrangeHRM Open Source 5.9 Demo (`https://opensource-demo.orangehrmlive.com/`) |
| **Test Plan ID** | `TP-OHRM-SMOKE-V1.0` (`Test_Plan.md`) |
| **Traceability Matrix (RTM)** | `RTM.md` & Sheet `RTM` di `OrangeHRM_Smoke_RTM_TestCases.xlsx` |
| **QA Engineer** | Benedict Timothy |
| **Metodologi** | **Human-in-the-Loop AI-Assisted Smoke Testing**: Perancangan 20 skenario *smoke* kritikal & verifikasi *Test Oracle* oleh QA Manual; akselerasi navigasi & perekaman bukti 20 tangkapan layar menggunakan Playwright |
| **Hasil Akhir** | **20/20 Test Cases Passed (100%)** (`SMK-01` s.d. `SMK-20`), `0 Defect` |

---

## Struktur Artefak & Direktori
- `Test_Plan.md` — Dokumen *Software Test Plan* 11 bagian berstandar ISO/IEC/IEEE 29119-3 (`TP-OHRM-SMOKE-V1.0`).
- `RTM.md` — *Requirement Traceability Matrix* 15 kolom standar MySkill (`REQ-OHRM-01` s.d. `REQ-OHRM-05` -> `SMK-01` s.d. `SMK-20`).
- `OrangeHRM_Smoke_RTM_TestCases.xlsx` — Buku kerja Excel berisi sheet `RTM` (15 kolom) dan `Test Cases`.
- `Test_Report.md` & `report.html` — Laporan hasil eksekusi pengujian dalam format Markdown dan HTML visual.
- `screenshots/` — 20 tangkapan layar bernomor urut (`01-login-page.png` s.d. `20-forgot-password.png`).
