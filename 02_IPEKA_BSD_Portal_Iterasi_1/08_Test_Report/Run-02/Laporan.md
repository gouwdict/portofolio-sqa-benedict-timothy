# Eksekusi lanjutan QA · Portal IPEKA BSD
4 November 2026 · Sesi live non-admin · Waktu dalam WIB

## Dasar dan metode
Arsip awal berisi 110 kasus unik. Sebelum sesi ini, 88 berstatus Pass, 2 Fail, dan 20 Not Run. Sesi ini memprioritaskan 20 kasus terbuka dan memeriksa kembali gejala pada dua kasus Fail. Chromium lokal tidak dapat dimulai oleh Playwright CLI karena pembuatan socket ditolak. Eksekusi live menggunakan Chromium jarak jauh, kontrol Playwright, dan pengamatan tampilan desktop. Build aplikasi tidak diketahui.

## Hasil kasus yang semula Not Run
| ID | Hasil sesi | Bukti atau prasyarat |
|---|---|---|
| TC-V-08 | Pass pada sisi klien | Kolom pelat School Tour menerima B 1234 QA, mempertahankan nilai, dan melaporkan valid tanpa pesan kesalahan. Validasi server saat submit tidak dicakup. |
| TC-Q-11 | Fail | Ketiga PNG aktual berukuran 495², 1023², dan 2046² piksel. Langkah reproduksi di bawah. |
| TC-Q-12 | Pass | Tiga unduhan selesai. Ketiganya berformat PNG berdasarkan isi file. |
| TC-Q-13 | Pass | Unduhan selesai dan dokumen hasil berformat SVG. |
| TC-Q-14 | Pass | Setelah Salin gambar, aplikasi mengonfirmasi penyalinan dan clipboard berisi image/png. |
| TC-E-05 | Pass | Tertinggi 36,5 °C dan terendah 25,1 °C untuk 24 jam tampil. |
| TC-E-06 | Pass | Kelembapan 53%, angin 2,9 km/j, dan hujan harian 0,0 mm tampil. |
| TC-E-07 | Pass | Curah hujan bulan ini 0,0 mm dan tahun ini 93,5 mm tampil. |
| TC-E-08 | Pass | Tekanan 1.008,7 hPa, radiasi 663 W/m², indeks UV 6, dan suhu dalam ruangan 34,8 °C tampil. |
| TC-E-10 | Pass | Empat grafik SVG 24 jam tampil. Jumlah path dalam empat grafik berturut-turut 6, 6, 3, dan 6. Bagian angin, hujan dan tekanan/radiasi tersedia setelah keadaan memuat selesai. |
| TC-E-11 | Pass untuk pembaruan otomatis | Tanpa refresh manual, waktu pengukuran berubah dari 09.54 ke 09.55, lalu 09.56 WIB. Timestamp stasiun dan interval polling browser adalah dua ukuran yang berbeda. Pengamatan membuktikan pembaruan otomatis, bukan presisi timer. |
| TC-B-07 | Terblokir | Jadwal melaporkan semua sesi masih kosong. Tanggal 4 November menampilkan satu sesi lewat dan dua sesi kosong. Prasyarat kasus ialah sesi penuh. |
| TC-V-05, TC-V-06, TC-V-10, TC-V-11, TC-B-08, TC-F-10 | Menunggu lingkungan atau izin transaksi | Keenam kasus memerlukan pengiriman pendaftaran, reservasi atau peminjaman ke layanan sekolah. Belum ada hasil submit. |

## Temuan QR · TC-Q-11
Buka QR Generator, masukkan https://example.com sebagai tautan, gunakan tampilan default, pilih ukuran, tunggu hingga label ukuran unduhan stabil, lalu unduh PNG. Baca dimensi intrinsik dari berkas. Pratinjau menunjukkan 25 × 25 modul dengan margin 4 modul. Perilaku konsisten dengan pembulatan ke kelipatan 33 piksel. Penyebab implementasi belum diperiksa.

| Ukuran yang dipilih | Dimensi file aktual | Bukti |
|---|---|---|
| 512 × 512 | 495 × 495 | evidence/pilihan-512.png |
| 1024 × 1024 | 1023 × 1023 | evidence/pilihan-1024.png |
| 2048 × 2048 | 2046 × 2046 | evidence/pilihan-2048.png |

Klasifikasi awal: dampak rendah. Pengguna tetap memperoleh gambar, tetapi ukuran ekspor berbeda dari pilihan yang ditawarkan. Bandingkan terhadap kebutuhan ukuran presisi saat triase.

## Pengujian ulang Internet Traffic
TC-I-07 dan TC-X-09 mengacu pada gejala yang sama. Saat Chromium desktop menampilkan Internet Traffic dengan lebar area halaman 449 dan 337 piksel CSS, tabel dan dokumen mencapai 608 piksel pada keduanya. Selisihnya 159 dan 271 piksel. Pada lebar 1363 piksel, seluruh tabel muat. Angka diperoleh dari ukuran DOM setelah zoom browser. Pada lebar area konten tepat 375 piksel CSS, tabel dan dokumen berukuran 608 piksel. Selisihnya 233 piksel dan kolom nilai sensor berada di luar area awal. TC-I-07 tetap Fail. Internet Traffic juga melanggar kriteria lintas layanan TC-X-09 sehingga kasus itu tetap Fail. Ini uji desktop dengan zoom dan panel samping, bukan emulasi perangkat sentuh. Layanan lain tidak diuji ulang pada lebar ini.

### Reproduksi pada perangkat yang menjalankan Playwright CLI
Gunakan perintah berikut untuk mengulang observasi pada viewport 375 × 812 di lingkungan yang dapat meluncurkan Chromium. Tunggu sampai daftar sensor tampil sebelum mengukur.

```powershell
playwright-cli -s=inet375 open https://inet.ipekabsd.my.id/
playwright-cli -s=inet375 resize 375 812
playwright-cli -s=inet375 snapshot
playwright-cli -s=inet375 eval "() => ({width: document.documentElement.clientWidth, content: document.documentElement.scrollWidth})"
playwright-cli -s=inet375 screenshot
playwright-cli -s=inet375 close
```

Jika content lebih besar dari width, periksa apakah pengguna harus menggulir seluruh halaman untuk melihat nilai sensor. Catat ukuran aktual, selisih lebar, dan dampaknya.

## Interval pembaruan Internet Traffic
TC-I-04 — Pass. Pilih tiap mode pada halaman daftar sensor, lalu amati waktu halaman tanpa refresh manual. Nilai berikut merupakan waktu yang ditampilkan PRTG.

| Mode | Sebelum | Setelah | Selisih teramati |
|---|---|---|---|
| 15 detik | 09.56.09 | 09.56.24 | 15 detik |
| 60 detik | 09.56.36 | 09.57.37 | 61 detik |
| 5 menit | 09.57.46 | 10.02.48 | 302 detik |

Waktu berasal dari halaman setelah masing-masing pemuatan, sehingga mencakup durasi navigasi. Perubahan angka bandwidth tidak digunakan sebagai satu-satunya indikator karena sensor memiliki interval pemindaian tersendiri.

## Pembaruan grafik riwayat cuaca
TC-E-12 — Pass untuk pembaruan otomatis. Pada 10.01.50 dan 10.07.11 WIB, keempat grafik tetap memiliki lebar 516 piksel. Jejak seri SVG pada suhu/kelembapan, angin, hujan, dan tekanan/radiasi berubah tanpa interaksi atau refresh manual di antara kedua pengamatan. Label jam pada sumbu juga bergeser. Jendela pengamatan 5 menit 21 detik menunjukkan pembaruan dalam rentang itu. Detik tepat terjadinya pembaruan tidak diukur.

## Rekap akhir
Di antara 20 kasus awal Not Run, 12 lulus, 1 gagal, 1 terblokir karena tidak tersedia sesi penuh, dan 6 belum dijalankan karena memerlukan transaksi pada layanan sekolah. Kedua kasus yang gagal pada arsip awal tetap gagal dan merujuk satu gejala Internet Traffic. Gabungan dengan hasil historis mencapai 100 Pass, 3 Fail, 1 Blocked, dan 6 Not Run dari 110 kasus. Pass rate kumulatif untuk kasus dengan putusan adalah 100/103 atau 97,1%. Lihat Ledger-110-kasus.md untuk memisahkan sumber tiap status.
