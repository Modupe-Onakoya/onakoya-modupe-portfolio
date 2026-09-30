import { assets } from "../assets/assets";
import { motion } from "motion/react";

export default function About() {
    return (
        <section id="about" className="px-6 py-16 border-t border-zinc-300 dark:border-border" >
            <div className="max-w-[880px] mx-auto">
                <div className="flex items-baseline gap-3 mb-9">
                    <span className="font-mono text-xs text-faint">01</span>
                    <h2 className="text-[22px] font-bold text-[#0F172A] dark:text-ink">About</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-10 items-start">
                    <div className=" text-[15px] font-sans max-w-[68ch] space-y-3.5">
                        <motion.p
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}

                            className="sm:text-lg  text-[#0F172A] dark:text-[#EDEFF2] mb-5 leading-relaxed">
                            I'm a frontend developer who enjoys turning ideas into intuitive, polished digital experiences.
                            I value clean architecture, thoughtful design, and writing code that's easy to understand, maintain,
                            and improve over time. Beyond functionality, I pay close attention to interactions and animations that make
                            interfaces feel smooth, engaging, and intuitive. Whether I'm building a landing page or a larger web application,

                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                            className="text-[#64748B] dark:text-dim">
                            Beyond coding, I'm committed to continuous learning and refining my craft.
                            I enjoy exploring modern web technologies, improving my problem-solving skills,
                            and challenging myself with projects that push my understanding further.
                            My goal is to build products that not only look great but also deliver meaningful,
                            reliable experiences for the people who use them.
                        </motion.p>
                    </div>

                    {/* Image space */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}

                        className="w-full md:w-[260px] dark:bg-surface border border-zinc-300 dark:border-border rounded-md overflow-hidden shrink-0">
                        <div className="flex items-center gap-2 px-3 py-2 dark:bg-surface2 border-b border-zinc-300  dark:border-border">
                            <span className="w-2 h-2 rounded-full bg-del" />
                            <span className="w-2 h-2 rounded-full bg-[#E8A33D]" />
                            <span className="w-2 h-2 rounded-full bg-add" />
                            <span className="ml-1.5 font-mono text-[11px] text-[#64748B] dark:text-faint">
                                profile.jpg
                            </span>
                        </div>
                        <div className="aspect-[4/5] w-full bg-surface2">
                            <img
                                src={assets.profile}
                                alt="Your Name"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    );
}