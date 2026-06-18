import React from "react";

const CSS = `
.atlas-iconbtn{
  display:inline-flex; align-items:center; justify-content:center;
  width:44px; height:44px; border-radius:0;
  background:transparent; color:var(--text-body);
  border:1px solid var(--border); cursor:pointer;
  transition:color var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out),
             background var(--dur) var(--ease-out);
}
.atlas-iconbtn svg{ width:18px; height:18px; }
.atlas-iconbtn:hover{ color:var(--accent); border-color:var(--accent); }
.atlas-iconbtn:active{ transform:translateY(1px); }
.atlas-iconbtn:focus-visible{ outline:2px solid var(--ring); outline-offset:2px; }
.atlas-iconbtn--ink{ color:var(--text-on-ink-muted); border-color:var(--border-ink); }
.atlas-iconbtn--ink:hover{ color:var(--accent); border-color:var(--accent); }
.atlas-iconbtn--bare{ border-color:transparent; width:40px; height:40px; }
`;

let injected = false;
function useCss() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-atlas", "iconbutton");
  el.textContent = CSS;
  document.head.appendChild(el);
}

export function IconButton({
  children,
  label,
  href,
  onClick,
  tone = "default",
  bare = false,
  className = "",
  ...rest
}) {
  useCss();
  const cls = [
    "atlas-iconbtn",
    tone === "ink" ? "atlas-iconbtn--ink" : "",
    bare ? "atlas-iconbtn--bare" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  const Tag = href ? "a" : "button";
  return (
    <Tag className={cls} href={href} onClick={onClick} aria-label={label} title={label} {...rest}>
      {children}
    </Tag>
  );
}
