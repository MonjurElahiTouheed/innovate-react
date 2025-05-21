import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import Flex from "../Layout/Flex";
import Container from "../Layout/Container";

const Services = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])
    return (
        <div className="mt-[100px]">
            <Container>
                <div>
                    <p className='text-center text-[#FF7364] font-secondary font-medium text-xl'>Our Services</p>
                    <h2 className='text-center mt-1 font-primary font-bold text-[46px] text-title'>How It Works</h2>
                </div>
                <Flex className='flex-col md:flex-row justify-between mt-[80px] px-7 md:px-0 gap-y-8 md:gap-y-0'>
                    {
                        datas.map(data => <ServiceCard data={data}></ServiceCard>)
                    }
                </Flex>
                <div className="text-center mt-[80px]">
                    <button className="px-12 py-5 rounded-md border-1 border-[#3639A4] font-secondary font-medium text-lg">View More</button>
                </div>
            </Container>
        </div>
    );
};

export default Services;