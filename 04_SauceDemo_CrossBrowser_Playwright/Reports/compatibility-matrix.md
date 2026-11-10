# Compatibility Matrix — SauceDemo Cross-Browser Smoke

| Item | Detail |
|---|---|
| Application | SauceDemo / Swag Labs |
| URL | https://www.saucedemo.com/ |
| Date | 2026-11-09 |
| Tool | Playwright 1.65.0 |
| Scope | Smoke e-commerce flow |
| Data | `standard_user` / `secret_sauce`; locked-out user `locked_out_user`; products Sauce Labs Onesie ($7.99) + Sauce Labs Backpack ($29.99) |
| Result | 5/5 browser profiles passed; 12/12 flows passed per profile |

## Result Matrix

| Flow | Chromium | Firefox | WebKit | Edge | Mobile Pixel 5 | Notes |
|---|---|---|---|---|---|---|
| Login page load | Pass | Pass | Pass | Pass | Pass | Form and login button visible |
| Negative login (locked-out user) | Pass | Pass | Pass | Pass | Pass | `Epic sadface: Sorry, this user has been locked out.` |
| Valid login | Pass | Pass | Pass | Pass | Pass | Redirect to `inventory.html`, 6 products |
| Inventory / dashboard | Pass | Pass | Pass | Pass | Pass | 6 inventory items displayed |
| Sort price low to high | Pass | Pass | Pass | Pass | Pass | First price `$7.99` |
| Add items to cart | Pass | Pass | Pass | Pass | Pass | Cart badge `2` |
| Cart page contents | Pass | Pass | Pass | Pass | Pass | 2 cart items, quantity 1 each |
| Checkout empty validation | Pass | Pass | Pass | Pass | Pass | `Error: First Name is required` |
| Checkout totals | Pass | Pass | Pass | Pass | Pass | Subtotal `$37.98`, tax `$3.04`, total `$41.02` |
| Order completion | Pass | Pass | Pass | Pass | Pass | `Thank you for your order!` |
| Logout | Pass | Pass | Pass | Pass | Pass | Returns to login page |
| Protected route redirect after logout | Pass | Pass | Pass | Pass | Pass | `/inventory.html` shows login page |

## Evidence Count

| Browser profile | Screenshots |
|---|---:|
| Chromium | 12 |
| Firefox | 12 |
| WebKit | 12 |
| Edge | 12 |
| Mobile Pixel 5 | 12 |
| Total | 60 |

## Notes

- SauceDemo has no text search field; the "search/filter/sort" requirement is covered by the sort dropdown (`Price (low to high)`).
- Mobile Pixel 5 uses responsive layout; all flows still passed.
- Edge is Chromium-based but was tested as a separate browser profile.
- WebKit represents the Safari engine.
- Raw per-browser results are in `Evidence/results/<profile>.json`.
- Raw console/request errors are in `Evidence/console/<profile>.json`.
- Screenshots are in `Evidence/screenshots/<profile>/`.
