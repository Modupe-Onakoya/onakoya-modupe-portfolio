import About from "./Components/About"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Hover from "./Components/Hover"
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects"


function App() {

  return (
    <div className="bg-[#0B0D10] pt-5  ">
      <Navbar />
      <Hero />
      <About />
      <Projects />

      <Contact />
      <Footer />
    </div>
  )
}

export default App
