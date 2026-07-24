import React from 'react'
import { assets } from '../assets/assets'

const Links = () => {
    return (
        <div className='flex gap-5 pt-5 '>
            <a href="https://github.com/Modupe-Onakoya"
                target="_blank"
                rel="noopener noreferrer" className='hover:-translate-y-2  bg-zinc-800 hover:bg-[#FF6B4A]  rounded-full p-2 shadow-sm'>
                <img alt='' src={assets.github} className='  w-6 h-6 ' />
            </a>
            <a href="https://www.linkedin.com/in/modupe-onakoya"
                target="_blank"
                rel="noopener noreferrer " className='hover:-translate-y-2  rounded-full p-2 shadow-sm bg-zinc-800  hover:bg-[#FF6B4A]'>
                <img alt='' src={assets.linkedin} className='xl:w-6 xl:h-6 w-4 h-4' />
            </a>
            <a href="mailto:onakoyamodupe0@gmail.com" className=' hover:-translate-y-2 rounded-full p-2 shadow-sm bg-zinc-800  hover:bg-[#FF6B4A]'>
                <img alt='' src={assets.email} className='xl:w-6 xl:h-6 w-4 h-4' />

            </a>
            <a href="https://twitter.com/@dhuks__"
                target="_blank"
                rel="noopener noreferrer" className='hover:-translate-y-2 rounded-full p-2 shadow-sm bg-zinc-800 hover:bg-[#FF6B4A]'>
                <img alt='' src={assets.twitter} className='xl:w-6 xl:h-6 w-4 h-4' />

            </a>

        </div>
    )
}

export default Links