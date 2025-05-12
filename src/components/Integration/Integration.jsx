import Container from '../Layout/Container';
import intergrationShape from '../../assets/intergrationShape.png'
import Flex from '../Layout/Flex';
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import logo4 from '../../assets/logo4.png';
import logo5 from '../../assets/logo5.png';
import logo6 from '../../assets/logo6.png';
import logo7 from '../../assets/logo7.png';
const Integration = () => {
    return (
        <div className='bg-[#F4FAFA] pt-[124px] pb-[120px] mt-[195px]'>
            <Container>
                <Flex className="justify-between">
                    <div className='relative'>
                        <h5 className='text-[#FF7364] font-secondary text-xl font-medium'>Integrations</h5>
                        <h2 className='mt-1 font-primary font-bold text-[46px] text-title w-[587px]'>Easily integrate with your favorite apps</h2>
                        <p className='mt-5 font-secondary text-lg text-description w-[533px]'>App integration, in a general sense, is the process of bringing resources or capabilities from one application to another. As the world of apps continues to evolve, app integration is becoming expected in many contexts.</p>
                        <button className='mt-10 bg-primary font-secondary font-medium text-lg text-white py-5 px-12 rounded-md'>Get Started</button>
                        <img className='absolute left-[-160px]' src={intergrationShape} alt="" />
                    </div>
                    <div className='w-[46%]'>
                        <Flex className='justify-between'>
                            <img className='px-[65px] py-[45px] rounded-xl bg-white' src={logo1} alt="" />
                            <img className='px-[65px] py-[45px] rounded-xl bg-white' src={logo2} alt="" />
                        </Flex>
                        <Flex className='justify-between mt-[35px]'>
                            <img className='px-[30px] py-[45px] rounded-xl bg-white' src={logo3} alt="" />
                            <img className='px-[60px] py-[50px] rounded-xl bg-white' src={logo4} alt="" />
                            <img className='px-[37px] py-[33px] rounded-xl bg-white' src={logo5} alt="" />
                        </Flex>
                        <Flex className='justify-between mt-[33px]'>
                        <img className='px-[17px] py-[60px] rounded-xl bg-white' src={logo6} alt="" />
                            <img className='px-[37px] py-[33px] rounded-xl bg-white' src={logo5} alt="" />
                            <img className='pl-[22px] pr-[8px] py-[54px] rounded-xl bg-white' src={logo7} alt="" />
                        </Flex>
                    </div>
                </Flex>
            </Container>
        </div>
    );
};

export default Integration;