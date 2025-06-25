import React from 'react';
import logo from '../assets/logo.png';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaTwitter } from "react-icons/fa6";
import { NavLink } from "react-router";
//bg-neutral text-neutral-content

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-base-300 px-10 py-25 rounded-t-4xl shadow-md">
                <aside>
                    <img src={logo} alt="logo" className='w-20'/>
                    <h2 className='text-2xl'>Online Study Room</h2>
                    <p>
                        Providing helpful study assignments since 2021 for all students.
                    </p>
                    <p className='font-semibold'>Follow Us:</p>
                    <div className='flex gap-2'>
                        <FaFacebook size={20}/>
                        <FaGoogle size={20}/>
                        <LuInstagram size={20}/>
                        <FaTwitter size={20}/>
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title">General</h6>
                    <NavLink to='/' className="link link-hover">Home</NavLink>
                    <NavLink to='/assignments' className="link link-hover">Assignments</NavLink>
                    <NavLink to='/myAttempted' className="link link-hover">Submissions</NavLink>
                    <NavLink to='/pendingAssignments' className="link link-hover">Pendings</NavLink>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
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