import React from 'react'
import { assets } from '../assets/assets'

const Links = () => {
    return (
        <div className='flex gap-2 pt-5 '>
            <a
                href="https://wa.me/2348012345678"
                target="_blank"
                rel="noreferrer"
                className='hover:-translate-y-2 bg-white/70 dark:bg-[#6E7681] hover:bg-[#FF6B4A] h-fit rounded-full p-2 shadow-sm'
            >
                <img src={assets.whatsapp} alt="" className='W-4 h-4' />
            </a>
            <a href="https://github.com/Modupe-Onakoya"
                target="_blank"
                rel="noopener noreferrer" className='hover:-translate-y-2   bg-white/70 dark:bg-[#6E7681] hover:bg-[#FF6B4A] rounded-full h-fit p-2 shadow-lg'>
                <img alt='' src={assets.github} className='  w-4 h-4  ' />
            </a>
            <a href="https://www.linkedin.com/in/modupe-onakoya"
                target="_blank"
                rel="noopener noreferrer " className='hover:-translate-y-2  rounded-full p-2 shadow-lg  bg-white/70 dark:bg-[#6E7681] h-fit  hover:bg-[#FF6B4A]'>
                <img alt='' src={assets.linkedin} className='w-4 h-4 ' />
            </a>
            <a href="mailto:onakoyamodupe0@gmail.com" className=' hover:-translate-y-2 rounded-full p-2 shadow-lg  bg-white/70 dark:bg-[#6E7681] h-fit  hover:bg-[#FF6B4A]'>
                <img alt='' src={assets.email} className='w-4 h-4 ' />

            </a>
            <a href="https://twitter.com/@dhuks__"
                target="_blank"
                rel="noopener noreferrer" className='hover:-translate-y-2 h-fit rounded-full p-2 shadow-lg   bg-white/70 dark:bg-[#6E7681] hover:bg-[#FF6B4A]'>
                <img alt='' src={assets.twitter} className='w-4 h-4 ' />

            </a>

        </div>
    )
}

export default Links