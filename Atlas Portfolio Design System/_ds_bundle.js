/* @ds-bundle: {"format":3,"namespace":"AtlasPortfolioDesignSystem_0beb6f","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"SectionLabel","sourcePath":"components/content/SectionLabel.jsx"},{"name":"Stat","sourcePath":"components/content/Stat.jsx"},{"name":"Tag","sourcePath":"components/content/Tag.jsx"},{"name":"TimelineEntry","sourcePath":"components/content/TimelineEntry.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"6ff62b6871c4","components/buttons/IconButton.jsx":"d860f6eba9a2","components/content/Badge.jsx":"ee2a2a1f822d","components/content/Card.jsx":"015da9f7fccb","components/content/SectionLabel.jsx":"61ce58e326bb","components/content/Stat.jsx":"205bb6ed06a7","components/content/Tag.jsx":"3348ee2ad86d","components/content/TimelineEntry.jsx":"bc02554942d6","components/forms/Field.jsx":"0a193e5ba8ec","components/forms/Input.jsx":"3b1ae24a4b83","components/forms/Textarea.jsx":"b58ae2f05742","ui_kits/portfolio/About.jsx":"aa3b8f6266df","ui_kits/portfolio/Certifications.jsx":"d81f957aefcf","ui_kits/portfolio/Contact.jsx":"f2143e171149","ui_kits/portfolio/Experience.jsx":"fd5d65ebdb2f","ui_kits/portfolio/Footer.jsx":"a147f6674b9d","ui_kits/portfolio/Hero.jsx":"59e3e7681710","ui_kits/portfolio/Nav.jsx":"a8a77f82e4fc","ui_kits/portfolio/Projects.jsx":"3a7b7bb3af16","ui_kits/portfolio/data.js":"c3393f5e1866"},"inlinedExternals":[],"unexposedExports":[]} */

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
function Button({
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
  const cls = ["atlas-btn", `atlas-btn--${variant}`, `atlas-btn--${size}`, fullWidth ? "atlas-btn--block" : "", className].filter(Boolean).join(" ");
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, icon ? /*#__PURE__*/React.createElement("span", {
    className: "atlas-btn__ico"
  }, icon) : null, children ? /*#__PURE__*/React.createElement("span", null, children) : null, iconRight ? /*#__PURE__*/React.createElement("span", {
    className: "atlas-btn__ico"
  }, iconRight) : null);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: cls,
      href: href,
      onClick: onClick
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: type,
    onClick: onClick,
    "aria-disabled": disabled || undefined,
    disabled: disabled
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function IconButton({
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
  const cls = ["atlas-iconbtn", tone === "ink" ? "atlas-iconbtn--ink" : "", bare ? "atlas-iconbtn--bare" : "", className].filter(Boolean).join(" ");
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    href: href,
    onClick: onClick,
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
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
function Badge({
  children,
  variant = "muted",
  dot = false,
  className = ""
}) {
  useCss();
  const cls = ["atlas-badge", `atlas-badge--${variant}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", {
    className: cls
  }, dot ? /*#__PURE__*/React.createElement("span", {
    className: "atlas-badge__dot"
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Card({
  children,
  hover = false,
  tone = "default",
  flush = false,
  icon,
  className = "",
  ...rest
}) {
  useCss();
  const cls = ["atlas-card", hover ? "atlas-card--hover" : "", tone === "ink" ? "atlas-card--ink" : "", flush ? "atlas-card--flush" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), icon ? /*#__PURE__*/React.createElement("div", {
    className: "atlas-card__icon"
  }, icon) : null, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionLabel.jsx
try { (() => {
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
function SectionLabel({
  number,
  children,
  tone = "default",
  className = ""
}) {
  useCss();
  const cls = ["atlas-seclabel", tone === "ink" ? "atlas-seclabel--ink" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", {
    className: cls
  }, number ? /*#__PURE__*/React.createElement("span", {
    className: "atlas-seclabel__num"
  }, "\xA7", number) : null, /*#__PURE__*/React.createElement("span", {
    className: "atlas-seclabel__rule"
  }), children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/content/Stat.jsx
try { (() => {
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
function Stat({
  value,
  suffix,
  label,
  tone = "default",
  className = ""
}) {
  useCss();
  const cls = ["atlas-stat", tone === "ink" ? "atlas-stat--ink" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, /*#__PURE__*/React.createElement("div", {
    className: "atlas-stat__value"
  }, value, suffix ? /*#__PURE__*/React.createElement("span", {
    className: "atlas-stat__suffix"
  }, suffix) : null), /*#__PURE__*/React.createElement("div", {
    className: "atlas-stat__label"
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Stat.jsx", error: String((e && e.message) || e) }); }

// components/content/Tag.jsx
try { (() => {
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
function Tag({
  children,
  variant = "default",
  interactive = false,
  onClick,
  className = ""
}) {
  useCss();
  const cls = ["atlas-tag", `atlas-tag--${variant}`, interactive ? "atlas-tag--interactive" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", {
    className: cls,
    onClick: onClick,
    role: interactive ? "button" : undefined
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/TimelineEntry.jsx
try { (() => {
const CSS = `
.atlas-tl{ position:relative; display:grid; grid-template-columns:auto 1fr; gap:0 1.75rem; }
.atlas-tl__rail{ position:relative; display:flex; justify-content:center; }
.atlas-tl__line{ position:absolute; top:8px; bottom:-2.5rem; width:1px; background:var(--rule-strong); }
.atlas-tl--ink .atlas-tl__line{ background:var(--border-ink-strong); }
.atlas-tl__node{
  position:relative; z-index:1; width:9px; height:9px; margin-top:9px;
  border-radius:50%; background:var(--bg); border:1px solid var(--rule-strong);
}
.atlas-tl--ink .atlas-tl__node{ background:var(--ink-900); border-color:var(--border-ink-strong); }
.atlas-tl--current .atlas-tl__node{ background:var(--accent); border-color:var(--accent); }
.atlas-tl__body{ padding-bottom:2.5rem; }
.atlas-tl__period{ font-family:var(--font-mono); font-size:11px; letter-spacing:var(--tracking-label); text-transform:uppercase; color:var(--text-muted); }
.atlas-tl--current .atlas-tl__period{ color:var(--accent); }
.atlas-tl--ink .atlas-tl__period{ color:var(--text-on-ink-muted); }
.atlas-tl--ink.atlas-tl--current .atlas-tl__period{ color:var(--accent); }
.atlas-tl__role{ font-family:var(--font-display); font-weight:500; font-size:1.5rem; letter-spacing:var(--tracking-tight); color:var(--text-strong); margin:0.4rem 0 0; line-height:1.12; }
.atlas-tl--ink .atlas-tl__role{ color:var(--text-on-ink); }
.atlas-tl__meta{ font-family:var(--font-mono); font-size:12px; letter-spacing:0.04em; text-transform:uppercase; color:var(--text-muted); margin-top:0.5rem; }
.atlas-tl--ink .atlas-tl__meta{ color:var(--text-on-ink-muted); }
.atlas-tl__meta .atlas-tl__company{ color:var(--accent); }
.atlas-tl__desc{ font-family:var(--font-body); font-size:1.1rem; line-height:1.6; color:var(--text-body); margin:0.9rem 0 0; max-width:60ch; }
.atlas-tl--ink .atlas-tl__desc{ color:var(--text-on-ink-muted); }
.atlas-tl__tags{ display:flex; flex-wrap:wrap; gap:0.5rem; margin-top:1.1rem; }
`;
let injected = false;
function useCss() {
  if (typeof document === "undefined" || injected) return;
  injected = true;
  const el = document.createElement("style");
  el.setAttribute("data-atlas", "timeline");
  el.textContent = CSS;
  document.head.appendChild(el);
}
function TimelineEntry({
  role,
  company,
  location,
  period,
  description,
  tags = [],
  current = false,
  tone = "default",
  className = ""
}) {
  useCss();
  const cls = ["atlas-tl", tone === "ink" ? "atlas-tl--ink" : "", current ? "atlas-tl--current" : "", className].filter(Boolean).join(" ");
  const tagTone = tone === "ink" ? "ink" : "default";
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, /*#__PURE__*/React.createElement("div", {
    className: "atlas-tl__rail"
  }, /*#__PURE__*/React.createElement("span", {
    className: "atlas-tl__line"
  }), /*#__PURE__*/React.createElement("span", {
    className: "atlas-tl__node"
  })), /*#__PURE__*/React.createElement("div", {
    className: "atlas-tl__body"
  }, /*#__PURE__*/React.createElement("span", {
    className: "atlas-tl__period"
  }, period), /*#__PURE__*/React.createElement("h3", {
    className: "atlas-tl__role"
  }, role), /*#__PURE__*/React.createElement("div", {
    className: "atlas-tl__meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "atlas-tl__company"
  }, company), location ? /*#__PURE__*/React.createElement("span", null, " \u2014 ", location) : null), description ? /*#__PURE__*/React.createElement("p", {
    className: "atlas-tl__desc"
  }, description) : null, tags.length ? /*#__PURE__*/React.createElement("div", {
    className: "atlas-tl__tags"
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t,
    variant: tagTone
  }, t))) : null));
}
Object.assign(__ds_scope, { TimelineEntry });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TimelineEntry.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
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
function Field({
  label,
  htmlFor,
  required,
  optional,
  hint,
  error,
  tone = "default",
  children,
  className = ""
}) {
  useCss();
  const cls = ["atlas-field", tone === "ink" ? "atlas-field--ink" : "", error ? "atlas-field--error" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, label ? /*#__PURE__*/React.createElement("label", {
    className: "atlas-field__label",
    htmlFor: htmlFor
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    className: "atlas-field__req"
  }, "*") : null, optional && !required ? /*#__PURE__*/React.createElement("span", {
    className: "atlas-field__opt"
  }, "opt.") : null) : null, children, hint || error ? /*#__PURE__*/React.createElement("span", {
    className: "atlas-field__hint"
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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

function Input({
  tone = "default",
  error = false,
  className = "",
  ...rest
}) {
  useCss();
  const cls = ["atlas-input", tone === "ink" ? "atlas-input--ink" : "", error ? "atlas-input--error" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("input", _extends({
    className: cls
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Reuses the .atlas-input styling injected by Input.jsx; import ensures it's present.

function Textarea({
  tone = "default",
  error = false,
  rows = 5,
  className = "",
  ...rest
}) {
  const cls = ["atlas-input", tone === "ink" ? "atlas-input--ink" : "", error ? "atlas-input--error" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("textarea", _extends({
    className: cls,
    rows: rows,
    style: {
      resize: "vertical",
      minHeight: "6rem"
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/About.jsx
try { (() => {
// About — bio statement + skills grid.
function About() {
  const {
    SectionLabel
  } = window.AtlasPortfolioDesignSystem_0beb6f;
  const {
    about,
    identity
  } = window.PORTFOLIO;
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head reveal"
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    number: "01"
  }, "About")), /*#__PURE__*/React.createElement("div", {
    className: "about__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "about__lead"
  }, about.headline), /*#__PURE__*/React.createElement("div", {
    className: "about__bio"
  }, about.paragraphs.map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i
  }, p))), /*#__PURE__*/React.createElement("div", {
    className: "about__avail"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pulse"
  }), identity.available)), /*#__PURE__*/React.createElement("div", {
    className: "skills reveal"
  }, about.skills.map(g => /*#__PURE__*/React.createElement("div", {
    className: "skills__group",
    key: g.group
  }, /*#__PURE__*/React.createElement("h4", null, g.group), /*#__PURE__*/React.createElement("ul", null, g.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it
  }, it)))))))));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Certifications.jsx
try { (() => {
// Certifications — clean icon cards.
function Certifications() {
  const {
    SectionLabel,
    Card
  } = window.AtlasPortfolioDesignSystem_0beb6f;
  const {
    certifications
  } = window.PORTFOLIO;
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--bone2",
    id: "certifications"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head reveal"
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    number: "04"
  }, "Certifications"), /*#__PURE__*/React.createElement("h2", {
    className: "sec-title"
  }, "Credentials that back the work.")), /*#__PURE__*/React.createElement("div", {
    className: "certs__grid"
  }, certifications.map((c, i) => /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    key: i,
    style: {
      transitionDelay: i % 3 * 60 + "ms"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    hover: true,
    className: "cert"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cert__icon"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": c.icon
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "cert__name"
  }, c.name), /*#__PURE__*/React.createElement("div", {
    className: "cert__meta"
  }, c.issuer, " \xB7 ", c.year))))))));
}
window.Certifications = Certifications;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Certifications.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Contact.jsx
try { (() => {
// Contact — full-width ink. Inviting copy + friendly form.
function Contact() {
  const {
    SectionLabel,
    Field,
    Input,
    Textarea,
    Button,
    IconButton
  } = window.AtlasPortfolioDesignSystem_0beb6f;
  const {
    contact,
    identity,
    social
  } = window.PORTFOLIO;
  const [sent, setSent] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [sent]);
  function submit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const next = {};
    if (!fd.get("name") || !fd.get("name").trim()) next.name = "Your name helps me reply properly.";
    if (!fd.get("message") || !fd.get("message").trim()) next.message = "Tell me a little about it.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--ink grain",
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contact__head reveal"
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    number: "05",
    tone: "ink"
  }, "Contact"), /*#__PURE__*/React.createElement("h2", {
    className: "sec-title",
    style: {
      marginTop: "1.25rem"
    }
  }, contact.headline), /*#__PURE__*/React.createElement("p", {
    className: "contact__line"
  }, contact.line), /*#__PURE__*/React.createElement("div", {
    className: "contact__direct"
  }, /*#__PURE__*/React.createElement("a", {
    className: "contact__email",
    href: "mailto:" + identity.email
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "mail"
  }), identity.email), /*#__PURE__*/React.createElement("div", {
    className: "contact__socials"
  }, social.map(s => /*#__PURE__*/React.createElement(IconButton, {
    key: s.label,
    label: s.label,
    href: s.href,
    tone: "ink"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": s.icon
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    className: "form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form__success"
  }, /*#__PURE__*/React.createElement("span", {
    className: "check"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check"
  })), /*#__PURE__*/React.createElement("h3", null, "Message sent."), /*#__PURE__*/React.createElement("p", null, "Thanks for reaching out \u2014 I'll get back to you within a day."))) : /*#__PURE__*/React.createElement("form", {
    className: "form",
    onSubmit: submit,
    noValidate: true
  }, /*#__PURE__*/React.createElement("div", {
    className: "form__row"
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Name",
    htmlFor: "c-name",
    required: true,
    tone: "ink",
    error: errors.name
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-name",
    name: "name",
    tone: "ink",
    error: !!errors.name,
    placeholder: "Your name"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    htmlFor: "c-email",
    optional: true,
    tone: "ink"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-email",
    name: "email",
    type: "email",
    tone: "ink",
    placeholder: "you@company.com"
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Phone",
    htmlFor: "c-phone",
    optional: true,
    tone: "ink"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "c-phone",
    name: "phone",
    type: "tel",
    tone: "ink",
    placeholder: "+966 ..."
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Message",
    htmlFor: "c-msg",
    required: true,
    tone: "ink",
    error: errors.message
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "c-msg",
    name: "message",
    tone: "ink",
    rows: 5,
    error: !!errors.message,
    placeholder: "What are you trying to ship?"
  })), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    size: "lg",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "send"
    })
  }, "Send message"))))));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Experience.jsx
try { (() => {
// Experience — vertical timeline on ink.
function Experience() {
  const {
    SectionLabel,
    TimelineEntry
  } = window.AtlasPortfolioDesignSystem_0beb6f;
  const {
    experience
  } = window.PORTFOLIO;
  return /*#__PURE__*/React.createElement("section", {
    className: "section section--ink grain",
    id: "experience"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head reveal"
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    number: "02",
    tone: "ink"
  }, "Experience"), /*#__PURE__*/React.createElement("h2", {
    className: "sec-title"
  }, "A decade of ", /*#__PURE__*/React.createElement("span", {
    className: "hl"
  }, "shipping"), " under pressure.")), /*#__PURE__*/React.createElement("div", {
    className: "timeline"
  }, experience.map((e, i) => /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    key: i
  }, /*#__PURE__*/React.createElement(TimelineEntry, {
    tone: "ink",
    current: e.current,
    period: e.period,
    role: e.role,
    company: e.company,
    location: e.location,
    description: e.description,
    tags: e.tags
  }))))));
}
window.Experience = Experience;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Experience.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Footer.jsx
try { (() => {
// Footer — minimal, on ink.
function Footer() {
  const {
    IconButton
  } = window.AtlasPortfolioDesignSystem_0beb6f;
  const {
    social
  } = window.PORTFOLIO;
  const year = new Date().getFullYear();
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container footer__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer__brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nav__mark",
    style: {
      background: "var(--bone-100)",
      color: "var(--ink-900)"
    }
  }, "A"), /*#__PURE__*/React.createElement("span", {
    className: "footer__name"
  }, "Abdulaziz ", /*#__PURE__*/React.createElement("span", {
    className: "a"
  }, "Alangari"))), /*#__PURE__*/React.createElement("div", {
    className: "footer__meta"
  }, "\xA9 ", year, " \xB7 Built with intent"), /*#__PURE__*/React.createElement("div", {
    className: "footer__socials"
  }, social.map(s => /*#__PURE__*/React.createElement(IconButton, {
    key: s.label,
    label: s.label,
    href: s.href,
    tone: "ink",
    bare: true
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": s.icon
  }))))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
// Hero — full-screen ink. Oversized editorial name, tagline, CTAs, stat row.
function Hero() {
  const {
    Button,
    Stat
  } = window.AtlasPortfolioDesignSystem_0beb6f;
  const {
    identity,
    stats
  } = window.PORTFOLIO;
  return /*#__PURE__*/React.createElement("section", {
    className: "hero grain",
    id: "top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero__edge"
  }, "Portfolio \u2014 '26"), /*#__PURE__*/React.createElement("div", {
    className: "container hero__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__eyebrow reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), identity.title, /*#__PURE__*/React.createElement("span", {
    className: "loc"
  }, "\u2014 ", identity.location)), /*#__PURE__*/React.createElement("h1", {
    className: "hero__name reveal"
  }, identity.first, /*#__PURE__*/React.createElement("span", {
    className: "last"
  }, identity.last, ".")), /*#__PURE__*/React.createElement("p", {
    className: "hero__tagline reveal"
  }, identity.tagline), /*#__PURE__*/React.createElement("div", {
    className: "hero__actions reveal"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: "#contact",
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right"
    })
  }, "Start a conversation"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    href: "#work"
  }, "View work")), /*#__PURE__*/React.createElement("div", {
    className: "hero__stats reveal"
  }, stats.map(s => /*#__PURE__*/React.createElement(Stat, {
    key: s.label,
    value: s.value,
    suffix: s.suffix,
    label: s.label,
    tone: "ink"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "hero__scroll"
  }, /*#__PURE__*/React.createElement("span", null, "Scroll"), /*#__PURE__*/React.createElement("span", {
    className: "bar"
  })));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Nav.jsx
try { (() => {
// Sticky top nav — transparent over the hero, frosted bone once scrolled.
function Nav() {
  const {
    Button,
    IconButton
  } = window.AtlasPortfolioDesignSystem_0beb6f;
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [["About", "#about"], ["Experience", "#experience"], ["Work", "#work"], ["Contact", "#contact"]];
  return /*#__PURE__*/React.createElement("header", {
    className: "nav" + (scrolled ? " nav--scrolled" : "")
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav__brand",
    href: "#top"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nav__mark"
  }, "A"), /*#__PURE__*/React.createElement("span", {
    className: "nav__name"
  }, "Abdulaziz Alangari")), /*#__PURE__*/React.createElement("nav", {
    className: "nav__links"
  }, links.map(([label, href]) => /*#__PURE__*/React.createElement("a", {
    key: href,
    className: "nav__link",
    href: href
  }, label))), /*#__PURE__*/React.createElement("div", {
    className: "nav__cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: scrolled ? "primary" : "inverse",
    size: "sm",
    href: "#contact",
    iconRight: /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right"
    })
  }, "Get in touch"), /*#__PURE__*/React.createElement("span", {
    className: "nav__menu-btn"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Menu",
    tone: scrolled ? "default" : "ink"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "menu"
  })))));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Projects.jsx
try { (() => {
// Projects — card grid.
function Projects() {
  const {
    SectionLabel,
    Card,
    Badge,
    Tag
  } = window.AtlasPortfolioDesignSystem_0beb6f;
  const {
    projects
  } = window.PORTFOLIO;
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    id: "work"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sec-head reveal"
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    number: "03"
  }, "Selected work"), /*#__PURE__*/React.createElement("h2", {
    className: "sec-title"
  }, "Programs I've owned end\u2011to\u2011end.")), /*#__PURE__*/React.createElement("div", {
    className: "projects__grid"
  }, projects.map((p, i) => /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    key: i,
    style: {
      transitionDelay: i % 3 * 70 + "ms"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    hover: true,
    className: "proj",
    icon: /*#__PURE__*/React.createElement("i", {
      "data-lucide": p.icon
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "proj__head"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: p.type === "0 → 1" ? "accent" : "muted"
  }, p.type), /*#__PURE__*/React.createElement("span", {
    className: "proj__arrow"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-up-right"
  }))), /*#__PURE__*/React.createElement("h3", {
    className: "proj__title"
  }, p.title), /*#__PURE__*/React.createElement("p", {
    className: "proj__desc"
  }, p.desc), /*#__PURE__*/React.createElement("div", {
    className: "proj__tags"
  }, p.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)))))))));
}
window.Projects = Projects;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Projects.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.js
try { (() => {
// Atlas portfolio — sample content. Placeholder persona; fully editable.
window.PORTFOLIO = {
  identity: {
    first: "Abdulaziz",
    last: "Alangari",
    title: "Technical Project Manager",
    location: "Riyadh, SA",
    tagline: "I turn ambiguous, high-stakes initiatives into shipped product.",
    email: "hello@alangari.me",
    available: "Open to senior TPM & program roles"
  },
  stats: [{
    value: "12",
    suffix: "yrs",
    label: "Experience"
  }, {
    value: "60",
    suffix: "+",
    label: "Projects delivered"
  }, {
    value: "5",
    suffix: "",
    label: "Industries"
  }],
  about: {
    headline: "Engineering-fluent delivery, without the drama.",
    paragraphs: ["I'm a technical project manager who lives in the space between engineering and the business. For over a decade I've led delivery for platform migrations, payments systems, and 0→1 products — turning fuzzy, high-stakes goals into roadmaps teams can actually execute.", "I care about the unglamorous parts: clear scope, honest timelines, and teams that trust each other. Good project management should be invisible — you just notice that things ship."],
    skills: [{
      group: "Delivery",
      items: ["Agile / Scrum", "Roadmapping", "Risk management", "Release planning"]
    }, {
      group: "Technical",
      items: ["System design literacy", "API & data flows", "Cloud — AWS / GCP", "CI/CD pipelines"]
    }, {
      group: "Leadership",
      items: ["Stakeholder alignment", "Cross-functional leadership", "Mentoring", "Vendor management"]
    }, {
      group: "Tooling",
      items: ["Jira & Linear", "Notion", "Figma", "Metabase"]
    }]
  },
  experience: [{
    current: true,
    period: "2021 — Present",
    role: "Senior Technical Project Manager",
    company: "Northwind Payments",
    location: "Riyadh / Remote",
    description: "Lead delivery across platform and payments squads. Ran a zero-downtime ledger migration serving 4 markets and 2M+ users, and stood up a cross-team delivery cadence that cut release slippage by half.",
    tags: ["payments", "platform", "agile", "stakeholders"]
  }, {
    period: "2018 — 2021",
    role: "Technical Project Manager",
    company: "Helix Health",
    location: "Dubai, AE",
    description: "Delivered an HL7 / FHIR integration platform connecting 30+ hospital systems. Cut onboarding time for new providers by 60% and owned vendor relationships end to end.",
    tags: ["healthcare", "integrations", "fhir", "vendor mgmt"]
  }, {
    period: "2015 — 2018",
    role: "Program Manager",
    company: "Vector Logistics",
    location: "Cairo, EG",
    description: "Owned the rollout of a fleet tracking and routing platform across 9 regions, coordinating engineering, ops, and field teams under a hard regulatory deadline.",
    tags: ["logistics", "rollout", "data", "operations"]
  }, {
    period: "2013 — 2015",
    role: "Associate Project Manager",
    company: "Brightwave Studios",
    location: "Cairo, EG",
    description: "Coordinated delivery for client web and mobile builds — scoping, sprint planning, and keeping a dozen stakeholders pointed in the same direction.",
    tags: ["agency", "web", "mobile", "scrum"]
  }],
  projects: [{
    type: "Platform",
    icon: "credit-card",
    title: "Payments re-platform",
    desc: "Migrated checkout to a new double-entry ledger with zero downtime across four markets.",
    tags: ["ledger", "aws", "event-driven"]
  }, {
    type: "0 → 1",
    icon: "rocket",
    title: "Merchant onboarding",
    desc: "Built a self-serve KYC + onboarding flow that cut activation from days to minutes.",
    tags: ["kyc", "workflow", "react"]
  }, {
    type: "Platform",
    icon: "activity",
    title: "FHIR integration hub",
    desc: "Connected 30+ hospital systems through a normalized clinical data layer.",
    tags: ["fhir", "hl7", "integrations"]
  }, {
    type: "Internal tool",
    icon: "gauge",
    title: "Delivery cockpit",
    desc: "A live program dashboard pulling Jira, Git, and incidents into one risk view.",
    tags: ["dashboards", "jira-api", "metrics"]
  }, {
    type: "Migration",
    icon: "split",
    title: "Monolith → services",
    desc: "Decomposed a 9-year-old monolith into domain services with no feature freeze.",
    tags: ["microservices", "strangler", "ci/cd"]
  }, {
    type: "0 → 1",
    icon: "route",
    title: "Fleet routing",
    desc: "Real-time routing and tracking platform rolled out to nine regions.",
    tags: ["maps", "realtime", "operations"]
  }],
  certifications: [{
    icon: "award",
    name: "PMP®",
    issuer: "PMI",
    year: "2020"
  }, {
    icon: "infinity",
    name: "PMI-ACP®",
    issuer: "PMI",
    year: "2021"
  }, {
    icon: "users",
    name: "Certified ScrumMaster",
    issuer: "Scrum Alliance",
    year: "2019"
  }, {
    icon: "cloud",
    name: "AWS Cloud Practitioner",
    issuer: "Amazon",
    year: "2022"
  }, {
    icon: "layers",
    name: "SAFe® Agilist",
    issuer: "Scaled Agile",
    year: "2023"
  }, {
    icon: "settings",
    name: "ITIL® 4 Foundation",
    issuer: "Axelos",
    year: "2021"
  }],
  contact: {
    headline: "Got something hard to ship?",
    line: "Whether it's a migration nobody wants to touch or a 0→1 you need off the ground — I'd like to hear about it. I usually reply within a day."
  },
  social: [{
    icon: "github",
    label: "GitHub",
    href: "#"
  }, {
    icon: "linkedin",
    label: "LinkedIn",
    href: "#"
  }, {
    icon: "mail",
    label: "Email",
    href: "#contact"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.js", error: String((e && e.message) || e) }); }

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
