import { useState } from "react"

// Importing components
import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import Footer from "./components/layout/Footer"
import Projects from "./components/sections/Projects"
import About from "./components/sections/About"
import Contact from "./components/sections/Contact"


function App() {
  return (
    <>
      <Navbar />

      <main className="main">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App