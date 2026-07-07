function Skills() {
  const frontend = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "React", level: 92 },
  ];

  const backend = [
    { name: "Node.js", level: 82 },
    { name: "Express", level: 80 },
    { name: "MongoDB", level: 78 },
    { name: "Git & GitHub", level: 90 },
  ];

  return (
    <section id="skills" className="section">
      <div className="section-heading">
        <p className="eyebrow">Skills</p>
        <h2>Technologies and tools I work with.</h2>
      </div>

      <div className="skills-grid">
        <div className="skill-card">
          <h3>Frontend Skills</h3>
          {frontend.map((skill) => (
            <div className="skill-item" key={skill.name}>
              <div className="skill-top">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="skill-card">
          <h3>Backend Skills</h3>
          {backend.map((skill) => (
            <div className="skill-item" key={skill.name}>
              <div className="skill-top">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;