function Projects() {
  const projects = [
    {
      title: "Weather App",
      desc: "A polished React weather app with location-based forecasts and a clean UI.",
      tags: ["React", "API", "CSS"],
    },
    {
      title: "Movie Explorer",
      desc: "Search and discover movies through an intuitive and responsive interface.",
      tags: ["React", "JavaScript", "API"],
    },
    {
      title: "Portfolio Website",
      desc: "A modern personal portfolio showcasing projects, skills, and contact details.",
      tags: ["Vite", "React", "UI"],
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>Recent work I&apos;m proud of.</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="tags">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
            <a href="#contact" className="btn btn-secondary">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;