import React from 'react'
import { assets } from '../assets/assets'
import Links from './Links'
const Contact = () => {
    return (
        <div className="py-24 border-t border-[#1F242B]  mx-auto px-8 bg-[#0B0D10]" id='contact'>

            <h2 className=' text-[15px] text-[#5C84B5] mb-12 flex items-baseline gap-3'>
                Contact</h2>
            <p className='text-white text-5xl font-italic max-w-xl leading-relaxed font-italic'>
                Got something to build? <span className='text-[#FF6B4A]'> Let's talk.</span>
            </p>
            <Links />

        </div>
    )
}

export default Contact