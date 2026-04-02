import React from 'react';
import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const RatingsCharts = (app) => {

    // console.log(app)
    const appData = app.app
    // console.log(appData);
    return (

        <div className='w-full h-64'>
            <ResponsiveContainer  width='100%' height='100%'>
                <BarChart layout='vertical' width={1200} height={300} data={appData.ratings} >
                <XAxis type='number' />
                <YAxis type='category' dataKey='name' />
                <Bar dataKey="count" fill='orange' />
            </BarChart>
            </ResponsiveContainer>
        </div>

    );
};

export default RatingsCharts;