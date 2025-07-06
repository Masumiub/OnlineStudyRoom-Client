import React from 'react';
import Img from '../assets/Animation - newsletter.json'
import Lottie from 'lottie-react';


const Newsletter = () => {
    return (
        <div className="text-base-content px-4 mb-30">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Left: Text + Form */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Join Our <span className="text-purple-500">Newsletter</span>
                    </h2>
                    <p className="mb-6 text-lg">
                        Stay updated with the latest features, group study tips, and announcements from Online Study Room.
                    </p>

                    <div className="join">
                        <div>
                            <label className="input validator join-item">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </g>
                                </svg>
                                <input type="email" placeholder="mail@site.com" required />
                            </label>
                            <div className="validator-hint hidden">Enter valid email address</div>
                        </div>
                        <button className="btn btn-neutral join-item">Join</button>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="flex justify-center md:justify-end">
                        <div className='w-full flex justify-center mx-auto'>
                            <Lottie className="w-[290px] md:w-[560px] lg:w-[1000px] mx-auto" animationData={Img} loop={true} ></Lottie>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
