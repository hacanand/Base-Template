import React from 'react';
import { motion as m } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Skills({ skillsData }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });
    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const animationDelay = 0.3;

    
    var circumference = 0;
    return (
        <div id="skills" className="relative  z-50 border-t my-12 lg:my-24 border-[#25213b]">
            <div
                className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"
                ref={ref}
            ></div>

            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
                </div>
            </div>

            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex  items-center">
                    <span className="sm:w-24 w-12 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl font-bold rounded-md">Skills</span>
                    <span className="sm:w-24 w-12 h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>

            <div className="w-full flex flex-wrap justify-center items-center my-12">
                {skillsData.map((skill, id) => (
                    
                    <m.div
                        variants={inView ? imageVariants : { hidden: { opacity: 0 } }}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        transition={{ duration: 0.2, delay: animationDelay * id * 0.5 }}
                        className=" w-48 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer shadow-none shadow-gray-50 hover:shadow-gray-100 hover:border-violet-500 border-[#1f223c] bg-[#11152c]"
                        key={id}
                    >
                        <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                            <div className="flex -translate-y-[1px] justify-center">
                                <div className="w-3/4">
                                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                                </div>
                            </div>
                            <div className="flex flex-col  items-center justify-center gap-3 p-6">
                                <div className="h-8  sm:h-16">
                                    <img src={skill?.image?.url} alt={skill?.name} width={48} height={48} className="h-full w-auto rounded-lg" />
                                </div>
                                <p className="text-white text-sm sm:text-lg">{skill?.name}</p>

                                <div className="relative inline-flex items-center justify-center  ">
                                    <div className="flex absolute self-center   text-sm font-semibold text-pink-500">{skill?.percentage}%</div>
                                    <svg className="transform -rotate-90" height="100" width="100" xmlns="http://www.w3.org/2000/svg">
                                        <circle
                                            class="text-transparent"
                                            r="40"
                                            cx="50"
                                            cy="50"
                                            fill="transparent"
                                            stroke="currentColor"
                                            stroke-width="6"
                                        />
                                        <circle
                                            class=" text-[#008000] animate-pulse"
                                            r="40"
                                            cx="50"
                                            cy="50"
                                            fill="transparent"
                                            stroke="currentColor"
                                            stroke-width="6"
                                            stroke-dasharray={circumference = 2 * Math.PI * 40}
                                            stroke-dashoffset={circumference - (skill?.percentage / 100) * circumference}
                                            stroke-linecap="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </m.div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
