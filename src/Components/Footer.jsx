import React from 'react'
import Links from './Links'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const Footer = () => {


    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}

            className='py-4 flex flex-col justify-between  mx-auto sm:px-15 px-8 bg-gray-200 dark:bg-[#111418]'>
            <div className='flex flex-col sm:flex-row gap-3 py-15  px-8  justify-between items-center '>
                <div className='max-sm:text-center '>
                    <p className=' text-[#FF6B4A] '>
                        ONAKOYA MODUPE
                    </p>
                    <p className='text-[#6E7681] '>
                        Frontend Developer
                    </p>
                </div>
                <div className=" flex space-x-3 text-[13px]">
                    <a href="#" className="text-black dark:text-[#6E7681]">Home</a>
                    <a href="#about" className="text-black dark:text-[#6E7681]">About</a>
                    <a href="#about" className="text-black dark:text-[#6E7681]">Stack</a>

                    <a href="#project" className="text-black dark:text-[#6E7681]">Project</a>
                    <a href="#contact" className="text-black dark:text-[#6E7681]">Contact</a>
                    <a href="/Onakoya cv.pdf" className="text-black dark:text-[#6E7681]">Resume</a>

                </div>

                <div className='flex gap-3 pt-2 items-center'>
                    <a
                        href="https://wa.me/2348012345678"
                        target="_blank"
                        rel="noreferrer"
                        className='hover:-translate-y-2  shadow-lg   bg-white/70 dark:bg-[#6E7681] hover:bg-[#FF6B4A]  rounded-full p-2'
                    >
                        <img src={assets.whatsapp} alt="" className='W-4 h-4' />
                    </a>
                    <a href="https://github.com/Modupe-Onakoya"
                        target="_blank"
                        rel="noopener noreferrer" className='hover:-translate-y-2  shadow-lg   bg-white/70 dark:bg-[#6E7681] hover:bg-[#FF6B4A]  rounded-full p-2 '>
                        <img alt='' src={assets.github} className='  w-4 h-4 ' />
                    </a>
                    <a href="https://www.linkedin.com/in/modupe-onakoya"
                        target="_blank"
                        rel="noopener noreferrer " className='hover:-translate-y-2  rounded-full p-2   shadow-lg   bg-white/70 dark:bg-[#6E7681] hover:bg-[#FF6B4A]'>
                        <img alt='' src={assets.linkedin} className='w-4 h-4 ' />
                    </a>
                    <a href="mailto:onakoyamodupe0@gmail.com" className=' hover:-translate-y-2 rounded-full p-2   shadow-lg   bg-white/70 dark:bg-[#6E7681] hover:bg-[#FF6B4A]'>
                        <img alt='' src={assets.email} className='w-4 h-4 ' />

                    </a>
                    <a href="https://twitter.com/@dhuks__"
                        target="_blank"
                        rel="noopener noreferrer" className='hover:-translate-y-2 rounded-full p-2 shadow-lg   bg-white/70 dark:bg-[#6E7681] hover:bg-[#FF6B4A]'>
                        <img alt='' src={assets.twitter} className='w-4 h-4' />

                    </a>

                </div>
            </div>
            <div className='border-t border-[#1F242B] flex justify-between items-center py-10'>
                <p className='text-[14px] text-white  flex items-center gap-2 p-2 '>
                    <img src={assets.copyright} alt="" className='w-3 h-3 rounded-full dark:bg-white' />
                    <span className='text-black dark:text-white text-[12px]'>2026  Onakoya Modupe</span>
                </p>

                <p className='text-[12px] text-black dark:text-white'>Built with react js</p>
            </div>

        </motion.div >
    )
}

export default Footer
