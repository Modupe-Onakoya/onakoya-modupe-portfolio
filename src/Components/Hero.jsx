import React from 'react'
import { useState, useRef, useEffect } from 'react'
import HeroText from './HeroText'
import Links from './Links'
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

        <header className='flex flex-col items-center px-4 text-white bg-[#0B0D10]'>


            <div className="flex flex-wrap items-center justify-center gap-2 px-2 py-1 mt-30 rounded-full border border-zinc-200">
                <div className='flex items-center gap-2 border border-zinc-200 rounded-full px-2 py-1.5'>
                    <div className="relative flex size-3.5 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[#E8A33D] opacity-75 animate-ping duration-300"></span>
                        <span className="relative inline-flex size-2 rounded-full bg-[#E8A33D]"></span>
                    </div>
                    <p className='text-xs text-[#E8A33D]'>Live now</p>
                </div>
                <p className="text-xs text-white">Available for work</p>
            </div>
            {/* <h1 className='text-5xl md:text-[70px]/18 text-center max-w-[1000px] mt-4 bg-clip-text leading-tight font-medium'>A Frontend Developer </h1> */}
            <HeroText />
            <p className="text-[#6E7681] text-center sm:max-w-[500px] lg:pt-3 text-[13px] sm:text-base max-w-[300px]">
                I build modern, responsive web interfaces with React, Next.js, TypeScript, and Tailwind CSS, focused on creating clean, scalable, and user-friendly experiences.
            </p>

            <div className='flex gap-4 mt-9 mb-3'>
                <button className="bg-[#E8A33D] hover:bg-zinc-800 text-white text-sm sm:px-6 sm:py-3  py-1 px-3 rounded-lg sm:rounded-2xl transition cursor-pointer">
                    <a href="#projects"> View Projects</a>
                </button>
                <button className="bg-white text-black border  hover:bg-zinc-800 hover:text-white border-zinc-200 hover:border-zinc-300 text-sm rounded-lg sm:px-5 sm:py-3 px-3 py-1 sm:rounded-2xl transition cursor-pointer">
                    <a href="#contact"> Get in touch</a>
                </button>
            </div>
            <Links />


        </header>
    )
}

export default Hero