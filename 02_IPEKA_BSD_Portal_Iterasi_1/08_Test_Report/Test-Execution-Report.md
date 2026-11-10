# Test Execution Report — Portal Aplikasi Internal IPEKA BSD (Run-01 & Run-02)

| Atribut Laporan | Detail |
| :--- | :--- |
| **Proyek** | QA Portfolio — Portal Aplikasi Internal IPEKA BSD |
| **Test Plan & RTM** | `../02_Test_Plan/test-plan.md` (`TP-IPEKA-R1-V1.1`) & `../03_Test_Cases/RTM.md` |
| **QA Engineer** | Benedict Timothy |
| **Metode Pengujian** | **AI-Assisted Manual Testing (Human-in-the-Loop)** — Run-01 menggunakan akselerasi *smoke* & validasi dengan Playwright; Run-02 menggunakan investigasi manual/interaktif mendalam |
| **Tanggal Eksekusi** | 4 November 2026 (Run-01 & Run-02) |
| **Artefak Detail** | `Test-Results.xlsx`, `Run-02/Laporan.md`, dan `Run-02/Ledger-110-kasus.md` |

---

## 1. Ringkasan Eksekusi Kumulatif (110 Test Cases)

| Status | Run-01 (Baseline) | Run-02 (Final Kumulatif) | Persentase Akhir | Keterangan |
| :--- | :---: | :---: | :---: | :--- |
| **Passed** | 88 | **100** | **90,9%** | Seluruh fungsi inti, validasi *client-side*, grafik cuaca, & *auto-refresh* lulus |
| **Failed** | 2 | **3** | **2,7%** | `TC-Q-11` (dimensi PNG QR), `TC-I-07` & `TC-X-09` (*overflow* tabel PRTG di `375px`) |
| **Blocked** | 0 | **1** | **0,9%** | `TC-B-07` (belum ada sesi *booking* berstatus "Penuh" pada kalender aktif) |
| **No Run** | 20 | **6** | **5,5%** | `TC-V-05, 06, 10, 11`, `TC-B-08`, `TC-F-10` (transaksi *write* ditahan agar tidak mengotori data sekolah) |
| **Total** | **110** | **110** | **100%** | **Pass Rate dari kasus yang diputuskan (103 TC): 97,1% (100/103)** |

---

## 2. Pemeriksaan Ketersediaan Layanan (*Environment Smoke*)

| No | Service | URL | HTTP Status | Response Time |
| :-: | :--- | :--- | :---: | :---: |
| 1 | Portal Utama | `https://app.ipekabsd.my.id/` | 200 | 0,17s |
| 2 | Visit & School Tour | `https://visit.ipekabsd.my.id` | 200 | < 0,50s |
| 3 | Booking Printer Rapor | `https://book.ipekabsd.my.id` | 200 | < 0,50s |
| 4 | Lucky Draw | `https://draw.ipekabsd.my.id` | 200 | < 0,50s |
| 5 | QR Generator | `https://qr.ipekabsd.my.id` | 200 | < 0,50s |
| 6 | Cuaca Real-Time | `https://eco.ipekabsd.my.id` | 200 | < 0,50s |
| 7 | Peminjaman Barang IT | `https://form.ipekabsd.my.id` | 200 | 0,18s |
| 8 | UniFi Controller | `https://unifi.ipekabsd.my.id` | 200 | < 0,60s |
| 9 | Internet Traffic | `https://inet.ipekabsd.my.id` | 200 | < 0,50s |
| 10 | HelpDesk | `https://desk.ipekabsd.my.id` | 200 | 0,71s |

---

## 3. Ringkasan Temuan Utama pada Run-02

1. **Verifikasi Dimensi Unduhan QR Generator (`TC-Q-11` — Failed / `DEF-004`)**:
   - Pilihan ukuran `512×512`, `1024×1024`, dan `2048×2048` menghasilkan berkas PNG dengan dimensi aktual **`495×495`**, **`1023×1023`**, dan **`2046×2046` piksel** (pembulatan ke kelipatan 33 piksel untuk 25 modul QR + margin).
   - Unduhan format PNG (`TC-Q-12`), SVG (`TC-Q-13`), dan penyalinan gambar ke *clipboard* (`TC-Q-14`) berfungsi dengan baik (**Passed**).
2. **Verifikasi Pembaruan Otomatis Cuaca & PRTG (`TC-E-05..12` & `TC-I-04` — Passed)**:
   - Metrik cuaca harian/bulanan/tahunan serta 4 grafik SVG 24 jam tampil utuh dan memperbarui jejak seri data secara otomatis tanpa *refresh* manual.
   - Interval pembaruan otomatis PRTG (15 detik, 60 detik, 5 menit) terbukti bekerja sesuai *timestamp* halaman.
3. **Reproduksi Overflow Tabel Internet Traffic (`TC-I-07` & `TC-X-09` — Failed / `DEF-005`)**:
   - Pada lebar viewport mobile `375px`, tabel PRTG tetap memiliki lebar `608px` (selisih `233px`), memotong kolom nilai sensor di luar layar awal.

---

## 4. Daftar Defect (`05_Defect_Log/defect-log.md`)

| ID | TC Terkait | Modul | Deskripsi | Severity | Status |
| :--- | :--- | :--- | :--- | :---: | :---: |
| `DEF-001` | `TC-X-06` | HelpDesk | Load time 0,71s (lebih lambat dari portal 0,17s, namun masih < 3s) | Low | Open (Monitor) |
| `DEF-002` | `TC-B-03`, `TC-F-03` | Form/Book/Draw/Desk | Link navigasi Admin tampil pada UI pengguna publik non-admin | Medium | Open |
| `DEF-003` | `TC-X-10` | HelpDesk | 1 resource statis mengembalikan HTTP 404 di log konsol | Low | Open |
| `DEF-004` | `TC-Q-11` | QR Generator | Dimensi file PNG unduhan (`495²`, `1023²`, `2046²`) berbeda dari opsi (`512²`, `1024²`, `2048²`) | Low | Open |
| `DEF-005` | `TC-I-07`, `TC-X-09` | Internet Traffic | Tabel sensor PRTG mengalami *horizontal overflow* (`608px` pada layar `375px`) | Medium | Open |

---

## 5. Rekomendasi QA

1. **Perbaikan Responsivitas PRTG (`DEF-005`)**: Bungkus tabel sensor pada `inet.ipekabsd.my.id` dengan kontainer `overflow-x: auto` atau sesuaikan tata letak kolom pada layar $< 640\text{px}$.
2. **Penyesuaian Ukuran Kanvas QR (`DEF-004`)**: Lakukan *scaling* atau tambahkan *padding* kanvas agar ukuran piksel PNG yang diunduh tepat `512×512`, `1024×1024`, dan `2048×2048`.
3. **Eksekusi 6 Kasus Submit Transaksi**: Jalankan `TC-V-05, 06, 10, 11`, `TC-B-08`, dan `TC-F-10` pada lingkungan *staging* atau dengan akun uji sekolah yang diizinkan membuat data *booking* sementara.
