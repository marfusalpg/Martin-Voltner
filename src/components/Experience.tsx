import { education, employment } from "../data/content";

const Experience = () => (
  <section id="experience" className="experience">
    <div className="experience-header">
      <h2>Experience</h2>
      <span>Education / Work</span>
    </div>

    <div className="experience-grid">
      <div className="info-group">
        <div className="group-label">Education</div>

        {education.map((item) => (
          <article key={item.title} className="timeline-item">
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-copy">
              <h3>{item.title}</h3>
              {item.location ? <p>{item.location}</p> : null}
              {item.detail ? <p>{item.detail}</p> : null}
              <p>{item.period}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="info-group">
        <div className="group-label">Employment</div>

        {employment.map((item) => (
          <article key={item.title} className="timeline-item">
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-copy">
              <h3>{item.title}</h3>
              {item.location ? <p>{item.location}</p> : null}
              {item.detail ? <p>{item.detail}</p> : null}
              <p>{item.period}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
