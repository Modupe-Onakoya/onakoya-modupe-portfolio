import { projects } from "../assets/assets";
import { motion } from "motion/react";

export default function Work() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}

            id="work" className="px-6 py-16 border-t border-zinc-300 dark:border-border">
            <div className="max-w-[880px] mx-auto">
                <div className="flex items-baseline gap-3 mb-9">
                    <span className="font-mono text-xs text-faint">03</span>
                    <h2 className="text-[22px] font-bold text-[#0F172A] dark:text-ink">Selected work</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4.5">
                    {projects.map((p) => (
                        <article
                            key={p.title}
                            className="dark:bg-surface border border-zinc-300 dark:border-border rounded-md overflow-hidden transition-all hover:border-faint hover:-translate-y-0.5"
                        >
                            <div className="aspect-video w-full bg-surface2 overflow-hidden">
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-5.5">
                                <div className="flex items-center justify-between mb-1.5">
                                    <span className="font-mono text-[11px] text-[#0F172A] dark:text-accent">
                                        {p.role}
                                    </span>
                                    <span className="font-mono text-[11px] text-faint">
                                        {p.index} — {p.year}
                                    </span>
                                </div>

                                <h3 className="font-sans font-bold dark:text-base dark:text-ink text-[#0F172A] mb-2.5">
                                    {p.title}
                                </h3>

                                <p className="dark:text-dim text-sm mb-3.5 text-[#64748B]">{p.desc}</p>

                                <div className="flex flex-wrap gap-2">
                                    {p.tags.map((t) => (
                                        <span
                                            key={t}
                                            className="font-mono text-[11px] text-[#0F172A] dark:text-dim dark:bg-surface2 border border-zinc-300 dark:border-border rounded px-2 py-0.5"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={p.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-4 font-mono text-[13px] text-accent hover:underline"
                                >
                                    View project →
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}