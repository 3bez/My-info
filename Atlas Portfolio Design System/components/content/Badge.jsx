import React from "react";

const CSS = `
.atlas-badge{
  display:inline-flex; align-items:center; gap:0.45em;
  font-family:var(--font-mono); font-size:10px; font-weight:600;
  letter-spacing:var(--tracking-label); text-transform:uppercase;
  padding:0.34rem 0.6rem; border-radius:0;
}
.atlas-badge--accent{ background:transparent; color:var(--accent); box-shadow:inset 0 0 0 1px var(--accent); }
.atlas-badge--muted{ background:transparent; color:var(--text-muted); box-shadow:inset 0 0 0 1px var(--border-strong); }
.atlas-badge--outline{ background:transparent; color:var(--text-body); box-shadow:inset 0 0 0 1px var(--border-strong); }
.atlas-badge--ink{ background:transparent; color:var(--text-on-ink-muted); box-shadow:inset 0 0 0 1px var(--border-ink-strong); }
.atlas-badge__dot{ width:5px; height:5px; border-radius:50%; background:currentColor; }
`;

let injected = false;
function useCss() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-atlas", "badge");
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Badge({ children, variant = "muted", dot = false, className = "" }) {
  useCss();
  const cls = ["atlas-badge", `atlas-badge--${variant}`, className].filter(Boolean).join(" ");
  return (
    <span className={cls}>
      {dot ? <span className="atlas-badge__dot"></span> : null}
      {children}
    </span>
  );
}
