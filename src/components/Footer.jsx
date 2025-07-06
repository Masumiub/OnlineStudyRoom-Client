import React from 'react';
import logo from '../assets/logo.png';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa6";
import { NavLink } from "react-router";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <footer className="footer md:footer-horizontal bg-base-300 px-10 py-25 rounded-t-4xl shadow-md">
                <aside>
                    <img src={logo} alt="logo" className='w-20' />
                    <h2 className='text-2xl'>Online Study Room</h2>
                    <p>
                        Providing helpful study assignments since 2021 for all students.
                    </p>

                
                    <fieldset className="w-80">
                        <label>Enter your email address</label>
                        <div className="join mt-2">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Join</button>
                        </div>
                    </fieldset>
                </aside>
                <nav>
                    <h6 className="footer-title">General</h6>
                    <NavLink to='/' className="link link-hover">Home</NavLink>
                    <NavLink to='/assignments' className="link link-hover">Assignments</NavLink>
                    <NavLink to='/dashboard/myAttempted' className="link link-hover">Submissions</NavLink>
                    <NavLink to='/dashboard/pendingAssignments' className="link link-hover">Pendings</NavLink>
                </nav>

                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <NavLink to='/aboutUs' className="link link-hover">About us</NavLink>
                    <NavLink to='/contactUs' className="link link-hover">Contact us</NavLink>
                    <a className="link link-hover">Privacy policy</a>
                    
                </nav>

                <nav>
                    <h6 className="footer-title">Contact</h6>
                    <div className='flex items-center gap-2'>
                        <IoIosCall /> <p>+88 000 1111 2233 </p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <MdEmail /><p>studyRoom@contact.com</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaLocationDot /><p>1216/1/A, Street No - 98, Gulshan <br />
                            Dhaka, Bangladesh</p>
                    </div>

                    <p className='footer-title mt-4'>Follow Us:</p>
                    <div className='flex gap-2'>
                        <FaFacebook size={20} />
                        <FaGoogle size={20} />
                        <LuInstagram size={20} />
                        <FaTwitter size={20} />
                    </div>
                </nav>
            </footer>
            <footer className="footer sm:footer-horizontal footer-center bg-base-300 border-t-1 border-base-300 p-7">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Online Study Room Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;