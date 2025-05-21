import React, { useEffect, useState } from 'react';
import Container from '../Layout/Container';
import Flex from '../Layout/Flex';
import featureShape from '../../assets/featureShape.png'
import arrow from '../../assets/upArrow.png';
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
                <Flex className="flex-col md:flex-row justify-between flex-end gap-y-[960px] md:gap-y-0">
                    <div className='relative w-[80%] md:w-auto mx-auto md:mx-0'>
                        <div className="px-4 md:px-0 w-full md:w-[447px] h-[1220px] md:h-[701px] bg-white shadow-[0_38.77px_51.69px_rgba(204,204,204,0.25)] absolute rounded-[7px]">
                            <div className='bg-[#2290F5] w-[100%] ml-[-16px] md:w-[447px] h-[20px] absolute rounded-t-[7px]'></div>
                            {/* subscribe box */}
                            <div className='py-[18px] px-[22px] absolute top-[48px] md:left-[-76px] rounded-md bg-white shadow-[0_7.36px_36.8px_-1.84px_rgba(6,12,59,0.08)]'>
                                <p className='text-cardHeading font-inter text-[15px] font-semibold top-10'>New Subscribers</p>
                                <Flex className='justify-between items-center md:gap-x-[55px]'>
                                    <div>
                                        <h3 className='font-poppins font-bold text-2xl md:text-[32px] text-cardHeading mt-[22px]'>2010+</h3>
                                        <Flex className='gap-[6px] mt-[6px]'>
                                            <img className='w-[14.72px] h-[14.72px]' src={arrow} alt="" />
                                            <p className='text-[#FF7364] font-primary text-sm md:text-[13px] w-[112px] md:w-auto'>32% this month</p>
                                        </Flex>
                                    </div>
                                    <div>
                                        {/* <img src={avatars} alt="" /> */}
                                        <div className="flex">
                                            <div className="w-[38.31px] md:w-[48.31px] h-[38.31px] md:h-[48.72px] rounded-full bg-[#C4C4C4] border-2 border-white z-[999]"></div>
                                            <div className="-ml-3.5 w-[38.31px] md:w-[48.31px] h-[38.31px] md:h-[48.72px] rounded-full bg-[#C4C4C4] border-2 border-white z-[99]"></div>
                                            <div className="-ml-3.5 w-[38.31px] md:w-[48.31px] h-[38.31px] md:h-[48.72px] rounded-full bg-[#C4C4C4] border-2 border-white z-[9]"></div>
                                            <div className="-ml-3.5 w-[38.31px] md:w-[48.31px] h-[38.31px] md:h-[48.72px] rounded-full bg-[#C4C4C4] border-2 border-white"></div>
                                        </div>
                                    </div>
                                </Flex>
                            </div>
                            {/* subscribe box */}
                            {/* progress card */}
                            <div className='absolute top-[230px] ml-[10px] md:ml-[34px] mr-[117.69px]'>
                                <Flex className="justify-between">
                                    <p className='font-medium text-sm md:text-base text-[#46474C] font-inter'>In Progress</p>
                                    <Flex className='gap-[14px]'>
                                        <img src={plus} alt="" />
                                        <img src={dots} alt="" />
                                    </Flex>
                                </Flex>
                                <div className='mt-[22.72px] bg-white rounded-[6px] p-[13.63px] border-2 border-[#E6E9EF]'>
                                    <Flex className=' justify-between items-center'>
                                        <div className='flex items-center gap-x-[9px]'>
                                            <a><img src={tick} alt="" /></a>
                                        <p className='text-xs md:text-base text-[#323338] font-inter w-[185px] md:w-[250px]'>Customer Experiance Insight</p>
                                        </div>
                                        <a className='w-4 h-4'><img src={dots} alt="" /></a>
                                    </Flex>
                                    <Flex className='mt-6 gap-[22.72px]'>
                                        <p className='rounded-full bg-[#2290F5] text-xs md:text-sm text-white px-4 md:px-5 py-[5px]'>Low</p>
                                        <div className='rounded-full bg-[#FF7364] text-white px-[8.68px] pb-[5.17px] pt-[3.54px]'>
                                            <Flex className='items-center gap-[5.58px]'>
                                                <p className='font-inter text-xs md:text-sm'>air</p> <div><img src={cancel} alt="" /></div>
                                            </Flex>
                                        </div>
                                    </Flex>
                                    <Flex className='mt-[20.45px] justify-between'>
                                        <Flex className='items-center gap-1.5 md:gap-[22.72px]'>
                                            <div className='w-7 md:w-auto'>
                                                <img src={avatar} alt="" />
                                            </div>
                                            <p className="font-inter text-xs md:text-sm text-[#46474C]">Starday</p>
                                        </Flex>
                                        <Flex className='items-center gap-3'>
                                            <p className='font-inter text-[#5B5C60] text-center py-[2.50px] border-2 border-[#E6E9EF] rounded-full w-[57px] text-xs md:text-sm'>50%</p>
                                            <div>
                                                <img src={cardIcon} alt="" />
                                            </div>
                                        </Flex>
                                    </Flex>
                                </div>
                            </div>
                            {/* pending card */}
                            <div className='absolute top-[467px] ml-[10px] md:ml-[34px] mr-[117.69px]'>
                                <Flex className="justify-between">
                                    <p className='font-medium text-sm md:text-base text-[#46474C] font-inter'>Pending</p>
                                    <Flex className='gap-[14px]'>
                                        <img src={plus} alt="" />
                                        <img src={dots} alt="" />
                                    </Flex>
                                </Flex>
                                <div className='mt-[22.72px] bg-white rounded-[6px] p-[13.63px] border-2 border-[#E6E9EF]'>
                                    <Flex className=' justify-between items-center'>
                                        <div className='flex items-center gap-x-[9px]'>
                                            <a><img src={tick} alt="" /></a>
                                        <p className='text-xs md:text-base text-[#323338] font-inter w-[185px] md:w-[250px]'>Customer Experiance Insight</p>
                                        </div>
                                        <a className='w-4 h-4'><img src={dots} alt="" /></a>
                                    </Flex>
                                    <Flex className='mt-6 gap-[22.72px]'>
                                        <p className='rounded-full bg-[#2290F5] text-xs md:text-sm text-white px-4 md:px-5 py-[5px]'>Low</p>
                                        <div className='rounded-full bg-[#FF7364] text-white px-[8.68px] pb-[5.17px] pt-[3.54px]'>
                                            <Flex className='items-center gap-[5.58px]'>
                                                <p className='font-inter text-xs md:text-sm'>air</p> <div><img src={cancel} alt="" /></div>
                                            </Flex>
                                        </div>
                                    </Flex>
                                    <Flex className='mt-[20.45px] justify-between'>
                                        <Flex className='items-center gap-1.5 md:gap-[22.72px]'>
                                            <div className='w-7 md:w-auto'>
                                                <img src={avatar} alt="" />
                                            </div>
                                            <p className="font-inter text-xs md:text-sm text-[#46474C]">Starday</p>
                                        </Flex>
                                        <Flex className='items-center gap-3'>
                                            <p className='font-inter text-[#5B5C60] text-center py-[2.50px] border-2 border-[#E6E9EF] rounded-full w-[57px] text-xs md:text-sm'>50%</p>
                                            <div>
                                                <img src={cardIcon} alt="" />
                                            </div>
                                        </Flex>
                                    </Flex>
                                </div>
                            </div>
                            {/* pending card */}
                            {/* project char */}
                            <div className='absolute top-[690px] md:top-[108px] right-[36px] md:right-[-217px] py-[21.4px] px-[25.68px] rounded-md bg-white shadow-[0_8.56px_42.8px_-2.14px_rgba(6,12,59,0.08)]'>
                                <h4 className='font-inter font-semibold text-xl text-[#323338] w-'>Total Project Data</h4>
                                <img className='mt-3 w-[200px]' src={chart} alt="" />
                            </div>
                            {/* notify card */}
                            <Flex className='absolute top-[940px] md:top-[357px] right-[36px] md:right-[-217px] py-[30px] px-[23.68px] rounded-md bg-white shadow-[0_8.56px_42.8px_-2.14px_rgba(6,12,59,0.08)] flex-col items-center'>
                                <img src={check} alt="" />
                                <p className='mt-[22.12px] w-[200px] md:w-[232px] text-center text-[17px] md:text-xl font-inter text-[#323338]'>Your analytics research project is complete</p>
                                <button className='mt-4 text-center text-base md:text-xl font-medium font-inter text-[#323338] bg-[#43E7DF] rounded-[6px] shadow-[0_34.93px_46.57px_rgba(204,204,204,0.25)] px-5 py-[13px]'>Project Notify</button>
                            </Flex>
                        </div>
                        <img className='ml-[-30px] mt-[50px] -z-10' src={featureShape} alt="" />
                    </div>
                    <div className='w-[80%] md:w-[553px] mx-auto'>
                        <h2 className='font-primary text-[46px] text-title font-bold tracking-[-1px] text-center md:text-left'>We provide features for your Business</h2>
                        <Flex className='flex-wrap justify-center gap-x-24 gap-y-10 mt-16'>
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