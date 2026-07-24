import React from 'react'
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const HeroText = () => {
    const [index, setIndex] = useState(0);

    const phrases = ["I'm Onakoya Modupe", "A Frontend Developer"];

    const directions = [1, -1];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="overflow-hidden  lg:h-[125px] relative ">
            <AnimatePresence mode="wait">
                <motion.h1
                    key={index}
                    initial={{ opacity: 0, x: directions[index] * -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: directions[index] * 80 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-[clamp(36px,7vw,92px)] max-md:py-5 text-center  "
                >
                    {phrases[index] === "I'm Onakoya Modupe"
                        ? <>I'm  <br className=" block sm:hidden" />Onakoya Modupe</>
                        : <>A  <br className="block sm:hidden" />Frontend Developer</>
                    }
                </motion.h1>
            </AnimatePresence>
        </div>
    )
}

export default HeroText