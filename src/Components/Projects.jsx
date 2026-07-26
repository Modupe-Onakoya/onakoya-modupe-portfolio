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
            className='px-8 sm:px-15 bg-white dark:bg-[#0B0D10]'>
            <section
                id="projects"
                className="py-24 border-t border-zinc-200 dark:border-[#1F242B]  mx-auto  "
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