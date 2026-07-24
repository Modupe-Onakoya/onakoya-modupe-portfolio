import React from 'react'
import { projects } from '../assets/assets'
import ProjectCard from './ProjectCard'
import SectionLabel from './SectionLabel'

const Projects = () => {
    return (
        <div className='px-8 sm:px-15'>
            <section
                id="projects"
                className="py-24 border-t border-[#1F242B]  mx-auto  bg-[#0B0D10]"
            >
                <SectionLabel />
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </section>
        </div>
    );
}

export default Projects