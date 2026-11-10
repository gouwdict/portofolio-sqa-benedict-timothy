# PRD — Portal Aplikasi Internal IPEKA BSD

**Versi:** 1.0 (draft dari analisis live site)  
**Tanggal:** 6 November 2026  
**Status:** Draft untuk review  
**Sumber:** `https://app.ipekabsd.my.id` dan 10 subdomain layanan  
**Lokasi proyek QA:** `D:\Test Project\Portofolio QA Manual\03_IPEKA_BSD_Portal_Iterasi_2`

---

## 1. Ringkasan

Portal Aplikasi Internal IPEKA BSD adalah hub tunggal untuk 10 layanan operasional divisi IT sekolah IPEKA BSD. Portal menampilkan kartu layanan yang mengarah ke subdomain masing-masing, plus kontak IT Call Center (1010). Produk bersifat internal-only dan digunakan staf/guru/siswa/admin untuk booking, registrasi tamu, undian, QR, monitoring cuaca/jaringan, dan helpdesk/event IT.

## 2. Tujuan produk

- Menyediakan satu titik masuk (single entry point) ke seluruh aplikasi internal IT.
- Mengurangi pencarian manual link/URL layanan.
- Menstandarkan akses (Google Workspace sekolah / PIN admin) ke layanan yang memerlukan autentikasi.
- Menjadi dokumentasi hidup untuk cakupan layanan IT sekolah.

## 3. Pengguna & persona

| Persona | Kebutuhan utama | Layanan yang dipakai |
|---|---|---|
| Staf IT | Kelola booking, event, tiket, jaringan | Admin semua layanan, UniFi, PRTG, HelpDesk |
| Guru/Staff sekolah | Booking printer rapor, ruangan, meeting room | Booking Printer, Form Event, Booking Meeting Room |
| Siswa/Orang tua | School tour/visitor registration | Visit & School Tour |
| Panitia event | Undian, QR code | Lucky Draw, QR Generator |
| Tamu eksternal | Registrasi kunjungan | Visitor form |
| Monitoring ops | Cuaca, bandwidth | Weather, Internet Traffic |

## 4. Ruang lingkup

### In scope
- Portal landing page + navigasi ke 10 layanan.
- Booking printer rapor (kalender ketersediaan, sesi, status).
- Booking ruangan event (Google SSO, filter tanggal, tabel booking).
- Booking meeting room (Google SSO, tabel booking).
- Lucky draw (undian server-side, hasil).
- QR generator (client-side, multi tipe, download PNG/SVG, riwayat lokal).
- Visit & school tour (registrasi visitor, school tour info).
- Weather station real-time (metrik + chart 24 jam).
- UniFi controller (manajemen WiFi/perangkat).
- Internet traffic monitoring (PRTG, 3 sensor ISP).
- IT events & tasks timeline + admin PIN.

### Out of scope (saat ini)
- Pembayaran, HR, akademik, LMS.
- Mobile native app.
- Public marketing website.

## 5. Arsitektur & konteks sistem

- **Portal:** `app.ipekabsd.my.id` (static landing, Bootstrap + RemixIcon).
- **Layanan:** masing-masing subdomain (`book`, `form`, `room`, `draw`, `qr`, `visit`, `eco`, `unifi`, `inet`, `desk`).
- **Autentikasi:**
  - Google Workspace `@bsd.ipeka.sch.id` untuk Form Event & Booking Meeting Room.
  - PIN admin 6 digit untuk beberapa admin panel.
  - UniFi OS login terpisah.
- **Data:** sebagian client-side (QR), sebagian server (booking, weather, PRTG, lucky draw).
- **Branding:** logo IPEKA, footer “Internal use only”.

## 6. Kebutuhan fungsional (per modul)

### 6.1 Portal
- Menampilkan 10 kartu layanan dengan judul, deskripsi, link “Buka”.
- Menampilkan IT Call Center 1010 (tel link).
- Footer copyright & internal-use notice.
- Semua link layanan harus membuka subdomain yang valid.

### 6.2 Booking Printer Rapor
- Form booking: Nama, Jenjang (Early Years/Elementary/Junior High/Senior High), Tanggal, Sesi.
- Kalender menampilkan status: Terisi sebagian, Penuh, Ditutup.
- Sesi muncul setelah tanggal dipilih.
- Daftar booking: filter Akan Datang / Sudah Lewat / Semua.
- Admin login via Google atau PIN.

### 6.3 Form Event
- Login dengan akun Google sekolah untuk booking.
- Daftar booking ruangan dengan filter waktu (hari ini, 7 hari, 30 hari, sudah lewat, semua).
- Kolom: Tanggal, Unit, Waktu, Nama Kegiatan, Gedung, Ruangan, PIC.
- Admin login Google/PIN.

### 6.4 Booking Meeting Room
- Login Google sekolah.
- Tabel: Tanggal, Waktu, Ruangan, Pemesan, Keperluan.
- Filter waktu.
- Admin login Google/PIN.

### 6.5 Lucky Draw
- Judul event (contoh: “Doorprice Natal IPEKA BSD”).
- Status undian (menunggu/selesai).
- Hasil undian ditampilkan setelah draw.
- Pemenang dipilih acak oleh server.

### 6.6 QR Generator
- Tipe konten: Tautan, Teks, Email, Telepon, WiFi.
- Input detail per tipe.
- Kustomisasi: warna kode, warna latar, error correction (L/M/Q/H), margin, ukuran unduhan (512/1024/2048 px).
- Pratinjau langsung dengan modul/versi/data/kapasitas.
- Unduh PNG/SVG, salin gambar, simpan ke riwayat.
- Riwayat lokal (0 awal), hapus semua.
- Proses di browser, tidak kirim ke server.

### 6.7 Visit & School Tour
- Halaman bilingual (EN/ID).
- Pilihan: School Tour & Visitor.
- School Tour: saat ini “not open for booking yet”, arahkan WhatsApp.
- Visitor form: Nama, Telepon/WhatsApp, Plat kendaraan (opsional), Tujuan kunjungan (wajib), submit.
- Validasi field wajib.

### 6.8 Weather (Eco)
- Metrik real-time: suhu, feels-like, high/low 24 jam, kelembapan, angin, curah hujan (jam/bulan/tahun), tekanan, radiasi matahari, UV, indoor.
- Toggle satuan Imperial.
- Chart 24 jam: suhu & kelembapan, angin, curah hujan, tekanan & radiasi.
- Update data tiap 30 detik; riwayat tiap 5 menit; stasiun kirim ~1 menit sekali.
- API key hanya di server.

### 6.9 UniFi Controller
- Login UniFi OS.
- Kelola jaringan WiFi dan perangkat UniFi sekolah.

### 6.10 Internet Traffic
- Dashboard PRTG: sensor per ISP (iForte 100Mbps, Taycon 500Mb, BaliFiber 500Mb).
- Tampilan kbit/second, status, graph/table/events.
- Refresh manual/otomatis (off/15s/60s/5min).

### 6.11 IT Events & Tasks (HelpDesk/desk)
- Timeline H−1 sampai H+7.
- Daftar event/kegiatan IT.
- Admin PIN 6 digit.
- (Deskripsi portal menyebut tiket bantuan; fungsi tiket tidak terlihat di halaman publik—perlu verifikasi.)

## 7. Kebutuhan non-fungsional

- **Availability:** layanan internal harus tersedia jam kerja sekolah; monitoring via PRTG.
- **Performance:** halaman portal < 2s; weather refresh tidak boleh memblokir UI.
- **Security:** HTTPS semua subdomain; secret/API key hanya server; Google SSO untuk booking; PIN admin tidak ditampilkan; internal-use only.
- **Privacy:** data tamu/booking disimpan sesuai kebutuhan operasional; QR tidak menyimpan data di server.
- **Accessibility:** form field label jelas; kontras; navigasi keyboard (perlu audit).
- **Browser support:** browser modern (Chrome/Edge/Firefox/Safari).
- **Responsiveness:** portal & form usable di mobile (perlu audit).

## 8. Integrasi

- Google OAuth (Workspace sekolah) untuk Form Event & Meeting Room.
- Weather station API (server-side key).
- PRTG Traffic Grapher (legacy, freeware) untuk internet traffic.
- UniFi OS (on-prem controller).
- WhatsApp (school tour fallback).

## 9. User flow utama

1. User buka portal → pilih layanan → (jika perlu) login Google/PIN → isi form → konfirmasi → lihat jadwal/hasil.
2. Tamu: portal → Visit → Visitor → isi form → submit.
3. Admin IT: portal → layanan → admin login → kelola jadwal/event/undian.

## 10. Metrik keberhasilan

- Semua 10 link layanan HTTP 200 (saat ini: ✅).
- Jumlah booking berhasil per bulan.
- Jumlah tiket/event tercatat.
- Uptime portal & subdomain.
- Waktu rata-rata penyelesaian booking.
- Adoption: unique users per layanan.

## 11. Hasil pengujian (web test)

Diuji 6 Nov 2026:
- ✅ `app` + 10 subdomain: HTTP 200.
- ✅ Semua link navigasi portal valid (kecuali `tel:1010`, bukan HTTP—normal).
- ✅ Form visitor menampilkan field wajib & opsional dengan jelas.
- ✅ QR generator menampilkan opsi lengkap & pratinjau.
- ✅ Weather menampilkan struktur metrik & chart placeholder (data load asinkron).
- ✅ PRTG menampilkan 3 sensor ISP dengan status.
- ⚠️ School tour booking saat ini dinonaktifkan (“not open for booking yet”).
- ⚠️ UniFi OS memerlukan login (tidak dapat diaudit tanpa kredensial).
- ⚠️ `desk` publik hanya menampilkan timeline event, bukan form tiket (perlu verifikasi scope HelpDesk).
- ⚠️ Auth flow Google/PIN tidak diuji (butuh akun sekolah).

## 12. Risiko & asumsi

- Banyak layanan berbeda autentikasi → UX fragmentasi.
- PRTG versi lama (freeware) → risiko keamanan/kompatibilitas.
- School tour booking nonaktif → fitur belum siap.
- Akses admin berbasis PIN 6 digit → risiko brute-force jika tidak dibatasi.
- Tidak ada dokumentasi API publik → sulit integrasi/monitoring.

## 13. Rekomendasi (backlog)

1. Sentralisasi autentikasi (SSO Google untuk semua layanan internal).
2. Audit aksesibilitas & responsivitas (mobile).
3. Rate limit / lockout untuk PIN admin.
4. Aktifkan school tour booking atau hapus CTA.
5. Tambahkan health-check endpoint per layanan.
6. Dokumentasikan API & schema data.
7. Tambahkan monitoring uptime otomatis + alert.
8. Verifikasi fitur HelpDesk (tiket) vs event timeline.

## 14. Kriteria penerimaan (portal)

- Semua 10 kartu layanan tampil & link valid.
- Portal responsive di mobile & desktop.
- Tidak ada broken link (selain protokol non-HTTP).
- Footer & branding konsisten.
- Lighthouse performance ≥ 80 (target).

---
**Prepared & Executed By:** Benedict Timothy — Manual QA (AI-Assisted) | **Execution Date:** 06 Nov 2026

## Cross-Browser Verification (09 Nov 2026)

- **Browsers**: Chromium, Firefox, WebKit
- **Smoke Suite (Portal + Service Links)**: 42/42 Passed (14 checks × 3 browsers)
- **Evidence Folders**: `Evidence/Chromium`, `Evidence/Firefox`, `Evidence/WebKit` (13 screenshots each)
- **Execution Mode**: Automated via Playwright (Reviewed & Verified by Benedict Timothy)
