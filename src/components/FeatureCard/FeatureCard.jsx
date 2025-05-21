
const FeatureCard = ({data}) => {
    return (
        <div className="flex flex-col items-center text-center">
            <div><img src={data.image} alt="" /></div>
            <h4 className='font-primary font-bold mt-[14px] text-title text-[22px]'>{data.title}</h4>
            <p className='mt-1.5 font-secondary text-description text-lg w-[220px]'>{data.description}</p>
        </div>
    );
};

export default FeatureCard;