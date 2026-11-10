# Test Cases — Booking Printer Rapor (book.ipekabsd.my.id)

| ID | Fitur | Langkah | Expected |
|---|---|---|---|
| TC-B-01 | Load | Buka URL | 200, form & jadwal tampil |
| TC-B-02 | Portal link | Klik Portal | Buka app portal |
| TC-B-03 | Admin link | Klik Admin | Buka admin/login (tanpa kredensial) |
| TC-B-04 | Required | Submit form kosong | Error required |
| TC-B-05 | Jenjang | Pilih tiap jenjang | Diterima |
| TC-B-06 | Calendar | Pilih tanggal | Sesi muncul |
| TC-B-07 | Sesi availability | Pilih sesi penuh | Tidak bisa booking / status Penuh |
| TC-B-08 | Booking success | Isi nama+jenjang+tanggal+sesi | Booking berhasil |
| TC-B-09 | Tabs | Switch Akan Datang/Sudah Lewat/Semua | List berubah sesuai |
| TC-B-10 | Status badge | Cek sesi | "Terisi sebagian"/"Penuh" sesuai |
| TC-B-11 | Responsive | Viewport 375px | Form & kalender usable |