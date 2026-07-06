function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Vite",
    "Git",
    "Node.js",
    "MongoDB",
  ];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="skills">
        {skills.map((skill) => (
          <div className="skill" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;