# Test Cases — Cross-Cutting (Security/Perf/A11y/Responsive)

| ID | Fitur | Langkah | Expected |
|---|---|---|---|
| TC-X-01 | Admin no login | Akses /admin/ di form/desk/book/draw | Redirect/login/403 |
| TC-X-02 | XSS input | Input `<script>alert(1)</script>` di form | Tidak dieksekusi, tersanitasi/escaped |
| TC-X-03 | SQLi basic | Input `' OR 1=1 --` | Tidak error/leak data |
| TC-X-04 | HTTPS all services | Cek tiap URL | HTTPS aktif |
| TC-X-05 | Perf portal | Load portal | < 2s (normal network) |
| TC-X-06 | Perf desk | Load desk | < 2s (pantau, saat ini 0.7s) |
| TC-X-07 | A11y keyboard | Tab navigation | Focus visible, urutan logis |
| TC-X-08 | A11y alt text | Inspect images | Alt text ada |
| TC-X-09 | Responsive all | Viewport 375px semua service | No horizontal scroll kritikal |
| TC-X-10 | Console errors | Buka DevTools | Tidak ada error fatal |