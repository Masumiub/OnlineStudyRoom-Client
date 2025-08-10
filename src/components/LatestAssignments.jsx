import React, { useState } from 'react';
import Swal from 'sweetalert2';
import AssignmentCard from './AssignmentCard';
import { Fade } from 'react-awesome-reveal';

const LatestAssignments = ({assignments}) => {

    const [allAssignments, setAllAssignments] = useState(assignments);
    //console.log(allAssignments)

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
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://online-study-room-server.vercel.app/assignments/${_id}`, {
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

                                const remainingProducts = allAssignments.filter(product => product._id !== _id);
                                setAllAssignments(remainingProducts);
                            }
                        })
                }
            })
    }
    return (
        <div>
            <div className='my-25 text-center'>
                <h2 className='text-5xl'>Lastest <span className='text-violet-500 font-bold'>Assignments</span></h2>
            </div>

            <div className='p-3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-5'>
                {
                    allAssignments.map((assignment) => <Fade key={assignment._id} cascade triggerOnce><AssignmentCard assignment={assignment} handleDeleteAssignment={handleDeleteAssignment}></AssignmentCard></Fade>)
                }
            </div>
        </div>
    );
};

export default LatestAssignments;