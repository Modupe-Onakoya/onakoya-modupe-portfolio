import React from 'react'
import { projects } from '../assets/assets'
import ProjectCard from './ProjectCard'
import SectionLabel from './SectionLabel'

const Projects = () => {
    return (
        <section
            id="projects"
            className="py-24 border-t border-[#1F242B]  mx-auto sm:px-8 bg-[#0B0D10]"
        >
            <SectionLabel />
            {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
            ))}
        </section>
    );
}

export default Projects