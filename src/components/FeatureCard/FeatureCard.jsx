
const FeatureCard = ({data}) => {
    return (
        <div>
            <img src={data.image} alt="" />
            <h4 className='font-primary mt-[14px] text-title text-[22px]'>{data.title}</h4>
            <p className='mt-1.5 font-secondary text-description text-lg w-[220px]'>{data.description}</p>
        </div>
    );
};

export default FeatureCard;