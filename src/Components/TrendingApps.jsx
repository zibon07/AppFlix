import React from 'react';
import { Link } from 'react-router';


const TrendingApps = ({ app }) => {
    // console.log(app)
    return (
        <Link to={`/appDetails/${app.id}`}>
        <div className='max-w-[350px] mx-auto bg-white h-[430px] p-2 rounded-2xl hover:scale-105 transition ease-in-out shadow-lg'>
            <img className='w-[335px] h-[335px] object-cover p-3 rounded-2xl' src={app.image} alt="" />
            <h3 className='font-semibold text-center p-1'>{app.title}</h3>
            <div className='flex justify-between items-center'>
                <button className='btn text-[#00D390]'><img className='w-5 h-5' src="../../public/icon-downloads.png" alt="" />{app.size}</button>
                <button className='btn text-[#FF8811]'><img className='w-5 h-5' src="../../public/icon-ratings.png" alt="" />{app.ratingAvg}</button>
            </div>
        </div></Link>
    );
};

export default TrendingApps;