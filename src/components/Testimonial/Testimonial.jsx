import Container from "../Layout/Container";
import Flex from "../Layout/Flex";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Testimonial = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (

            <FaChevronRight color="#3639A4" className={className}
                style={{ ...style, display: "block", width: '34px', height: '34px', right: '-53px', top: '53%', transform: 'translateY(0%)' }}
                onClick={onClick} />

        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <FaChevronLeft color="#3639A4" className={className}
                style={{ ...style, display: "block", width: '34px', height: '34px', left: '-53px', top: '53%', transform: 'translateY(0%)' }}
                onClick={onClick} />
        );
    }

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000
                }
            }
        ]
    };
    return (
        <section className="py-[200px] bg-[#F4FAFA] mt-[160px]">
            <Container>
                <Flex className='flex-col md:flex-row items-center justify-between gap-y-30 md:gap-y-0'>
                    <div className="text-center md:text-left">
                        <h2 className="font-primary text-[46px] text-title font-bold md:w-[594px]">What they are talking
                            about us?</h2>
                        <p className="font-secondary text-lg text-description md:w-[503px] mt-5">testimonials are evidence of customers talking about your product or service in their own words. At their best, they are authentic, descriptive.</p>
                        <button className="mt-10 bg-primary rounded-md font-secondary font-medium text-lg text-white px-12 py-5">Get Started</button>

                        <Flex className='mt-20 justify-around md:justify-normal md:gap-[30.26px]'>
                            <div className="flex">
                                <div className="w-[58.31px] h-[58.72px] rounded-full bg-[#C4C4C4] border-2 border-white"></div>
                                <div className="-ml-5 w-[58.31px] h-[58.72px] rounded-full bg-[#C4C4C4] border-2 border-white"></div>
                                <div className="-ml-5  w-[58.31px] h-[58.72px] rounded-full bg-[#C4C4C4] border-2 border-white"></div>
                                <div className="-ml-5  w-[58.31px] h-[58.72px] rounded-full bg-[#C4C4C4] border-2 border-white"></div>
                            </div>
                            <div>
                                <div className="flex items-baseline">
                                    <h2 className="font-primary text-2xl font-black text-[#52C5B6] ">4.5</h2>
                                    {/* <h2 className="font-primary text-2xl font-black text-[#52C5B6] after:content[''] after:absolute after:top-0 after:left-0 after:w-[1px] after:h-[16.2px] after:bg-[#DADBE2] rounded-full">4.5</h2> */}
                                    <div className="w-[2px] h-[18px] rounded-full bg-[#DADBE2] ml-2"></div>
                                    <Flex className='ml-[15px]'>
                                        <FaStar color="#FDB400" size={19} />
                                        <FaStar color="#FDB400" size={19} />
                                        <FaStar color="#FDB400" size={19} />
                                        <FaStar color="#FDB400" size={19} />
                                    </Flex>
                                </div>
                                <p className="font-secondary text-lg text-description font-medium mt-[3px]">280k Total Review</p>
                            </div>
                        </Flex>
                    </div>

                    <Slider {...settings} className="w-[88%] md:w-[687px]">
                        <div>
                            {/* slider content starts */}
                            <div className="px-12 pt-16 pb-[50px] bg-white rounded-[20px] relative mt-20">
                                <p className="font-secondary text-[22px] text-[#6C6E81] leading-[44px] md:w-[567px]">“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>
                                <Flex className='justify-between items-end mt-9'>
                                    <div>
                                        <h5 className="font-primary font-bold text-2xl text-[#30344E]">Robert Fox</h5>
                                        <p className="font-secondary text-base text-[#30344E] mt-1.5">Digital Marketer</p>
                                    </div>
                                    <Flex className='justify-between'>
                                        <FaStar color="#FDB400" size={19} />
                                        <FaStar color="#FDB400" size={19} />
                                        <FaStar color="#FDB400" size={19} />
                                        <FaStar color="#FDB400" size={19} />
                                    </Flex>
                                </Flex>
                                <div className="w-[124px] h-[124px] rounded-full bg-[#C4C4C4] outline-[10px] outline-[#F7F7FC] absolute -top-20 left-9"></div>
                            </div>
                            {/* slider content ends */}
                        </div>
                        <div>
                            {/* slider content starts */}
                            <div className="px-12 pt-16 pb-[50px] bg-white rounded-[20px] relative mt-20">
                                <p className="font-secondary text-[22px] text-[#6C6E81] leading-[44px] md:w-[567px]">“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>
                                <Flex className='justify-between items-end mt-9'>
                                    <div>
                                        <h5 className="font-primary font-bold text-2xl text-[#30344E]">Robert Fox</h5>
                                        <p className="font-secondary text-base text-[#30344E] mt-1.5">Digital Marketer</p>
                                    </div>
                                    <Flex className='justify-between'>
                                        <FaStar color="#FDB400" size={19} />
                                        <FaStar color="#FDB400" size={19} />
                                        <FaStar color="#FDB400" size={19} />
                                        <FaStar color="#FDB400" size={19} />
                                    </Flex>
                                </Flex>
                                <div className="w-[124px] h-[124px] rounded-full bg-[#C4C4C4] outline-[10px] outline-[#F7F7FC] absolute -top-20 left-9"></div>
                            </div>
                            {/* slider content ends */}
                        </div>
                        <div>
                            {/* slider content starts */}
                            <div className="px-12 pt-16 pb-[50px] bg-white rounded-[20px] relative mt-20">
                                <p className="font-secondary text-[22px] text-[#6C6E81] leading-[44px] md:w-[567px]">“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>
                                <Flex className='justify-between items-end mt-9'>
                                    <div>
                                        <h5 className="font-primary font-bold text-2xl text-[#30344E]">Robert Fox</h5>
                                        <p className="font-secondary text-base text-[#30344E] mt-1.5">Digital Marketer</p>
                                    </div>
                                    <Flex className='justify-between'>
                                        <FaStar color="#FDB400" size={19} />
                                        <FaStar color="#FDB400" size={19} />
                                        <FaStar color="#FDB400" size={19} />
                                        <FaStar color="#FDB400" size={19} />
                                    </Flex>
                                </Flex>
                                <div className="w-[124px] h-[124px] rounded-full bg-[#C4C4C4] outline-[10px] outline-[#F7F7FC] absolute -top-20 left-9"></div>
                            </div>
                            {/* slider content ends */}
                        </div>
                        <div>
                            {/* slider content starts */}
                            <div className="px-12 pt-16 pb-[50px] bg-white rounded-[20px] relative mt-20">
                                <p className="font-secondary text-[22px] text-[#6C6E81] leading-[44px] md:w-[567px]">“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>
                                <Flex className='justify-between items-end mt-9'>
                                    <div>
                                        <h5 className="font-primary font-bold text-2xl text-[#30344E]">Robert Fox</h5>
                                        <p className="font-secondary text-base text-[#30344E] mt-1.5">Digital Marketer</p>
                                    </div>
                                    <Flex className='justify-between'>
                                        <FaStar color="#FDB400" size={19} />
                                        <FaStar color="#FDB400" size={19} />
                                        <FaStar color="#FDB400" size={19} />
                                        <FaStar color="#FDB400" size={19} />
                                    </Flex>
                                </Flex>
                                <div className="w-[124px] h-[124px] rounded-full bg-[#C4C4C4] outline-[10px] outline-[#F7F7FC] absolute -top-20 left-9"></div>
                            </div>
                            {/* slider content ends */}
                        </div>
                        <div>
                            {/* slider content starts */}
                            <div className="px-12 pt-16 pb-[50px] bg-white rounded-[20px] relative mt-20">
                                <p className="font-secondary text-[22px] text-[#6C6E81] leading-[44px] md:w-[567px]">“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>
                                <Flex className='justify-between items-end mt-9'>
                                    <div>
                                        <h5 className="font-primary font-bold text-2xl text-[#30344E]">Robert Fox</h5>
                                        <p className="font-secondary text-base text-[#30344E] mt-1.5">Digital Marketer</p>
                                    </div>
                                    <Flex className='justify-between'>
                                        <FaStar color="#FDB400" size={19} />
                                        <FaStar color="#FDB400" size={19} />
                                        <FaStar color="#FDB400" size={19} />
                                        <FaStar color="#FDB400" size={19} />
                                    </Flex>
                                </Flex>
                                <div className="w-[124px] h-[124px] rounded-full bg-[#C4C4C4] outline-[10px] outline-[#F7F7FC] absolute -top-20 left-9"></div>
                            </div>
                            {/* slider content ends */}
                        </div>
                        <div>
                            {/* slider content starts */}
                            <div className="px-12 pt-16 pb-[50px] bg-white rounded-[20px] relative mt-20">
                                <p className="font-secondary text-[22px] text-[#6C6E81] leading-[44px] md:w-[567px]">“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>
                                <Flex className='justify-between items-end mt-9'>
                                    <div>
                                        <h5 className="font-primary font-bold text-2xl text-[#30344E]">Robert Fox</h5>
                                        <p className="font-secondary text-base text-[#30344E] mt-1.5">Digital Marketer</p>
                                    </div>
                                    <Flex className='justify-between'>
                                        <FaStar color="#FDB400" size={19} />
                                        <FaStar color="#FDB400" size={19} />
                                        <FaStar color="#FDB400" size={19} />
                                        <FaStar color="#FDB400" size={19} />
                                    </Flex>
                                </Flex>
                                <div className="w-[124px] h-[124px] rounded-full bg-[#C4C4C4] outline-[10px] outline-[#F7F7FC] absolute -top-20 left-9"></div>
                            </div>
                            {/* slider content ends */}
                        </div>
                    </Slider>
                </Flex>



            </Container>
        </section>
    );
};

export default Testimonial;