import { useEffect, useRef } from "react";
import { motion } from "motion/react";

const NAME = "Onakoya Modupe";
const ROLE = "Frontend Engineer";
const IconGithub = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.04-.72.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.77.12 3.06.74.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
);

const IconLinkedin = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
);

const IconX = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M18.9 2h3.3l-7.2 8.2L23.4 22h-6.6l-5.2-6.8L5.6 22H2.3l7.7-8.8L1.6 2h6.8l4.7 6.2L18.9 2Zm-1.2 18h1.8L7.4 4h-2l12.3 16Z" />
    </svg>
);

const IconWhatsapp = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35ZM12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.96 9.96 0 0 0 12.02 22C17.53 22 22 17.52 22 12S17.53 2 12.02 2Zm0 18.08c-1.7 0-3.28-.5-4.6-1.36l-.33-.2-3.01.79.8-2.93-.21-.34a8.08 8.08 0 0 1-1.25-4.34c0-4.47 3.64-8.1 8.1-8.1 4.47 0 8.1 3.63 8.1 8.1 0 4.47-3.63 8.1-8.1 8.1Z" />
    </svg>
);

const IconMail = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
    </svg>
);
const LINKS = [
    { href: "mailto:onakoyamodupe0@gmail.com", label: "Email", Icon: IconMail },
    { href: "https://github.com/Modupe-Onakoya", label: "GitHub", Icon: IconGithub },
    { href: "https://www.linkedin.com/in/modupe-onakoya", label: "LinkedIn", Icon: IconLinkedin },
    { href: "https://twitter.com/@dhuks__", label: "X", Icon: IconX },
    { href: "https://wa.me/2349066291370", label: "WhatsApp", Icon: IconWhatsapp },
];
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
                <div className="flex items-center gap-5 mt-6 flex-wrap">
                    {LINKS.map(({ href, label, Icon }) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith("mailto:") ? undefined : "_blank"}
                            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                            aria-label={label}
                            className="text-dim hover:text-accent transition-colors"
                        >
                            <Icon className="w-[18px] h-[18px]" />
                        </a>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}