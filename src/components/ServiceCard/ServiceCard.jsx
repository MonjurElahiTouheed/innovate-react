import rightArrowCard from '../../assets/rightArrowCard.png';
const ServiceCard = ({data}) => {
    return (
        <div className='group duration-[1000ms] ease-linear text-center md:text-left'>
            <div className="p-9 border-1 border-[#DCE7FE] shadow-[0_10px_100px_rgba(12,14,104,0.15)] md:w-[330px] rounded-[20px] group text-center md:text-left hover:bg-primary duration-300 ease-linear flex flex-col items-center md:items-start">
            <img src={data.image} alt="" />
            <h4 className="font-primary text-[22px] font-bold text-title mt-[26px] group-hover:text-white">{data.title}</h4>
            <p className="font-primary text-base tracking-[-0.25%] text-description mt-2 group-hover:text-white">{data.descripton}</p>
            <a className='mt-[26px] flex items-center' href="#"><p className='text-[#3639A4] font-medium font-secondary text-base group-hover:text-white'>Read More</p> <div className='ml-[6.5px]'><img src={rightArrowCard}/></div></a>
        </div>
        </div>
    );
};

export default ServiceCard;