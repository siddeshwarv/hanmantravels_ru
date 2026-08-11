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

### No Google Dependencies

- Google Fonts removed — uses system fonts (Segoe UI, Arial)
- No Google Analytics, no external CDN scripts
- All images self-hosted in `assets/images/`
- Only external call: WhatsApp (`wa.me`) — works in Russia

---

## 📂 Project Structure

```
hanmantravels_ru/
├── index.html        # Main landing page for Russian enterprise clients
├── index.css         # Modern design system & stylesheet
├── app.js            # Translation dictionary, calculator & interactive engine
├── README.md         # Repository documentation
└── assets/
    └── images/       # High-resolution workforce & trade testing photography
        ├── hero_workforce.jpg
        └── trade_testing.jpg
```

---

## 📜 Government License & Contact Information

* **Agency Name:** HANMAN TRAVELS
* **RA License No.:** B-1857/TEL/PER/1000+/5/10271/2023 (Ministry of External Affairs India)
* **Summit Delegation Phone / WhatsApp:** +91 94901 94000
* **Email:** hanmantravels@gmail.com
* **Pitch Deck Presentation:** [`presentation.html`](../hanman_russia_summit_2026/presentation.html)
