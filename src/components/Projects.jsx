function Projects() {
  const projects = [
    {
      title: "Weather App",
      desc: "React weather application",
    },
    {
      title: "Movie App",
      desc: "Search movies using API",
    },
    {
      title: "Portfolio",
      desc: "Personal portfolio website",
    },
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <div className="card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            <button>View Project</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;