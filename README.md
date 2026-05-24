# Legal Documents — Premium Single-Page Website

Premium, mobile-first marketing website for a legal document & affidavit service business in **Gandhinagar, Gujarat**.

Built with **Next.js 15 App Router + TypeScript + Tailwind CSS + Framer Motion + Lucide Icons** — fully static, deploys free on **Netlify**.

---

## Tech Stack

| Layer        | Tool                                           |
| ------------ | ---------------------------------------------- |
| Framework    | Next.js 15 (App Router, static export)         |
| Language     | TypeScript (strict)                            |
| Styling      | Tailwind CSS 3.4 (custom navy + saffron theme) |
| Animation    | Framer Motion 11                               |
| Icons        | Lucide React                                   |
| Fonts        | Inter + Plus Jakarta Sans (self-hosted via next/font) |
| Deployment   | Netlify (free tier)                            |

---

## Folder Structure

```
legal-document/
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout + metadata + JSON-LD schema
│   │   ├── page.tsx            # Single-page home
│   │   ├── not-found.tsx       # 404 page
│   │   └── globals.css         # Tailwind + design tokens
│   ├── components/
│   │   ├── Header.tsx          # Sticky nav + mobile drawer + active highlighting
│   │   ├── Hero.tsx            # Headline + dual CTA + trust badges + estimate card
│   │   ├── Services.tsx        # 12 service cards with pricing
│   │   ├── HowItWorks.tsx      # 4-step process timeline
│   │   ├── WhyChooseUs.tsx     # Dark trust section with stats
│   │   ├── Pricing.tsx         # 3-tier pricing
│   │   ├── Testimonials.tsx    # 6 client reviews + Google rating
│   │   ├── FAQ.tsx             # Accordion + FAQ JSON-LD schema
│   │   ├── Contact.tsx         # Contact details + Google Maps + WhatsApp form
│   │   ├── Footer.tsx          # Brand + links + local SEO keywords
│   │   ├── FloatingCTA.tsx     # Mobile sticky bar + desktop WhatsApp button
│   │   └── ui/
│   │       └── SectionHeading.tsx
│   ├── data/
│   │   └── content.ts          # ALL business content — edit here
│   └── lib/
│       └── utils.ts            # `cn()` className helper
├── netlify.toml                # Netlify build + headers + cache
├── next.config.ts              # Static export config
├── tailwind.config.ts          # Theme tokens
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## Local Development

```bash
# 1. install dependencies
npm install

# 2. run dev server
npm run dev
# → open http://localhost:3000

# 3. production build (static export → /out)
npm run build
```

> **Note (Windows / Seqrite users):** If npm install fails with SSL errors, temporarily disable Seqrite web protection or use a hotspot — Seqrite is known to intercept npm registry SSL.

---

## Editing Content

**One file = all content**: `src/data/content.ts`

- Phone / WhatsApp / email → `business` object
- Services list → `services` array
- Pricing tiers → `pricingPlans`
- Testimonials → `testimonials`
- FAQs → `faqs` (also feeds FAQ JSON-LD schema)
- Address → `business.address` (also feeds LocalBusiness schema in `layout.tsx`)

For Google Maps: paste the iframe `src` from Google Maps "Share → Embed" into `business.gmapEmbed`.

---

## Netlify Deployment (Free)

### Option A — Drag & Drop (fastest)

1. Run `npm run build` locally
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the generated `out/` folder onto the page
4. Done — you'll get a `*.netlify.app` URL instantly

### Option B — Git-connected (recommended for updates)

1. Push the project to GitHub / GitLab / Bitbucket
2. On [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git**
3. Pick the repo. Netlify auto-reads `netlify.toml`, so:
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: `20`
4. Click **Deploy** — first build takes ~2 min
5. Each `git push` triggers a fresh production deploy

### Custom Domain

1. Buy domain (GoDaddy / Namecheap / Bigrock)
2. Netlify → **Domain settings** → **Add custom domain**
3. Add the Netlify-provided DNS records at your registrar
4. Netlify auto-issues a free Let's Encrypt SSL cert in ~10 min

### Post-deploy checklist

- [ ] Update `SITE_URL` in `src/app/layout.tsx`
- [ ] Update sitemap URL in `public/sitemap.xml` and `public/robots.txt`
- [ ] Add real `og-image.png` (1200×630) and `favicon.ico` to `public/`
- [ ] Verify WhatsApp number, address, Google Maps embed in `content.ts`
- [ ] Submit sitemap in Google Search Console → faster indexing
- [ ] Register the business on Google Business Profile for local SEO

---

## SEO Setup (already done)

- **Metadata API** — title template, OG tags, Twitter card, canonical
- **Local Business JSON-LD** schema in `layout.tsx` (LegalService type)
- **FAQ JSON-LD** schema in `FAQ.tsx` (rich snippets in Google)
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`, `<figure>`, `<ol>`)
- Heading hierarchy: 1×`h1` in Hero, `h2` for each section, `h3` for cards
- Mobile-first responsive design
- Local SEO keywords seeded in Footer
- Preconnect to Google Fonts for faster LCP

---

## Performance Tips Built-in

- `next/font` with `display: swap` → no FOIT
- Tailwind purging via `content` glob
- Framer Motion animations gated by `whileInView` (no JS work off-screen)
- `prefers-reduced-motion` respected in `globals.css`
- Aggressive Netlify caching headers in `netlify.toml`
- Static export → zero server cost, served from CDN edge

After deploy, run **Lighthouse** in Chrome DevTools — aim for 95+ Performance, 100 Accessibility, 100 SEO.

---

## Future Scalability Suggestions

### Phase 2 — content scale

- **Sanity CMS** (free tier) → swap `data/content.ts` for fetched data; let owner edit services/prices without touching code
- **Blog section** → `app/blog/[slug]/page.tsx` with MDX for local SEO ("How to make rent agreement in Gandhinagar", etc.)
- **Per-service landing pages** → `/services/affidavit/`, `/services/rent-agreement/` for stronger long-tail SEO
- **Multi-language** (Gujarati) → `next-intl` with `gu` locale

### Phase 3 — backend & automation

- **WhatsApp Cloud API** (Meta, free up to 1k convos/mo) → auto-acknowledge inquiries
- **Netlify Forms** → free 100 submissions/mo without writing backend
- **Supabase / Firebase** → store leads, track which service is most enquired, auto-quote
- **Razorpay payment link** → collect advance payments from the website
- **n8n workflow** → form submit → Google Sheet log → WhatsApp notify owner → CRM tag

### Phase 4 — admin panel

Three viable approaches, easiest first:

1. **Sanity Studio** (recommended) — drop-in CMS at `/studio`, owner edits services & prices. Total time: 1 day.
2. **Notion-as-database** + Notion API → fetch at build time → rebuild via Netlify webhook. Owner edits Notion directly.
3. **Custom admin** — move to Next.js with App Router server, add `/admin` route protected by NextAuth + Postgres (Supabase). Bigger lift but full control. Required if owner wants user accounts, order tracking, lead pipeline.

### Phase 5 — growth features

- Online document order tracker (status: drafting → notary → ready → delivered)
- Customer dashboard with past documents stored as PDFs
- WhatsApp chatbot for FAQ + auto pricing quotes
- Google Reviews widget pulling live data
- Pixel tracking + Meta/Google Ads conversion setup
- AI-based document drafting copilot (internal tool for owner)

---

## Performance Optimisation Tips

- **Images**: when adding hero photos, use AVIF/WebP, max 100KB each, served from `public/` and referenced with `next/image` (set `unoptimized: true` is already done for static export)
- **Fonts**: keep only 2 font families — current Inter + Plus Jakarta is the sweet spot
- **Framer Motion**: prefer `whileInView` over `useEffect` triggers, use `viewport={{ once: true }}` to avoid re-animation cost
- **Third-party scripts**: only add Google Analytics / Meta Pixel after measuring real need — they cost 30-50 Lighthouse points
- **Map iframe**: already `loading="lazy"` — keep it that way
- **Build size**: run `npm run build` and watch the route size log — keep the homepage under 100KB JS

---

## Troubleshooting

**`Module not found: framer-motion`** → run `npm install`

**Netlify build fails with "Cannot find module 'next'"** → make sure `package.json` is committed, and `node_modules` is in `.gitignore`

**Maps not loading** → `business.gmapEmbed` must be the `src` from Google Maps → Share → Embed (an iframe URL, not a regular Maps link)

**WhatsApp link opens wrong number** → check `business.whatsapp` in `content.ts` (must be country code + number with no `+` or spaces, e.g. `919033636031`)

---

## License & Credits

Built for **Legal Documents & Affidavit Services**, Gandhinagar.
All business content is dummy — replace before going live.

Generated structure: 2026.
