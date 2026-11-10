# Manual Follow-up — Interactive Test Cases (Human-in-the-Loop QA)

Dokumen ini mendokumentasikan tindak lanjut eksekusi manual oleh **Benedict Timothy** untuk skenario yang tidak dapat diselesaikan secara murni oleh *event synthesis* otomatis pada tahap awal (khususnya `FEED-005` dan `MSG-003`, serta 6 skenario interaktif pendamping).

| Atribut | Detail |
| :--- | :--- |
| **Penyusun & Eksekutor** | Benedict Timothy (Manual QA) |
| **Tanggal Eksekusi** | 5 November 2026 |
| **Referensi Dokumen** | `LinkedIn_Smoke_Test_Plan.md` (`TP-LNKD-SMOKE-V1.1`) & `RTM_LinkedIn_Smoke.md` |
| **Rekonsiliasi Status** | Tahap 1 (*AI-Assisted via Playwright MCP*): `24 Passed`, `2 Blocked` (`FEED-005`, `MSG-003`), `6 Pending Manual` (`FEED-002`, `SEARCH-004`, `PROFILE-003`, `NETWORK-002`, `JOBS-004`, `NOTIF-002`)<br>Tahap 2 (*Manual Interactive Execution*): Seluruh `8 TC` (`2 Blocked` + `6 Pending`) dieksekusi manual hingga lulus -> **Total Akhir: 32/32 Passed (100%)** |

---

## 1. Detail Tindak Lanjut 2 Kasus yang Semula Blocked pada Otomasi

### 1.1 `FEED-005` — Komentar pada Post
- **Modul**: Home Feed (`REQ-LNKD-02`)
- **Priority**: P2
- **Akar Masalah Blokir Otomasi**: Komponen *rich-text editor* komentar LinkedIn memerlukan fokus dan *input event* asli dari interaksi pengguna pada DOM dinamis sebelum tombol kirim diaktifkan.
- **Langkah Eksekusi Manual**:
  1. Buka Home Feed (`https://www.linkedin.com/feed/`).
  2. Pilih post uji agar tidak mengganggu post pengguna lain.
  3. Klik tombol **Comment** di bawah post hingga editor komentar terbuka.
  4. Ketik teks uji secara manual dan klik tombol **Comment / Post**.
  5. Verifikasi komentar muncul di bawah post beserta nama dan avatar akun uji.
  6. Ambil tangkapan layar bukti (`screenshots/FEED-005 — Komentar pada post.png`), lalu hapus komentar uji (*cleanup*).
- **Status Akhir**: **Passed** (Diverifikasi manual oleh Benedict Timothy, 2026-11-05).

---

### 1.2 `MSG-003` — Kirim Pesan pada Thread Messaging
- **Modul**: Messaging (`REQ-LNKD-07`)
- **Priority**: P1
- **Akar Masalah Blokir Otomasi**: Panel komposisi pesan pada LinkedIn Messaging menggunakan *state listener* internal yang memvalidasi penekanan tombol nyata sebelum mengaktifkan pengiriman pesan.
- **Langkah Eksekusi Manual**:
  1. Buka halaman Messaging (`https://www.linkedin.com/messaging/`).
  2. Buka *thread* percakapan uji.
  3. Klik kolom input pesan (`Write a message…`), ketik pesan uji `"Smoke test message - ignore"`, lalu tekan **Send**.
  4. Verifikasi pesan tampil di dalam *thread* beserta *timestamp* pengiriman.
  5. Ambil tangkapan layar bukti (`screenshots/MSG-003 — Kirim pesan.png`).
- **Status Akhir**: **Passed** (Diverifikasi manual oleh Benedict Timothy, 2026-11-05).

---

## 2. Rekapitulasi 6 Kasus Interaktif Lain yang Diselesaikan Manual

Selain 2 kasus di atas, 6 skenario berikut diselesaikan langsung melalui verifikasi manual oleh tester untuk memastikan akurasi perilaku antarmuka:

| TC ID | Skenario | Hasil Verifikasi Manual | Status Akhir | Bukti / Catatan |
| :--- | :--- | :--- | :---: | :--- |
| `FEED-002` | Infinite scroll pada Home Feed | Pengguliran halaman ke bawah memicu pemuatan *batch* post berikutnya secara mulus | **Passed** | Diverifikasi manual oleh Benedict Timothy |
| `SEARCH-004` | Filter pencarian berdasarkan lokasi | Penerapan filter lokasi `"Indonesia"` memperbarui daftar hasil pencarian secara akurat | **Passed** | Diverifikasi manual oleh Benedict Timothy |
| `PROFILE-003` | Edit headline profil sendiri | Modal edit profil menyimpan perubahan *headline* dan memperbarui tampilan profil | **Passed** | Diverifikasi manual oleh Benedict Timothy |
| `NETWORK-002` | Kirim permintaan koneksi | Klik tombol `Connect` mengubah status tombol menjadi `Pending` | **Passed** | Diverifikasi manual oleh Benedict Timothy |
| `JOBS-004` | Simpan lowongan kerja (*Save Job*) | Klik tombol `Save` menyimpan lowongan ke daftar *Saved jobs* | **Passed** | `screenshots/JOBS-004_save_job.png` |
| `NOTIF-002` | Buka salah satu notifikasi | Klik item notifikasi mengarahkan browser ke halaman konten terkait | **Passed** | Diverifikasi manual oleh Benedict Timothy |
