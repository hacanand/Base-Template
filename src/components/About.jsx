import React from 'react'
import { FaQuoteRight, FaQuoteLeft } from 'react-icons/fa6';
import { motion as m } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from './helper/motion';

function About({ aboutUser }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });
    return (
        <div id="about" className="my-12 lg:my-16 relative " ref={ref}>
            <m.div
                variants={slideInFromTop(0.3)}
                initial="initial"
                animate={inView ? 'animate' : 'hidden'}
                className="hidden lg:flex flex-col items-center absolute top-16 -right-8"
            >
                <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl font-bold rounded-md">ABOUT ME</span>
                <span className="h-36 w-[2px] bg-[#1a1443]"></span>
            </m.div>

            <m.div
                variants={slideInFromTop(0.4)}
                initial="initial"
                animate={inView ? 'animate' : 'hidden'}
                className="flex text-4xl font-serif gap-2 text-yellow-400 font-bold justify-center"
            >
                <FaQuoteLeft className="text-pink-400 text-6xl  " />
                {aboutUser?.quote}
                <FaQuoteRight className="text-pink-400 text-6xl" />
            </m.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                <m.div variants={slideInFromLeft(0.5)} initial="initial" animate={inView ? 'animate' : 'hidden'} className="order-2 lg:order-1 mt-8">
                    <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">Who I am?</p>
                    <p className="text-gray-200 text-sm lg:text-lg">{aboutUser?.description}</p>
                </m.div>

                <m.div
                    variants={slideInFromRight(0.5)}
                    initial="initial"
                    animate={inView ? 'animate' : 'hidden'}
                    className="flex justify-center order-1 mt-8 lg:order-2"
                >
                    <img
                        src={aboutUser?.avatar?.url}
                        width={300}
                        height={200}
                        alt="Abu Said"
                        className="rounded-lg object-fill transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-105 cursor-pointer"
                    />
                </m.div>
            </div>
        </div>
    );
}

export default About