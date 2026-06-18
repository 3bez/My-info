import React from "react";

const CSS = `
.atlas-input{
  font-family:var(--font-body); font-size:1.05rem; color:var(--text-strong);
  background:transparent; width:100%; box-sizing:border-box;
  border:none; border-bottom:1px solid var(--border-strong); border-radius:0;
  padding:0.55rem 0; line-height:1.4;
  transition:border-color var(--dur) var(--ease-out);
}
.atlas-input::placeholder{ color:var(--text-faint); }
.atlas-input:hover{ border-bottom-color:var(--ink-700); }
.atlas-input:focus{ outline:none; border-bottom-color:var(--accent); }
.atlas-input--ink{
  color:var(--text-on-ink); border-bottom-color:var(--border-ink-strong);
}
.atlas-input--ink::placeholder{ color:var(--text-on-ink-faint); }
.atlas-input--ink:hover{ border-bottom-color:var(--text-on-ink-muted); }
.atlas-input--ink:focus{ border-bottom-color:var(--accent); }
.atlas-input--error{ border-bottom-color:var(--danger-500); }
`;

let injected = false;
function useCss() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-atlas", "input");
  el.textContent = CSS;
  document.head.appendChild(el);
}
useCss(); // inject at module load so Textarea (which reuses .atlas-input) is covered

export function Input({ tone = "default", error = false, className = "", ...rest }) {
  useCss();
  const cls = ["atlas-input", tone === "ink" ? "atlas-input--ink" : "", error ? "atlas-input--error" : "", className]
    .filter(Boolean).join(" ");
  return <input className={cls} {...rest} />;
}
