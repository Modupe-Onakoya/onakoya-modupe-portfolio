import React from 'react'
import Thumbnail from './Thumbnail'
import Tags from './Tags'
import Meta from './Meta'

const ProjectCard = ({ project }) => {
    return (
        <div className="group flex flex-col gap-4 py-10 border-b border-[#1F242B] first:border-t transition-[padding-left] duration-300 hover:pl-3">

            {/* Title */}


            {/* Row — image, meta (year & role), desc */}
            <div className="flex flex-col md:flex-row items-start gap-6">

                {/* Col 1 — image */}
                <Thumbnail image={project.image} />

                {/* Col 2 — year & role */}
                <Meta index={project.index} year={project.year} role={project.role} />

                {/* Col 3 — desc */}
                <div className='flex flex-col gap-2'>
                    <h3 className="font-serif font-medium text-[24px] leading-tight transition-colors duration-200 group-hover:text-[#FF6B4A]">
                        {project.title}
                    </h3>
                    <p className="text-[#6E7681] text-[15px] leading-relaxed flex-1">
                        {project.desc}
                    </p>
                    <Tags tags={project.tags} />
                    <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-[12px] text-[#EDEFF2] border border-[#1F242B] px-4 py-2 rounded-[3px] self-start transition-all duration-200 hover:border-[#FF6B4A] hover:text-[#FF6B4A]"
                    >
                        View Site →
                    </a>


                </div>


            </div>




        </div>
    );
}

export default ProjectCard