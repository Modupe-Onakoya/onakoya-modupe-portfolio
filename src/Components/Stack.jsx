import { motion } from "motion/react";

const STACK = {
    languages: ["javascript", "typescript", "html5", "css3"],
    frameworks: ["react", "next.js"],
    css: ["tailwindcss", "bootstrap"],
    state: ["zustand"],
    "data-fetching": ["tanstack-query"],
    forms: ["react-hook-form", "zod"],
    backend: ["supabase"],
    animation: ["framer-motion"],
    tools: ["git", "github", "vercel", "vscode", "figma"],
};

export default function Stack() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            id="stack" className="px-6 py-16 border-t border-zinc-300 dark:border-border">
            <div className="max-w-[880px] mx-auto">
                <div className="flex items-baseline gap-3 mb-9">
                    <span className="font-mono text-xs text-faint">02</span>
                    <h2 className="text-[22px] font-bold text-[#0F172A] dark:text-ink">Tech Stack</h2>
                </div>

                <div className="dark:bg-surface border border-zinc-300 dark:border-border rounded-md shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] overflow-hidden">
                    <div className="flex items-center gap-2 px-3.5 py-2.5 dark:bg-surface2 border-b border-zinc-300 dark:border-border">
                        <span className="w-2.5 h-2.5 rounded-full bg-del" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#E8A33D]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-add" />
                        <span className="ml-2 font-mono text-xs text-faint">stack.json</span>
                    </div>

                    <div className="px-6 py-7 overflow-x-auto">
                        <pre className="font-mono text-sm leading-[1.8] text-faint whitespace-pre">
                            {"{\n"}
                            {Object.entries(STACK).map(([key, values], i, arr) => (
                                <span key={key}>
                                    {"  "}
                                    <span className="text-accent">"{key}"</span>: [
                                    {values.map((v, vi) => (
                                        <span key={v}>
                                            <span className="text-green-600 dark:text-[#7EE3B5]">"{v}"</span>
                                            {vi < values.length - 1 ? ", " : ""}
                                        </span>
                                    ))}
                                    ]{i < arr.length - 1 ? "," : ","}
                                    {"\n"}
                                </span>
                            ))}
                            {"  "}
                            <span className="text-accent">"experience"</span>: <span className="text-[#E8A33D]">3</span>
                            {"\n}"}
                        </pre>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}