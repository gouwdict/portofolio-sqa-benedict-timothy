# Software Test Plan — Portal Aplikasi Internal IPEKA BSD (Run-01 & Run-02)

| Atribut Dokumen | Detail |
| :--- | :--- |
| **Test Plan Identifier** | `TP-IPEKA-R1-V1.1` |
| **Standar Acuan** | ISO/IEC/IEEE 29119-3 & Pedoman QA MySkill |
| **Nama Proyek / SUT** | Portal Internal IPEKA BSD (`https://app.ipekabsd.my.id/`) & 9 Subdomain Layanan |
| **Versi Dokumen** | 1.1 |
| **Tanggal Penyusunan** | 4 November 2026 (Diperbarui: 10 November 2026) |
| **Penyusun & Eksekutor** | Benedict Timothy |
| **Metode Pengujian** | **AI-Assisted Manual Testing (Human-in-the-Loop)**: Desain 110 TC, inspeksi dimensi intrinsik file & DOM, serta observasi timer/grafik oleh QA Manual; akselerasi *smoke check* awal dibantu Playwright |
| **Lingkungan Uji** | Live Internal Portal (Non-Admin User Scope) |
| **Status Akhir** | **Completed — 100 Passed, 3 Failed, 1 Blocked, 6 No Run (Withheld Live Submissions)** |

---

## 1. Pendahuluan (*Introduction*)

### 1.1 Tujuan (*Purpose*)
Dokumen **Test Plan** ini dirancang untuk memverifikasi kelayakan fungsional, validasi formulir, akurasi keluaran (seperti dimensi unduhan QR Code dan pembaruan metrik cuaca/trafik), keamanan dasar tingkat pengguna non-admin, serta responsivitas tampilan pada **Portal Internal IPEKA BSD** dan 9 layanan pendukungnya.

### 1.2 Metodologi *Human-in-the-Loop QA*
Pengujian dilakukan dalam dua siklus terstruktur:
1. **Run-01 (AI-Assisted Smoke & Baseline Functional)**: Memeriksa ketersediaan HTTP 200 di seluruh 10 domain, validasi *required field* HTML5 tanpa men-submit data sampah ke server, pengecekan *header* keamanan HTTPS/cookie, dan pengambilan 23 *screenshot* *Desktop/Mobile*.
2. **Run-02 (Deep Manual & Exploratory Investigation)**: Mengeksekusi kasus interaktif secara mendalam—termasuk mengunduh file PNG/SVG dari QR Generator untuk mengukur dimensi piksel aktual (`495×495`, `1023×1023`, `2046×2046` vs spesifikasi `512/1024/2048`), memantau pembaruan otomatis stasiun cuaca dan sensor PRTG tanpa *refresh* manual, serta mengukur *scrollWidth* DOM pada *viewport* `375px`.

---

## 2. Deskripsi Proyek (*Project Description*)

- **Organisasi / Konteks**: Portal Layanan Operasional Divisi IT IPEKA BSD.
- **Daftar Subdomain Layanan (10 Item Uji)**:
  1. Portal Utama (`https://app.ipekabsd.my.id/`)
  2. Visit & School Tour (`https://visit.ipekabsd.my.id`)
  3. Booking Printer Rapor (`https://book.ipekabsd.my.id`)
  4. Lucky Draw (`https://draw.ipekabsd.my.id`)
  5. QR Generator (`https://qr.ipekabsd.my.id`)
  6. Cuaca Real-Time (`https://eco.ipekabsd.my.id`)
  7. Peminjaman Barang IT (`https://form.ipekabsd.my.id`)
  8. UniFi Controller (`https://unifi.ipekabsd.my.id`)
  9. Internet Traffic PRTG (`https://inet.ipekabsd.my.id`)
  10. HelpDesk / IT Events (`https://desk.ipekabsd.my.id`)

---

## 3. Referensi (*References*)

1. **ISO/IEC/IEEE 29119-3:2021** — *Software testing — Part 3: Test documentation*.
2. **Requirement Analysis**: `../01_Requirement_Analysis/requirement-analysis.md`.
3. **Requirement Traceability Matrix (RTM)**: `../03_Test_Cases/RTM.md` & `../08_Test_Report/Test-Results.xlsx`.
4. **Laporan Eksekusi & Investigasi Run-02**: `../08_Test_Report/Test-Execution-Report.md`, `../08_Test_Report/Run-02/Laporan.md`, dan `../08_Test_Report/Run-02/Ledger-110-kasus.md`.

---

## 4. Scope Pengujian (*Test Scope*)

### 4.1 Fitur yang Akan Diuji (*In-Scope — 110 Test Cases*)

| Req ID | Modul | Cakupan Pengujian | Jumlah TC |
| :--- | :--- | :--- | :---: |
| `REQ-IPEKA-01` | Portal (`TC-P`) | Load halaman, logo, link `tel:1010`, 9 link layanan, HTTPS, responsivitas, cookie, cache, footer | 10 |
| `REQ-IPEKA-02` | Visit (`TC-V`) | Switch bahasa EN/ID, navigasi, validasi wajib School Tour & Visitor, ketergantungan jam tur, validasi plat nomor | 12 |
| `REQ-IPEKA-03` | Booking Printer (`TC-B`) | Form booking, dropdown jenjang, kalender, ketersediaan sesi, tab jadwal (Akan Datang/Sudah Lewat/Semua), badge status | 11 |
| `REQ-IPEKA-04` | Lucky Draw (`TC-D`) | Load halaman, link portal/admin, area hasil undian, responsivitas | 5 |
| `REQ-IPEKA-05` | QR Generator (`TC-Q`) | 5 tipe konten (Link, Teks, Email, Telepon, WiFi), auto-https, warna, *error correction*, margin, ukuran & unduhan PNG/SVG, salin gambar, riwayat | 19 |
| `REQ-IPEKA-06` | Cuaca / Eco (`TC-E`) | Toggle Metrik/Imperial, suhu, *feels like*, high/low 24h, kelembapan/angin/hujan, tekanan/solar/UV/indoor, 4 grafik SVG 24h, *auto-refresh* | 14 |
| `REQ-IPEKA-07` | Form Peminjaman (`TC-F`) | Form peminjaman IT, validasi wajib, dropdown peran/jenjang, tambah baris barang, stok, tabel daftar peminjam | 13 |
| `REQ-IPEKA-08` | UniFi Controller (`TC-U`) | Smoke load halaman login UniFi OS, stabilitas konsol, responsivitas *mobile* | 3 |
| `REQ-IPEKA-09` | Internet Traffic (`TC-I`) | Dashboard PRTG, 3 sensor ISP (iForte, Taycon, BaliFiber), refresh manual & otomatis (15s/60s/5m), grafik/tabel/events, filter tag, responsivitas | 7 |
| `REQ-IPEKA-10` | HelpDesk / Desk (`TC-H`) | Timeline H-1 s/d H+7, *empty state*, link admin & portal, responsivitas | 6 |
| `REQ-IPEKA-11` | Cross-Cutting (`TC-X`) | Proteksi halaman `/admin/`, sanitasi input XSS & SQLi dasar, HTTPS lintas layanan, performa load, aksesibilitas keyboard/alt-text, responsivitas global | 10 |

### 4.2 Fitur yang Tidak Akan Diuji (*Out-of-Scope*)
1. **Operasi CRUD Admin Terautentikasi**: Penguji tidak dibekali kredensial admin sekolah maupun PIN rahasia; pengujian admin dibatasi pada verifikasi gerbang login (*auth guard*).
2. **Pengiriman Transaksi Palsu ke Database Produksi (`6 TC No Run`)**: Skenario `TC-V-05`, `TC-V-06`, `TC-V-10`, `TC-V-11`, `TC-B-08`, dan `TC-F-10` sengaja ditahan (*withheld*) agar tidak membuat tiket kunjungan atau *booking* palsu pada sistem aktif sekolah.
3. **Load / Stress Testing**: Dilarang pada infrastruktur aktif sekolah.

---

## 5. Strategi & Pendekatan Uji (*Test Strategy & Approach*)

- **Testing Quadrants**:
  - **Quadrant 1 & 4 (*Technology-Facing*)**: Pemeriksaan HTTPS/HSTS, proteksi XSS/SQLi pada input publik, *response time* awal, dan pengukuran lebar DOM (`clientWidth` vs `scrollWidth`).
  - **Quadrant 2 (*Business-Facing*)**: Verifikasi 110 skenario fungsional menggunakan *Equivalence Partitioning (EP)* dan *Boundary Value Analysis (BVA)*.
  - **Quadrant 3 (*Exploratory & Deep Inspection*)**: Verifikasi intrinsik file hasil unduhan PNG/SVG pada QR Generator dan pengamatan *real-time* pergeseran grafik SVG cuaca.
- **Prioritas Kasus Uji**:
  - **Berdasarkan Risiko (*Risk-Based*)**: Keamanan lintas-layanan (`TC-X-01`..`TC-X-04`) dan validasi form wajib.
  - **Berdasarkan Penggunaan (*Usage-Based*)**: Navigasi portal (`TC-P-01`..`TC-P-04`), QR Generator, Cuaca, dan jadwal Booking.
  - **Berdasarkan Keluaran (*Output-Based*)**: Akurasi file unduhan PNG/SVG (`TC-Q-11`..`TC-Q-14`) dan grafik PRTG/Cuaca.

---

## 6. Kriteria Keputusan Uji (*Test Criteria*)

- **Entry Criteria**: Seluruh 10 domain merespons HTTP 200; data uji *dummy* (`06_Test_Data/test-data.md`) siap.
- **Suspension Criteria**: Terjadi gangguan jaringan sekolah atau salah satu subdomain mengalami HTTP 5xx berkepanjangan.
- **Exit Criteria**: Seluruh kasus yang aman dieksekusi di produksi tanpa mengotori data (104 dari 110 TC) telah diperiksa, bukti *screenshot* dan ukuran file tercatat, serta seluruh *defect* didokumentasikan di `05_Defect_Log/defect-log.md`.

---

## 7. Tugas & Tanggung Jawab (*Tasks & Responsibilities*)

| Peran | PIC | Tanggung Jawab |
| :--- | :--- | :--- |
| **QA Engineer (Human-in-the-Loop)** | Benedict Timothy | Menyusun Requirement Analysis, Test Plan, 110 Test Cases, RTM, mengeksekusi investigasi Run-02, dan menyusun laporan. |
| **Automation Helper** | Playwright Script | Membantu pengambilan 23 *screenshot* awal dan pengukuran dimensi DOM pada Run-01/Run-02. |

---

## 8. Jadwal & Estimasi Pengujian (*Test Schedule & Estimation*)

Menggunakan **Bottom-Up Estimation**:
- Analisis Kebutuhan & Penyusunan 110 Test Cases + RTM: **60 menit**
- Eksekusi Run-01 (Baseline Smoke, Validasi Form, & 23 Screenshot): **30 menit** (4 Nov 2026 pagi)
- Eksekusi Run-02 (Investigasi Mendalam 20 Kasus Terbuka & Reproduksi Bug): **60 menit** (4 Nov 2026 siang)
- Penyusunan Laporan Akhir & Dokumentasi Portofolio: **30 menit**
- **Total Usaha**: **180 menit (3 jam)**.

---

## 9. Kebutuhan Sumber Daya & Lingkungan (*Environment & Resource Needs*)

- **Browser**: Chromium / Google Chrome, Mozilla Firefox, Microsoft Edge.
- **Viewport Uji**: Desktop (`1366×768`) dan Mobile (`375×812` / `390×844`).
- **Data Uji**: Mengacu penuh pada `06_Test_Data/test-data.md`.

---

## 10. Risiko dan Mitigasi (*Risks & Mitigation*)

| ID Risiko | Risiko | Dampak | Mitigasi |
| :--- | :--- | :---: | :--- |
| `RSK-IPK-01` | Pengiriman *form* uji mengotori jadwal *booking* printer/peminjaman guru di sekolah | High | Tahan eksekusi *submit* akhir pada 6 TC transaksi (`No Run — Withheld in Prod`); uji validasi *client-side* tanpa mengirim *payload* ke database. |
| `RSK-IPK-02` | Sesi penuh pada kalender Booking Printer (`TC-B-07`) tidak tersedia saat hari pengujian | Low | Tandai `TC-B-07` sebagai `Blocked` dengan bukti status kalender aktual (seluruh sesi masa depan masih kosong). |
| `RSK-IPK-03` | Nilai sensor cuaca dan bandwidth PRTG berubah setiap menit | Low | Gunakan kriteria rentang wajar dan amati perubahan *timestamp* stasiun/grafik untuk membuktikan fitur *auto-refresh*. |

---

## 11. Keluaran Pengujian (*Test Deliverables*)

1. `01_Requirement_Analysis/requirement-analysis.md`
2. `02_Test_Plan/test-plan.md` (Dokumen ini)
3. `03_Test_Cases/RTM.md` & 11 file Test Case (`TC-*.md`)
4. `05_Defect_Log/defect-log.md`
5. `08_Test_Report/Test-Execution-Report.md`, `08_Test_Report/Test-Results.xlsx`, `08_Test_Report/Run-02/Laporan.md`, & `08_Test_Report/Run-02/Ledger-110-kasus.md`
