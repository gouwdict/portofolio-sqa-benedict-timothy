# Requirement Analysis — Portal IPEKA BSD

## 1. System Under Test (SUT)
- URL: https://app.ipekabsd.my.id/
- Tipe: Portal internal + 9 layanan terpisah (subdomain).
- Pengguna: staf/guru/siswa/orang tua/visitor (public untuk beberapa form).
- Akses admin: tidak diuji dengan kredensial (scope QA user).

## 2. Portal (app.ipekabsd.my.id)
Fitur:
- Logo IPEKA → home.
- Kontak IT Call Center (tel:1010).
- 9 kartu layanan + link "Buka":
  1. Visit & School Tour (visit.ipekabsd.my.id)
  2. Booking Printer Rapor (book.ipekabsd.my.id)
  3. Lucky Draw (draw.ipekabsd.my.id)
  4. QR Generator (qr.ipekabsd.my.id)
  5. Cuaca Real-Time (eco.ipekabsd.my.id)
  6. Peminjaman Barang IT (form.ipekabsd.my.id)
  7. UniFi Controller (unifi.ipekabsd.my.id)
  8. Internet Traffic (inet.ipekabsd.my.id)
  9. HelpDesk (desk.ipekabsd.my.id)
- Footer copyright.
- HTTPS + HSTS, no-cache, cookie `ipeka_admin`.

## 3. Visit & School Tour (visit.*)
Fitur:
- Switch bahasa (EN/ID).
- School Tour form: data keluarga (parent, child x3, level, enrollment year), kontak (phone/WhatsApp, email, language, plate), jadwal (date, time dinamis), submit.
- Visitor form: nama, phone/WhatsApp, plate, purpose, submit.
- Validasi field required, tur time depends on date.

## 4. Booking Printer Rapor (book.*)
Fitur:
- Form booking: Nama, Jenjang (Early/Elementary/Junior/Senior High), Tanggal (kalender), sesi (availability), submit.
- Status sesi: Terisi sebagian / Penuh.
- Jadwal booking tabs: Akan Datang / Sudah Lewat / Semua.
- Link Admin & Portal.

## 5. Lucky Draw (draw.*)
Fitur:
- Tampilan "Menunggu undian", hasil undian.
- Admin link.
- Pemilihan pemenang acak server.

## 6. QR Generator (qr.*)
Fitur:
- Jenis konten: Link, Teks, Email, Telepon, WiFi.
- Input detail (URL auto https).
- Styling: warna kode/latar, error correction L/M/Q/H, margin.
- Download size 512/1024/2048.
- Preview: modul, versi, data, kapasitas.
- Download PNG/SVG, copy image, reset, save history, clear history.
- Client-side only (no server data).

## 7. Cuaca Real-Time (eco.*)
Fitur:
- Toggle Imperial/Metrik.
- Data current: suhu, feels like, high/low 24h, humidity, wind, rain (daily/monthly/yearly), pressure, solar, UV, indoor.
- Grafik 24 jam: suhu/kelembapan, angin, hujan, tekanan/radiasi.
- Auto refresh 30 detik, history 5 menit.

## 8. Peminjaman Barang IT (form.*)
Fitur:
- Form: Nama, Peran, Jenjang, telepon (opsional), Keperluan, Tanggal pinjam, barang + stok, submit.
- Daftar peminjam (tabel: peminjam, barang, tanggal, status).
- Admin panel link (tanpa login test).
- Portal link.

## 9. UniFi Controller (unifi.*)
Fitur:
- UniFi OS (login screen) — smoke only, tanpa kredensial.

## 10. Internet Traffic (inet.*)
Fitur:
- PRTG traffic grapher: sensor iForte, Taycon, BaliFiber.
- Refresh manual/15s/60s/5min.
- Graph/table/events, tag filter.

## 11. HelpDesk (desk.*)
Fitur:
- Timeline event/task H-1 s/d H+7.
- Admin link.
- Empty state jika tidak ada kegiatan.

## 12. Non-Functional (scope)
- HTTPS, responsive, basic performance, accessibility, cross-browser.
- Out of scope: load testing berat, backend DB, admin login flow.