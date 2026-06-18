import React from "react";

const CSS = `
.atlas-stat{ display:flex; flex-direction:column; gap:0.5rem; }
.atlas-stat__value{
  font-family:var(--font-display); font-weight:500; line-height:1;
  letter-spacing:var(--tracking-display); color:var(--text-strong);
  font-size:clamp(2.4rem, 5vw, 3.4rem); display:flex; align-items:baseline; gap:0.04em;
}
.atlas-stat__suffix{
  color:var(--accent); font-family:var(--font-mono); font-weight:500;
  font-size:0.32em; letter-spacing:0.05em; vertical-align:super; margin-left:0.2em;
}
.atlas-stat__label{
  font-family:var(--font-mono); font-size:11px; letter-spacing:var(--tracking-label);
  text-transform:uppercase; color:var(--text-muted);
}
.atlas-stat--ink .atlas-stat__value{ color:var(--text-on-ink); }
.atlas-stat--ink .atlas-stat__label{ color:var(--text-on-ink-muted); }
`;

let injected = false;
function useCss() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-atlas", "stat");
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Stat({ value, suffix, label, tone = "default", className = "" }) {
  useCss();
  const cls = ["atlas-stat", tone === "ink" ? "atlas-stat--ink" : "", className].filter(Boolean).join(" ");
  return (
    <div className={cls}>
      <div className="atlas-stat__value">
        {value}
        {suffix ? <span className="atlas-stat__suffix">{suffix}</span> : null}
      </div>
      <div className="atlas-stat__label">{label}</div>
    </div>
  );
}
