import React from 'react';
import { useParams } from 'react-router';
import useApps from '../useApps/useApps';

const AppDetails = () => {
    const { id } = useParams()
    const { apps, loading, error } = useApps()
    const app = apps.find(a => String(a.id) === id)
    console.log(app);
    
    if(loading) return <p>loading.....</p>

    return (
        <div className="bg-gray-100 min-h-[80vh] ">
            <div className="flex p-15 items-center border-2 gap-10">
                <img
                    src={app.image}
                    className="rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-3xl font-bold">{app.title}</h1>
                    <h3 className="py-4 font-bold text-gray-600">
                        Developed by : <span>{app.companyName}</span>
                    </h3>
                    <div className='flex gap-10'>
                        <div>adf</div>
                        <div>adf</div>
                        <div>asdf</div>
                    </div>
                    <button className="btn font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white px-8">Install Now</button>
                </div>
            </div>
        </div>

    );
};

export default AppDetails;