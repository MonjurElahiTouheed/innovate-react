import Container from "../Layout/Container";
import Flex from "../Layout/Flex";
const CTA = ({className}) => {
    return (
        <section className={`mt-[160px] ${className}`}>
            
                <Flex className="bg-[url(assets/ctaBg.png)] px-[102px] justify-between py-[100px] rounded-[20px] bg-no-repeat bg-center items-center">
                    <h2 className="w-[577px] font-primary font-bold text-[46px] text-white">Don’t find the answer? contact us for any query.</h2>
                    <div>
                        <button className="bg-secondary px-12 py-5 font-secondary text-title text-lg font-medium rounded-md">Contact Us</button>
                    </div>
                </Flex>
        </section>
    );
};

export default CTA;