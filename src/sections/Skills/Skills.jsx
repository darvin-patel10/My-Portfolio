import "./Skills.css";
import leetcodeLogo from "/leetcode.webp";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-container">
        <div className="skill-card">
          <h3>Frontend</h3>
          <ul>
            <li>React.js</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>REST APIs</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Database</h3>
          <ul>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Tools</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>VS Code</li>
            <li>Postman</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Problem-Solving</h3>
          <ul>
            <li>Data Structures & Algorithms</li>
            <li>Competitive Programming</li>
          </ul>
          <a href="https://leetcode.com/u/darvin_padariya/" target="_blank" rel="noopener noreferrer">
          <div className="skill-button">
              <img src={leetcodeLogo} alt="LeetCode Logo" />
              LeetCode Profile
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Skills;
