const Navbar = () => {
  return (
    <header>
      <div className="container">
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1.5rem 0"
          }}
        >
          {/* Brand */}
          <div style={{ fontWeight: 700, fontSize: "1.125rem" }}>
            BrandName
          </div>

          {/* Nav Links */}
          <ul
            style={{
              display: "flex",
              gap: "1.5rem",
              listStyle: "none"
            }}
          >
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          {/* CTA */}
          <button className="btn btn-primary">Get Started</button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
