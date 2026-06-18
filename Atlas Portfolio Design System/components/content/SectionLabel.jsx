import React from "react";

const CSS = `
.atlas-seclabel{
  display:inline-flex; align-items:center; gap:0.7em;
  font-family:var(--font-mono); font-size:12px; font-weight:500;
  letter-spacing:var(--tracking-label); text-transform:uppercase; color:var(--text-muted);
}
.atlas-seclabel__num{ color:var(--accent); }
.atlas-seclabel__rule{ width:38px; height:1px; background:var(--rule-strong); }
.atlas-seclabel--ink{ color:var(--text-on-ink-muted); }
.atlas-seclabel--ink .atlas-seclabel__rule{ background:var(--border-ink-strong); }
`;

let injected = false;
function useCss() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-atlas", "seclabel");
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function SectionLabel({ number, children, tone = "default", className = "" }) {
  useCss();
  const cls = ["atlas-seclabel", tone === "ink" ? "atlas-seclabel--ink" : "", className].filter(Boolean).join(" ");
  return (
    <span className={cls}>
      {number ? <span className="atlas-seclabel__num">§{number}</span> : null}
      <span className="atlas-seclabel__rule"></span>
      {children}
    </span>
  );
}
