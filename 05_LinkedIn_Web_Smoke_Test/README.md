# 05 — LinkedIn Web Application Smoke Testing

| Atribut Proyek | Detail |
| :--- | :--- |
| **System Under Test (SUT)** | LinkedIn Web (`https://www.linkedin.com/`) |
| **Test Plan ID** | `TP-LNKD-SMOKE-V1.1` (`Test_Plan/LinkedIn_Smoke_Test_Plan.md`) |
| **Traceability Matrix (RTM)** | `Test_Plan/RTM_LinkedIn_Smoke.md` & Sheet `RTM` di `Test_Plan/LinkedIn_Smoke_Test_Cases.xlsx` |
| **QA Engineer** | Benedict Timothy |
| **Metodologi** | **Human-in-the-Loop AI-Assisted Smoke Testing**: 24 *test case* dieksekusi dengan akselerasi sesi peramban terkelola + 8 *test case* interaktif (`FEED-005`, `MSG-003`, `AUTH-002`..`005`, `PROFILE-003`, `NAV-002`) ditindaklanjuti secara manual oleh QA beserta *data cleanup* |
| **Hasil Akhir** | **32/32 Test Cases Passed (100%)** — Kredensial akun uji telah disensor (*redacted*) sesuai standar keamanan data |

---

## Struktur Direktori
- `Test_Plan/LinkedIn_Smoke_Test_Plan.md` — Dokumen *Software Test Plan* 11 bagian berstandar ISO/IEC/IEEE 29119-3 (`TP-LNKD-SMOKE-V1.1`).
- `Test_Plan/RTM_LinkedIn_Smoke.md` — *Requirement Traceability Matrix* 15 kolom standar MySkill (32 *Test Case*).
- `Test_Plan/Manual_Followup_Blocked_TC.md` — Dokumentasi tindak lanjut manual untuk 8 kasus interaktif yang memerlukan intervensi manusia (*rich-text editor* & *logout/negative auth*).
- `Test_Plan/LinkedIn_Smoke_Test_Cases.xlsx` — Buku kerja Excel berisi *Summary*, *RTM (15 Kolom)*, *32 Test Cases*, dan *Test Data (Redacted)*.
- `screenshots/` — 23 tangkapan layar bukti eksekusi (`AUTH-001` s.d. `SEARCH-003`).
