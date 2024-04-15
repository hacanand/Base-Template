import { FaGithub } from 'react-icons/fa';
import { TbLiveView } from 'react-icons/tb';
import { Link } from 'react-router-dom';
const ProjectCard = ({ project }) => {
    return (
        <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
            <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
                <img
                    src={project?.image?.url}
                    height={1080}
                    width={1920}
                    alt=""
                    className="h-full w-full group-hover:scale-110 transition-all duration-300"
                />
            </div>
            <div className="p-2 sm:p-3 flex flex-col">
                <div className="flex justify-between items-center text-[#16f2b3] text-sm">
                    <div className="flex items-center gap-3">
                        <Link target="_blank" href={project?.githuburl}>
                            <p className="flex items-center gap-1">
                                <FaGithub />
                                <span>GitHub</span>
                            </p>
                        </Link>

                        <Link target="_blank" href={project?.liveurl}>
                            <p className="flex items-center gap-1">
                                <TbLiveView />
                                <span>Live</span>
                            </p>
                        </Link>
                    </div>
                </div>
                <Link target="_blank" href={project?.liveurl}>
                    <p className="my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500">{project?.title}</p>
                </Link>
                 
                <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3">{project?.description}</p>
                {/* <div className="">
          <Link target='_blank' href={blog.url}>
            <button className='bg-violet-500 text-white px-3 py-1.5 rounded-full text-xs'>
              Read More
            </button>
          </Link>
        </div> */}
            </div>
        </div>
    );
};
export default ProjectCard;
