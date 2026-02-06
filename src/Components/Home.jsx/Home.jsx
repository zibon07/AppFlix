import React from 'react';
import Hero from '../../MainLayOut/Hero';
import TrendingApps from '../TrendingApps';
import useApps from '../../useApps/useApps';
import { Link } from 'react-router';

const Home = () => {
    const { apps} = useApps()
    const trendingApps = apps.slice(0, 8)

    return (
        <div>
            <Hero></Hero>
            <div className='bg-gray-100 p-10'>
                <h1 className='text-center text-3xl font-bold'>Trending Apps</h1>
                <p className='text-center text-gray-600'>Explore All Trending Apps on the Market developed by us</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5'>
                    {
                        trendingApps.map(app => <TrendingApps key={app.id} app={app}></TrendingApps>)
                    }
                </div>
                <div className='text-center'>
                    <Link to={'/apps'}><button className='btn font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white '>Show All Apps</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Home;