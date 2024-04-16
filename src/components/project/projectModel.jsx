import React,{useRef} from 'react';
import { FaGithub } from 'react-icons/fa';
import { TbLiveView } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const ProjectModal = ({ project, setIsOpen }) => {
    const ref=useRef(null)
    if (!project) return null;
    //handle the click event on the backdrop
    const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setIsOpen(false);
        }
    };
    return (
        <div className=" absolute  top-0 w-full backdrop-blur-lg h-full flex items-center justify-center " onClick={handleClick}>
            <div className="bg-[#1b203e] text-gray-200 md:w-2/3 p-6 rounded-lg " ref={ref}>
                <div className=" flex flex-col   pb-6 items-center  gap-4 md:justify-between ">
                    <h2 className="text-2xl font-bold ">{project.title}</h2>
                    <div className="flex  gap-3 justify-end text-white ">
                        <Link target="_blank" href={project?.githuburl}>
                            <p className="flex items-center gap-1 border-[#967a09] border bg-[#16f2b3] text-[#0c1367] font-semibold px-2 p-1 border-spacing-1 rounded-full">
                                <FaGithub />
                                <span>GitHub</span>
                            </p>
                        </Link>

                        <Link target="_blank" href={project?.liveurl}>
                            <p className="flex items-center gap-1 border-[#967a09] border bg-[#16f2b3] text-[#0c1367] font-semibold px-2 p-1 border-spacing-1 rounded-full">
                                <TbLiveView />
                                <span>Live</span>
                            </p>
                        </Link>
                    </div>
                </div>
                <img
                    src={project?.image?.url}
                    loading="lazy"
                    alt={project.title}
                    className="w-full h-96 object-cover hover:scale-105 transition-all duration-500 ease-in-out  rounded-lg"
                />
                <p className=" my-4 text-balance">{project.description}</p>
                <h3 className="text-lg font-bold underline underline-offset-3 decoration-pink-700  text-center text-pink-500 ">Tech Stack</h3>
                <ul className=" list-inside flex  flex-wrap text-center gap-3 justify-center py-4 text-white ">
                    {project?.techStack.map((tech) => (
                        <li className=" border-[#967a09] border bg-pink-600  font-semibold px-2 p-1 mt-2 border-spacing-1 rounded-full" key={tech}>
                            {tech}
                        </li>
                    ))}
                </ul>

                {/* toggle the setIsOpen onClick */}
                <div className="flex justify-center">
                    <button
                        className="bg-red-300 hover:bg-red-500 flex  text-black font-bold py-2 px-4 rounded mt-4"
                        onClick={() => setIsOpen(false)}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
