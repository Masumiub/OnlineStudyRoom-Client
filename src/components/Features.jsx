import React from 'react';
import { Fade } from "react-awesome-reveal";
import assignmentPic from '../assets/delegation.png'
import peerPic from '../assets/assigned.png';
import trackPic from '../assets/task.png'
import notification from '../assets/notification.png'
import login from '../assets/profile.png'
import safety from '../assets/safety.png';

const Features = () => {
    return (
        <div>
            <div className='my-25 text-center'>
                <h2 className='text-5xl'>Features of <span className='text-violet-500 font-bold'>Online Study Group</span></h2>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 gap-3 items-stretch'>
                <Fade cascade>
                    <div className='px-10 py-18 rounded-2xl shadow-lg  flex flex-col h-full transform transition duration-300 hover:shadow-2xl hover:-translate-y-2'>
                        <img src={assignmentPic} alt="assignmentPic" className='w-16 h-16 mb-3 object-contain' />
                        <h3 className='text-xl font-semibold'>Collaborative Assignment</h3>
                        <p className='mt-3 text-xs flex-grow'>
                            Easily create assignments that your friends can attempt. Customize topics, instructions, and deadlines to suit your study group’s needs.
                        </p>
                    </div>

                    <div className='px-10 py-18 rounded-2xl shadow-lg   flex-col h-full transform transition duration-300 hover:shadow-2xl hover:-translate-y-2'>
                        <img src={peerPic} alt="assignmentPic" className='w-16 h-16 mb-3 object-contain' />
                        <h3 className='text-xl font-semibold'>Peer-to-Peer Grading</h3>
                        <p className='mt-3 text-xs flex-grow'>
                            Review and grade your friends’ submissions with transparency. Get valuable feedback on your own work while helping others improve.
                        </p>
                    </div>

                    <div className='px-10 py-18 rounded-2xl shadow-lg   flex flex-col h-full transform transition duration-300 hover:shadow-2xl hover:-translate-y-2'>
                        <img src={trackPic} alt="assignmentPic" className='w-16 h-16 mb-3 object-contain' />
                        <h3 className='text-xl font-semibold'>Track Your Submissions</h3>
                        <p className='mt-3 text-xs flex-grow'>
                            Stay on top of your academic journey. View all your attempted assignments, scores, and feedback in one organized dashboard.
                        </p>
                    </div>

                    <div className='px-10 py-18 rounded-2xl shadow-lg   flex flex-col h-full transform transition duration-300 hover:shadow-2xl hover:-translate-y-2'>
                        <img src={notification} alt="assignmentPic" className='w-16 h-16 mb-3 object-contain' />
                        <h3 className='text-xl font-semibold'>Real-Time Notifications</h3>
                        <p className='mt-3 text-xs flex-grow'>
                            Never miss a beat! Get notified when friends create new assignments, grade your submissions, or comment on your work.
                        </p>
                    </div>

                    <div className='px-10 py-18 rounded-2xl shadow-lg   flex flex-col h-full transform transition duration-300 hover:shadow-2xl hover:-translate-y-2'>
                        <img src={login} alt="assignmentPic" className='w-16 h-16 mb-3 object-contain' />
                        <h3 className='text-xl font-semibold'>Secure Login with Firebase</h3>
                        <p className='mt-3 text-xs flex-grow'>
                            Your data is safe. We use Firebase Authentication to ensure only verified users can access and interact with the platform.
                        </p>
                    </div>

                    <div className='px-10 py-18 rounded-2xl shadow-lg flex flex-col h-full transform transition duration-300 hover:shadow-2xl hover:-translate-y-2'>
                        <img src={safety} alt="assignmentPic" className='w-16 h-16 mb-3 object-contain' />
                        <h3 className='text-xl font-semibold'>Friend-Based Study Circle</h3>
                        <p className='mt-3 text-xs flex-grow'>
                            No followers or friend requests needed — everyone is part of one big collaborative group, making learning truly social and inclusive.
                        </p>
                    </div>
                </Fade>
            </div>

        </div>
    );
};

export default Features;