import React from 'react'
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const phrases = ["I'm Onakoya Modupe", "A  Frontend Developer"];
const directions = [1, -1];

const HeroText = () => {
    const [index, setIndex] = useState(0);
    const distance = window.innerWidth < 640 ? 20 : 80;

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="overflow-hidden relative max-sm:pb-10">

            <AnimatePresence mode="wait">
                <motion.h1
                    key={index}
                    initial={{ opacity: 0, x: directions[index] * -distance }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: directions[index] * distance }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-[clamp(36px,7vw,92px)]  leading-none pb-5 max-sm:text-[24px] text-center   "
                >
                    {phrases[index] === "I'm Onakoya Modupe"
                        ? <>I'm Onakoya <br className="block sm:hidden" /> Modupe</>
                        : <>A Frontend <br className="block sm:hidden" /> Developer</>
                    }
                </motion.h1>
            </AnimatePresence>
        </div>
    )
}

export default HeroText