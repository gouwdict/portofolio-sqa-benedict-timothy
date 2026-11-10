# Test Cases — Peminjaman Barang IT (form.ipekabsd.my.id)

| ID | Fitur | Langkah | Expected |
|---|---|---|---|
| TC-F-01 | Load | Buka URL | 200, form & tabel tampil |
| TC-F-02 | Portal link | Klik portal | Buka app portal |
| TC-F-03 | Admin link (no login) | Klik admin/ akses /admin/ | Redirect/login/403 |
| TC-F-04 | Required | Submit form kosong | Error required |
| TC-F-05 | Peran dropdown | Pilih peran | Diterima |
| TC-F-06 | Jenjang dropdown | Pilih jenjang | Diterima |
| TC-F-07 | Phone optional | Kosongkan telepon | Submit sukses |
| TC-F-08 | Tambah barang | Klik Tambah | Baris barang baru |
| TC-F-09 | Stok tampil | Lihat stok | Angka stok tampil |
| TC-F-10 | Submit success | Isi semua + pilih barang | Request terkirim |
| TC-F-11 | Daftar peminjam | Cek tabel | Data baru muncul |
| TC-F-12 | Status | Cek status | Status default tampil |
| TC-F-13 | Responsive | Viewport 375px | Form & tabel usable |