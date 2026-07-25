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

            className='py-4 flex flex-col justify-between border-t  mx-auto sm:px-15 px-8 bg-[#111418]'>
            <div className='flex flex-col sm:flex-row gap-3 py-15 justify-between items-center '>
                <div className='max-sm:text-center'>
                    <p className=' text-[#FF6B4A] '>
                        ONAKOYA MODUPE
                    </p>
                    <p className='text-[#6E7681] text-2xl'>
                        Frontend Developer
                    </p>
                </div>
                <div className=" flex gap-4 ">
                    <a href="#" className="text-[#6E7681]">Home</a>
                    <a href="#about" className="text-[#6E7681]">About</a>
                    <a href="#project" className="text-[#6E7681]">Project</a>
                    <a href="#contact" className="text-[#6E7681]">Contact</a>
                    <a href="/Onakoya1.pdf" className="text-[#6E7681]">Resume</a>

                </div>

                <div className='flex gap-3 pt-5 items-center'>
                    <a
                        href="https://wa.me/2348012345678"
                        target="_blank"
                        rel="noreferrer"
                        className='hover:-translate-y-2 bg-[#6E7681] hover:bg-[#FF6B4A]  rounded-full p-2 shadow-sm'
                    >
                        <img src={assets.whatsapp} alt="" className='W-4 h-4' />
                    </a>
                    <a href="https://github.com/Modupe-Onakoya"
                        target="_blank"
                        rel="noopener noreferrer" className='hover:-translate-y-2 bg-[#6E7681] hover:bg-[#FF6B4A]  rounded-full p-2 shadow-sm'>
                        <img alt='' src={assets.github} className='  w-4 h-4 ' />
                    </a>
                    <a href="https://www.linkedin.com/in/modupe-onakoya"
                        target="_blank"
                        rel="noopener noreferrer " className='hover:-translate-y-2  rounded-full p-2 shadow-sm bg-[#6E7681] hover:bg-[#FF6B4A]'>
                        <img alt='' src={assets.linkedin} className='w-4 h-4 ' />
                    </a>
                    <a href="mailto:onakoyamodupe0@gmail.com" className=' hover:-translate-y-2 rounded-full p-2 shadow-sm bg-[#6E7681] hover:bg-[#FF6B4A]'>
                        <img alt='' src={assets.email} className='w-4 h-4 ' />

                    </a>
                    <a href="https://twitter.com/@dhuks__"
                        target="_blank"
                        rel="noopener noreferrer" className='hover:-translate-y-2 rounded-full p-2 shadow-sm bg-[#6E7681] hover:bg-[#FF6B4A]'>
                        <img alt='' src={assets.twitter} className='w-4 h-4' />

                    </a>

                </div>
            </div>
            <div className='border-t border-[#1F242B] flex justify-between items-center py-10'>
                <p className='text-[14px] text-white  flex items-center gap-3 p-2 '>
                    <img src={assets.copyright} alt="" className='w-3 h-3 rounded full bg-[#6E7681]' />
                    <span>2026  Onakoya Modupe. All rights reserved</span>
                </p>

                <p className='text-[12px] text-white'>Built with react js & tailswind css</p>
            </div>

        </motion.div >
    )
}

export default Footer
