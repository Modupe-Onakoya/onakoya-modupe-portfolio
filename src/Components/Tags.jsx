import React from 'react'

const Tags = ({ tags }) => {
    return (
        <div className="flex gap-2 flex-wrap">
            {tags.map((tag) => (
                <span
                    key={tag}
                    className="font-mono text-[11px] text-[#5C84B5] border border-[#1F242B] px-2.5 py-1 rounded-[3px] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#5C84B5] hover:text-[#EDEFF2]"
                >
                    {tag}
                </span>
            ))}
        </div>
    );
}

export default Tags