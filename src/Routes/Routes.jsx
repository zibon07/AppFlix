import React from 'react';
import { createBrowserRouter } from "react-router";
import Home from '../Components/Home.jsx/Home';
import Apps from '../Pages/Apps';
import Installation from '../Pages/Installation';
import Root from '../Root/Root';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                path: '/',
                Component: Home
            },
            {
                path: '/apps',
                Component: Apps
            },
            {
                path:'/installation',
                Component:Installation

            }

        ]
    },
]);


