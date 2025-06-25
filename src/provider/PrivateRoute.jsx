import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Lottie from 'lottie-react';
import loadingLottie from '../assets/Animation - Loading.json'

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="flex flex-col mx-auto justify-center h-screen">
            <div className="mx-auto"><Lottie style={{ width: '500px' }} animationData={loadingLottie} loop={true} ></Lottie></div>
            <div><p className="text-center text-4xl mt-5">Loading...</p></div>
        </div>;
    }
    if (user && user?.email) {
        return children;
    }
    else {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }

};

export default PrivateRoute;