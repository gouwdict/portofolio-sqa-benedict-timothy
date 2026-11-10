# Portofolio Software Quality Assurance (SQA) — Benedict Timothy

Selamat datang di repositori portofolio **Software Quality Assurance (SQA)** milik **Benedict Timothy**. Portofolio ini merangkum 6 proyek pengujian perangkat lunak yang telah diurutkan secara sistematis (`01_` s.d. `06_`), mencakup **Manual Functional & Exploratory Testing**, **AI-Assisted Testing (Human-in-the-Loop)**, **Cross-Browser Compatibility Testing (Playwright)**, serta **Mobile Web Testing Preparation**.

Seluruh dokumen perencanaan dan pelaporan di dalam portofolio ini telah diselaraskan dengan standar industri:
- **Test Planning**: Mengacu pada standar internasional **ISO/IEC/IEEE 29119-3** (pengganti IEEE 829) dan struktur komprehensif 11 bagian (mencakup *Scope In/Out*, *Testing Quadrants*, *Test Case Prioritization*, *Entry/Suspension/Exit Criteria*, *Bottom-Up Estimation*, dan *Risk Mitigation*).
- **Requirement Traceability Matrix (RTM)**: Mengacu pada **Standar RTM 15 Kolom (MySkill & ISO/IEC/IEEE 29119)** yang melacak relasi *one-to-many* dari `Req ID` -> `TC ID` -> `Multi-Environment Execution (Test/UAT/Prod)` -> `Defect ID & Status` -> `Requirement Coverage`, serta membedakan secara tegas status **`No Run`** (belum dieksekusi) dari **`N/A`** (*Not Applicable* pada environment terkait).

---

## Filosofi & Kejujuran Metodologi: *Human-in-the-Loop AI-Assisted QA*

Di era rekayasa perangkat lunak modern, transparansi metodologi jauh lebih bernilai daripada mengklaim seluruh pekerjaan otomatis sebagai ketikan tangan manual atau sebaliknya. Dalam portofolio ini, pembagian peran diterapkan secara jujur dan tegas:

1. **Peran QA Engineer (Benedict Timothy — *Human-in-the-Loop*)**:
   - Menganalisis kebutuhan sistem (*PRD / Requirement Analysis*) dan menyusun **Software Test Plan** beserta **RTM**.
   - Merancang skenario uji menggunakan teknik *Black-Box* (**Equivalence Partitioning**, **Boundary Value Analysis**, **State Transition**, dan **Negative/Security Testing**).
   - Melakukan **Exploratory Testing & Adaptasi Lingkungan** (misalnya ketika server publik mengalami *HTTP 503* atau ketika *storefront* target tidak memiliki fitur yang tertulis di spesifikasi awal).
   - Memverifikasi *Test Oracle* secara mendalam (mengukur dimensi piksel intrinsik berkas unduhan PNG, menginspeksi *scrollWidth* DOM pada *viewport* sempit, serta memisahkan *noise* telemetri pihak ketiga dari *bug* fungsional).
   - Melakukan triase *Severity* & *Priority* pada setiap laporan *Bug/Defect*.
2. **Peran AI & Alat Otomasi Pendukung (Playwright CLI/MCP & Test Runner)**:
   - Mengakselerasi eksekusi berulang seperti *Cross-Browser Smoke Testing* lintas *Chromium*, *Firefox*, *WebKit*, *Edge*, dan *Mobile Viewport*.
   - Mengotomasikan pengambilan tangkapan layar bukti (*evidence screenshots*) dan perekaman log konsol/jaringan secara deterministik.
   - Membantu *scaffolding* dan audit konsistensi dokumentasi.

---

## Peta 6 Proyek di Dalam Portofolio Ini

| No | Folder Proyek | Target Aplikasi (SUT) | Fokus & Metodologi Uji | Ringkasan Metrik & Temuan Utama |
| :-: | :--- | :--- | :--- | :--- |
| **01** | **[`01_ECommerce_Shopify_JuiceShop`](./01_ECommerce_Shopify_JuiceShop)** | **SauceDemo Shopify** (`sauce-demo.myshopify.com`) & **OWASP Juice Shop v20.3.0** (`localhost:3000`) | Manual Functional, BVA/EP, Session/RBAC, & Environment Fallback (AI-Assisted) | **54 TC**: `42 Passed`, `2 Failed`, `8 Blocked`, `2 No Run` (*Pass Rate Executable: 95,5%*). Menemukan **9 Bug/Blocker** (`BUG-SD-001`..`006`, `BUG-JS-001`, `BUG-ENV-001`..`002`), termasuk inkonsistensi *case-sensitive search* & ketiadaan batas maksimum kuantitas keranjang (`100003`). |
| **02** | **[`02_IPEKA_BSD_Portal_Iterasi_1`](./02_IPEKA_BSD_Portal_Iterasi_1)** | **Portal Internal IPEKA BSD** (`app.ipekabsd.my.id` + 9 Subdomain Layanan) — *Run-01 & Run-02* | AI-Assisted Smoke (Run-01) + Deep Manual Exploratory Investigation (Run-02) | **110 TC**: `100 Passed`, `3 Failed`, `1 Blocked`, `6 No Run (Withheld Prod Writes)` (*Pass Rate: 97,1%*). Menemukan **5 Defect** (`DEF-001`..`005`), termasuk ukuran unduhan PNG QR Generator yang meleset ke kelipatan 33px (`495²`, `1023²`, `2046²`) dan *overflow* tabel PRTG `608px` di layar `375px`. |
| **03** | **[`03_IPEKA_BSD_Portal_Iterasi_2`](./03_IPEKA_BSD_Portal_Iterasi_2)** | **Portal Internal IPEKA BSD** (Iterasi 2: PRD, 116 Web TC, Cross-Browser Playwright, & Mobile Pack) | PRD-Driven Manual QA + Playwright Cross-Browser (`Chromium/Firefox/WebKit`) + Mobile Test Pack | **116 Web TC** (`79 Passed`, `37 Blocked` karena proteksi kredensial admin sekolah) + **6 Bug Reports** (`BUG-001`..`006`); **Cross-Browser Smoke: 42/42 Passed**; **Mobile Test Pack**: `20 TC` (`MOB-001`..`020`) siap dieksekusi pada emulator Pixel 7. |
| **04** | **[`04_SauceDemo_CrossBrowser_Playwright`](./04_SauceDemo_CrossBrowser_Playwright)** | **Swag Labs** (`saucedemo.com`) | Automated Cross-Browser & Responsive Matrix (Playwright `1.65.0` + Manual Console Triage) | **12 Skenario Smoke × 5 Profil Browser** (`Chromium`, `Firefox`, `WebKit`, `Edge`, `Mobile Pixel 5`) = **60/60 Passed** (60 screenshot + analisis log konsol/jaringan). |
| **05** | **[`05_LinkedIn_Web_Smoke_Test`](./05_LinkedIn_Web_Smoke_Test)** | **LinkedIn Web** (`linkedin.com`) | AI-Assisted Smoke + Manual Interactive Follow-up & Data Cleanup | **32 TC** (`19 P1`, `12 P2`, `1 P3`): **32/32 Passed (100%)**. Mencakup tindak lanjut manual pada komponen *rich-text editor* (`FEED-005`, `MSG-003`) dan *redaction* kredensial uji. |
| **06** | **[`06_OrangeHRM_Web_Smoke_Test`](./06_OrangeHRM_Web_Smoke_Test)** | **OrangeHRM OS 5.9 Demo** (`opensource-demo.orangehrmlive.com`) | AI-Assisted Smoke Testing & DOM/Breadcrumb Inspection | **20 TC** (`SMK-01` s.d. `SMK-20`): **20/20 Passed (100%)** melintasi autentikasi, proteksi *deep-link* pasca-*logout*, gerbang re-autentikasi *Maintenance*, dan 12 modul HRIS. |

---

## Panduan Cepat untuk Recruiter & Senior QA

Jika Anda ingin meninjau kualitas analisis QA secara cepat, berikut adalah artefak unggulan yang direkomendasikan untuk dibuka pertama kali:
1. **Kemampuan Analisis Edge-Case, BVA/EP, & Adaptasi Environment**:
   - [`01_ECommerce_Shopify_JuiceShop/03_Test_Report/Test-Execution-Report.md`](./01_ECommerce_Shopify_JuiceShop/03_Test_Report/Test-Execution-Report.md)
   - [`01_ECommerce_Shopify_JuiceShop/03_Test_Report/Bug-Reports.md`](./01_ECommerce_Shopify_JuiceShop/03_Test_Report/Bug-Reports.md)
   - [`01_ECommerce_Shopify_JuiceShop/02_Test_Cases/rtm.md`](./01_ECommerce_Shopify_JuiceShop/02_Test_Cases/rtm.md)
2. **Ketelitian Investigasi Teknis (Dimensi File, DOM ScrollWidth, & Polling Interval)**:
   - [`02_IPEKA_BSD_Portal_Iterasi_1/08_Test_Report/Run-02/Laporan.md`](./02_IPEKA_BSD_Portal_Iterasi_1/08_Test_Report/Run-02/Laporan.md)
   - [`02_IPEKA_BSD_Portal_Iterasi_1/05_Defect_Log/defect-log.md`](./02_IPEKA_BSD_Portal_Iterasi_1/05_Defect_Log/defect-log.md)
3. **Kemampuan Menyusun PRD, Bidirectional RTM, & Cross-Browser Automation**:
   - [`03_IPEKA_BSD_Portal_Iterasi_2/PRD.md`](./03_IPEKA_BSD_Portal_Iterasi_2/PRD.md)
   - [`03_IPEKA_BSD_Portal_Iterasi_2/TraceabilityMatrix.md`](./03_IPEKA_BSD_Portal_Iterasi_2/TraceabilityMatrix.md)
   - [`04_SauceDemo_CrossBrowser_Playwright/Reports/compatibility-matrix.md`](./04_SauceDemo_CrossBrowser_Playwright/Reports/compatibility-matrix.md)
   - [`04_SauceDemo_CrossBrowser_Playwright/Reports/console-summary.md`](./04_SauceDemo_CrossBrowser_Playwright/Reports/console-summary.md)
