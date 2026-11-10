# Test Cases — Portal (app.ipekabsd.my.id)

| ID | Fitur | Langkah | Expected |
|---|---|---|---|
| TC-P-01 | Load portal | Buka URL | HTTP 200, judul & logo tampil |
| TC-P-02 | Logo | Klik logo | Tetap/refresh ke home |
| TC-P-03 | Tel link | Klik "IT Call Center 1010" | Buka dialer tel:1010 |
| TC-P-04 | Smoke link | Klik tiap "Buka" (9) | Buka halaman service, no 404/500 |
| TC-P-05 | HTTPS | Cek URL | HTTPS aktif, HSTS header |
| TC-P-06 | Responsive mobile | Viewport 375px | Kartu tidak overflow, tombol dapat diklik |
| TC-P-07 | Responsive desktop | Viewport 1366px | Layout rapi |
| TC-P-08 | Cookie | Inspect cookie | `ipeka_admin` Secure/HttpOnly/SameSite Lax |
| TC-P-09 | Cache | Inspect headers | no-store/no-cache |
| TC-P-10 | Footer | Cek footer | Teks copyright tampil |