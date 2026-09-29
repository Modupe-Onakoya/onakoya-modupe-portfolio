import { useEffect, useRef } from "react";
import { motion } from "motion/react";

const NAME = "Onakoya Modupe";
const ROLE = "Frontend Developer";

export default function Hero({ onNavigate }) {
    const typedNameRef = useRef(null);
    const typedRoleRef = useRef(null);

    useEffect(() => {
        const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReduced) {
            if (typedNameRef.current) typedNameRef.current.textContent = NAME;
            if (typedRoleRef.current) typedRoleRef.current.textContent = ROLE;
            return;
        }

        let cancelled = false;

        function typeInto(el, text, speed, cursorAfter) {
            return new Promise((resolve) => {
                if (!el) return resolve();
                let i = 0;
                el.textContent = "";
                let cursor = null;
                if (cursorAfter) {
                    cursor = document.createElement("span");
                    cursor.className = "inline-block w-[10px] h-[1.1em] bg-accent align-text-bottom animate-blink ml-[2px]";
                    el.appendChild(cursor);
                }
                function step() {
                    if (cancelled) return resolve();
                    if (i < text.length) {
                        const char = text.charAt(i);
                        if (cursorAfter && cursor) {
                            el.insertBefore(document.createTextNode(char), cursor);
                        } else {
                            el.textContent += char;
                        }
                        i += 1;
                        setTimeout(step, speed);
                    } else {
                        resolve();
                    }
                }
                step();
            });
        }

        (async () => {
            await typeInto(typedNameRef.current, NAME, 55, false);
            if (cancelled) return;
            await typeInto(typedRoleRef.current, ROLE, 30, true);
        })();

        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <motion.section className="px-6 pt-30 pb-18"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="max-w-[880px] mx-auto">
                <div className="dark:bg-surface border border-zinc-300 dark:border-border rounded-md shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] overflow-hidden">
                    <div className="flex items-center gap-2 px-3.5 py-2.5 dark:bg-surface2 border-b border-zinc-300 dark:border-border">
                        <span className="w-2.5 h-2.5 rounded-full bg-del" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#E8A33D]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-add" />
                        <span className="ml-2 font-mono text-xs text-[#0F172A] dark:text-faint">zsh — whoami</span>
                    </div>

                    <div className="px-6 pt-7 pb-8 font-mono">
                        <div className="text-dim text-sm mb-1.5">
                            <span className="text-add">➜</span> ~ whoami
                        </div>
                        <div
                            ref={typedNameRef}
                            className="text-[clamp(32px,6vw,56px)] text-[#0F172A] font-extrabold dark:text-ink my-2 min-h-[1.2em]"
                        />
                        <div
                            ref={typedRoleRef}
                            className="text-[clamp(15px,2.2vw,18px)] text-accent font-medium"
                        />
                    </div>
                </div>

                <p className="max-w-[60ch] mt-6 dark:text-dim text-[15px] font-sans text-[#64748B]">
                    I build intuitive, responsive web experiences that combine thoughtful design, clean architecture,
                    and smooth interactions. I enjoy turning complex ideas into simple, functional products while
                    continuously looking for ways to improve the user experience.
                    {/* <strong className="text-ink">Company Name</strong>. Based in City, Country. */}
                </p>

                <div className="flex flex-wrap gap-3 mt-7">
                    <a
                        href="#work"

                        className="font-mono text-[13px] font-bold px-[18px] py-2.5 rounded-md bg-accent text-[#F2F6FF] border border-accent transition-transform hover:-translate-y-0.5"
                    >
                        View work
                    </a>
                    <a
                        href="/Onakoya cv.pdf"
                        className="font-mono text-[13px] px-[18px] py-2.5 rounded-md text-[#0F172A] dark:text-dim border border-zinc-300 dark:border-border transition-colors hover:text-ink hover:border-dim"
                    >
                        Download résumé
                    </a>
                    <a
                        href="#contact"

                        className="font-mono text-[13px] px-[18px] py-2.5 rounded-md text-[#0F172A] dark:text-dim border border-zinc-300 dark:border-border transition-colors hover:text-ink hover:border-dim"
                    >
                        Get in touch
                    </a>
                </div>
            </div>
        </motion.section>
    );
}