import React, { useState } from 'react';
import ProjectCard from './project/projectCard';
import ProjectModal from './project/projectModel';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// const projects = [
//   {
//     id: 1,
//     title: "E-commerce Website",
//     description: "Developed a full-stack e-commerce platform with user authentication, product management, and secure payment gateway.",
//     technologies: ["React", "Node.js", "MongoDB"],
//   },
//   {
//     id: 2,
//     title: "Portfolio Website",
//     description: "Designed and implemented a personal portfolio website showcasing skills and projects.",
//     technologies: ["React", "Tailwind CSS"],
//   },
//   // ... add more projects ...
// ];
const Projects = ({ projectsData }) => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [index, setIndex] = useState(projectsData.length / 2);
    const [isOpen, setIsOpen] = useState(false);
    const handleNext = () => {
        setIndex(projectsData.length);
    };

    // const handleOpenModal = (project) => {
    //     setSelectedProject(project);
    // };

    // const handleCloseModal = () => {
    //     setSelectedProject(null);
    // };

    return (
        <div id="Projects" className="relative  border-t my-12 lg:my-24 border-[#25213b] transition-all ease-in-out duration-500">
            <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
                </div>
            </div>

            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex  items-center">
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">Projects</span>
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
                {projectsData.slice(0, index).map((project) => (
                    <ProjectCard key={project._id} project={project} selectedProject={setSelectedProject} isOpen={setIsOpen} />
                ))}
            </div>

            <div className="flex justify-center  mt-5 lg:mt-12">
                <button
                    className={`flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold ${index === projectsData.length ? 'hidden' : 'block'}`}
                    onClick={handleNext}
                >
                    <span>View All</span>
                    <FaArrowRight size={16} />
                </button>
            </div>

            {isOpen && <ProjectModal project={selectedProject} setIsOpen={setIsOpen} />}
        </div>
    );
};

export default Projects;
