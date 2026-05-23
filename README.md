# AfyaTech — AI-Powered Healthcare Website
### AI Safari Capstone Project · Full Production Website

---

## 📋 Project Overview

AfyaTech is a Nairobi-based healthtech startup building AI-powered clinical tools to extend quality healthcare to underserved communities across Kenya and East Africa. This repository contains the complete, production-ready static website for AfyaTech — built as the capstone deliverable for the AI Safari programme, synthesising all four terrain domains into a unified web experience.

**Live URL (after deployment):** `https://afyatech.vercel.app` *(replace with your own after deploying)*

---

## 🗂️ Project Structure

```
afyatech/
│
├── index.html          → Home page
├── about.html          → About AfyaTech (story, team, values, timeline)
├── services.html       → AI Services (6 products, comparison table)
├── strategy.html       → AI Strategy (4-terrain capstone — tabbed)
├── contact.html        → Contact form, offices, FAQ accordion
│
├── css/
│   └── style.css       → Global shared stylesheet (800+ lines)
│
├── js/
│   └── main.js         → Shared JavaScript (nav, animations, forms)
│
├── vercel.json         → Vercel deployment configuration
└── README.md           → This file
```

---

## 🎨 Design System

### Theme Colours
| Token | Hex | Usage |
|---|---|---|
| `--clr-primary` | `#0A5C45` | Main brand green |
| `--clr-secondary` | `#1D9E75` | Interactive / CTA green |
| `--clr-accent` | `#C9A84C` | Gold accent (badges, CTAs) |
| `--clr-dark` | `#071A14` | Hero / footer backgrounds |
| `--clr-light` | `#F2F8F5` | Section backgrounds |

### Typography
| Role | Font |
|---|---|
| Display / Headings | DM Serif Display (Google Fonts) |
| Body / UI | DM Sans (Google Fonts) |

### Breakpoints
| Breakpoint | Width |
|---|---|
| Desktop | > 1024px |
| Tablet | 768px – 1024px |
| Mobile | < 768px |
| Small mobile | < 480px |

---

## 📄 Page-by-Page Guide

### Step 1 — `index.html` · Home Page
**Purpose:** First impression, brand positioning, and navigation hub.

**Key sections:**
- **Hero** — Fullscreen image background (`unsplash`), animated headline, hero stats with counter animation
- **Mission ticker strip** — Auto-scrolling marquee of AfyaTech pillars
- **Stats row** — 4 KPIs with intersection-observer count-up animation
- **About / Mission split** — Text + image with floating badge
- **Services overview** — 6 product cards linking to `services.html`
- **Ethics feature** — Split layout with checklist
- **Testimonials** — 3 clinician testimonials with avatar images
- **Dark CTA** — Full-width call to action

**Images used (Unsplash):**
```
Hero bg:    photo-1582719471384-894fbb16e074  (African healthcare)
Mission:    photo-1551884170-09fb70a3a2ed   (CHW with tablet)
Ethics:     photo-1576091160550-2173dba999ef (Doctor with tablet)
Testimonial avatars: three portrait URLs
```

---

### Step 2 — `about.html` · About Page
**Purpose:** Build trust through story, impact data, values, and team.

**Key sections:**
- **Page hero** — Background image overlay with headline
- **Story split** — Narrative text + community health worker image
- **Impact banner** — Dark green card with 6 animated counters
- **Values grid** — 6 value cards (Patient First, Equity, Transparency, Data Sovereignty, Human Oversight, African-Built)
- **Milestone timeline** — 2017 → 2027 journey with vertical line
- **Team cards** — 4 team members with photo, role, bio, social links

**Images used (Unsplash):**
```
Hero bg:    photo-1504813184591-01572f98c85f  (medical team)
Story:      photo-1631815589975-db6af8d69659  (CHW in the field)
Timeline:   photo-1505751172876-fa1923c5c528  (medical team)
Team:       4 × portrait photos
```

---

### Step 3 — `services.html` · Services Page
**Purpose:** Detail all 6 AI products with use-case specifics, risk tiers, and tool stacks.

**Key sections:**
- **Page hero** — Background image overlay
- **6 service blocks** — Alternating image + content layout, each with:
  - Risk tier badge (Low / Medium / High)
  - Feature list with checkmarks
  - Tool chip tags
- **Comparison table** — 7-capability × 4-agent matrix

**Risk tier system:**
| Level | Colour | Oversight |
|---|---|---|
| Low | Green | Clinician-approved template, monthly audit |
| Medium | Amber | CHW view; clinician confirms before action |
| High | Red | Clinician mandatory review — always |

**Images used (Unsplash):**
```
Service 1:  photo-1576091160399-112ba8d25d1d  (documentation)
Service 2:  photo-1516549655169-df83a0774514  (emergency triage)
Service 3:  photo-1584515933487-779824d29309  (patient education)
Service 4:  photo-1579684385127-1ef15d508118  (clinical AI)
Service 5:  photo-1600880292203-757bb62b4baf  (CHW with phone)
Service 6:  photo-1559757148-5c350d0d3c56   (follow-up care)
```

---

### Step 4 — `strategy.html` · AI Strategy Page
**Purpose:** The capstone AI strategy document — all four AI Safari terrains presented as a tabbed interactive page.

**Sticky terrain navigation tabs:**
| Tab | Terrain | Content |
|---|---|---|
| 🌿 Savannah | Precision Prompting | 3 prompt templates with syntax highlighting, 4 principles, deployment checklist |
| 🧠 Tsavo | AI Fluency | Capability map (can/can't), 3-tier training programme, critical AI concepts |
| ⚖️ Ethical Savannah | Ethics & Governance | 5 ethical pillars, legal framework (KDPA 2019, KMPDC), 3-tier risk system |
| 🤖 Agentic Pride | Agent Orchestration | 5 agent cards, orchestration flow diagram, implementation roadmap |

**Prompt templates included:**
1. CHW Clinical Note Generation (SOAP format)
2. Patient Triage Prioritisation (JSON output, 1–5 scale)
3. Multilingual Patient Education (Swahili/English/Kikuyu)

**Tab switching:** JavaScript handles `.terrain-nav__tab` → `.terrain-section` toggling with fade animation. Deep-linking via `strategy.html#ethics` opens the Ethics tab directly.

**Images used (Unsplash):**
```
Hero bg:    photo-1620712943543-bcc4688e7485  (AI concept)
Savannah:   photo-1563213126-a4273aed2016   (medical notes)
Tsavo:      photo-1516321497487-e288fb19713f  (training session)
Ethics:     photo-1532938911079-1b06ac7ceec7  (governance)
Agents:     photo-1485827404703-89b55fcc595e  (AI/robot concept)
```

---

### Step 5 — `contact.html` · Contact Page
**Purpose:** Collect partnership and demo enquiries; provide office locations and answers to common questions.

**Key sections:**
- **Contact info card** — Dark green card with address, email, phone, WhatsApp, social links
- **Contact form** — First/last name, email, phone, organisation, enquiry type (dropdown), county/region (dropdown), message, consent checkbox
- **Quick links** — 4 shortcut cards to other pages
- **Office locations** — 3 cards: Nairobi HQ, Kisumu, Mombasa (each with image)
- **FAQ accordion** — 7 questions with toggle animation
- **CTA banner** — Final call to action

**Form behaviour (JS):**
- Submitting the form replaces the button text with `✓ Message Sent!` (green) for 4 seconds, then resets
- No backend required for static deployment — connect to Formspree, Netlify Forms, or EmailJS for live email delivery

**Images used (Unsplash):**
```
Hero bg:    photo-1576669801820-a9ab287ac2d1  (healthcare)
FAQ:        photo-1559839914-17aae19cec71   (support team)
Nairobi:    photo-1611348586804-61bf6c080437
Kisumu:     photo-1533106418989-88406c7cc8ca
Mombasa:    photo-1596524430615-b46475ddff6e
```

---

## ⚙️ Shared Assets

### `css/style.css`
Single shared stylesheet loaded by all pages. Key systems:
- **CSS custom properties** — All colours, fonts, radii, shadows as variables
- **Reset** — Box-sizing, margin, overflow normalisation
- **Navigation** — Fixed, scrolled-state (dark glass), mobile hamburger menu
- **Hero & page-hero** — Fullscreen and inner-page hero patterns
- **Layout utilities** — `.container`, `.grid-2`, `.grid-3`, `.grid-4`, `.section`
- **Component library** — Cards, buttons (5 variants), pills, badges, stats-grid, team-cards, agent-nodes, timeline, form inputs, footer
- **Scroll animation** — `.reveal` class + IntersectionObserver in JS
- **Responsive** — 3 breakpoints (1024px, 768px, 480px) with full mobile adaptation

### `js/main.js`
Single shared script loaded by all pages. Features:
- **Active nav link** — Matches `window.location.pathname` to highlight current page
- **Sticky nav** — Adds `.scrolled` class (dark background) after 20px scroll
- **Mobile menu** — Hamburger toggle with animated bars
- **Scroll reveal** — IntersectionObserver triggers `.visible` on `.reveal` elements
- **Counter animation** — Eased count-up for `[data-target]` elements on first viewport entry
- **Tab system** — Generic `.terrain-tab` / `.terrain-panel` switcher
- **Contact form** — Submit handler with success state and reset
- **Smooth scroll** — Handles `<a href="#...">` anchor links

---

## 🚀 Deploying to Vercel

### Option A — Drag & Drop (Easiest)
1. Unzip `afyatech-website.zip`
2. Go to [vercel.com](https://vercel.com) → Sign in / Sign up (free)
3. Click **"Add New Project"** → **"Browse"**
4. Select the `afyatech` folder
5. Click **Deploy** — live in ~30 seconds

### Option B — Vercel CLI
```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate into the project folder
cd afyatech

# Deploy
vercel

# Follow prompts → your site will be live at a .vercel.app URL
```

### Option C — GitHub + Vercel (Recommended for ongoing updates)
1. Push the `afyatech` folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **"Add New Project"**
3. Import your GitHub repository
4. Vercel auto-detects the static site — click **Deploy**
5. Every push to `main` will trigger an automatic re-deployment

### `vercel.json` explained
```json
{
  "version": 2,
  "routes": [
    { "src": "/about",    "dest": "/about.html" },
    { "src": "/services", "dest": "/services.html" },
    { "src": "/strategy", "dest": "/strategy.html" },
    { "src": "/contact",  "dest": "/contact.html" },
    { "handle": "filesystem" },
    { "src": "/(.*)",     "dest": "/$1" }
  ]
}
```
This enables clean URLs (`/about` instead of `/about.html`) and proper routing.

> ⚠️ **Important:** Do NOT add a `"builds"` array to this config. Using `"builds": [{ "src": "**/*.html" }]` tells Vercel to only serve `.html` files — it will block `css/` and `js/` from being delivered, causing the site to appear completely unstyled. The config above omits `builds` entirely so Vercel auto-detects the project as a static site and serves all file types correctly.

---

## 🌐 Adding a Custom Domain
After deployment on Vercel:
1. Go to your project → **Settings → Domains**
2. Add your domain (e.g. `afyatech.co.ke`)
3. Update your DNS records as instructed by Vercel
4. HTTPS is provisioned automatically (free via Let's Encrypt)

---

## 📬 Connecting the Contact Form

The contact form currently shows a success state in the browser only. To receive real emails, integrate one of these (all free tiers available):

### Formspree (Recommended — no code changes)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form → copy your form endpoint
3. In `contact.html`, change:
```html
<form id="contact-form" novalidate>
```
to:
```html
<form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Netlify Forms (if hosting on Netlify instead)
Add `netlify` attribute to the form tag:
```html
<form id="contact-form" netlify name="contact">
```

---

## 💬 WhatsApp Floating Widget

A floating WhatsApp chat button appears on every page, bottom-right corner.

**Files:**
| File | Purpose |
|---|---|
| `css/whatsapp.css` | Widget styles — panel, FAB button, pulse ring, tooltip, animations |
| `js/whatsapp.js` | Widget logic — toggle, auto-open, greeting, WA deep link |

**Phone number:** `+254 743 336 009` (set in `js/whatsapp.js` → `WA_NUMBER`)

**Behaviour:**
- **FAB button** — Green circular button (bottom-right). Click to open/close panel
- **Pulse ring** — Animated ring draws attention on page load
- **Tooltip** — "Chat with us!" bubble appears for 5 seconds on first load, then hides
- **Chat panel** — Opens with a time-aware greeting (Good morning/afternoon/evening), AfyaTech branding, and a "Chat on WhatsApp" button
- **Auto-open** — Panel opens automatically after **8 seconds** on the user's first visit (tracked via `sessionStorage` so it only fires once per browser session)
- **Keyboard** — Press `Escape` to close the panel
- **Deep link** — Clicking "Chat on WhatsApp" opens `wa.me/254743336009` with a pre-filled message in a new tab

**To change the phone number:** open `js/whatsapp.js` and edit:
```js
const WA_NUMBER = '254743336009'; // ← update here (digits only, no + or spaces)
```

**To change the pre-filled message:** edit:
```js
const WA_MESSAGE = encodeURIComponent('Your custom message here');
```

**To disable auto-open:** remove or comment out the `setTimeout(openPanel, 8000)` block at the bottom of `js/whatsapp.js`.

---

## 📦 External Dependencies

All loaded via CDN — no npm install required.

| Library | Version | Purpose | CDN |
|---|---|---|---|
| Font Awesome | 6.5.0 | Icons throughout the site | cdnjs.cloudflare.com |
| Google Fonts | — | DM Serif Display + DM Sans | fonts.googleapis.com |

All images are loaded from **Unsplash** via direct URL — no download or local storage needed. The site will display images as long as there is an internet connection. For a fully offline/self-hosted version, download each image and update the `src` attributes accordingly.

---

## ♿ Accessibility

- Semantic HTML5 elements (`<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`)
- `aria-label` on all icon-only buttons and links
- `aria-expanded` on the mobile menu toggle
- `alt` text on all images
- Sufficient colour contrast ratios throughout (WCAG AA)
- Focus-visible styles preserved from browser defaults
- Form labels explicitly associated with inputs via `for`/`id`

---

## 🔧 Customisation Guide

### Changing the brand colour
Open `css/style.css` and update the CSS variables at the top:
```css
:root {
  --clr-primary:   #0A5C45;   /* ← change this */
  --clr-secondary: #1D9E75;   /* ← and this */
  --clr-accent:    #C9A84C;   /* ← gold accent */
}
```

### Swapping hero images
Each page hero has an inline `background-image` URL. Replace the Unsplash URL:
```html
style="background-image:url('YOUR_NEW_IMAGE_URL');"
```

### Adding a new page
1. Duplicate any existing `.html` file
2. Update the `<title>` and `<meta name="description">`
3. Add a link in the `<nav>` of all pages and in the footer

### Updating team members (`about.html`)
Find the `#team` section and edit the `.team-card` blocks — replace the Unsplash image URL, name, role, and bio text.

---

## 📊 Performance Notes

- All images use `loading="lazy"` for deferred loading
- Fonts are loaded via Google Fonts with `display=swap`
- CSS and JS are single shared files (no duplication across pages)
- No build step required — pure HTML/CSS/JS
- Vercel serves assets via global CDN automatically

---

## 🛡️ Licence

This website was created as an academic capstone project for the **AI Safari programme**. All content is fictional and for educational demonstration purposes. AfyaTech is a fictional startup. Images are sourced from Unsplash under the Unsplash Licence (free for commercial and non-commercial use).

---

## 🙋 Support

For questions about deployment or customisation, reach out via the course platform or open an issue on the project repository.

---

*Built with ❤️ in Nairobi · AI Safari Capstone 2025*
