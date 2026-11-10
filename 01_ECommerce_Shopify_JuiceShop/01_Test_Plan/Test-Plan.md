# Software Test Plan — E-Commerce & Account Security Web Testing (SauceDemo Shopify & OWASP Juice Shop)

| Atribut Dokumen | Detail |
| :--- | :--- |
| **Test Plan Identifier** | `TP-WEBDEMO-V1.1` |
| **Standar Acuan** | ISO/IEC/IEEE 29119-3 (pengganti IEEE 829) & Pedoman QA MySkill |
| **Nama Proyek / SUT** | 1. SauceDemo Storefront (`https://sauce-demo.myshopify.com/`)<br>2. OWASP Juice Shop v20.3.0 (`http://localhost:3000` — *Fallback dari instance publik yang mengalami HTTP 503*) |
| **Versi Dokumen** | 1.1 (Updated Post-Environment Triage & Execution) |
| **Tanggal Penyusunan** | 3 November 2026 (Diperbarui: 10 November 2026) |
| **Penyusun & Eksekutor** | Benedict Timothy |
| **Metode Pengujian** | **AI-Assisted Manual Testing (Human-in-the-Loop)**: Desain 54 *Test Case* (*EP, BVA, Negative, Security*), adaptasi eksploratori saat *environment* bermasalah, inspeksi DOM/API, dan pelaporan 9 *bug* dilakukan oleh QA Manual; dibantu perkakas inspeksi browser & AI |
| **Status Akhir** | **Completed — 54 Test Cases: 42 Passed (77,8%), 2 Failed (3,7%), 8 Blocked (14,8%), 2 No Run (3,7%)** — *Pass Rate Kasus Dapat Dieksekusi (44 TC): 95,5%* |

---

## 1. Pendahuluan (*Introduction*)

### 1.1 Tujuan (*Purpose*)
Dokumen **Software Test Plan** ini menjadi pedoman taktis dan operasional untuk memverifikasi fungsionalitas *end-to-end e-commerce*, ketepatan kalkulasi keranjang dan pembayaran, validasi batas input (*Boundary Value Analysis*), serta keamanan manajemen akun dan sesi (*Role-Based Access Control / RBAC*) pada aplikasi web **SauceDemo (Shopify Storefront)** dan **OWASP Juice Shop**.

### 1.2 Kejujuran Rekayasa & Adaptasi Lingkungan (*Human-in-the-Loop QA*)
Salah satu nilai utama dalam proyek pengujian ini adalah **kejujuran pelaporan (*honest reporting*)** ketika menghadapi perbedaan antara spesifikasi dokumen awal dan kondisi lingkungan nyata:
1. **Mitigasi Blocker Lingkungan (`BUG-ENV-001` & `BUG-ENV-002`)**: Saat pengujian dimulai, URL `https://juice-shop.herokuapp.com/` dan `https://demo.owasp-juice.shop/` mengembalikan **HTTP 503 Application Error**. Daripada menghentikan seluruh pengujian modul Akun & Sesi, QA melakukan *environment fallback* dengan menjalankan **OWASP Juice Shop v20.3.0 secara lokal (`http://localhost:3000`)** dari *source resmi* dan mencatat kedua kegagalan server publik tersebut sebagai *Environment Blocker*.
2. **Adaptasi Target Storefront (`sauce-demo.myshopify.com`)**: URL target di dokumen awal menunjuk ke toko demo berbasis Shopify (bukan `saucedemo.com` klasik). Karena toko tersebut tidak memiliki kontrol *Sort/Filter* (`BUG-SD-001`) maupun kolom *Promo Code/Kupon*, skenario terkait ditandai secara jujur sebagai **`Blocked`** (bukan dipalsukan menjadi *Pass*).

---

## 2. Deskripsi Proyek (*Project Description*)

- **Konteks Proyek**: Portofolio QA Manual & Eksploratori untuk Aplikasi Web E-Commerce.
- **Target Aplikasi**:
  - **SUT 1 — SauceDemo Shopify (`https://sauce-demo.myshopify.com/`)**: Digunakan untuk menguji Modul 1 (Katalog & Pencarian), Modul 2 (Keranjang Belanja), Modul 3 (Checkout & Pembayaran via *Shopify Bogus Test Gateway*), dan sebagian Modul 5 (Persistensi Keranjang).
  - **SUT 2 — OWASP Juice Shop v20.3.0 (`http://localhost:3000`)**: Digunakan untuk menguji Modul 4 (Manajemen Akun: Registrasi, Login, Profil, Pemulihan) dan Modul 5 (Manajemen Sesi JWT, Logout Cache Invalidation, & RBAC `/#/administration`).

---

## 3. Referensi (*References*)

1. **ISO/IEC/IEEE 29119-3:2021** — *Software testing — Part 3: Test documentation*.
2. **Dokumen Test Plan Word**: `SOFTWARE TEST PLAN DOCUMENT.docx`.
3. **Requirement Traceability Matrix (RTM)**: `../02_Test_Cases/rtm.md`, sheet `RTM` di `../02_Test_Cases/Test-Cases.xlsx`, dan `../03_Test_Report/Test-Results.xlsx`.
4. **Spesifikasi Data Uji**: `../02_Test_Cases/test-data.md`.
5. **Laporan Eksekusi & Bug**: `../03_Test_Report/Test-Execution-Report.md` & `../03_Test_Report/Bug-Reports.md`.

---

## 4. Scope Pengujian (*Test Scope*)

### 4.1 Item Uji & Fitur yang Akan Diuji (*In-Scope — 54 Test Cases*)

| Req ID | Modul | Cakupan Fitur yang Diuji | TC Terkait | Jumlah TC |
| :--- | :--- | :--- | :--- | :---: |
| `REQ-CAT-01` | 01 Katalog & Pencarian | Pengurutan produk (*Price Low-High, High-Low, Name A-Z, Z-A*) & urutan default | `TS-CAT-001` s.d. `TS-CAT-005` | 5 |
| `REQ-CAT-02` | 01 Katalog & Pencarian | Pencarian kata kunci parsial, kata kunci tidak ada, *empty search*, dan *case-insensitivity* | `TS-CAT-006`, `007`, `008`, `010`, `011` | 5 |
| `REQ-CAT-03` | 01 Katalog & Pencarian | Ketahanan input pencarian terhadap karakter khusus, XSS (`<script>`), SQLi, & *wildcard* (`%`, `_`) | `TS-CAT-009` | 1 |
| `REQ-CRT-01` | 02 Keranjang Belanja | Tambah produk dari detail, penggabungan kuantitas (*merge qty*), multi-produk, & hapus item | `TS-CRT-001` s.d. `TS-CRT-005` | 5 |
| `REQ-CRT-02` | 02 Keranjang Belanja | Boundary Value Analysis (BVA) kuantitas keranjang: `0`, negatif (`-1`), dan batas atas (`999`, `99999`) | `TS-CRT-006`, `007`, `008` | 3 |
| `REQ-CRT-03` | 02 Keranjang Belanja | Akurasi kalkulasi subtotal baris, total keranjang, *empty state*, & persistensi setelah *refresh* | `TS-CRT-009` s.d. `TS-CRT-012` | 4 |
| `REQ-CHK-01` | 03 Checkout | Validasi *required fields* per kolom (*EP*) serta BVA panjang dan format kode pos | `TS-CHK-001` s.d. `TS-CHK-007` | 7 |
| `REQ-CHK-02` | 03 Checkout | Alur transaksi sukses sampai halaman konfirmasi order, verifikasi aritmetika total, & tombol *Back* pasca-order | `TS-CHK-008`, `009`, `010` | 3 |
| `REQ-CHK-03` | 03 Checkout | Validasi kupon kadaluarsa dan kupon tidak terdaftar / *injection* | `TS-CHK-011`, `012` | 2 |
| `REQ-ACC-01` | 04 Manajemen Akun | Registrasi akun valid, penolakan duplikat email, validasi format email, *password mismatch*, BVA panjang password, & field wajib | `TS-ACC-001` s.d. `TS-ACC-006` | 6 |
| `REQ-ACC-02` | 04 Manajemen Akun | Login valid, login password salah, email tidak terdaftar (*anti-enumeration*), *reset password*, ubah profil, & *logout* | `TS-ACC-007` s.d. `TS-ACC-012` | 6 |
| `REQ-SES-01` | 05 Session & RBAC | Ketahanan sesi setelah F5 *refresh*, lintas tab, proteksi tombol *Back* pasca-*logout*, *idle timeout*, & state keranjang pasca-*logout* | `TS-SES-001`, `002`, `003`, `006`, `007` | 5 |
| `REQ-SES-02` | 05 Session & RBAC | Proteksi rute tanpa login (*auth guard*) & penolakan akses halaman `/#/administration` bagi pengguna biasa (HTTP 403) | `TS-SES-004`, `005` | 2 |

### 4.2 Fitur yang Tidak Akan Diuji (*Out-of-Scope*)
1. **Performance & Load Testing Massal**: Dilarang mengirim trafik beban tinggi ke storefront demo Shopify publik.
2. **Transaksi Kartu Kredit Finansial Nyata**: Seluruh pengujian pembayaran wajib menggunakan *Shopify Bogus Test Gateway* (nomor kartu `1`).
3. **Full Penetration Testing OWASP Top 10**: Pengujian keamanan dibatasi pada skenario *input validation*, *wildcard handling*, *session invalidation*, dan *RBAC* yang tercakup di dalam 54 *Test Case*.

---

## 5. Strategi & Pendekatan Uji (*Test Strategy & Approach*)

### 5.1 Teknik Desain Kasus Uji (*Black-Box Design Techniques*)
1. **Equivalence Partitioning (EP)**: Membagi input ke dalam kelas ekuivalen valid dan tidak valid (contoh: 6 variasi format email cacat pada `TS-ACC-003`; pengosongan spesifik per kolom alamat pada `TS-CHK-001` s.d. `TS-CHK-004`).
2. **Boundary Value Analysis (BVA)**: Menguji batas bawah, nol, negatif, dan ekstrem atas (contoh: kuantitas keranjang `0`, `-1`, `999`, `99999` pada `TS-CRT-006`..`008`; panjang password `0, 1, 4, 5, 8, 33` karakter pada `TS-ACC-005`).
3. **Negative & Security-Oriented Testing**: Menguji respons pencarian terhadap `<script>alert(1)</script>`, `' OR '1'='1`, `%`, dan `_` (`TS-CAT-009`), serta akses langsung URL admin oleh *non-admin user* (`TS-SES-005`).
4. **Exploratory Testing**: Mengamati inkonsistensi format desimal mata uang antara halaman Cart (`£55.00`) dan Checkout (`£55,00` — `BUG-SD-006`) serta perbedaan jumlah hasil pencarian akibat kapitalisasi huruf (`jacket` vs `JaCkEt` — `BUG-SD-002`).

### 5.2 Pemetaan *Testing Quadrants* & Prioritas Kasus Uji
- **Quadrant 2 (*Business-Facing Functional*)**: Alur pencarian, keranjang, *checkout*, dan registrasi akun.
- **Quadrant 3 (*Exploratory & Usability Critique*)**: Konsistensi lokalisasi mata uang, umpan balik kuantitas negatif, dan ketergantungan pemulihan akun pada *Security Question* yang tidak diwajibkan saat registrasi (`BUG-JS-001`).
- **Quadrant 1 & 4 (*Security & Session Integrity*)**: Verifikasi penghapusan token `localStorage` saat *logout* dan penegakan HTTP 403 pada rute admin.
- **Distribusi Prioritas (54 TC)**: **7 Critical**, **22 High**, **18 Medium**, **7 Low** (29 kasus *Critical/High* diprioritaskan sebagai *core regression suite*).

---

## 6. Kriteria Keputusan Uji (*Test Criteria*)

- **Entry Criteria**: Storefront e-commerce dapat diakses (HTTP 200); untuk OWASP Juice Shop, jika *instance* publik mengalami gangguan (HTTP 503), *instance* lokal v20.3.0 (`http://localhost:3000`) wajib aktif sebelum pengujian modul Akun dimulai.
- **Suspension Criteria**: Kerusakan total pada *database* lokal Juice Shop atau perubahan *checkout gateway* Shopify yang menolak kartu uji sandbox.
- **Exit Criteria**:
  1. Seluruh 54 Test Case telah memiliki status terverifikasi (`Passed`, `Failed`, `Blocked` dengan bukti teknis, atau `No Run` dengan alasan jelas).
  2. Seluruh temuan bug telah didokumentasikan lengkap dengan *Steps to Reproduce*, *Severity/Priority*, dan *Screenshot Evidence* di `Bug-Reports.md`.
  3. *Requirement Traceability Matrix (RTM)* 15 kolom telah diperbarui secara *bidirectional*.

---

## 7. Tugas & Tanggung Jawab (*Tasks & Responsibilities*)

| Peran | PIC | Tanggung Jawab |
| :--- | :--- | :--- |
| **QA Engineer (Test Designer & Executor)** | Benedict Timothy | Menyusun Test Plan, 54 Test Cases, Test Data, RTM, menyiapkan fallback lokal Juice Shop v20.3.0, mengeksekusi pengujian, dan menulis 9 laporan bug. |
| **AI & Browser Inspection Assistant** | Chrome DevTools + AI Helper | Membantu inspeksi DOM/API (`POST /api/Users/`, `POST /cart`), pengumpulan 45 *screenshot* bukti di `03_Test_Report/evidence/`, dan validasi kelengkapan dokumen. |

---

## 8. Jadwal & Estimasi Pengujian (*Test Schedule & Estimation*)

Menggunakan metode **Bottom-Up Estimation** (menindaklanjuti catatan audit bahwa dokumen awal belum mencantumkan rincian jadwal):

| Tahap Aktivitas | Metode | Estimasi Durasi | Aktual | Tanggal |
| :--- | :--- | :---: | :---: | :---: |
| 1. Analisis Dokumen Awal, Ekspansi 9 Skenario menjadi 54 TC, & Penyusunan Test Data | Manual + AI-Assisted | 60 menit | 60 menit | 2026-11-03 |
| 2. Triase Environment (Investigasi 503 Heroku/Demo & Setup Juice Shop v20.3.0 Lokal) | Manual QA | 25 menit | 25 menit | 2026-11-03 |
| 3. Eksekusi Modul 01 Katalog, 02 Cart, & 03 Checkout di Shopify Storefront | Manual (Human-in-the-Loop) | 60 menit | 60 menit | 2026-11-03 |
| 4. Eksekusi Modul 04 Akun & 05 Session/RBAC di OWASP Juice Shop Lokal | Manual (Human-in-the-Loop) | 45 menit | 45 menit | 2026-11-03 |
| 5. Penulisan 9 Bug Report, 45 Evidence Screenshot, Laporan Eksekusi, & RTM 15 Kolom | Manual + AI-Assisted | 50 menit | 50 menit | 2026-11-03 |
| **Total Durasi Proyek** | — | **240 menit (4 jam)** | **240 menit** | **Selesai** |

---

## 9. Kebutuhan Sumber Daya & Lingkungan (*Environment & Resource Needs*)

- **OS & Resolusi**: Windows 11 (64-bit), `1920×1080`.
- **Browser**: Google Chrome (Primary Execution), Mozilla Firefox (direkomendasikan untuk *re-test* 29 TC *Critical/High*).
- **Local Runtime (Fallback SUT 2)**: Node.js + OWASP Juice Shop `v20.3.0` pada `http://localhost:3000`.
- **Tools**: Chrome DevTools (Elements, Console, Network, Application/LocalStorage), Microsoft Excel (`Test-Cases.xlsx`, `Test-Results.xlsx`).

---

## 10. Risiko dan Mitigasi (*Risks & Mitigation*)

| ID Risiko | Risiko | Dampak | MitigasiAktual yang Diterapkan |
| :--- | :--- | :---: | :--- |
| `RSK-WD-01` | URL publik OWASP Juice Shop (`herokuapp.com` & `demo.owasp-juice.shop`) mati (HTTP 503) | Critical | Catat sebagai `BUG-ENV-001` & `BUG-ENV-002`, lalu jalankan instance lokal `v20.3.0` di `http://localhost:3000` agar 19 TC Akun & Sesi tetap teruji. |
| `RSK-WD-02` | Storefront `sauce-demo.myshopify.com` berbeda dari `saucedemo.com` klasik dan tidak punya fitur Sort/Kupon | High | Adaptasikan data produk ke katalog aktual (Grey jacket `£55.00`, Noir jacket `£60.00`) dan tandai 5 TC Sort serta 2 TC Kupon sebagai `Blocked` secara jujur. |
| `RSK-WD-03` | Pengujian *idle session timeout* (`TS-SES-006`) membutuhkan waktu tunggu pasif 15–60 menit | Low | Tandai sebagai `No Run` pada siklus pertama agar waktu pengujian difokuskan pada 44 skenario fungsional/keamanan aktif. |

---

## 11. Keluaran Pengujian (*Test Deliverables*)

1. **Software Test Plan**: `01_Test_Plan/Test-Plan.md` & `01_Test_Plan/SOFTWARE TEST PLAN DOCUMENT.docx`.
2. **Test Cases & Test Data**: `02_Test_Cases/Test-Cases.xlsx` & `02_Test_Cases/test-data.md`.
3. **Requirement Traceability Matrix (RTM)**: `02_Test_Cases/rtm.md` & sheet `RTM` di kedua file `.xlsx`.
4. **Test Execution Report & Results Workbook**: `03_Test_Report/Test-Execution-Report.md` & `03_Test_Report/Test-Results.xlsx`.
5. **Defect Reports & Evidence**: `03_Test_Report/Bug-Reports.md` (9 laporan bug) & 45 file tangkapan layar di `03_Test_Report/evidence/`.
