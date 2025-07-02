import React, { use } from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router';
import { IoIosStats } from "react-icons/io";
import { BiTask } from "react-icons/bi";
import { MdAddTask } from "react-icons/md";
import { MdFormatListBulleted } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { TbArrowBackUp } from "react-icons/tb";
import { AuthContext } from '../provider/AuthProvider';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { RiLogoutBoxLine } from "react-icons/ri";
import logo from '../assets/logo.png'
import { PiTimerBold } from "react-icons/pi";

const DashboardLayout = () => {
    const { user, logOut } = use(AuthContext);

    const navigate = useNavigate();

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


    return (
        <div className="drawer md:drawer-open">
            {/* Drawer toggle for small screen */}
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

            {/* Page content */}
            <div className="drawer-content flex flex-col">
                {/* Navbar (visible only on small screens) */}
                <div className="navbar bg-base-300 md:hidden">
                    <div className="flex-none">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <img src={logo} alt="ico" className='w-15' />
                    <Link className="ml-2 text-3xl roboto-slab-regular hidden md:block" to='/'>Online <span className='font-bold text-violet-500'>Study</span> Room</Link>
                </div>

                {/* Main content */}
                <div className="px-4">
                    <Outlet />
                </div>
            </div>

            {/* Sidebar (drawer side) - always visible on md+ screens */}
            <div className="drawer-side">
                {/* Overlay only for small screens */}
                <label htmlFor="my-drawer-3" className="drawer-overlay md:hidden"></label>

                <ul className="menu bg-base-300 w-80 min-h-full p-4 text-base-content">
                    {/* Sidebar content */}
                    <img src={logo} alt="ico" className='w-15' />
                    <Link className="ml-2 text-3xl roboto-slab-regular hidden md:block" to='/'>Online <span className='font-bold text-violet-500'>Study</span> Room</Link>
                    <li><NavLink to='/dashboard' className='mt-10'><IoIosStats />Dashboard</NavLink></li>
                    <li><NavLink to='myAttempted'><BiTask />My Attempted</NavLink></li>
                    <li><NavLink to='createAssignment'><MdAddTask />Create Assignment</NavLink></li>
                    <li><NavLink to='allAssignment'><MdFormatListBulleted />All Assignments</NavLink></li>
                    <li><NavLink to='pendingAssignments'><PiTimerBold />Pending Assignments</NavLink></li>
                    <li><NavLink to='myProfile'><FaRegUser />My Profile</NavLink></li>
                    <li><NavLink to='/'><TbArrowBackUp />Back to Home</NavLink></li>
                    <li><button onClick={handleLogOut}><RiLogoutBoxLine />Signout</button></li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;