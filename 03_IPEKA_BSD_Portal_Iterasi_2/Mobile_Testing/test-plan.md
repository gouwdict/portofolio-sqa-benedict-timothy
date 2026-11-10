# Software Test Plan — Mobile Web Testing (IPEKA BSD Internal Portal)

| Atribut Dokumen | Detail |
| :--- | :--- |
| **Test Plan Identifier** | `TP-IPEKA-MOB-V1.0` |
| **Standar Acuan** | ISO/IEC/IEEE 29119-3 & Pedoman QA MySkill |
| **Nama Proyek / SUT** | Portal Internal IPEKA BSD (`https://app.ipekabsd.my.id/`) & 10 Subdomain Layanan |
| **Versi Dokumen** | 1.0 (Prepared & Audited for Joint Execution) |
| **Tanggal Penyusunan** | 9 November 2026 (Diperbarui: 10 November 2026) |
| **Penyusun (Test Designer)** | Benedict Timothy |
| **Metode Pengujian** | **Manual Mobile Web Testing (Human-in-the-Loop / AI-Assisted Design)** |
| **Lingkungan Target** | Android Emulator Pixel 7 (Android 14 / API 34) — Google Chrome Mobile |
| **Status Paket Uji** | **Ready for Execution — 20 Test Cases Designed (`MOB-001` s.d. `MOB-020`)** |

---

## 1. Pendahuluan (*Introduction*)

### 1.1 Tujuan (*Purpose*)
Dokumen **Mobile Test Plan** ini mendefinisikan ruang lingkup, strategi, kriteria kelulusan, dan jadwal untuk menguji antarmuka web **Portal Aplikasi Internal IPEKA BSD** pada layar perangkat bergerak (*mobile browser*). Mengingat mayoritas guru, staf, orang tua, dan tamu sekolah mengakses layanan seperti **Visit & School Tour**, **QR Generator**, **Cuaca**, dan **Booking** melalui ponsel pintar, pengujian ini memastikan tidak terjadi *horizontal overflow*, elemen saling tumpang-tindih (*overlapping*), atau tombol yang gagal disentuh (*touch target issue*).

---

## 2. Deskripsi Proyek (*Project Description*)

- **Sistem yang Diuji (*SUT*)**: Aplikasi Web Portal IPEKA BSD (`https://app.ipekabsd.my.id/`) dan 10 layanan terhubung.
- **Karakteristik Autentikasi Sistem (Sesuai `../PRD.md`)**:
  - Halaman utama Portal (`app`), Visit (`visit`), QR (`qr`), Weather (`eco`), dan PRTG (`inet`) dapat diakses publik tanpa login awal.
  - Layanan Form Event (`form`) dan Meeting Room (`room`) menggunakan pengalihan **Google Workspace SSO**.
  - Panel Admin (`book`, `draw`, `desk`) menggunakan **PIN 6 digit**, sedangkan UniFi (`unifi`) menggunakan login **UniFi OS**.

---

## 3. Referensi (*References*)

1. **PRD & Test Plan Utama**: `../PRD.md` & `../TestPlan.md`.
2. **Matriks Perangkat Mobile**: `device-matrix.md`.
3. **Data Uji Mobile**: `test-data.md`.
4. **Skenario Uji & RTM Mobile**: `test-cases.md`.

---

## 4. Scope Pengujian (*Test Scope*)

### 4.1 Fitur yang Akan Diuji (*In-Scope — 20 Test Cases*)

| Req ID | Area Pengujian Mobile | TC ID Terkait | Fokus Verifikasi |
| :--- | :--- | :--- | :--- |
| `REQ-MOB-01` | Akses Portal & Orientasi Layar | `MOB-001`, `MOB-002` | Pemuatan halaman utama pada mode *Portrait* dan *Landscape* tanpa kerusakan tata letak |
| `REQ-MOB-02` | Gerbang Autentikasi Mobile (SSO, PIN, & UniFi) | `MOB-003`, `MOB-004`, `MOB-005`, `MOB-006` | Tampilan pengalihan Google SSO, validasi input PIN admin salah/kosong, dan form login UniFi OS di layar ponsel |
| `REQ-MOB-03` | Navigasi Kartu & Header Layanan | `MOB-007`, `MOB-008`, `MOB-009` | Keterbacaan *header/call center*, *tap* kartu layanan, dan tombol kembali ke Portal |
| `REQ-MOB-04` | Keterpakaian Halaman Layanan (*Service Pages*) | `MOB-010` s.d. `MOB-014` | Tampilan mobile pada Booking Printer, Meeting Room, Form Event, QR Generator, dan Visitor Form |
| `REQ-MOB-05` | Keterpakaian Formulir & Keyboard Virtual | `MOB-015`, `MOB-016`, `MOB-017` | Input tidak tertutup *virtual keyboard*, penanganan teks panjang, dan keterbacaan pesan validasi |
| `REQ-MOB-06` | Responsivitas, Touch Target, & Audit Overflow | `MOB-018`, `MOB-019`, `MOB-020` | Absennya *horizontal scroll* di portal, pemeriksaan *overflow* tabel PRTG (`inet`), ukuran area sentuh tombol, dan kelancaran *scroll* |

### 4.2 Fitur yang Tidak Akan Diuji (*Out-of-Scope*)
- Aplikasi *mobile native* (`.apk` / `.ipa`) — karena sistem berbasis *mobile web*.
- Pengiriman transaksi *booking* nyata ke database produksi sekolah.
- Pengujian beban (*load testing*) dan uji penetrasi keamanan mendalam.

---

## 5. Strategi & Pendekatan Uji (*Test Strategy & Approach*)

- **Testing Quadrants**:
  - **Quadrant 2 (*Business-Facing Functional/UI*)**: Verifikasi keterpakaian formulir dan navigasi antar-layanan di layar kecil.
  - **Quadrant 3 (*Exploratory Mobile Usability*)**: Eksplorasi orientasi layar (*portrait/landscape*), interaksi *touch*, dan kemunculan *virtual keyboard*.
  - **Quadrant 4 (*Device/Viewport Compatibility*)**: Pengukuran *horizontal overflow* (`clientWidth` vs `scrollWidth`) pada setiap subdomain.
- **Prioritas Kasus Uji**:
  - **High (7 TC)**: `MOB-001`, `MOB-003`, `MOB-004`, `MOB-007`, `MOB-009`, `MOB-015`, `MOB-018`.
  - **Medium (11 TC)**: `MOB-002`, `MOB-005`, `MOB-006`, `MOB-008`, `MOB-010`..`MOB-012`, `MOB-014`, `MOB-016`, `MOB-017`, `MOB-019`.
  - **Low (2 TC)**: `MOB-013`, `MOB-020`.

---

## 6. Kriteria Keputusan Uji (*Test Criteria*)

- **Entry Criteria**: Emulator Android Pixel 7 (API 34) atau emulasi *mobile viewport* Chrome siap dijalankan; URL `https://app.ipekabsd.my.id/` merespons HTTP 200; seluruh 20 TC di `test-cases.md` siap.
- **Suspension Criteria**: Emulator mengalami *crash* atau layanan portal tidak dapat diakses.
- **Exit Criteria**: Seluruh 20 TC (`MOB-001` s.d. `MOB-020`) telah dieksekusi, bukti *screenshot* tersimpan di `evidence/pixel7-chrome/`, *defect* tercatat di `bug-reports.md`, dan `execution-report.md` diperbarui.

---

## 7. Tugas & Tanggung Jawab (*Tasks & Responsibilities*)

| Peran | PIC | Tanggung Jawab |
| :--- | :--- | :--- |
| **Manual QA Tester** | Benedict Timothy | Merancang skenario, menjalankan pengujian interaktif pada emulator, mengambil *screenshot*, dan mencatat *bug*. |
| **AI QA Assistant** | Agentic Assistant | Membantu penyiapan struktur artefak, validasi konsistensi RTM, dan pendampingan saat sesi *live testing*. |

---

## 8. Jadwal & Estimasi Pengujian (*Test Schedule & Estimation*)

Menggunakan **Bottom-Up Estimation**:
- Persiapan Test Plan, Device Matrix, Test Data, & 20 Test Cases: **45 menit** *(Selesai — 10 Nov 2026)*
- Eksekusi 20 Test Cases pada Emulator Pixel 7 & Pengambilan Screenshot: **35 menit** *(Dijadwalkan pada sesi Live Testing)*
- Pencatatan Bug & Finalisasi `execution-report.md`: **15 menit** *(Dijadwalkan pada sesi Live Testing)*
- **Total Estimasi**: **95 menit**.

---

## 9. Kebutuhan Sumber Daya & Lingkungan (*Environment & Resource Needs*)

- **Host OS**: Windows 11
- **Emulator Target**: Google Pixel 7 (Android 14 / API 34, resolusi fisik `1080×2400`, *CSS viewport* `412×915`)
- **Browser**: Google Chrome Mobile
- **Folder Bukti**: `evidence/pixel7-chrome/` & `evidence/logs/`

---

## 10. Risiko dan Mitigasi (*Risks & Mitigation*)

| ID Risiko | Risiko | Dampak | Mitigasi |
| :--- | :--- | :---: | :--- |
| `RSK-MOB-01` | Kinerja emulator Android lambat saat memuat grafik SVG cuaca/PRTG | Medium | Tunggu hingga indikator *loading* selesai sebelum mengambil *screenshot* atau menilai responsivitas *scroll*. |
| `RSK-MOB-02` | Tidak tersedianya akun Google `@bsd.ipeka.sch.id` pada emulator | Medium | Pada `MOB-003` dan `MOB-006`, verifikasi difokuskan pada keberhasilan pengalihan (*redirect*) ke halaman login Google SSO dan kembali ke halaman publik. |

---

## 11. Keluaran Pengujian (*Test Deliverables*)

1. `test-plan.md` (Dokumen ini)
2. `device-matrix.md`
3. `test-data.md`
4. `test-cases.md` (20 TC + Tabel RTM Mobile 15 Kolom)
5. `execution-report.md`
6. `bug-reports.md`
