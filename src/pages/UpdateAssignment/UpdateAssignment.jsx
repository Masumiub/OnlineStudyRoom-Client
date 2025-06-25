import React, { use, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Bounce, toast } from 'react-toastify';
import { AuthContext } from '../../provider/AuthProvider';
import { Fade } from "react-awesome-reveal";
import DatePicker from "react-datepicker";
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Lottie from 'lottie-react';
import loadingLottie from '../../assets/Animation - Loading.json'

const UpdateAssignment = () => {

    const { user } = use(AuthContext);
    //const { _id, title, description, photoURL, marks, level, dueDate } = useLoaderData();
    const { id } = useParams();
    const navigate = useNavigate();
    const [assignment, setAssignment] = useState(null);
    const [axiosSecure, ready] = useAxiosSecure();
    const [startDate, setStartDate] = useState(null);

    useEffect(() => {
        if (!id) {
            navigate('/error', { replace: true });
        }
        if (!ready) return;

        axiosSecure.get(`/assignments/${id}`)
            .then(res => setAssignment(res.data))
            .catch(err => console.error(err));

    }, [id, navigate, ready, axiosSecure]);

    useEffect(() => {
        if (assignment?.dueDate) {
            setStartDate(new Date(assignment.dueDate));
        }
    }, [assignment]);

    if (!assignment) return <div className="flex flex-col mx-auto justify-center h-screen">
        <div className="mx-auto"><Lottie className="w-[200px] md:w-[300px] lg:w-[400px] mx-auto" animationData={loadingLottie} loop={true} ></Lottie></div>
        <div><p className="text-center text-4xl mt-5">Loading...</p></div>
    </div>;

    const { _id, title, description, photoURL, marks, level } = assignment;

    //const [startDate, setStartDate] = useState(dueDate);


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

    const handleUpdateAssignment = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const Assignment = Object.fromEntries(formData.entries());

        const description = formData.get('description');

        const updatedAssignment = {
            ...Assignment,
            userName: user?.displayName,
            userEmail: user?.email,
            postedAt: new Date(),
        }

        if (description.length < 20) {
            notifyError('Description length must be at least 20 characters')
            return;
        }

        /*        fetch(`https://online-study-room-server.vercel.app/update-assignment/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(updatedAssignment)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount) {
                            notifySuccess('Assignment was updated successfully!')
                            setTimeout(() => {
                                navigate(`/assignmentDetails/${_id}`)
                            }, 1000);
                        }
                        else {
                            notifyError('Oops! Couldnt Update the Assignment')
                        }
                    })*/


        try {
            const res = await axiosSecure.put(`update-assignment/${_id}`, updatedAssignment)

            if (res.data?.modifiedCount>0) {
                notifySuccess('Assignment was updated successfully!')
                setTimeout(() => {
                    navigate(`/assignmentDetails/${_id}`)
                }, 1000);
            }
            else {
                notifyError('Update failed — please try again.');
            }

        }
        catch (err) {
            notifyError(`Failed to update assignment: ${err.message}`)
        }


    }

    return (
        <div>
            <div className='text-center bg-gradient-to-r from-violet-400 to-red-600 text-white rounded-b-4xl'>
                <Fade>
                    <h2 className='font-bold text-5xl pt-40 pb-20'>Update Assigment</h2>
                </Fade>
            </div>

            <div>



                <div className='mx-auto p-3 w-full md:max-w-xl mt-10 mb-20'>
                    <Fade>
                        <form onSubmit={handleUpdateAssignment}>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                                <legend className="fieldset-legend">Assigment Details</legend>

                                <label className="label">Title</label>
                                <input type="text" className="input w-full" placeholder="Title" name="title" defaultValue={title} />

                                <label className="label">Description</label>

                                <textarea className="textarea w-full" placeholder="Description" name="description" defaultValue={description}></textarea>

                            </fieldset>

                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 mt-3">
                                <legend className="fieldset-legend">Assigment Image</legend>

                                <label className="label">PhotoURL</label>
                                <input type="text" className="input w-full" placeholder="PhotoURL" name="photoURL" defaultValue={photoURL} />

                                <label className="label">Marks</label>
                                <input type="number" className="input w-full" placeholder="Marks" name="marks" defaultValue={marks} />

                            </fieldset>


                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 mt-3">
                                <legend className="fieldset-legend">Assigment Level</legend>

                                <label className="label">Difficulty Level</label>
                                <select className="select w-full" name='level' defaultValue={level}>
                                    <option disabled={true}>Pick a level</option>
                                    <option value="Easy">Easy</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Hard">Hard</option>
                                </select>

                                <label className="label">Due Date</label>
                                {/* <input type="date" className="input w-full" placeholder="Due Date" name="dueDate" defaultValue={dueDate} /> */}
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} name="dueDate" className="input w-full" />

                            </fieldset>
                            <button type='submit' className='btn w-full mt-4 btn-warning'>Update Assignment</button>
                        </form>
                    </Fade>
                </div>

            </div>
        </div>
    );
};

export default UpdateAssignment;