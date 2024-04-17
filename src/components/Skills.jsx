import React from 'react';
import {motion as m} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
 

function Skills({ skillsData }) {
    const { ref, inView } = useInView({
         
        triggerOnce:true,
    });
     const imageVariants = {
         hidden: { opacity: 0 },
         visible: { opacity: 1 },
     };

    const animationDelay = 0.3;
    
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
                {/* <Marquee gradient={false} speed={80} pauseOnHover={true} pauseOnClick={true} delay={0} play={true} direction="left"> */}
                {skillsData.map((skill, id) => (
                    <m.div
                        variants={inView ? imageVariants : { hidden: { opacity: 0 } }}
                        initial='hidden'
                        animate={inView ? 'visible' : 'hidden'}
                        transition={{ duration: 0.2, delay: animationDelay * id*0.5 }}
                        className="sm:w-36 w-24 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer shadow-none shadow-gray-50 hover:shadow-gray-100 hover:border-violet-500 border-[#1f223c] bg-[#11152c]"
                        key={id}
                    >
                        <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                            <div className="flex -translate-y-[1px] justify-center">
                                <div className="w-3/4">
                                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                                </div>
                            </div>
                            <div className="flex flex-col  items-center justify-center gap-3 p-6">
                                <div className="h-8 sm:h-10">
                                    <img src={skill?.image?.url} alt={skill?.name} width={40} height={40} className="h-full w-auto rounded-lg" />
                                </div>
                                <p className="text-white text-sm sm:text-lg">{skill?.name}</p>
                            </div>
                        </div>
                    </m.div>
                ))}
                {/* </Marquee> */}
            </div>
        </div>
    );
}

export default Skills;
