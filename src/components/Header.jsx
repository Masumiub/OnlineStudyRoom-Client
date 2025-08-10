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
                

                <div className='mx-auto w-full md:w-5/12'>
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