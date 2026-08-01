import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'
import ThemeToggleBtn from "./ThemeToggleBtn";


const Navbar = ({ theme, setTheme }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isBlur, setIsBlur] = useState(false)
    const [isScroll, setIsScroll] = useState(false)



    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);
    useEffect(() => {

        function handleScroll() {
            setIsBlur(window.scrollY > 50);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        function scroll() {
            if (scrollY > 400) {
                setIsScroll(true)
            }
            else {
                setIsScroll(false)
            }
        }
        window.addEventListener("scroll", scroll);
        return () => window.removeEventListener("scroll", scroll);
    }, [])

    return (
        <div

            className={`flex justify-center mx-auto z-100 `} >
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
                className={` bg-white dark:bg-[#0B0D10] fixed flex items-center border blur-75  max-md:justify-between border-zinc-200 dark:border-slate-700
                 px-6 py-4 rounded-full text-black dark:text-white text-sm w-fit mx-auto z-100`}>

                <div className="hidden md:flex items-center gap-6 ml-7 ">
                    <a href="#" className="relative overflow-hidden h-6 group">
                        <span className="block group-hover:-translate-y-full transition-transform duration-300 ">Home</span>
                        <span
                            className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300 ">Home</span>
                    </a>
                    <a href="#about" className="relative overflow-hidden h-6 group">
                        <span className="block group-hover:-translate-y-full transition-transform duration-300">About</span>
                        <span
                            className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">About</span>
                    </a>
                    <a href="#about" className="relative overflow-hidden h-6 group">
                        <span className="block group-hover:-translate-y-full transition-transform duration-300">Tech Stack</span>
                        <span
                            className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Tech Stack</span>
                    </a>
                    <a href="#projects" className="relative overflow-hidden h-6 group">
                        <span className="block group-hover:-translate-y-full transition-transform duration-300">Project</span>
                        <span
                            className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Project</span>
                    </a>
                    <a href="#contact" className="relative overflow-hidden h-6 group">
                        <span className="block group-hover:-translate-y-full transition-transform duration-300">Contact</span>
                        <span
                            className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">Contact</span>
                    </a>

                </div>

                <div className="hidden ml-14 md:flex items-center gap-4">


                    <button
                        className="border border-zinc-200 dark:border-slate-600 hover:text-white hover:bg-[#6E7681] px-4 py-2 rounded-full text-sm font-medium transition">
                        <a href="/Onakoya cv.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
                    </button>
                    <button
                        className="dark:bg-white bg-black text-white dark:text-black hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-[#FF6B4A] dark:hover:bg-slate-100 transition duration-300">
                        <a href="mailto:onakoyamodupe0@gmail.com">
                            Lets work
                        </a>
                    </button>
                    <ThemeToggleBtn theme={theme} setTheme={setTheme} />


                </div>
                {/* mobile */}
                <div className='md:hidden  flex space-x-10'>
                    <button id="menuToggle" className="md:hidden text-gray-600  " onClick={() => setIsOpen(!isOpen)}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <button
                        className=" bg-[#FF6B4A]  text-white dark:text-black dark:bg-white my-auto hover:shadow-[0px_0px_30px_14px] md:hidden shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-2 py-1 rounded-lg text-sm font-medium dark:hover:bg-slate-100 transition duration-300">
                        <a href="mailto:onakoyamodupe0@gmail.com">
                            Lets work
                        </a>
                    </button>

                    <ThemeToggleBtn theme={theme} setTheme={setTheme} />

                </div>


                <div id="mobileMenu" className={` ${isOpen ? "translate-y-0" : "-translate-y-full"} fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500`}>
                    <img src={assets.closeIcon} alt="" onClick={() => setIsOpen(!isOpen)} />
                    <a className="hover:text-indigo-600 " href="#" onClick={() => setIsOpen(!isOpen)}>
                        Home
                    </a>
                    <a className="hover:text-indigo-600" href="#about" onClick={() => setIsOpen(!isOpen)}>
                        About
                    </a>
                    <a className="hover:text-indigo-600" href="#about" onClick={() => setIsOpen(!isOpen)}>
                        Tech Stack
                    </a>
                    <a className="hover:text-indigo-600" href="#projects" onClick={() => setIsOpen(!isOpen)}>
                        Projects
                    </a>
                    <a className="hover:text-indigo-600" href="#contact" onClick={() => setIsOpen(!isOpen)}>
                        Contact
                    </a>

                    <button
                        className="border border-zinc-200  hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition shadow-md ">
                        <a href="/Onakoya cv.pdf" target="_blank" rel="noopener noreferrer">Resume</a>

                    </button>

                </div>
            </motion.nav >
            {isScroll &&
                <a href='#'><img src={assets.up_arrow} className='w-10 h-10 rounded-full bg-[#FF6B4A] light:bg-white p-3 fixed bottom-5 right-5 z-100  ' /></a>
            }
        </div>


    )
}

export default Navbar