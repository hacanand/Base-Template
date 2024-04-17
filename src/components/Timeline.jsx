import React from 'react';
import Education from './timeline/education';
import Experience from './timeline/experience';

function Timeline({ educationData,experienceData }) {
    return (
        <div id="timeline" className="relative  border-t my-12 lg:my-24 border-[#25213b]">
            <img src="../../public/section.svg" alt="Hero" width={1572} height={795} className="absolute top-0 -z-10" />
            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
                </div>
            </div>

            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex  items-center">
                    <span className="sm:w-24 w-12 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-[#1a1443] w-fit text-white p-3 px-5 text-xl rounded-md font-bold">Timeline</span>
                    <span className="sm:w-24 w-12 h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>
            <div className=" md:flex gap-4 ">
                <div className="md:w-1/2  ">
                    <div className="flex justify-center my-5 lg:py-8">
                        <div className="flex  items-center">
                            <span className="bg-[#1a1443] w-fit text-white p-2 md:my-0 my-6   px-5 text-xl rounded-md font-semibold">Education</span>
                        </div>
                    </div>
                    {educationData?.map((education, index) => (
                        <Education key={index} education={education} />
                    ))}
                </div>
                <div className="md:w-1/2">
                    <div className="flex justify-center my-5 lg:py-8">
                        <div className="flex  items-center">
                            <span className="bg-[#1a1443] w-fit text-white p-2 px-5  md:my-0 my-6 text-xl rounded-md font-semibold">Experience</span>
                        </div>
                    </div>
                    {experienceData?.map((experience, index) => (
                        <Experience key={index} experience={experience} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Timeline;
