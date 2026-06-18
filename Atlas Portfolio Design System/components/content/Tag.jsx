import React from "react";

const CSS = `
.atlas-tag{
  display:inline-flex; align-items:center; gap:0.4em;
  font-family:var(--font-mono); font-size:11px; font-weight:500;
  letter-spacing:var(--tracking-wide); text-transform:lowercase;
  padding:0.32rem 0.6rem; border-radius:0;
  border:1px solid var(--border); color:var(--text-body); background:transparent;
  transition:color var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out), background var(--dur) var(--ease-out);
}
.atlas-tag--solid{ background:var(--paper-200); border-color:transparent; color:var(--text-strong); }
.atlas-tag--accent{ background:transparent; border-color:var(--accent); color:var(--accent); }
.atlas-tag--ink{ border-color:var(--border-ink); color:var(--text-on-ink-muted); }
.atlas-tag--interactive{ cursor:pointer; }
.atlas-tag--interactive:hover{ border-color:var(--accent); color:var(--accent); }
`;

let injected = false;
function useCss() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-atlas", "tag");
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Tag({ children, variant = "default", interactive = false, onClick, className = "" }) {
  useCss();
  const cls = ["atlas-tag", `atlas-tag--${variant}`, interactive ? "atlas-tag--interactive" : "", className]
    .filter(Boolean).join(" ");
  return (
    <span className={cls} onClick={onClick} role={interactive ? "button" : undefined}>
      {children}
    </span>
  );
}
