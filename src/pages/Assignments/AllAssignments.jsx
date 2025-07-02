import React, { use } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { Bounce, Fade } from "react-awesome-reveal";
import axios from 'axios';
import Lottie from 'lottie-react';
import loadingLottie from '../../assets/Animation - Loading.json'
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { NavLink } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';
import { MdOutlineEditNote } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';

const AllAssignments = () => {

    const [axiosSecure, ready] = useAxiosSecure();

    const [filteredAssignments, setFilteredAssignments] = useState([]);
    const [selectedLevel, setSelectedLevel] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    const { user } = use(AuthContext);



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

    useEffect(() => {
        const fetchAssignments = async () => {
            setLoading(true);
            let url = 'https://online-study-room-server.vercel.app/assignments';
            if (selectedLevel !== 'All') {
                url = `https://online-study-room-server.vercel.app/assignments/level/${selectedLevel}`;
            }

            try {
                const res = await axios.get(url);
                if (Array.isArray(res.data)) {
                    setFilteredAssignments(res.data);
                } else {
                    setFilteredAssignments([]);
                }
            } catch (err) {
                console.error(err);
                setFilteredAssignments([]);
            }
            finally {
                setLoading(false);
            }
        };

        fetchAssignments();
    }, [selectedLevel]);

    const handleSortChange = e => {
        setSelectedLevel(e.target.value)
    }



    const handleDeleteAssignment = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        const res = await axiosSecure.delete(`assignments/${_id}`);
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Assignment has been deleted.",
                                icon: "success"
                            });

                            const remaining = filteredAssignments.filter(item => item._id !== _id);
                            setFilteredAssignments(remaining);
                        }
                    } catch (err) {
                        Swal.fire({
                            title: 'Error',
                            text: err.message || "Failed to delete assignment.",
                            icon: 'error'
                        });
                    }
                }
            })
    }


    const handleSearch = async () => {
        try {
            const res = await axios.get(`https://online-study-room-server.vercel.app/assignments/search?query=${searchTerm}`);
            setFilteredAssignments(res.data);
            setSelectedLevel('All');
        } catch (err) {
            //console.error(err);
            Swal.fire('Error', 'Failed to fetch search results.', err);
        }
    };

    return (
        <div>
            <div className='text-center bg-gradient-to-r from-orange-300 to-pink-600 text-white rounded-b-4xl py-20'>
                <Bounce triggerOnce><h2 className='font-bold text-4xl md:text-5xl'>All Assignments</h2></Bounce>

            </div>

            <div className='mt-15 w-full p-3 flex flex-col gap-8 md:flex-row items-center justify-between'>

                <div className='flex gap-2 items-center w-full'>
                    <p className='text-md'>Sort By Level: </p>
                    <select onChange={handleSortChange} value={selectedLevel} className="select w-full md:w-45" name='level'>
                        <option value="All">All</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>

                <div className='flex w-full lg:justify-end'>

                    <label className="input bg-white w-full lg:w-65">
                        <svg className="h-[1em] opacity-50 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            required placeholder="Search" className='text-gray-500 bg-white' />
                    </label>

                    <button className="btn btn-neutral" onClick={handleSearch}>Search</button>

                </div>

            </div>

            <div>

                <div className='mt-10'>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Title</th>
                                    <th className='text-center'>Total Marks</th>
                                    <th className='text-center'>Posted By</th>
                                    <th className='text-center'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    loading ? (
                                        <tr>
                                            <td colSpan={6} className="text-center py-10">

                                                <div className="flex flex-col mx-auto justify-center">
                                                    <div className="mx-auto"><Lottie className="w-[200px] md:w-[300px] lg:w-[400px] mx-auto" animationData={loadingLottie} loop={true} ></Lottie></div>
                                                    <div><p className="text-center text-4xl mt-5">Loading...</p></div>
                                                </div>
                                            </td>
                                        </tr>
                                    ) :
                                        filteredAssignments.length == 0 ? <tr><td className='text-center text-3xl' colSpan={6}><p>You didn't attempted any assignments!</p></td></tr> :
                                            filteredAssignments.map((assignment, idx) => <tr key={assignment._id}>
                                                <td>{idx + 1}</td>
                                                <td> <p className='font-semibold'>{assignment.title}</p>
                                                    <NavLink to={`/dashboard/assignmentDetails/${assignment._id}`} className='btn btn-xs btn-outline btn-primary mt-2 rounded-full'>Details</NavLink></td>

                                                <td className='text-center'>{assignment.marks}</td>
                                                <td className='text-center'>{assignment.userName}</td>
                                                <td>
                                                {
                                                    assignment.userEmail === user?.email && (
                                                    <div className='flex flex-col md:flex-row gap-2 p-1'>
                                                        <NavLink className='btn btn-xs btn-dash w-full md:w-1/2' to={`/dashboard/updateAssignment/${assignment._id}`}><MdOutlineEditNote size={20} /> Edit</NavLink>
                                                        <button className='btn btn-xs btn-error text-white  w-full md:w-1/2' onClick={() => handleDeleteAssignment(assignment._id)}><RiDeleteBin6Line />Delete</button>
                                                    </div>
                                                    )
                                                }
                                                </td>
                                            </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AllAssignments;