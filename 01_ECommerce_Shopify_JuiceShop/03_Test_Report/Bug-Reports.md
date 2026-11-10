# Bug Reports

Format mengikuti standar di `SOFTWARE TEST PLAN DOCUMENT` bagian 6.
Semua defect berstatus **Open**. Tanggal temuan: 2026-11-03.

Environment kecuali disebut lain:
- OS: Windows 11, resolusi 1920x1080
- Browser: Google Chrome (versi saat eksekusi)
- SauceDemo: `https://sauce-demo.myshopify.com/`
- Juice Shop: `http://localhost:3000` (v20.3.0)

---

## BUG-SD-001 — Katalog tidak memiliki kontrol sort maupun filter

**Severity:** High  **Priority:** High
**Test case terkait:** TS-CAT-001, TS-CAT-002, TS-CAT-003, TS-CAT-004, TS-CAT-005
**Status:** Open

**Steps to Reproduce**
1. Buka `https://sauce-demo.myshopify.com/collections/all`.
2. Amati area di atas daftar produk.
3. Cari dropdown "Sort by", link filter kategori, atau kontrol pengurutan harga/nama.

**Actual Result**
Tidak ada kontrol sort/filter sama sekali. Hasil evaluasi DOM: `0` elemen `<select>`, `0` link sort, `0` form sort. Urutan produk hanya urutan default Shopify (Black heels, Bronze sandals, Brown Shades, Grey jacket, Noir jacket, Striped top, White sandals) dan tidak alfabetis.

**Expected Result**
Tersedia kontrol pengurutan minimal: Price low-to-high, Price high-to-low, Name A-Z, Name Z-A, sesuai scope test plan.

**Evidence:** `evidence/cat-001-no-sort-control.png`

---

## BUG-SD-002 — Hasil pencarian berubah menurut kapitalisasi huruf

**Severity:** Medium  **Priority:** High
**Test case terkait:** TS-CAT-010
**Status:** Open

**Steps to Reproduce**
1. Buka `https://sauce-demo.myshopify.com/search?q=jacket` → catat jumlah hasil.
2. Ulangi dengan `?q=JACKET`.
3. Ulangi dengan `?q=JaCkEt`.
4. Ulangi dengan `?q=jAcKeT`.

**Actual Result**
| Query | Jumlah hasil | Produk |
|---|---|---|
| `jacket` | 3 | Grey jacket, Noir jacket, Striped top |
| `JACKET` | 3 | Grey jacket, Noir jacket, Striped top |
| `JaCkEt` | **2** | Grey jacket, Noir jacket |
| `jAcKeT` | 3 | Grey jacket, Noir jacket, **Bronze sandals** |

`JaCkEt` menghasilkan 2 hasil secara konsisten pada 3 percobaan berturut-turut. Hasil berbeda juga memunculkan produk yang berbeda (Bronze sandals), bukan hanya jumlah yang berbeda.

**Expected Result**
Pencarian tidak case-sensitive: keempat query menghasilkan daftar produk yang identik.

**Evidence:** `evidence/cat-010-case-inconsistent.png` (menampilkan "Search: 2 results found for JaCkEt")

---

## BUG-SD-003 — Karakter `%` dan `_` mengembalikan hampir seluruh katalog

**Severity:** Medium  **Priority:** Medium
**Test case terkait:** TS-CAT-009
**Status:** Open

**Steps to Reproduce**
1. Buka `https://sauce-demo.myshopify.com/search?q=%25` (karakter `%`).
2. Catat jumlah hasil.
3. Ulangi dengan `?q=_`.
4. Bandingkan dengan total produk di katalog (9 produk).

**Actual Result**
- `%` → 8 hasil
- `_` → 9 hasil (seluruh katalog)

Karakter wildcard diperlakukan sebagai pola pencarian, bukan sebagai teks literal.

**Expected Result**
Karakter khusus diperlakukan sebagai teks biasa: hasil kosong atau hanya produk yang namanya benar-benar memuat karakter tersebut.

**Catatan:** Tidak ada indikasi SQL injection (tidak ada error SQL, tidak ada dump data, HTTP 200). Ini masalah kualitas pencarian dan permukaan serangan, bukan bukti SQLi.

**Evidence:** `evidence/cat-009-wildcard-payload.png`

---

## BUG-SD-004 — Tidak ada batas maksimum kuantitas; badge keranjang menampilkan 100003

**Severity:** Medium  **Priority:** High
**Test case terkait:** TS-CRT-008
**Status:** Open

**Steps to Reproduce**
1. Tambah produk apa pun ke keranjang.
2. Buka `/cart`.
3. Isi kolom Qty dengan `99999`.
4. Klik **Update**.

**Actual Result**
Nilai diterima. Total menjadi **£6.000.160,00** dan label keranjang menampilkan **`My Cart (100003)`**. Tidak ada pesan validasi. Nilai `999` juga diterima (£60.160,00).

**Expected Result**
Ada batas kuantitas per item (misalnya 99 atau 999) dengan pesan jelas saat dilampaui. Badge keranjang tetap terbaca (maksimum 2-3 digit atau format `999+`).

**Dampak:** pengguna dapat membuat nilai order tidak realistis; tampilan header rusak secara visual; potensi penyalahgunaan stok.

**Evidence:** `evidence/crt-008-qty-999.png`

---

## BUG-SD-005 — Kuantitas negatif ditolak tanpa pesan error

**Severity:** Low  **Priority:** Medium
**Test case terkait:** TS-CRT-007
**Status:** Open

**Steps to Reproduce**
1. Buka `/cart` dengan 1 item.
2. Isi kolom Qty dengan `-1`.
3. Klik **Update**.
4. Amati nilai Qty, total, dan pesan di halaman.

**Actual Result**
Request `POST /cart` mengembalikan 302, halaman dimuat ulang, Qty kembali ke `1`, total tidak berubah. Tidak ada pesan error, peringatan, atau penjelasan apa pun kepada pengguna.

**Expected Result**
Input negatif ditolak dengan umpan balik jelas (misalnya "Quantity must be at least 1"), atau field menolak karakter minus saat diketik.

**Evidence:** `evidence/crt-007-qty-negative.png`, `evidence/crt-007b-qty-negative.png`

---

## BUG-SD-006 — Format mata uang berbeda antara halaman cart dan checkout

**Severity:** Low  **Priority:** Low
**Test case terkait:** TS-CRT-010, TS-CHK-009
**Status:** Open

**Steps to Reproduce**
1. Tambah produk ke keranjang.
2. Buka `/cart` → catat format harga.
3. Klik Checkout → catat format harga yang sama.

**Actual Result**
- Cart: `£55.00`, `Total £55.00` (titik sebagai desimal)
- Checkout: `£55,00`, `Total GBP £75,00` (koma sebagai desimal, locale `en-id`)

**Expected Result**
Format mata uang konsisten di seluruh alur, sesuai locale toko (`en` → `£55.00`).

**Dampak:** kebingungan pembeli; pada locale tertentu `£55,00` bisa dibaca sebagai lima puluh lima ribu.

**Evidence:** `evidence/crt-009-subtotal-check.png`, `evidence/chk-008-order-result.png`

---

## BUG-JS-001 — Registrasi menerima akun tanpa Security Question/Answer

**Severity:** Medium  **Priority:** Medium
**Test case terkait:** TS-ACC-006
**Status:** Open

**Steps to Reproduce**
1. Buka `http://localhost:3000/#/register`.
2. Isi Email, Password, dan Repeat Password dengan data valid.
3. Biarkan Security Question kosong dan Answer kosong.
4. Klik **Register**.

**Actual Result**
Akun berhasil dibuat tanpa error untuk Security Question/Answer. Validasi hanya muncul untuk email dan password (`Please provide an email address`, `Please provide a password`, `Please repeat your password`). Dikonfirmasi lewat API: `POST /api/Users/` tanpa field security menghasilkan `201` dan user baru (id 26).

**Expected Result**
Security Question dan Answer wajib diisi, atau fitur pemulihan akun tidak bergantung pada data yang tidak pernah diminta.

**Dampak:** pengguna kehilangan satu-satunya jalur pemulihan akun.

**Catatan:** Juice Shop memang aplikasi yang sengaja rentan; temuan ini tetap dicatat karena berdampak pada alur bisnis, bukan pada kerentanan yang disengaja.

**Evidence:** `evidence/acc-006-empty-register.png`

---

## BUG-ENV-001 — URL Juice Shop di test plan mengembalikan 503

**Severity:** Blocker  **Priority:** Critical
**Status:** Open

**Steps to Reproduce**
1. Buka `https://juice-shop.herokuapp.com/`.

**Actual Result**
HTTP **503**, halaman "Application Error". Instance Heroku sudah tidak aktif.

**Expected Result**
Aplikasi dapat diakses (HTTP 200) sesuai Entry Criteria test plan.

**Dampak:** seluruh modul Akun dan sebagian Session tidak dapat dieksekusi pada target yang direncanakan.

---

## BUG-ENV-002 — Instance resmi `demo.owasp-juice.shop` juga mengembalikan 503

**Severity:** Blocker  **Priority:** Critical
**Status:** Open

**Steps to Reproduce**
1. Buka `https://demo.owasp-juice.shop/`.
2. Ulangi setelah 5 detik.
3. Periksa dengan `HEAD` request.

**Actual Result**
HTTP **503** pada ketiga percobaan, halaman "Application Error".

**Expected Result**
Instance demo resmi dapat diakses publik.

**Workaround yang dipakai:** Juice Shop v20.3.0 dijalankan lokal dari source (`http://localhost:3000`). Semua test case modul Akun dieksekusi di instance lokal ini; versi dan URL dicatat di laporan.

**Catatan:** status instance publik dapat berubah; periksa ulang sebelum eksekusi berikutnya.
