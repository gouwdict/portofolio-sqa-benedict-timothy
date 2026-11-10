# Software Test Plan — Portal Aplikasi Internal IPEKA BSD (Iteration 2: Comprehensive Web, Cross-Browser & Mobile Pack)

| Atribut Dokumen | Detail |
| :--- | :--- |
| **Test Plan Identifier** | `TP-IPEKA-R2-V1.0` |
| **Standar Acuan** | ISO/IEC/IEEE 29119-3 & Pedoman QA MySkill |
| **Nama Proyek / SUT** | Portal Aplikasi Internal IPEKA BSD (`https://app.ipekabsd.my.id`) & 10 Subdomain Layanan |
| **Versi Dokumen** | 1.0 |
| **Tanggal Penyusunan** | 6 November 2026 (Cross-Browser Run: 9 Nov 2026; Audit: 10 Nov 2026) |
| **Penyusun & Analis QA** | Benedict Timothy |
| **Metode Pengujian** | **AI-Assisted Manual Testing & Playwright Cross-Browser Automation (Human-in-the-Loop)** |
| **Lingkungan Uji** | Live Internal Portal (Non-Admin Scope; Desktop & Mobile Viewport) |
| **Status Akhir** | **Web Functional Suite: 79 Passed, 37 Blocked (116 TC, 6 Bugs)** \| **Cross-Browser Smoke: 42/42 Passed** \| **Mobile Pack: 20 TC Prepared (Pending Live Execution)** |

---

## 1. Pendahuluan (*Introduction*)

### 1.1 Tujuan (*Purpose*)
Dokumen **Test Plan** ini menjadi acuan operasional untuk pengujian iterasi kedua (**Iteration 2**) pada **Portal Aplikasi Internal IPEKA BSD** yang mencakup 10 subdomain layanan operasional sekolah (termasuk tambahan modul *Booking Meeting Room* `room.ipekabsd.my.id`). Tujuan utamanya adalah:
1. Memverifikasi 49 kebutuhan bisnis dan teknis di `PRD.md` (`REQ-PORTAL-001` s.d. `REQ-SEC-003`) melalui 116 *Test Case* terstruktur.
2. Menjalankan verifikasi lintas-peramban (*Cross-Browser Smoke Testing*) pada **Chromium**, **Firefox**, dan **WebKit** (42 pemeriksaan).
3. Menyiapkan paket pengujian khusus perangkat bergerak (*Mobile Testing Pack* — 20 TC pada emulator Android Pixel 7) yang siap dieksekusi bersama.

### 1.2 Kejujuran & Transparansi Metodologi (*Human-in-the-Loop QA*)
Dalam proyek ini, peran manusia dan alat bantu dipisahkan secara tegas:
- **Peran QA Manual (Benedict Timothy)**: Menyusun spesifikasi `PRD.md` dari hasil *reverse-engineering* sistem, merancang 116 *Test Case* web + 20 *Test Case* mobile, membangun *Requirement Traceability Matrix (RTM)* 15 kolom, melakukan verifikasi manual terhadap perilaku halaman dan pembatasan akses (*auth guard*), serta mendokumentasikan 6 laporan *bug* (`BUG-001` s.d. `BUG-006`).
- **Peran AI & Otomasi (Playwright TypeScript Suite)**: Menjalankan regresi *smoke* lintas 3 mesin browser (`Chromium`, `Firefox`, `WebKit`), menangkap 39 *screenshot* bukti lintas-browser di folder `Evidence/`, dan menghasilkan laporan PDF (`SummaryReport.pdf`).

---

## 2. Deskripsi Proyek (*Project Description*)

- **Sistem yang Diuji (*SUT*)**: `https://app.ipekabsd.my.id` beserta 10 subdomain layanan (`book`, `form`, `room`, `draw`, `qr`, `visit`, `eco`, `unifi`, `inet`, `desk`).
- **Pengguna Target**: Staf IT, Guru, Staf Operasional, Siswa, Orang Tua, dan Tamu Eksternal.

---

## 3. Referensi (*References*)

1. **Product Requirements Document (PRD)**: `PRD.md` (49 kebutuhan fungsional, non-fungsional, dan keamanan).
2. **Requirement Traceability Matrix (RTM)**: `TraceabilityMatrix.md` & `TraceabilityMatrix.xlsx`.
3. **Daftar Test Case & Bug Report**: `TestCases.md` & `TestCases.xlsx`.
4. **Konfigurasi Lingkungan**: `EnvironmentConfig.md`.
5. **Paket Uji Mobile**: `Mobile_Testing/test-plan.md`, `Mobile_Testing/test-cases.md`, dan `Mobile_Testing/execution-report.md`.

---

## 4. Scope Pengujian (*Test Scope*)

### 4.1 Item Uji (*Test Items*)
1. **Portal Landing (`app`)**: 10 kartu layanan, link `tel:1010`, branding, footer, HTTPS.
2. **Booking Printer Rapor (`book`)**: Kalender ketersediaan, pilihan jenjang, sesi, filter jadwal, gerbang admin.
3. **Form Event (`form`)**: Google SSO redirect, filter tanggal, tabel kegiatan, gerbang admin.
4. **Booking Meeting Room (`room`)**: Google SSO redirect, tabel peminjaman ruangan, gerbang admin.
5. **Lucky Draw (`draw`)**: Judul event, status undian, hasil undian, gerbang admin.
6. **QR Generator (`qr`)**: 5 tipe konten, kustomisasi warna/margin/error correction/ukuran, pratinjau, riwayat lokal.
7. **Visit & School Tour (`visit`)**: Halaman bilingual EN/ID, status School Tour, validasi form Visitor.
8. **Weather (`eco`)**: Metrik cuaca real-time, toggle Imperial, 4 grafik 24 jam, keamanan API key.
9. **UniFi Controller (`unifi`)**: Antarmuka login UniFi OS.
10. **Internet Traffic (`inet`)**: Dashboard PRTG 3 sensor ISP, opsi auto-refresh, tampilan grafik/tabel.
11. **IT Events & Tasks (`desk`)**: Timeline H-1 s/d H+7, *empty state*, gerbang admin PIN.

### 4.2 Fitur yang Tidak Akan Diuji / Diblokir secara Sadar (*Out-of-Scope & Blocked Conditions*)
Sebanyak **37 dari 116 Test Case** ditandai **`Blocked`** secara jujur karena alasan tata kelola lingkungan produksi:
- **Membutuhkan Kredensial Google Sekolah (`@bsd.ipeka.sch.id`) atau PIN Admin 6 Digit**: Penguji eksternal/non-admin tidak memiliki akses kredensial internal sekolah.
- **Mencegah Polusi Data Produksi (*Write Operations*)**: Skenario pengiriman *booking* nyata ditahan agar tidak mengacaukan jadwal operasional sekolah.
- **Membutuhkan Alat Audit Khusus / Durasi Observasi Panjang**: Seperti *rate-limit brute-force* 10x PIN (`TC-AUTH-003`) yang berisiko mengunci akun admin sekolah jika dilakukan di produksi.

---

## 5. Strategi & Pendekatan Uji (*Test Strategy & Approach*)

- **Testing Quadrants**:
  - **Quadrant 1 (*Technology-Facing*)**: Pemeriksaan keamanan protokol HTTPS, absennya kebocoran API key di sisi klien (`TC-WEATHER-008`), dan pengalihan OAuth Google.
  - **Quadrant 2 (*Business-Facing*)**: Pengujian fungsional 11 modul menggunakan teknik *Equivalence Partitioning* dan *Boundary Value Analysis*.
  - **Quadrant 3 (*Exploratory & Critique Product*)**: Identifikasi ketidaksesuaian antara deskripsi kartu portal dan implementasi nyata (`BUG-001` School Tour nonaktif, `BUG-002` HelpDesk hanya menampilkan timeline tanpa form tiket).
  - **Quadrant 4 (*Cross-Browser & Mobile Compatibility*)**: Eksekusi matriks `Chromium`, `Firefox`, dan `WebKit` serta persiapan suite *Mobile Testing* pada Android 14 (Pixel 7).
- **Prioritas Kasus Uji**:
  - **High (55 TC)**: Keterjangkauan 11 domain, autentikasi SSO/PIN, validasi form wajib, dan fungsi inti tiap modul.
  - **Medium (45 TC)**: Filter tabel, kustomisasi tampilan, responsivitas, dan performa.
  - **Low (16 TC)**: Tautan kembali ke portal, *footer*, dan elemen kosmetik.

---

## 6. Kriteria Keputusan Uji (*Test Criteria*)

- **Entry Criteria**: Seluruh 11 URL (`app` + 10 subdomain) merespons HTTP 200; dokumen `PRD.md` dan `TestCases.xlsx` telah siap.
- **Suspension Criteria**: Gangguan server mayor pada domain `*.ipekabsd.my.id`.
- **Exit Criteria**: 100% Test Case yang tidak memerlukan kredensial rahasia/transaksi destruktif telah dieksekusi (`79/79 Passed`), seluruh 37 kasus yang terhalang kredensial/lingkungan telah didokumentasikan alasannya secara transparan (`Blocked`), *Cross-Browser Smoke* mencapai `42/42 Passed`, dan seluruh temuan *bug* tercatat di `TestCases.md`.

---

## 7. Tugas & Tanggung Jawab (*Tasks & Responsibilities*)

| Peran | PIC | Tanggung Jawab |
| :--- | :--- | :--- |
| **QA Lead / Manual Tester** | Benedict Timothy | Menyusun PRD, Test Plan, 116 Web TC, 20 Mobile TC, RTM, eksekusi manual, dan pelaporan 6 bug. |
| **Automation Engineer (AI-Assisted)** | Benedict Timothy + Playwright | Membangun 14 file `.spec.ts` di folder `Automation/tests/` dan mengeksekusi *cross-browser smoke* di 3 browser. |

---

## 8. Jadwal & Estimasi Pengujian (*Test Schedule & Estimation*)

Menggunakan **Bottom-Up Estimation**:
- Penyusunan `PRD.md`, `TestPlan.md`, `TestCases.md` (116 TC), & `TraceabilityMatrix.md`: **90 menit** (6 Nov 2026)
- Eksekusi Manual (AI-Assisted) 116 TC & Dokumentasi 6 Bug: **90 menit** (6 Nov 2026)
- Pengembangan Suite Playwright & Eksekusi Cross-Browser (`Chromium`, `Firefox`, `WebKit`): **60 menit** (6–9 Nov 2026)
- Penyusunan *Mobile Testing Pack* (`MOB-001` s.d. `MOB-020`): **45 menit** (9–10 Nov 2026)

---

## 9. Kebutuhan Sumber Daya & Lingkungan (*Environment & Resource Needs*)

- **Desktop Browsers**: Chromium, Mozilla Firefox, dan WebKit (`1366×768`).
- **Mobile Environment (Prepared)**: Android Emulator Pixel 7 (Android 14 / API 34, Chrome Mobile `1080×2400` / CSS viewport `412×915` & `375×667`).
- **Automation Stack**: Node.js, TypeScript, `@playwright/test`.

---

## 10. Risiko dan Mitigasi (*Risks & Mitigation*)

| ID Risiko | Risiko | Dampak | Mitigasi |
| :--- | :--- | :---: | :--- |
| `RSK-R2-01` | Ketiadaan akun Google `@bsd.ipeka.sch.id` dan PIN admin membatasi pengujian *end-to-end* form internal | High | Pisahkan secara tegas status `Blocked (Requires School Credentials / Prod Write Guard)` dari status `Passed` agar laporan tetap jujur dan dapat diaudit. |
| `RSK-R2-02` | Perubahan dinamis pada *selector* antarmuka menyebabkan kegagalan skrip otomatis penuh | Medium | Gunakan *smoke suite* (`portal.spec.ts` & `links.spec.ts`) untuk *gate* lintas-browser dan tandai skrip terautentikasi dengan `test.skip`. |

---

## 11. Keluaran Pengujian (*Test Deliverables*)

1. `PRD.md` & `TestPlan.md` (Dokumen ini)
2. `TraceabilityMatrix.md` & `TraceabilityMatrix.xlsx` (Standar 15 Kolom MySkill)
3. `TestCases.md` & `TestCases.xlsx` (116 TC + 6 Bug Reports)
4. `SummaryReport.html` & `SummaryReport.pdf`
5. `Automation/` (14 file spesifikasi Playwright) & `Evidence/` (39 *screenshot* lintas-browser)
6. `Mobile_Testing/` (Paket lengkap rencana, data, matriks perangkat, dan 20 *test case* mobile siap uji)
