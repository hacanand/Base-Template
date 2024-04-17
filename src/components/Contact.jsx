import { Link } from 'react-router-dom';
import { CiLocationOn } from 'react-icons/ci';
import {   IoMdCall } from 'react-icons/io';
import { MdAlternateEmail } from 'react-icons/md';
import ContactForm from './helper/contactForm';
import { motion as m } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import {   slideInFromTop } from './helper/motion';
import { fadeInUp } from './helper/motion';

function Contact({ aboutUser, socialHandles }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
    }); 
    return (
        <div id="contact" className="my-12 lg:my-16 relative text-white">
            <m.div
                variants={slideInFromTop(0.5)}
                animate="animate"
                initial="initial"
                className="hidden lg:flex flex-col items-center absolute top-24 -right-8"
                ref={ref}
            >
                <span className="bg-[#1a1443] max-sm:hidden w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">CONTACT ME</span>
                <span className="h-40 w-[2px] max-sm:hidden bg-[#1a1443]"></span>
            </m.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <ContactForm />

                <m.div variants={fadeInUp} animate={inView ? 'animate' : 'hidden'} initial="initial" className="lg:w-3/4" ref={ref}>
                    <div className="flex flex-col gap-5 lg:gap-9">
                        <p className="text-sm md:text-xl flex items-center gap-3">
                            <MdAlternateEmail
                                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                                size={36}
                            />
                            <span>{aboutUser?.contactEmail}</span>
                        </p>
                        <p className="text-sm md:text-xl flex items-center gap-3">
                            <IoMdCall
                                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                                size={36}
                            />
                            <span>{aboutUser?.phoneNumber}</span>
                        </p>
                        <p className="text-sm md:text-xl flex items-center gap-3">
                            <CiLocationOn
                                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                                size={36}
                            />
                            <span>{aboutUser?.address}</span>
                        </p>
                    </div>
                    <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
                        {socialHandles?.map((social, index) => (
                            <Link href={social?.url} key={index} target="_blank">
                                <img
                                    src={social?.image.url}
                                    alt={social?.platform}
                                    className=" grayscale hover:grayscale-0 rounded-full size-10  hover:scale-125 transition-all duration-300 text-gray-800
                cursor-pointer"
                                />
                            </Link>
                        ))}
                    </div>
                </m.div>
            </div>
        </div>
    );
}

export default Contact;
