import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
//import { useLoaderData } from 'react-router';
import { Bounce, toast } from 'react-toastify';
import { GiSandsOfTime } from "react-icons/gi";
import useAxiosSecure from '../../hooks/useAxiosSecure';

import Lottie from 'lottie-react';
import loadingLottie from '../../assets/Animation - Loading.json'

const PendingAssignments = () => {

    const { user } = use(AuthContext);
    const [allPendings, setAllPendings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [axiosSecure, ready] = useAxiosSecure()


    useEffect(() => {
        if (!ready || !user?.email) return;

        setLoading(true);
        axiosSecure(`/pendings/${user.email}`)
            .then(data => {
                setAllPendings(data?.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [user?.email, axiosSecure, ready]);
    
    /*
    useEffect(() => {
        const filteredPendings = pendings.filter(pend => pend.userEmail !== user?.email && pend.status !== "Completed"); 
        setAllPendings(filteredPendings);
    }, [pendings, user])*/



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


    const handleAddMark = (e, _id) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const Submission = Object.fromEntries(formData.entries());

        const updateSubmission = {
            ...Submission,
            status: "Completed",
        }


        axiosSecure.put(`update-mark/${_id}`, updateSubmission)
        .then(res=>{
            if(res.data.modifiedCount){
                notifySuccess('Mark was updated successfully!');
                setTimeout(() => {
                    location.reload();
                }, 1000);
            }
            else{
                notifyError('Oops! Couldn\'t update the mark');
            }
        })
        .catch(error=>{
             notifyError('Authorization failed or server error', error);
        })
/*        fetch(`https://online-study-room-server.vercel.app/update-mark/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateSubmission)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    notifySuccess('Mark was updated successfully!')
                    setTimeout(() => {
                        //navigate('/pendingAssignments')
                        location.reload();
                    }, 1000);
                }
                else {
                    notifyError('Oops! Couldnt Update the mark')
                }
            })*/
    }


    return (
        <div>
            <div className='text-center bg-gradient-to-r from-red-600 to-indigo-500 text-white rounded-b-4xl'>
                <h2 className='font-bold text-5xl pt-20 pb-20'>Pending Assignments</h2>
            </div>

            <div className='mx-auto p-3 w-full mt-10 mb-20'>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Title</th>
                                <th className='text-center'>Total Marks</th>
                                <th className='text-center'>Status</th>
                                <th>Submitted By</th>
                                <th className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                loading ? (
                                    <tr>
                                        <td colSpan={6} className="text-center py-10">
                                            {/* <span className="loading loading-bars loading-2xl"></span> */}
                                            <div className="flex flex-col mx-auto justify-center">
                                                <div className="mx-auto"><Lottie className="w-[200px] md:w-[300px] lg:w-[400px] mx-auto" animationData={loadingLottie} loop={true} ></Lottie></div>
                                                <div><p className="text-center text-4xl mt-5">Loading...</p></div>
                                            </div>
                                        </td>
                                    </tr>
                                ) :
                                    allPendings.length == 0 ? <tr><td className='text-center text-3xl' colSpan={6}><p>You don't have any pending assignments now!</p></td></tr> :
                                        allPendings.map((pending, idx) =>

                                            <tr key={pending._id}>
                                                <td>{idx + 1}</td>
                                                <td><p className='font-semibold'>{pending.title}</p></td>
                                                <td className='text-center'>{pending.marks}</td>
                                                <td className='text-center'>  <div className='flex justify-center'><GiSandsOfTime /></div> <p>{pending.status}</p></td>
                                                <td>{pending.userName} <br /> {pending.userEmail}</td>
                                                <td className='text-center'><button className='btn btn-outline btn-sm btn-success rounded-full' onClick={() => document.getElementById(`modal${idx}`).showModal()}>Give Mark</button>

                                                    <dialog id={`modal${idx}`} className="modal">
                                                        <div className="modal-box text-left">
                                                            <h3 className="font-bold text-lg">Submissions</h3>
                                                            <p className="py-4">Docs Link: <a href={pending.docsLink} target='_blank' className='text-blue-500'>Open Google Docs Link</a></p>
                                                            <p className="py-4">Short Note: {pending.quickNote}</p>
                                                            <form onSubmit={(e) => handleAddMark(e, pending._id)}>

                                                                <fieldset className="fieldset">
                                                                    <legend className="fieldset-legend">Mark</legend>
                                                                    <input type="number" className="input w-full" placeholder="Marks" name="obtainedMark" required />

                                                                    <legend className="fieldset-legend">Feedback</legend>
                                                                    <textarea className="textarea w-full" placeholder="Feedback" name="feedBack"></textarea>
                                                                </fieldset>
                                                                <button className="btn btn-neutral mt-4 w-full" type='submit'> Submit</button>
                                                            </form>
                                                            <div className="modal-action w-full block">
                                                                <form method="dialog" className='w-full'>
                                                                    
                                                                    <button className="btn w-full">Close</button>
                                                                    
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </dialog>

                                                </td>

                                            </tr>

                                        )
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default PendingAssignments;