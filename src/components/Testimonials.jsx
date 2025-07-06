import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { FiCommand } from "react-icons/fi";


const Testimonials = () => {
    return (
        <div>
            <section className="">
                <div className="pb-12 mx-auto">

                    <div className="grid items-center gap-4 xl:grid-cols-5">

                        <div className="mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left p-3">
                            <h2 className="text-5xl ">What <span className='font-semibold text-violet-500'>Our Students</span> Say</h2>
                            <p className="">
                                Our users love how Online Study Room helps them stay organized, collaborate with friends, and improve their academic performance.
                            </p>
                        </div>

                        <div className="p-6 xl:col-span-3">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="grid content-center gap-4">

                                    <Slide direction='right' cascade> 
                                    <div className="px-6 py-12 rounded-2xl shadow-lg bg-base-200">
                                        <FiCommand size={35} />
                                        <p className='mt-3'>
                                            "The assignment sharing feature is a game changer! I can easily send my work to friends and get their feedback. It’s like having a study group in my pocket. I’ve tried other tools, but this one feels built for students. It’s clean, fast, and actually helps with learning — not just managing tasks."
                                        </p>
                                        <div className="flex items-center mt-4 space-x-4 border-t-1 border-base-300 pt-5">

                                            <img width="48" height="48" src="https://img.icons8.com/color/48/user-female-circle--v3.png" alt="user-female-circle--v3" />
                                            <div>
                                                <p className="text-lg font-semibold">Zara Ahmed</p>
                                                <p className="text-sm dark:text-gray-600">Computer Science Student</p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="px-6 py-12 rounded-2xl shadow-lg bg-base-200">
                                        <FiCommand size={35} />
                                        <p className='mt-3'>
                                            "Peer grading really motivates me to do better. I get helpful reviews from classmates, and I also learn from reviewing their work. This platform keeps me on track. The submission tracker is super helpful during finals week when everything gets chaotic."
                                        </p>
                                        <div className="flex items-center mt-4 space-x-4 border-t-1 border-base-300 pt-5">

                                            <img width="48" height="48" src="https://img.icons8.com/fluency/48/user-male-circle.png" alt="user-male-circle" />
                                            <div>
                                                <p className="text-lg font-semibold">Farhan Chowdhury</p>
                                                <p className="text-sm dark:text-gray-600">Engineering Undergraduate</p>
                                            </div>
                                        </div>
                                    </div>
                                    </Slide>

                                </div>

                                <div className="grid content-center gap-4">


                                    <div className="px-6 py-12 rounded-2xl shadow-lg bg-base-200">
                                        <FiCommand size={35} />
                                        <p className='mt-3'>
                                             "This platform keeps me on track. The submission tracker is super helpful during finals week when everything gets chaotic."
                                        </p>
                                        <div className="flex items-center mt-4 space-x-4 border-t-1 border-base-300 pt-5">

                                           <img width="48" height="48" src="https://img.icons8.com/3d-fluency/94/student-female--v1.png" alt="student-female--v1"/>
                                            <div>
                                                <p className="text-lg font-semibold">Mehjabin Nila</p>
                                                <p className="text-sm dark:text-gray-600">Business Administration</p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="px-6 py-12 rounded-2xl shadow-lg bg-base-200">
                                        <FiCommand size={35} />
                                        <p className='mt-3'>
                                              "I’ve tried other tools, but this one feels built for students. It’s clean, fast, and actually helps with learning — not just managing tasks."
                                        </p>
                                        <div className="flex items-center mt-4 space-x-4 border-t-1 border-base-300 pt-5">

                                           <img width="38" height="38" src="https://img.icons8.com/emoji/48/man-student.png" alt="man-student"/>
                                            <div>
                                                <p className="text-lg font-semibold">Tariq Hasan</p>
                                                <p className="text-sm dark:text-gray-600">Final Year Student</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Testimonials;