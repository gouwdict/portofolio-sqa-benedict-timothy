# Mobile Test Cases & RTM — IPEKA BSD Internal Portal

- **Test Plan Reference**: `test-plan.md` (`TP-IPEKA-MOB-V1.0`)
- **Test Designer**: Benedict Timothy
- **Target Environment**: Android Emulator Pixel 7 (Android 14 / API 34) — Chrome Mobile
- **Total Test Cases**: 20 (`MOB-001` s.d. `MOB-020`)
- **Current Execution Status**: `No Run` *(Test Design Completed — Siap dieksekusi pada sesi testing bersama)*

---

## Bagian 1: Rincian 20 Skenario Uji Mobile (`MOB-001` s.d. `MOB-020`)

### 1. Portal Access & Orientation (`REQ-MOB-01`)

#### `MOB-001` — Portal home page loads on mobile (Portrait)
- **Precondition**: Emulator dan Chrome siap dalam mode *Portrait*.
- **Steps**:
  1. Buka Chrome pada emulator Android.
  2. Navigasi ke `https://app.ipekabsd.my.id/`.
- **Expected Result**: Halaman utama portal termuat dengan HTTP 200; logo, tombol Call Center 1010, dan 10 kartu layanan tersusun vertikal tanpa kerusakan tata letak.
- **Priority**: High

#### `MOB-002` — Portal home page loads in landscape mode
- **Precondition**: Halaman portal terbuka; rotasi otomatis diaktifkan.
- **Steps**:
  1. Putar orientasi emulator ke mode *Landscape*.
  2. Amati susunan kartu layanan dan *header*.
- **Expected Result**: Kartu layanan menyesuaikan lebar layar secara proporsional dan seluruh teks tetap terbaca jelas.
- **Priority**: Medium

---

### 2. Authentication & Security Gates on Mobile (`REQ-MOB-02`)

> **Catatan Arsitektur**: Sesuai `../PRD.md`, halaman utama Portal bersifat publik, sedangkan autentikasi diterapkan pada modul **Form Event / Meeting Room** (Google SSO), **Admin Panel** (PIN 6 digit), dan **UniFi Controller** (UniFi OS).

#### `MOB-003` — Google SSO redirect on protected service (`form` / `room`)
- **Precondition**: Pengguna belum login pada peramban mobile.
- **Steps**:
  1. Dari portal mobile, buka layanan **Form Event** (`https://form.ipekabsd.my.id`).
  2. Ketuk tombol **Masuk** atau **Booking Ruangan**.
- **Expected Result**: Pengguna diarahkan ke halaman autentikasi Google OAuth yang tampil responsif di layar mobile.
- **Priority**: High

#### `MOB-004` — Invalid Admin PIN rejection on mobile
- **Precondition**: Halaman login Admin pada **Booking Printer** (`https://book.ipekabsd.my.id`) atau **IT Events** (`https://desk.ipekabsd.my.id`) terbuka.
- **Steps**:
  1. Ketuk tautan **Admin** untuk membuka modal/halaman PIN.
  2. Masukkan PIN tidak valid (`000000` atau `123456`) lalu kirim.
- **Expected Result**: Sistem menolak akses dan menampilkan pesan kesalahan yang terbaca jelas tanpa memotong layar mobile.
- **Priority**: High

#### `MOB-005` — Empty login / PIN submission validation on mobile
- **Precondition**: Halaman login **UniFi OS** (`https://unifi.ipekabsd.my.id`) atau modal **Admin PIN** terbuka.
- **Steps**:
  1. Biarkan kolom kredensial/PIN kosong.
  2. Ketuk tombol masuk/submit.
- **Expected Result**: Tombol submit dinonaktifkan atau pesan validasi wajib tampil dengan jelas di layar mobile.
- **Priority**: Medium

#### `MOB-006` — Return to public view / session exit on mobile
- **Precondition**: Pengguna berada di halaman gerbang login layanan (`form`, `book`, atau `desk`).
- **Steps**:
  1. Ketuk tombol **Portal** atau navigasi kembali ke halaman publik layanan.
- **Expected Result**: Pengguna berhasil kembali ke tampilan publik tanpa *error* atau *redirect loop*.
- **Priority**: Medium

---

### 3. Navigation & Service Links (`REQ-MOB-03`)

#### `MOB-007` — Header & IT Call Center (`tel:1010`) interaction on mobile
- **Precondition**: Halaman utama portal terbuka di layar mobile.
- **Steps**:
  1. Periksa bagian *header* portal dan ketuk tombol **IT Call Center 1010**.
- **Expected Result**: Elemen *header* tidak bertumpuk (*overlap*) dan ketukan pada tombol memicu *dialer* telepon dengan nomor `1010`.
- **Priority**: High

#### `MOB-008` — Filter / Tab switching navigation on mobile
- **Precondition**: Halaman **Booking Printer** (`https://book.ipekabsd.my.id`) atau **Form Event** (`https://form.ipekabsd.my.id`) terbuka.
- **Steps**:
  1. Ketuk tab filter waktu (*Akan Datang*, *Sudah Lewat*, *Semua*).
- **Expected Result**: Tab berpindah secara aktif, indikator visual jelas, dan daftar menyesuaikan tanpa merusak tata letak.
- **Priority**: Medium

#### `MOB-009` — All 10 service card links navigation on mobile
- **Precondition**: Halaman utama portal terbuka.
- **Steps**:
  1. Gulir daftar kartu layanan dari atas ke bawah.
  2. Ketuk tombol **Buka** pada masing-masing kartu layanan.
- **Expected Result**: Seluruh 10 tautan membuka subdomain layanan yang tepat dengan HTTP 200.
- **Priority**: High

---

### 4. Service Pages Usability on Mobile (`REQ-MOB-04`)

#### `MOB-010` — Booking Printer Rapor page usable on mobile
- **Precondition**: Buka `https://book.ipekabsd.my.id`.
- **Steps**:
  1. Amati formulir *booking* (Nama, Jenjang, Kalender Tanggal, Sesi) dan legenda kalender.
- **Expected Result**: Formulir, dropdown jenjang, dan kalender tampil utuh serta mudah dioperasikan dengan sentuhan jari.
- **Priority**: Medium

#### `MOB-011` — Booking Meeting Room page usable on mobile
- **Precondition**: Buka `https://room.ipekabsd.my.id`.
- **Steps**:
  1. Amati struktur halaman, tombol Masuk/Booking, dan tabel jadwal ruangan.
- **Expected Result**: Kontrol utama dan informasi jadwal ruangan dapat dibaca dengan baik di layar mobile.
- **Priority**: Medium

#### `MOB-012` — Form Event page usable on mobile
- **Precondition**: Buka `https://form.ipekabsd.my.id`.
- **Steps**:
  1. Amati filter waktu dan tabel daftar kegiatan/peminjaman ruangan.
- **Expected Result**: Tombol filter dan tabel daftar kegiatan tampil rapi serta dapat digulir dengan nyaman.
- **Priority**: Medium

#### `MOB-013` — QR Generator page usable on mobile
- **Precondition**: Buka `https://qr.ipekabsd.my.id`.
- **Steps**:
  1. Pilih tipe konten (Tautan/Teks), isi contoh input, dan amati area pratinjau QR serta tombol unduh.
- **Expected Result**: Pratinjau QR Code ter-render secara proporsional di layar mobile dan tombol Unduh PNG/SVG mudah dijangkau.
- **Priority**: Low

#### `MOB-014` — Visitor Registration form usable on mobile
- **Precondition**: Buka `https://visit.ipekabsd.my.id` lalu pilih **Visitor** (dan uji tombol bahasa EN/ID).
- **Steps**:
  1. Amati dan isi data contoh (tanpa men-submit ke produksi) pada kolom Nama, Telepon/WhatsApp, Plat Kendaraan, dan Tujuan.
- **Expected Result**: Pengalihan bahasa EN/ID berfungsi dan seluruh kolom formulir dapat diisi tanpa kendala tata letak.
- **Priority**: Medium

---

### 5. Form Usability & Virtual Keyboard (`REQ-MOB-05`)

#### `MOB-015` — Virtual keyboard does not cover active input field
- **Precondition**: Halaman formulir (**Visitor** atau **Booking Printer**) terbuka di emulator.
- **Steps**:
  1. Ketuk kolom input teks di bagian tengah/bawah halaman.
  2. Amati kemunculan papan ketik virtual (*virtual keyboard*) Android.
- **Expected Result**: Halaman bergulir otomatis sehingga kolom input yang sedang diketik tetap terlihat di atas papan ketik.
- **Priority**: High

#### `MOB-016` — Long text & special character input handling on mobile
- **Precondition**: Kolom input teks pada **QR Generator** atau **Visitor Form** terbuka.
- **Steps**:
  1. Masukkan teks panjang (>100 karakter) dan karakter khusus sesuai `test-data.md`.
- **Expected Result**: Teks diterima atau dibatasi dengan rapi tanpa membuat kotak input melebar keluar dari layar (*layout break*).
- **Priority**: Medium

#### `MOB-017` — Mobile form required-field validation visibility
- **Precondition**: Halaman **Visitor Form** (`visit`) atau **Booking Printer** (`book`) terbuka.
- **Steps**:
  1. Biarkan kolom wajib kosong, lalu ketuk tombol Submit/Booking.
- **Expected Result**: Pesan validasi wajib tampil jelas di dekat kolom terkait dan langsung terlihat oleh pengguna mobile.
- **Priority**: Medium

---

### 6. Responsive Layout, Overflow Audit, & Touch Performance (`REQ-MOB-06`)

#### `MOB-018` — Horizontal scrolling & overflow audit across Portal and Services (including PRTG `inet`)
- **Precondition**: Buka Portal utama (`app`), Cuaca (`eco`), dan Internet Traffic (`inet`) pada viewport mobile.
- **Steps**:
  1. Periksa apakah terdapat pergeseran horizontal (*horizontal scroll*) yang tidak disengaja pada `app` dan `eco`.
  2. Buka `https://inet.ipekabsd.my.id` dan periksa apakah tabel sensor PRTG masih mengalami *overflow* (`608px` pada layar mobile, sesuai temuan desktop `DEF-005`).
- **Expected Result**: Portal utama tidak mengalami *horizontal scroll*; setiap *overflow* pada layanan spesifik (seperti tabel PRTG) tercatat secara presisi beserta selisih pikselnya.
- **Priority**: High

#### `MOB-019` — Touch targets size & spacing usability
- **Precondition**: Halaman portal dan layanan terbuka di emulator.
- **Steps**:
  1. Ketuk berbagai tombol aksi, tab filter, dan tautan navigasi menggunakan ukuran sentuhan standar.
- **Expected Result**: Jarak antar-tombol cukup renggang (tidak memicu salah ketuk / *mis-click*) dan merespons sentuhan pada ketukan pertama.
- **Priority**: Medium

#### `MOB-020` — Vertical page scroll & chart rendering smoothness
- **Precondition**: Halaman panjang seperti **Cuaca Real-Time** (`https://eco.ipekabsd.my.id` dengan 4 grafik SVG 24 jam) terbuka.
- **Steps**:
  1. Gulir halaman ke atas dan ke bawah melewati 4 grafik SVG.
- **Expected Result**: Pengguliran berjalan mulus tanpa *freeze* dan pengguliran halaman tidak terjebak di dalam kanvas grafik.
- **Priority**: Low

---

## Bagian 2: Requirement Traceability Matrix (RTM) Mobile — Standar MySkill 15 Kolom

> [!NOTE]
> **Status Saat Ini (`No Run`)**: Sesuai aturan SQA, seluruh 20 Test Case berstatus `Completed` pada kolom **Test Design**, namun berstatus **`No Run`** pada kolom eksekusi karena sengaja disiapkan untuk sesi pengujian langsung (*live testing*) bersama.

| Sno | Req ID | Req Desc | TC ID | TC Desc | Test Design | Test Designer | UAT Test Req? | Test Env | UAT Env | Prod Env | Defects? | Defect ID | Defect Status | Req Coverage Status |
| :-: | :--- | :--- | :--- | :--- | :---: | :---: | :-: | :---: | :---: | :---: | :-: | :---: | :---: | :---: |
| 1 | **REQ-MOB-01** | Akses Portal & Orientasi Layar Mobile | `MOB-001` | Pemuatan halaman utama portal pada mode Portrait | Completed | BT | Yes | N/A | N/A | No Run | None | None | N/A | **Prepared (No Run)** |
| 2 | **REQ-MOB-01** | Akses Portal & Orientasi Layar Mobile | `MOB-002` | Pemuatan halaman utama portal pada mode Landscape | Completed | BT | No | N/A | N/A | No Run | None | None | N/A | **Prepared (No Run)** |
| 3 | **REQ-MOB-02** | Gerbang Autentikasi Mobile (SSO, PIN, UniFi) | `MOB-003` | Pengalihan Google SSO pada layanan terproteksi (`form`/`room`) | Completed | BT | Yes | N/A | N/A | No Run | None | None | N/A | **Prepared (No Run)** |
| 4 | **REQ-MOB-02** | Gerbang Autentikasi Mobile (SSO, PIN, UniFi) | `MOB-004` | Penolakan PIN Admin tidak valid pada tampilan mobile | Completed | BT | No | N/A | N/A | No Run | None | None | N/A | **Prepared (No Run)** |
| 5 | **REQ-MOB-02** | Gerbang Autentikasi Mobile (SSO, PIN, UniFi) | `MOB-005` | Validasi input login/PIN kosong pada tampilan mobile | Completed | BT | No | N/A | N/A | No Run | None | None | N/A | **Prepared (No Run)** |
| 6 | **REQ-MOB-02** | Gerbang Autentikasi Mobile (SSO, PIN, UniFi) | `MOB-006` | Navigasi kembali dari gerbang login ke halaman publik/portal | Completed | BT | Yes | N/A | N/A | No Run | None | None | N/A | **Prepared (No Run)** |
| 7 | **REQ-MOB-03** | Navigasi Header, Tab, & 10 Kartu Layanan | `MOB-007` | Keterbacaan header & aksi tombol `tel:1010` di layar mobile | Completed | BT | Yes | N/A | N/A | No Run | None | None | N/A | **Prepared (No Run)** |
| 8 | **REQ-MOB-03** | Navigasi Header, Tab, & 10 Kartu Layanan | `MOB-008` | Perpindahan tab filter jadwal pada layar mobile | Completed | BT | Yes | N/A | N/A | No Run | None | None | N/A | **Prepared (No Run)** |
| 9 | **REQ-MOB-03** | Navigasi Header, Tab, & 10 Kartu Layanan | `MOB-009` | Navigasi seluruh 10 kartu layanan dari portal mobile | Completed | BT | Yes | N/A | N/A | No Run | None | None | N/A | **Prepared (No Run)** |
| 10 | **REQ-MOB-04** | Keterpakaian Halaman Layanan di Layar Mobile | `MOB-010` | Keterpakaian halaman Booking Printer Rapor di mobile | Completed | BT | Yes | N/A | N/A | No Run | None | None | N/A | **Prepared (No Run)** |
| 11 | **REQ-MOB-04** | Keterpakaian Halaman Layanan di Layar Mobile | `MOB-011` | Keterpakaian halaman Booking Meeting Room di mobile | Completed | BT | Yes | N/A | N/A | No Run | None | None | N/A | **Prepared (No Run)** |
| 12 | **REQ-MOB-04** | Keterpakaian Halaman Layanan di Layar Mobile | `MOB-012` | Keterpakaian halaman Form Event di mobile | Completed | BT | Yes | N/A | N/A | No Run | None | None | N/A | **Prepared (No Run)** |
| 13 | **REQ-MOB-04** | Keterpakaian Halaman Layanan di Layar Mobile | `MOB-013` | Keterpakaian halaman QR Generator di mobile | Completed | BT | Yes | N/A | N/A | No Run | None | None | N/A | **Prepared (No Run)** |
| 14 | **REQ-MOB-04** | Keterpakaian Halaman Layanan di Layar Mobile | `MOB-014` | Keterpakaian halaman Visitor Form & switch bahasa di mobile | Completed | BT | Yes | N/A | N/A | No Run | None | None | N/A | **Prepared (No Run)** |
| 15 | **REQ-MOB-05** | Keterpakaian Formulir & Papan Ketik Virtual | `MOB-015` | Input aktif tidak tertutup oleh *virtual keyboard* Android | Completed | BT | Yes | N/A | N/A | No Run | None | None | N/A | **Prepared (No Run)** |
| 16 | **REQ-MOB-05** | Keterpakaian Formulir & Papan Ketik Virtual | `MOB-016` | Penanganan input teks panjang & karakter khusus di mobile | Completed | BT | No | N/A | N/A | No Run | None | None | N/A | **Prepared (No Run)** |
| 17 | **REQ-MOB-05** | Keterpakaian Formulir & Papan Ketik Virtual | `MOB-017` | Keterbacaan pesan validasi field wajib di layar mobile | Completed | BT | Yes | N/A | N/A | No Run | None | None | N/A | **Prepared (No Run)** |
| 18 | **REQ-MOB-06** | Responsivitas, Touch Target, & Audit Overflow | `MOB-018` | Audit *horizontal scroll* pada Portal, Weather, dan tabel PRTG (`inet`) | Completed | BT | Yes | N/A | N/A | No Run | None | None | N/A | **Prepared (No Run)** |
| 19 | **REQ-MOB-06** | Responsivitas, Touch Target, & Audit Overflow | `MOB-019` | Ketepatan ukuran dan jarak *touch target* tombol/link | Completed | BT | Yes | N/A | N/A | No Run | None | None | N/A | **Prepared (No Run)** |
| 20 | **REQ-MOB-06** | Responsivitas, Touch Target, & Audit Overflow | `MOB-020` | Kelancaran *vertical scroll* pada halaman grafik Cuaca 24 jam | Completed | BT | No | N/A | N/A | No Run | None | None | N/A | **Prepared (No Run)** |
