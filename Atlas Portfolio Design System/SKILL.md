---
name: atlas-portfolio-design
description: Use this skill to generate well-branded interfaces and assets for the Atlas portfolio brand — a premium personal portfolio system for a Technical Project Manager — either for production or throwaway prototypes/mocks. Contains design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map

- `styles.css` — the single global stylesheet to link. Pulls in all tokens + fonts via `@import`.
- `tokens/` — colors, typography, spacing, effects (CSS custom properties).
- `components/` — React primitives (`buttons/`, `forms/`, `content/`). Each has a `.jsx`, `.d.ts`, and `.prompt.md`. Read the `.prompt.md` for usage.
- `ui_kits/portfolio/` — the full one-page portfolio recreation (all 7 sections). Start here to see everything composed.
- `guidelines/` — foundation specimen cards (type, color, spacing, brand).
- `assets/` — logo mark.

## The brand in one line

**Paper, Ink & Vermillion** — warm ivory paper, cool near-black ink, and a single oxblood-vermillion accent, set in Newsreader serif display with IBM Plex Mono technical labels. Flat, editorial, hairline-ruled, square-cornered. Senior, confident, technical but human. Vermillion appears once per viewport, max. No emoji. Lucide line icons only.
