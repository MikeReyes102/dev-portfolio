import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import Footer from "./components/layout/Footer"
import Projects from "./components/sections/Projects"

function App() {
  return (
    <>
      <Navbar />

      <main className="main">
        <Hero />
        <Projects />
      </main>

      <Footer />
    </>
  )
}

export default App