
import React from 'react'

const Thumbnail = ({ image, href }) => {
    return (
        <div className="relative w-[200px] shrink-0 aspect-[4/3] rounded-md overflow-hidden border border-[#1F242B] bg-[#12151A]">
            <img
                src={image}
                alt="Project screenshot"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
        </div>
    );
}

export default Thumbnail