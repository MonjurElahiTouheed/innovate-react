import Flex from "../Layout/Flex";
import illutration from '../../assets/Illustration.png'
import Container from "../Layout/Container";
const Facts = () => {
    return (
        <section className="mt-[100px] md:mt-[140px]">
            <Container>
                <div className="bg-[url(assets/factsBG.png)] bg-cover bg-no-repeat bg-center rounded-4xl pt-11 pb-11 md:pb-0 px-4 md:px-0 mx-7">
                    <Flex className='flex-col md:flex-row justify-around items-center'>
                        <div>
                            <img src={illutration} alt="" />
                        </div>
                        <div className="md:w-[608px] mt-12">
                            <h2 className="font-primary font-bold text-center md:text-left text-[32px] leading-12.5 md:leading-13 w-[350px] md:w-auto mx-auto md:mx-0 md:text-[44px] text-white">Trusted by 35,000+ happy customers.</h2>
                            <Flex className="flex-col md:flex-row justify-between items-center mt-10 md:mt-16 text-center">
                                <div>
                                    <h2 className="font-primary font-bold text-[32px] md:text-[44px] text-white">720+</h2>
                                    <p className="font-secondary font-medium text-base md:text-lg text-white w-[174px] mt-1.5 md:mt-0">Over 500 business powered with us</p>
                                </div>
                                <div className="mt-7">
                                    <h2 className="font-primary font-bold text-[32px] md:text-[44px] text-white">4.9</h2>
                                    <p className="font-secondary font-medium text-base md:text-lg text-white w-[174px] mt-1.5 md:mt-0">Rating on google play and app store</p>
                                </div>
                                <div className="mt-7">
                                    <h2 className="font-primary font-bold text-[32px] md:text-[44px] text-white">200+</h2>
                                    <p className="font-secondary font-medium text-base md:text-lg text-white w-[174px] mt-1.5 md:mt-0">Easily integrate with your favorite apps</p>
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