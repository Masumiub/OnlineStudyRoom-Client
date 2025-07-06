import React from 'react';
import Header from '../../components/Header';
import FAQs from '../../components/FAQs';
import Features from '../../components/Features';
import LatestAssignments from '../../components/LatestAssignments';
import { useLoaderData } from 'react-router';
import Newsletter from '../../components/Newsletter';
import Testimonials from '../../components/Testimonials';

const Home = () => {

    const assignments = useLoaderData();

    return (
        <div>
            <Header></Header>
            <div className='mx-auto w-full md:w-8/12'>
            <LatestAssignments assignments={assignments}></LatestAssignments>
            <Features></Features>
            <Testimonials></Testimonials>
            <FAQs></FAQs>
            <Newsletter></Newsletter>
            </div>
        </div>
    );
};

export default Home;