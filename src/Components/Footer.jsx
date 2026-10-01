export default function Footer() {
    return (
        <footer className="px-6 py-8 border-t border-zinc-300 dark:border-border">
            <div className="max-w-[880px] mx-auto">
                <p className="font-mono text-xs text-faint text-center">
                    © {new Date().getFullYear()} Onakoya Modupe. Built with React &amp; Tailwind CSS.
                </p>
            </div>
        </footer>
    );
}