# Lumen — Edtech marketing site

A production-grade marketing website for a modern edtech platform, built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server with HMR |
| `npm run build` | Production build |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint (next/core-web-vitals) |
| `npm run typecheck` | Run the TypeScript compiler without emitting |

## Routes

| Route | Description |
| --- | --- |
| `/` | Home — full marketing page with all sections |
| `/courses` | Catalog browser with search, category, level, and duration filters |
| `/courses/[slug]` | Course detail page with curriculum, syllabus, and related courses |
| `/for-educators` | Instructor-focused landing page |
| `/about` | Company story, values, stats, and team |
| `/pricing` | Free / Pro / Teams plans + pricing FAQ |
| `/contact` | Contact form with topic routing |
| `/blog` | Blog index with featured post + grid |
| `/blog/[slug]` | Blog post template |

## Project structure

```
app/                       App Router routes and layout
  layout.tsx               Root layout (fonts, header, footer, metadata)
  globals.css              CSS variables, base typography, accent utilities
  page.tsx                 Home page (composes section components)
  courses/                 Catalog + dynamic detail page
  for-educators/           Instructor landing
  about/                   Company page
  pricing/                 Pricing page
  contact/                 Contact form page
  blog/                    Blog index + dynamic post

components/
  ui/                      Reusable primitives (Button, Card, Accordion, ...)
  sections/                Home-page section components
  *.tsx                    Domain components (CourseCard, Header, Footer, ...)

lib/
  data.ts                  Static placeholder content (courses, posts, FAQs, ...)
  utils.ts                 cn() helper + currency formatter
```

## Style guide

### Color system

Colors are defined as CSS variables in `app/globals.css` and exposed to Tailwind via `tailwind.config.ts`.

| Name | Hex | Usage |
| --- | --- | --- |
| `indigo` | `#1E2A78` | Primary — headers, CTAs, navigation, body emphasis |
| `indigo-deep` | `#141B5C` | Hover states, footer background |
| `yellow` | `#FFC93C` | Accent — primary CTAs, highlights, underlines, badges |
| `yellow-soft` | `#FFE9A8` | Tinted backgrounds, hover fills |
| `cream` | `#FAF6EC` | Page background, surface |
| `cream-light` | `#FFFCF5` | Card surfaces |
| `ink` | `#1A1A2E` | Body text |
| `muted` | `#6B7280` | Secondary text, borders |

**Rule of thumb:** Cream dominates surfaces, Indigo dominates structure and type, Yellow accents key actions and the signature `<AccentUnderline>` motif. Use yellow sparingly — at most once per major section.

### Typography

- **Display / headings:** [Fraunces](https://fonts.google.com/specimen/Fraunces) variable font (weights 700, 800, 900). Loaded via `next/font/google` with optical sizing.
- **Body:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (weights 400, 500, 600).

Both are wired into Tailwind:

```ts
fontFamily: {
  sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
  display: ["var(--font-fraunces)", "Georgia", "serif"]
}
```

Custom display sizes (`text-display-xl`, `text-display-lg`, `text-display-md`) use `clamp()` for fluid scaling. Headings get `text-wrap: balance` automatically.

### The signature underline

The single most distinctive visual motif is `<AccentUnderline>` — a 3px yellow underline offset 2px below an emphasized word in a heading. Use it once per major section, never more.

```tsx
<h1>Learn the <AccentUnderline>skills</AccentUnderline> that move careers forward.</h1>
```

### Spacing & geometry

- 8px spacing system throughout.
- Section vertical padding: `py-20 md:py-28 lg:py-32` (via `<Section>` wrapper).
- Border radii: **12px** cards (`rounded-card`), **8px** buttons (`rounded-btn`), **6px** inputs (`rounded-input`).
- Shadows: soft, low-opacity, indigo-tinted (`shadow-card`, `shadow-cardHover`). No black shadows anywhere.

### Motion

Restrained and consistent:

- **Section reveals:** `<FadeUp>` wrapper — 12px translate, 0.5s, `easeOut`, fires once when 80px from viewport.
- **Buttons:** 150ms transitions, `active:scale-[0.98]`. No glow, no bounce.
- **Cards:** `-translate-y-1` lift + `shadow-cardHover` + vertical yellow accent bar slides in from left.
- **Header:** shadow appears after 24px of scroll, never before.

No parallax, no autoplay, no spring physics.

## Accessibility

- Semantic HTML (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`, `<article>`).
- `Skip to content` link at the top of every page.
- `focus-visible` rings on every interactive element.
- Touch targets ≥ 44px on all primary controls.
- All images have alt text (decorative images use `alt=""`).
- Mobile drawer traps focus and is fully keyboard accessible (Escape, click-outside, button close).
- Color contrast meets WCAG AA across all combinations in the palette.

## SEO

- `app/layout.tsx` defines `metadataBase`, default title template, description, OpenGraph, and Twitter cards.
- Every page exports its own `metadata` for unique titles and descriptions.
- Dynamic routes use `generateStaticParams` and `generateMetadata` for per-slug metadata.

## Performance

- `next/font` for self-hosted variable fonts with `font-display: swap`.
- `next/image` on every image with explicit `sizes` for responsive serving.
- `priority` on above-the-fold images only.
- Animations are layout-cheap (`transform` + `opacity` only).
- No client JS where a server component will do — every section is server-rendered except the few that need state (Header, MobileNav, Accordion, ContactForm, CoursesBrowser, NewsletterForm, FadeUp wrappers).

## Data

All content lives in `lib/data.ts` — courses, categories, testimonials, FAQs, pricing plans, team, and blog posts. Swap in a CMS or API later without touching component code.

## License

Proprietary. Replace this section before publishing.
