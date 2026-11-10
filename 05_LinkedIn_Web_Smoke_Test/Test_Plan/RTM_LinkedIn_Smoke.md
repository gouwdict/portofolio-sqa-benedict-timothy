# Requirement Traceability Matrix (RTM) — LinkedIn Smoke Test

- **Proyek**: LinkedIn Web Smoke Testing (`TP-LNKD-SMOKE-V1.1`)
- **Penyusun**: Benedict Timothy
- **Tanggal**: 5 November 2026 (Diperbarui: 10 November 2026)
- **Standar Format**: Standar RTM MySkill (15 Kolom) & Best Practice SQA ISO/IEC/IEEE 29119-3

> [!NOTE]
> **Keterangan Lingkungan (`Test Env`, `UAT Env`, `Prod Env`)**: Karena LinkedIn adalah aplikasi SaaS publik pihak ketiga, lingkungan internal **Test Env (SIT)** dan **UAT Env** milik internal LinkedIn tidak dapat diakses oleh penguji eksternal sehingga ditandai **`N/A`** (*Not Applicable* — bukan `No Run`). Seluruh eksekusi smoke test dilakukan secara terkendali pada **Prod Env** menggunakan akun uji khusus (*dedicated test account*) beserta prosedur *cleanup* data uji.

---

## Tabel Requirement Traceability Matrix (RTM)

| Sno | Req ID | Req Desc | TC ID | TC Desc | Test Design | Test Designer | UAT Test Req? | Test Env | UAT Env | Prod Env | Defects? | Defect ID | Defect Status | Req Coverage Status |
| :-: | :--- | :--- | :--- | :--- | :---: | :---: | :-: | :---: | :---: | :---: | :-: | :---: | :---: | :---: |
| 1 | **REQ-LNKD-01** | Autentikasi Pengguna (Login & Logout) | `AUTH-001` | Login dengan kredensial valid (*Positive*) | Completed | BT | Yes | N/A | N/A | Passed | None | None | N/A | **Full (100%)** |
| 2 | **REQ-LNKD-01** | Autentikasi Pengguna (Login & Logout) | `AUTH-002` | Login dengan password salah (*Negative*) | Completed | BT | No | N/A | N/A | Passed | None | None | N/A | **Full (100%)** |
| 3 | **REQ-LNKD-01** | Autentikasi Pengguna (Login & Logout) | `AUTH-003` | Login dengan email kosong (*Negative*) | Completed | BT | No | N/A | N/A | Passed | None | None | N/A | **Full (100%)** |
| 4 | **REQ-LNKD-01** | Autentikasi Pengguna (Login & Logout) | `AUTH-004` | Logout dari sesi aktif (*Positive*) | Completed | BT | Yes | N/A | N/A | Passed | None | None | N/A | **Full (100%)** |
| 5 | **REQ-LNKD-02** | Interaksi Beranda (*Home Feed* & Post CRUD) | `FEED-001` | Verifikasi halaman Home Feed termuat | Completed | BT | Yes | N/A | N/A | Passed | None | None | N/A | **Full (100%)** |
| 6 | **REQ-LNKD-02** | Interaksi Beranda (*Home Feed* & Post CRUD) | `FEED-002` | Verifikasi pemuatan *infinite scroll* pada feed | Completed | BT | No | N/A | N/A | Passed | None | None | N/A | **Full (100%)** |
| 7 | **REQ-LNKD-02** | Interaksi Beranda (*Home Feed* & Post CRUD) | `FEED-003` | Buat post teks baru pada feed | Completed | BT | Yes | N/A | N/A | Passed | None | None | N/A | **Full (100%)** |
| 8 | **REQ-LNKD-02** | Interaksi Beranda (*Home Feed* & Post CRUD) | `FEED-004` | Berikan *reaction/like* pada sebuah post | Completed | BT | Yes | N/A | N/A | Passed | None | None | N/A | **Full (100%)** |
| 9 | **REQ-LNKD-02** | Interaksi Beranda (*Home Feed* & Post CRUD) | `FEED-005` | Tambahkan komentar pada post (*Manual Follow-up*) | Completed | BT | Yes | N/A | N/A | Passed | None | None | N/A | **Full (100%)** |
| 10 | **REQ-LNKD-02** | Interaksi Beranda (*Home Feed* & Post CRUD) | `FEED-006` | Hapus post uji yang baru dibuat (*Cleanup*) | Completed | BT | Yes | N/A | N/A | Passed | None | None | N/A | **Full (100%)** |
| 11 | **REQ-LNKD-03** | Pencarian Global & Filter (*People, Jobs, Companies*) | `SEARCH-001` | Cari pengguna (*People*) berdasarkan kata kunci | Completed | BT | Yes | N/A | N/A | Passed | None | None | N/A | **Full (100%)** |
| 12 | **REQ-LNKD-03** | Pencarian Global & Filter (*People, Jobs, Companies*) | `SEARCH-002` | Cari lowongan (*Jobs*) dari kolom pencarian global | Completed | BT | Yes | N/A | N/A | Passed | None | None | N/A | **Full (100%)** |
| 13 | **REQ-LNKD-03** | Pencarian Global & Filter (*People, Jobs, Companies*) | `SEARCH-003` | Cari perusahaan (*Companies*) berdasarkan nama | Completed | BT | No | N/A | N/A | Passed | None | None | N/A | **Full (100%)** |
| 14 | **REQ-LNKD-03** | Pencarian Global & Filter (*People, Jobs, Companies*) | `SEARCH-004` | Terapkan filter lokasi pada hasil pencarian | Completed | BT | Yes | N/A | N/A | Passed | None | None | N/A | **Full (100%)** |
| 15 | **REQ-LNKD-04** | Manajemen & Tampilan Profil Pengguna | `PROFILE-001` | Lihat halaman profil milik sendiri | Completed | BT | Yes | N/A | N/A | Passed | None | None | N/A | **Full (100%)** |
| 16 | **REQ-LNKD-04** | Manajemen & Tampilan Profil Pengguna | `PROFILE-002` | Lihat halaman profil pengguna lain | Completed | BT | Yes | N/A | N/A | Passed | None | None | N/A | **Full (100%)** |
| 17 | **REQ-LNKD-04** | Manajemen & Tampilan Profil Pengguna | `PROFILE-003` | Perbarui *headline* pada profil sendiri | Completed | BT | No | N/A | N/A | Passed | None | None | N/A | **Full (100%)** |
| 18 | **REQ-LNKD-05** | Manajemen Jaringan & Koneksi (*My Network*) | `NETWORK-001` | Verifikasi halaman My Network termuat | Completed | BT | Yes | N/A | N/A | Passed | None | None | N/A | **Full (100%)** |
| 19 | **REQ-LNKD-05** | Manajemen Jaringan & Koneksi (*My Network*) | `NETWORK-002` | Kirim permintaan koneksi (*Connect* -> *Pending*) | Completed | BT | Yes | N/A | N/A | Passed | None | None | N/A | **Full (100%)** |
| 20 | **REQ-LNKD-05** | Manajemen Jaringan & Koneksi (*My Network*) | `NETWORK-003` | Lihat daftar koneksi aktif (*Connections list*) | Completed | BT | No | N/A | N/A | Passed | None | None | N/A | **Full (100%)** |
| 21 | **REQ-LNKD-06** | Eksplorasi & Penyimpanan Lowongan Kerja (*Jobs*) | `JOBS-001` | Verifikasi halaman utama Jobs termuat | Completed | BT | Yes | N/A | N/A | Passed | None | None | N/A | **Full (100%)** |
| 22 | **REQ-LNKD-06** | Eksplorasi & Penyimpanan Lowongan Kerja (*Jobs*) | `JOBS-002` | Cari lowongan berdasarkan jabatan dan lokasi | Completed | BT | Yes | N/A | N/A | Passed | None | None | N/A | **Full (100%)** |
| 23 | **REQ-LNKD-06** | Eksplorasi & Penyimpanan Lowongan Kerja (*Jobs*) | `JOBS-003` | Lihat rincian deskripsi lowongan kerja | Completed | BT | Yes | N/A | N/A | Passed | None | None | N/A | **Full (100%)** |
| 24 | **REQ-LNKD-06** | Eksplorasi & Penyimpanan Lowongan Kerja (*Jobs*) | `JOBS-004` | Simpan lowongan kerja ke daftar *Saved jobs* | Completed | BT | No | N/A | N/A | Passed | None | None | N/A | **Full (100%)** |
| 25 | **REQ-LNKD-07** | Perpesanan Langsung (*Messaging*) | `MSG-001` | Verifikasi halaman Messaging dan daftar *thread* | Completed | BT | Yes | N/A | N/A | Passed | None | None | N/A | **Full (100%)** |
| 26 | **REQ-LNKD-07** | Perpesanan Langsung (*Messaging*) | `MSG-002` | Buka salah satu *thread* percakapan | Completed | BT | Yes | N/A | N/A | Passed | None | None | N/A | **Full (100%)** |
| 27 | **REQ-LNKD-07** | Perpesanan Langsung (*Messaging*) | `MSG-003` | Kirim pesan uji di dalam *thread* (*Manual Follow-up*) | Completed | BT | Yes | N/A | N/A | Passed | None | None | N/A | **Full (100%)** |
| 28 | **REQ-LNKD-08** | Pusat Notifikasi (*Notifications*) | `NOTIF-001` | Verifikasi halaman Notifications termuat | Completed | BT | Yes | N/A | N/A | Passed | None | None | N/A | **Full (100%)** |
| 29 | **REQ-LNKD-08** | Pusat Notifikasi (*Notifications*) | `NOTIF-002` | Klik notifikasi untuk membuka konten terkait | Completed | BT | No | N/A | N/A | Passed | None | None | N/A | **Full (100%)** |
| 30 | **REQ-LNKD-09** | Navigasi Global & Responsivitas Dasar (`NAV`) | `NAV-001` | Verifikasi seluruh tautan navigasi di *top bar* | Completed | BT | Yes | N/A | N/A | Passed | None | None | N/A | **Full (100%)** |
| 31 | **REQ-LNKD-09** | Navigasi Global & Responsivitas Dasar (`NAV`) | `NAV-002` | Verifikasi menu *dropdown* profil "Me" | Completed | BT | No | N/A | N/A | Passed | None | None | N/A | **Full (100%)** |
| 32 | **REQ-LNKD-09** | Navigasi Global & Responsivitas Dasar (`NAV`) | `NAV-003` | Verifikasi tata letak *top bar* pada lebar `1024px` | Completed | BT | No | N/A | N/A | Passed | None | None | N/A | **Full (100%)** |

---

## Ringkasan Metrik Cakupan (*Coverage Summary*)

- **Total Requirements**: 9 (`REQ-LNKD-01` s.d. `REQ-LNKD-09`)
- **Total Test Cases**: 32 (`19 P1`, `12 P2`, `1 P3`)
- **Requirement Coverage**: **100% (9/9 Full Coverage)**
- **Test Execution Progress (`Prod Env`)**: **32/32 Passed (100%)** — `24 AI-Assisted` + `8 Manual Interactive`
- **Active Defects**: `0`
