# Handoff: Sunify Group website

## Overview
One-page rebuild of the Sunify Group site: renovations, plus fall yard and exterior cleanups. The goal is quote requests. The palette is navy #0F1B2D and gold #F2B82E from their sun logo. Headings use Sora, body text uses DM Sans.

## About the design files
These are **design references built in HTML**, not production code. Rebuild them in a real stack. If there's no existing codebase, use **Astro or Next.js (static export) + Tailwind**, deployed on Vercel.
- `*.dc.html`: the source prototype. All copy and data arrays are in the script at the bottom.
- `preview.html`: a clickable preview. Unzip the folder first, because some images load from the asset folder next to it.
- The asset folder holds the logo and photos.
- `support.js`: prototype runtime only. **Do not ship it.**

## Fidelity
**High fidelity.** Colours, type, spacing, copy and interactions are final. Exact values are inline in the prototype. Copy comes from the client's current site. **Don't add services, reviews, prices or claims.**

## Shared conventions
- **Easing:** `cubic-bezier(.16,.84,.3,1)` throughout.
- **Hero load animation:** text rises in, staggered about 100ms between elements; the hero image eases from a slight zoom.
- **Scroll reveal:** `[data-reveal]` elements fade up 28–36px as they enter the viewport, staggered about 80ms between siblings.
- **Reduced motion:** respect `prefers-reduced-motion`.
- **Shape:** square corners. Max width 1440px. Side padding clamp(18px, 4vw, 48px).
- **Mobile (below 1000px):** nav hides, and a sticky bottom bar (Call + Quote) appears. Pad the footer so the bar doesn't cover it.
- **Footer:** includes "Powered by Backpack Digital Media" (https://backpackdigitalmedia.com).

## To finish at build time
- Connect the form to email (e.g. Formspree or Resend).
- Add a page title and description, Open Graph image, favicon, and LocalBusiness JSON-LD.
- Convert images to WebP or AVIF and lazy-load them below the fold.

## Sections
1. **Hero:** "Renovations planned around your home." with a kitchen photo.
2. **Services** ("What can we help with?"): a toggle switches the list between homeowners and property managers/contractors.
3. **Before and after:** a drag slider with three pairs (yard cleanup and two decks). The before image is clipped with `clip-path`, and pointer events allow `touch-action: pan-y`.
4. **Two paths, depending on the job.**
5. **Fall cleanup band.**
6. **Why us:** "A contractor you can actually trust", with their two HomeStars reviews.
7. **Quote form.**

## Tokens
- **Navy:** #0F1B2D / #0A1422
- **Gold:** #F2B82E; darker #B8861B for text on light backgrounds
- **Cream:** #F7F4EE / #FFF6DF
- **Lines:** #DCD5C7 / #D3DAE4
- **Body text:** #3B4A5E

## Contact
778-522-1810 · info@sunifygroup.ca

## Confirm with client
- Their HomeStars profile link.
- Whether they want more before/after pairs.
