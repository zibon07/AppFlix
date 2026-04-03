import React, { useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../useApps/useApps';
import RatingsCharts from '../RatingsCharts/RatingsCharts';
import { toast } from 'react-toastify';



const AppDetails = () => {
    const { id } = useParams()
    const { apps, loading } = useApps()
    const app = apps.find(a => String(a.id) === id)
    // console.log(app);
    const [isInstalled, setIsInstalled] = useState(false)

    const handleInstalledApps = () => {
        toast('App Installed')
        const existingList = JSON.parse(localStorage.getItem('installedApps'));
        let updatedList = [];
        if (existingList) {
            const isDuplicate = existingList.some(p => p.id === app.id)
            if (isDuplicate) return toast('Already Installed')
            updatedList = [...existingList, app]
        } else {
            updatedList.push(app)
        }
        localStorage.setItem('installedApps', JSON.stringify(updatedList))
    }

    if (loading) return <p>loading.....</p>

    return (
        <div className="bg-gray-100 min-h-[80vh] ">
            <div className="flex flex-col lg:flex-row p-15 text-center lg:text-left items-center gap-10">
                <img
                    src={app.image}
                    className="rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-3xl font-bold">{app.title}</h1>
                    <h3 className="py-4 font-bold text-gray-600">
                        Developed by  <span className=' text-2xl font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>{app.companyName}</span>
                    </h3>
                    <div className='flex flex-col lg:flex-row gap-10'>
                        <div className='flex flex-col items-center '>
                            <img className='w-8 h-8' src="/icon-downloads.png" alt="" />
                            <p className='text-gray-600 font-semibold '>Downloads</p>
                            <h2 className='text-4xl font-bold'>{app.downloads}</h2>
                        </div>
                        <div className='flex flex-col items-center  '>
                            <img className='w-8 h-8' src="/icon-ratings.png" alt="" />
                            <p className='text-gray-600 font-semibold '>Average Ratings</p>
                            <h2 className='text-4xl font-bold'>{app.ratingAvg}</h2>
                        </div>
                        <div className='flex flex-col items-center  '>
                            <img className='w-8 h-8' src="/icon-review.png" alt="" />
                            <p className='text-gray-600 font-semibold '>Total Reviews</p>
                            <h2 className='text-4xl font-bold'>{app.reviews}</h2>
                        </div>

                    </div>
                    <button disabled={isInstalled} onClick={() => {
                        setIsInstalled(true);
                        handleInstalledApps()
                    }} className="btn mt-8 font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white px-8">{isInstalled === true ? 'Installed' : 'Install Now'}<span>({app.size}MB)</span></button>
                </div>
            </div>

            <div className='py-5 border-b border-gray-500'>
                <h2 className='text-center text-2xl font-semibold'>Ratings</h2>
                <RatingsCharts app={app}></RatingsCharts>

            </div>
            <div>
                <h2 className='text-2xl font-semibold'>Description</h2>
                <p className='text-gray-500'>{app.description}</p>
            </div>
        </div>

    );
};

export default AppDetails;