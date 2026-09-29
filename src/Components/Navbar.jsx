import React, { useState, useEffect, useRef } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'
import ThemeToggleBtn from './ThemeToggleBtn'

const NAV_ITEMS = [
    { id: 'about', label: '~/about' },
    { id: 'stack', label: '~/stack' },
    { id: 'work', label: '~/work' },
    { id: 'log', label: '~/log' },
    { id: 'contact', label: '~/contact' },
]

const Navbar = ({ theme, setTheme }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isBlur, setIsBlur] = useState(false)
    const [isScroll, setIsScroll] = useState(false)
    const [active, setActive] = useState('about')
    const sectionRefs = useRef({})

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto'
        return () => { document.body.style.overflow = 'auto' }
    }, [isOpen])

    useEffect(() => {
        NAV_ITEMS.forEach(({ id }) => {
            sectionRefs.current[id] = document.getElementById(id)
        })

        function handleScroll() {
            const y = window.scrollY
            setIsBlur(y > 50)
            setIsScroll(y > 400)

            let closestId = active
            let closestDist = Infinity
            NAV_ITEMS.forEach(({ id }) => {
                const el = sectionRefs.current[id]
                if (!el) return
                const dist = Math.abs(el.getBoundingClientRect().top - 120)
                if (dist < closestDist) {
                    closestDist = dist
                    closestId = id
                }
            })
            setActive(closestId)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="flex justify-center mx-auto z-100">
            <motion.nav
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className={`fixed flex items-center border max-md:justify-between
                border-zinc-200 dark:border-border
                bg-white dark:bg-bg
                text-black dark:text-ink
                px-4 py-2 rounded-full text-xs font-mono w-fit mx-auto z-100 transition-all duration-300
                ${isBlur ? 'shadow-[0_8px_24px_-12px_rgba(0,0,0,0.25)] dark:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.5)] backdrop-blur-md' : 'backdrop-blur-sm'}`}
            >
                <div className="hidden md:flex items-center gap-5">
                    {NAV_ITEMS.map(({ id, label }) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className={`relative overflow-hidden h-5 group transition-colors ${active === id
                                ? 'text-accent'
                                : 'text-[#0F172A] dark:text-dim'
                                }`}
                        >
                            <span className="block group-hover:-translate-y-full transition-transform duration-300">{label}</span>
                            <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">{label}</span>
                        </a>
                    ))}
                </div>

                <div className="hidden ml-6 md:flex items-center gap-2.5">
                    <a
                        href="/Onakoya cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0F172A] border border-zinc-200 dark:border-border hover:border-zinc-400 dark:hover:border-dim
                        text-black dark:text-dim hover:text-black dark:hover:text-ink
                        px-3.5 py-1.5 rounded-full text-xs font-mono transition"
                    >
                        Resume
                    </a>
                    <a
                        href="mailto:onakoyamodupe0@gmail.com"
                        className="bg-accent text-[#F2F6FF] px-3.5 py-1.5 rounded-full text-xs font-mono transition hover:opacity-90"
                    >
                        Let's work
                    </a >
                    <ThemeToggleBtn theme={theme} setTheme={setTheme} />
                </div >

                {/* mobile trigger row */}
                < div className="md:hidden flex items-center gap-3" >
                    <button
                        id="menuToggle"
                        className="text-zinc-600 dark:text-dim"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                            strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <a
                        href="mailto:onakoyamodupe0@gmail.com"
                        className="bg-accent text-[#F2F6FF] px-2.5 py-1 rounded-full text-xs font-mono transition"
                    >
                        Let's work
                    </a >
                    <ThemeToggleBtn theme={theme} setTheme={setTheme} />
                </div >
            </motion.nav >

            {/* Mobile full-screen menu — rendered OUTSIDE motion.nav so `fixed` sizes against the real viewport */}
            < div
                id="mobileMenu"
                className={`${isOpen ? 'translate-y-0' : '-translate-y-full'} fixed inset-0 w-full h-dvh
                bg-white dark:bg-bg text-[#0F172A] dark:text-ink
                text-base flex flex-col md:hidden items-center py-20 gap-6 font-mono
                overflow-y-auto transition-transform duration-500 z-[100]`}
            >
                <img src={assets.closeIcon} alt="Close menu" onClick={() => setIsOpen(false)} className="cursor-pointer absolute top-6 right-6" />
                {
                    NAV_ITEMS.map(({ id, label }) => (
                        <a key={id} className="hover:text-accent text-lg" href={`#${id}`} onClick={() => setIsOpen(false)}>
                            {label}
                        </a>
                    ))
                }
                <a
                    href="/Onakoya cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-zinc-200 text-[#0F172A] dark:border-border hover:border-zinc-400 dark:hover:border-dim px-4 py-2 rounded-full text-sm font-mono transition mt-2"
                    onClick={() => setIsOpen(false)}
                >
                    Resume
                </a >
            </div >

            {isScroll && (
                <a href="#" className="fixed bottom-5 right-5 z-100">
                    <img
                        src={assets.up_arrow}
                        className="w-10 h-10 rounded-full bg-accent p-3"
                        alt="Back to top"
                    />
                </a>
            )}
        </div >
    )
}

export default Navbar