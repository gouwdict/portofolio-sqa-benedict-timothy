# Requirement Traceability Matrix (RTM) — SauceDemo Cross-Browser Smoke

- **Proyek**: SauceDemo Cross-Browser Smoke Testing (`TP-SD-CB-V1.0`)
- **Penyusun**: Benedict Timothy
- **Tanggal**: 9 November 2026 (Diperbarui: 10 November 2026)
- **Standar Format**: Standar RTM MySkill (15 Kolom) & Best Practice SQA ISO/IEC/IEEE 29119-3

> [!NOTE]
> **Penjelasan Lingkungan (`Test Env`, `UAT Env`, `Prod Env`)**:
> - **UAT Env (`saucedemo.com`)**: Merupakan *public demo/staging storefront* resmi dari Sauce Labs tempat seluruh 12 skenario diuji pada 5 profil browser (`Chromium`, `Firefox`, `WebKit`, `Edge`, `Mobile Pixel 5`) dengan hasil **Passed (5/5 Browser)**.
> - **Test Env (Internal SIT)** dan **Prod Env**: Ditandai **`N/A`** (*Not Applicable* — bukan `No Run`) karena Swag Labs adalah aplikasi demo publik yang tidak memiliki lingkungan transaksi produksi finansial nyata.

---

## 1. Tabel Standar Requirement Traceability Matrix (Format MySkill 15 Kolom)

| Sno | Req ID | Req Desc | TC ID | TC Desc | Test Design | Test Designer | UAT Test Req? | Test Env | UAT Env | Prod Env | Defects? | Defect ID | Defect Status | Req Coverage Status |
| :-: | :--- | :--- | :--- | :--- | :---: | :---: | :-: | :---: | :---: | :---: | :-: | :---: | :---: | :---: |
| 1 | **REQ-SD-01** | Halaman Login & Komponen Autentikasi | `TC-SD-CB-01` | Verifikasi halaman login memuat field username, password, dan tombol Login di 5 browser | Completed | BT | Yes | N/A | Passed (5/5) | N/A | None | None | N/A | **Full (100%)** |
| 2 | **REQ-SD-02** | Validasi Penolakan Akun Terkunci (*Locked-Out User*) | `TC-SD-CB-02` | Login negatif menggunakan `locked_out_user` menampilkan pesan error terkunci | Completed | BT | No | N/A | Passed (5/5) | N/A | None | None | N/A | **Full (100%)** |
| 3 | **REQ-SD-03** | Autentikasi Pengguna Valid (*Standard User*) | `TC-SD-CB-03` | Login positif menggunakan `standard_user` mengarahkan ke `/inventory.html` | Completed | BT | Yes | N/A | Passed (5/5) | N/A | None | None | N/A | **Full (100%)** |
| 4 | **REQ-SD-04** | Tampilan Katalog Inventaris Produk | `TC-SD-CB-04` | Verifikasi dashboard katalog menampilkan 6 produk secara utuh | Completed | BT | Yes | N/A | Passed (5/5) | N/A | None | None | N/A | **Full (100%)** |
| 5 | **REQ-SD-05** | Pengurutan Produk Berdasarkan Harga (*Sort Price Low to High*) | `TC-SD-CB-05` | Pilih sort *Price (low to high)* dan pastikan produk pertama berharga `\$7.99` | Completed | BT | Yes | N/A | Passed (5/5) | N/A | None | None | N/A | **Full (100%)** |
| 6 | **REQ-SD-06** | Penambahan Produk ke Keranjang Belanja | `TC-SD-CB-06` | Tambah 2 produk (*Onesie* & *Backpack*) dan verifikasi *badge* keranjang bernilai `2` | Completed | BT | Yes | N/A | Passed (5/5) | N/A | None | None | N/A | **Full (100%)** |
| 7 | **REQ-SD-07** | Verifikasi Daftar Item pada Halaman Keranjang | `TC-SD-CB-07` | Buka `/cart.html` dan pastikan kedua item tampil dengan kuantitas masing-masing `1` | Completed | BT | Yes | N/A | Passed (5/5) | N/A | None | None | N/A | **Full (100%)** |
| 8 | **REQ-SD-08** | Validasi Field Wajib pada Form Checkout | `TC-SD-CB-08` | Submit form *checkout* dalam keadaan kosong menampilkan `Error: First Name is required` | Completed | BT | No | N/A | Passed (5/5) | N/A | None | None | N/A | **Full (100%)** |
| 9 | **REQ-SD-09** | Akurasi Perhitungan Subtotal, Pajak, dan Total Belanja | `TC-SD-CB-09` | Verifikasi nilai Subtotal `\$37.98`, Tax `\$3.04`, dan Total `\$41.02` pada *Checkout Overview* | Completed | BT | Yes | N/A | Passed (5/5) | N/A | None | None | N/A | **Full (100%)** |
| 10 | **REQ-SD-10** | Penyelesaian Transaksi & Halaman Konfirmasi Order | `TC-SD-CB-10` | Klik tombol *Finish* dan verifikasi pesan `Thank you for your order!` tampil | Completed | BT | Yes | N/A | Passed (5/5) | N/A | None | None | N/A | **Full (100%)** |
| 11 | **REQ-SD-11** | Fungsi Logout dari Sesi Aktif | `TC-SD-CB-11` | Buka menu navigasi dan klik *Logout*, pastikan kembali ke halaman login | Completed | BT | Yes | N/A | Passed (5/5) | N/A | None | None | N/A | **Full (100%)** |
| 12 | **REQ-SD-12** | Proteksi Rute Terautentikasi Pasca-Logout (*Protected Route Guard*) | `TC-SD-CB-12` | Akses langsung `/inventory.html` setelah *logout* dan pastikan diarahkan kembali ke halaman login | Completed | BT | Yes | N/A | Passed (5/5) | N/A | None | None | N/A | **Full (100%)** |

---

## 2. Rincian Ketertelusuran Lintas-Peramban (*Cross-Browser Execution Matrix*)

| TC ID | Req ID | Chromium | Firefox | WebKit | Edge | Mobile Pixel 5 | Bukti Screenshot (per profil) |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| `TC-SD-CB-01` | `REQ-SD-01` | Passed | Passed | Passed | Passed | Passed | `01-login-page.png` |
| `TC-SD-CB-02` | `REQ-SD-02` | Passed | Passed | Passed | Passed | Passed | `02-negative-login.png` |
| `TC-SD-CB-03` | `REQ-SD-03` | Passed | Passed | Passed | Passed | Passed | `03-valid-login.png` |
| `TC-SD-CB-04` | `REQ-SD-04` | Passed | Passed | Passed | Passed | Passed | `04-inventory.png` |
| `TC-SD-CB-05` | `REQ-SD-05` | Passed | Passed | Passed | Passed | Passed | `05-sort-low-high.png` |
| `TC-SD-CB-06` | `REQ-SD-06` | Passed | Passed | Passed | Passed | Passed | `06-added-to-cart.png` |
| `TC-SD-CB-07` | `REQ-SD-07` | Passed | Passed | Passed | Passed | Passed | `07-cart.png` |
| `TC-SD-CB-08` | `REQ-SD-08` | Passed | Passed | Passed | Passed | Passed | `08-checkout-validation.png` |
| `TC-SD-CB-09` | `REQ-SD-09` | Passed | Passed | Passed | Passed | Passed | `09-checkout-overview.png` |
| `TC-SD-CB-10` | `REQ-SD-10` | Passed | Passed | Passed | Passed | Passed | `10-order-complete.png` |
| `TC-SD-CB-11` | `REQ-SD-11` | Passed | Passed | Passed | Passed | Passed | `11-logout.png` |
| `TC-SD-CB-12` | `REQ-SD-12` | Passed | Passed | Passed | Passed | Passed | `12-protected-route.png` |
