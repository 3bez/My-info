// About — bio statement + skills grid.
function About() {
  const { SectionLabel } = window.AtlasPortfolioDesignSystem_0beb6f;
  const { about, identity } = window.PORTFOLIO;
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="sec-head reveal">
          <SectionLabel number="01">About</SectionLabel>
        </div>
        <div className="about__grid">
          <div className="reveal">
            <h2 className="about__lead">{about.headline}</h2>
            <div className="about__bio">
              {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="about__avail">
              <span className="pulse"></span>{identity.available}
            </div>
          </div>
          <div className="skills reveal">
            {about.skills.map((g) => (
              <div className="skills__group" key={g.group}>
                <h4>{g.group}</h4>
                <ul>{g.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
window.About = About;
