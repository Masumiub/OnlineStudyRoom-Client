import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import { Outlet } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ToastContainer />
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;