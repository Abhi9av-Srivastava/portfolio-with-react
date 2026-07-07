import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <p className="eyebrow">Hello, I&apos;m</p>
        <h1>Abhinav Srivastava</h1>
        <h2>React Developer & Frontend Engineer</h2>
        <p>
          I design and build modern, responsive web experiences with clean UI,
          thoughtful interactions, and dependable performance.
        </p>

        <div className="buttons">
          <a href="#contact" className="btn btn-primary">Hire Me</a>
          <a href="#projects" className="btn btn-secondary">View Projects</a>
        </div>
      </div>

      <div className="hero-image">
        <img src={profile} alt="Abhinav Srivastava" />
      </div>
    </section>
  );
}

export default Hero;