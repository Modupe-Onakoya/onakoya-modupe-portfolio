import React from 'react'
import { assets } from '../assets/assets'
import { div } from 'motion/react-client';
import { motion } from 'motion/react'


const profile = {
    aboutParagraphs: [
        "I'm a frontend developer who enjoys turning ideas into intuitive, polished digital experiences. I value clean architecture, thoughtful design, and writing code that's easy to understand, maintain, and improve over time. Beyond functionality, I pay close attention to interactions and animations that make interfaces feel smooth, engaging, and intuitive. Whether I'm building a landing page or a larger web application, I focus on creating experiences that balance performance, usability, and attention to detail.",
    ],
    aboutParagraphsMuted: [
        "Beyond coding, I'm committed to continuous learning and refining my craft. I enjoy exploring modern web technologies, improving my problem-solving skills, and challenging myself with projects that push my understanding further. My goal is to build products that not only look great but also deliver meaningful, reliable experiences for the people who use them.",
    ],
    stack: [
        { role: "interface", tools: "React, TypeScript" },
        { role: "styling", tools: "Tailwind CSS" },
        { role: "framework", tools: "Next.js" },
        { role: "markup", tools: "Semantic HTML5" },
        { role: "tooling", tools: "Git & Github, Vite, Framer Motion" },
    ],
};

const About = () => {






    return (
        <div

            className='px-8 sm:px-15  bg-white dark:bg-[#0B0D10]'>
            <section
                id="about"
                className="py-24 border-t border-zinc-200 dark:border-[#1F242B]  mx-auto mt-20  w-full "
            >
                {/* Section label */}
                <p className=" text-[15px] text-[#6E7681] mb-12 flex items-baseline gap-3">
                    <span className="text-[#5C84B5]">About Me</span>
                </p>

                {/* Three column grid */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr_1fr] gap-8 md:gap-12 items-start">

                    {/* Avatar */}
                    <div className=" w-full max-w-[220px] md:max-w-none aspect-[4/5] rounded-md overflow-hidden border border-zinc-200 dark:border-[#1F242B] bg-[#12151A] group">
                        <motion.img
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            src={assets.profile}
                            alt="Profile photo placeholder — swap for your own"
                            className="w-full h-full object-cover grayscale-[15%] contrast-[1.05] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.03]"
                        />

                    </div>

                    {/* Bio text */}
                    <div>
                        {profile.aboutParagraphs.map((p, i) => (
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}

                                key={i} className="sm:text-lg text-black dark:text-[#EDEFF2] mb-5 leading-relaxed">
                                {p}
                            </motion.p>
                        ))}
                        {profile.aboutParagraphsMuted.map((p, i) => (
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                key={i} className="text-base text-[#6E7681] leading-relaxed">
                                {p}
                            </motion.p>
                        ))}
                    </div>

                    {/* Stack list */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col">
                        {profile.stack.map((row, i) => (
                            <div
                                key={row.role}
                                className={`flex justify-between py-3.5 border-b border-zinc-200 dark:border-[#1F242B] font-mono text-[13px] ${i === 0 ? "border-t border-[#1F242B]" : ""
                                    }`}
                            >
                                <span className="text-black dark:text-[#6E7681]">{row.role}</span>
                                <span className="text-black dark:text-[#EDEFF2] text-right">{row.tools}</span>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </section>
        </div>
    );
}



export default About