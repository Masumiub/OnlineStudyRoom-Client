import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { FaLevelUpAlt } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import { MdOutlineEditNote } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Bounce, toast } from 'react-toastify';

const AssignmentCard = ({ assignment, handleDeleteAssignment }) => {

    const { user } = use(AuthContext);

    const { _id, title, photoURL, marks, level, dueDate, userName, userEmail } = assignment;

    const isAuthor = user?.email == userEmail;

    const notifyError = () => toast.error('You arent creator of this assignment!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });

    return (
        <div>
            <div className="card bg-base-200 shadow-lg">
                <figure>
                    <img
                        src={photoURL} className='bg-white w-full'
                        alt="banner" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>

                    <div className='flex w-31 items-center'>
                        <p>Level: </p>
                        <button className='btn btn-xs btn-primary btn-outline w-20 rounded-full'><FaLevelUpAlt /> {level}</button>
                    </div>

                    <div className='flex items-center gap-1'>
                        <MdOutlineAccessTime />
                        <p>  Due: <span className='font-semibold'>{dueDate}</span></p>
                    </div>


                    <p>Posted By: {userName}</p>
                    <div className="flex flex-col md:flex-row gap-2 justify-between">
                        <div><p className='text-2xl'>Mark: {marks}</p></div>

                        <div><NavLink className="btn btn-primary" to={`/assignmentDetails/${_id}`}>View Details →</NavLink></div>
                    </div>
                    <div >
                        {
                            user ? (
                                isAuthor ? (
                                    <div className='flex flex-col md:flex-row gap-2 p-1'>
                                        <NavLink className='btn btn-dash w-full md:w-1/2' to={`/updateAssignment/${_id}`}><MdOutlineEditNote size={20} /> Edit</NavLink>
                                        <button className='btn btn-error text-white  w-full md:w-1/2' onClick={() => handleDeleteAssignment(_id)}><RiDeleteBin6Line />Delete</button>
                                    </div>
                                ) : (
                                    <div className='flex flex-col md:flex-row gap-2 p-1'>
                                        <button className='btn btn-dash w-full md:w-1/2' disabled><MdOutlineEditNote size={20} /> Edit</button>
                                        <button className='btn w-full md:w-1/2 bg-gray-300 text-gray-400' onClick={() =>notifyError()}><RiDeleteBin6Line />Delete</button>
                                    </div>
                                )
                            ) : ""
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;