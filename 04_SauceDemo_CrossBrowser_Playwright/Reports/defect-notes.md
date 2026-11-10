# Browser-Specific Defect Notes — SauceDemo Cross-Browser Smoke

## Functional result
No functional browser-specific defect was found. All 12 smoke flows passed in Chromium, Firefox, WebKit, Edge, and Mobile Pixel 5.

## Observed non-blocking notes

1. **Backtrace telemetry errors**
   - SauceDemo attempts to submit telemetry to `events.backtrace.io` and `submit.backtrace.io`.
   - Some browsers report `401 Unauthorized`; others report aborted/cancelled requests.
   - This is demo-site telemetry configuration and did not affect login, inventory, cart, checkout, or logout.

2. **Permissions Policy `unload`**
   - Chromium, Edge, and Mobile Pixel 5 log: `Permissions policy violation: unload is not allowed in this document.`
   - This is a browser policy message from SauceDemo bundled JavaScript.
   - No functional impact was observed.

3. **Firefox product image request aborts**
   - Firefox logged `NS_BINDING_ABORTED` for six product images.
   - Screenshots and flow results confirm images and functionality worked.
   - No defect was raised.

4. **Direct deep-link 404 fallback**
   - Direct navigation to `/inventory.html` returns HTTP 404, followed by GitHub Pages SPA fallback.
   - After logout, the protected route check correctly returns to the login page.
   - This is hosting/SPA fallback behavior, not an application defect.

5. **Mobile responsive layout**
   - Mobile Pixel 5 rendered the single-column responsive layout.
   - Menu, sort dropdown, cart, checkout, and logout remained usable.
   - No mobile-specific functional defect was observed.

## Defect log
| ID | Browser | Severity | Status | Description |
|---|---|---|---|---|
| None | All tested | - | - | No functional browser-specific defect found |

## Limitations
- Only `standard_user` happy path and locked-out negative login were tested.
- Only sort `Price (low to high)` was tested; other sort options were not included.
- SauceDemo is a public demo; telemetry and hosting behavior may change.
- Claims are limited to the five tested browser/device profiles.
