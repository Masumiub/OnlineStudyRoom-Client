import React from 'react';
import { NavLink } from 'react-router';
import CountUp from 'react-countup';
import { motion } from "motion/react";
import herobanner from '../assets/hero-banner2 .png';
import './Header.css';
import { Fade } from "react-awesome-reveal";


const Header = () => {
    return (
        <div className='bg-gradient-to-l from-purple-700 to-red-400 py-40 text-white rounded-b-4xl'>

            <div className='flex flex-col justify-center items-center w-full md:w-7/12 mx-auto p-4 banner'>

                <Fade>
                <div className='text-center'>
                    <h2 className='font-bold text-4xl md:text-5xl lg:text-6xl'>Collaborate. Learn. Grow Together.</h2>
                    <p className='mt-4 text-sm'>Create and complete assignments with your study buddies in a shared learning space. Boost your learning with peer-reviewed assignments and real-time feedback. Every friend is a mentor in your academic journey.</p>

                    <NavLink className='btn btn-lg btn-primary mt-10 shadow-md' to='/assignments'>Browse Assignments</NavLink>
                </div>
                </Fade>
                
                {/* <div className='mx-auto mt-15 scale-130'>
                    <div className="stats stats-vertical lg:stats-horizontal shadow">
                        <div className="stat text-center">
                            <div className="stat-title text-white">Assignments</div>
                            <div className="stat-value"><CountUp end={31} duration={5} />k</div>
                            <div className="stat-desc text-white">Jan 1st - Feb 1st</div>
                        </div>

                        <div className="stat text-center">
                            <div className="stat-title text-white">New Students</div>
                            <div className="stat-value"><CountUp end={4200} duration={5} /></div>
                            <div className="stat-desc text-white">↗︎ 400 (22%)</div>
                        </div>

                        <div className="stat text-center">
                            <div className="stat-title text-white">New Study Topics</div>
                            <div className="stat-value"><CountUp end={1200} duration={5} /></div>
                            <div className="stat-desc text-white">↘︎ 90 (14%)</div>
                        </div>
                    </div>
                </div> */}

                <div className='mx-auto w-full md:w-6/12'>
                    <motion.img src={herobanner}
                        animate={{ y: [100, 150, 100] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        alt="banner" className='w-full' />
                </div>
            </div>

        </div>
    );
};

export default Header;