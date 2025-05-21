import Flex from "../Layout/Flex";
import illutration from '../../assets/Illustration.png'
import Container from "../Layout/Container";
const Facts = () => {
    return (
        <section className="mt-[140px]">
            <Container>
                <div className="bg-[url(assets/factsBG.png)] pt-11">
                    <Flex className='flex-col md:flex-row justify-around items-center'>
                        <div className="">
                            <img src={illutration} alt="" />
                        </div>
                        <div className="w-[608px]">
                            <h2 className="font-primary font-bold text-[44px] text-white">Trusted by 35,000+ happy customers.</h2>
                            <Flex className="justify-between items-center mt-16">
                                <div>
                                    <h2 className="font-primary font-bold text-[44px] text-white">720+</h2>
                                    <p className="font-secondary font-medium text-lg text-white w-[174px]">Over 500 business powered with us</p>
                                </div>
                                <div>
                                    <h2 className="font-primary font-bold text-[44px] text-white">4.9</h2>
                                    <p className="font-secondary font-medium text-lg text-white w-[174px]">Rating on google play and app store</p>
                                </div>
                                <div>
                                    <h2 className="font-primary font-bold text-[44px] text-white">200+</h2>
                                    <p className="font-secondary font-medium text-lg text-white w-[174px]">Easily integrate with your favorite apps</p>
                                </div>
                            </Flex>
                        </div>
                    </Flex>
                </div>
            </Container>
        </section>
    );
};

export default Facts;