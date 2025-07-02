import React, { use, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import { Bounce, toast } from 'react-toastify';

const UpdateProfile = () => {
    const { user, setUser, updateUser, loading } = use(AuthContext);
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


    const notifySuccess = (message) => toast.success(`${message}`, {
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


    useEffect(() => {
        if (!loading && !user) {
            navigate('/login');
        }
    }, [user, navigate, loading]);

    if (loading) {
        return <div className="text-center mt-20"><p className="text-center my-20"><span className="loading loading-spinner text-primary loading-xl"></span></p></div>;
    }
    if (!user) {
        return null;
    }
    const handleUpdate = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;

        updateUser({ displayName: name, photoURL: photoURL })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: photoURL });
                notifySuccess('User Profile Updated Successfully');
                navigate('/userDetails');
                //alert('User Profile Updated Successfully');

            })
            .catch((error) => {
                //alert(error);
                notifyError(error);
                setUser(user);
            })
    }


    return (
        <div>

            <div className='text-center bg-gradient-to-r from-red-600 to-indigo-500 text-white rounded-b-4xl'>
                <h2 className='font-bold text-5xl pt-20 pb-20'>Update Profile</h2>
            </div>

            <div className='flex flex-col justify-center items-center py-5 mb-30'>

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <form onSubmit={handleUpdate}>
                                <label className="label mb-2 mt-2">Name</label>
                                <input type="text" className="input w-full" placeholder="Name" name='name' required />


                                <label className="label mb-2 mt-2">Photo URL</label>
                                <input type="text" className="input w-full" placeholder="Photo URL" name='photoURL' required />

                                <button className="btn bg-green-500 text-white rounded-full mt-4 w-full " type='submit'>Update</button>
                            </form>
                            <NavLink to='/dashboard' className='btn rounded-full w-full'>Cancel</NavLink>
                        </fieldset>
                    </div>
                </div>
                {/* <ToastContainer /> */}
            </div>
        </div>
    );
};

export default UpdateProfile;