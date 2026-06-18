Primary action control — use for any CTA; amber `primary` for the single most important action per view, `secondary`/`ghost` for everything else, `inverse` on ink backgrounds.

```jsx
<Button variant="primary" size="lg" iconRight={<i data-lucide="arrow-right"></i>}>
  Start a conversation
</Button>
<Button variant="secondary">View work</Button>
<Button variant="ghost" size="sm">Resume</Button>
```

Variants: `primary` (amber, glows on hover), `secondary` (hairline outline → amber on hover), `ghost` (text only), `inverse` (bone fill, for dark sections). Sizes `sm | md | lg`. Pass `href` to render an `<a>`. Labels render UPPERCASE in mono — keep them short and verb-led.
