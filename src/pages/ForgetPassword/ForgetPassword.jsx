import React, { use, useEffect, useState } from 'react';
import { Bounce, toast } from 'react-toastify';
import { NavLink, useLocation } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const ForgetPassword = () => {

    const { resetPassword } = use(AuthContext);
    const location = useLocation();
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (location.state?.email) {
            setEmail(location.state.email);
        }
    }, [location.state]);


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

    const handleForgetPassword = () => {
        resetPassword(email)
            .then(() => {
                notifySuccess('A password reset email is sent. Please check your email.');
                setTimeout(() => {
                    window.location.href = 'https://mail.google.com';
                }, 2000);
            })
            .catch((error) => {
                notifyError(error.message);
            });
    };

    return (
        <div>
            <div className='flex flex-col justify-center items-center py-5 mb-30'>
                <div className='my-5'>
                    <h1 className='font-bold text-4xl'>Reset Password</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                    <div className="card-body">
                        <fieldset className="fieldset">
                            <form>

                                <label className="label mb-2 mt-2">Email</label>
                                <input
                                    type="email"
                                    className="input w-full"
                                    placeholder="Email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />


                                <button onClick={(e) => {
                                    e.preventDefault();
                                    handleForgetPassword();
                                }} className="btn bg-green-500 text-white rounded-full mt-4 w-full " type='submit'>Reset Password</button>
                            </form>
                            <NavLink to='/login' className='btn rounded-full w-full'>Cancel</NavLink>
                        </fieldset>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ForgetPassword;