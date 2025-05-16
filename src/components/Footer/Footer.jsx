import Container from '../Layout/Container';
import Flex from '../Layout/Flex';
import footerLogo from '../../assets/footerLogo.png';
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import sendPlane from '../../assets/sendPlane.png';
import CTA from '../CTA/CTA';
const Footer = () => {
    return (
        <footer className='mt-[309px] bg-[#F7F7FC] relative'>
            <CTA className='absolute bottom-[509px] left-[50%] transform translate-x-[-50%] w-[1410px]'></CTA>
            <Container>
                <Flex className='pt-[291px] justify-between'>
                    <div className='w-[263px]'>
                        <img src={footerLogo} alt="" />
                        <p className='font-secondary text-description text-base w-[263px] mt-[26px]'>Build a modern and creative website with Innovate.</p>
                        <Flex className='gap-1.5 mt-6'>
                            <a className='bg-[#EEEEEE] w-[42px] h-[40px] rounded-full flex items-center justify-center'><FaGoogle color='#645E76' size={16}></FaGoogle></a>
                            <a className='bg-[#EEEEEE] w-[42px] h-[40px] rounded-full flex items-center justify-center'><FaTwitter color='#645E76' size={16}></FaTwitter></a>
                            <a className='bg-[#EEEEEE] w-[42px] h-[40px] rounded-full flex items-center justify-center'><FaInstagram color='#645E76' size={16}></FaInstagram></a>
                            <a className='bg-[#EEEEEE] w-[42px] h-[40px] rounded-full flex items-center justify-center'><FaLinkedin color='#645E76' size={16}></FaLinkedin></a>
                        </Flex>
                    </div>
                    <Flex className='justify-between w-[68%]'>
                        <ul>
                            <li className='font-secondary font-medium text-lg text-title'><a href="">Product</a></li>
                            <li className='font-secondary text-base text-description mt-5'><a href="">Landingpages</a></li>
                            <li className='font-secondary text-base text-description mt-3'><a href="">Pricing</a></li>
                            <li className='font-secondary text-base text-description mt-3'><a href="">Benefits</a></li>
                            <li className='font-secondary text-base text-description mt-3'><a href="">Features</a></li>
                        </ul>
                        <ul>
                            <li className='font-secondary font-medium text-lg text-title'><a href="">Company</a></li>
                            <li className='font-secondary text-base text-description mt-5'><a href="">About</a></li>
                            <li className='font-secondary text-base text-description mt-5'><a href="">Privacy Policy</a></li>
                            <li className='font-secondary text-base text-description mt-3'><a href="">Terms & Conditions</a></li>
                            <li className='font-secondary text-base text-description mt-3'><a href="">Partners</a></li>
                            <li className='font-secondary text-base text-description mt-3'><a href="">Contact</a></li>
                        </ul>
                        <ul>
                            <li className='font-secondary font-medium text-lg text-title'><a href="">Resources</a></li>
                            <li className='font-secondary text-base text-description mt-5'><a href="">Guides and resources</a></li>
                            <li className='font-secondary text-base text-description mt-3'><a href="">Blog</a></li>
                            <li className='font-secondary text-base text-description mt-3'><a href="">Tools</a></li>
                            <li className='font-secondary text-base text-description mt-3'><a href="">Support</a></li>
                        </ul>
                        <ul>
                            <li className='font-secondary font-medium text-lg text-title'><a href="">Get Latest Updates</a></li>
                            <li className='font-secondary text-base text-description mt-5 w-[285px]'>Subscribe to our newsletter and get many interesting things every week</li>
                            <li className='relative font-secondary text-base text-description mt-8'><input type="text" className='pl-[18px] pt-4 pb-3 border-1 border-[#D2D2D2] placeholder:text-[#A1A2A3] placeholder:font-poppins placeholder:text-xs rounded-[5px] w-[269px]' placeholder='Your Email Address' />
                                <div className="absolute -translate-y-1/2 top-1/2 right-6 w-9 h-9 rounded-md bg-primary flex justify-center items-center">
                                    <img src={sendPlane} alt="" />
                                </div>
                            </li>
                        </ul>
                    </Flex>
                </Flex>
                    <div className='bg-[rgba(210,210,210,0.2)] p-0.5 mt-[86px] rounded-full'></div>
                    <p className='font-inter text-sm text-description pt-6 pb-[30px]'>© 2024 Innovate - All Right Reserved</p>
            </Container>
        </footer>
    );
};

export default Footer;