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
                <Flex className='justify-between px-[55px]'>
                    <h2 className='w-[540px] font-bold font-primary text-[46px] text-title '>How simple is it to use our platform?</h2>
                    <p className='w-[503px] text-lg font-secondary text-description'>This Innovate Con guide explores the most popular platforms and walks you through how to use them to grow your business.</p>
                </Flex>
                <Flex className='justify-between mt-[116px]' >
                    {
                        datas.map(data => <Contentcard data={data}></Contentcard>)
                    }
                </Flex>
            </Container>
        </div>
    );
};

export default Content;