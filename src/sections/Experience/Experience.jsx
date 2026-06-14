import "./Experience.css";
import {experiences} from "../../data/projects";

function Experience() {
  return (
    <section className="experience" id="experience">
      <h2 className="exp-section-title">Experience</h2>

      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div className="exp-card" key={index}>

            {/* Timeline spine */}
            <div className="exp-spine">
              <div className="exp-dot" />
              {index !== experiences.length - 1 && (
                <div className="exp-line" />
              )}
            </div>

            {/* Card body */}
            <div className="exp-body">
              <div className="exp-header">
                <div className="exp-title-group">
                  <h3 className="exp-role">{exp.role}</h3>
                  <span className="exp-company">{exp.company}</span>
                </div>
                <div className="exp-meta">
                  <span className="exp-badge exp-badge--type">{exp.type}</span>
                  <span className="exp-badge exp-badge--duration">{exp.duration}</span>
                  <span className="exp-badge exp-badge--location">{exp.location}</span>
                </div>
              </div>

              <p className="exp-description">{exp.description}</p>

              <div className="exp-tech">
                {exp.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
