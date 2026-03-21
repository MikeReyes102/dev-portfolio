const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        marginTop: "4rem"
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "2rem 0",
            flexWrap: "wrap",
            gap: "1rem"
          }}
        >
          {/* Brand / Copyright */}
          <p style={{ fontSize: "0.875rem" }}>
            © {year} BrandName. All rights reserved.
          </p>

          {/* Footer Links */}
          <ul
            style={{
              display: "flex",
              gap: "1.25rem",
              listStyle: "none",
              fontSize: "0.875rem"
            }}
          >
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
      </div>
    </footer>
  )
}

export default Footer
