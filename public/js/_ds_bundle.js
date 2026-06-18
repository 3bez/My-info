/* @ds-bundle: {"format":3,"namespace":"AtlasPortfolioDesignSystem_0beb6f","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"SectionLabel","sourcePath":"components/content/SectionLabel.jsx"},{"name":"Stat","sourcePath":"components/content/Stat.jsx"},{"name":"Tag","sourcePath":"components/content/Tag.jsx"},{"name":"TimelineEntry","sourcePath":"components/content/TimelineEntry.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}]} */

(() => {

const __ds_ns = (window.AtlasPortfolioDesignSystem_0beb6f = window.AtlasPortfolioDesignSystem_0beb6f || {});
const __ds_scope = {};
(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Button({ children, variant = "primary", size = "md", href, onClick, icon, iconRight, disabled = false, fullWidth = false, type = "button", className = "", ...rest }) {
  useAtlasCss();
  const cls = ["atlas-btn", `atlas-btn--${variant}`, `atlas-btn--${size}`, fullWidth ? "atlas-btn--block" : "", className].filter(Boolean).join(" ");
  const inner = React.createElement(React.Fragment, null, icon ? React.createElement("span", { className: "atlas-btn__ico" }, icon) : null, children ? React.createElement("span", null, children) : null, iconRight ? React.createElement("span", { className: "atlas-btn__ico" }, iconRight) : null);
  if (href && !disabled) { return React.createElement("a", _extends({ className: cls, href: href, onClick: onClick }, rest), inner); }
  return React.createElement("button", _extends({ className: cls, type: type, onClick: onClick, "aria-disabled": disabled || undefined, disabled: disabled }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.atlas-iconbtn{ display:inline-flex; align-items:center; justify-content:center; width:44px; height:44px; border-radius:0; background:transparent; color:var(--text-body); border:1px solid var(--border); cursor:pointer; transition:color var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out), background var(--dur) var(--ease-out); }
.atlas-iconbtn svg{ width:18px; height:18px; }
.atlas-iconbtn:hover{ color:var(--accent); border-color:var(--accent); }
.atlas-iconbtn:active{ transform:translateY(1px); }
.atlas-iconbtn:focus-visible{ outline:2px solid var(--ring); outline-offset:2px; }
.atlas-iconbtn--ink{ color:var(--text-on-ink-muted); border-color:var(--border-ink); }
.atlas-iconbtn--ink:hover{ color:var(--accent); border-color:var(--accent); }
.atlas-iconbtn--bare{ border-color:transparent; width:40px; height:40px; }
`;
let injected = false;
function useCss() { if (typeof document === "undefined" || injected) return; injected = true; const el = document.createElement("style"); el.setAttribute("data-atlas", "iconbutton"); el.textContent = CSS; document.head.appendChild(el); }
function IconButton({ children, label, href, onClick, tone = "default", bare = false, className = "", ...rest }) {
  useCss();
  const cls = ["atlas-iconbtn", tone === "ink" ? "atlas-iconbtn--ink" : "", bare ? "atlas-iconbtn--bare" : "", className].filter(Boolean).join(" ");
  const Tag = href ? "a" : "button";
  return React.createElement(Tag, _extends({ className: cls, href: href, onClick: onClick, "aria-label": label, title: label }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
const CSS = `.atlas-badge{ display:inline-flex; align-items:center; gap:0.45em; font-family:var(--font-mono); font-size:10px; font-weight:600; letter-spacing:var(--tracking-label); text-transform:uppercase; padding:0.34rem 0.6rem; border-radius:0; } .atlas-badge--accent{ background:transparent; color:var(--accent); box-shadow:inset 0 0 0 1px var(--accent); } .atlas-badge--muted{ background:transparent; color:var(--text-muted); box-shadow:inset 0 0 0 1px var(--border-strong); } .atlas-badge--outline{ background:transparent; color:var(--text-body); box-shadow:inset 0 0 0 1px var(--border-strong); } .atlas-badge--ink{ background:transparent; color:var(--text-on-ink-muted); box-shadow:inset 0 0 0 1px var(--border-ink-strong); } .atlas-badge__dot{ width:5px; height:5px; border-radius:50%; background:currentColor; }`;
let injected = false;
function useCss() { if (typeof document === "undefined" || injected) return; injected = true; const el = document.createElement("style"); el.setAttribute("data-atlas", "badge"); el.textContent = CSS; document.head.appendChild(el); }
function Badge({ children, variant = "muted", dot = false, className = "" }) {
  useCss();
  const cls = ["atlas-badge", `atlas-badge--${variant}`, className].filter(Boolean).join(" ");
  return React.createElement("span", { className: cls }, dot ? React.createElement("span", { className: "atlas-badge__dot" }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `.atlas-card{ position:relative; display:flex; flex-direction:column; background:var(--surface-card); border:1px solid var(--border); border-radius:0; padding:1.75rem; transition:border-color var(--dur) var(--ease-out), background var(--dur) var(--ease-out); } .atlas-card--hover{ cursor:pointer; } .atlas-card--hover:hover{ border-color:var(--ink-900); } .atlas-card--ink{ background:var(--surface-card-ink); border-color:var(--border-ink); } .atlas-card--ink.atlas-card--hover:hover{ border-color:var(--accent); } .atlas-card--flush{ padding:0; overflow:hidden; } .atlas-card__icon{ width:42px; height:42px; border-radius:0; display:grid; place-items:center; color:var(--accent); border:1px solid var(--accent); margin-bottom:1.25rem; } .atlas-card__icon svg{ width:22px; height:22px; } .atlas-card--ink .atlas-card__icon{ color:var(--accent); border-color:var(--accent); }`;
let injected = false;
function useCss() { if (typeof document === "undefined" || injected) return; injected = true; const el = document.createElement("style"); el.setAttribute("data-atlas", "card"); el.textContent = CSS; document.head.appendChild(el); }
function Card({ children, hover = false, tone = "default", flush = false, icon, className = "", ...rest }) {
  useCss();
  const cls = ["atlas-card", hover ? "atlas-card--hover" : "", tone === "ink" ? "atlas-card--ink" : "", flush ? "atlas-card--flush" : "", className].filter(Boolean).join(" ");
  return React.createElement("div", _extends({ className: cls }, rest), icon ? React.createElement("div", { className: "atlas-card__icon" }, icon) : null, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionLabel.jsx
try { (() => {
const CSS = `.atlas-seclabel{ display:inline-flex; align-items:center; gap:0.7em; font-family:var(--font-mono); font-size:12px; font-weight:500; letter-spacing:var(--tracking-label); text-transform:uppercase; color:var(--text-muted); } .atlas-seclabel__num{ color:var(--accent); } .atlas-seclabel__rule{ width:38px; height:1px; background:var(--rule-strong); } .atlas-seclabel--ink{ color:var(--text-on-ink-muted); } .atlas-seclabel--ink .atlas-seclabel__rule{ background:var(--border-ink-strong); }`;
let injected = false;
function useCss() { if (typeof document === "undefined" || injected) return; injected = true; const el = document.createElement("style"); el.setAttribute("data-atlas", "seclabel"); el.textContent = CSS; document.head.appendChild(el); }
function SectionLabel({ number, children, tone = "default", className = "" }) {
  useCss();
  const cls = ["atlas-seclabel", tone === "ink" ? "atlas-seclabel--ink" : "", className].filter(Boolean).join(" ");
  return React.createElement("span", { className: cls }, number ? React.createElement("span", { className: "atlas-seclabel__num" }, "\xA7", number) : null, React.createElement("span", { className: "atlas-seclabel__rule" }), children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/content/Stat.jsx
try { (() => {
const CSS = `.atlas-stat{ display:flex; flex-direction:column; gap:0.5rem; } .atlas-stat__value{ font-family:var(--font-display); font-weight:500; line-height:1; letter-spacing:var(--tracking-display); color:var(--text-strong); font-size:clamp(2.4rem, 5vw, 3.4rem); display:flex; align-items:baseline; gap:0.04em; } .atlas-stat__suffix{ color:var(--accent); font-family:var(--font-mono); font-weight:500; font-size:0.32em; letter-spacing:0.05em; vertical-align:super; margin-left:0.2em; } .atlas-stat__label{ font-family:var(--font-mono); font-size:11px; letter-spacing:var(--tracking-label); text-transform:uppercase; color:var(--text-muted); } .atlas-stat--ink .atlas-stat__value{ color:var(--text-on-ink); } .atlas-stat--ink .atlas-stat__label{ color:var(--text-on-ink-muted); }`;
let injected = false;
function useCss() { if (typeof document === "undefined" || injected) return; injected = true; const el = document.createElement("style"); el.setAttribute("data-atlas", "stat"); el.textContent = CSS; document.head.appendChild(el); }
function Stat({ value, suffix, label, tone = "default", className = "" }) {
  useCss();
  const cls = ["atlas-stat", tone === "ink" ? "atlas-stat--ink" : "", className].filter(Boolean).join(" ");
  return React.createElement("div", { className: cls }, React.createElement("div", { className: "atlas-stat__value" }, value, suffix ? React.createElement("span", { className: "atlas-stat__suffix" }, suffix) : null), React.createElement("div", { className: "atlas-stat__label" }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Stat.jsx", error: String((e && e.message) || e) }); }

// components/content/Tag.jsx
try { (() => {
const CSS = `.atlas-tag{ display:inline-flex; align-items:center; gap:0.4em; font-family:var(--font-mono); font-size:11px; font-weight:500; letter-spacing:var(--tracking-wide); text-transform:lowercase; padding:0.32rem 0.6rem; border-radius:0; border:1px solid var(--border); color:var(--text-body); background:transparent; transition:color var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out), background var(--dur) var(--ease-out); } .atlas-tag--solid{ background:var(--paper-200); border-color:transparent; color:var(--text-strong); } .atlas-tag--accent{ background:transparent; border-color:var(--accent); color:var(--accent); } .atlas-tag--ink{ border-color:var(--border-ink); color:var(--text-on-ink-muted); } .atlas-tag--interactive{ cursor:pointer; } .atlas-tag--interactive:hover{ border-color:var(--accent); color:var(--accent); }`;
let injected = false;
function useCss() { if (typeof document === "undefined" || injected) return; injected = true; const el = document.createElement("style"); el.setAttribute("data-atlas", "tag"); el.textContent = CSS; document.head.appendChild(el); }
function Tag({ children, variant = "default", interactive = false, onClick, className = "" }) {
  useCss();
  const cls = ["atlas-tag", `atlas-tag--${variant}`, interactive ? "atlas-tag--interactive" : "", className].filter(Boolean).join(" ");
  return React.createElement("span", { className: cls, onClick: onClick, role: interactive ? "button" : undefined }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/TimelineEntry.jsx
try { (() => {
const CSS = `.atlas-tl{ position:relative; display:grid; grid-template-columns:auto 1fr; gap:0 1.75rem; } .atlas-tl__rail{ position:relative; display:flex; justify-content:center; } .atlas-tl__line{ position:absolute; top:8px; bottom:-2.5rem; width:1px; background:var(--rule-strong); } .atlas-tl--ink .atlas-tl__line{ background:var(--border-ink-strong); } .atlas-tl__node{ position:relative; z-index:1; width:9px; height:9px; margin-top:9px; border-radius:50%; background:var(--bg); border:1px solid var(--rule-strong); } .atlas-tl--ink .atlas-tl__node{ background:var(--ink-900); border-color:var(--border-ink-strong); } .atlas-tl--current .atlas-tl__node{ background:var(--accent); border-color:var(--accent); } .atlas-tl__body{ padding-bottom:2.5rem; } .atlas-tl__period{ font-family:var(--font-mono); font-size:11px; letter-spacing:var(--tracking-label); text-transform:uppercase; color:var(--text-muted); } .atlas-tl--current .atlas-tl__period{ color:var(--accent); } .atlas-tl--ink .atlas-tl__period{ color:var(--text-on-ink-muted); } .atlas-tl--ink.atlas-tl--current .atlas-tl__period{ color:var(--accent); } .atlas-tl__role{ font-family:var(--font-display); font-weight:500; font-size:1.5rem; letter-spacing:var(--tracking-tight); color:var(--text-strong); margin:0.4rem 0 0; line-height:1.12; } .atlas-tl--ink .atlas-tl__role{ color:var(--text-on-ink); } .atlas-tl__meta{ font-family:var(--font-mono); font-size:12px; letter-spacing:0.04em; text-transform:uppercase; color:var(--text-muted); margin-top:0.5rem; } .atlas-tl--ink .atlas-tl__meta{ color:var(--text-on-ink-muted); } .atlas-tl__meta .atlas-tl__company{ color:var(--accent); } .atlas-tl__desc{ font-family:var(--font-body); font-size:1.1rem; line-height:1.6; color:var(--text-body); margin:0.9rem 0 0; max-width:60ch; } .atlas-tl--ink .atlas-tl__desc{ color:var(--text-on-ink-muted); } .atlas-tl__tags{ display:flex; flex-wrap:wrap; gap:0.5rem; margin-top:1.1rem; }`;
let injected = false;
function useCss() { if (typeof document === "undefined" || injected) return; injected = true; const el = document.createElement("style"); el.setAttribute("data-atlas", "timeline"); el.textContent = CSS; document.head.appendChild(el); }
function TimelineEntry({ role, company, location, period, description, tags = [], current = false, tone = "default", className = "" }) {
  useCss();
  const cls = ["atlas-tl", tone === "ink" ? "atlas-tl--ink" : "", current ? "atlas-tl--current" : "", className].filter(Boolean).join(" ");
  const tagTone = tone === "ink" ? "ink" : "default";
  return React.createElement("div", { className: cls },
    React.createElement("div", { className: "atlas-tl__rail" }, React.createElement("span", { className: "atlas-tl__line" }), React.createElement("span", { className: "atlas-tl__node" })),
    React.createElement("div", { className: "atlas-tl__body" },
      React.createElement("span", { className: "atlas-tl__period" }, period),
      React.createElement("h3", { className: "atlas-tl__role" }, role),
      React.createElement("div", { className: "atlas-tl__meta" }, React.createElement("span", { className: "atlas-tl__company" }, company), location ? React.createElement("span", null, " \u2014 ", location) : null),
      description ? React.createElement("p", { className: "atlas-tl__desc" }, description) : null,
      tags.length ? React.createElement("div", { className: "atlas-tl__tags" }, tags.map(t => React.createElement(__ds_scope.Tag, { key: t, variant: tagTone }, t))) : null
    )
  );
}
Object.assign(__ds_scope, { TimelineEntry });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TimelineEntry.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
const CSS = `.atlas-field{ display:flex; flex-direction:column; gap:0.55rem; } .atlas-field__label{ font-family:var(--font-mono); font-size:11px; letter-spacing:var(--tracking-label); text-transform:uppercase; color:var(--text-muted); display:flex; gap:0.45em; align-items:center; } .atlas-field--ink .atlas-field__label{ color:var(--text-on-ink-muted); } .atlas-field__req{ color:var(--accent); } .atlas-field__opt{ color:var(--text-faint); font-size:10px; text-transform:lowercase; } .atlas-field__hint{ font-family:var(--font-mono); font-size:11px; letter-spacing:0.04em; color:var(--text-muted); } .atlas-field--error .atlas-field__hint{ color:var(--danger-500); }`;
let injected = false;
function useCss() { if (typeof document === "undefined" || injected) return; injected = true; const el = document.createElement("style"); el.setAttribute("data-atlas", "field"); el.textContent = CSS; document.head.appendChild(el); }
function Field({ label, htmlFor, required, optional, hint, error, tone = "default", children, className = "" }) {
  useCss();
  const cls = ["atlas-field", tone === "ink" ? "atlas-field--ink" : "", error ? "atlas-field--error" : "", className].filter(Boolean).join(" ");
  return React.createElement("div", { className: cls },
    label ? React.createElement("label", { className: "atlas-field__label", htmlFor: htmlFor }, label, required ? React.createElement("span", { className: "atlas-field__req" }, "*") : null, optional && !required ? React.createElement("span", { className: "atlas-field__opt" }, "opt.") : null) : null,
    children,
    hint || error ? React.createElement("span", { className: "atlas-field__hint" }, error || hint) : null
  );
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `.atlas-input{ font-family:var(--font-body); font-size:1.05rem; color:var(--text-strong); background:transparent; width:100%; box-sizing:border-box; border:none; border-bottom:1px solid var(--border-strong); border-radius:0; padding:0.55rem 0; line-height:1.4; transition:border-color var(--dur) var(--ease-out); } .atlas-input::placeholder{ color:var(--text-faint); } .atlas-input:hover{ border-bottom-color:var(--ink-700); } .atlas-input:focus{ outline:none; border-bottom-color:var(--accent); } .atlas-input--ink{ color:var(--text-on-ink); border-bottom-color:var(--border-ink-strong); } .atlas-input--ink::placeholder{ color:var(--text-on-ink-faint); } .atlas-input--ink:hover{ border-bottom-color:var(--text-on-ink-muted); } .atlas-input--ink:focus{ border-bottom-color:var(--accent); } .atlas-input--error{ border-bottom-color:var(--danger-500); }`;
let injected = false;
function useCss() { if (typeof document === "undefined" || injected) return; injected = true; const el = document.createElement("style"); el.setAttribute("data-atlas", "input"); el.textContent = CSS; document.head.appendChild(el); }
useCss();
function Input({ tone = "default", error = false, className = "", ...rest }) {
  useCss();
  const cls = ["atlas-input", tone === "ink" ? "atlas-input--ink" : "", error ? "atlas-input--error" : "", className].filter(Boolean).join(" ");
  return React.createElement("input", _extends({ className: cls }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({ tone = "default", error = false, rows = 5, className = "", ...rest }) {
  const cls = ["atlas-input", tone === "ink" ? "atlas-input--ink" : "", error ? "atlas-input--error" : "", className].filter(Boolean).join(" ");
  return React.createElement("textarea", _extends({ className: cls, rows: rows, style: { resize: "vertical", minHeight: "6rem" } }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;
__ds_ns.IconButton = __ds_scope.IconButton;
__ds_ns.Badge = __ds_scope.Badge;
__ds_ns.Card = __ds_scope.Card;
__ds_ns.SectionLabel = __ds_scope.SectionLabel;
__ds_ns.Stat = __ds_scope.Stat;
__ds_ns.Tag = __ds_scope.Tag;
__ds_ns.TimelineEntry = __ds_scope.TimelineEntry;
__ds_ns.Field = __ds_scope.Field;
__ds_ns.Input = __ds_scope.Input;
__ds_ns.Textarea = __ds_scope.Textarea;

})();
