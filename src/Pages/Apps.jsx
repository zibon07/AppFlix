import React from 'react';
import useApps from '../useApps/useApps';
import App from './App';

const Apps = () => {
    const { apps, loading, error } = useApps()
    console.log(apps)
    return (
        <div className='bg-gray-100'>
            <div className='text-center py-5'>
                <h1 className='text-center text-3xl font-bold'>Our All Applications</h1>
                <p className='text-center text-gray-600 mt-3'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='grid max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-5'>
                {
                    apps.map(app=><App key={app.id} app={app}></App>)
                }
            </div>
        </div>
    );
};

export default Apps;