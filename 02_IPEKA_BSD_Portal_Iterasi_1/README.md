# QA Portfolio — Portal Aplikasi Internal IPEKA BSD (Run-01 & Run-02)

| Atribut Proyek | Detail |
| :--- | :--- |
| **System Under Test (SUT)** | Portal Internal IPEKA BSD (`https://app.ipekabsd.my.id/`) + 9 Subdomain Layanan |
| **Test Plan ID** | `TP-IPEKA-R1-V1.1` (`02_Test_Plan/test-plan.md`) |
| **Traceability Matrix (RTM)** | `03_Test_Cases/RTM.md` & Sheet `RTM` di `08_Test_Report/Test-Results.xlsx` |
| **QA Engineer** | Benedict Timothy |
| **Metode Pengujian** | **AI-Assisted Manual QA (Human-in-the-Loop)**: Perancangan 110 *test case* *Black-Box*, inspeksi ukuran DOM, verifikasi berkas unduhan PNG/SVG, observasi interval *polling* PRTG/cuaca, serta triase 5 *defect* dilakukan oleh QA Manual; akselerasi *smoke check* awal & pengambilan 23 *screenshot* dibantu skrip Playwright |
| **Status Akhir (Kumulatif Run-02)** | **110 Test Cases: 100 Passed, 3 Failed, 1 Blocked, 6 No Run (Transaksi Produksi Ditahan)** — *Pass Rate Kasus Terputuskan: 97,1% (100/103)* |

---

## 1. Ringkasan Eksekusi (Run-01 -> Run-02)

| Siklus Uji | Passed | Failed | Blocked | No Run | Total TC | Catatan Utama |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **Run-01 (Baseline Smoke & Validation)** | 88 | 2 | 0 | 20 | 110 | Verifikasi cepat 10 layanan, validasi *form* kosong, responsivitas dasar, dan *console/network check* |
| **Run-02 (Deep Interactive Follow-up)** | **100** | **3** | **1** | **6** | **110** | Pengujian mendalam terhadap 20 kasus terbuka: unduhan PNG/SVG QR (`TC-Q-11` Fail karena dimensi `495²/1023²/2046²`), interval *auto-refresh* PRTG & Cuaca, serta reproduksi *overflow* tabel PRTG pada viewport `375px` (`TC-I-07` & `TC-X-09` Fail) |

> [!NOTE]
> **Alasan 6 Kasus Berstatus `No Run` (`TC-V-05`, `TC-V-06`, `TC-V-10`, `TC-V-11`, `TC-B-08`, `TC-F-10`)**: Keenam kasus tersebut adalah pengiriman transaksi *write/submit* nyata (pendaftaran tamu sekolah, *booking* printer rapor, dan peminjaman inventaris IT) pada lingkungan produksi sekolah yang sedang aktif. Sesuai etika *Testing in Production (TiP)*, pengiriman data palsu ke basis data operasional sekolah ditahan hingga tersedia izin/lingkungan *staging*.

---

## 2. Struktur Folder Proyek
- `01_Requirement_Analysis/requirement-analysis.md` — Analisis kebutuhan fungsional & non-fungsional 10 layanan.
- `02_Test_Plan/test-plan.md` — Dokumen *Software Test Plan* berstandar ISO/IEC/IEEE 29119-3 & MySkill (`TP-IPEKA-R1-V1.1`).
- `03_Test_Cases/` — Rincian 110 *Test Case* per modul (`TC-portal.md` s.d. `TC-cross-cutting.md`) beserta `RTM.md` (15 kolom standar MySkill).
- `04_Test_Execution/` — Laporan *smoke* awal (`smoke-execution-report.md`) & tangkapan error konsol (`console-errors.json`).
- `05_Defect_Log/defect-log.md` — Daftar 5 temuan *defect* (`DEF-001` s.d. `DEF-005`).
- `06_Test_Data/test-data.md` — Data uji *dummy* terstandar.
- `07_Screenshots/` — 23 tangkapan layar *Desktop*, *Mobile*, dan *Form Validation*.
- `08_Test_Report/` — Ringkasan eksekusi (`Test-Execution-Report.md`), buku kerja hasil (`Test-Results.xlsx`), dan laporan investigasi mendalam `Run-02/Laporan.md` serta `Run-02/Ledger-110-kasus.md`.
- `QA_Portfolio_IPEKA_BSD_Benedict_Timothy.docx` & `.xlsx` — Bundel dokumen portofolio terpadu.
