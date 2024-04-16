import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { MdCorporateFare } from 'react-icons/md';
import { MdAccessTimeFilled } from 'react-icons/md';
import { TbPointFilled } from 'react-icons/tb';
import { MdSummarize } from 'react-icons/md';
const Experience = ({ experience }) => {
    const d = new Date(experience?.startDate);
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    const startDate = `${mo} ${ye}`;
    const d2 = new Date(experience?.endDate);
    const ye2 = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d2);
    const mo2 = new Intl.DateTimeFormat('en', { month: 'short' }).format(d2);
    const endDate = `${mo2} ${ye2}`;

    return (
        <div>
            <ol className="relative border-s border-gray-600 pb-16">
                <li className="  ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6   rounded-full -start-3 ring-8   ring-gray-900  bg-blue-900">
                        <svg
                            className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 className="flex max-sm:flex-col items-center mb-1 sm:text-2xl max-sm:text-xl font-bold  text-white">
                        <span className=" inline-block ">
                            <MdCorporateFare className=" text-[#16f2b3] me-1" />{' '}
                        </span>
                        <span className="inline-block">{experience?.company_name}</span>

                        <span className="px-1 font-semibold text-xl mt-auto">({experience?.jobTitle})</span>
                    </h3>

                    <div className="flex items-center my-2  text-sm font-normal leading-none text-gray-400 max-sm:flex-col  ">
                        <span className="text-[#16f2b3] inline-block font-bold text-sm   ">
                            <FaLocationDot />
                        </span>
                        <span className="text-gray-400 font-bold text-sm ms-1">{experience?.jobLocation}</span>
                        <span className="   text-[#16f2b3] inline-block font-bold text-sm sm:ms-2 ">
                            <MdAccessTimeFilled />
                        </span>
                        <span className="text-gray-400 font-bold text-sm sm:ms-1 text-nowrap">
                            {startDate} To {endDate}
                        </span>
                        {/* <span className="text-gray-400 font-bold text-sm ms-1"> </span> */}
                    </div>
                    <span className="inline-block text-[#16f2b4b4]  font-bold text-sm">
                        <MdSummarize />
                    </span>
                    <p className="inline text-base font-semibold px-1 text-gray-300">{experience?.summary}</p>
                    <div className="pt-4">
                        {experience?.bulletPoints.map((point, index) => (
                            <div className="flex " key={index}>
                                <span className="inline-block text-[#16f2b4d3] ">
                                    <TbPointFilled />
                                </span>
                                <span className=" inline-block  text-sm font-normal text-gray-400" key={index}>
                                    {point}
                                </span>
                            </div>
                        ))}
                    </div>
                </li>
            </ol>
        </div>
    );
};

export default Experience;
