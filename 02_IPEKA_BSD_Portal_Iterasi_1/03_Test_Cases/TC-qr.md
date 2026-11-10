# Test Cases — QR Generator (qr.ipekabsd.my.id)

| ID | Fitur | Langkah | Expected |
|---|---|---|---|
| TC-Q-01 | Load | Buka URL | 200, form QR tampil |
| TC-Q-02 | Content type Link | Pilih Link + input URL | Preview QR tampil |
| TC-Q-03 | Auto https | Input "example.com" | URL jadi https://example.com |
| TC-Q-04 | Content type Text | Pilih Teks + input | QR tampil |
| TC-Q-05 | Email | Pilih Email + input email | QR mailto tampil |
| TC-Q-06 | Phone | Pilih Telepon + input nomor | QR tel tampil |
| TC-Q-07 | WiFi | Pilih WiFi + SSID/password | QR tampil |
| TC-Q-08 | Color fg/bg | Ubah warna | Preview berubah |
| TC-Q-09 | Error correction | Pilih L/M/Q/H | Preview & kapasitas berubah |
| TC-Q-10 | Margin | Ubah margin | Preview berubah |
| TC-Q-11 | Download size | Pilih 512/1024/2048 | Unduh sesuai ukuran |
| TC-Q-12 | Download PNG | Klik Unduh PNG | File PNG terunduh |
| TC-Q-13 | Download SVG | Klik Unduh SVG | File SVG terunduh |
| TC-Q-14 | Copy image | Klik Salin gambar | Clipboard terisi |
| TC-Q-15 | Reset | Klik Atur ulang | Form kembali default |
| TC-Q-16 | Save history | Klik Simpan ke riwayat | Item muncul di Riwayat |
| TC-Q-17 | Clear history | Klik Hapus semua | Riwayat kosong |
| TC-Q-18 | Invalid URL | Input "abc" | Pesan error/kapasitas |
| TC-Q-19 | Responsive | Viewport 375px | Form & preview usable |