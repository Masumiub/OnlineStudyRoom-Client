import React from 'react';
import Header from '../../components/Header';
import FAQs from '../../components/FAQs';
import Features from '../../components/Features';
import LatestAssignments from '../../components/LatestAssignments';
import { useLoaderData } from 'react-router';

const Home = () => {

    const assignments = useLoaderData();

    return (
        <div>
            <Header></Header>
            <div className='mx-auto w-full md:w-8/12'>
            <LatestAssignments assignments={assignments}></LatestAssignments>
            <Features></Features>
            <FAQs></FAQs>
            </div>
        </div>
    );
};

export default Home;