import React from 'react';
//import { useLoaderData } from 'react-router';
import AssignmentCard from '../../components/AssignmentCard';
import { useState } from 'react';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { Bounce, Fade } from "react-awesome-reveal";
import axios from 'axios';
import Lottie from 'lottie-react';
import loadingLottie from '../../assets/Animation - Loading.json'
import useAxiosSecure from '../../hooks/useAxiosSecure';


const Assignments = () => {

    //const assignments = useLoaderData();
    const [axiosSecure, ready] = useAxiosSecure();

    const [filteredAssignments, setFilteredAssignments] = useState([]);
    const [selectedLevel, setSelectedLevel] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);



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
                    /*fetch(`https://online-study-room-server.vercel.app/assignments/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your Assignment has been deleted.",
                                    icon: "success"
                                });

                                const remainingProducts = filteredAssignments.filter(product => product._id !== _id);
                                setFilteredAssignments(remainingProducts);
                            }
                        })*/
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
                <Bounce triggerOnce><h2 className='font-bold text-4xl md:text-5xl mt-20'>Browse Assignments</h2></Bounce>

                <div className='mx-auto w-full md:w-5/12 mt-10'>

                    <label className="input bg-white">
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

            <div className='mt-15 mx-auto w-full md:w-10/12 p-3'>
                <div className='flex gap-2 items-center'>
                    <p className='text-xl'>Sort By Level: </p>
                    <select onChange={handleSortChange} value={selectedLevel} className="select w-45" name='level'>
                        <option value="All">All</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>

            </div>

            <div className='mt-15 mb-20 mx-auto p-3 w-full md:w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    loading ? (<div className="flex flex-col mx-auto justify-center col-span-full">
                        <div className="mx-auto"><Lottie className="w-[200px] md:w-[300px] lg:w-[400px] mx-auto" animationData={loadingLottie} loop={true} ></Lottie></div>
                        <div><p className="text-center text-4xl mt-5">Loading...</p></div>
                    </div>) :
                        filteredAssignments.length == 0 ? <div className='h-screen col-span-full'><p className="text-4xl text-center mt-10">No assignments found at this level.</p></div> :
                            filteredAssignments.map((assignment) => <Fade key={assignment._id} cascade triggerOnce><AssignmentCard assignment={assignment} handleDeleteAssignment={handleDeleteAssignment}></AssignmentCard></Fade>)
                }
            </div>
        </div>
    );
};

export default Assignments;