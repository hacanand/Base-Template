import React from 'react';
import Marquee from 'react-fast-marquee';

function Testimonial({ testimonialsData }) {
 console.log(testimonialsData);
    return (
        <div id="skills" className="relative  z-50 border-t my-12 lg:my-24 border-[#25213b]">
            <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
                </div>
            </div>

            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex  items-center">
                    <span className="sm:w-24 w-12 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl font-bold rounded-md">Testimonial</span>
                    <span className="sm:w-24 w-12 h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>

            <div className="w-full flex flex-wrap my-12">
                <Marquee gradient={false} speed={80} pauseOnHover={true} pauseOnClick={true} delay={0} play={true} className='h-[700px]' direction="left">
                    {testimonialsData?.map((testimonial, id) => (
                        <div
                            className="max-sm:w-64 w-80  no-scrollbar h-full flex flex-col   transition-all duration-500 mt-12 sm:mt-16 mx-16 rounded-lg group relative hover:scale-[1.15] cursor-pointer shadow-none shadow-gray-50 hover:shadow-gray-100 hover:border-violet-500 border-[#1f223c] bg-[#11152c]"
                            key={id}
                        >
                            <div className="sm:min-h-[500px] h-full w-full no-scrollbar rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                                <div className="flex -translate-y-[1px] justify-center">
                                    <div className="w-3/4">
                                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                                    </div>
                                </div>
                                <div className="flex flex-col relative  items-center justify-center gap-3 p-6">
                                    <div className="h-24 absolute bottom-2  z-50 ">
                                        <img
                                            src={testimonial?.image?.url}
                                            alt={testimonial?.name}
                                            width={100}
                                            height={100}
                                            className="h-full w-auto rounded-lg"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center p-4">
                                    <p className=" font-bold text-xl text-pink-500">{testimonial?.position}</p>
                                    <p className="text-green-500 text-sm sm:text-lg">{testimonial?.name}</p>
                                    <p className="text-white text-balance mt-4 text-center ">{testimonial?.review}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
            {/* <div class="bg-pink-500 p-8 rounded-lg shadow-lg">
                <div class="flex flex-col items-center">
                    <img class="w-24 h-24 rounded-full mb-4" src="path/to/image.jpg" alt="Raquel Murillo" />
                    <h2 class="text-2xl font-bold text-white mb-2">Raquel Murillo</h2>
                    <div class="text-lg text-gray-200 italic mb-4">
                        “Netflix is an outstanding streaming service. Easy to use, friendly customer service, award-winning, high quality, up to date
                        diverse content, affordable, etc. Netflix alone can meet all your entertainment needs. I highly recommend giving it a try.
                        Amazing Experience.”
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Testimonial;
