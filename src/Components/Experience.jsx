import { motion } from "motion/react";


const EXPERIENCE = [
    {
        hash: "a1b2c3d",
        title: "Internship @ Terrahq",
        meta: "January 2026 — April 2026",
        body: "Worked closely with senior developers to design and implement user-centric features, translating business requirements into functional enhancements that met user needs and expectations.  ",
    },
    // {
    //     hash: "e4f5a6b",
    //     title: "Software Engineer @ Previous Company",
    //     meta: "2021 — 2023",
    //     body: "One or two lines on scope and impact.",
    // },
    // {
    //     hash: "c7d8e9f",
    //     title: "B.Sc. Computer Science, University Name",
    //     meta: "2017 — 2021",
    //     body: "Relevant coursework, thesis, or achievements worth a mention.",
    // },
];

export default function Experience() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            id="log" className="px-6 py-16 border-t border-zinc-300 dark:border-border">
            <div className="max-w-[880px] mx-auto">
                <div className="flex items-baseline gap-3 mb-9">
                    <span className="font-mono text-xs text-faint">04</span>
                    <h2 className="text-[22px] font-bold text-[#0F172A]  dark:text-ink">Experience</h2>
                </div>

                <div className="relative pl-7">
                    <div className="absolute left-1.5 top-1.5 bottom-1.5 w-px bg-border" />

                    {EXPERIENCE.map((c) => (
                        <div key={c.hash} className="relative mb-8 last:mb-0">
                            <span className="absolute -left-7 top-1 w-2.5 h-2.5 rounded-full bg-bg border-2 border-accent" />
                            <div className="font-mono text-xs text-faint">{c.hash}</div>
                            <div className="font-sans font-bold text-base text-[#0F172A]  dark:text-ink mt-1">
                                {c.title}
                            </div>
                            <div className="font-mono text-xs dark:text-dim text-[#64748B] mt-0.5 mb-2">
                                {c.meta}
                            </div>
                            <p className="dark:text-dim text-sm text-[#64748B] max-w-[62ch]">{c.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}