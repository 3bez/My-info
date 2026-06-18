// Footer — minimal, on ink.
function Footer() {
  const { IconButton } = window.AtlasPortfolioDesignSystem_0beb6f;
  const { social } = window.PORTFOLIO;
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="nav__mark" style={{ background: "var(--bone-100)", color: "var(--ink-900)" }}>A</span>
          <span className="footer__name">Abdulaziz <span className="a">Alangari</span></span>
        </div>
        <div className="footer__meta">© {year} · Built with intent</div>
        <div className="footer__socials">
          {social.map((s) => (
            <IconButton key={s.label} label={s.label} href={s.href} tone="ink" bare>
              <i data-lucide={s.icon}></i>
            </IconButton>
          ))}
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
