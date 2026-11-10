# Test Data — SauceDemo & OWASP Juice Shop

Pendamping `Test-Cases.xlsx` (sheet `Test-Data`). Semua data di sini dipakai lintas test case; jangan ada data uji yang di-hardcode di dalam langkah test case.

> **Status:** data disiapkan, belum diverifikasi ke aplikasi. Nilai produk dan harga mengacu pada katalog bawaan SauceDemo/Juice Shop dan harus dicek ulang saat eksekusi.

---

## 1. Akun uji

| Aplikasi | Username / Email | Password | Dipakai untuk |
|---|---|---|---|
| SauceDemo | `standard_user` | `secret_sauce` | Baseline untuk hampir semua skenario katalog, cart, checkout |
| SauceDemo | `locked_out_user` | `secret_sauce` | Skenario akun terkunci (di luar 54 kasus; cadangan) |
| SauceDemo | `problem_user` | `secret_sauce` | Akun dengan defect bawaan. **Jangan** dipakai untuk baseline pass/fail |
| Juice Shop | dibuat sendiri lewat `TS-ACC-001` | `Qa12345!` | Registrasi, login, profil, logout |

**Aturan:**
- Jangan memakai akun milik orang lain di instance publik Juice Shop.
- Email uji berpola `qa.<modul>.<timestamp>@mailinator.com` agar unik per eksekusi.
- Jangan pernah memasukkan kredensial asli ke dalam test case.

---

## 2. Produk acuan

Harga dipakai untuk verifikasi kalkulasi (`TS-CRT-009`, `TS-CRT-010`, `TS-CHK-009`).

| Aplikasi | Produk | Harga | Kegunaan |
|---|---|---|---|
| SauceDemo | Sauce Labs Backpack | $29.99 | Produk utama kalkulasi cart & checkout |
| SauceDemo | Sauce Labs Bike Light | $9.99 | Item kedua untuk uji multi-produk |
| SauceDemo | Sauce Labs Onesie | $7.99 | Termurah; cek urutan sort |
| SauceDemo | Sauce Labs Fleece Jacket | $49.99 | Termahal; cek urutan sort |
| Juice Shop | Apple Juice | $1.99 | Produk acuan |
| Juice Shop | Orange Juice | $2.99 | Item kedua |

**Contoh perhitungan yang harus cocok:**
```
Subtotal  = (29.99 x 2) + 9.99  = 69.97
Tax       = subtotal x rate (rate dibaca dari UI, tidak dipatok di sini)
Total     = subtotal + tax + shipping - discount
```
Tidak boleh muncul artefak floating point seperti `69.9700001` atau notasi ilmiah `1.0E+5`.

---

## 3. Data negatif

| Kategori | Nilai | Test case |
|---|---|---|
| Keyword tanpa hasil | `zzqqxx999`, `produk-tidak-ada-123` | `TS-CAT-007` |
| Special character / injeksi | `<script>alert(1)</script>`, `' OR '1'='1`, `%`, `_`, `--`, `'; DROP TABLE Products;--` | `TS-CAT-009`, `TS-CHK-012` |
| Input kosong | `""`, `"   "` (spasi) | `TS-CAT-008`, `TS-CHK-001`, `TS-ACC-006` |
| Postal code invalid | `ABCDE`, `12-34`, `12 45`, `@#$%` | `TS-CHK-005` |
| Postal code BVA | `""`, `1`, `12345`, `123456`, 50 char, 200 char | `TS-CHK-006` |
| Email invalid | `abc`, `abc@`, `abc@domain`, `@domain.com`, `abc domain.com`, `abc@@domain.com` | `TS-ACC-003` |
| Password BVA | 0, 1, 4, 5, 8, 33 karakter | `TS-ACC-005` |
| Password mismatch | `Qa12345!` vs `Qa12345` | `TS-ACC-004` |
| Qty cart BVA | `0`, `-1`, `-99`, `99`, `999`, `1000`, `99999` | `TS-CRT-006` s.d. `TS-CRT-008` |

Payload injeksi di sini diuji sebagai **input tidak valid**, bukan pentest penuh. Temuan XSS/SQLi tetap dicatat sebagai defect, tapi cakupan keamanan menyeluruh di luar dokumen ini.

---

## 4. Kode kupon — TIDAK TERSEDIA

Test plan asli mencantumkan `TS-CHK-002` (kupon kadaluarsa / tidak terdaftar). Setelah ditelusuri:

- SauceDemo: alur checkout hanya berisi alamat + ringkasan order + tombol Finish. Tidak ada field kode promo.
- Juice Shop: tidak menyediakan mekanisme kupon pada alur cart/checkout.

Karena itu `TS-CHK-011` dan `TS-CHK-012` berstatus **Blocked** dengan alasan "fitur tidak ada di target". Kejujuran ini lebih bernilai daripada memaksa skenario lulus secara semu.

---

## 5. Environment

| Item | Nilai |
|---|---|
| OS | Windows 11 (utama), macOS (bila tersedia) |
| Resolusi | 1920x1080 |
| Browser utama | Google Chrome — catat versi tepat saat eksekusi |
| Browser sekunder | Mozilla Firefox — wajib untuk Priority Critical + High |
| Browser tersier | Microsoft Edge — opsional |
| Tools | Chrome DevTools (Console + Network), Google Sheets / Jira, Loom |
| Data uji | Dokumen ini |

**Aturan cross-browser:** tidak semua 54 kasus dijalankan di 3 browser. Matriks penuh hanya untuk `Priority = Critical` dan `High`; sisanya cukup di Chrome.

---

## 6. Catatan URL target

| Aplikasi | URL di test plan asli | Catatan |
|---|---|---|
| SauceDemo | `https://sauce-demo.myshopify.com/` | Instance standar publik: `https://www.saucedemo.com/` |
| OWASP Juice Shop | `https://juice-shop.herokuapp.com/` | Heroku free tier ditutup Nov 2022, domain ini mati. Instance resmi: `https://demo.owasp-juice.shop` |

Status URL **belum diverifikasi** dalam penyusunan suite ini. Konfirmasi dulu sebelum eksekusi, lalu perbarui test plan.
