import logo from '../../assets/logo.png';
import Container from '../Layout/Container';
import { FaBars } from "react-icons/fa6";
const Navbar = () => {
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
                    <FaBars color='white' size={24} className='md:hidden' />
                </div>
            </Container>
        </div>
    );
};

export default Navbar;