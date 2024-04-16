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
            <div className="bg-gray-300 w-2/3 p-6 rounded-lg "
                ref={ref} >
                <div className=" flex flex-col   pb-6 items-center  gap-4 md:justify-between ">
                    <h2 className="text-2xl font-bold ">{project.title}</h2>
                    <div className="flex  gap-3 justify-end text-white ">
                        <Link target="_blank" href={project?.githuburl}>
                            <p className="flex items-center gap-1 border-[#967a09] border bg-[#0c1367] font-semibold px-2 p-1 border-spacing-1 rounded-full">
                                <FaGithub />
                                <span>GitHub</span>
                            </p>
                        </Link>

                        <Link target="_blank" href={project?.liveurl}>
                            <p className="flex items-center gap-1 border-[#967a09] border bg-[#0c1367] font-semibold px-2 p-1 border-spacing-1 rounded-full">
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
                <p className="text-gray-700 my-4">{project.description}</p>
                <ul className=" list-inside md:flex text-center gap-4  py-4 text-white ">
                    {project?.techStack.map((tech) => (
                        <li className=" border-[#967a09] border bg-[#0c1367] font-semibold px-2 p-1 mt-2 border-spacing-1 rounded-full" key={tech}>
                            {tech}
                        </li>
                    ))}
                </ul>

                {/* toggle the setIsOpen onClick */}
                <button className="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => setIsOpen(false)}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default ProjectModal;
