import React from 'react'
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const HeroText = () => {
    const [index, setIndex] = useState(0);

    const phrases = ["I'm, Onakoya Modupe", "A Frontend Developer"];

    const directions = [1, -1];

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
                    initial={{ opacity: 0, x: directions[index] * -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: directions[index] * 80 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-[clamp(36px,7vw,92px)]  leading-none pb-5 max-sm:text-[25px] text-center   "
                >
                    {phrases[index]
                    }
                </motion.h1>
            </AnimatePresence>
        </div>
    )
}

export default HeroText