# Smoke Test Report — OrangeHRM OS 5.9 Demo

| Atribut Laporan | Detail |
| :--- | :--- |
| **Application (SUT)** | OrangeHRM OS 5.9 (Open Source Demo) |
| **URL** | `https://opensource-demo.orangehrmlive.com/web/index.php/auth/login` |
| **Test Plan & RTM** | `Test_Plan.md` (`TP-OHRM-SMOKE-V1.0`) & `RTM.md` (`OrangeHRM_Smoke_RTM_TestCases.xlsx`) |
| **Execution Date** | 2026-11-02 |
| **Test Designer & Analyst** | Benedict Timothy |
| **Execution Mode** | **AI-Assisted Manual Smoke Testing (Human-in-the-Loop)** — Desain skenario, inspeksi DOM/konsol, dan validasi hasil oleh QA Manual; akselerasi navigasi & perekaman bukti pada Chromium (`1280×720`) dibantu Playwright CLI |
| **Account** | `Admin` / `admin123` *(kredensial demo publik resmi yang tertera di halaman login)* |
| **Scope** | Smoke — jalur kritikal login/logout, proteksi rute, dan keterjangkauan seluruh 12 modul utama tanpa modifikasi data bersama |
| **Overall Result** | **20 / 20 Checks PASSED (100%) — 0 Blocking Defects** |

---

## 1. Summary Metrics

| Metric | Value |
| :--- | :--- |
| **Requirements Covered** | 14 (`REQ-OHRM-01` s.d. `REQ-OHRM-14` — 100% Full Coverage) |
| **Checks Executed** | 20 |
| **Passed** | 20 (100%) |
| **Failed** | 0 |
| **Blocked / No Run** | 0 |
| **Console Errors** | 0 JavaScript exceptions (4 verbose DOM autocomplete warnings only) |

---

## 2. Test Case Execution Results

| ID | Req ID | Check | Expected | Actual | Mode | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :---: |
| `SMK-01` | `REQ-OHRM-01` | Login page loads | Login form: Username, Password, Login button, logo, version note | All present; title `OrangeHRM`; demo credentials shown | AI-Assisted | **PASS** |
| `SMK-02` | `REQ-OHRM-01` | Login with empty fields | Field-level validation, no navigation | Two `Required` messages under both inputs; URL unchanged | AI-Assisted | **PASS** |
| `SMK-03` | `REQ-OHRM-01` | Login with wrong password | Error message, no session | Alert `Invalid credentials`; URL unchanged | AI-Assisted | **PASS** |
| `SMK-04` | `REQ-OHRM-01` | Login with valid credentials | Redirect to dashboard | `/web/index.php/dashboard/index`, breadcrumb `Dashboard` | AI-Assisted | **PASS** |
| `SMK-05` | `REQ-OHRM-02` | Admin module | System Users list opens | `/admin/viewSystemUsers`, heading `Admin` | AI-Assisted | **PASS** |
| `SMK-06` | `REQ-OHRM-03` | PIM module | Employee list opens | `/pim/viewEmployeeList`, heading `PIM` | AI-Assisted | **PASS** |
| `SMK-07` | `REQ-OHRM-04` | Leave module | Leave list opens | `/leave/viewLeaveList`, heading `Leave` | AI-Assisted | **PASS** |
| `SMK-08` | `REQ-OHRM-05` | Time module | Timesheet view opens | `/time/viewEmployeeTimesheet`, heading `Time` | AI-Assisted | **PASS** |
| `SMK-09` | `REQ-OHRM-06` | Recruitment module | Candidate list opens | `/recruitment/viewCandidates`, heading `Recruitment` | AI-Assisted | **PASS** |
| `SMK-10` | `REQ-OHRM-07` | My Info module | Personal details of logged-in user | `/pim/viewPersonalDetails/empNumber/7`, heading `PIM` | AI-Assisted | **PASS** |
| `SMK-11` | `REQ-OHRM-08` | Performance module | Review search opens | `/performance/searchEvaluatePerformanceReview`, heading `Performance` | AI-Assisted | **PASS** |
| `SMK-12` | `REQ-OHRM-09` | Dashboard module | Widgets render | `/dashboard/index`, heading `Dashboard` | AI-Assisted | **PASS** |
| `SMK-13` | `REQ-OHRM-10` | Directory module | Employee directory opens | `/directory/viewDirectory`, heading `Directory` | AI-Assisted | **PASS** |
| `SMK-14` | `REQ-OHRM-11` | Maintenance module | Password re-confirmation gate | Heading `Administrator Access`, 1 password field | AI-Assisted | **PASS** |
| `SMK-15` | `REQ-OHRM-12` | Claim module | Assign claim page opens | `/claim/viewAssignClaim`, heading `Claim` | AI-Assisted | **PASS** |
| `SMK-16` | `REQ-OHRM-13` | Buzz module | Social feed opens | `/buzz/viewBuzz`, heading `Buzz` | AI-Assisted | **PASS** |
| `SMK-17` | `REQ-OHRM-14` | User dropdown | Menu opens with About / Support / Change Password / Logout | Menu rendered (`17-user-menu.png`) | AI-Assisted | **PASS** |
| `SMK-18` | `REQ-OHRM-14` | Logout | Session cleared, back to login | Redirect to `/auth/login`, login button present | AI-Assisted | **PASS** |
| `SMK-19` | `REQ-OHRM-14` | Protected route after logout | Deep link blocked, redirected to login | `/admin/viewSystemUsers` redirected to `/auth/login` | AI-Assisted | **PASS** |
| `SMK-20` | `REQ-OHRM-14` | Forgot password | Reset request form reachable | `/auth/requestPasswordResetCode`, username field present | AI-Assisted | **PASS** |

---

## 3. Observations / Non-blocking QA Notes

1. **Autocomplete attributes missing (`DOM Warning`)** — Console emits verbose DOM warnings on the login and Maintenance password inputs: `Input elements should have autocomplete attributes (suggested: "current-password")`. Usability/accessibility improvement for the dev team, not a smoke blocker.
2. **Maintenance collapses the main navigation (`State Behavior`)** — After clicking Maintenance (`SMK-14`), the left sidebar menu is intentionally hidden until the admin password is re-entered. Expected security gate behavior; noted because any navigation flow must return to the dashboard or cancel re-auth first.
3. **My Info breadcrumb shows `PIM` (`Cosmetic UI Nit`)** — Heading displays the parent module name (`PIM`) instead of `My Info`. Cosmetic inconsistency only.
4. **Zero Console Exceptions** — No uncaught JavaScript errors or failed API calls (`4xx/5xx`) occurred during the entire smoke run.

---

## 4. Evidence Screenshots

All 20 screenshots are stored in `screenshots/`:

| File | TC ID | Content |
| :--- | :--- | :--- |
| `01-login-page.png` | `SMK-01` | Login page |
| `02-empty-validation.png` | `SMK-02` | Empty-field validation |
| `03-invalid-credentials.png` | `SMK-03` | Invalid credentials alert |
| `04-dashboard.png` | `SMK-04` | Dashboard after login |
| `05-admin.png` | `SMK-05` | Admin — System Users |
| `06-pim.png` | `SMK-06` | PIM — Employee List |
| `07-leave.png` | `SMK-07` | Leave — Leave List |
| `08-time.png` | `SMK-08` | Time — Timesheet |
| `09-recruitment.png` | `SMK-09` | Recruitment — Candidates |
| `10-my-info.png` | `SMK-10` | My Info — Personal Details |
| `11-performance.png` | `SMK-11` | Performance — Reviews |
| `12-dashboard.png` | `SMK-12` | Dashboard (revisit) |
| `13-directory.png` | `SMK-13` | Directory |
| `14-maintenance.png` | `SMK-14` | Maintenance — Administrator Access |
| `15-claim.png` | `SMK-15` | Claim — Assign Claim |
| `16-buzz.png` | `SMK-16` | Buzz — Feed |
| `17-user-menu.png` | `SMK-17` | User dropdown open |
| `18-after-logout.png` | `SMK-18` | Login page after logout |
| `19-protected-route-redirect.png` | `SMK-19` | Deep link redirected to login |
| `20-forgot-password.png` | `SMK-20` | Password reset request |
