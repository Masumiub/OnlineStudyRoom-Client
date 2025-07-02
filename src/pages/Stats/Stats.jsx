import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
} from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const Stats = () => {
    const assignments = useLoaderData();
    const { user } = use(AuthContext);
    //const myCreatedAssignments = assignments.filter(assignment => assignment.userEmail == user.email)


    const [loading, setLoading] = useState(true);
    const [axiosSecure, ready] = useAxiosSecure();
    const [submissions, setSubmissions] = useState([]);


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

    const chartData = submissions.map((sub) => ({
        name: sub.title,
        mark: sub.obtainedMark,
    }));

    if (!user) {
        return (
            <div className="h-[300px] flex justify-center items-center">
                <p className="text-xl">Loading user info...</p>
            </div>
        );
    }

    const myCreatedAssignments = user?.email
        ? assignments.filter(assignment => assignment.userEmail === user.email)
        : [];

    return (
        <div>
            <div className='text-center bg-gradient-to-r from-pink-600 to-orange-600 text-white rounded-b-4xl'>
                <h2 className='font-bold text-5xl pt-20 pb-20'>Dashboard Stats</h2>
            </div>

            <div className='mt-10 flex flex-col lg:flex-row gap-10 w-full'>

                <div className='bg-gradient-to-t from-base-200 to-base-100 rounded-2xl p-10 flex  items-center justify-between w-full lg:w-1/3 shadow-lg'>
                    <img width="48" height="48" src="https://img.icons8.com/color-glass/48/course-assign.png" alt="course-assign" />
                    <h3 className='text-2xl '>All Assignment</h3>
                    <h3 className='text-2xl font-semibold'>{assignments.length}</h3>
                </div>

                <div className='bg-gradient-to-t from-base-200 to-base-100 rounded-2xl p-10 flex  items-center justify-between w-full lg:w-1/3 shadow-lg'>
                    <img width="48" height="48" src="https://img.icons8.com/color/48/book-and-pencil.png" alt="book-and-pencil" />
                    <h3 className='text-2xl '>My Created</h3>
                    <h3 className='text-2xl font-semibold'>{myCreatedAssignments.length}</h3>
                </div>

                <div className='bg-gradient-to-t from-base-200 to-base-100 rounded-2xl p-10 flex  items-center justify-between w-full lg:w-1/3 shadow-lg'>
                    <img width="48" height="48" src="https://img.icons8.com/color-glass/48/teaching.png" alt="teaching" />
                    <h3 className='text-2xl '>My Submitted</h3>
                    <h3 className='text-2xl font-semibold'>{submissions.length}</h3>
                </div>
            </div>

            {/* Bar Chart Section */}
            <div className='mt-16 w-full h-[600px] bg-base-100 p-5 rounded-xl shadow-lg'>
                <h3 className='text-2xl font-bold mb-6 text-center'>My Assignment Performance</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 50 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" angle={-15} textAnchor="end" interval={0} height={80} />
                        <YAxis />
                        <Tooltip />
                        <Bar
                            dataKey="mark"
                            fill="#8884d8"
                            shape={<TriangleBar />}
                            label={{ position: 'top' }}
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Stats;