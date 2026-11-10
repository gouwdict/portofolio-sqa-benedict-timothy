# Smoke Execution Report

Tanggal: 04/11/2026

## URL Smoke
| Service | URL | Status | Response Time |
|---|---|---|---|
| Portal | https://app.ipekabsd.my.id/ | 200 | 0.17s |
| Visit | https://visit.ipekabsd.my.id | 200 | - |
| Booking | https://book.ipekabsd.my.id | 200 | - |
| Lucky Draw | https://draw.ipekabsd.my.id | 200 | - |
| QR | https://qr.ipekabsd.my.id | 200 | - |
| Cuaca | https://eco.ipekabsd.my.id | 200 | - |
| Form | https://form.ipekabsd.my.id | 200 | 0.18s |
| UniFi | https://unifi.ipekabsd.my.id | 200 | - |
| Internet | https://inet.ipekabsd.my.id | 200 | - |
| HelpDesk | https://desk.ipekabsd.my.id | 200 | 0.71s |

## Functional Smoke
- Portal: 9 kartu & link tampil.
- Visit: form School Tour & Visitor tampil, validasi required.
- Booking: form & jadwal tampil.
- QR: preview & download UI tampil.
- Form: form & tabel peminjam tampil.
- Desk: timeline & empty state tampil.

## Observasi
- HelpDesk load 0.71s (lebih lambat dari portal).
- Admin link terekspos pada beberapa service (form, book, draw, desk).
- Cookie `ipeka_admin` diset pada portal.

## Screenshot Automation
- Folder: `07_Screenshots/<service>/Desktop|Mobile/home.png`
- Validation screenshots: Visit, Booking, Form (empty submit).
- Total screenshot: 23 (20 home + 3 validation).

## Console Errors
- UniFi: 401/WebSocket auth (expected tanpa login).
- HelpDesk: 1 resource 404 (perlu investigasi).