import React from 'react'
import { projects } from '../assets/assets'
import ProjectCard from './ProjectCard'
import SectionLabel from './SectionLabel'
import { motion } from 'motion/react'

const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='px-8 sm:px-15'>
            <section
                id="projects"
                className="py-24 border-t border-[#1F242B]  mx-auto  bg-[#0B0D10]"
            >
                <SectionLabel />
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </section>
        </motion.div>
    );
}

export default Projects