import React from 'react'

const Meta = ({ index, year, role }) => {

    return (
        <div className="flex flex-col gap-1 shrink-0 w-[120px] font-mono text-[12px]">
            <span className="text-[#FF6B4A]">{index}</span>
            <span className="text-[#6E7681]">{year}</span>
            <span className="text-[#3a4048]">{role}</span>
        </div>
    );
}



export default Meta