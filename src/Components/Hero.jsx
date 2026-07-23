import React from 'react'
import { useState, useRef, useEffect } from 'react'
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
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    *{ font-family: "Geist", sans-serif; }
                `}
            </style>

            <header className='flex flex-col items-center px-4 py-4 text-white'>


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

                <h1 className='text-5xl md:text-[70px]/18 text-center max-w-[800px] mt-4 bg-clip-text leading-tight font-medium'>Frontend Developer </h1>
                <p className="text-base text-[#6E7681] text-center max-w-[500px] mt-3">
                    I build modern, responsive web interfaces with React and Tailwind CSS, focused on creating clean, scalable, and user-friendly experiences.
                </p>

                <div className='flex gap-4 mt-9'>
                    <button className="bg-zinc-950 hover:bg-zinc-800 text-white text-sm px-6 py-3 rounded-2xl transition cursor-pointer">
                        View Projects
                    </button>
                    <button className="bg-white text-black border border-zinc-200 hover:border-zinc-300 text-sm px-5 py-3 rounded-2xl transition cursor-pointer">
                        Get in touch
                    </button>
                </div>


            </header>
        </>
    )
}

export default Hero