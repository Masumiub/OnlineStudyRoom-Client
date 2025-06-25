import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { Bounce, toast } from 'react-toastify';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from '../../provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { Slide } from "react-awesome-reveal";
import Lottie from "lottie-react";
import loginImg from '../../assets/Animation - login.json'

const Login = () => {

    const { signIn, googleSignIn } = use(AuthContext);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');

    const location = useLocation();
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


    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                navigate(`${location.state ? location.state : '/'}`);
                notifySuccess('Hello! Welcome to the Online Study Room!')
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(errorCode);

                notifyError("Password/Email is not correct!");
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                navigate(`${location.state ? location.state : '/'}`);
                notifySuccess('Hello! Welcome to the Online Study Room!')
            })
            .catch((error) => {
                notifyError(error);
            })
    }


    return (

        <>
        <Slide direction="right">
        <div className='flex flex-col md:flex-row items-center justify-center gap-5 bg-base-200 rounded-b-4xl bg-gradient-to-l from-purple-700 to-red-400 mb-5'>

            <div className='w-full md:w-1/2 mt-40 md:mt-15'>
                <div className='my-5'>
                    <h1 className='font-bold text-5xl mb-5 text-center text-white'>Signin</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <form onSubmit={handleLogin}>
                                <label className="label mt-2 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="input w-full"
                                    placeholder="Email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />

                                <label className="label mt-2 mb-2">Password</label>
                                <div className='relative'>
                                    <input type={showPassword ? 'text' : 'password'}
                                        className="input w-full " placeholder="Password" name='password' required />

                                    <button onClick={() => { setShowPassword(!showPassword) }}
                                        className='btn btn-xs absolute top-2 right-2 border-0' type="button"> {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />} </button>
                                </div>


                                <div className='mt-2'><Link to='/forgetPassword' state={{ email }} className="link link-hover">Forgot password?</Link></div>
                                {
                                    error && <p className='text-red-400'>{error}</p>
                                }

                                <button className="btn mt-4 w-full rounded-full bg-green-500 border-0 text-white" type='submit'>Login</button>
                                <div className="divider">OR</div>
                                <button onClick={handleGoogleSignIn} className="btn  w-full rounded-full" type='submit'><FcGoogle size={20} />Login with Google</button>
                            </form>
                        </fieldset>
                        <div className='text-center'>
                            <p>Don't have an account? <Link to='/register' className='text-green-500'>Register</Link> </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full md:w-1/2 flex justify-center mx-auto'>
                <Lottie className="w-[290px] md:w-[560px] lg:w-[600px] mx-auto py-40" animationData={loginImg} loop={true} ></Lottie>
            </div>

        </div>
        </Slide>
        </>
    );
};

export default Login;