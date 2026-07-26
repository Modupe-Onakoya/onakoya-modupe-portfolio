import React from 'react'
import { useState, useRef, useEffect } from 'react'
import HeroText from './HeroText'
import Links from './Links'
import { motion } from 'motion/react'
const Hero = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const dashboardRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            if (dashboardRef.current) {
                const scrolled = window.scrollY;
                // Calculate progress from 0 to 1 over 400px of scrolling (slower, smoother)
                const progress = Math.min(1, scrolled / 400);

                const tilt = 15 * (1 - progress);
                const scale = 0.95 + (0.05 * progress);
                // mt-7 is 28px, mt-12 is 48px
                const marginTop = 28 + (20 * progress);

                dashboardRef.current.style.transform = `perspective(1000px) rotateX(${tilt}deg) scale(${scale})`;
                dashboardRef.current.style.marginTop = `${marginTop}px`;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);




    return (

        <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className='flex flex-col items-center px-8 text-black dark:text-white bg-white dark:bg-[#0B0D10] ' >


            <div className="flex flex-wrap items-center justify-center gap-2 px-2 py-1 mt-30 rounded-full border border-zinc-200">
                <div className='flex items-center gap-2 border border-zinc-200 rounded-full px-2 py-1.5'>
                    <div className="relative flex size-3.5 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[#FF6B4A] opacity-75 animate-ping duration-300"></span>
                        <span className="relative inline-flex size-2 rounded-full bg-[#FF6B4A]"></span>
                    </div>
                    <p className='text-xs text-[#FF6B4A]'>Live now</p>
                </div>
                <p className="text-xs ">Available for work</p>
            </div>
            <div className=''>

                {/* <h1 className='text-5xl md:text-[70px]/18 text-center max-w-[1000px] mt-4 bg-clip-text leading-tight font-medium'>A Frontend Developer </h1> */}
                <p className=' max-sm:text-[30px] text-[clamp(36px,7vw,92px)] text-center  leading-none pt-10 sm:pt-7 text-[#6E7681]'>Hi there,</p>
                <HeroText />
            </div>

            <p className="text-[#6E7681] text-center sm:max-w-[500px] lg:pt-3 text-[12px] sm:text-base max-w-[250px]">
                I build modern, responsive web interfaces with React, Next.js, TypeScript, and Tailwind CSS, focused on creating clean, scalable, and user-friendly experiences.
            </p>

            <div className='flex gap-4 mt-7 mb-2'>
                <button className="bg-[#FF6B4A]  hover:bg-[#6E7681]  text-white text-sm sm:px-6 sm:py-3  py-2 px-4 rounded-lg sm:rounded-2xl transition cursor-pointer">
                    <a href="#projects"> View Projects</a>
                </button>
                <button className="bg-white text-black border  hover:bg-[#6E7681] hover:text-white border-zinc-200 hover:border-none text-sm rounded-lg sm:px-5 sm:py-3 px-4  sm:rounded-2xl transition cursor-pointer">
                    <a href="#contact" className="hidden md:block"> Get in touch</a>
                    <a href="/Onakoya1.pdf" target="_blank" rel="noopener noreferrer" className=' md:hidden'> Resume</a>

                </button>
            </div>
            <Links />


        </motion.header >
    )
}

export default Hero