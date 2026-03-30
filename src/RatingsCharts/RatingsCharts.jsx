import React from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const RatingsCharts = (app) => {

    // console.log(app)
    const appData = app.app
    // console.log(appData);
    return (

        <BarChart layout='vertical' width={1200} height={300} data={appData.ratings} >
            <XAxis type='number'/>
            <YAxis type='category' dataKey='name'/>
            <Bar dataKey="count" fill='orange' />
        </BarChart>

    );
};

export default RatingsCharts;