import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import Img from '../../assets/Animation - contact.json'
import Lottie from 'lottie-react';
import { ToastContainer, toast } from 'react-toastify';

const ContactUs = () => {
    return (
        <>
            {/* Heading */}
            <div className='text-center bg-gradient-to-r from-orange-300 to-pink-600 text-white rounded-b-4xl py-20'>
                < h2 className="text-5xl font-bold text-center mb-4 mt-20" >
                    Contact Us
                </h2 >
                <p className="text-center max-w-2xl mx-auto">
                    Have a question, feedback, or need help? We're here to support your study journey.
                </p>
            </div>

            <div className="bg-base-200 text-base-content px-4 py-20">
                <div className="max-w-6xl mx-auto">

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-7 mb-7'>
                        <div className="flex items-start gap-4 bg-base-100 shadow-md p-6 rounded-xl">
                            <FaMapMarkerAlt className="text-2xl text-primary mt-1" />
                            <div>
                                <h4 className="font-semibold text-lg">Address</h4>
                                <p>Dhaka, Bangladesh</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 bg-base-100 shadow-md p-6 rounded-xl">
                            <FaPhoneAlt className="text-2xl text-primary mt-1" />
                            <div>
                                <h4 className="font-semibold text-lg">Phone</h4>
                                <p>+88 000 1111 2233</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 bg-base-100 shadow-md p-6 rounded-xl">
                            <FaEnvelope className="text-2xl text-primary mt-1" />
                            <div>
                                <h4 className="font-semibold text-lg">Email</h4>
                                <p>studyRoom@contact.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        {/* Contact Info */}
                        <div className="space-y-6 w-full md:w-1/2">


                            <div className='bg-base-100 shadow-md p-6 rounded-xl'>
                                <form onSubmit={(e) => { e.preventDefault(); toast('Message sent!'); }}>
                                    <h2 className='font-semibold mb-10 text-2xl'>Send Us A Message</h2>
                                    <div className="form-control mb-4">
                                        <label className="label">
                                            <span className="label-text">Your Name</span>
                                        </label>
                                        <input type="text" placeholder="Enter your name" className="input input-bordered w-full" required />
                                    </div>
                                    <div className="form-control mb-4">
                                        <label className="label">
                                            <span className="label-text">Your Email</span>
                                        </label>
                                        <input type="email" placeholder="Enter your email" className="input input-bordered w-full" required />
                                    </div>
                                    <div className="form-control mb-6">
                                        <label className="label">
                                            <span className="label-text">Message</span>
                                        </label>
                                        <textarea className="textarea textarea-bordered w-full" placeholder="Write your message..." required></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-full">
                                        Send Message
                                    </button>
                                </form>
                            </div>


                        </div>

                        {/* Contact Form */}
                        <div className=" w-full md:w-1/2">

                            <div className='w-full flex justify-center mx-auto'>
                                <Lottie className="w-[290px] md:w-[560px] lg:w-[1000px] mx-auto" animationData={Img} loop={true} ></Lottie>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
