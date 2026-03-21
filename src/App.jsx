import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import Footer from "./components/layout/Footer"

function App() {
  return (
    <>
      <Navbar />

      <main className="main">
        <Hero />
      </main>

      <Footer />
    </>
  )
}

export default App