import React from 'react'
import { assets } from '../assets/assets'

const About = () => {





    const PROFILE = {
        aboutParagraphs: [
            "I started by pulling apart pages in DevTools to see how they were built. That habit never really left — I still care more about how a component is structured than how it looks at first glance, because structure is what determines whether it survives six months of changes.",
        ],
        aboutParagraphsMuted: [
            "Most of my work lives at the intersection of design and engineering: turning a flat mockup into a system of components that can flex, scale, and get handed off without a manual.",
        ],
        stack: [
            { role: "interface", tools: "React, TypeScript" },
            { role: "styling", tools: "Tailwind CSS" },
            { role: "framework", tools: "Next.js" },
            { role: "markup", tools: "Semantic HTML5" },
            { role: "tooling", tools: "Git, Vite, ESLint" },
        ],
    };


    return (
        <section
            id="about"
            className="py-24 border-t border-[#1F242B]  mx-auto px-8 bg-[#0B0D10] w-full"
        >
            {/* Section label */}
            <p className=" text-[13px] text-[#6E7681] mb-12 flex items-baseline gap-3">
                <span className="text-[#3a4048]">//</span>
                <span className="text-[#5C84B5]">about</span>
            </p>

            {/* Three column grid */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr_1fr] gap-8 md:gap-12 items-start">

                {/* Avatar */}
                <div className="relative w-full max-w-[220px] md:max-w-none aspect-[4/5] rounded-md overflow-hidden border border-[#1F242B] bg-[#12151A] group">
                    <img
                        src={assets.profile}
                        alt="Profile photo placeholder — swap for your own"
                        className="w-full h-full object-cover grayscale-[15%] contrast-[1.05] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.03]"
                    />
                    <span className="absolute bottom-3 left-3 font-mono text-[11px] text-[#EDEFF2] bg-[#0B0D0F]/75 border border-[#1F242B] backdrop-blur-sm px-2.5 py-1.5 rounded-[3px] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3ddc84] inline-block" />
                        swap me
                    </span>
                </div>

                {/* Bio text */}
                <div>
                    {PROFILE.aboutParagraphs.map((p, i) => (
                        <p key={i} className="text-lg text-[#EDEFF2] mb-5 leading-relaxed">
                            {p}
                        </p>
                    ))}
                    {PROFILE.aboutParagraphsMuted.map((p, i) => (
                        <p key={i} className="text-base text-[#6E7681] leading-relaxed">
                            {p}
                        </p>
                    ))}
                </div>

                {/* Stack list */}
                <div className="flex flex-col">
                    {PROFILE.stack.map((row, i) => (
                        <div
                            key={row.role}
                            className={`flex justify-between py-3.5 border-b border-[#1F242B] font-mono text-[13px] ${i === 0 ? "border-t border-[#1F242B]" : ""
                                }`}
                        >
                            <span className="text-[#6E7681]">{row.role}</span>
                            <span className="text-[#EDEFF2] text-right">{row.tools}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}



export default About