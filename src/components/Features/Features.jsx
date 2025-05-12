import React, { useEffect, useState } from 'react';
import Container from '../Layout/Container';
import Flex from '../Layout/Flex';
import featureShape from '../../assets/featureShape.png'
import arrow from '../../assets/upArrow.png';
import avatars from '../../assets/avatars.png';
import plus from '../../assets/add.png'
import dots from '../../assets/more.png'
import tick from '../../assets/project.png'
import cancel from '../../assets/cancel_ic.png';
import avatar from '../../assets/avaatar.png'
import cardIcon from '../../assets/Frame 76.png'
import chart from '../../assets/chart.png'
import check from '../../assets/tikmark.png'
import FeatureCard from '../FeatureCard/FeatureCard';
const Features = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('feature.json')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])
    return (
        <div className='mt-[164px]'>
            <Container>
                <Flex className="justify-between flex-end">
                    <div className='relative'>
                        <div className="w-[447px] h-[701px] bg-white shadow-[0_38.77px_51.69px_rgba(204,204,204,0.25)] absolute rounded-[7px]">
                            <div className='bg-[#2290F5] w-[447px] h-[20px] absolute rounded-t-[7px]'></div>
                            {/* subscribe box */}
                            <div className='py-[18px] px-[22px] absolute top-[48px] left-[-76px] rounded-md bg-white shadow-[0_7.36px_36.8px_-1.84px_rgba(6,12,59,0.08)]'>
                                <p className='text-cardHeading font-inter text-[15px] font-semibold top-10'>New Subscribers</p>
                                <Flex className='justify-between items-center gap-x-[55px]'>
                                    <div>
                                        <h3 className='font-poppins font-bold text-[32px] text-cardHeading mt-[22px]'>2010+</h3>
                                        <Flex className='gap-[6px] mt-[6px]'>
                                            <img src={arrow} alt="" />
                                            <p className='text-[#FF7364] font-primary text-[13px]'>32% this month</p>
                                        </Flex>
                                    </div>
                                    <div>
                                        <img src={avatars} alt="" />
                                    </div>
                                </Flex>
                            </div>
                            {/* subscribe box */}
                            {/* progress card */}
                            <div className='absolute top-[230px] ml-[34px] mr-[117.69px]'>
                                <Flex className="justify-between">
                                    <p className='font-medium text-base text-[#46474C] font-inter'>In Progress</p>
                                    <Flex className='gap-[14px]'>
                                        <img src={plus} alt="" />
                                        <img src={dots} alt="" />
                                    </Flex>
                                </Flex>
                                <div className='mt-[22.72px] bg-white rounded-[6px] p-[13.63px] border-2 border-[#E6E9EF]'>
                                    <Flex className='gap-x-[9px] justify-between items-center'>
                                        <a><img src={tick} alt="" /></a>
                                        <p className='text-base text-[#323338] font-inter w-[250px]'>Customer Experiance Insight</p>
                                        <a><img src={dots} alt="" /></a>
                                    </Flex>
                                    <Flex className='mt-6 gap-[22.72px]'>
                                        <p className='rounded-full bg-[#2290F5] text-sm text-white px-5 py-[5px]'>Low</p>
                                        <div className='rounded-full bg-[#FF7364] text-white px-[8.68px] pb-[5.17px] pt-[3.54px]'>
                                            <Flex className='items-center gap-[5.58px]'>
                                                <p className='font-inter text-sm'>air</p> <div><img src={cancel} alt="" /></div>
                                            </Flex>
                                        </div>
                                    </Flex>
                                    <Flex className='mt-[20.45px] justify-between'>
                                        <Flex className='items-center gap-[22.72px]'>
                                            <div>
                                                <img src={avatar} alt="" />
                                            </div>
                                            <p className="font-inter text-sm text-[#46474C]">Starday</p>
                                        </Flex>
                                        <Flex className='items-center gap-3'>
                                            <p className='font-inter text-[#5B5C60] text-center py-[2.50px] border-2 border-[#E6E9EF] rounded-full w-[57px]'>50%</p>
                                            <div>
                                                <img src={cardIcon} alt="" />
                                            </div>
                                        </Flex>
                                    </Flex>
                                </div>
                            </div>
                            {/* pending card */}
                            <div className='absolute top-[467px] ml-[34px] mr-[117.69px]'>
                                <Flex className="justify-between">
                                    <p className='font-medium text-base text-[#46474C] font-inter'>Pending</p>
                                    <Flex className='gap-[14px]'>
                                        <img src={plus} alt="" />
                                        <img src={dots} alt="" />
                                    </Flex>
                                </Flex>
                                <div className='mt-[22.72px] bg-white rounded-[6px] p-[13.63px] border-2 border-[#E6E9EF]'>
                                    <Flex className='gap-x-[9px] justify-between items-center'>
                                        <a><img src={tick} alt="" /></a>
                                        <p className='text-base text-[#323338] font-inter w-[250px]'>Customer Experiance Insight</p>
                                        <a><img src={dots} alt="" /></a>
                                    </Flex>
                                    <Flex className='mt-6 gap-[22.72px]'>
                                        <p className='rounded-full bg-[#2290F5] text-sm text-white px-5 py-[5px]'>Low</p>
                                        <div className='rounded-full bg-[#FF7364] text-white px-[8.68px] pb-[5.17px] pt-[3.54px]'>
                                            <Flex className='items-center gap-[5.58px]'>
                                                <p className='font-inter text-sm'>air</p> <div><img src={cancel} alt="" /></div>
                                            </Flex>
                                        </div>
                                    </Flex>
                                    <Flex className='mt-[20.45px] justify-between'>
                                        <Flex className='items-center gap-[22.72px]'>
                                            <div>
                                                <img src={avatar} alt="" />
                                            </div>
                                            <p className="font-inter text-sm text-[#46474C]">Starday</p>
                                        </Flex>
                                        <div>
                                            <img src={cardIcon} alt="" />
                                        </div>
                                    </Flex>
                                </div>
                            </div>
                            {/* pending card */}
                            {/* project char */}
                            <div className='absolute top-[108px] right-[-195px] py-[21.4px] px-[25.68px] rounded-md bg-white shadow-[0_8.56px_42.8px_-2.14px_rgba(6,12,59,0.08)]'>
                                <h4 className='font-inter font-semibold text-xl text-[#323338]'>Total Project Data</h4>
                                <img src={chart} alt="" />
                            </div>
                            {/* notify card */}
                            <Flex className='absolute top-[358px] right-[-195px] py-[30px] px-[23.68px] rounded-md bg-white shadow-[0_8.56px_42.8px_-2.14px_rgba(6,12,59,0.08)] flex-col items-center'>
                                <img src={check} alt="" />
                                <p className='mt-[22.12px] w-[232px] text-center text-xl font-inter text-[#323338]'>Your analytics research project is complete</p>
                                <button className='mt-4 text-center text-xl font-medium font-inter text-[#323338] bg-[#43E7DF] rounded-[6px] shadow-[0_34.93px_46.57px_rgba(204,204,204,0.25)] px-5 py-[13px]'>Project Notify</button>
                            </Flex>
                        </div>
                        <img className='ml-[-68px] mt-[50px] top-[50px] left-[-50px] -z-10' src={featureShape} alt="" />
                    </div>
                    <div className='w-[553px]'>
                        <h2 className='font-primary text-[46px] text-title font-bold tracking-[-1px]'>We provide features for your Business</h2>
                        <Flex className='flex-wrap gap-x-24 gap-y-10 mt-16'>
                            {
                                datas.map(data => <FeatureCard data={data}></FeatureCard>)
                            }
                            <Flex className="flex-col justify-end">
                            <button className='bg-primary font-secondary font-medium text-lg text-white py-5 px-12 rounded-md mb-[10px]'>Get Started</button>
                            </Flex>
                        </Flex>
                    </div>
                </Flex>
            </Container>
        </div>
    );
};

export default Features;