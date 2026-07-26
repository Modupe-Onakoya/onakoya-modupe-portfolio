import About from "./Components/About"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Hover from "./Components/Hover"
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects"
import { useState } from "react"

function App() {

  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : 'dark')


  return (
    <div className="dg-white dark:bg-[#0B0D10] pt-5  ">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Projects />

      <Contact />
      <Footer />
    </div>
  )
}

export default App
