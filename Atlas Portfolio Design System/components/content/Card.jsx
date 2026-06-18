import React from "react";

const CSS = `
.atlas-card{
  position:relative; display:flex; flex-direction:column;
  background:var(--surface-card); border:1px solid var(--border);
  border-radius:0; padding:1.75rem;
  transition:border-color var(--dur) var(--ease-out), background var(--dur) var(--ease-out);
}
.atlas-card--hover{ cursor:pointer; }
.atlas-card--hover:hover{ border-color:var(--ink-900); }
.atlas-card--ink{ background:var(--surface-card-ink); border-color:var(--border-ink); }
.atlas-card--ink.atlas-card--hover:hover{ border-color:var(--accent); }
.atlas-card--flush{ padding:0; overflow:hidden; }
.atlas-card__icon{
  width:42px; height:42px; border-radius:0;
  display:grid; place-items:center; color:var(--accent);
  border:1px solid var(--accent); margin-bottom:1.25rem;
}
.atlas-card__icon svg{ width:22px; height:22px; }
.atlas-card--ink .atlas-card__icon{ color:var(--accent); border-color:var(--accent); }
`;

let injected = false;
function useCss() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-atlas", "card");
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Card({ children, hover = false, tone = "default", flush = false, icon, className = "", ...rest }) {
  useCss();
  const cls = [
    "atlas-card",
    hover ? "atlas-card--hover" : "",
    tone === "ink" ? "atlas-card--ink" : "",
    flush ? "atlas-card--flush" : "",
    className,
  ].filter(Boolean).join(" ");
  return (
    <div className={cls} {...rest}>
      {icon ? <div className="atlas-card__icon">{icon}</div> : null}
      {children}
    </div>
  );
}
