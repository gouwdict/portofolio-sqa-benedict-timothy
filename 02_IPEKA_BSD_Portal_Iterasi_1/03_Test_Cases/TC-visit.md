# Test Cases — Visit & School Tour (visit.ipekabsd.my.id)

| ID | Fitur | Langkah | Expected |
|---|---|---|---|
| TC-V-01 | Home load | Buka URL | 200, pilihan School Tour/Visitor |
| TC-V-02 | Language | Klik Bahasa Indonesia | Halaman berubah ke /id/ |
| TC-V-03 | Nav back | Klik Back to home | Kembali ke home visit |
| TC-V-04 | School Tour required | Submit form kosong | Error required tampil |
| TC-V-05 | Child fields | Isi parent+child1+level+year+phone+language+date+time | Submit sukses / konfirmasi |
| TC-V-06 | Optional fields | Kosongkan email/plate/child2/3 | Tetap submit sukses |
| TC-V-07 | Tour time dependency | Pilih tanggal | Dropdown time terisi; tanggal tanpa tour disabled |
| TC-V-08 | Plate validation | Input plat valid | Diterima |
| TC-V-09 | Visitor required | Submit visitor kosong | Error required |
| TC-V-10 | Visitor success | Isi nama+phone+purpose | Submit sukses |
| TC-V-11 | Visitor optional plate | Kosongkan plate | Submit sukses |
| TC-V-12 | Responsive mobile | Viewport 375px | Form tidak overflow |