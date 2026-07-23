import React from 'react'
import { assets } from '../assets/assets'
const Contact = () => {
    return (
        <div className="py-24 border-t border-[#1F242B]  mx-auto px-8 bg-[#0B0D10]">

            <h2 className='text-white text-[13px] text-[#6E7681] mb-12 flex items-baseline gap-3'>
                contact</h2>
            <p className='text-white text-5xl font-italic max-w-xl'>
                Got something to build? <span> Let's talk.</span>
            </p>
            <div className='flex gap-5 pt-1 '>
                <a href="https://github.com/Modupe-Onakoya"
                    target="_blank"
                    rel="noopener noreferrer" className='border bg-white border-gray-300 rounded-full p-2 shadow-sm'>
                    <img alt='' src={assets.github} className='xl:w-6 xl:h-6 w-4 h-4  ' />
                </a>
                <a href="https://www.linkedin.com/in/modupe-onakoya"
                    target="_blank"
                    rel="noopener noreferrer " className='border border-gray-300 rounded-full p-2 shadow-sm'>
                    <img alt='' src={assets.linkedin} className='xl:w-6 xl:h-6 w-4 h-4' />
                </a>
                <a href="mailto:onakoyamodupe0@gmail.com" className='border border-gray-300 rounded-full p-2 shadow-sm'>
                    <img alt='' src={assets.email} className='xl:w-6 xl:h-6 w-4 h-4' />

                </a>
                <a href="https://twitter.com/@dhuks__"
                    target="_blank"
                    rel="noopener noreferrer" className='border border-gray-300 rounded-full p-2 shadow-sm'>
                    <img alt='' src={assets.twitter} className='xl:w-6 xl:h-6 w-4 h-4' />

                </a>

            </div>

        </div>
    )
}

export default Contact