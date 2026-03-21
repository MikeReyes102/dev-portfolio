import '../../styles/Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>.nova development</h1>
          <h2>
            Where real-world applications are built — not just projects.
          </h2>

          <p className="hero-subtext">
            Full stack developer specializing in C#/.NET and React, focused on building
            secure systems, clean APIs, and scalable architecture.
          </p>

          <p className="hero-tagline">
            Currently building a mobile POS system and diving deeper into backend architecture.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>

            <a href="https://github.com/mikereyes102" className="btn btn-outline">
              GitHub
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
