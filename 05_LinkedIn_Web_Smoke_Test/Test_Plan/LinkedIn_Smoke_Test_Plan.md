# Software Test Plan — LinkedIn Web Smoke Testing

| Atribut Dokumen | Detail |
| :--- | :--- |
| **Test Plan Identifier** | `TP-LNKD-SMOKE-V1.1` |
| **Standar Acuan** | ISO/IEC/IEEE 29119-3 (pengganti IEEE 829) & Pedoman QA MySkill |
| **Nama Proyek / SUT** | LinkedIn Web Application (`https://www.linkedin.com`) |
| **Versi Dokumen** | 1.1 (Audited & Redacted for Portfolio) |
| **Tanggal Penyusunan** | 5 November 2026 (Diperbarui: 10 November 2026) |
| **Penyusun (Test Designer)** | Benedict Timothy |
| **Eksekutor (Tester)** | Benedict Timothy |
| **Metode Eksekusi** | **AI-Assisted Manual Testing (Human-in-the-Loop)**: Desain skenario, verifikasi *test oracle*, dan uji interaktif oleh QA Manual; akselerasi navigasi & pengumpulan bukti dibantu Playwright MCP |
| **Lingkungan Uji** | Production Web Desktop (Controlled Smoke Account) |
| **Status Akhir** | **Completed — 32/32 Test Cases Passed** (0 Failed, 0 Blocked, 0 No Run) |

---

## 1. Pendahuluan (*Introduction*)

### 1.1 Tujuan (*Purpose*)
Dokumen **Test Plan** ini menjadi acuan operasional (*anchor*) untuk memverifikasi jalur fungsional paling kritikal (*critical user journeys*) pada aplikasi web **LinkedIn** melalui pengujian *Smoke Testing* berdurasi singkat (30–45 menit). Pengujian ini bertujuan mendeteksi regresi fungsional mayor pada fitur inti (autentikasi, *home feed*, pencarian, profil, jaringan koneksi, lowongan kerja, perpesanan, notifikasi, dan navigasi global) sebelum dilakukan pengujian fungsional mendalam.

### 1.2 Manfaat & Transparansi Metodologi (*Human-in-the-Loop QA*)
Untuk menjaga integritas dan transparansi rekayasa kualitas:
- **Peran QA Manual (Benedict Timothy)**: Merancang *Test Plan*, menurunkan *Requirement* ke *Test Case* dan *Requirement Traceability Matrix (RTM)*, menentukan *Equivalence Partitioning* pada autentikasi, mengeksekusi langsung skenario interaktif yang membutuhkan penanganan khusus (`FEED-002`, `FEED-005`, `SEARCH-004`, `PROFILE-003`, `NETWORK-002`, `JOBS-004`, `MSG-003`, `NOTIF-002`), melakukan *clean-up* data uji, serta memvalidasi seluruh *Actual Result* terhadap *Expected Result*.
- **Peran AI & Alat Bantu (Playwright MCP)**: Membantu otomasi navigasi dasar pada 24 skenario *smoke* awal serta mengambil tangkapan layar (*screenshot*) secara konsisten.

---

## 2. Deskripsi Proyek (*Project Description*)

- **Klien / Konteks Proyek**: Studi Kasus Portofolio Software Quality Assurance (SQA) — Pengujian Aplikasi Sosial Profesional Skala Produksi.
- **Sistem yang Diuji (*System Under Test / SUT*)**: Aplikasi Web LinkedIn (`https://www.linkedin.com`).
- **Tanggal Pelaksanaan**: 5 November 2026.

---

## 3. Referensi (*References*)

1. **ISO/IEC/IEEE 29119-3:2021** — *Software and systems engineering — Software testing — Part 3: Test documentation*.
2. **ISO/IEC 25010:2023** — *Systems and software Quality Requirements and Evaluation (SQuaRE) — Product quality model* (fokus pada *Functional Suitability* dan *Usability/Operability*).
3. **Requirement Traceability Matrix (RTM)**: `RTM_LinkedIn_Smoke.md` dan sheet `RTM` pada `LinkedIn_Smoke_Test_Cases.xlsx`.
4. **Dokumen Pendamping Eksekusi Manual**: `Manual_Followup_Blocked_TC.md`.

---

## 4. Scope Pengujian (*Test Scope*)

### 4.1 Item Uji (*Test Items*)
9 modul antarmuka pengguna utama pada aplikasi web desktop LinkedIn:
1. Modul Autentikasi (`AUTH`)
2. Modul Beranda / *Home Feed* (`FEED`)
3. Modul Pencarian Global (`SEARCH`)
4. Modul Profil Pengguna (`PROFILE`)
5. Modul Jaringan / *My Network* (`NETWORK`)
6. Modul Lowongan Kerja / *Jobs* (`JOBS`)
7. Modul Perpesanan / *Messaging* (`MSG`)
8. Modul Notifikasi (`NOTIF`)
9. Modul Navigasi Global & Responsivitas Dasar (`NAV`)

### 4.2 Fitur yang Akan Diuji (*Features to be Tested — In-Scope*)

| Req ID | Modul | Fitur yang Diuji | Pendekatan Uji |
| :--- | :--- | :--- | :--- |
| `REQ-LNKD-01` | Autentikasi (`AUTH`) | Login valid, login password salah, login email kosong, dan Logout | Positive & Negative Functional (*Equivalence Partitioning*) |
| `REQ-LNKD-02` | Home Feed (`FEED`) | Pemuatan feed, *infinite scroll*, buat post teks, *like/reaction*, komentar, dan hapus post | End-to-End CRUD Smoke & Cleanup |
| `REQ-LNKD-03` | Pencarian (`SEARCH`) | Pencarian *People*, *Jobs*, *Companies*, dan penerapan filter lokasi | Functional Query & Filter Verification |
| `REQ-LNKD-04` | Profil (`PROFILE`) | Lihat profil sendiri, lihat profil koneksi/orang lain, dan edit *headline* | Functional View & Update Verification |
| `REQ-LNKD-05` | Network (`NETWORK`) | Pemuatan halaman *My Network*, kirim permintaan koneksi, dan lihat daftar koneksi | Functional State Transition (`Connect` -> `Pending`) |
| `REQ-LNKD-06` | Jobs (`JOBS`) | Pemuatan halaman *Jobs*, pencarian lowongan, lihat detail lowongan, dan simpan lowongan (*Save*) | Functional Flow Verification |
| `REQ-LNKD-07` | Messaging (`MSG`) | Pemuatan halaman *Messaging*, buka *thread* percakapan, dan kirim pesan uji | Interactive Functional Verification |
| `REQ-LNKD-08` | Notifications (`NOTIF`) | Pemuatan daftar notifikasi dan navigasi ke konten terkait saat notifikasi diklik | Functional Routing Verification |
| `REQ-LNKD-09` | Navigasi Global (`NAV`) | Tautan *top bar*, *dropdown* menu "Me", dan responsivitas tata letak pada lebar `1024px` | UI Navigation & Viewport Resize Check |

### 4.3 Fitur yang Tidak Akan Diuji (*Features Not to be Tested — Out-of-Scope*)

| Fitur yang Dikecualikan | Alasan Pengecualian (*Justification*) |
| :--- | :--- |
| Pengujian Beban (*Load/Stress Testing*) & Penetrasi Keamanan (*Pentest*) | Target adalah sistem produksi publik milik pihak ketiga; pengiriman trafik masal atau eksploitasi keamanan melanggar *Terms of Service* dan etika pengujian. |
| Fitur Berbayar (*LinkedIn Premium, Recruiter, Sales Navigator, Learning*) | Membutuhkan lisensi berbayar khusus di luar cakupan akun uji standar. |
| Aplikasi Mobile Native (Android/iOS APK/IPA) | Scope proyek ini dibatasi pada *Web Desktop Application*. |
| Validasi Algoritma Rekomendasi & Iklan (*Ads*) | Konten iklan dan algoritma *feed* bersifat dinamis/non-deterministik dari sisi server. |

---

## 5. Strategi & Pendekatan Uji (*Test Strategy & Approach*)

### 5.1 Jenis & Teknik Pengujian
1. **Smoke & Sanity Testing**: Memastikan seluruh jalur utama (P1/P2) berjalan normal tanpa *crash* atau *blocker*.
2. **Black-Box — Equivalence Partitioning (EP)**: Diterapkan pada modul `AUTH` (partisi kredensial valid, password salah, dan field kosong).
3. **State-Transition & Cleanup Testing**: Diterapkan pada aksi tulis (*write operations*) di lingkungan produksi (`FEED-003` -> `FEED-006` pembuatan lalu penghapusan post; `FEED-005` pembuatan lalu penghapusan komentar) agar tidak meninggalkan sampah data (*data pollution*).

### 5.2 Pemetaan *Testing Quadrants*
- **Quadrant 2 (*Business-Facing, Critique Product*)**: Verifikasi alur bisnis sosial profesional (pencarian kerja, koneksi, perpesanan, *feed*).
- **Quadrant 3 (*Business-Facing, Manual/Exploratory*)**: Tindak lanjut manual (*human-in-the-loop*) pada komponen UI kaya (*rich-text editor* komentar dan *messaging*) yang memblokir sintesis *event* otomatis.
- **Quadrant 4 (*Technology-Facing, Critique Product*)**: Verifikasi responsivitas *viewport* (`NAV-003`) dan absennya *error* konsol/jaringan yang memblokir.

### 5.3 Prioritas Kasus Uji (*Test Case Prioritization*)
- **Risk-Based (P1 — 19 TC)**: Fitur yang jika gagal langsung menghalangi pengguna memakai aplikasi (Login/Logout, buka Feed, buat Post, Search People/Jobs, lihat Profil, buka Network/Jobs/Messaging/Notifications).
- **Usage-Based (P2 — 12 TC)**: Fitur interaksi harian penting (*Infinite scroll*, *Like*, Komentar, Hapus post, Filter lokasi, Edit headline, Simpan lowongan, Dropdown Me).
- **Output/UI-Based (P3 — 1 TC)**: Responsivitas *top bar* pada lebar `1024px`.

### 5.4 Alat Uji (*Testing Tools*)
- **Browser**: Chromium / Google Chrome (Desktop `1366x768` & `1024x768`).
- **Pendukung Eksekusi & Bukti**: Playwright MCP (untuk akselerasi *smoke* & *screenshot*) + Chrome DevTools.
- **Manajemen Dokumen & RTM**: Markdown & Microsoft Excel (`LinkedIn_Smoke_Test_Cases.xlsx`).

---

## 6. Kriteria Keputusan Uji (*Test Criteria*)

### 6.1 Entry Criteria (Kriteria Masuk)
1. Aplikasi `https://www.linkedin.com` dapat diakses (HTTP 200) dari jaringan pengujian.
2. Akun uji khusus tersedia, aktif, tidak terkena pembatasan (*restriction*), dan kredensial dimuat dari penyimpanan lokal yang aman (bukan *hardcoded* di repositori publik).
3. Skenario uji (32 TC) dan *Requirement Traceability Matrix (RTM)* telah siap.

### 6.2 Suspension Criteria (Kriteria Penangguhan)
1. Akun uji terkunci sementara (*rate-limited* / *CAPTCHA security challenge* dari LinkedIn) — sesuai aturan etika QA, tantangan anti-bot tidak boleh di-*bypass* secara paksa; pengujian dihentikan sementara hingga diverifikasi manual oleh pemilik akun.
2. Gangguan layanan (*outage* HTTP 5xx) pada domain `linkedin.com`.

### 6.3 Exit Criteria (Kriteria Keluar)
1. **100% Test Case prioritas P1 dan P2** telah dieksekusi.
2. Tingkat kelulusan (*Pass Rate*) mencapai $\ge 95\%$ dengan **$0$ Critical/High Defect** yang masih terbuka.
3. Seluruh data uji sementara (post teks uji & komentar uji) telah dibersihkan kembali (*cleanup verified*).
4. Bukti tangkapan layar (*screenshots*), *Test Execution Log*, dan *RTM* telah lengkap.

### 6.4 Pass/Fail Criteria per Test Case
- **Pass**: *Actual Result* sesuai dengan *Expected Result* dan tidak ada error UI/jaringan yang memblokir alur pengguna.
- **Fail**: Fitur tidak berfungsi sesuai *Expected Result*, muncul pesan error yang salah, atau layout rusak parah.
- **Blocked**: Skenario tidak dapat dieksekusi karena prasyarat gagal atau batasan alat (wajib ditindaklanjuti secara manual jika hanya terblokir oleh sintesis alat otomasi).

---

## 7. Tugas & Tanggung Jawab (*Tasks & Responsibilities*)

| Peran | Penanggung Jawab (PIC) | Tanggung Jawab Utama |
| :--- | :--- | :--- |
| **QA Lead / Test Designer** | Benedict Timothy | Menyusun *Test Plan*, mendefinisikan 9 *Requirement*, merancang 32 *Test Case*, dan menyusun RTM. |
| **Manual QA Tester (Human-in-the-Loop)** | Benedict Timothy | Menjalankan verifikasi manual pada skenario interaktif, memvalidasi seluruh bukti uji, dan membersihkan data uji. |
| **AI Assistant (Playwright MCP)** | Agentic QA Assistant | Membantu navigasi awal, pengambilan 23 *screenshot* bukti, dan *scaffolding* tabel laporan. |

---

## 8. Jadwal & Estimasi Pengujian (*Test Schedule & Estimation*)

Metode estimasi menggunakan kombinasi **Bottom-Up Estimation** (menjumlahkan durasi per tahap aktivitas) dan **Expert Judgment**:

| Tahap Aktivitas | Metode Eksekusi | Estimasi Waktu | Waktu Aktual | Tanggal |
| :--- | :--- | :---: | :---: | :---: |
| 1. Penyusunan Test Plan, Test Cases (32 TC), & RTM | Manual (Human QA) | 30 menit | 30 menit | 2026-11-05 |
| 2. Persiapan Environment & Login Akun Uji | Manual + AI-Assisted | 5 menit | 5 menit | 2026-11-05 |
| 3. Eksekusi Siklus 1 (24 TC via Playwright MCP) | AI-Assisted | 15 menit | 15 menit | 2026-11-05 |
| 4. Eksekusi Siklus 2 / Follow-up Manual (8 TC Interaktif) | Manual (Human QA) | 15 menit | 15 menit | 2026-11-05 |
| 5. Cleanup Data Uji & Finalisasi Laporan/RTM | Manual (Human QA) | 10 menit | 10 menit | 2026-11-05 |
| **Total Durasi Siklus** | — | **75 menit** | **75 menit** | **Selesai** |

---

## 9. Kebutuhan Sumber Daya & Lingkungan (*Environment & Resource Needs*)

### 9.1 Spesifikasi Lingkungan Uji
- **Sistem Operasi**: Windows 11 (64-bit)
- **Browser**: Google Chrome / Chromium (versi terbaru)
- **Resolusi Viewport**: `1366×768` (standar desktop) dan `1024×768` (uji responsivitas `NAV-003`)
- **Jaringan**: Koneksi broadband stabil ($\ge 10\text{ Mbps}$)

### 9.2 Data Uji (*Test Data — Redacted for Security*)

> [!IMPORTANT]
> **Kebijakan Keamanan Data Uji (SQA Best Practice)**: Sesuai prinsip *Secret Management*, alamat email dan kata sandi akun uji **telah disensor (*redacted*)** dari dokumen portofolio ini dan dari file Excel pendamping. Saat eksekusi berlangsung, kredensial disuplai dari variabel lingkungan lokal yang tidak di-*commit* ke repositori publik.

| Field | Value |
| :--- | :--- |
| **Email Akun Uji** | `[REDACTED_EMAIL]` *(disimpan di local environment variable `LNKD_TEST_EMAIL`)* |
| **Password Akun Uji** | `[REDACTED_PASSWORD]` *(disimpan di local environment variable `LNKD_TEST_PASS`)* |
| **Nama Akun** | Akun Uji QA Dedicated (Benedict Timothy) |
| **Keyword Pencarian People** | `"Software Engineer"` |
| **Keyword Pencarian Jobs** | `"QA Engineer"` + Lokasi `"Indonesia"` |
| **Keyword Pencarian Companies** | `"Google"` / perusahaan teknologi |
| **Teks Post / Komentar / Pesan Uji** | `"Smoke test message - ignore"` *(dihapus kembali setelah verifikasi)* |

---

## 10. Risiko dan Mitigasi (*Risks & Mitigation*)

| ID Risiko | Deskripsi Risiko | Dampak | Rencana Mitigasi |
| :--- | :--- | :---: | :--- |
| `RSK-LNKD-01` | Akun uji terkena *rate limit* atau *security challenge* karena aktivitas berulang | High | Gunakan kecepatan interaksi manusiawi; jangan pernah mencoba mem-*bypass* CAPTCHA secara otomatis. |
| `RSK-LNKD-02` | Pengujian di lingkungan *Production* mengotori *feed* atau koneksi nyata | Medium | Gunakan teks eksplisit `"Smoke test"` dan jalankan langkah *cleanup* (`FEED-006` hapus post & hapus komentar) segera setelah verifikasi. |
| `RSK-LNKD-03` | Komponen *rich-text editor* LinkedIn (Quill/ProseMirror) menolak *event* ketikan otomatis pada komentar & pesan | Medium | Alihkan eksekusi `FEED-005` dan `MSG-003` ke eksekusi manual langsung oleh tester (didokumentasikan di `Manual_Followup_Blocked_TC.md`). |
| `RSK-LNKD-04` | Kebocoran kredensial pada dokumen laporan yang dibagikan ke pihak eksternal | Critical | Terapkan *redaction* (`[REDACTED]`) pada seluruh dokumen `.md` dan `.xlsx` sebelum rilis portofolio. |

---

## 11. Keluaran Pengujian (*Test Deliverables*)

1. **Software Test Plan**: `LinkedIn_Smoke_Test_Plan.md` (dokumen ini).
2. **Requirement Traceability Matrix (RTM)**: `RTM_LinkedIn_Smoke.md` & sheet `RTM` di `LinkedIn_Smoke_Test_Cases.xlsx`.
3. **Test Cases & Execution Workbook**: `LinkedIn_Smoke_Test_Cases.xlsx`.
4. **Panduan & Bukti Follow-up Manual**: `Manual_Followup_Blocked_TC.md`.
5. **Bukti Tangkapan Layar (*Evidence*)**: 23 file PNG di folder `../screenshots/`.

---

## 12. Rincian Test Cases & Log Eksekusi (32 Test Cases)

### 12.1 Daftar Skenario per Modul

#### A. Autentikasi (`AUTH` — `REQ-LNKD-01`)
| TC ID | Skenario | Pre-condition | Langkah Uji | Expected Result | Priority | Mode Eksekusi |
| :--- | :--- | :--- | :--- | :--- | :---: | :--- |
| `AUTH-001` | Login dengan kredensial valid | User logged out | 1. Buka `linkedin.com`<br>2. Klik "Sign in"<br>3. Isi email & password valid<br>4. Klik "Sign in" | Redirect ke Home Feed; nama/avatar user tampil di *top bar* | P1 | AI-Assisted |
| `AUTH-002` | Login dengan password salah | User logged out | 1. Buka halaman login<br>2. Isi email valid + password salah<br>3. Klik "Sign in" | Pesan error tampil; akses ditolak | P1 | AI-Assisted |
| `AUTH-003` | Login dengan email kosong | User logged out | 1. Halaman login, kosongkan email<br>2. Klik "Sign in" | Validasi field wajib tampil; akses ditolak | P2 | AI-Assisted |
| `AUTH-004` | Logout | User logged in | 1. Klik avatar "Me"<br>2. Klik "Sign Out" | Redirect ke landing/login; sesi berakhir | P1 | AI-Assisted |

#### B. Home Feed (`FEED` — `REQ-LNKD-02`)
| TC ID | Skenario | Pre-condition | Langkah Uji | Expected Result | Priority | Mode Eksekusi |
| :--- | :--- | :--- | :--- | :--- | :---: | :--- |
| `FEED-001` | Feed termuat | User logged in | 1. Buka halaman Home | Post dari network tampil tanpa error | P1 | AI-Assisted |
| `FEED-002` | Infinite scroll | User logged in | 1. Scroll ke bawah halaman feed | Post tambahan dimuat secara dinamis | P2 | Manual |
| `FEED-003` | Buat post teks | User logged in | 1. Klik "Start a post"<br>2. Ketik teks uji<br>3. Klik "Post" | Post muncul di feed sendiri | P1 | AI-Assisted |
| `FEED-004` | Like post | User logged in | 1. Klik tombol "Like" pada post | Counter bertambah & ikon berubah aktif | P2 | AI-Assisted |
| `FEED-005` | Komentar pada post | User logged in | 1. Klik "Comment"<br>2. Ketik komentar uji<br>3. Submit | Komentar tampil di bawah post | P2 | Manual (Follow-up) |
| `FEED-006` | Hapus post yang baru dibuat | User logged in | 1. Klik menu "..." pada post uji<br>2. Klik "Delete" | Post terhapus dari feed (*cleanup*) | P2 | AI-Assisted |

#### C. Pencarian (`SEARCH` — `REQ-LNKD-03`)
| TC ID | Skenario | Pre-condition | Langkah Uji | Expected Result | Priority | Mode Eksekusi |
| :--- | :--- | :--- | :--- | :--- | :---: | :--- |
| `SEARCH-001` | Cari orang (*People*) | User logged in | 1. Ketik keyword di search bar + Enter<br>2. Pilih tab "People" | Daftar profil relevan tampil | P1 | AI-Assisted |
| `SEARCH-002` | Cari lowongan (*Jobs*) | User logged in | 1. Ketik keyword jobs + Enter<br>2. Pilih tab "Jobs" | Daftar lowongan relevan tampil | P1 | AI-Assisted |
| `SEARCH-003` | Cari perusahaan (*Companies*) | User logged in | 1. Ketik nama perusahaan + Enter<br>2. Pilih tab "Companies" | Daftar perusahaan tampil | P2 | AI-Assisted |
| `SEARCH-004` | Filter pencarian berdasarkan lokasi | User logged in | 1. Pada hasil search, terapkan filter Lokasi | Hasil terfilter sesuai lokasi yang dipilih | P2 | Manual |

#### D. Profil (`PROFILE` — `REQ-LNKD-04`)
| TC ID | Skenario | Pre-condition | Langkah Uji | Expected Result | Priority | Mode Eksekusi |
| :--- | :--- | :--- | :--- | :--- | :---: | :--- |
| `PROFILE-001` | Lihat profil sendiri | User logged in | 1. Klik avatar "Me" → "View Profile" | Profil sendiri tampil lengkap | P1 | AI-Assisted |
| `PROFILE-002` | Lihat profil orang lain | User logged in | 1. Buka profil dari hasil pencarian | Profil tampil beserta tombol aksi | P1 | AI-Assisted |
| `PROFILE-003` | Edit headline profil | User logged in | 1. Klik ikon edit intro/headline<br>2. Perbarui → Save | Headline berhasil diperbarui | P2 | Manual |

#### E. Network / Connections (`NETWORK` — `REQ-LNKD-05`)
| TC ID | Skenario | Pre-condition | Langkah Uji | Expected Result | Priority | Mode Eksekusi |
| :--- | :--- | :--- | :--- | :--- | :---: | :--- |
| `NETWORK-001` | Halaman My Network termuat | User logged in | 1. Klik menu "My Network" | Daftar koneksi & rekomendasi tampil | P1 | AI-Assisted |
| `NETWORK-002` | Kirim permintaan koneksi | User logged in | 1. Klik "Connect" pada saran koneksi | Status berubah menjadi "Pending" | P1 | Manual |
| `NETWORK-003` | Lihat daftar koneksi | User logged in | 1. Buka My Network → "Connections" | Daftar koneksi aktif tampil (`594 connections`) | P2 | AI-Assisted |

#### F. Jobs (`JOBS` — `REQ-LNKD-06`)
| TC ID | Skenario | Pre-condition | Langkah Uji | Expected Result | Priority | Mode Eksekusi |
| :--- | :--- | :--- | :--- | :--- | :---: | :--- |
| `JOBS-001` | Halaman Jobs termuat | User logged in | 1. Klik menu "Jobs" | Rekomendasi lowongan tampil | P1 | AI-Assisted |
| `JOBS-002` | Cari lowongan kerja | User logged in | 1. Input keyword + lokasi → Search | Hasil lowongan sesuai kriteria tampil | P1 | AI-Assisted |
| `JOBS-003` | Lihat detail lowongan | User logged in | 1. Klik salah satu lowongan | Panel deskripsi & tombol Apply/Save tampil | P1 | AI-Assisted |
| `JOBS-004` | Simpan lowongan (*Save Job*) | User logged in | 1. Klik tombol "Save" pada detail lowongan | Status lowongan berubah menjadi Saved | P2 | Manual |

#### G. Messaging (`MSG` — `REQ-LNKD-07`)
| TC ID | Skenario | Pre-condition | Langkah Uji | Expected Result | Priority | Mode Eksekusi |
| :--- | :--- | :--- | :--- | :--- | :---: | :--- |
| `MSG-001` | Halaman Messaging termuat | User logged in | 1. Klik menu "Messaging" | Daftar percakapan tampil | P1 | AI-Assisted |
| `MSG-002` | Buka percakapan (*thread*) | User logged in | 1. Klik salah satu *thread* pesan | Riwayat percakapan tampil di panel utama | P1 | AI-Assisted |
| `MSG-003` | Kirim pesan uji | User logged in | 1. Ketik pesan uji di kolom pesan<br>2. Klik Send / tekan Enter | Pesan terkirim & tampil di *thread* dengan *timestamp* | P1 | Manual (Follow-up) |

#### H. Notifications (`NOTIF` — `REQ-LNKD-08`)
| TC ID | Skenario | Pre-condition | Langkah Uji | Expected Result | Priority | Mode Eksekusi |
| :--- | :--- | :--- | :--- | :--- | :---: | :--- |
| `NOTIF-001` | Halaman Notifications termuat | User logged in | 1. Klik menu "Notifications" | Daftar notifikasi tampil | P1 | AI-Assisted |
| `NOTIF-002` | Buka salah satu notifikasi | User logged in | 1. Klik item notifikasi pada daftar | Pengguna diarahkan ke konten terkait | P2 | Manual |

#### I. Navigasi Global (`NAV` — `REQ-LNKD-09`)
| TC ID | Skenario | Pre-condition | Langkah Uji | Expected Result | Priority | Mode Eksekusi |
| :--- | :--- | :--- | :--- | :--- | :---: | :--- |
| `NAV-001` | Top bar links berfungsi | User logged in | 1. Klik tiap menu utama di *top bar* | Setiap menu membuka rute halaman yang sesuai | P1 | AI-Assisted |
| `NAV-002` | Menu "Me" dropdown | User logged in | 1. Klik avatar "Me" di *top bar* | Menu *dropdown* tampil (View Profile, Settings, Sign Out) | P2 | AI-Assisted |
| `NAV-003` | Responsivitas *top bar* (`1024px`) | User logged in | 1. Ubah lebar *viewport* ke `1024px` | Layout tidak rusak; seluruh menu tetap dapat diakses | P3 | AI-Assisted |

---

### 12.2 Log Hasil Eksekusi Lengkap

| TC ID | Status | Actual Result | Mode Eksekusi | Executed By | Tanggal | Bukti Screenshot / Catatan |
| :--- | :---: | :--- | :--- | :--- | :---: | :--- |
| `AUTH-001` | **Passed** | Login berhasil, redirect ke feed; nama/avatar tampil di *top bar* | AI-Assisted | Benedict Timothy | 2026-11-05 | `AUTH-001_login_valid.png` |
| `AUTH-002` | **Passed** | Pesan error "Kata sandi atau email salah" tampil; login ditolak | AI-Assisted | Benedict Timothy | 2026-11-05 | `AUTH-002_invalid_password.png` |
| `AUTH-003` | **Passed** | Login ditolak ketika kredensial kosong dengan pesan validasi | AI-Assisted | Benedict Timothy | 2026-11-05 | `AUTH-003_empty_email.png` |
| `AUTH-004` | **Passed** | Logout berhasil, sesi berakhir dan kembali ke halaman login | AI-Assisted | Benedict Timothy | 2026-11-05 | `AUTH-004_logout.png` |
| `FEED-001` | **Passed** | Home Feed termuat normal, post dari jaringan tampil | AI-Assisted | Benedict Timothy | 2026-11-05 | `TAB0_feed.png` |
| `FEED-002` | **Passed** | *Infinite scroll* memuat post tambahan saat halaman digulir | Manual | Benedict Timothy | 2026-11-05 | Diverifikasi manual |
| `FEED-003` | **Passed** | Modal buat post terbuka, post teks dibuat & tampil di feed | AI-Assisted | Benedict Timothy | 2026-11-05 | `FEED-003_create_post_modal.png`, `FEED-003_post_created.png` |
| `FEED-004` | **Passed** | Klik tombol Like mengubah status tombol menjadi aktif & menambah counter | AI-Assisted | Benedict Timothy | 2026-11-05 | `FEED-004_like_post.png` |
| `FEED-005` | **Passed** | Komentar berhasil dikirim secara manual & tampil di bawah post | Manual (Follow-up) | Benedict Timothy | 2026-11-05 | `FEED-005 — Komentar pada post.png` |
| `FEED-006` | **Passed** | Post uji berhasil dihapus dari feed (*cleanup* selesai) | AI-Assisted | Benedict Timothy | 2026-11-05 | `FEED-006_delete_post.png` |
| `SEARCH-001` | **Passed** | Pencarian People menampilkan daftar profil yang relevan | AI-Assisted | Benedict Timothy | 2026-11-05 | `SEARCH-001_people.png` |
| `SEARCH-002` | **Passed** | Pencarian Jobs menampilkan daftar lowongan yang sesuai | AI-Assisted | Benedict Timothy | 2026-11-05 | `SEARCH-002_jobs.png` |
| `SEARCH-003` | **Passed** | Pencarian Companies menampilkan halaman perusahaan terkait | AI-Assisted | Benedict Timothy | 2026-11-05 | `SEARCH-003_companies.png` |
| `SEARCH-004` | **Passed** | Filter lokasi berhasil memperbarui daftar hasil pencarian | Manual | Benedict Timothy | 2026-11-05 | Diverifikasi manual |
| `PROFILE-001` | **Passed** | Halaman profil sendiri tampil lengkap beserta bagian *experience* | AI-Assisted | Benedict Timothy | 2026-11-05 | `PROFILE-001_own_profile.png` |
| `PROFILE-002` | **Passed** | Profil pengguna lain tampil dengan tombol Connect/Message | AI-Assisted | Benedict Timothy | 2026-11-05 | `PROFILE-002_other_profile.png` |
| `PROFILE-003` | **Passed** | Perubahan *headline* profil tersimpan dengan benar | Manual | Benedict Timothy | 2026-11-05 | Diverifikasi manual |
| `NETWORK-001` | **Passed** | Halaman My Network termuat beserta saran koneksi | AI-Assisted | Benedict Timothy | 2026-11-05 | `NETWORK-001_my_network.png` |
| `NETWORK-002` | **Passed** | Permintaan koneksi berhasil dikirim, tombol berubah ke *Pending* | Manual | Benedict Timothy | 2026-11-05 | Diverifikasi manual |
| `NETWORK-003` | **Passed** | Daftar koneksi menampilkan `594 connections` dengan benar | AI-Assisted | Benedict Timothy | 2026-11-05 | `NETWORK-003_connections_list.png` |
| `JOBS-001` | **Passed** | Halaman Jobs utama termuat normal | AI-Assisted | Benedict Timothy | 2026-11-05 | `JOBS-001_page_load.png` |
| `JOBS-002` | **Passed** | Pencarian lowongan kerja berdasarkan keyword & lokasi berhasil | AI-Assisted | Benedict Timothy | 2026-11-05 | `SEARCH-002_jobs.png` |
| `JOBS-003` | **Passed** | Panel detail lowongan kerja tampil lengkap di sisi kanan | AI-Assisted | Benedict Timothy | 2026-11-05 | `JOBS-001_page_load.png` |
| `JOBS-004` | **Passed** | Lowongan kerja berhasil disimpan ke *Saved jobs* | Manual | Benedict Timothy | 2026-11-05 | `JOBS-004_save_job.png` |
| `MSG-001` | **Passed** | Halaman Messaging termuat beserta daftar *thread* | AI-Assisted | Benedict Timothy | 2026-11-05 | `MSG-001_page_load.png` |
| `MSG-002` | **Passed** | *Thread* percakapan terbuka dan menampilkan riwayat pesan | AI-Assisted | Benedict Timothy | 2026-11-05 | `MSG-001_page_load.png` |
| `MSG-003` | **Passed** | Pesan uji berhasil dikirim secara manual & tampil di *thread* | Manual (Follow-up) | Benedict Timothy | 2026-11-05 | `MSG-003 — Kirim pesan.png` |
| `NOTIF-001` | **Passed** | Halaman Notifications memuat daftar notifikasi terbaru | AI-Assisted | Benedict Timothy | 2026-11-05 | `NOTIF-001_page_load.png` |
| `NOTIF-002` | **Passed** | Klik notifikasi mengarahkan pengguna ke halaman konten terkait | Manual | Benedict Timothy | 2026-11-05 | Diverifikasi manual |
| `NAV-001` | **Passed** | Seluruh tautan *top bar* mengarah ke modul yang tepat | AI-Assisted | Benedict Timothy | 2026-11-05 | Diverifikasi lintas tab |
| `NAV-002` | **Passed** | Dropdown menu "Me" menampilkan opsi profil, pengaturan, dan Sign Out | AI-Assisted | Benedict Timothy | 2026-11-05 | `AUTH-004_logout.png` |
| `NAV-003` | **Passed** | Pada lebar `1024px`, *top bar* tetap rapi dan tidak *overflow* | AI-Assisted | Benedict Timothy | 2026-11-05 | `NAV-003_responsive_1024.png` |

---

## 13. Persetujuan (*Sign-Off*)

| Peran | Nama | Status | Tanggal |
| :--- | :--- | :---: | :---: |
| **Test Designer & Executor** | Benedict Timothy | Approved | 2026-11-05 |
| **QA Audit & Standard Compliance** | Benedict Timothy (AI-Assisted Review) | Verified | 2026-11-10 |
