// Sticky top nav — transparent over the hero, frosted bone once scrolled.
function Nav() {
  const { Button, IconButton } = window.AtlasPortfolioDesignSystem_0beb6f;
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["About", "#about"],
    ["Experience", "#experience"],
    ["Work", "#work"],
    ["Contact", "#contact"],
  ];
  return (
    <header className={"nav" + (scrolled ? " nav--scrolled" : "")}>
      <a className="nav__brand" href="#top">
        <span className="nav__mark">A</span>
        <span className="nav__name">Abdulaziz Alangari</span>
      </a>
      <nav className="nav__links">
        {links.map(([label, href]) => (
          <a key={href} className="nav__link" href={href}>{label}</a>
        ))}
      </nav>
      <div className="nav__cta">
        <Button variant={scrolled ? "primary" : "inverse"} size="sm" href="#contact"
          iconRight={<i data-lucide="arrow-right"></i>}>Get in touch</Button>
        <span className="nav__menu-btn">
          <IconButton label="Menu" tone={scrolled ? "default" : "ink"}><i data-lucide="menu"></i></IconButton>
        </span>
      </div>
    </header>
  );
}
window.Nav = Nav;
