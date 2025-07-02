import React, { use } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Bounce, toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Fade } from "react-awesome-reveal";
import useAxiosSecure from '../../hooks/useAxiosSecure';

const CreateAssignment = () => {

    const { user } = use(AuthContext);
    const [startDate, setStartDate] = useState(new Date());

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

    const [axiosSecure, ready] = useAxiosSecure();

    const handleCreateAssignment = e => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const Assignment = Object.fromEntries(formData.entries());

        const description = formData.get('description');

        const newAssignment = {
            ...Assignment,
            userName: user?.displayName,
            userEmail: user?.email,
            postedAt: new Date(),
        }

        if (description.length < 20) {
            notifyError('Description length must be at least 20 characters')
            return;
        }

        if (!ready) return;
        
        axiosSecure.post('/create-assignment', newAssignment)
            .then(res => {
                if (res.data.insertedId) {
                    notifySuccess('Assignment created successfully!');
                    setTimeout(() => {
                        navigate('/assignments');
                    }, 1000);
                }
            })
            .catch(err => {
                notifyError(`Failed to create assignment: ${err.message}`);
            });

        /*
        fetch('https://online-study-room-server.vercel.app/create-assignment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAssignment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    notifySuccess('Your New Assignment was created successfully!')
                    setTimeout(() => {
                        navigate('/assignments')
                    }, 1000);
                }
            })
            .catch(error => {
                notifyError(`Ooops! Assignment was not created, ${error}`)
            })*/


    }
    return (
        <div>
            <div className='text-center bg-gradient-to-r from-blue-700 to-pink-600 text-white banner rounded-b-4xl'>
                <Fade>
                    <h2 className='font-bold text-5xl pt-20 pb-20'>Create Assigment</h2>
                </Fade>
            </div>


            <div className='mx-auto p-3 w-full md:max-w-5xl mt-10 mb-20'>
                <Fade>
                    <form onSubmit={handleCreateAssignment}>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <legend className="fieldset-legend">Assigment Details</legend>

                            <label className="label">Title</label>
                            <input type="text" className="input w-full" placeholder="Title" name="title" />

                            <label className="label">Description</label>

                            <textarea className="textarea w-full" placeholder="Description" name="description"></textarea>

                        </fieldset>

                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 mt-3">
                            <legend className="fieldset-legend">Assigment Image</legend>

                            <label className="label">PhotoURL</label>
                            <input type="text" className="input w-full" placeholder="PhotoURL" name="photoURL" />

                            <label className="label">Marks</label>
                            <input type="number" className="input w-full" placeholder="Marks" name="marks" />

                        </fieldset>


                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 mt-3">
                            <legend className="fieldset-legend">Assigment Level</legend>

                            <label className="label">Difficulty Level</label>
                            <select defaultValue="Pick a color" className="select w-full" name='level'>
                                <option disabled={true}>Pick a level</option>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>

                            <label className="label">Due Date</label>
                            {/* <input type="date" className="input w-full" placeholder="Due Date" name="dueDate" /> */}
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} name="dueDate" className="input w-full" />

                        </fieldset>
                        <button type='submit' className='btn w-full mt-4 btn-primary '>Post New Assignment</button>
                    </form>
                </Fade>
            </div>

        </div>
    );
};

export default CreateAssignment;