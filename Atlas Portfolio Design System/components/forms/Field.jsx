import React from "react";

const CSS = `
.atlas-field{ display:flex; flex-direction:column; gap:0.55rem; }
.atlas-field__label{
  font-family:var(--font-mono); font-size:11px; letter-spacing:var(--tracking-label);
  text-transform:uppercase; color:var(--text-muted); display:flex; gap:0.45em; align-items:center;
}
.atlas-field--ink .atlas-field__label{ color:var(--text-on-ink-muted); }
.atlas-field__req{ color:var(--accent); }
.atlas-field__opt{ color:var(--text-faint); font-size:10px; text-transform:lowercase; }
.atlas-field__hint{ font-family:var(--font-mono); font-size:11px; letter-spacing:0.04em; color:var(--text-muted); }
.atlas-field--error .atlas-field__hint{ color:var(--danger-500); }
`;

let injected = false;
function useCss() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-atlas", "field");
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Field({ label, htmlFor, required, optional, hint, error, tone = "default", children, className = "" }) {
  useCss();
  const cls = ["atlas-field", tone === "ink" ? "atlas-field--ink" : "", error ? "atlas-field--error" : "", className]
    .filter(Boolean).join(" ");
  return (
    <div className={cls}>
      {label ? (
        <label className="atlas-field__label" htmlFor={htmlFor}>
          {label}
          {required ? <span className="atlas-field__req">*</span> : null}
          {optional && !required ? <span className="atlas-field__opt">opt.</span> : null}
        </label>
      ) : null}
      {children}
      {hint || error ? <span className="atlas-field__hint">{error || hint}</span> : null}
    </div>
  );
}
