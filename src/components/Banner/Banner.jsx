import React from 'react';
import Container from '../Layout/Container';
import banner_shape from '../../assets/banner_shape.png'
import banner from '../../assets/banner.png'
const Banner = () => {
    return (
        <div className="pt-[195px] text-white]  bg-no-repeat" style={{
            backgroundImage: `url(${banner_shape})`
        }}>
            <Container>
                <div className="text-center">
                    <h1 className='w-[796px] mx-auto font-primary text-[56px] font-bold leading-[64px] text-white'>Get your work done with Management Tool</h1>
                    <p className='w-[467px] mx-auto font-secondary text-lg leading-[32px] mt-5 text-white'>The world's first project management platform that connects everything</p>
                    <div className='mt-8 relative'>
                        <input className='w-[480px] py-5 border pl-6 bg-white outline-0 placeholder:text-gray-400 text-gray-400 rounded-[6px]' type="text" placeholder='Your business email'/>
                        <button className='absolute top-1/2 translate-y-[-50%] right-[480px] font-secondary text-lg font-medium py-[15px] px-7 bg-secondary rounded-[6px] text-[#2C2643]'>Try for free</button>
                    </div>
                    <div className='mt-[98px]'>
                        <img src={banner} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;