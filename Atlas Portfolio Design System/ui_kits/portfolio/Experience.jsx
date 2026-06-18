// Experience — vertical timeline on ink.
function Experience() {
  const { SectionLabel, TimelineEntry } = window.AtlasPortfolioDesignSystem_0beb6f;
  const { experience } = window.PORTFOLIO;
  return (
    <section className="section section--ink grain" id="experience">
      <div className="container">
        <div className="sec-head reveal">
          <SectionLabel number="02" tone="ink">Experience</SectionLabel>
          <h2 className="sec-title">A decade of <span className="hl">shipping</span> under pressure.</h2>
        </div>
        <div className="timeline">
          {experience.map((e, i) => (
            <div className="reveal" key={i}>
              <TimelineEntry
                tone="ink"
                current={e.current}
                period={e.period}
                role={e.role}
                company={e.company}
                location={e.location}
                description={e.description}
                tags={e.tags}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Experience = Experience;
