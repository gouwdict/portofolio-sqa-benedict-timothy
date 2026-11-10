# Test Execution Report

**Proyek:** QA Portfolio — Manual Web Application Testing
**Basis dokumen:** `01_Test_Plan/SOFTWARE TEST PLAN DOCUMENT.docx` dan `01_Test_Plan/Test-Plan.md`
**Suite yang dieksekusi:** `02_Test_Cases/Test-Cases.xlsx` (54 test case)
**Tanggal eksekusi:** 2026-11-03
**Eksekutor:** Benedict Timothy (Chrome, 1920x1080)
**Hasil detail:** `Test-Results.xlsx` (status, actual result, evidence per test case)

---

## 1. Ringkasan Eksekusi

| Status | Jumlah | Persentase |
|---|---|---|
| Pass | 42 | 77,8% |
| **Fail** | **2** | **3,7%** |
| Blocked | 8 | 14,8% |
| Not Run | 2 | 3,7% |
| **Total** | **54** | 100% |

**Pass rate dari kasus yang benar-benar dapat dieksekusi (44): 95,5%.**

Ditemukan **6 defect** pada target e-commerce, **1 defect** pada modul akun Juice Shop, dan **2 blocker environment** yang membuat URL di test plan tidak dapat dipakai.

---

## 2. Environment Aktual vs Test Plan

Ini bagian terpenting dari laporan. Dua URL di test plan **tidak sesuai dengan kenyataan**.

| Item | Test Plan | Aktual | Dampak |
|---|---|---|---|
| SauceDemo | `https://sauce-demo.myshopify.com/` | **Hidup**, tetapi ini toko Shopify demo (9 produk, harga GBP), bukan aplikasi SauceDemo klasik (`saucedemo.com` dengan `standard_user`, `inventory.html`, Backpack $29.99) | Test case harus diadaptasi saat eksekusi; beberapa skenario tidak berlaku |
| Juice Shop | `https://juice-shop.herokuapp.com/` | **503 Application Error** (mati) | Blocker |
| Alternatif Juice Shop | `https://demo.owasp-juice.shop/` | **503 Application Error** | Blocker |
| Fallback dipakai | — | Juice Shop **v20.3.0 lokal** (`http://localhost:3000`) | Modul akun & session tetap dapat diuji |

### Konsekuensi konkret
1. **SauceDemo klasik tidak diuji.** Akun `standard_user`, alur `/inventory.html`, `/checkout-step-one.html`, dan produk $29.99 tidak ada di target. Angka di test case (Backpack $29.99) diganti produk aktual (Grey jacket £55.00, Noir jacket £60.00).
2. **Fitur sort tidak ada** di storefront Shopify, sehingga 5 test case katalog otomatis Blocked.
3. **Pembayaran** memakai Shopify Test Payment Gateway (kartu `1` = approved). Tidak ada kartu asli yang dipakai.
4. Test plan menyebut SauceDemo tanpa fitur kupon — terkonfirmasi: kupon memang tidak ada.

---

## 3. Hasil per Modul

| Modul | Total | Pass | Fail | Blocked | Not Run |
|---|---|---|---|---|---|
| 01 Katalog & Pencarian | 11 | 5 | 1 | 5 | 0 |
| 02 Keranjang | 12 | 11 | 1 | 0 | 0 |
| 03 Checkout | 12 | 10 | 0 | 2 | 0 |
| 04 Akun (Juice Shop) | 12 | 11 | 0 | 1 | 0 |
| 05 Session & RBAC | 7 | 5 | 0 | 0 | 2 |

### 3.1 Katalog & Pencarian
- Pencarian parsial berfungsi, empty state jelas, tidak ada error 5xx saat diberi payload berbahaya.
- **FAIL:** hasil pencarian berubah menurut kapitalisasi huruf (`jacket` 3 hasil, `JaCkEt` 2 hasil).
- **Blocked:** tidak ada kontrol sort sama sekali (5 kasus).
- Payload `%` mengembalikan 8 dari 9 produk dan `_` mengembalikan 9 dari 9 — indikasi wildcard injection.

### 3.2 Keranjang
- Tambah, merge qty, hapus, kalkulasi subtotal, empty state, dan persistensi refresh semuanya benar.
- Qty 0 menghapus item dengan benar.
- **FAIL:** qty negatif (`-1`) ditolak secara senyap tanpa pesan apa pun.
- Qty 99999 diterima: total £6.000.160 dan badge keranjang menampilkan `100003`.

### 3.3 Checkout
- Validasi per field sangat baik: pesan spesifik per field, border merah, shipping method ikut menyesuaikan.
- Alur transaksi sukses berhasil sampai halaman konfirmasi (#ICIQQHZFH).
- Aritmetika benar: subtotal £55,00 + shipping £20,00 = total £75,00.
- Tombol Back setelah order tidak membuka ulang checkout, cart kosong, tidak ada order ganda.
- **Blocked:** kupon (2 kasus) — fitur tidak ada.

### 3.4 Akun (Juice Shop lokal)
- Registrasi, validasi email, mismatch password, batas panjang password, login, logout semuanya berperilaku benar.
- Login gagal memakai pesan generik yang sama untuk password salah dan email tidak terdaftar (tidak ada user enumeration).
- **Temuan:** registrasi tetap menerima akun tanpa Security Question/Answer, sehingga pemulihan akun tidak mungkin dilakukan.
- **Blocked:** perubahan username tidak tercapai lewat UI pengujian.

### 3.5 Session & RBAC
- Sesi bertahan setelah refresh dan lintas tab.
- Logout benar-benar menghapus token (localStorage `null`); tombol Back tidak memunculkan data terproteksi.
- Akses langsung tanpa login diarahkan ke halaman login.
- User biasa membuka `/#/administration` mendapat **403**.
- **Not Run:** idle timeout dan kondisi cart setelah logout.

---

## 4. Daftar Defect

Rincian lengkap ada di `Bug-Reports.md`.

| ID | Judul | Severity | Priority |
|---|---|---|---|
| BUG-SD-001 | Tidak ada kontrol sort/filter pada katalog | High | High |
| BUG-SD-002 | Hasil pencarian tidak konsisten terhadap kapitalisasi | Medium | High |
| BUG-SD-003 | Karakter `%` dan `_` mengembalikan hampir seluruh katalog | Medium | Medium |
| BUG-SD-004 | Tidak ada batas maksimum kuantitas; badge menampilkan 100003 | Medium | High |
| BUG-SD-005 | Kuantitas negatif ditolak tanpa pesan error | Low | Medium |
| BUG-SD-006 | Format mata uang berbeda antara cart (£55.00) dan checkout (£55,00) | Low | Low |
| BUG-JS-001 | Registrasi menerima akun tanpa Security Question/Answer | Medium | Medium |
| BUG-ENV-001 | `juice-shop.herokuapp.com` mengembalikan 503 | Blocker | Critical |
| BUG-ENV-002 | `demo.owasp-juice.shop` mengembalikan 503 | Blocker | Critical |

---

## 5. Catatan Pengujian

- **Tidak ada data kartu asli.** Kartu `1` adalah instruksi resmi gateway test Shopify untuk transaksi approved.
- Satu order test dibuat di toko demo (`#ICIQQHZFH`). Toko ini memang disediakan untuk demo.
- Banner `There was a problem with our checkout` sempat muncul sekali, tetapi **tidak reproducible** pada 3 percobaan berikutnya — tidak dicatat sebagai defect, hanya observasi.
- Beberapa status Pass bersifat parsial dan sudah ditandai di kolom Notes (misalnya BVA postal code panjang ekstrem belum diuji).
- Eksekusi memakai browser sungguhan, bukan mock. Semua bukti ada di folder `evidence/` (45 screenshot).

---

## 6. Yang Belum Dieksekusi / Perlu Dilanjutkan

1. **Sort & filter** — tidak bisa diuji sampai target yang punya fitur sort tersedia.
2. **Kupon** — fitur tidak ada di target mana pun.
3. **Idle timeout sesi** — butuh 15-60 menit dan kebijakan timeout yang jelas.
4. **Perubahan username Juice Shop** — perlu verifikasi manual.
5. **Cross-browser** — eksekusi ini hanya Chrome. Firefox dan Edge belum dijalankan.
6. **SauceDemo klasik** — jika ingin menguji skenario asli (`standard_user`, Backpack, checkout 3 langkah), target harus diganti ke `https://www.saucedemo.com/` dan test case disesuaikan.

---

## 7. Rekomendasi

1. Perbarui test plan: ganti `juice-shop.herokuapp.com` dengan instance yang stabil, dan putuskan apakah target e-commerce adalah storefront Shopify atau `saucedemo.com`.
2. Turunkan atau hapus skenario kupon dari scope, atau sediakan target yang punya fitur kupon.
3. Perbaiki BUG-SD-002 dan BUG-SD-004 sebelum menambah skenario baru; keduanya menyentuh kepercayaan pengguna terhadap pencarian dan total belanja.
4. Jalankan ulang suite di Firefox minimal untuk 29 kasus Critical/High setelah defect diperbaiki.
