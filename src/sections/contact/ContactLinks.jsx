function ContactLinks() {

  return (
    <section className="contact-card">

      <div className="contact-item">

        <h3>
          Email
        </h3>

        <a href="mailto:Michael.reyescasanova@gmail.com">
          Michael.reyescasanova@gmail.com
        </a>

      </div>


      <div className="contact-item">

        <h3>
          LinkedIn
        </h3>

        <a
          href="https://www.linkedin.com/in/michaelreyescasanova"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/michaelreyescasanova
        </a>

      </div>


      <div className="contact-item">

        <h3>
          GitHub
        </h3>

        <a
          href="https://github.com/MikeReyes102"
          target="_blank"
          rel="noreferrer"
        >
          View my projects
        </a>

      </div>


    </section>
  );
}

export default ContactLinks;