import React, { use, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import './Navbar.css';
import logo from '../assets/logo.png'

const Navbar = () => {

    const { user, logOut } = use(AuthContext);
    const navigate = useNavigate();
    const [theme, setTheme] = useState('light');


    const notifyError = (message) => toast.error(`${message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });



    const notifySuccess = (message) => toast.success(`${message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });

    const handleLogOut = () => {
        logOut()
            .then(() => {
                notifySuccess('Bye, Have a nice day!');
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            })
            .catch((error) => {
                notifyError(error);
            }

            )
    }


    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);


    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div className=''>
        <div className="navbar fixed top-0 z-50 w-full bg-base-300 rounded-full my-5 px-6 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/assignments'>Browse Assignments</NavLink></li>
                        <li><NavLink to='/aboutUs'>About us</NavLink></li>
                        <li><NavLink to='/contactUs'>Contact us</NavLink></li>
                        {
                            user ? <div>
                                <li><NavLink to='/dashboard/createAssignment'>Create Assignment</NavLink></li>
                                <li><NavLink to='/dashboard/myAttempted'>My Attempted</NavLink></li>
                                <li><NavLink to='/dashboard/pendingAssignments'>Pending Assignments</NavLink></li>
                            </div> : <></>

                        }

                    </ul>
                </div>
                <img src={logo} alt="ico" className='w-15' />
                <Link className="ml-2 text-3xl roboto-slab-regular hidden md:block" to='/'>Online <span className='font-bold text-violet-500'>Study</span> Room</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/assignments'>Assignments</NavLink></li>
                    <li><NavLink to='/aboutUs'>About us</NavLink></li>
                    <li><NavLink to='/contactUs'>Contact us</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {
                    user ? <NavLink to='/dashboard' className='btn btn-primary'>Dashboard</NavLink> : ""
                }
                

                <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" className="theme-controller" value="dark"  onChange={toggleTheme} checked={theme === 'dark'}/>

                    {/* sun icon */}
                    <svg
                        className="swap-off h-6 w-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    {/* moon icon */}
                    <svg
                        className="swap-on h-6 w-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                </label>
                {
                    user ? <div className="dropdown dropdown-end dropdown-hover"> <div className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="User"
                                src={user.photoURL} title={user ? user.displayName : 'Anonymous'} />
                        </div>
                    </div>
                        <ul
                            className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 p-2 shadow-lg">
                            <li className='py-2'>
                                <p className='text-xl font-semibold'>{user.displayName}</p>
                                <p>{user.email}</p>
                            </li>
                            
                        </ul> </div> : <></>
                }
                {
                    user ? <button className='btn' onClick={handleLogOut}>Logout</button> :
                        <div className='flex gap-4'>
                            <NavLink className="btn" to='/login'>Login</NavLink>
                            <NavLink className="btn" to='/register'>Register</NavLink>
                        </div>

                }

            </div>
        </div>
        </div>
    );
};

export default Navbar;