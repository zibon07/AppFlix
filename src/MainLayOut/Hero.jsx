import React from 'react';

const Hero = () => {
    return (
        <div className='bg-gray-100'>
            <div className='flex flex-col text-center p-8 '>
                <h1 className='text-5xl font-bold'>We Build <br />
                    <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
                <p className='text-gray-600 mt-3'>At AppFlix, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>

            <div className='flex flex-col justify-center items-center text-center'>
                <div className='flex gap-2 mb-4'>
                    <a href='https://play.google.com/store/games?hl=en' target='_blank' className="btn font-semibold"><img src="../../public/fi_16076057.png" alt="" />Google play</a>
                    
                    <a href='https://www.apple.com/app-store/' target='_blank' className="btn font-semibold"><img src="../../public/fi_5977575.png" alt="" />App store</a>
                </div>
              
                    <img className='max-w-[480px] ' src="../../public/hero.png" alt="" />
                
            </div>

            <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] p-8 text-center'>
                <h1 className='text-4xl font-bold text-white mb-4'>Trusted by Millions, Built for You</h1>
                <div className='flex flex-col md:flex-row gap-15 justify-center my-3 '>
                    <div className='text-white flex flex-col text-center'>
                        <p>Total Downloads</p>
                        <h1 className='text-7xl font-bold my-2'>29.6M</h1>
                        <p>21% more than last month</p>
                    </div>
                    <div className='text-white flex flex-col text-center'>
                        <p>Total Reviews</p>
                        <h1 className='text-7xl font-bold my-2'>906K</h1>
                        <p>46% more than last month</p>
                    </div>
                    <div className='text-white flex flex-col text-center'>
                        <p>Active Apps </p>
                        <h1 className='text-7xl font-bold my-2'>132+</h1>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;