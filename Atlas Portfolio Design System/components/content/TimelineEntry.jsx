import React from "react";
import { Tag } from "./Tag.jsx";

const CSS = `
.atlas-tl{ position:relative; display:grid; grid-template-columns:auto 1fr; gap:0 1.75rem; }
.atlas-tl__rail{ position:relative; display:flex; justify-content:center; }
.atlas-tl__line{ position:absolute; top:8px; bottom:-2.5rem; width:1px; background:var(--rule-strong); }
.atlas-tl--ink .atlas-tl__line{ background:var(--border-ink-strong); }
.atlas-tl__node{
  position:relative; z-index:1; width:9px; height:9px; margin-top:9px;
  border-radius:50%; background:var(--bg); border:1px solid var(--rule-strong);
}
.atlas-tl--ink .atlas-tl__node{ background:var(--ink-900); border-color:var(--border-ink-strong); }
.atlas-tl--current .atlas-tl__node{ background:var(--accent); border-color:var(--accent); }
.atlas-tl__body{ padding-bottom:2.5rem; }
.atlas-tl__period{ font-family:var(--font-mono); font-size:11px; letter-spacing:var(--tracking-label); text-transform:uppercase; color:var(--text-muted); }
.atlas-tl--current .atlas-tl__period{ color:var(--accent); }
.atlas-tl--ink .atlas-tl__period{ color:var(--text-on-ink-muted); }
.atlas-tl--ink.atlas-tl--current .atlas-tl__period{ color:var(--accent); }
.atlas-tl__role{ font-family:var(--font-display); font-weight:500; font-size:1.5rem; letter-spacing:var(--tracking-tight); color:var(--text-strong); margin:0.4rem 0 0; line-height:1.12; }
.atlas-tl--ink .atlas-tl__role{ color:var(--text-on-ink); }
.atlas-tl__meta{ font-family:var(--font-mono); font-size:12px; letter-spacing:0.04em; text-transform:uppercase; color:var(--text-muted); margin-top:0.5rem; }
.atlas-tl--ink .atlas-tl__meta{ color:var(--text-on-ink-muted); }
.atlas-tl__meta .atlas-tl__company{ color:var(--accent); }
.atlas-tl__desc{ font-family:var(--font-body); font-size:1.1rem; line-height:1.6; color:var(--text-body); margin:0.9rem 0 0; max-width:60ch; }
.atlas-tl--ink .atlas-tl__desc{ color:var(--text-on-ink-muted); }
.atlas-tl__tags{ display:flex; flex-wrap:wrap; gap:0.5rem; margin-top:1.1rem; }
`;

let injected = false;
function useCss() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-atlas", "timeline");
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function TimelineEntry({
  role,
  company,
  location,
  period,
  description,
  tags = [],
  current = false,
  tone = "default",
  className = "",
}) {
  useCss();
  const cls = [
    "atlas-tl",
    tone === "ink" ? "atlas-tl--ink" : "",
    current ? "atlas-tl--current" : "",
    className,
  ].filter(Boolean).join(" ");
  const tagTone = tone === "ink" ? "ink" : "default";
  return (
    <div className={cls}>
      <div className="atlas-tl__rail">
        <span className="atlas-tl__line"></span>
        <span className="atlas-tl__node"></span>
      </div>
      <div className="atlas-tl__body">
        <span className="atlas-tl__period">{period}</span>
        <h3 className="atlas-tl__role">{role}</h3>
        <div className="atlas-tl__meta">
          <span className="atlas-tl__company">{company}</span>
          {location ? <span> — {location}</span> : null}
        </div>
        {description ? <p className="atlas-tl__desc">{description}</p> : null}
        {tags.length ? (
          <div className="atlas-tl__tags">
            {tags.map((t) => (
              <Tag key={t} variant={tagTone}>{t}</Tag>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
