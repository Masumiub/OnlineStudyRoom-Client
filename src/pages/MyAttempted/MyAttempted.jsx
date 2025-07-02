import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { NavLink } from 'react-router';
import { FcCheckmark } from "react-icons/fc";
import { GiSandsOfTime } from "react-icons/gi";
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Lottie from 'lottie-react';
import loadingLottie from '../../assets/Animation - Loading.json'

const MyAttempted = () => {

    const { user } = use(AuthContext);
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);

    const [axiosSecure, ready] = useAxiosSecure();


    useEffect(() => {
        if (!ready || !user?.email) return;

        setLoading(true);
        axiosSecure(`/my-attempts/${user.email}`)
            .then(data => {
                setSubmissions(data?.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [user?.email, axiosSecure, ready]);

    
    if (!ready || loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <Lottie
                    className="w-[200px] md:w-[300px] lg:w-[400px]"
                    animationData={loadingLottie}
                    loop={true}
                />
                <p className="text-center text-4xl mt-5">Loading...</p>
            </div>
        );
    }


    return (
        <div>
            <div className='text-center bg-gradient-to-r from-pink-600 to-orange-600 text-white rounded-b-4xl'>
                <h2 className='font-bold text-5xl pt-20 pb-20'>My Attempted Assigments</h2>
            </div>

            <div className='mx-auto p-3 w-full mt-10 mb-20'>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Title</th>
                                <th className='text-center'>Status</th>
                                <th className='text-center'>Total Marks</th>
                                <th className='text-center'>Obtained Marks</th>
                                <th className='text-center'>Feedbacks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
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
                                    submissions.length == 0 ? <tr><td className='text-center text-3xl' colSpan={6}><p>You didn't attempted any assignments!</p></td></tr> :
                                        submissions.map((submission, idx) => <tr key={submission._id}>
                                            <td>{idx + 1}</td>
                                            <td> <p className='font-semibold'>{submission.title}</p>
                                                <NavLink to={`/assignmentDetails/${submission.assignmentId}`} className='btn btn-xs btn-outline btn-primary mt-2 rounded-full'>View Details</NavLink></td>
                                            <td className='text-center'> <div className='flex justify-center'> {submission.status == "Completed" ? <FcCheckmark /> : <GiSandsOfTime />}</div> <p>{submission.status}</p>
                                                <button className="btn btn-xs rounded-full mt-2" onClick={() => document.getElementById(`modal${idx}`).showModal()}>View Submission</button>
                                                {/* <p>{submission.docsLink}</p>
                                                    <p>{submission.quickNote}</p> */}
                                                <dialog id={`modal${idx}`} className="modal">
                                                    <div className="modal-box text-left">
                                                        <h3 className="font-bold text-lg">My Submission</h3>
                                                        <p className="py-4">Docs Link: {submission.docsLink}</p>
                                                        <p className="py-4">Short Note: {submission.quickNote}</p>
                                                        <div className="modal-action">
                                                            <form method="dialog">
                                                                <button className="btn">Close</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </dialog>
                                            </td>
                                            <td className='text-center'>{submission.marks}</td>
                                            <td className='text-center'>{submission?.obtainedMark}</td>
                                            <td className='text-center'>{submission?.feedBack}</td>
                                        </tr>)
                            }
                        </tbody>
                    </table>
                </div>


            </div>
        </div >
    );
};

export default MyAttempted;