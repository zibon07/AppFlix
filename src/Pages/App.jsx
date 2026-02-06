import React from 'react';

const App = ({app}) => {
    return (
        <div className='max-w-[350px] mx-auto bg-white h-[430px] p-2 rounded-2xl'>
            <img className='w-[335px] h-[335px] object-cover p-3 rounded-2xl' src={app.image} alt="" />
            <h3 className='font-semibold text-center p-2'>{app.title}</h3>
            <div className='flex justify-between items-center'>
                <button className='btn'><img className='w-5 h-5' src="../../public/icon-downloads.png" alt="" />{app.size}</button>
                <button className='btn'><img className='w-5 h-5' src="../../public/icon-ratings.png" alt="" />{app.ratingAvg}</button>
            </div>
        </div>
    );
};

export default App;