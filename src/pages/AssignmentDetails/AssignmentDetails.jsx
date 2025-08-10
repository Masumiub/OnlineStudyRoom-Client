import React, { use, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { IoMdTime } from "react-icons/io";
import { IoCheckmarkSharp } from "react-icons/io5";
import { GiArmorUpgrade } from "react-icons/gi";
import { Bounce, toast } from 'react-toastify';
import { AuthContext } from '../../provider/AuthProvider';
import { Fade } from "react-awesome-reveal";
import ErrorPage from '../ErrorPage/ErrorPage';
import { useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Lottie from 'lottie-react';
import loadingLottie from '../../assets/Animation - Loading.json'
import axios from 'axios';

const AssignmentDetails = () => {

    const { user } = use(AuthContext);
    const navigate = useNavigate();
    const { id } = useParams();
    const [assignment, setAssignment] = useState(null);
    const [axiosSecure, ready] = useAxiosSecure();

    //const { _id, title, description, photoURL, marks, level, dueDate, userName } = useLoaderData();

    useEffect(() => {
        if (!id) {
            navigate('/error', { replace: true });
            return;
        }

        axios.get(`https://online-study-room-server.vercel.app/assignments/${id}`)
            .then(res => setAssignment(res.data))
            .catch(err => console.error("Error fetching assignment:", err));

    }, [id, navigate]);


    if (!assignment) return <div className="flex flex-col mx-auto justify-center h-screen">
        <div className="mx-auto"><Lottie className="w-[200px] md:w-[300px] lg:w-[400px] mx-auto" animationData={loadingLottie} loop={true} ></Lottie></div>
        <div><p className="text-center text-4xl mt-5">Loading...</p></div>
    </div>;

    const { _id, title, description, photoURL, marks, level, dueDate, userName } = assignment || {};

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


    const notifySuccess = (message) => {
        toast.success(`${message}`, {
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
    };

    const handleSubmission = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const Submission = Object.fromEntries(formData.entries());

        const newSubmission = {
            ...Submission,
            assignmentId: assignment?._id,
            userName: user?.displayName,
            userEmail: user?.email,
            status: "Pending",
            obtainedMark: 0,
            feedBack: "",
            postedAt: new Date(),
        }


        try {
            const res = await axiosSecure.post(`/submissions/${assignment?._id}`, newSubmission);

            if (res.data?.insertedId) {
                notifySuccess(`Your submission for "${assignment?.title}" was successful!`);
                setTimeout(() => navigate('/assignments'), 1000);
            } else {
                notifyError('Submission failed — please try again.');
            }
        } catch (error) {
            notifyError(`Oops! Submission failed: ${error?.message || error}`);
        }

    }

    return (
        <div>
            <div className='text-center bg-gradient-to-r from-pink-400 to-violet-600 text-white rounded-b-4xl'>
                <Fade triggerOnce><h2 className='font-bold text-5xl pt-40 pb-20'>Assignment Details</h2></Fade>
            </div>

            <div className='mx-auto p-3 w-full md:max-w-4xl mt-10 mb-20 min-h-screen'>
                <Fade cascade triggerOnce>

                    <div className='flex flex-col md:flex-row gap-10 items-center'>
                        <div className='w-full md:w-10/12'>
                            <h2 className='font-semibold text-3xl'>{title}</h2>
                            <p className='mt-2 text-gray-500'>Posted By: {userName}</p>
                            <div className='mt-2 flex gap-1.5 items-center'>
                                <p className='font-semibold'>Level: </p>
                                <button className='btn btn-outline btn-error btn-sm rounded-full'>{level}</button>
                            </div>

                        </div>
                        <div className='w-full md:w-4/12'>
                            <img src={photoURL} alt="banner" className='w-full rounded-2xl' />
                        </div>
                    </div>
                </Fade>

                <div className='flex flex-col md:flex-row gap-10  mt-5'>
                    <div className='w-full md:w-8/12'>
                        <h2 className='font-semibold text-xl'>Details</h2>
                        <p className='mt-2 text-gray-500'>{description}</p>

                        {/* <button className='mt-5 btn btn-primary btn-lg' onClick={() => document.getElementById('my_modal_3').showModal()}>Take Assignment <IoCheckmarkSharp /></button> */}

                        {user ? (
                            <button
                                className='mt-5 btn btn-primary btn-lg'
                                onClick={() => document.getElementById('my_modal_3').showModal()}
                            >
                                Take Assignment <IoCheckmarkSharp />
                            </button>
                        ) : (
                            <button
                                className='mt-5 btn btn-secondary btn-lg'
                                onClick={() => navigate('/login')}
                            >
                                Login to Take Assignment
                            </button>
                        )}
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg">Submit Assignment</h3>
                                <form onSubmit={handleSubmission}>
                                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 mt-3">

                                        <label className="label">Submit Google Docs Link</label>
                                        <input type="text" className="input w-full" placeholder="Google Docs Link" name='docsLink' required />

                                        <label className="label">Quick Note</label>
                                        <textarea className="textarea w-full" placeholder="Add some quick Note" name='quickNote'></textarea>

                                        <button className="btn btn-neutral mt-4" type='submit'> Submit</button>
                                    </fieldset>
                                </form>
                            </div>
                        </dialog>
                    </div>
                    <div className='w-full md:w-4/12'>
                        <div className='bg-base-200 rounded-2xl py-8'>
                            <div className='flex gap-1.5 items-center justify-center'>
                                <IoMdTime size={20} />
                                <h3 className='font-semibold text-2xl'> Due: <span className='text-pink-600'>{dueDate}</span> </h3>
                            </div>

                        </div>

                        <div className='bg-base-200 rounded-2xl text-center py-8 mt-3'>
                            <div className='flex gap-1.5 items-center justify-center'>
                                <GiArmorUpgrade size={25} />
                                <h3 className='font-semibold text-3xl'> Marks: <span className='text-pink-600'>{marks}</span></h3>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentDetails;