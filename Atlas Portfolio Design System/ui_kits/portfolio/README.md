# Portfolio UI kit

A high-fidelity, interactive recreation of the **Atlas** personal portfolio — a premium one-page site for a Technical Project Manager. This is the primary surface the design system was built for.

## What's here

- `index.html` — assembles the full page and mounts it. Loads `styles.css`, `portfolio.css`, the compiled `_ds_bundle.js`, Lucide icons, and each section.
- `portfolio.css` — page scaffolding + responsive rules (the only non-token CSS; primitives style themselves).
- `data.js` — all sample content (`window.PORTFOLIO`). Edit this to repurpose the page for a different person.
- Section components (each exports to `window`):
  - `Nav.jsx` — sticky header, transparent over the hero, frosted bone once scrolled.
  - `Hero.jsx` — full-screen ink; oversized editorial name, tagline, CTAs, stat row.
  - `About.jsx` — bio statement + 4-group skills grid.
  - `Experience.jsx` — vertical timeline (ink) built from `TimelineEntry`.
  - `Projects.jsx` — 3-col card grid with type badges, icons, and tags.
  - `Certifications.jsx` — icon cards on a bone band.
  - `Contact.jsx` — inviting full-width form with client-side validation + success state.
  - `Footer.jsx` — minimal brand + year + social links.

## Sections (in brief order)

Hero → About → Experience → Projects → Certifications → Contact → Footer.

## How it composes the system

Every primitive — `Button`, `IconButton`, `Stat`, `SectionLabel`, `Badge`, `Tag`, `Card`, `TimelineEntry`, `Field`, `Input`, `Textarea` — comes from the design-system bundle (`window.AtlasPortfolioDesignSystem_*`). The kit never re-implements them; it only arranges them and adds page-level layout.

## Interactions

- Sticky nav condenses on scroll.
- Reveal-on-scroll fade/rise (respects `prefers-reduced-motion`).
- Hover lift on project/cert cards; amber arrow nudge.
- Contact form validates Name + Message, then swaps to a success state.

## Responsive

Fully responsive — 3-col grids collapse to 2 then 1; nav links fold into a menu button under 720px; hero type scales fluidly. See the `@media` blocks at the bottom of `portfolio.css`.
