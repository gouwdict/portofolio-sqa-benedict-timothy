# Requirement Traceability Matrix (RTM) — SauceDemo Shopify & OWASP Juice Shop

- **Proyek**: QA Portfolio — Manual Web Application Testing (`TP-WEBDEMO-V1.1`)
- **Penyusun & Eksekutor**: Benedict Timothy (Manual QA — AI-Assisted)
- **Tanggal**: 3 November 2026 (Diperbarui: 10 November 2026)
- **Standar Format**: Standar RTM MySkill (15 Kolom) & Best Practice SQA ISO/IEC/IEEE 29119-3

> [!IMPORTANT]
> **Pemisahan Lingkungan & Status (`No Run` vs `Blocked` vs `N/A`)**:
> - **Test Env (`localhost:3000`)**: Instance lokal **OWASP Juice Shop v20.3.0** yang digunakan sebagai *fallback* setelah server publik mengalami HTTP 503 (`BUG-ENV-001` & `BUG-ENV-002`).
> - **UAT Env (`sauce-demo.myshopify.com`)**: Storefront demo e-commerce publik tempat Modul 01–03 dan persistensi sesi keranjang diuji.
> - **Prod Env (`N/A`)**: Ditandai **`N/A`** (*Not Applicable*) karena kedua aplikasi merupakan platform demo/pelatihan tanpa lingkungan produksi komersial.
> - **Blocked (8 TC)** vs **No Run (2 TC)**: `Blocked` digunakan untuk fitur yang tidak tersedia di target (Sort 5 TC, Kupon 2 TC, Ubah Username UI 1 TC), sedangkan `No Run` digunakan untuk 2 TC sesi (`TS-SES-006` *idle timeout* & `TS-SES-007` kondisi *cart* pasca-*logout*) yang belum dieksekusi pada siklus ini.

---

## 1. Tabel Standar Requirement Traceability Matrix (54 Test Cases — 15 Kolom)

| Sno | Req ID | Req Desc | TC ID | TC Desc | Test Design | Test Designer | UAT Test Req? | Test Env | UAT Env | Prod Env | Defects? | Defect ID | Defect Status | Req Coverage Status |
| :-: | :--- | :--- | :--- | :--- | :---: | :---: | :-: | :---: | :---: | :---: | :-: | :---: | :---: | :---: |
| 1 | **REQ-CAT-01** | Filter & Pengurutan Katalog Produk (Harga & Nama) | `TS-CAT-001` | Urutkan produk berdasarkan Price: Low to High | Completed | BT | No | N/A | Blocked | N/A | Yes | BUG-SD-001 | Open | **Partial (Blocked)** |
| 2 | **REQ-CAT-01** | Filter & Pengurutan Katalog Produk (Harga & Nama) | `TS-CAT-002` | Urutkan produk berdasarkan Price: High to Low | Completed | BT | No | N/A | Blocked | N/A | Yes | BUG-SD-001 | Open | **Partial (Blocked)** |
| 3 | **REQ-CAT-01** | Filter & Pengurutan Katalog Produk (Harga & Nama) | `TS-CAT-003` | Urutkan produk berdasarkan Name: A to Z | Completed | BT | No | N/A | Blocked | N/A | Yes | BUG-SD-001 | Open | **Partial (Blocked)** |
| 4 | **REQ-CAT-01** | Filter & Pengurutan Katalog Produk (Harga & Nama) | `TS-CAT-004` | Urutkan produk berdasarkan Name: Z to A | Completed | BT | No | N/A | Blocked | N/A | Yes | BUG-SD-001 | Open | **Partial (Blocked)** |
| 5 | **REQ-CAT-01** | Filter & Pengurutan Katalog Produk (Harga & Nama) | `TS-CAT-005` | Urutan default katalog saat pertama kali dibuka | Completed | BT | No | N/A | Blocked | N/A | Yes | BUG-SD-001 | Open | **Partial (Blocked)** |
| 6 | **REQ-CAT-02** | Pencarian Produk (Parsial, Tanpa Hasil, Kosong, & Case-Insensitive) | `TS-CAT-006` | Pencarian dengan kata kunci parsial | Completed | BT | No | N/A | Passed | N/A | None | None | N/A | **Partial** |
| 7 | **REQ-CAT-02** | Pencarian Produk (Parsial, Tanpa Hasil, Kosong, & Case-Insensitive) | `TS-CAT-007` | Pencarian dengan kata kunci yang tidak ada | Completed | BT | No | N/A | Passed | N/A | None | None | N/A | **Partial** |
| 8 | **REQ-CAT-02** | Pencarian Produk (Parsial, Tanpa Hasil, Kosong, & Case-Insensitive) | `TS-CAT-008` | Pencarian dengan input kosong (submit tanpa keyword) | Completed | BT | No | N/A | Passed | N/A | None | None | N/A | **Partial** |
| 9 | **REQ-CAT-03** | Ketahanan Input Pencarian terhadap Karakter Khusus / XSS / Wildcard | `TS-CAT-009` | Pencarian dengan special characters dan SQL injection string | Completed | BT | No | N/A | Passed | N/A | Yes | BUG-SD-003 | Open | **Full (100%)** |
| 10 | **REQ-CAT-02** | Pencarian Produk (Parsial, Tanpa Hasil, Kosong, & Case-Insensitive) | `TS-CAT-010` | Pencarian tidak case-sensitive | Completed | BT | No | N/A | Failed | N/A | Yes | BUG-SD-002 | Open | **Partial** |
| 11 | **REQ-CAT-02** | Pencarian Produk (Parsial, Tanpa Hasil, Kosong, & Case-Insensitive) | `TS-CAT-011` | Halaman detail produk menampilkan informasi lengkap | Completed | BT | No | N/A | Passed | N/A | None | None | N/A | **Partial** |
| 12 | **REQ-CRT-01** | Penambahan, Penggabungan Kuantitas, & Penghapusan Item Keranjang | `TS-CRT-001` | Tambah produk ke keranjang dari halaman detail | Completed | BT | Yes | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 13 | **REQ-CRT-01** | Penambahan, Penggabungan Kuantitas, & Penghapusan Item Keranjang | `TS-CRT-002` | Tambah produk yang sama dua kali - kuantitas digabung | Completed | BT | Yes | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 14 | **REQ-CRT-01** | Penambahan, Penggabungan Kuantitas, & Penghapusan Item Keranjang | `TS-CRT-003` | Tambah beberapa produk berbeda ke keranjang | Completed | BT | Yes | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 15 | **REQ-CRT-01** | Penambahan, Penggabungan Kuantitas, & Penghapusan Item Keranjang | `TS-CRT-004` | Badge/jumlah item pada ikon keranjang selalu sinkron | Completed | BT | No | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 16 | **REQ-CRT-01** | Penambahan, Penggabungan Kuantitas, & Penghapusan Item Keranjang | `TS-CRT-005` | Hapus item dari keranjang belanja | Completed | BT | Yes | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 17 | **REQ-CRT-02** | Validasi Batas Kuantitas Keranjang (BVA: 0, Negatif, & Batas Atas) | `TS-CRT-006` | Ubah kuantitas item menjadi 0 di keranjang | Completed | BT | Yes | N/A | Passed | N/A | None | None | N/A | **Partial** |
| 18 | **REQ-CRT-02** | Validasi Batas Kuantitas Keranjang (BVA: 0, Negatif, & Batas Atas) | `TS-CRT-007` | Ubah kuantitas item menjadi negatif (-1) | Completed | BT | No | N/A | Failed | N/A | Yes | BUG-SD-005 | Open | **Partial** |
| 19 | **REQ-CRT-02** | Validasi Batas Kuantitas Keranjang (BVA: 0, Negatif, & Batas Atas) | `TS-CRT-008` | Ubah kuantitas item ke batas atas (999) dan lebih | Completed | BT | No | N/A | Passed | N/A | Yes | BUG-SD-004 | Open | **Partial** |
| 20 | **REQ-CRT-03** | Kalkulasi Subtotal/Total Keranjang, Empty State, & Persistensi Refresh | `TS-CRT-009` | Kalkulasi subtotal keranjang (harga x kuantitas) | Completed | BT | Yes | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 21 | **REQ-CRT-03** | Kalkulasi Subtotal/Total Keranjang, Empty State, & Persistensi Refresh | `TS-CRT-010` | Kalkulasi total akhir (subtotal + pajak/kirim - diskon) | Completed | BT | Yes | N/A | Passed | N/A | Yes | BUG-SD-006 | Open | **Full (100%)** |
| 22 | **REQ-CRT-03** | Kalkulasi Subtotal/Total Keranjang, Empty State, & Persistensi Refresh | `TS-CRT-011` | Tampilan keranjang kosong (empty state) | Completed | BT | No | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 23 | **REQ-CRT-03** | Kalkulasi Subtotal/Total Keranjang, Empty State, & Persistensi Refresh | `TS-CRT-012` | Isi keranjang bertahan setelah halaman di-refresh | Completed | BT | Yes | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 24 | **REQ-CHK-01** | Validasi Field Wajib & Format/BVA Kode Pos pada Formulir Checkout | `TS-CHK-001` | Checkout dengan seluruh field wajib kosong | Completed | BT | No | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 25 | **REQ-CHK-01** | Validasi Field Wajib & Format/BVA Kode Pos pada Formulir Checkout | `TS-CHK-002` | Checkout dengan hanya First Name kosong | Completed | BT | No | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 26 | **REQ-CHK-01** | Validasi Field Wajib & Format/BVA Kode Pos pada Formulir Checkout | `TS-CHK-003` | Checkout dengan hanya Last Name kosong | Completed | BT | No | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 27 | **REQ-CHK-01** | Validasi Field Wajib & Format/BVA Kode Pos pada Formulir Checkout | `TS-CHK-004` | Checkout dengan hanya Postal Code kosong | Completed | BT | No | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 28 | **REQ-CHK-01** | Validasi Field Wajib & Format/BVA Kode Pos pada Formulir Checkout | `TS-CHK-005` | Validasi format Postal Code (non-numerik) | Completed | BT | No | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 29 | **REQ-CHK-01** | Validasi Field Wajib & Format/BVA Kode Pos pada Formulir Checkout | `TS-CHK-006` | Batas panjang Postal Code (BVA) | Completed | BT | No | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 30 | **REQ-CHK-01** | Validasi Field Wajib & Format/BVA Kode Pos pada Formulir Checkout | `TS-CHK-007` | Cancel pada step one mengembalikan pengguna ke keranjang | Completed | BT | No | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 31 | **REQ-CHK-02** | Penyelesaian Transaksi Checkout, Akurasi Total, & Proteksi Back Order | `TS-CHK-008` | Alur checkout sukses sampai halaman konfirmasi | Completed | BT | Yes | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 32 | **REQ-CHK-02** | Penyelesaian Transaksi Checkout, Akurasi Total, & Proteksi Back Order | `TS-CHK-009` | Verifikasi angka pada halaman order overview | Completed | BT | Yes | N/A | Passed | N/A | Yes | BUG-SD-006 | Open | **Full (100%)** |
| 33 | **REQ-CHK-02** | Penyelesaian Transaksi Checkout, Akurasi Total, & Proteksi Back Order | `TS-CHK-010` | Tekan Back browser setelah order sukses | Completed | BT | Yes | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 34 | **REQ-CHK-03** | Validasi Kode Kupon Kadaluarsa & Kupon Tidak Terdaftar | `TS-CHK-011` | Kupon diskon kadaluarsa ditolak | Completed | BT | No | N/A | Blocked | N/A | None | None | N/A | **Partial (Blocked)** |
| 35 | **REQ-CHK-03** | Validasi Kode Kupon Kadaluarsa & Kupon Tidak Terdaftar | `TS-CHK-012` | Kupon diskon yang tidak terdaftar ditolak | Completed | BT | No | N/A | Blocked | N/A | None | None | N/A | **Partial (Blocked)** |
| 36 | **REQ-ACC-01** | Registrasi Akun Baru & Validasi Input Registrasi (OWASP Juice Shop) | `TS-ACC-001` | Registrasi akun baru dengan data valid | Completed | BT | Yes | Passed | Blocked (503) | N/A | None | None | N/A | **Full (100%)** |
| 37 | **REQ-ACC-01** | Registrasi Akun Baru & Validasi Input Registrasi (OWASP Juice Shop) | `TS-ACC-002` | Registrasi dengan email yang sudah terdaftar | Completed | BT | No | Passed | Blocked (503) | N/A | None | None | N/A | **Full (100%)** |
| 38 | **REQ-ACC-01** | Registrasi Akun Baru & Validasi Input Registrasi (OWASP Juice Shop) | `TS-ACC-003` | Registrasi dengan format email tidak valid | Completed | BT | No | Passed | Blocked (503) | N/A | None | None | N/A | **Full (100%)** |
| 39 | **REQ-ACC-01** | Registrasi Akun Baru & Validasi Input Registrasi (OWASP Juice Shop) | `TS-ACC-004` | Registrasi dengan password dan repeat password tidak sama | Completed | BT | No | Passed | Blocked (503) | N/A | None | None | N/A | **Full (100%)** |
| 40 | **REQ-ACC-01** | Registrasi Akun Baru & Validasi Input Registrasi (OWASP Juice Shop) | `TS-ACC-005` | Batas minimum panjang password (BVA) | Completed | BT | Yes | Passed | Blocked (503) | N/A | None | None | N/A | **Full (100%)** |
| 41 | **REQ-ACC-01** | Registrasi Akun Baru & Validasi Input Registrasi (OWASP Juice Shop) | `TS-ACC-006` | Registrasi dengan seluruh field kosong | Completed | BT | No | Passed | Blocked (503) | N/A | Yes | BUG-JS-001 | Open | **Full (100%)** |
| 42 | **REQ-ACC-02** | Autentikasi Login, Anti-Enumeration, Reset Password, Profil, & Logout | `TS-ACC-007` | Login dengan kredensial valid | Completed | BT | Yes | Passed | Blocked (503) | N/A | None | None | N/A | **Partial** |
| 43 | **REQ-ACC-02** | Autentikasi Login, Anti-Enumeration, Reset Password, Profil, & Logout | `TS-ACC-008` | Login dengan password salah | Completed | BT | No | Passed | Blocked (503) | N/A | None | None | N/A | **Partial** |
| 44 | **REQ-ACC-02** | Autentikasi Login, Anti-Enumeration, Reset Password, Profil, & Logout | `TS-ACC-009` | Login dengan email yang belum terdaftar | Completed | BT | No | Passed | Blocked (503) | N/A | None | None | N/A | **Partial** |
| 45 | **REQ-ACC-02** | Autentikasi Login, Anti-Enumeration, Reset Password, Profil, & Logout | `TS-ACC-010` | Logout dari akun | Completed | BT | Yes | Passed | Blocked (503) | N/A | None | None | N/A | **Partial** |
| 46 | **REQ-ACC-02** | Autentikasi Login, Anti-Enumeration, Reset Password, Profil, & Logout | `TS-ACC-011` | Alur lupa password / reset password | Completed | BT | No | Passed | Blocked (503) | N/A | None | None | N/A | **Partial** |
| 47 | **REQ-ACC-02** | Autentikasi Login, Anti-Enumeration, Reset Password, Profil, & Logout | `TS-ACC-012` | Ubah nama profil pengguna | Completed | BT | No | Blocked | Blocked (503) | N/A | None | None | N/A | **Partial** |
| 48 | **REQ-SES-01** | Ketahanan Sesi (Refresh/Multi-Tab), Cache Logout, & Idle Timeout | `TS-SES-001` | Sesi bertahan setelah halaman di-refresh | Completed | BT | Yes | Passed | Passed | N/A | None | None | N/A | **Partial** |
| 49 | **REQ-SES-01** | Ketahanan Sesi (Refresh/Multi-Tab), Cache Logout, & Idle Timeout | `TS-SES-002` | Sesi bertahan saat dibuka di tab baru | Completed | BT | No | Passed | Passed | N/A | None | None | N/A | **Partial** |
| 50 | **REQ-SES-01** | Ketahanan Sesi (Refresh/Multi-Tab), Cache Logout, & Idle Timeout | `TS-SES-003` | Akses kembali halaman terproteksi lewat tombol Back setelah logout | Completed | BT | Yes | Passed | N/A | N/A | None | None | N/A | **Partial** |
| 51 | **REQ-SES-02** | Proteksi Rute Tanpa Login & Role-Based Access Control (RBAC Admin 403) | `TS-SES-004` | Akses langsung URL halaman terproteksi tanpa login | Completed | BT | No | Passed | N/A | N/A | None | None | N/A | **Full (100%)** |
| 52 | **REQ-SES-02** | Proteksi Rute Tanpa Login & Role-Based Access Control (RBAC Admin 403) | `TS-SES-005` | Akses endpoint administratif sebagai pengguna biasa | Completed | BT | No | Passed | N/A | N/A | None | None | N/A | **Full (100%)** |
| 53 | **REQ-SES-01** | Ketahanan Sesi (Refresh/Multi-Tab), Cache Logout, & Idle Timeout | `TS-SES-006` | Perilaku sesi setelah periode idle | Completed | BT | No | No Run | N/A | N/A | None | None | N/A | **Partial** |
| 54 | **REQ-SES-01** | Ketahanan Sesi (Refresh/Multi-Tab), Cache Logout, & Idle Timeout | `TS-SES-007` | Kondisi keranjang setelah logout | Completed | BT | No | No Run | No Run | N/A | None | None | N/A | **Partial** |

---

## 2. Rekapitulasi Cakupan & Status Eksekusi per Modul

| Modul | Total TC | Passed | Failed | Blocked | No Run | Defect Terkait |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **01 Katalog & Pencarian** | 11 | 5 | 1 | 5 | 0 | `BUG-SD-001`, `BUG-SD-002`, `BUG-SD-003` |
| **02 Keranjang Belanja** | 12 | 11 | 1 | 0 | 0 | `BUG-SD-004`, `BUG-SD-005`, `BUG-SD-006` |
| **03 Checkout & Pembayaran** | 12 | 10 | 0 | 2 | 0 | `BUG-SD-006` |
| **04 Manajemen Akun (Juice Shop)** | 12 | 11 | 0 | 1 | 0 | `BUG-JS-001`, `BUG-ENV-001`, `BUG-ENV-002` |
| **05 Session & RBAC** | 7 | 5 | 0 | 0 | 2 | — |
| **Total Keseluruhan** | **54** | **42 (77,8%)** | **2 (3,7%)** | **8 (14,8%)** | **2 (3,7%)** | **9 Laporan Bug / Blocker** |
