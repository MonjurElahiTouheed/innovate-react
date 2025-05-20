import { useEffect, useState } from 'react';
import Flex from '../Layout/Flex';
import Container from '../Layout/Container';
import Contentcard from '../Contentcard/Contentcard';

const Content = () => {
    const [datas, setDatas] = useState([]);
    useEffect(()=>{
        fetch('content.json')
        .then(res => res.json())
        .then(data => setDatas(data))
    },[])
    return (
        <div>
            <Container>
                <Flex className='flex-col md:flex-row justify-between px-[55px]'>
                    <h2 className='md:w-[540px] font-bold font-primary text-center md:text-left mt-16 md:mt-0 text-2xl md:text-[46px] text-title'>How simple is it to use our platform?</h2>
                    <p className='text-center md:text-left md:w-[503px] text-lg font-secondary mt-5 md:mt-0 text-description'>This Innovate Con guide explores the most popular platforms and walks you through how to use them to grow your business.</p>
                </Flex>
                <Flex className='flex-col md:flex-row justify-between mt-20 md:mt-[116px] gap-20' >
                    {
                        datas.map(data => <Contentcard data={data}></Contentcard>)
                    }
                </Flex>
            </Container>
        </div>
    );
};

export default Content;