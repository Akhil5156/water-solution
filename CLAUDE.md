@AGENTS.md

# Project rules (water-solution template site)

Lead-generation catalogue site (no checkout). Next.js app, Tailwind v4, Manrope font. Reference: paqos.in.

## Theming — ALWAYS build for both themes (green + blue)
The site has two themes switched by `<html data-theme="green|blue">` (ThemeToggle). Everything new must work in
BOTH themes automatically, without the user having to ask.

- Colors come ONLY from the tokens in `app/globals.css` via Tailwind classes: `brand-50…950`, `accent`,
  `surface`, `surface-muted`, `ink`, `ink-muted`, `line`.
- Role mapping: primary `brand-600` · hover `brand-700` · highlight on dark `brand-300`/`accent` ·
  dark sections `brand-900`/`brand-950` · light sections `surface-muted` · borders `line` · sub text `ink-muted`.
- NEVER hard-code colors in components: no hex, `rgb()`, or default Tailwind palette colors
  (`blue-500`, `green-600`, `emerald-*`, …). Allowed neutrals: `white`, `black`, `transparent`, `white/xx`, `black/xx`.
  (Gold review stars `amber-400` are the one intentional exception.)
- Need a new color role? Add the variable to BOTH theme blocks in `globals.css` and expose it in `@theme inline`.
- Headings/main text = `text-ink` (true black); green/blue tint is only for sub text and accents.
- Section backgrounds alternate white / `surface-muted`.
- Before finishing UI work run `npm run check:theme` (fails on hard-coded colors) and `npx tsc --noEmit`.

## Animation — build it in from the start (values copied from the reference site)
All motion lives in `app/globals.css` ("MOTION" block) + `components/ui/Reveal.tsx` + `components/ui/CountUp.tsx`. Never invent new timings.
- **Scroll reveal:** wrap new blocks in `<Reveal>`; items in a row get `delay={1…4}` (0.08s steps), e.g. `((i % 3) + 1)`.
  `SectionHeading` already reveals itself. Put `<Reveal>` on a wrapper *around* a card, not on the card (hover transform would fight it). Give the wrapper `className="h-full"` inside grids.
- **Cards:** add `hover-lift` (−6px + shadow) or `hover-lift-sm` (−3px). Photos inside a card: add `group` to the card and `zoom` to `<Media>`.
- **Buttons:** `<Button>` already lifts 2px and nudges its arrow — use it, don't hand-roll buttons.
- **Numbers (stats):** render with `<CountUp value="85,000+" />` (4-digit years count up from year−40 automatically).
- **Pulse dot:** `pulse-dot` class. Inner-page heroes: use `<PageHero>` (staggered entrance built in).
- Everything respects `prefers-reduced-motion`, and content stays visible without JS (hidden state only applies under `html.reveal-ready`).
- **Smoothness gotcha:** in Tailwind v4, `-translate-*`, `scale-*` and `rotate-*` are their own CSS properties, not `transform`. `transition-transform` covers them; a custom `transition-[...]` list must name `translate` / `scale` / `rotate` or the movement jumps instead of gliding.
- **Hover states for icon cards:** add `group` to the card; chip gets `transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white`.
- Do NOT add classes to React-rendered elements from outside React (that caused a hydration warning) — keep state in React like `Reveal` does.

## Structure
- Reusable UI in `components/ui`, layout in `components/layout`, page sections in `components/sections`.
- Content/data in `data/*` and `lib/site.ts`; types in `types/`. Components take props, no inline content, so a DB can replace `data/` later.
- Images/videos in `public/media`. Use the `Media` / `VideoBg` components.

## Dev gotchas
- Do NOT run `npm run build` while `npm run dev` is running (it corrupts the dev cache → stale CSS). Stop dev first, or delete `.next` after.
- `cacheComponents` is on: no `new Date()`/random in server components during prerender.
