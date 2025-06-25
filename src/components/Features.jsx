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

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 gap-3'>
                <Fade cascade triggerOnce>
                    <div className='px-10 py-20 rounded-2xl shadow-md text-white bg-gradient-to-r from-blue-600 to-violet-600'>
                        <img src={assignmentPic} alt="assignmentPic" className='h-15 mb-3'/>
                        <h3 className='text-xl'>Collaborative Assignment</h3>
                        <p className='mt-3 text-xs'>Easily create assignments that your friends can attempt. Customize topics, instructions, and deadlines to suit your study group’s needs.</p>
                    </div>

                    <div className='px-10 py-20 rounded-2xl shadow-md text-white bg-gradient-to-r from-purple-500 to-purple-900'>
                        <img src={peerPic} alt="assignmentPic" className='h-15 mb-3'/>
                        <h3 className='text-xl'>Peer-to-Peer Grading</h3>
                        <p className='mt-3 text-xs'>Review and grade your friends’ submissions with transparency. Get valuable feedback on your own work while helping others improve.</p>
                    </div>

                    <div className='px-10 py-20 rounded-2xl shadow-md text-white bg-gradient-to-r from-fuchsia-600 to-pink-600'>
                        <img src={trackPic} alt="assignmentPic" className='h-15 mb-3'/>
                        <h3 className='text-xl'>Track Your Submissions</h3>
                        <p className='mt-3  text-xs'>Stay on top of your academic journey. View all your attempted assignments, scores, and feedback in one organized dashboard.</p>
                    </div>

                    <div className='px-10 py-20 rounded-2xl shadow-md text-white bg-gradient-to-r from-fuchsia-600 to-purple-600'>
                        <img src={notification} alt="assignmentPic" className='h-15 mb-3'/>
                        <h3 className='text-xl'>Real-Time Notifications</h3>
                        <p className='mt-3  text-xs'>Never miss a beat! Get notified when friends create new assignments, grade your submissions, or comment on your work.</p>
                    </div>

                    <div className='px-10 py-20 rounded-2xl shadow-md text-white bg-gradient-to-r from-violet-600 to-indigo-600'>
                        
                        <img src={login} alt="assignmentPic" className='h-15 mb-3'/>
                        <h3 className='text-xl'>Secure Login with Firebase</h3>
                        <p className='mt-3  text-xs'>Your data is safe. We use Firebase Authentication to ensure only verified users can access and interact with the platform.</p>
                    </div>

                    <div className='px-10 py-20 rounded-2xl shadow-md text-white bg-gradient-to-r from-indigo-500 to-rose-500'>
                        <img src={safety} alt="assignmentPic" className='h-15 mb-3'/>
                        <h3 className='text-xl'>Friend-Based Study Circle</h3>
                        <p className='mt-3  text-xs'>No followers or friend requests needed — everyone is part of one big collaborative group, making learning truly social and inclusive.</p>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Features;