import React from 'react';
import { NavLink } from 'react-router';
import Lottie from "lottie-react";
import ErrorImg from '../../assets/Animation - Error.json'

const ErrorPage = () => {
    return (
        <div className='mx-auto flex flex-col justify-center text-center my-30'>
            <div className='mx-auto'>
            
            <Lottie className="w-[250px] md:w-[500px] lg:w-[800px] mx-auto" animationData={ErrorImg}  loop={true} ></Lottie>
            </div>

            <div className='mt-10 text-center mx-auto'> 
                <h2 className='text-7xl hidden lg:block'>404! Page not found!</h2>
                <NavLink to='/' className="btn btn-neutral mt-8">Go Back to Home</NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;