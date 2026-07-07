function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>Let&apos;s build something great together.</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <p>Have a project in mind or want to discuss collaboration?</p>
          <p>Email: abhinav@example.com</p>
          <p>Location: India</p>
        </div>

        <div className="contact-card">
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;