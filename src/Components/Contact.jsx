import React from 'react'
import { assets } from '../assets/assets'
import Links from './Links'
import { motion } from 'motion/react'
const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='px-8 sm:px-15'>
            <div className="py-24 border-t border-[#1F242B]  mx-auto  bg-[#0B0D10]" id='contact'>

                <h2 className=' text-[15px] text-[#5C84B5] mb-6 flex items-baseline gap-3'>
                    Contact</h2>
                <p className='text-white text-5xl font-italic max-w-xl leading-15 italic'>
                    Got something to build? <span className='text-[#FF6B4A]'> Let's talk.</span>
                </p>
                <Links />
            </div>
        </motion.div>
    )
}

export default Contact