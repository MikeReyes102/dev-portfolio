import '../../styles/Contact.css';

const Contact = () => {
  return (
<section id="contact" className="contact section">
  <div className="container contact-container">
    <h2>Contact Me</h2>

    <form className="contact-form">
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Message" rows="5" />
      <button type="submit" className="btn btn-primary">Send Message</button>
    </form>
  </div>
</section>
  )
}

export default Contact