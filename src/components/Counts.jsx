import React from 'react';
import CountUp from 'react-countup';
import Img from '../assets/Animation - study.json'
import Lottie from 'lottie-react';
import { Fade } from 'react-awesome-reveal';


const Counts = () => {
    return (
        <div className='flex flex-col md:flex-row gap-10 mt-25 '>
            <div className='w-full md:w-1/2'>



                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <Fade cascade>
                        <div className='p-15 bg-base-200 rounded-2xl shadow-lg'>
                            <img width="48" height="48" src="https://img.icons8.com/3d-fluency/94/note.png" alt="note" />
                            <h1 className=' text-5xl mt-3 text-violet-500'> <CountUp end={9932} />+ </h1>
                            <p className='mt-2'>Assignments</p>
                        </div>

                        <div className='p-15 bg-base-200 rounded-2xl shadow-lg'>
                            <img width="48" height="48" src="https://img.icons8.com/3d-fluency/94/category.png" alt="category" />
                            <h1 className=' text-5xl mt-3 text-violet-500'> <CountUp end={542} />+ </h1>
                            <p className='mt-2'>Categories</p>
                        </div>


                        <div className='p-15 bg-base-200 rounded-2xl shadow-lg'>
                            <img width="48" height="48" src="https://img.icons8.com/3d-fluency/94/reading.png" alt="reading" />
                            <h1 className=' text-5xl mt-3 text-violet-500'> <CountUp end={6335} />+ </h1>
                            <p className='mt-2'>Students</p>
                        </div>

                        <div className='p-15 bg-base-200 rounded-2xl shadow-lg'>
                            <img width="48" height="48" src="https://img.icons8.com/3d-fluency/94/book-shelf.png" alt="book-shelf" />
                            <h1 className=' text-5xl mt-3 text-violet-500'> <CountUp end={454} />+ </h1>
                            <p className='mt-2'>Topics</p>
                        </div>
                    </Fade>
                </div>

            </div>

            <div className='w-full md:w-1/2 flex justify-center mx-auto'>
                <Lottie className="w-[290px] md:w-[560px] lg:w-[1000px] mx-auto" animationData={Img} loop={true} ></Lottie>
            </div>
        </div>
    );
};

export default Counts;