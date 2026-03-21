import '../../styles/Footer.css'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Brand / Copyright */}
        <p className="footer-copy">
          © {year} .nova development.
        </p>

        {/* Footer Links */}
        <ul className="footer-links">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer