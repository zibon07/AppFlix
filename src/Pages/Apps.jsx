import React, { useState } from 'react';
import useApps from '../useApps/useApps';
import App from './App';

const Apps = () => {
    const { apps } = useApps()
    const [search, setSearch] = useState('')
    const searched = search.trim().toLocaleLowerCase()
    const searchedApps = search ?
        apps.filter(a => a.title.toLocaleLowerCase().includes(searched))
        : apps;
    // console.log(searchedApps)
    // console.log(search)
    // console.log(apps)
    return (
        <div className='bg-gray-100 p-4'>
            <div className='text-center py-5'>
                <h1 className='text-center text-3xl font-bold'>Our All Applications</h1>
                <p className='text-center text-gray-600 mt-3'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex flex-col gap-3 md:flex-row justify-between items-center max-w-7xl mx-auto'>
                <h1 className='text-3xl font-bold'><span className=' text-gray-600'>({searchedApps.length})</span> Apps Found</h1>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" required placeholder="Search Apps" />
                </label>
            </div>
            <div className='grid max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5'>

                {
                    searchedApps.map(app => <App key={app.id} app={app}></App>)
                }
            </div>
        </div>
    );
};

export default Apps;