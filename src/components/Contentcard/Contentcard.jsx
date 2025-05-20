import React from 'react';
import Flex from '../Layout/Flex';

const Contentcard = ({data}) => {
    return (
        <Flex className='flex-col items-center text-center md:w-[300px]'>
            <img src={data.image} />
            <h4 className='font-bold font-primary text-title text-xl md:text-2xl mt-[26px] w-[210px] md:w-auto'>{data.title}</h4>
            <p className='font-secondary text-lg mt-3 w-[324px] md:w-auto'>{data.description}</p>
        </Flex>
    );
};

export default Contentcard;