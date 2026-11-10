# Software Test Plan — SauceDemo Cross-Browser Smoke Testing

| Atribut Dokumen | Detail |
| :--- | :--- |
| **Test Plan Identifier** | `TP-SD-CB-V1.0` |
| **Standar Acuan** | ISO/IEC/IEEE 29119-3 & Pedoman QA MySkill |
| **Nama Proyek / SUT** | SauceDemo / Swag Labs (`https://www.saucedemo.com/`) |
| **Versi Dokumen** | 1.0 |
| **Tanggal Penyusunan** | 9 November 2026 |
| **Penyusun & Analis QA** | Benedict Timothy |
| **Metode Pengujian** | **AI-Assisted Cross-Browser Testing (Human-in-the-Loop)**: Desain skenario *Black-Box* & analisis log konsol/jaringan oleh QA Manual; eksekusi matriks 5 peramban diotomasi dengan Playwright `1.65.0` |
| **Lingkungan Uji** | Public Demo Environment (UAT/Demo Equivalent) |
| **Status Akhir** | **Completed — 60/60 Checks Passed (12 Test Cases × 5 Browser Profiles)** |

---

## 1. Pendahuluan (*Introduction*)

### 1.1 Tujuan (*Purpose*)
Dokumen **Test Plan** ini mendefinisikan strategi, ruang lingkup, kriteria pengujian, dan alokasi sumber daya untuk memverifikasi kompatibilitas lintas-peramban (*cross-browser compatibility*) dan responsivitas perangkat bergerak (*mobile viewport*) pada aplikasi web *e-commerce* **SauceDemo (Swag Labs)**. Tujuan utamanya adalah memastikan tidak ada regresi visual maupun fungsional pada mesin render utama (**Blink/Chromium**, **Gecko/Firefox**, dan **WebKit/Safari**) baik pada tampilan desktop maupun *mobile*.

### 1.2 Metodologi *Human-in-the-Loop QA*
Pengujian lintas-peramban sering kali bersifat repetitif namun rentan terhadap kesalahan pengamatan manusia jika diulang secara manual 60 kali. Oleh karena itu:
- **Peran QA Manual (Benedict Timothy)**: Menentukan 12 alur bisnis kritikal (positif, negatif, validasi batas kosong, verifikasi matematis harga + pajak, dan keamanan sesi pasca-*logout*), menginspeksi seluruh bukti tangkapan layar (60 gambar), serta melakukan triase mendalam terhadap log konsol dan trafik jaringan untuk memisahkan *noise* pihak ketiga (seperti error telemetri `backtrace.io` dan `NS_BINDING_ABORTED` di Firefox) dari cacat fungsional produk.
- **Peran Alat Bantu & Otomasi (Playwright + AI Assistant)**: Menjalankan skrip pengujian secara deterministik di 5 profil browser/perangkat dan merekam seluruh tangkapan layar serta log jaringan secara otomatis.

---

## 2. Deskripsi Proyek (*Project Description*)

- **Sistem yang Diuji (*SUT*)**: Aplikasi web demo *e-commerce* Swag Labs (`https://www.saucedemo.com/`).
- **Fokus Kualitas (ISO/IEC 25010)**: *Functional Suitability* (ketepatan perhitungan keranjang & *checkout*), *Compatibility / Co-existence* (konsistensi pada 5 *browser profile*), *Usability* (pesan validasi error), dan *Security* (proteksi sesi dan rute `/inventory.html` setelah *logout*).

---

## 3. Referensi (*References*)

1. **ISO/IEC/IEEE 29119-3:2021** — *Software testing — Part 3: Test documentation*.
2. **Requirement Traceability Matrix (RTM)**: `RTM.md` dan `RTM_SauceDemo_CrossBrowser.xlsx`.
3. **Skrip Eksekusi**: `tests/cross-browser-smoke.spec.ts` & `playwright.config.ts`.
4. **Laporan Hasil & Analisis Konsol**: `Reports/compatibility-matrix.md`, `Reports/console-summary.md`, dan `Reports/defect-notes.md`.

---

## 4. Scope Pengujian (*Test Scope*)

### 4.1 Item Uji (*Test Items*)
1. Halaman Login & Autentikasi (`/`).
2. Katalog Produk & Pengurutan (`/inventory.html`).
3. Keranjang Belanja (`/cart.html`).
4. Alur Checkout Tahap 1, Tahap 2 (Kalkulasi Pajak & Total), dan Penyelesaian Order (`/checkout-step-one.html`, `/checkout-step-two.html`, `/checkout-complete.html`).
5. Navigasi Burger Menu, Logout, dan Proteksi Rute (*Protected Route Guard*).

### 4.2 Fitur yang Akan Diuji (*Features to be Tested — In-Scope*)

| Req ID | Fitur | TC ID | Deskripsi Skenario |
| :--- | :--- | :--- | :--- |
| `REQ-SD-01` | Pemuatan Halaman Login | `TC-SD-CB-01` | Verifikasi form username, password, dan tombol login tampil |
| `REQ-SD-02` | Penolakan Akun Terkunci | `TC-SD-CB-02` | Login negatif dengan `locked_out_user` menampilkan pesan *locked out* |
| `REQ-SD-03` | Login Kredensial Valid | `TC-SD-CB-03` | Login positif dengan `standard_user` mengarahkan ke `/inventory.html` |
| `REQ-SD-04` | Katalog Inventaris | `TC-SD-CB-04` | Menampilkan 6 item produk beserta nama, harga, dan tombol *Add to cart* |
| `REQ-SD-05` | Pengurutan Harga Produk | `TC-SD-CB-05` | Pengurutan *Price (low to high)* menempatkan item termurah (`\$7.99`) di urutan pertama |
| `REQ-SD-06` | Penambahan ke Keranjang | `TC-SD-CB-06` | Menambahkan 2 produk memperbarui *badge* ikon keranjang menjadi `2` |
| `REQ-SD-07` | Verifikasi Isi Keranjang | `TC-SD-CB-07` | Halaman `/cart.html` menampilkan 2 item yang dipilih dengan kuantitas masing-masing `1` |
| `REQ-SD-08` | Validasi Field Wajib Checkout | `TC-SD-CB-08` | Submit form *checkout* kosong memunculkan pesan `Error: First Name is required` |
| `REQ-SD-09` | Akurasi Kalkulasi Checkout | `TC-SD-CB-09` | Verifikasi Subtotal `\$37.98`, Tax `\$3.04`, dan Total `\$41.02` |
| `REQ-SD-10` | Penyelesaian Order | `TC-SD-CB-10` | Klik *Finish* menampilkan konfirmasi `Thank you for your order!` |
| `REQ-SD-11` | Logout Sesi Pengguna | `TC-SD-CB-11` | Klik *Logout* dari menu navigasi mengembalikan pengguna ke halaman login |
| `REQ-SD-12` | Proteksi Rute Pasca-Logout | `TC-SD-CB-12` | Akses langsung ke `/inventory.html` setelah *logout* ditolak dan diarahkan ke login |

### 4.3 Fitur yang Tidak Akan Diuji (*Features Not to be Tested — Out-of-Scope*)
- **Akun Anomali Visual (`problem_user`, `visual_user`, `performance_glitch_user`)**: Akun-akun tersebut sengaja ditanami *bug* sintetis oleh pembuat SauceDemo; dikecualikan agar tidak mencemari *baseline* perbandingan kompatibilitas lintas-peramban.
- **Pencarian Kata Kunci Bebas (*Free-Text Search Bar*)**: Aplikasi SauceDemo klasik (`saucedemo.com`) memang tidak memiliki komponen *search bar* teks.
- **Pengujian Beban (*Load Testing*)**: Target merupakan *public demo* bersama yang di-host di GitHub Pages.

---

## 5. Strategi & Pendekatan Uji (*Test Strategy & Approach*)

### 5.1 Teknik Pengujian & *Testing Quadrants*
- **Equivalence Partitioning (EP)**: Menguji partisi akun aktif (`standard_user`), akun terkunci (`locked_out_user`), dan input *checkout* kosong vs valid.
- **Cross-Browser & Responsive Matrix Testing (Quadrant 4 & Quadrant 2)**: Mengeksekusi seluruh 12 skenario secara identik pada 5 profil browser (`Chromium`, `Firefox`, `WebKit`, `Edge`, dan `Mobile Pixel 5`).
- **Console & Network Telemetry Triage (Quadrant 1/4)**: Mencatat seluruh pesan `console.error` dan kegagalan *network request* selama pengujian, lalu mengklasifikasikannya secara manual apakah berdampak pada fungsi aplikasi atau hanya *warning* kebijakan browser / telemetri eksternal.

### 5.2 Prioritas Kasus Uji (*Test Case Prioritization*)
- **Risk-Based (P1 — Critical/High)**: Autentikasi (`TC-SD-CB-02`, `TC-SD-CB-03`), kalkulasi harga/pajak (`TC-SD-CB-09`), penyelesaian transaksi (`TC-SD-CB-10`), dan keamanan rute pasca-*logout* (`TC-SD-CB-12`).
- **Usage-Based (P2 — Medium)**: Pemuatan katalog (`TC-SD-CB-04`), pengurutan harga (`TC-SD-CB-05`), keranjang (`TC-SD-CB-06`, `TC-SD-CB-07`), validasi form (`TC-SD-CB-08`), dan *logout* (`TC-SD-CB-11`).

---

## 6. Kriteria Keputusan Uji (*Test Criteria*)

- **Entry Criteria**: Situs `https://www.saucedemo.com/` dapat diakses (HTTP 200), seluruh 5 *browser binary* (`Chromium`, `Firefox`, `WebKit`, `Edge`) telah terpasang di lingkungan uji.
- **Suspension Criteria**: Situs `saucedemo.com` mengalami *downtime* global atau kegagalan jaringan lokal yang menyebabkan *timeout* massal di seluruh browser.
- **Exit Criteria**: Seluruh 12 alur telah dieksekusi di 5 profil browser (total 60 eksekusi), 60 bukti tangkapan layar tersimpan, dan seluruh *console/network error* telah dianalisis di laporan triase.

---

## 7. Tugas & Tanggung Jawab (*Tasks & Responsibilities*)

| Peran | PIC | Tanggung Jawab |
| :--- | :--- | :--- |
| **QA Engineer (Human-in-the-Loop)** | Benedict Timothy | Merancang Test Plan, RTM, skenario uji, menginspeksi 60 screenshot, dan menganalisis temuan konsol/jaringan. |
| **Test Automation Runner** | Playwright `1.65.0` | Menjalankan eksekusi lintas 5 profil peramban secara konsisten dan mengumpulkan artefak bukti. |

---

## 8. Jadwal & Estimasi Pengujian (*Test Schedule & Estimation*)

Menggunakan metode **Bottom-Up Estimation**:
- Perancangan Test Plan, RTM, & Skenario Uji: **30 menit**
- Konfigurasi Matriks 5 Profil Browser & Penulisan Skrip: **30 menit**
- Eksekusi Suite Lintas 5 Browser (60 cek + 60 screenshot): **5 menit**
- Triase Manual Log Konsol/Jaringan & Penyusunan Laporan: **25 menit**
- **Total Durasi**: **90 menit** (Dilaksanakan pada 9 November 2026).

---

## 9. Kebutuhan Sumber Daya & Lingkungan (*Environment & Resource Needs*)

- **OS**: Windows 11
- **Test Runner**: Node.js & `@playwright/test` v1.65.0
- **Browser Engine**: Chromium, Mozilla Firefox, WebKit, Microsoft Edge, serta emulasi *viewport* Mobile Pixel 5 (`393×851`).

---

## 10. Risiko dan Mitigasi (*Risks & Mitigation*)

| ID Risiko | Risiko | Dampak | Mitigasi |
| :--- | :--- | :---: | :--- |
| `RSK-SD-01` | Kegagalan *request* telemetri pihak ketiga (`backtrace.io`) menimbulkan *false positive* error jaringan | Medium | Pisahkan pencatatan *request failure* ke file JSON konsol dan lakukan analisis triase manual oleh QA tanpa menggagalkan asersi fungsional. |
| `RSK-SD-02` | Navigasi langsung ke `/inventory.html` pada GitHub Pages menghasilkan HTTP 404 sebelum SPA *fallback* | Low | Verifikasi hasil akhir tampilan DOM (apakah form login tampil dan konten inventaris terlindungi) serta dokumentasikan perilaku SPA *hosting fallback*. |

---

## 11. Keluaran Pengujian (*Test Deliverables*)

1. `Test-Plan.md` (Dokumen ini)
2. `RTM.md` & `RTM_SauceDemo_CrossBrowser.xlsx` (Requirement Traceability Matrix standar MySkill)
3. `Reports/compatibility-matrix.md`
4. `Reports/console-summary.md`
5. `Reports/defect-notes.md`
6. `Evidence/screenshots/` (60 tangkapan layar) & `playwright-report/index.html`
