import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <h1>Hi, I'm <span>Abhinav Srivastava</span></h1>
        <br />
        <h3>React Developer</h3>
        <br />

        <p>
          I build modern, responsive and high-performance web applications.
        </p>

        <div className="buttons">
          <button>Download CV</button>
          <button className="outline">Contact Me</button>
        </div>
      </div>

      <div className="hero-right">
        <img src={profile} alt="profile" />
      </div>
    </section>
  );
}

export default Hero;