# Cross-Browser Smoke Testing — SauceDemo (Swag Labs)

| Atribut Proyek | Detail |
| :--- | :--- |
| **Aplikasi (SUT)** | SauceDemo / Swag Labs (`https://www.saucedemo.com/`) |
| **Test Plan ID** | `TP-SD-CB-V1.0` (`Test-Plan.md`) |
| **Traceability Matrix** | `RTM.md` & `RTM_SauceDemo_CrossBrowser.xlsx` |
| **Test Designer & Analyst** | Benedict Timothy |
| **Metode Pengujian** | **AI-Assisted Cross-Browser Testing (Human-in-the-Loop)**: Perancangan skenario *Black-Box*, penentuan matriks browser/viewport, dan triase *console/network log* dilakukan oleh QA Manual; eksekusi berulang lintas 5 profil *browser engine* diotomasi menggunakan Playwright `1.65.0` |
| **Tanggal Eksekusi** | 9 November 2026 |
| **Hasil Akhir** | **5/5 Profil Browser Lulus — 12/12 Alur per Profil Lulus (60/60 Checks Passed)** |

---

## 1. Tujuan Proyek
Memverifikasi kompatibilitas lintas-peramban (*cross-browser*) dan lintas-perangkat (*responsive mobile viewport*) pada alur *e-commerce* kritikal aplikasi **SauceDemo** (autentikasi positif & negatif, katalog inventaris, pengurutan harga, keranjang belanja, validasi *checkout*, akurasi kalkulasi pajak/total, penyelesaian pesanan, *logout*, dan proteksi rute pasca-*logout*).

## 2. Matriks Peramban & Perangkat (*Tested Browser/Device Profiles*)
1. **Chromium** (Desktop Chrome — `1280×720`)
2. **Firefox** (Desktop Mozilla Firefox — `1280×720`)
3. **WebKit** (Desktop Apple Safari Engine — `1280×720`)
4. **Microsoft Edge** (Desktop Edge Channel — `1280×720`)
5. **Mobile Pixel 5** (Mobile Responsive Viewport — `393×851`, *touch enabled*)

## 3. Data Uji (*Test Data*)
- **Akun Positif**: `standard_user` / `secret_sauce` *(kredensial publik resmi demo Swag Labs)*
- **Akun Negatif**: `locked_out_user` / `secret_sauce`
- **Produk Uji**: *Sauce Labs Onesie* (`\$7.99`) + *Sauce Labs Backpack* (`\$29.99`)
- **Data Checkout**: `Test` / `User` / `12345`
- **Verifikasi Aritmetika**: Subtotal `\$37.98` + Tax `\$3.04` = Total `\$41.02`

## 4. Cara Menjalankan Suite Uji
```powershell
cd "D:\Test Project\Portofolio QA Manual\04_SauceDemo_CrossBrowser_Playwright"
npm install
npx playwright test
```

## 5. Struktur Artefak & Deliverables
- **Dokumen Perencanaan & Ketertelusuran**:
  - `Test-Plan.md` — Dokumen *Software Test Plan* berstandar ISO/IEC/IEEE 29119-3 & MySkill.
  - `RTM.md` & `RTM_SauceDemo_CrossBrowser.xlsx` — *Requirement Traceability Matrix* (15 kolom standar MySkill).
- **Laporan Analisis QA (`Reports/`)**:
  - `Reports/compatibility-matrix.md` — Matriks kompatibilitas 12 alur × 5 profil browser.
  - `Reports/console-summary.md` — Analisis *console & network error* (memisahkan telemetri pihak ketiga `backtrace.io` & SPA fallback dari *defect* aplikasi).
  - `Reports/defect-notes.md` — Catatan temuan non-fungsional / observasi lintas-peramban.
- **Bukti Eksekusi (`Evidence/` & `playwright-report/`)**:
  - `Evidence/screenshots/<browser>/` — 60 tangkapan layar (`12 flow × 5 browser`).
  - `Evidence/console/<browser>.json` — Log mentah konsol & jaringan per browser.
  - `Evidence/results/<browser>.json` — Hasil *assertion* per alur dalam format JSON.
  - `playwright-report/index.html` — Laporan interaktif HTML Playwright.
