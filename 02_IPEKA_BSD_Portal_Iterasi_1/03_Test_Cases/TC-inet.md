# Test Cases — Internet Traffic (inet.ipekabsd.my.id)

| ID | Fitur | Langkah | Expected |
|---|---|---|---|
| TC-I-01 | Load | Buka URL | 200, sensor list tampil |
| TC-I-02 | Sensors | Cek 3 sensor | iForte, Taycon, BaliFiber tampil |
| TC-I-03 | Refresh manual | Klik Refresh | Data update |
| TC-I-04 | Refresh auto | Pilih 15s/60s/5min | Auto refresh aktif |
| TC-I-05 | Graph/Table/Events | Klik ikon | View berubah |
| TC-I-06 | Tag filter | Filter states/types/groups | List terfilter |
| TC-I-07 | Responsive | Viewport 375px | Tabel tidak overflow berlebihan |