# Test Cases — HelpDesk (desk.ipekabsd.my.id)

| ID | Fitur | Langkah | Expected |
|---|---|---|---|
| TC-H-01 | Load | Buka URL | 200, timeline tampil |
| TC-H-02 | Date range | Cek header | H-1 s/d H+7 tanggal hari ini |
| TC-H-03 | Empty state | Jika tidak ada event | Pesan empty state |
| TC-H-04 | Admin link | Klik Admin | Buka admin (tanpa kredensial) |
| TC-H-05 | Portal link | Klik Portal | Buka app portal |
| TC-H-06 | Responsive | Viewport 375px | Timeline usable |