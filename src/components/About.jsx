function About() {
  return (
    <section id="about" className="section">
      <div className="section-heading">
        <p className="eyebrow">About me</p>
        <h2>Crafting thoughtful digital experiences.</h2>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <p>
            I&apos;m a passionate frontend developer with a strong focus on building
            polished interfaces, responsive layouts, and accessible web applications.
          </p>
          <p>
            My work blends clean design, performance, and modern React architecture to
            deliver products that feel seamless and engaging.
          </p>
        </div>

        <div className="about-card">
          <div className="about-list">
            <div><span>Name:</span> Abhinav Srivastava</div>
            <div><span>Email:</span> abhinav@example.com</div>
            <div><span>Phone:</span> +91 98765 43210</div>
            <div><span>Location:</span> India</div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;