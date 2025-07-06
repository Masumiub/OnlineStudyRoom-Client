import React from 'react';
import { Bounce } from 'react-awesome-reveal';
import { FaUsers, FaChalkboardTeacher, FaClipboardCheck, FaHeart, FaBolt, FaSyncAlt } from 'react-icons/fa';
import Img from '../../assets/Animation - signup.json'
import Lottie from 'lottie-react';


const AboutUs = () => {
    return (

        <div className="bg-base-200 text-base-content pb-30">
            <div className=" mx-auto">

                {/* Heading */}
                <div className='text-center bg-gradient-to-l from-purple-700 to-red-400 text-white rounded-b-4xl py-20'>
                    <Bounce triggerOnce><h2 className='font-bold text-4xl md:text-5xl mt-20'>Online Study Room</h2></Bounce>
                </div>

                <div className='w-full md: max-w-6xl mx-auto p-3'>
                    <p className=" mx-auto mb-16 mt-16">
                        Online Study Room is a collaborative platform built to enhance how students learn and grow together. We simplify group study, promote peer learning, and encourage open academic support among friends.
                    </p>

                    {/* Who We Are */}
                    <section className="mb-16">
                        <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
                        <p>
                            We are a team of learners and developers who believe in the power of community-driven learning. Our platform brings students together so they can support each other through assignment sharing, real-time collaboration, and mutual grading.
                        </p>
                    </section>

                    {/* What We Do */}
                    <section className="mb-16">
                        <h3 className="text-2xl font-semibold mb-4">What We Do</h3>
                        <p>
                            We make it easy for students to create and submit assignments, review friends’ work, and track their academic progress — all in one friendly, easy-to-use interface. By turning classmates into collaborators, we help build stronger academic bonds.
                        </p>
                    </section>

                    {/* Core Values */}
                    <section className="mb-16">
                        <h3 className="text-2xl font-semibold mb-8 text-center">Our Core Values</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="card bg-base-200 shadow-md p-6 rounded-xl text-center">
                                <FaUsers className="text-3xl text-purple-700 mx-auto mb-4" />
                                <h4 className="font-semibold text-lg mb-2">Collaboration</h4>
                                <p>We believe students grow best when they learn together — not alone.</p>
                            </div>
                            <div className="card bg-base-200 shadow-md p-6 rounded-xl text-center">
                                <FaClipboardCheck className="text-3xl text-purple-700 mx-auto mb-4" />
                                <h4 className="font-semibold text-lg mb-2">Peer Learning</h4>
                                <p>Everyone can be a teacher. We encourage peer feedback and mutual support.</p>
                            </div>
                            <div className="card bg-base-200 shadow-md p-6 rounded-xl text-center">
                                <FaBolt className="text-3xl text-purple-700 mx-auto mb-4" />
                                <h4 className="font-semibold text-lg mb-2">Simplicity & Speed</h4>
                                <p>Our tools are designed to be fast, intuitive, and student-friendly.</p>
                            </div>
                        </div>
                    </section>

                    {/* Why Choose Us */}
                    <div className='flex flex-col gap-10 md:flex-row my-20 items-center'>

                        <div className="mb-20 w-full md:w-1/2">
                            <h3 className="text-2xl font-semibold mb-4">Why Choose Us</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>✅ Instantly connect with your study friends</li>
                                <li>✅ Share and review assignments in real-time</li>
                                <li>✅ Get feedback and grades from your peers</li>
                                <li>✅ Track your submission history easily</li>
                                <li>✅ Simple UI, made for focused study sessions</li>
                            </ul>
                        </div>


                        <div className='w-full md:w-1/2 flex justify-center mx-auto'>
                            <Lottie className="w-[290px] md:w-[560px] lg:w-[1000px] mx-auto" animationData={Img} loop={true} ></Lottie>
                        </div>


                    </div>


                    {/* Meet the Team (Optional Example) */}
                    <section>
                        <h3 className="text-2xl font-semibold mb-8 text-center">Meet the Team</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
                            {[
                                { name: 'Masum Musfique', role: 'Frontend Developer', img: 'https://i.pravatar.cc/150?img=12' },
                                { name: 'Sarah Rahman', role: 'UX Designer', img: 'https://i.pravatar.cc/150?img=45' },
                                { name: 'Amit Roy', role: 'Backend Engineer', img: 'https://i.pravatar.cc/150?img=23' },
                            ].map((member, index) => (
                                <div key={index} className="bg-base-200 p-6 rounded-xl shadow-md">
                                    <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                                    <h4 className="font-bold">{member.name}</h4>
                                    <p className="text-sm">{member.role}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>



            </div>
        </div>
    );
};

export default AboutUs;
