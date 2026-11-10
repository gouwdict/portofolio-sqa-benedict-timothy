# Requirement Traceability Matrix (RTM) — OrangeHRM OS 5.9 Smoke Test

- **Proyek**: OrangeHRM OS 5.9 Smoke Testing (`TP-OHRM-SMOKE-V1.0`)
- **Penyusun**: Benedict Timothy
- **Tanggal**: 2 November 2026 (Diperbarui: 10 November 2026)
- **Standar Format**: Standar RTM MySkill (15 Kolom) & Best Practice SQA ISO/IEC/IEEE 29119-3

> [!NOTE]
> **Penjelasan Lingkungan (`Test Env`, `UAT Env`, `Prod Env`)**:
> - **UAT Env (`opensource-demo.orangehrmlive.com`)**: Merupakan lingkungan demo/pra-rilis publik resmi dari OrangeHRM OS 5.9 tempat seluruh 20 skenario dieksekusi (`20/20 Passed`).
> - **Test Env (Internal SIT)** dan **Prod Env**: Ditandai **`N/A`** (*Not Applicable* — bukan `No Run`) karena pengujian dilakukan pada *public evaluation instance*, bukan instalasi produksi internal perusahaan.

---

## Tabel Requirement Traceability Matrix (Format MySkill 15 Kolom)

| Sno | Req ID | Req Desc | TC ID | TC Desc | Test Design | Test Designer | UAT Test Req? | Test Env | UAT Env | Prod Env | Defects? | Defect ID | Defect Status | Req Coverage Status |
| :-: | :--- | :--- | :--- | :--- | :---: | :---: | :-: | :---: | :---: | :---: | :-: | :---: | :---: | :---: |
| 1 | **REQ-OHRM-01** | Autentikasi Pengguna & Validasi Form Login | `SMK-01` | Verifikasi halaman login memuat form Username, Password, tombol Login, dan logo | Completed | BT | Yes | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 2 | **REQ-OHRM-01** | Autentikasi Pengguna & Validasi Form Login | `SMK-02` | Login dengan field kosong memunculkan pesan validasi `Required` pada kedua input | Completed | BT | No | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 3 | **REQ-OHRM-01** | Autentikasi Pengguna & Validasi Form Login | `SMK-03` | Login dengan password salah memunculkan alert `Invalid credentials` | Completed | BT | No | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 4 | **REQ-OHRM-01** | Autentikasi Pengguna & Validasi Form Login | `SMK-04` | Login dengan kredensial valid mengarahkan ke `/dashboard/index` | Completed | BT | Yes | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 5 | **REQ-OHRM-02** | Keterjangkauan Modul Admin (*System Users*) | `SMK-05` | Buka modul Admin dan verifikasi daftar *System Users* tampil | Completed | BT | Yes | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 6 | **REQ-OHRM-03** | Keterjangkauan Modul PIM (*Employee List*) | `SMK-06` | Buka modul PIM dan verifikasi daftar karyawan tampil | Completed | BT | Yes | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 7 | **REQ-OHRM-04** | Keterjangkauan Modul Leave (*Leave List*) | `SMK-07` | Buka modul Leave dan verifikasi daftar cuti tampil | Completed | BT | Yes | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 8 | **REQ-OHRM-05** | Keterjangkauan Modul Time (*Timesheets*) | `SMK-08` | Buka modul Time dan verifikasi tampilan *Employee Timesheet* | Completed | BT | Yes | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 9 | **REQ-OHRM-06** | Keterjangkauan Modul Recruitment (*Candidates*) | `SMK-09` | Buka modul Recruitment dan verifikasi daftar kandidat tampil | Completed | BT | Yes | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 10 | **REQ-OHRM-07** | Keterjangkauan Modul My Info (*Personal Details*) | `SMK-10` | Buka modul My Info dan verifikasi rincian data personal tampil | Completed | BT | Yes | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 11 | **REQ-OHRM-08** | Keterjangkauan Modul Performance (*Reviews*) | `SMK-11` | Buka modul Performance dan verifikasi halaman pencarian evaluasi tampil | Completed | BT | Yes | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 12 | **REQ-OHRM-09** | Renderisasi Widget Modul Dashboard | `SMK-12` | Buka kembali modul Dashboard dan pastikan seluruh *widget* ter-render | Completed | BT | Yes | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 13 | **REQ-OHRM-10** | Keterjangkauan Modul Directory | `SMK-13` | Buka modul Directory dan verifikasi direktori karyawan tampil | Completed | BT | Yes | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 14 | **REQ-OHRM-11** | Gerbang Keamanan Modul Maintenance (*Re-Authentication*) | `SMK-14` | Buka modul Maintenance dan pastikan muncul gerbang konfirmasi password `Administrator Access` | Completed | BT | Yes | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 15 | **REQ-OHRM-12** | Keterjangkauan Modul Claim | `SMK-15` | Buka modul Claim dan verifikasi halaman *Assign Claim* tampil | Completed | BT | Yes | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 16 | **REQ-OHRM-13** | Keterjangkauan Modul Buzz (*Social Feed*) | `SMK-16` | Buka modul Buzz dan verifikasi *social feed* internal tampil | Completed | BT | No | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 17 | **REQ-OHRM-14** | Manajemen Sesi, Proteksi Rute, & Pemulihan Password | `SMK-17` | Klik *User Dropdown* di kanan atas dan verifikasi opsi About, Support, Change Password, Logout | Completed | BT | Yes | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 18 | **REQ-OHRM-14** | Manajemen Sesi, Proteksi Rute, & Pemulihan Password | `SMK-18` | Klik *Logout* dan verifikasi sesi berakhir serta diarahkan ke `/auth/login` | Completed | BT | Yes | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 19 | **REQ-OHRM-14** | Manajemen Sesi, Proteksi Rute, & Pemulihan Password | `SMK-19` | Akses langsung `/admin/viewSystemUsers` setelah *logout* dan pastikan diblokir/redirect ke login | Completed | BT | Yes | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |
| 20 | **REQ-OHRM-14** | Manajemen Sesi, Proteksi Rute, & Pemulihan Password | `SMK-20` | Klik *Forgot your password?* dan verifikasi form `/auth/requestPasswordResetCode` tampil | Completed | BT | Yes | N/A | Passed | N/A | None | None | N/A | **Full (100%)** |

---

## Ringkasan Metrik Cakupan

- **Total Requirements**: 14 (`REQ-OHRM-01` s.d. `REQ-OHRM-14`)
- **Total Test Cases**: 20 (`SMK-01` s.d. `SMK-20`)
- **Requirement Coverage**: **100% (14/14 Full Coverage)**
- **Test Execution Progress (`UAT/Demo Env`)**: **20/20 Passed (100%)**
- **Temuan Non-Blocking (Observasi Kosmetik/DOM)**: 3 observasi tercatat di `Test_Report.md` (tidak ada *functional defect*).
