# Software Test Plan — OrangeHRM OS 5.9 Smoke Testing

| Atribut Dokumen | Detail |
| :--- | :--- |
| **Test Plan Identifier** | `TP-OHRM-SMOKE-V1.0` |
| **Standar Acuan** | ISO/IEC/IEEE 29119-3 & Pedoman QA MySkill |
| **Nama Proyek / SUT** | OrangeHRM Open Source 5.9 Demo (`https://opensource-demo.orangehrmlive.com/`) |
| **Versi Dokumen** | 1.0 |
| **Tanggal Penyusunan** | 2 November 2026 (Diperbarui: 10 November 2026) |
| **Penyusun & Eksekutor** | Benedict Timothy |
| **Metode Pengujian** | **AI-Assisted Manual Smoke Testing (Human-in-the-Loop)**: Desain skenario & verifikasi hasil/konsol oleh QA Manual; akselerasi navigasi & pengumpulan 20 *screenshot* dibantu Playwright CLI |
| **Lingkungan Uji** | Public Demo Environment (UAT/Demo Equivalent) |
| **Status Akhir** | **Completed — 20/20 Test Cases Passed (100% Pass Rate, 0 Blockers)** |

---

## 1. Pendahuluan (*Introduction*)

### 1.1 Tujuan (*Purpose*)
Dokumen **Test Plan** ini menjadi pedoman pelaksanaan *Smoke Testing* pada aplikasi **OrangeHRM OS 5.9** untuk memastikan seluruh jalur autentikasi (login positif, validasi kosong, kredensial salah, lupa kata sandi, *logout*, dan proteksi rute pasca-*logout*) serta keterjangkauan (*reachability*) 12 modul utama HRIS berjalan normal tanpa *crash* maupun *JavaScript exception*.

### 1.2 Transparansi Metodologi (*Human-in-the-Loop QA*)
- **Peran QA Manual (Benedict Timothy)**: Merancang 20 skenario *smoke* yang mencakup *Equivalence Partitioning* pada halaman login, memetakan *Requirement Traceability Matrix (RTM)* terhadap 14 kebutuhan fungsional, menginspeksi anomali DOM/breadcrumb (seperti menu *Maintenance* yang menyembunyikan navigasi utama sebelum konfirmasi password admin, serta *breadcrumb* modul *My Info* yang menampilkan label induk `PIM`), dan memverifikasi log konsol browser.
- **Peran AI & Alat Bantu (Playwright CLI)**: Membantu eksekusi navigasi berurutan pada viewport `1280×720` dan merekam 20 tangkapan layar bukti (`screenshots/01-login-page.png` s.d. `20-forgot-password.png`).

---

## 2. Deskripsi Proyek (*Project Description*)

- **Sistem yang Diuji (*SUT*)**: OrangeHRM OS 5.9 (`https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`).
- **Tipe Sistem**: Sistem Informasi Manajemen Sumber Daya Manusia (*Human Resource Management System / HRMS*) berbasis web.
- **Tanggal Pelaksanaan**: 2 November 2026.

---

## 3. Referensi (*References*)

1. **ISO/IEC/IEEE 29119-3:2021** — *Software testing — Part 3: Test documentation*.
2. **Requirement Traceability Matrix (RTM)**: `RTM.md` dan `OrangeHRM_Smoke_RTM_TestCases.xlsx`.
3. **Laporan Eksekusi**: `Test_Report.md` dan `report.html`.

---

## 4. Scope Pengujian (*Test Scope*)

### 4.1 Item Uji (*Test Items*)
1. Modul Autentikasi & Manajemen Sesi (`Login`, `Logout`, `Forgot Password`, `User Dropdown`, `Protected Route Guard`).
2. 12 Modul Utama HRIS: `Dashboard`, `Admin`, `PIM`, `Leave`, `Time`, `Recruitment`, `My Info`, `Performance`, `Directory`, `Maintenance` (Administrator Access Gate), `Claim`, dan `Buzz`.

### 4.2 Fitur yang Akan Diuji (*Features to be Tested — In-Scope*)

| Req ID | Modul | Fitur yang Diuji | TC Terkait |
| :--- | :--- | :--- | :--- |
| `REQ-OHRM-01` | Autentikasi | Pemuatan halaman login, validasi field kosong, penolakan password salah, dan login valid | `SMK-01`, `SMK-02`, `SMK-03`, `SMK-04` |
| `REQ-OHRM-02` | Admin | Keterjangkauan halaman *System Users* (`/admin/viewSystemUsers`) | `SMK-05` |
| `REQ-OHRM-03` | PIM | Keterjangkauan daftar karyawan (`/pim/viewEmployeeList`) | `SMK-06` |
| `REQ-OHRM-04` | Leave | Keterjangkauan daftar cuti (`/leave/viewLeaveList`) | `SMK-07` |
| `REQ-OHRM-05` | Time | Keterjangkauan halaman *Timesheet* (`/time/viewEmployeeTimesheet`) | `SMK-08` |
| `REQ-OHRM-06` | Recruitment | Keterjangkauan daftar kandidat (`/recruitment/viewCandidates`) | `SMK-09` |
| `REQ-OHRM-07` | My Info | Keterjangkauan profil personal pengguna aktif (`/pim/viewPersonalDetails`) | `SMK-10` |
| `REQ-OHRM-08` | Performance | Keterjangkauan halaman evaluasi performa (`/performance/searchEvaluatePerformanceReview`) | `SMK-11` |
| `REQ-OHRM-09` | Dashboard | Renderisasi *widget* utama pada `/dashboard/index` | `SMK-12` |
| `REQ-OHRM-10` | Directory | Keterjangkauan direktori karyawan (`/directory/viewDirectory`) | `SMK-13` |
| `REQ-OHRM-11` | Maintenance | Verifikasi gerbang re-autentikasi password administrator (`/maintenance/purgeEmployee`) | `SMK-14` |
| `REQ-OHRM-12` | Claim | Keterjangkauan halaman klaim (`/claim/viewAssignClaim`) | `SMK-15` |
| `REQ-OHRM-13` | Buzz | Keterjangkauan *social feed* internal (`/buzz/viewBuzz`) | `SMK-16` |
| `REQ-OHRM-14` | Sesi & Pemulihan | Menu *User Dropdown*, *Logout*, proteksi *deep-link* pasca-*logout*, dan halaman *Forgot Password* | `SMK-17`, `SMK-18`, `SMK-19`, `SMK-20` |

### 4.3 Fitur yang Tidak Akan Diuji (*Features Not to be Tested — Out-of-Scope*)
- **Operasi CRUD Mendalam (Tambah/Hapus Karyawan, Purge Data di Maintenance)**: Lingkungan demo digunakan bersama oleh publik secara global; memodifikasi atau menghapus data master karyawan berisiko mengganggu pengguna lain.
- **Pengujian Beban (*Load/Stress Testing*)**: Tidak diizinkan pada server demo publik milik OrangeHRM.

---

## 5. Strategi & Pendekatan Uji (*Test Strategy & Approach*)

- **Smoke & Sanity Testing (Quadrant 2)**: Memverifikasi bahwa setiap modul dapat dibuka tanpa HTTP 4xx/5xx dan komponen utama ter-render.
- **Equivalence Partitioning & Negative Testing (Quadrant 2/3)**: Menguji input login kosong (`SMK-02`), password salah (`SMK-03`), serta akses URL terproteksi tanpa sesi aktif (`SMK-19`).
- **DOM & Console Inspection (Quadrant 1/4)**: Memantau *warning* dan *error* pada konsol browser selama seluruh rangkaian navigasi.
- **Prioritas Kasus Uji**:
  - **P1 (Critical/High — 10 TC)**: `SMK-01`..`SMK-06`, `SMK-12`, `SMK-14`, `SMK-18`, `SMK-19`.
  - **P2 (Medium — 10 TC)**: `SMK-07`..`SMK-11`, `SMK-13`, `SMK-15`..`SMK-17`, `SMK-20`.

---

## 6. Kriteria Keputusan Uji (*Test Criteria*)

- **Entry Criteria**: URL demo `opensource-demo.orangehrmlive.com` merespons HTTP 200; kredensial demo publik (`Admin` / `admin123`) aktif.
- **Suspension Criteria**: Server demo mengalami *reset* berkala atau *downtime* HTTP 502/503.
- **Exit Criteria**: 20/20 skenario *smoke* dieksekusi, $0$ *blocking defect*, 20 *screenshot* bukti lengkap, serta RTM dan laporan akhir selesai disusun.

---

## 7. Tugas & Tanggung Jawab (*Tasks & Responsibilities*)

| Peran | PIC | Tanggung Jawab |
| :--- | :--- | :--- |
| **QA Engineer (Human-in-the-Loop)** | Benedict Timothy | Menyusun Test Plan, RTM, skenario uji, menganalisis perilaku navigasi & DOM warning, serta menyusun laporan. |
| **Browser Automation Helper** | Playwright CLI (Chromium) | Membantu eksekusi navigasi cepat dan pengambilan 20 tangkapan layar. |

---

## 8. Jadwal & Estimasi Pengujian (*Test Schedule & Estimation*)

Menggunakan **Bottom-Up Estimation**:
- Analisis Modul & Penyusunan 20 Skenario Smoke: **20 menit**
- Eksekusi Smoke Test & Pengambilan 20 Screenshot: **15 menit**
- Inspeksi Konsol, Penyusunan RTM, & Laporan HTML/Markdown: **25 menit**
- **Total Durasi**: **60 menit** (Dilaksanakan pada 2 November 2026).

---

## 9. Kebutuhan Sumber Daya & Lingkungan (*Environment & Resource Needs*)

- **OS & Browser**: Windows 11, Chromium (`1280×720`)
- **Akun Uji**: Kredensial demo resmi yang ditampilkan pada halaman login (`Admin` / `admin123`) — *tidak ada pembuatan atau penghapusan data selama sesi uji*.

---

## 10. Risiko dan Mitigasi (*Risks & Mitigation*)

| ID Risiko | Risiko | Dampak | Mitigasi |
| :--- | :--- | :---: | :--- |
| `RSK-OHRM-01` | Klik modul *Maintenance* menghilangkan menu navigasi kiri karena meminta re-autentikasi admin | Medium | Setelah memverifikasi gerbang *Maintenance* (`SMK-14`), arahkan kembali ke `/dashboard/index` sebelum melanjutkan ke modul *Claim* (`SMK-15`). |
| `RSK-OHRM-02` | Data pada server demo publik berubah karena aktivitas pengguna lain | Low | Fokuskan *assertion* pada keberadaan struktur halaman, judul modul, dan URL rute, bukan pada jumlah baris data dinamis. |

---

## 11. Keluaran Pengujian (*Test Deliverables*)

1. `Test_Plan.md` (Dokumen ini)
2. `RTM.md` & `OrangeHRM_Smoke_RTM_TestCases.xlsx` (Requirement Traceability Matrix standar MySkill)
3. `Test_Report.md` & `report.html` (Laporan eksekusi lengkap)
4. `screenshots/` (20 file PNG bukti eksekusi)
