function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact Me</h2>

      <form>
        <input type="text" placeholder="Name" />

        <input type="email" placeholder="Email" />

        <textarea placeholder="Message"></textarea>

        <button>Send</button>
      </form>
    </section>
  );
}

export default Contact;