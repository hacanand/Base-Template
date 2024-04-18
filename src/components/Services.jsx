import React from 'react'
import blur from '../../public/blur-23.svg'
import GlowCard from './helper/glow-card'
import { motion as m } from 'framer-motion';
import { fadeInUp, slideInFromLeft } from './helper/motion';
import { useInView } from 'react-intersection-observer';

function Services({ servicesData }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });
  
    return (
        <div id="services" className="relative   border-t my-12 lg:my-24 border-[#25213b]">
            <img src={blur} alt="Hero" width={1572} height={895} className="absolute bottom-0 -z-10" />
            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
                </div>
            </div>

            <div className="flex justify-center my-5 lg:py-8">
                <m.div variants={fadeInUp(0.2)} initial="initial" animate={inView ? 'animate' : 'hidden'} className="flex  items-center">
                    <span className="sm:w-24 w-12 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl font-bold rounded-md" ref={ref}>
                        Services
                    </span>
                    <span className="sm:w-24 w-12 h-[2px] bg-[#1a1443]"></span>
                </m.div>
            </div>

            <div className="py-8" ref={ref}>
                <div className="flex flex-wrap justify-center gap-6">
                    {servicesData.map((service, index) => (
                        <GlowCard key={index} identifier={`education-${service?.name}`}>
                            <m.div
                                className="p-3 relative text-white max-w-[500px]   rounded-2xl "
                                variants={slideInFromLeft(0.3)}
                                initial="initial"
                                animate={inView ? 'animate' : 'hidden'}
                                transition={{ duration: 0.2, delay: 0.3 * index * 0.2 }}
                            >
                                <img src={blur} alt="Hero" width={400} height={400} className="absolute top-0 opacity-80" />
                                <div className="flex justify-center">
                                    <p className="text-2xl font-bold p-2 sm:text-xl text-[#16f2b3]">{service.name}</p>
                                </div>
                                <div className="flex max-sm:flex-col sm:items-center max-sm:justify-center gap-4  px-3 py-5">
                                    <div className="text-violet-500 w-9/12  max-sm:w-full  transition-all duration-300 hover:scale-105 ">
                                        <img
                                            src={service.image.url}
                                            alt={service.name}
                                            // width={120}
                                            // height={400}
                                            className=" rounded-lg max-sm:aspect-video max-sm:w-full w-28 max-sm:h-full"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-base text-pink-500 sm:text-xl mb-2 font-medium uppercase">{service.charge}</p>
                                        <p className="text-sm sm:text-base text-wrap">{service.desc}</p>
                                    </div>
                                </div>
                            </m.div>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services