import { useState } from 'react';
import logo from '../../assets/logo.png';
import Container from '../Layout/Container';
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
    const [state, setState] = useState(false);
    const handleState = () => {
        setState(!state);
        console.log('d')
    }
    return (
        <div className='py-8 absolute w-full'>
            <Container>
                <div className="flex justify-between items-center px-5 md:px-0">
                    <div>
                        <img src={logo} alt="#logo.png" />
                    </div>
                    <ul className='hidden md:flex gap-x-[50px] font-secondary text-lg font-medium text-white'>
                        <li>Home</li>
                        <li>Features</li>
                        <li>Service</li>
                        <li>Pages</li>
                        <li>Blog</li>
                    </ul>
                    <div className='hidden md:flex gap-x-9 items-center'>
                        <p className='font-secondary text-lg font-medium text-white'>Login</p>
                        <button className='px-12 py-5 bg-secondary rounded-md text-lg font-medium font-secondary text-[#2C2643]'>Register</button>
                    </div>
                    
                    {
                        state ? <IoMdClose onClick={handleState} color='white' size={24} className='md:hidden' /> : <FaBars onClick={handleState} color='white' size={24} className='md:hidden' />

                    }
                </div>


            {
                state && <ul className='flex flex-col items-center md:hidden py-9 font-secondary text-lg font-medium text-white bg-[#3639A4]'>
                        <li><a href="" className='font-secondary '>Home</a></li>
                        <li><a href="" className='font-secondary '>Features</a></li>
                        <li><a href="" className='font-secondary '>Service</a></li>
                        <li><a href="" className='font-secondary '>Pages</a></li>
                        <li><a href="" className='font-secondary '>Blog</a></li>
                        <hr className='w-1/2 text-white mt-7 mb-2'/>
                        <li className='mt-3'><button className='px-7 py-2.5 bg-secondary rounded-md text-lg font-medium font-secondary text-[#2C2643]'>Login</button></li>
                        <li className='mt-4'><a href="#" className='text-base md:text-lg font-medium font-secondary'>Register ?</a></li>
                    </ul>
            }

            </Container>
        </div>
    );
};

export default Navbar;