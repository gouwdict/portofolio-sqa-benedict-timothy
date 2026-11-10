# Defect Log — Portal Aplikasi Internal IPEKA BSD (Run-01 & Run-02)

Daftar lengkap temuan cacat perangkat lunak (*defects*) dan observasi teknis dari hasil pengujian **Run-01** dan **Run-02** pada `https://app.ipekabsd.my.id/` beserta 9 subdomain layanan.

| Defect ID | TC Terkait | Modul / Layanan | Judul & Deskripsi Temuan | Severity | Priority | Status |
| :--- | :--- | :--- | :--- | :---: | :---: | :---: |
| `DEF-001` | `TC-X-06` | HelpDesk (`desk.*`) | **Waktu muat awal HelpDesk (0,71s)4x lebih lambat dibanding Portal (0,17s)**: Masih di bawah batas toleransi 3 detik sehingga `TC-X-06` tetap *Pass*, namun dicatat untuk pemantauan optimasi aset. | Low | Low | Open (Monitor) |
| `DEF-002` | `TC-B-03`, `TC-D-03`, `TC-F-03`, `TC-H-04` | Form, Booking, Draw, Desk | **Tautan navigasi Admin tampil secara eksplisit bagi pengguna publik non-admin**: Meskipun klik tautan tersebut diarahkan ke halaman login admin (tidak langsung membocorkan data), menyembunyikan menu Admin dari tampilan tamu mengurangi permukaan serangan. | Medium | Low | Open (UX/Security Hardening) |
| `DEF-003` | `TC-H-01`, `TC-X-10` | HelpDesk (`desk.*`) | **Terdapat 1 resource statis mengembalikan HTTP 404 pada log konsol browser**: Tidak menyebabkan halaman *crash*, namun perlu dibersihkan agar tidak memicu *broken asset request*. | Low | Low | Open |
| `DEF-004` | `TC-Q-11` | QR Generator (`qr.*`) | **Dimensi piksel file PNG hasil unduhan meleset dari opsi ukuran yang dipilih (512, 1024, 2048 px)**: Saat pengguna memilih ukuran `512×512`, `1024×1024`, dan `2048×2048`, file PNG aktual yang terunduh masing-masing berukuran **`495×495`**, **`1023×1023`**, dan **`2046×2046` piksel** (dibulatkan ke kelipatan 33 modul: 25 modul QR + $2 \times 4$ modul margin). Bukti: `08_Test_Report/Run-02/evidence/pilihan-512.png`, `pilihan-1024.png`, `pilihan-2048.png`. | Low | Medium | **Open (Confirmed in Run-02)** |
| `DEF-005` | `TC-I-07`, `TC-X-09` | Internet Traffic (`inet.*`) & Cross-Cutting | **Tabel sensor PRTG mengalami *horizontal overflow* parah pada viewport mobile (`375px`)**: Pada lebar area konten `375px` CSS, lebar dokumen dan tabel mencapai `608px` (selisih *overflow* `233px`), sehingga kolom nilai sensor terpotong di luar layar dan memaksa pengguna menggeser seluruh halaman secara horizontal. | Medium | Medium | **Open (Confirmed in Run-01 & Run-02)** |

---

## Rincian Reproduksi Defect Fungsional / UI Utama

### 1. `DEF-004` — Dimensi Unduhan PNG QR Generator Tidak Presisi (`TC-Q-11`)
- **Langkah Reproduksi**:
  1. Buka `https://qr.ipekabsd.my.id/`.
  2. Masukkan URL `https://example.com` dengan pengaturan *default* (25×25 modul, margin 4 modul).
  3. Pilih ukuran unduhan `512 × 512`, klik **Unduh PNG**, dan periksa dimensi intrinsik gambar.
  4. Ulangi untuk ukuran `1024 × 1024` dan `2048 × 2048`.
- **Expected Result**: Dimensi berkas PNG tepat `512×512`, `1024×1024`, dan `2048×2048` piksel sesuai label pilihan UI.
- **Actual Result**: Berkas PNG berukuran `495×495` ($\text{floor}(512/33) \times 33$), `1023×1023` ($\text{floor}(1024/33) \times 33$), dan `2046×2046` ($\text{floor}(2048/33) \times 33$).

### 2. `DEF-005` — Overflow Horizontal Tabel Internet Traffic pada Viewport Mobile (`TC-I-07` & `TC-X-09`)
- **Langkah Reproduksi**:
  1. Buka `https://inet.ipekabsd.my.id/` menggunakan ukuran viewport mobile `375 × 812`.
  2. Tunggu daftar 3 sensor ISP (iForte, Taycon, BaliFiber) selesai dimuat.
  3. Periksa `document.documentElement.clientWidth` (`375px`) dibanding `document.documentElement.scrollWidth` (`608px`).
- **Expected Result**: Tabel membungkus (*wrap*) atau menyediakan kontainer *scroll* lokal tanpa merusak lebar halaman utama.
- **Actual Result**: Dokumen melebar hingga `608px` (selisih `233px`), menyebabkan kolom nilai *traffic* berada di luar layar awal.
