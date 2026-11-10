# Test Cases — Cuaca Real-Time (eco.ipekabsd.my.id)

| ID | Fitur | Langkah | Expected |
|---|---|---|---|
| TC-E-01 | Load | Buka URL | 200, loading state lalu data |
| TC-E-02 | Unit toggle | Switch Imperial/Metrik | Satuan berubah |
| TC-E-03 | Current temp | Cek suhu | Angka + satuan tampil |
| TC-E-04 | Feels like | Cek "Terasa seperti" | Tampil |
| TC-E-05 | High/Low 24h | Cek tertinggi/terendah | Tampil |
| TC-E-06 | Humidity/Wind/Rain | Cek metrik | Tampil |
| TC-E-07 | Rain monthly/yearly | Cek curah hujan | Tampil |
| TC-E-08 | Pressure/Solar/UV/Indoor | Cek metrik | Tampil |
| TC-E-09 | Chart temp/humidity | Cek grafik 24 jam | Render |
| TC-E-10 | Chart wind/rain/pressure | Cek grafik | Render |
| TC-E-11 | Auto refresh | Tunggu 30 detik | Data update |
| TC-E-12 | History refresh | Tunggu 5 menit | Grafik update |
| TC-E-13 | Station loading | Reload | "Memuat stasiun…" lalu data |
| TC-E-14 | Responsive | Viewport 375px | Grafik & metrik usable |