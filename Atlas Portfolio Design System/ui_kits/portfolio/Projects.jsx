// Projects — card grid.
function Projects() {
  const { SectionLabel, Card, Badge, Tag } = window.AtlasPortfolioDesignSystem_0beb6f;
  const { projects } = window.PORTFOLIO;
  return (
    <section className="section" id="work">
      <div className="container">
        <div className="sec-head reveal">
          <SectionLabel number="03">Selected work</SectionLabel>
          <h2 className="sec-title">Programs I've owned end&#8209;to&#8209;end.</h2>
        </div>
        <div className="projects__grid">
          {projects.map((p, i) => (
            <div className="reveal" key={i} style={{ transitionDelay: (i % 3) * 70 + "ms" }}>
              <Card hover className="proj" icon={<i data-lucide={p.icon}></i>}>
                <div className="proj__head">
                  <Badge variant={p.type === "0 → 1" ? "accent" : "muted"}>{p.type}</Badge>
                  <span className="proj__arrow"><i data-lucide="arrow-up-right"></i></span>
                </div>
                <h3 className="proj__title">{p.title}</h3>
                <p className="proj__desc">{p.desc}</p>
                <div className="proj__tags">
                  {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Projects = Projects;
