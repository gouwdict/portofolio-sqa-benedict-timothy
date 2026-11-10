# Mobile Testing Pack — Portal Aplikasi Internal IPEKA BSD

| Atribut Paket Uji | Detail |
| :--- | :--- |
| **System Under Test (SUT)** | Portal Internal IPEKA BSD (`https://app.ipekabsd.my.id/`) & 10 Subdomain Layanan |
| **Test Plan ID** | `TP-IPEKA-MOB-V1.0` (`test-plan.md`) |
| **Target Device** | Android Emulator — Google Pixel 7 (Android 14 / API 34, Chrome Mobile) |
| **QA Engineer** | Benedict Timothy |
| **Metode Pengujian** | **Manual Mobile Web Testing (AI-Assisted Preparation)**: Perancangan matriks perangkat, data uji, RTM mobile, dan 20 skenario uji disiapkan untuk sesi pengujian interaktif bersama |
| **Status Saat Ini** | **Test Preparation Completed (Ready for Live Execution) — 20 Test Cases (`No Run`)** |

---

## 1. Gambaran Umum (*Overview*)
Folder ini berisi paket perencanaan dan skenario pengujian **Mobile Web** untuk memverifikasi tata letak responsif (*responsive layout*), kemudahan sentuh (*touch target usability*), perilaku papan ketik virtual (*virtual keyboard*), serta alur navigasi dan formulir pada **Portal Aplikasi Internal IPEKA BSD** menggunakan peramban Chrome di Android 14 (Pixel 7).

## 2. Daftar Dokumen di Dalam Folder Ini
- `test-plan.md` — Dokumen *Mobile Software Test Plan* berstandar ISO/IEC/IEEE 29119-3 & MySkill (`TP-IPEKA-MOB-V1.0`).
- `device-matrix.md` — Matriks perangkat dan orientasi layar (`Portrait` & `Landscape`).
- `test-data.md` — Data uji spesifik perangkat bergerak (*dummy input*, karakter khusus, teks panjang).
- `test-cases.md` — **20 Skenario Uji Mobile (`MOB-001` s.d. `MOB-020`)** beserta **Tabel Requirement Traceability Matrix (RTM) Mobile 15 Kolom**.
- `execution-report.md` — Lembar laporan eksekusi yang telah memuat daftar 20 TC (`Status: No Run — Siap Dieksekusi`).
- `bug-reports.md` — Template dan daftar fokus cacat tampilan *mobile* (termasuk kandidat verifikasi ulang bug *horizontal overflow* tabel PRTG `DEF-005`).
- `evidence/pixel7-chrome/` & `evidence/logs/` — Direktori penyimpanan tangkapan layar dan log konsol/jaringan saat eksekusi berlangsung.

## 3. Langkah Pelaksanaan Saat Sesi Testing Bareng
1. Nyalakan emulator **Pixel 7 (Android 14 / API 34)** atau mode emulasi perangkat bergerak pada peramban Chrome/Playwright.
2. Buka `https://app.ipekabsd.my.id/`.
3. Jalankan skenario `MOB-001` hingga `MOB-020` secara berurutan sesuai `test-cases.md`.
4. Simpan tangkapan layar bukti ke `evidence/pixel7-chrome/`.
5. Catat temuan cacat tata letak/fungsional ke `bug-reports.md` dan perbarui status di `execution-report.md`.
