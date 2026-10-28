# Sunify Group website

The one-page website for Sunify Group Inc. (renovations, repairs and fall cleanups in Greater Vancouver).
It is built with [Astro](https://astro.build) and plain CSS. Astro turns it into ordinary static HTML files.

## Run it on your computer

You need [Node.js](https://nodejs.org) version 22.12 or newer.

```bash
npm install      # once, downloads the tools
npm run dev      # starts a local preview at http://localhost:4321 (updates as you edit)
npm run build    # makes the finished site in the dist/ folder
```

## Where to change things

| What | File |
| --- | --- |
| Most text (services, before/after pairs, steps, fall list, reviews, “why us”) | `src/data/content.ts` |
| Phone, email, page title and description | `src/data/site.ts` |
| **Form endpoint** (where quote requests are sent) | `FORM_ENDPOINT` in `src/data/site.ts` |
| Page layout and the remaining headings | `src/pages/index.astro` |
| Colours, fonts, spacing | `src/styles/global.css` (colours are at the top) |
| Photos and logo | `src/assets/sunify/` (photos are converted to WebP automatically) |
| Favicon | `public/favicon.png`, `public/apple-touch-icon.png` |

### Connecting the quote form

1. Create a free form at [formspree.io](https://formspree.io) and copy its endpoint (looks like `https://formspree.io/f/abcdwxyz`).
2. Paste it into `FORM_ENDPOINT` in `src/data/site.ts`.

Until you do this, the form only shows the thank-you message and **nothing is sent**.
Note: Formspree only accepts photo uploads on paid plans.

### Setting the domain

When the domain is known, open `astro.config.mjs` and set `site` (for example `site: 'https://www.sunifygroup.ca'`).
This makes the social-sharing image link work on Facebook, iMessage, etc.

## Deploy on Vercel

1. Push this repository to GitHub.
2. In [Vercel](https://vercel.com), click **Add New → Project** and import the repository.
3. Framework preset: **Astro**. No other settings are needed. Click **Deploy**.

Every push to the `main` branch will redeploy the site.

## Confirm with client

From the design handoff (full notes in `docs/HANDOFF.md`):

- Their HomeStars profile link.
- Whether they want more before/after pairs.

Also still to do: the form endpoint and the real domain (see above).
