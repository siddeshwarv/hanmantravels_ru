# 🇷🇺 Hanman Travels Russia — `hanmantravels.ru`

> **Official B2B Recruitment Portal for Russian Enterprise Clients & ITB '26 St. Petersburg Summit**

---

## 🌟 Overview

`hanmantravels.ru` is a high-converting, state-of-the-art B2B web application specifically designed to introduce **Hanman Travels** (Govt. Licensed Overseas Recruitment Agency RA# B-1857/TEL/PER/1000+/5/10271/2023) to Russian companies and delegates at the **Indo-Russia Talent Bridge 2026 (ITB '26)** summit in St. Petersburg.

### Key Value Proposition Highlighted:
- **0 ₽ Employer Recruitment Fee:** Direct, transparent explanation of why agency services are zero-cost for Russian companies (expanding baseline market presence + Indian MEA *Emigration Act 1983* regulation).
- **90-Day Free Replacement Guarantee:** 100% risk elimination for Russian employers.
- **Full Legal Compliance:** Comprehensive workflow covering Indian Ministry of External Affairs (eMigrate) and Russian MVD (МВД РФ) migration requirements.
- **Multi-Industry Coverage:** Welders (6G/TIG), CNC Operators, Truck Drivers (C/E), Masons, Warehouse Workers, Farm Hands.

---

## 🛠️ Key Technical Features

1. **Bilingual Engine (RU / EN):** Instant client-side language switching between Russian (Primary) and English.
2. **Dynamic Cost & Deployment Calculator:** Interactive calculator letting Russian HR managers select their trade, headcount, and receive instant 0 ₽ quote parameters.
3. **Interactive Trade Matrix:** Tabbed trade cards detailing practical testing and quality verification.
4. **Theme Switcher:** Sleek Dark Mode (Default) and Light Mode toggle.
5. **SEO & Mobile Optimized:** Fast page load, semantic HTML5 tags, Open Graph meta tags, responsive grid/flex layouts.

---

## 🚀 Deployment

**Live URL:** [https://russia.hanmantravels.com](https://russia.hanmantravels.com)  
**Fallback:** [https://siddeshwarv.github.io/hanmantravels_ru/](https://siddeshwarv.github.io/hanmantravels_ru/)

**Platform:** GitHub Pages (from `master` branch, `/` root)

### Why GitHub Pages (not Cloudflare/Vercel)

- Cloudflare Pages (`.pages.dev`) — **BLOCKED by Russian ISPs** (Roskomnadzor blocklist)
- Vercel IPs — throttled/unreliable in Russia  
- GitHub Pages (`github.io`) — **works in Russia**, not blocked

### Setup

1. **Repo:** Public. `master` branch set as Pages source in repo Settings → Pages.
2. **CNAME:** `CNAME` file in repo root = `russia.hanmantravels.com`
3. **DNS:** At hostingraja.in — CNAME `russia` → `siddeshwarv.github.io`
4. **SSL:** GitHub auto-provisions Let's Encrypt certificate. Takes 5-15 min after DNS propagation.

### Auto-Deploy

Every `git push origin master` auto-rebuilds the site. No build step — pure static HTML/CSS/JS. Deploys in ~30 seconds.

### Local Dev

```bash
python3 -m http.server 8888
# Open http://localhost:8888
```

## 🇷🇺 Russia-Specific Constraints

Russia has significant internet restrictions. Every design and deploy decision was made with these in mind.

### What Is Blocked in Russia

| Service | Status | Impact on This Site |
|---|---|---|
| **Google Fonts** | 🚫 Blocked | Removed. Using system fallbacks: `Segoe UI`, `Arial`, `Trebuchet MS` |
| **Google Analytics** | 🚫 Blocked | Not included. Use Yandex.Metrica instead |
| **Google APIs / CDN** | 🚫 Blocked | Zero Google-hosted resources |
| **Facebook / Instagram** | 🚫 Blocked | No social embeds or pixels |
| **Cloudflare Pages (.pages.dev)** | 🚫 Roskomnadzor blocklist | Not used. Deployed to GitHub Pages instead |
| **Vercel IP ranges** | ⚠️ Throttled | `hanmantravels.com` on Vercel loads poorly in Russia |
| **Google Forms** | 🚫 Unreliable | Built custom `client-request-form.html` instead |
| **YouTube embeds** | 🚫 Throttled | Not used |
| **Twitter/X** | 🚫 Blocked | Not used |

### What Works in Russia

| Service | Used In This Site |
|---|---|
| **WhatsApp (`wa.me`)** | Contact form submits via WhatsApp |
| **Telegram** | Recommended for client follow-up |
| **Yandex.Metrica** | Analytics (not yet added — ready to integrate) |
| **Yandex Webmaster** | Search indexing (sitemap submitted) |
| **GitHub Pages (`github.io`)** | Deployment platform |
| **Self-hosted images** | All assets in `assets/images/` |
| **System fonts** | `Segoe UI`, `Arial` — no external downloads |
| **Schema.org** | Structured data markup (not blocked) |

### Design Choices Driven by Russia

- **Dark theme:** Works well even if CSS partially fails. Light text on dark = always readable.
- **No external CSS/JS:** Zero CDN dependencies. Single `index.css` + `app.js` — both local.
- **Bilingual EN/RU:** Toggle in header. Russian is default.
- **Offline-first forms:** `client-request-form.html` works without internet. Falls back to WhatsApp submit.
- **No webfont downloads:** Eliminated the #1 cause of blank pages in Russia.
- **Progressive JPEG images:** Compressed 87–92% for fast load on Russian mobile networks. 1.8MB → 200KB.
- **Minimal JavaScript:** No framework. Vanilla JS only. No npm build step.

### What We Tried and Why It Failed

| Attempt | Result |
|---|---|
| Cloudflare Pages (`.pages.dev`) | BLOCKED by CityTelecom/Roskomnadzor — "Доступ к ресурсу ограничен" |
| Wrangler direct API deploy | Deploy succeeded but pages.dev IPs blocked at ISP level |
| CNAME to pages.dev | Same blocked IPs — CNAME doesn't bypass ISP block |
| Vercel (`hanmantravels.com`) | Site already exists but loads unreliably in Russia |
| ✅ **GitHub Pages** | Works. Different IP range. Not on Russian blocklist. |

---

## 📂 Project Structure

```
hanmantravels_ru/
├── index.html                    # Main B2B landing (EN/RU, dark theme, calculator)
├── index.css                     # Design system (CSS variables, dark/light modes)
├── app.js                        # i18n engine, calculator, contact form logic
├── agreement.html                # Editable bilingual Service Agreement (16 sections)
├── client-request-form.html      # Interactive 5-section client questionnaire
├── CNAME                         # russia.hanmantravels.com → GitHub Pages
├── sitemap.xml                   # For Yandex Webmaster + Google Search Console
├── robots.txt                    # Allows all bots, specifies Yandex Host
├── README.md                     # This file
└── assets/
    └── images/
        ├── hero_workforce.jpg    # Compressed 940KB → 131KB
        └── trade_testing.jpg     # Compressed 831KB → 69KB
```

## 🔍 Russian Search Engines

Russia uses **Yandex** (62% market share), not Google (25%).

- **Yandex Webmaster:** Site submitted at `webmaster.yandex.ru`
- **Region:** Set to "Russia"
- **Sitemap:** `https://russia.hanmantravels.com/sitemap.xml`
- **Yandex.Metrica:** Ready to add (replaces Google Analytics)
- **Yandex.Business:** Create profile at `business.yandex.ru` for local listing

---

## 📜 Government License & Contact Information

* **Agency Name:** HANMAN TRAVELS
* **RA License No.:** B-1857/TEL/PER/1000+/5/10271/2023 (Ministry of External Affairs India)
* **Summit Delegation Phone / WhatsApp:** +91 94901 94000
* **Email:** hanmantravels@gmail.com
* **Pitch Deck Presentation:** [`presentation.html`](../hanman_russia_summit_2026/presentation.html)
