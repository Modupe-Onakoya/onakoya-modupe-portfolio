import About from "./Components/About"
import Contact from "./Components/Contact"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Projects from "./Components/Projects"
import { useState } from "react"
import Stack from "./Components/Stack"
import Experience from "./Components/Experience"

function App() {

  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : 'dark')


  return (
    <div className="dg-white dark:bg-[#0B0D10] pt-5  ">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Experience />
      <Contact />
      {/* <Footer /> */}
    </div>
  )
}

export default App
