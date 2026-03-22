import { useEffect, useState } from 'react'
import '../../styles/Navbar.css'

const sections = ["projects", "about", "contact"]

const Navbar = () => {
  const [active, setActive] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 

      let current = ""

      sections.forEach((section) => {
        const el = document.getElementById(section)
        if (!el) return

        if (scrollPosition >= el.offsetTop) {
          current = section
        }
      })

      setActive(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a href="#hero" className="logo">.nova</a>

        <nav>
          <ul className="nav-links">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={active === section ? "active" : ""}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
