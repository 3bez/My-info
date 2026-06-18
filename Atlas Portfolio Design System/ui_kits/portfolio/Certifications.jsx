// Certifications — clean icon cards.
function Certifications() {
  const { SectionLabel, Card } = window.AtlasPortfolioDesignSystem_0beb6f;
  const { certifications } = window.PORTFOLIO;
  return (
    <section className="section section--bone2" id="certifications">
      <div className="container">
        <div className="sec-head reveal">
          <SectionLabel number="04">Certifications</SectionLabel>
          <h2 className="sec-title">Credentials that back the work.</h2>
        </div>
        <div className="certs__grid">
          {certifications.map((c, i) => (
            <div className="reveal" key={i} style={{ transitionDelay: (i % 3) * 60 + "ms" }}>
              <Card hover className="cert">
                <span className="cert__icon"><i data-lucide={c.icon}></i></span>
                <div>
                  <h3 className="cert__name">{c.name}</h3>
                  <div className="cert__meta">{c.issuer} · {c.year}</div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Certifications = Certifications;
