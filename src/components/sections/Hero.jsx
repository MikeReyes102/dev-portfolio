const Hero = () => {
  return (
    <section className="section">
      <div className="container">
        <div style={{ maxWidth: "600px" }}>
          <h1>Simple. Modern. Effective.</h1>

          <p style={{ marginTop: "1rem" }}>
            A clean landing page template built for speed,
            clarity, and easy customization.
          </p>

          <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-outline">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
