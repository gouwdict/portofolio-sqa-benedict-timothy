# Console Error Summary — SauceDemo Cross-Browser Smoke

| Browser profile | Captured entries | Classification | Notes |
|---|---:|---|---|
| Chromium | 7 | Informasional | 3 Permissions Policy `unload` violations, 3 Backtrace telemetry request failures, 1 direct deep-link 404 fallback |
| Firefox | 7 | Informasional | 1 Backtrace telemetry request failure, 6 product image requests aborted during navigation/timing |
| WebKit | 4 | Informasional | 1 Backtrace `401 Unauthorized`, 2 cancelled telemetry requests, 1 direct deep-link 404 fallback |
| Edge | 4 | Informasional | 3 Backtrace telemetry request failures, 1 direct deep-link 404 fallback |
| Mobile Pixel 5 | 7 | Informasional | Same pattern as Chromium |

## Observed console/request details

### Backtrace telemetry
- URLs: `events.backtrace.io` and `submit.backtrace.io`
- Responses include `401 Unauthorized` or aborted/cancelled requests.
- This is SauceDemo demo telemetry configuration, not a tested application feature. It did not affect any flow result.

### Permissions Policy
- Message: `Permissions policy violation: unload is not allowed in this document.`
- Source: SauceDemo bundled JavaScript.
- Classification: browser security policy informational message; no functional impact.

### Firefox image requests
- Six product image requests returned `NS_BINDING_ABORTED`.
- UI screenshots still show product images and all flows passed.
- Classification: request timing/abort during navigation, not a functional defect.

### Direct deep-link 404
- Direct navigation to `/inventory.html` returns HTTP 404, then GitHub Pages SPA fallback serves the app at `/?/inventory.html`.
- The protected-route check still correctly displays the login page after logout.
- Classification: expected SPA hosting fallback behavior, not a product defect.

## Conclusion
No console or request error affected the smoke flow results. All captured entries are third-party telemetry, browser policy, request timing, or SPA hosting fallback behavior.
