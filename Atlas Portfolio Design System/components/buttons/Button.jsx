import React from "react";

const CSS = `
.atlas-btn{
  --_bg: var(--accent); --_fg: var(--on-accent); --_bd: transparent;
  display:inline-flex; align-items:center; justify-content:center; gap:0.55em;
  font-family:var(--font-mono); font-weight:500; letter-spacing:var(--tracking-wide);
  text-decoration:none; cursor:pointer; white-space:nowrap; text-transform:uppercase;
  border:1px solid var(--_bd); border-radius:0;
  background:var(--_bg); color:var(--_fg);
  transition:background var(--dur) var(--ease-out), color var(--dur) var(--ease-out),
             border-color var(--dur) var(--ease-out);
}
.atlas-btn:focus-visible{ outline:2px solid var(--ring); outline-offset:2px; }
.atlas-btn:active{ transform:translateY(1px); }
.atlas-btn[aria-disabled="true"]{ opacity:0.45; pointer-events:none; }
.atlas-btn .atlas-btn__ico{ display:inline-flex; }
.atlas-btn .atlas-btn__ico svg{ width:1.05em; height:1.05em; }

.atlas-btn--sm{ font-size:11px; padding:0.55rem 0.9rem; }
.atlas-btn--md{ font-size:12px; padding:0.7rem 1.2rem; }
.atlas-btn--lg{ font-size:12px; padding:0.95rem 1.6rem; }

.atlas-btn--primary{ --_bg:var(--accent); --_fg:var(--on-accent); }
.atlas-btn--primary:hover{ --_bg:var(--accent-hover); }
.atlas-btn--secondary{ --_bg:transparent; --_fg:var(--text-strong); --_bd:var(--border-strong); }
.atlas-btn--secondary:hover{ --_bd:var(--accent); --_fg:var(--accent); }
.atlas-btn--ghost{ --_bg:transparent; --_fg:var(--text-body); --_bd:transparent; }
.atlas-btn--ghost:hover{ --_fg:var(--accent); }
.atlas-btn--inverse{ --_bg:var(--paper-100); --_fg:var(--ink-900); --_bd:transparent; }
.atlas-btn--inverse:hover{ --_bg:#fff; }
.atlas-btn--block{ display:flex; width:100%; }
`;

let injected = false;
function useAtlasCss() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-atlas", "button");
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  icon,
  iconRight,
  disabled = false,
  fullWidth = false,
  type = "button",
  className = "",
  ...rest
}) {
  useAtlasCss();
  const cls = [
    "atlas-btn",
    `atlas-btn--${variant}`,
    `atlas-btn--${size}`,
    fullWidth ? "atlas-btn--block" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      {icon ? <span className="atlas-btn__ico">{icon}</span> : null}
      {children ? <span>{children}</span> : null}
      {iconRight ? <span className="atlas-btn__ico">{iconRight}</span> : null}
    </>
  );

  if (href && !disabled) {
    return (
      <a className={cls} href={href} onClick={onClick} {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <button
      className={cls}
      type={type}
      onClick={onClick}
      aria-disabled={disabled || undefined}
      disabled={disabled}
      {...rest}
    >
      {inner}
    </button>
  );
}
