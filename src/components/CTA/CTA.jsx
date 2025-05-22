import Container from "../Layout/Container";
import Flex from "../Layout/Flex";
const CTA = ({className}) => {
    return (
        <section className={`md:mt-[160px] ${className}`}>
            
                <Flex className="flex-col md:flex-row bg-[url(assets/ctaBg.png)] bg-cover px-[102px] justify-between py-[63px] md:py-[100px] mx-7 rounded-[20px] bg-no-repeat bg-center items-center">
                    <h2 className="w-[335px] leading-11 md:leading-[56px] md:w-[577px] font-primary font-bold text-center md:text-left text-[29px] md:text-[46px] text-white px-5 md:px-0">Don’t find the answer? contact us for any query.</h2>
                    <div>
                        <button className="bg-secondary mt-7 md:mt-0 px-6 nd:px-12 py-4 md:py-5 font-secondary text-title text-base md:text-lg font-medium rounded-md">Contact Us</button>
                    </div>
                </Flex>
        </section>
    );
};

export default CTA;