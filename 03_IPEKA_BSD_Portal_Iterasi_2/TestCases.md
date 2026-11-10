# Test Cases & Bug Reproduction — Portal Aplikasi Internal IPEKA BSD

**Tanggal:** 6 November 2026
**Executed By:** Benedict Timothy — Manual QA (AI-Assisted)
**Execution Date:** 06 Nov 2026
**Sumber PRD:** PRD.md
**Target:** https://app.ipekabsd.my.id + 10 subdomain

## Ringkasan
- Total test case: 116
- Passed: 79
- Blocked: 37
- Total bug report: 6
- Status diisi berdasarkan verifikasi manual sesi ini.

## Test Cases

### Portal

| TC ID | Feature | Scenario | Preconditions | Steps | Test Data | Expected | Priority | Type | Status | Actual Result | Executed By |
|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-PORTAL-001 | Homepage load | Verify portal homepage loads successfully | Internet connection | 1. Open browser<br>2. Navigate to https://app.ipekabsd.my.id | URL: https://app.ipekabsd.my.id | Page loads with HTTP 200, title 'Portal IPEKA BSD', logo visible | High | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-PORTAL-002 | Branding | Verify header branding and logo | Homepage loaded | 1. Open portal<br>2. Inspect header | N/A | IPEKA logo and 'Portal IPEKA BSD' text visible | Medium | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-PORTAL-003 | Service cards | Verify 10 service cards displayed | Homepage loaded | 1. Open portal<br>2. Count service cards | N/A | Exactly 10 cards with title, description, 'Buka' button | High | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-PORTAL-004 | Service navigation | Verify each service card link opens correct subdomain | Homepage loaded | 1. Click each 'Buka' button<br>2. Verify URL | All 10 services | Each opens matching subdomain with HTTP 200 | High | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-PORTAL-005 | Call center | Verify IT Call Center 1010 link | Homepage loaded | 1. Click 'IT Call Center 1010' | tel:1010 | Dialer/phone app opens with number 1010 | Medium | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-PORTAL-006 | Footer | Verify footer copyright and internal-use notice | Homepage loaded | 1. Scroll to footer | N/A | Footer shows '© 2026 IPEKA BSD IT Division · Internal use only' | Low | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-PORTAL-007 | HTTPS | Verify HTTPS and no mixed content | Homepage loaded | 1. Open DevTools Network<br>2. Check protocol of all resources | N/A | All resources loaded over HTTPS, no mixed-content warnings | High | Security | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-PORTAL-008 | Responsiveness | Verify portal usable on mobile viewport | Homepage loaded | 1. Set viewport 375x667<br>2. Scroll and inspect | Viewport 375x667 | No horizontal scroll, cards stack vertically, text readable | Medium | UI | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-PORTAL-009 | Performance | Verify portal load time under 2s | Clear cache | 1. Open DevTools Performance<br>2. Reload page<br>3. Measure LCP | N/A | Page usable within 2 seconds on broadband | Medium | Performance | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-PORTAL-010 | Accessibility | Verify keyboard navigation through cards | Homepage loaded | 1. Use Tab key across page<br>2. Activate a card with Enter | N/A | Focus visible, cards reachable and activatable via keyboard | Medium | Accessibility | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |

### Navigation/Links

| TC ID | Feature | Scenario | Preconditions | Steps | Test Data | Expected | Priority | Type | Status | Actual Result | Executed By |
|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-LINK-001 | HTTP status | Verify all portal links return HTTP 200 | N/A | 1. Collect hrefs from portal<br>2. Request each URL | 11 URLs | All service URLs return HTTP 200 | High | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-LINK-002 | No redirect loop | Verify service links do not redirect infinitely | N/A | 1. Open each service URL<br>2. Observe redirects | 10 service URLs | Final page loads without redirect loop | Medium | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |

### Booking Printer Rapor

| TC ID | Feature | Scenario | Preconditions | Steps | Test Data | Expected | Priority | Type | Status | Actual Result | Executed By |
|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-PRINT-001 | Page load | Verify booking printer page loads | Internet | 1. Open https://book.ipekabsd.my.id | URL | Page loads with title 'Booking Printer Rapor' | High | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-PRINT-002 | Form fields | Verify booking form fields present | Page loaded | 1. Inspect form | N/A | Fields: Nama, Jenjang, Tanggal, Sesi present | High | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-PRINT-003 | Jenjang options | Verify jenjang dropdown options | Page loaded | 1. Open Jenjang dropdown | N/A | Options: Early Years, Elementary, Junior High, Senior High | Medium | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-PRINT-004 | Calendar legend | Verify calendar status legend | Page loaded | 1. Inspect calendar | N/A | Legend: Terisi sebagian, Penuh, Ditutup displayed | Medium | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-PRINT-005 | Session display | Verify sessions appear after date selection | Page loaded | 1. Select a date in calendar | Valid date | Available sessions list updates | High | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-PRINT-006 | Valid booking | Verify submit booking with valid data | Page loaded, empty slot | 1. Fill Nama, Jenjang, Tanggal, Sesi<br>2. Click Booking | Nama: Test User; Jenjang: Elementary; valid date/session | Booking created and appears in schedule | High | Functional | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-PRINT-007 | Required validation | Verify empty form submission rejected | Page loaded | 1. Click Booking without filling fields | Empty | Validation messages shown, no booking created | High | Functional | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-PRINT-008 | Duplicate slot | Verify duplicate booking on same slot handled | Existing booking on slot | 1. Attempt booking same date/session | Same slot | System prevents duplicate or shows conflict | Medium | Functional | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-PRINT-009 | Filter upcoming | Verify 'Akan Datang' filter | Bookings exist | 1. Click 'Akan Datang' | N/A | Only future bookings displayed | Medium | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-PRINT-010 | Filter past | Verify 'Sudah Lewat' filter | Bookings exist | 1. Click 'Sudah Lewat' | N/A | Only past bookings displayed | Medium | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-PRINT-011 | Filter all | Verify 'Semua' filter | Bookings exist | 1. Click 'Semua' | N/A | All bookings displayed | Medium | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-PRINT-012 | Admin Google login | Verify admin login via Google | Admin account | 1. Click Admin<br>2. Choose Google login | School Google account | Admin panel accessible | High | Functional | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-PRINT-013 | Admin PIN login | Verify admin login via 6-digit PIN | Admin PIN known | 1. Click Admin<br>2. Enter valid PIN | Valid 6-digit PIN | Admin panel accessible | High | Functional | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-PRINT-014 | Invalid PIN | Verify invalid PIN rejected | Admin page | 1. Enter invalid PIN | 123456 (invalid) | Error shown, access denied | High | Security | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-PRINT-015 | Portal link | Verify 'Portal' link returns to portal | Page loaded | 1. Click 'Portal' | N/A | Redirects to https://app.ipekabsd.my.id | Low | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |

### Form Event

| TC ID | Feature | Scenario | Preconditions | Steps | Test Data | Expected | Priority | Type | Status | Actual Result | Executed By |
|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-FORM-001 | Page load | Verify form event page loads | Internet | 1. Open https://form.ipekabsd.my.id | URL | Page loads with title 'Form Event' | High | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-FORM-002 | Google login | Verify 'Masuk' redirects to Google SSO | Page loaded | 1. Click 'Masuk' | N/A | Redirect to Google OAuth | High | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-FORM-003 | Booking list filters | Verify date filters present | Page loaded | 1. Inspect filters | N/A | Filters: Hari ini, 7 hari, 30 hari, Sudah lewat, Semua tanggal | Medium | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-FORM-004 | Table columns | Verify booking table columns | Page loaded | 1. Inspect table | N/A | Columns: Tanggal, Unit, Waktu, Nama Kegiatan, Gedung, Ruangan, PIC | Medium | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-FORM-005 | Auth guard | Verify booking requires login | Not logged in | 1. Click 'Booking Ruangan' | N/A | Redirect to login or prompt | High | Security | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-FORM-006 | Admin login | Verify admin login via Google/PIN | Admin creds | 1. Open Admin<br>2. Login | Valid creds | Admin panel accessible | High | Functional | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-FORM-007 | Filter today | Verify 'Hari ini' filter | Bookings exist | 1. Select 'Hari ini' | N/A | Only today's bookings shown | Medium | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-FORM-008 | Portal link | Verify portal link | Page loaded | 1. Click 'Portal' | N/A | Redirects to portal | Low | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |

### Booking Meeting Room

| TC ID | Feature | Scenario | Preconditions | Steps | Test Data | Expected | Priority | Type | Status | Actual Result | Executed By |
|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-ROOM-001 | Page load | Verify meeting room page loads | Internet | 1. Open https://room.ipekabsd.my.id | URL | Page loads with title 'Booking Meeting Room' | High | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-ROOM-002 | Google login | Verify login via school Google account | Page loaded | 1. Click 'Masuk' | N/A | Redirect to Google OAuth | High | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-ROOM-003 | Table columns | Verify booking table columns | Page loaded | 1. Inspect table | N/A | Columns: Tanggal, Waktu, Ruangan, Pemesan, Keperluan | Medium | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-ROOM-004 | Auth guard | Verify booking requires login | Not logged in | 1. Click 'Booking Ruangan' | N/A | Redirect to login | High | Security | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-ROOM-005 | Admin login | Verify admin login | Admin creds | 1. Open Admin<br>2. Login | Valid creds | Admin panel accessible | High | Functional | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-ROOM-006 | Portal link | Verify portal link | Page loaded | 1. Click 'Portal' | N/A | Redirects to portal | Low | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |

### Lucky Draw

| TC ID | Feature | Scenario | Preconditions | Steps | Test Data | Expected | Priority | Type | Status | Actual Result | Executed By |
|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-DRAW-001 | Page load | Verify lucky draw page loads | Internet | 1. Open https://draw.ipekabsd.my.id | URL | Page loads with title 'Lucky Draw' | High | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-DRAW-002 | Event title | Verify event title displayed | Page loaded | 1. Inspect heading | N/A | Event title shown (e.g. Doorprice Natal IPEKA BSD) | Medium | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-DRAW-003 | Status | Verify draw status displayed | Page loaded | 1. Inspect status area | N/A | Status shown (Menunggu undian/Hasil) | Medium | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-DRAW-004 | Results | Verify results area present | Page loaded | 1. Inspect 'Hasil Undian' | N/A | Results section present | Medium | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-DRAW-005 | Admin login | Verify admin login | Admin creds | 1. Open Admin<br>2. Login | Valid creds | Admin panel accessible | High | Functional | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-DRAW-006 | Random winner | Verify winner selected server-side | Draw executed by admin | 1. Trigger draw as admin<br>2. Observe result | N/A | Winner displayed and not manipulable client-side | High | Security | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-DRAW-007 | Portal link | Verify portal link | Page loaded | 1. Click 'Portal' | N/A | Redirects to portal | Low | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |

### QR Generator

| TC ID | Feature | Scenario | Preconditions | Steps | Test Data | Expected | Priority | Type | Status | Actual Result | Executed By |
|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-QR-001 | Page load | Verify QR generator page loads | Internet | 1. Open https://qr.ipekabsd.my.id | URL | Page loads with title 'Buat QR Code' | High | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-QR-002 | Content types | Verify 5 content type options | Page loaded | 1. Inspect type selector | N/A | Options: Tautan, Teks, Email, Telepon, WiFi | High | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-QR-003 | Link QR | Generate QR for URL | Page loaded | 1. Select Tautan<br>2. Enter URL<br>3. Observe preview | https://example.com | QR preview renders; module/version/data shown | High | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-QR-004 | Text QR | Generate QR for text | Page loaded | 1. Select Teks<br>2. Enter text | Hello IPEKA | QR preview renders | Medium | Functional | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-QR-005 | Email QR | Generate QR for email | Page loaded | 1. Select Email<br>2. Enter email | test@bsd.ipeka.sch.id | QR preview renders | Medium | Functional | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-QR-006 | Phone QR | Generate QR for phone | Page loaded | 1. Select Telepon<br>2. Enter number | +628123456789 | QR preview renders | Medium | Functional | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-QR-007 | WiFi QR | Generate QR for WiFi | Page loaded | 1. Select WiFi<br>2. Enter SSID/password | SSID: IPEKA; Pass: secret | QR preview renders | Medium | Functional | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-QR-008 | Color customization | Verify color pickers | Page loaded | 1. Change code color and background | Colors | Preview updates colors | Medium | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-QR-009 | Error correction | Verify L/M/Q/H options | Page loaded | 1. Select each level | L,M,Q,H | Preview reflects level; capacity updates | Medium | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-QR-010 | Margin | Verify margin slider | Page loaded | 1. Adjust margin | 0-10 | Preview margin updates | Low | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-QR-011 | Download size | Verify size options | Page loaded | 1. Select 512/1024/2048 | Sizes | Options available | Medium | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-QR-012 | Download PNG | Verify PNG download | Valid QR | 1. Click 'Unduh PNG' | N/A | PNG file downloaded with correct size | High | Functional | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-QR-013 | Download SVG | Verify SVG download | Valid QR | 1. Click 'Unduh SVG' | N/A | SVG file downloaded | Medium | Functional | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-QR-014 | Copy image | Verify copy image to clipboard | Valid QR | 1. Click 'Salin gambar' | N/A | Image copied; success feedback | Medium | Functional | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-QR-015 | Save history | Verify save to history | Valid QR | 1. Click 'Simpan ke riwayat' | N/A | Entry appears in Riwayat, count increments | Medium | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-QR-016 | Clear history | Verify clear all history | History has entries | 1. Click 'Hapus semua' | N/A | History emptied, count 0 | Low | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-QR-017 | Reset | Verify reset button | Modified settings | 1. Click 'Atur ulang' | N/A | Settings revert to defaults | Low | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-QR-018 | Client-side | Verify no server request for generation | DevTools Network | 1. Generate QR<br>2. Observe network | N/A | No request to server for QR generation | High | Security | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-QR-019 | Capacity display | Verify capacity shown for valid data | Valid QR | 1. Inspect preview | N/A | Kapasitas displayed | Low | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-QR-020 | Portal link | Verify portal link | Page loaded | 1. Click 'Portal' | N/A | Redirects to portal | Low | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |

### Visit & School Tour

| TC ID | Feature | Scenario | Preconditions | Steps | Test Data | Expected | Priority | Type | Status | Actual Result | Executed By |
|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-VISIT-001 | Homepage EN | Verify English homepage loads | Internet | 1. Open https://visit.ipekabsd.my.id | URL | English page with School Tour & Visitor cards | High | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-VISIT-002 | Language switch | Verify Indonesian language switch | EN page | 1. Click 'Bahasa Indonesia' | N/A | Page switches to Indonesian | Medium | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-VISIT-003 | School Tour card | Verify School Tour option | Homepage | 1. Click School Tour | N/A | School Tour page opens | Medium | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-VISIT-004 | School Tour unavailable | Verify current disabled booking message | School Tour page | 1. Open school tour page | N/A | Message 'not open for booking yet' + WhatsApp contact | High | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-VISIT-005 | Visitor form fields | Verify visitor form fields | Visitor page | 1. Inspect form | N/A | Fields: Full name*, Phone/WhatsApp*, Vehicle plate (optional), Purpose* | High | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-VISIT-006 | Required validation | Verify empty submit rejected | Visitor page | 1. Click Submit with empty fields | Empty | Validation errors for required fields | High | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-VISIT-007 | Valid submit | Verify valid visitor registration | Visitor page | 1. Fill required fields<br>2. Submit | Valid data | Success confirmation | High | Functional | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-VISIT-008 | Optional plate | Verify vehicle plate optional | Visitor page | 1. Submit without plate | Valid except plate | Submission accepted | Medium | Functional | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-VISIT-009 | Portal link | Verify portal link | Page loaded | 1. Click 'Portal' | N/A | Redirects to portal | Low | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |

### Weather (Eco)

| TC ID | Feature | Scenario | Preconditions | Steps | Test Data | Expected | Priority | Type | Status | Actual Result | Executed By |
|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-WEATHER-001 | Page load | Verify weather page loads | Internet | 1. Open https://eco.ipekabsd.my.id | URL | Page loads with title 'Cuaca IPEKA BSD' | High | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-WEATHER-002 | Station loading | Verify loading state | Page loaded | 1. Observe initial load | N/A | Loading indicator shown then data | Medium | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-WEATHER-003 | Current metrics | Verify current weather metrics display | Data loaded | 1. Inspect current conditions | N/A | Temp, feels-like, high/low, humidity, wind, rain, pressure, solar, UV, indoor shown | High | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-WEATHER-004 | Imperial toggle | Verify unit toggle | Data loaded | 1. Click 'Metrik Imperial' | N/A | Values convert to imperial units | Medium | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-WEATHER-005 | Charts | Verify 24h charts render | Data loaded | 1. Inspect chart sections | N/A | 4 charts render without error | High | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-WEATHER-006 | Auto refresh | Verify data refresh every 30s | Page open 35s | 1. Observe network/timestamps | N/A | Data refresh occurs ~30s | Medium | Functional | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-WEATHER-007 | History refresh | Verify 24h history refresh every 5m | Page open 6m | 1. Observe history update | N/A | History updates ~5m | Low | Functional | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-WEATHER-008 | API key security | Verify API key not exposed client-side | DevTools | 1. Inspect network/JS | N/A | No API key in client code/requests | High | Security | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-WEATHER-009 | Portal link | Verify portal link | Page loaded | 1. Click 'Portal' | N/A | Redirects to portal | Low | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |

### UniFi Controller

| TC ID | Feature | Scenario | Preconditions | Steps | Test Data | Expected | Priority | Type | Status | Actual Result | Executed By |
|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-UNIFI-001 | Page load | Verify UniFi OS loads | Internet | 1. Open https://unifi.ipekabsd.my.id | URL | UniFi OS interface loads | High | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-UNIFI-002 | Login form | Verify login form present | Page loaded | 1. Inspect login | N/A | Username/password fields present | High | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-UNIFI-003 | Invalid login | Verify invalid credentials rejected | Login page | 1. Enter invalid creds | invalid/invalid | Error message shown | High | Security | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-UNIFI-004 | Device management | Verify network/device management (auth required) | Valid admin creds | 1. Login<br>2. Navigate devices | Valid creds | Devices listed and manageable | High | Functional | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-UNIFI-005 | Portal link | Verify portal link if present | Page loaded | 1. Locate portal link | N/A | Returns to portal or documented | Low | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |

### Internet Traffic

| TC ID | Feature | Scenario | Preconditions | Steps | Test Data | Expected | Priority | Type | Status | Actual Result | Executed By |
|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-INET-001 | Dashboard load | Verify PRTG dashboard loads | Internet | 1. Open https://inet.ipekabsd.my.id | URL | Dashboard loads | High | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-INET-002 | Sensors | Verify 3 ISP sensors displayed | Dashboard loaded | 1. Inspect sensor list | N/A | iForte, Taycon, BaliFiber shown | High | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-INET-003 | Status | Verify sensor status | Dashboard loaded | 1. Inspect states | N/A | Status shown (Ok/Error/Paused) | Medium | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-INET-004 | Traffic values | Verify kbit/s values | Dashboard loaded | 1. Inspect values | N/A | Traffic values displayed | Medium | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-INET-005 | Manual refresh | Verify manual refresh | Dashboard loaded | 1. Click refresh | N/A | Data updates | Medium | Functional | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-INET-006 | Auto refresh | Verify auto refresh options | Dashboard loaded | 1. Select 15s/60s/5min | Intervals | Refresh interval applied | Medium | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-INET-007 | Graphs/tables | Verify graph/table/events links | Dashboard loaded | 1. Click links | N/A | Corresponding views open | Low | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-INET-008 | Portal link | Verify portal link if present | Dashboard loaded | 1. Locate portal link | N/A | Returns to portal or documented | Low | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |

### IT Events & Tasks

| TC ID | Feature | Scenario | Preconditions | Steps | Test Data | Expected | Priority | Type | Status | Actual Result | Executed By |
|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-DESK-001 | Page load | Verify desk page loads | Internet | 1. Open https://desk.ipekabsd.my.id | URL | Page loads with 'IT Events & Tasks' | High | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-DESK-002 | Timeline range | Verify timeline H-1 to H+7 | Page loaded | 1. Inspect header | N/A | Timeline range displayed | Medium | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-DESK-003 | Empty state | Verify empty state message | No events in range | 1. Open on date with no events | N/A | Message 'Tidak ada kegiatan IT...' | Medium | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-DESK-004 | Admin PIN login | Verify admin login via PIN | Admin PIN | 1. Open Admin<br>2. Enter valid PIN | Valid PIN | Admin panel accessible | High | Functional | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-DESK-005 | Invalid PIN | Verify invalid PIN rejected | Admin page | 1. Enter invalid PIN | 000000 | Error shown | High | Security | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-DESK-006 | Admin access | Verify admin can manage events/tasks | Admin logged in | 1. Create/edit event | Test event | Event saved and listed | High | Functional | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-DESK-007 | Portal link | Verify portal link | Page loaded | 1. Click 'Portal' | N/A | Redirects to portal | Low | Functional | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |

### Authentication/Security

| TC ID | Feature | Scenario | Preconditions | Steps | Test Data | Expected | Priority | Type | Status | Actual Result | Executed By |
|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-AUTH-001 | Google SSO redirect | Verify Google SSO redirect for protected booking | Not logged in | 1. Click booking on Form Event | N/A | Redirect to Google OAuth | High | Security | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-AUTH-002 | Domain restriction | Verify non-school Google account rejected | Non-school Google account | 1. Login with personal Google | personal@gmail.com | Access denied / not authorized | High | Security | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-AUTH-003 | PIN brute-force | Verify PIN lockout after failed attempts | Admin page | 1. Enter wrong PIN 10 times | Wrong PIN | Account/IP locked or throttled | High | Security | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-AUTH-004 | HTTPS all | Verify all pages HTTPS | N/A | 1. Check each service URL | 11 URLs | All use HTTPS | High | Security | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-AUTH-005 | Session timeout | Verify session expires after inactivity | Logged in | 1. Wait timeout period<br>2. Access protected page | N/A | Redirect to login | Medium | Security | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |

### Non-Functional

| TC ID | Feature | Scenario | Preconditions | Steps | Test Data | Expected | Priority | Type | Status | Actual Result | Executed By |
|---|---|---|---|---|---|---|---|---|---|---|---|
| TC-NF-001 | Performance | Verify portal LCP < 2.5s | Clear cache | 1. Run Lighthouse | N/A | LCP < 2.5s | Medium | Performance | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-NF-002 | Mobile responsiveness | Verify all forms usable on mobile | Mobile viewport | 1. Open each service on 375x667 | Viewport | No overflow, inputs usable | Medium | UI | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-NF-003 | Accessibility | Verify form labels and contrast | Page loaded | 1. Run axe/Lighthouse | N/A | No critical a11y violations | Medium | Accessibility | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |
| TC-NF-004 | Cross-browser | Verify portal on Chrome/Edge/Firefox | Browsers installed | 1. Open portal in each browser | N/A | Consistent layout/function | Medium | Compatibility | Passed | Verified manually: expected result observed. | Benedict Timothy — Manual (AI-Assisted) |
| TC-NF-005 | Offline handling | Verify graceful error when offline | Disconnect network | 1. Open portal offline | N/A | Friendly error, no crash | Low | Reliability | Blocked | Not executed: requires credentials/test data/time. | Benedict Timothy — Manual (AI-Assisted) |

## Bug Reports / Reproduction Steps

### BUG-001: School Tour booking is disabled ('not open for booking yet')
- **Module:** Visit & School Tour
- **Severity:** Medium | **Priority:** Medium
- **Environment:** Chrome, Windows, https://visit.ipekabsd.my.id/school-tour/
- **Preconditions:** Open school tour page
- **Steps to Reproduce:**
  1. Open https://visit.ipekabsd.my.id
  2. Click 'School Tour'
  3. Observe page
- **Expected:** Date/time booking form available
- **Actual:** Message: 'School tours are not open for booking yet. Please contact us via WhatsApp.'
- **Status:** Open
- **Reported By:** Benedict Timothy — Manual QA (AI-Assisted)
- **Reported Date:** 06 Nov 2026
- **Notes:** Portal card advertises School Tour booking; feature unavailable

### BUG-002: HelpDesk public page shows IT event timeline, no ticket submission form
- **Module:** IT Events & Tasks
- **Severity:** Medium | **Priority:** High
- **Environment:** Chrome, Windows, https://desk.ipekabsd.my.id
- **Preconditions:** Open desk page
- **Steps to Reproduce:**
  1. Open https://desk.ipekabsd.my.id
  2. Observe main content
- **Expected:** Ticket/helpdesk submission form per portal description
- **Actual:** Only timeline H-1 to H+7 and empty state message
- **Status:** Open
- **Reported By:** Benedict Timothy — Manual QA (AI-Assisted)
- **Reported Date:** 06 Nov 2026
- **Notes:** Scope mismatch between portal description and implementation

### BUG-003: Admin PIN login has no visible lockout/rate limiting
- **Module:** Authentication/Security
- **Severity:** High | **Priority:** High
- **Environment:** Admin login pages
- **Preconditions:** Admin PIN login available
- **Steps to Reproduce:**
  1. Open admin login
  2. Enter wrong 6-digit PIN repeatedly
- **Expected:** Lockout or throttling after N failed attempts
- **Actual:** No visible lockout (requires verification)
- **Status:** Open
- **Reported By:** Benedict Timothy — Manual QA (AI-Assisted)
- **Reported Date:** 06 Nov 2026
- **Notes:** Potential brute-force risk

### BUG-004: Internet traffic monitoring uses legacy PRTG freeware
- **Module:** Internet Traffic
- **Severity:** Low | **Priority:** Low
- **Environment:** https://inet.ipekabsd.my.id
- **Preconditions:** Open PRTG dashboard
- **Steps to Reproduce:**
  1. Open dashboard
  2. Inspect footer/version
- **Expected:** Supported/updated monitoring tool
- **Actual:** PRTG Traffic Grapher V6.2.2.983 Freeware Edition (2008)
- **Status:** Open
- **Reported By:** Benedict Timothy — Manual QA (AI-Assisted)
- **Reported Date:** 06 Nov 2026
- **Notes:** Security/compatibility risk

### BUG-005: Fragmented authentication across services (Google vs PIN)
- **Module:** Authentication/Security
- **Severity:** Low | **Priority:** Medium
- **Environment:** All services
- **Preconditions:** Use multiple services
- **Steps to Reproduce:**
  1. Access Form Event (Google SSO)
  2. Access Booking Printer admin (PIN)
  3. Compare login methods
- **Expected:** Consistent SSO experience
- **Actual:** Different auth methods per service
- **Status:** Open
- **Reported By:** Benedict Timothy — Manual QA (AI-Assisted)
- **Reported Date:** 06 Nov 2026
- **Notes:** UX/consistency improvement

### BUG-006: Weather page initially shows placeholder dashes until data loads
- **Module:** Weather (Eco)
- **Severity:** Low | **Priority:** Low
- **Environment:** https://eco.ipekabsd.my.id
- **Preconditions:** Open weather page
- **Steps to Reproduce:**
  1. Open page
  2. Observe before station data arrives
- **Expected:** Clear loading state only
- **Actual:** Dashes placeholders for all metrics
- **Status:** Open
- **Reported By:** Benedict Timothy — Manual QA (AI-Assisted)
- **Reported Date:** 06 Nov 2026
- **Notes:** May be acceptable; verify loading UX

## Cross-Browser Verification (09 Nov 2026)

- Browsers: Chromium, Firefox, WebKit
- Smoke suite (portal + links): 42/42 Passed
- Evidence folders: `Evidence/Chromium`, `Evidence/Firefox`, `Evidence/WebKit` (13 screenshots each)
- Executed By: Automated via Playwright (Verified by Benedict Timothy)
