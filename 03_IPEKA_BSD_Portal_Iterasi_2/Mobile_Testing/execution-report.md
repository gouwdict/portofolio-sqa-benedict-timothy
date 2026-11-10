# Mobile Execution Report — IPEKA BSD Internal Portal

## 1. Executive Summary
| Metric | Value | Notes |
| :--- | :---: | :--- |
| **Total Test Cases Designed** | **20** | `MOB-001` s.d. `MOB-020` (lihat `test-cases.md`) |
| **Test Design Status** | **Completed (100%)** | Seluruh langkah, *precondition*, dan *RTM* telah siap |
| **Passed** | 0 | Menunggu sesi eksekusi bersama |
| **Failed** | 0 | Menunggu sesi eksekusi bersama |
| **Blocked** | 0 | Menunggu sesi eksekusi bersama |
| **No Run (Pending Execution)** | **20** | Dijadwalkan untuk sesi *live mobile testing* |
| **Execution Progress** | **0% (0/20 Executed)** | Paket siap jalan (*Ready for Execution*) |

---

## 2. Test Environment Configuration
- **Device**: Google Pixel 7 Emulator (`DEV-001` Portrait & `DEV-002` Landscape)
- **OS Version**: Android 14 (API Level 34)
- **Browser**: Google Chrome Mobile
- **System Under Test (SUT)**: `https://app.ipekabsd.my.id/` + 10 Subdomain Layanan
- **Test Plan Reference**: `test-plan.md` (`TP-IPEKA-MOB-V1.0`)
- **Test Designer & Executor**: Benedict Timothy (Manual QA — AI-Assisted Preparation)

---

## 3. Execution Ledger (`MOB-001` s.d. `MOB-020`)

| Test Case ID | Req ID | Title | Priority | Status | Actual Result / Notes | Evidence File |
| :--- | :--- | :--- | :---: | :---: | :--- | :--- |
| `MOB-001` | `REQ-MOB-01` | Portal home page loads on mobile (Portrait) | High | `No Run` | Siap dieksekusi | `01_portal_home_portrait.png` *(planned)* |
| `MOB-002` | `REQ-MOB-01` | Portal home page loads in landscape mode | Medium | `No Run` | Siap dieksekusi | `02_portal_home_landscape.png` *(planned)* |
| `MOB-003` | `REQ-MOB-02` | Google SSO redirect on protected service (`form`/`room`) | High | `No Run` | Siap dieksekusi | `03_sso_redirect.png` *(planned)* |
| `MOB-004` | `REQ-MOB-02` | Invalid Admin PIN rejection on mobile | High | `No Run` | Siap dieksekusi | `04_admin_pin_invalid.png` *(planned)* |
| `MOB-005` | `REQ-MOB-02` | Empty login / PIN submission validation on mobile | Medium | `No Run` | Siap dieksekusi | `05_empty_auth_validation.png` *(planned)* |
| `MOB-006` | `REQ-MOB-02` | Return to public view / session exit on mobile | Medium | `No Run` | Siap dieksekusi | `06_return_to_portal.png` *(planned)* |
| `MOB-007` | `REQ-MOB-03` | Header & IT Call Center (`tel:1010`) interaction | High | `No Run` | Siap dieksekusi | `07_header_call_center.png` *(planned)* |
| `MOB-008` | `REQ-MOB-03` | Filter / Tab switching navigation on mobile | Medium | `No Run` | Siap dieksekusi | `08_filter_tabs.png` *(planned)* |
| `MOB-009` | `REQ-MOB-03` | All 10 service card links navigation on mobile | High | `No Run` | Siap dieksekusi | `09_service_links.png` *(planned)* |
| `MOB-010` | `REQ-MOB-04` | Booking Printer Rapor page usable on mobile | Medium | `No Run` | Siap dieksekusi | `10_booking_printer.png` *(planned)* |
| `MOB-011` | `REQ-MOB-04` | Booking Meeting Room page usable on mobile | Medium | `No Run` | Siap dieksekusi | `11_meeting_room.png` *(planned)* |
| `MOB-012` | `REQ-MOB-04` | Form Event page usable on mobile | Medium | `No Run` | Siap dieksekusi | `12_form_event.png` *(planned)* |
| `MOB-013` | `REQ-MOB-04` | QR Generator page usable on mobile | Low | `No Run` | Siap dieksekusi | `13_qr_generator.png` *(planned)* |
| `MOB-014` | `REQ-MOB-04` | Visitor Registration form usable on mobile | Medium | `No Run` | Siap dieksekusi | `14_visitor_form.png` *(planned)* |
| `MOB-015` | `REQ-MOB-05` | Virtual keyboard does not cover active input field | High | `No Run` | Siap dieksekusi | `15_keyboard_visibility.png` *(planned)* |
| `MOB-016` | `REQ-MOB-05` | Long text & special character input handling | Medium | `No Run` | Siap dieksekusi | `16_long_text_input.png` *(planned)* |
| `MOB-017` | `REQ-MOB-05` | Mobile form required-field validation visibility | Medium | `No Run` | Siap dieksekusi | `17_required_validation.png` *(planned)* |
| `MOB-018` | `REQ-MOB-06` | Horizontal scrolling & overflow audit (including PRTG `inet`) | High | `No Run` | Fokus verifikasi ulang overflow `608px` pada `inet` | `18_overflow_audit.png` *(planned)* |
| `MOB-019` | `REQ-MOB-06` | Touch targets size & spacing usability | Medium | `No Run` | Siap dieksekusi | `19_touch_targets.png` *(planned)* |
| `MOB-020` | `REQ-MOB-06` | Vertical page scroll & chart rendering smoothness | Low | `No Run` | Siap dieksekusi | `20_weather_charts_scroll.png` *(planned)* |

---

## 4. Candidate Defects to Verify During Mobile Execution
| Candidate ID | Target TC | Description | Status |
| :--- | :--- | :--- | :---: |
| `MOB-CAND-01` | `MOB-018` | Verifikasi apakah tabel PRTG pada `https://inet.ipekabsd.my.id` masih mengalami *horizontal overflow* (`scrollWidth = 608px`) pada Chrome Android Pixel 7 seperti yang ditemukan pada viewport desktop menyempit (`DEF-005`). | Pending Verification |
| `MOB-CAND-02` | `MOB-014` | Verifikasi tampilan pesan *School Tour not open for booking yet* (`BUG-001`) pada layar mobile. | Pending Verification |
