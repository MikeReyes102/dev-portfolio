import '../../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container contact-container">
        <h2>Contact</h2>

        <p className="contact-subtext">
          Have a project in mind or just want to connect? Feel free to reach out.
        </p>

        <div className="contact-actions">
          <a
            href="mailto:youremail@example.com"
            className="btn btn-primary"
          >
            Email Me
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="btn btn-outline"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact