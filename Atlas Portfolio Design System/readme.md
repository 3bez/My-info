# Atlas — Portfolio Design System

**Atlas** is the design system behind a premium personal portfolio for a **Technical Project Manager**. It exists to make one person look exactly like what they are: someone senior who has shipped real things and led real teams. Confident, technically credible, human — never cold or templated.

> The sample persona used throughout is **Abdulaziz Alangari, Technical Project Manager**. All names, stats, and copy are placeholder content and are trivially editable — the *system* (tokens, components, layout grammar) is the real deliverable.

## Context & sources

This system was designed **from scratch** to a written brief. There was **no attached codebase, Figma file, or existing brand** to recreate — so the visual direction, palette, and type are original creative choices made to satisfy the brief's personality and tone requirements.

- **Brief:** premium personal portfolio, 7 sections (Hero, About, Experience, Projects, Certifications, Contact, Footer), bold typography, strong hierarchy, generous whitespace, fully responsive, no Bootstrap/Wix/stock-photo look.
- **No external design sources** were provided. If a brand kit, Figma, or codebase exists, re-attach it and this system can be aligned to it.

## The idea in one line

**Paper, Ink & Vermillion** — warm ivory paper, cool near-black ink, and a single disciplined oxblood-vermillion accent, set in editorial serif display (Newsreader) with technical monospace labels (IBM Plex Mono). Flat, hairline-ruled, square-cornered — a typeset dossier, not a card deck.

---

## CONTENT FUNDAMENTALS

How copy is written across the portfolio.

- **Voice:** first person, but understated. "I lead programs that ship." Confidence comes from specificity and verbs, not adjectives. Never "world-class," "passionate," "ninja," "rockstar."
- **Person:** "I" when describing self; "you / your team" when addressing the visitor in the contact section. Warm and direct.
- **Casing:**
  - Big display headlines: **sentence case** or a short noun phrase — e.g. "Programs that actually ship." Not Title Case.
  - Eyebrows / labels / section kickers: **UPPERCASE monospace** with wide tracking — e.g. `02 — EXPERIENCE`, `SELECTED WORK`.
  - Tags & badges: lowercase or Title Case mono — e.g. `agile`, `roadmapping`, `Fintech`.
- **Numbers lead.** Stats are stated plainly and large: "12 yrs", "60+ projects", "5 industries". Numerals, never spelled out. Units abbreviated in mono.
- **Sentence length:** short. One idea per line. Bio is 2–3 sentences max. Project descriptions are a single tight sentence.
- **Tone examples:**
  - Tagline: *"I turn ambiguous, high-stakes initiatives into shipped product."*
  - About: *"I'm a technical PM who sits comfortably between engineering and the business. I've run delivery for platform migrations, payments, and 0→1 products."*
  - Contact lead: *"Got something hard to ship? I'd like to hear about it."*
- **No emoji.** None. Technical credibility comes from restraint. Iconography is line-icons only (see ICONOGRAPHY).
- **Vibe:** the portfolio of an operator. Calm, precise, a little understated — the work does the talking.

---

## VISUAL FOUNDATIONS

- **Palette:** warm ivory paper + cool ink + one accent.
  - **Ink** (`--ink-900` `#16181D`): cool near-black, used for rules, the footer, and strongest text. Never pure `#000`.
  - **Paper** (`--paper-100` `#F4F1E9`): warm ivory primary background. Alternating sections step to `--paper-200`; surfaces sit at `--paper-50`.
  - **Vermillion** (`--vermillion-500` `#B23A2E`): the *single* signature accent — an oxblood proofreader's mark. Used for one moment per viewport max: the `§` index, a key period, an active tag, the send button. Scarcity is what makes it premium.
  - No emerald, no second hue, no gradients. Depth comes from hairline rules and flat color blocks, never decoration.
- **Type:** display + body = **Newsreader** (editorial serif, optical sizes, 400–600, set BIG and tight — hero runs to ~120px; prose uses the text optical size with italic for emphasis); labels/stats/tags = **IBM Plex Mono** (500, uppercase, +0.16em tracking). The mono-label-over-serif-headline pairing is the core type signature.
- **Backgrounds:** flat color blocks — ivory paper with alternating `--paper-200` panels, and ink for the footer. Sections are separated by full-width hairline rules, not whitespace alone. A very subtle film **grain** (`--grain-opacity` ~0.04) may sit on ink surfaces only. No photographic hero banners, no stock imagery, no busy patterns.
- **Whitespace:** generous and non-negotiable. Section vertical rhythm is `--section-y` (clamp 5rem–10rem). Content max-width `--container` 1200px; prose narrows to ~760px.
- **Layout rules:** strong left-aligned editorial grid. A persistent thin top nav. Big numbered section eyebrows. Content rarely centered except the hero stat row and contact CTA. A fixed/sticky slim header that subtly condenses on scroll.
- **Animation:** calm and intentional. Entrance = soft fade + 12–16px rise on scroll, `--ease-out`, ~520ms, staggered. **No bounce, no parallax theatrics, no infinite loops.** Respects `prefers-reduced-motion`.
- **Hover states:** links/tags shift toward vermillion or gain a vermillion underline; the primary button darkens (`--accent-hover`); cards and index rows warm their border/background toward ink — no lift, no shadow. Transitions `--dur` (240ms).
- **Press states:** translateY(1px) + slightly darker fill. No scale-bounce.
- **Borders:** 1px hairlines, everywhere — they *are* the system. On paper: `--border` (`#DBD5C7`) / `--border-strong` (`#BFBBB0`). On ink: low-opacity paper (`--border-ink`). Crisp, structural.
- **Corner radii:** square. Everything is `0` — buttons, tags, cards, panels, inputs. The only curves are the rare true `--radius-pill` and the small timeline node. Flat and printed, like a typeset document.
- **Shadows:** essentially none. Elevation is carried by 1px hairline rules (`--inset-hairline`) and color blocks. Cards are bordered, not floated; hover warms the border toward ink, it doesn't lift.
- **Transparency / blur:** the sticky header uses a paper backdrop blur when scrolled. Otherwise opacity is reserved for muted text and hairlines. Used sparingly.
- **Imagery color vibe:** if any imagery is used, it should be warm, slightly desaturated, with subtle grain — matching the ink/bone temperature. No cool, no high-saturation stock.

---

## ICONOGRAPHY

- **System:** [**Lucide**](https://lucide.dev) — thin, consistent 1.5–2px stroke line icons. Loaded from CDN (`lucide@latest`). This matches the editorial, technical-but-human tone: precise outlines, no fills, no color.
  - *Substitution flag:* there was no provided icon set, so Lucide is a chosen default. Swap freely if a brand set exists.
- **Usage:** icons are monochrome — they inherit `currentColor` (ink on light, bone on ink, emerald when active). Sized 18–24px inline, up to 32px in certification/project cards.
- **No emoji, ever.** No multicolor or 3D icons. No icon should carry meaning that the label doesn't also carry.
- **Unicode:** used only for typographic marks — em dash `—` in eyebrows, arrows `→` for links/CTAs. Not as decorative icons.
- Assets live in `assets/` (logo mark + wordmark). Icons are CDN, not vendored, to keep the repo light.

---

## INDEX — what's in this system

**Root**
- `styles.css` — global entry (consumers link this). `@import` lines only.
- `readme.md` — this file.
- `SKILL.md` — Agent-Skill-compatible entry for downloaded use.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`

**`components/`** — reusable React primitives (each: `.jsx` + `.d.ts` + `.prompt.md`, one `@dsCard` per dir)
- `buttons/` — `Button`, `IconButton`
- `forms/` — `Field`, `Input`, `Textarea`
- `content/` — `Tag`, `Badge`, `Stat`, `SectionLabel`, `Card`, `TimelineEntry`

**`ui_kits/portfolio/`** — full-page portfolio recreation (all 7 sections), desktop + mobile, factored into JSX section components + `index.html`.

**`guidelines/`** — foundation specimen cards (Type, Colors, Spacing, Brand) shown in the Design System tab.

**`assets/`** — logo mark + wordmark.
