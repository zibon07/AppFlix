/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const InstalledApps = () => {
    const [appsList, setAppsList] = useState([]);
    const [sortOrder, setSortOrder] = useState('none')

    const sortedApps = (() => {
        if (sortOrder === 'size-asc') {
            return [...appsList].sort((a, b) => a.downloads - b.downloads)
        } else if (sortOrder === 'size-desc') {
            return [...appsList].sort((a, b) => b.downloads - a.downloads)
        }
        else {
            return appsList
        }
    })()

    const handleRemove = (id) => {
        const savedApps = JSON.parse(localStorage.getItem('installedApps'));
        const updatedList = savedApps.filter(a => a.id !== id);
        setAppsList(updatedList);
        localStorage.setItem('installedApps', JSON.stringify(updatedList))
        toast("App Uninstalled")
    }

    useEffect(() => {
        const savedApps = JSON.parse(localStorage.getItem('installedApps'));
        if (savedApps) setAppsList(savedApps)
    }, [])

    return (
        <div className=' border-red-700 bg-gray-100  min-h-[80vh]'>
            <div className='max-w-250 mx-auto'>
                <div className='text-center py-5'>
                    <h1 className='text-center text-3xl font-bold'>Your Installed Apps</h1>
                    <p className='text-center text-gray-600 mt-3'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='flex flex-col items-center lg:flex-row gap-3 justify-between'>
                    <h1 className='text-3xl font-bold'><span className=' text-gray-600'>({sortedApps.length})</span>Installed App Found
                    </h1>
                    <label>
                        <select className='select select-bordered'
                            value={sortOrder}
                            onChange={e => setSortOrder(e.target.value)}>
                            <option value="none">Sort By Downloads</option>
                            <option value="size-asc">Low-&gt;High</option>
                            <option value="size-desc">High-&gt;Low</option>
                        </select>
                    </label>
                </div>
                {
                    sortedApps.map(a => 
                        <div key={a.id}>
                            <div className='rounded-2xl py-2 px-3 my-3 flex justify-between items-center bg-white '>
                                <div className='flex items-center gap-3'>
                                    <img className=' w-20 h-20' src={a.image} alt="" />
                                    <div>
                                        <h1 className='text-lg font-semibold'>{a.title}</h1>
                                        <div className='flex items-center gap-2'>
                                            <div className='flex items-center gap-2'>
                                                <img className='w-4 h-4' src={'../../public/icon-downloads.png'} alt="" />
                                                <span>{a.downloads}</span>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <img className='w-4 h-4' src={'../../public/icon-ratings.png'} alt="" />
                                                <span>{a.reviews}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button onClick={() => handleRemove(a.id)} className='btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>Uninstall</button>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default InstalledApps;