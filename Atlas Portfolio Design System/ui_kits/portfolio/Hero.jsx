// Hero — full-screen ink. Oversized editorial name, tagline, CTAs, stat row.
function Hero() {
  const { Button, Stat } = window.AtlasPortfolioDesignSystem_0beb6f;
  const { identity, stats } = window.PORTFOLIO;
  return (
    <section className="hero grain" id="top">
      <span className="hero__edge">Portfolio — '26</span>
      <div className="container hero__inner">
        <div className="hero__eyebrow reveal">
          <span className="dot"></span>
          {identity.title}
          <span className="loc">— {identity.location}</span>
        </div>
        <h1 className="hero__name reveal">
          {identity.first}
          <span className="last">{identity.last}.</span>
        </h1>
        <p className="hero__tagline reveal">{identity.tagline}</p>
        <div className="hero__actions reveal">
          <Button variant="primary" size="lg" href="#contact"
            iconRight={<i data-lucide="arrow-right"></i>}>Start a conversation</Button>
          <Button variant="inverse" size="lg" href="#work">View work</Button>
        </div>
        <div className="hero__stats reveal">
          {stats.map((s) => (
            <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} tone="ink" />
          ))}
        </div>
      </div>
      <div className="hero__scroll">
        <span>Scroll</span>
        <span className="bar"></span>
      </div>
    </section>
  );
}
window.Hero = Hero;
