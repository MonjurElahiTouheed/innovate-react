import Container from "../Layout/Container";
import Flex from "../Layout/Flex";
import { HiCheck } from "react-icons/hi";
import pricingCheck from '../../assets/pricingCheck.png'

const Pricing = () => {
    return (
        <section className="mt-[100px] md:mt-[140px]">
            <h2 className="md:w-[624px] mx-auto font-bold font-primary text-3xl leading-[58px] md:text-[46px] text-title text-center">Pricing Designed To Fit Your Business</h2>
            <h5 className="text-center font-primary text-primary text-[21px] md:text-2xl font-bold mt-[39px]">Monthly</h5>
            <Container>
                <Flex className='flex-col md:flex-row mt-[77px] justify-between px-7 md:px-0 gap-y-12 md:gap-y-0'>
                    <div className="px-12 py-10 border-1 border-[#DCE7FE] rounded-[20px] group hover:bg-primary ease-linear duration-200">
                        <div className="flex justify-center">
                            <div className="w-[90px] h-[90px] rounded-full bg-[#E8F2FA] flex items-center justify-center group-hover:bg-white ease-linear duration-200">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_1592)">
                                        <path d="M19.7145 19.2682C22.3615 19.2682 24.6534 18.3188 26.5266 16.4456C28.3991 14.5727 29.3488 12.2812 29.3488 9.63377C29.3488 6.98729 28.3994 4.69543 26.5263 2.82195C24.6531 0.9494 22.3612 0 19.7145 0C17.0671 0 14.7755 0.9494 12.9026 2.82226C11.0298 4.69512 10.0801 6.98699 10.0801 9.63377C10.0801 12.2812 11.0298 14.573 12.9026 16.4459C14.7761 18.3184 17.068 19.2682 19.7145 19.2682ZM14.5604 4.47967C15.9974 3.0426 17.6832 2.34405 19.7145 2.34405C21.7454 2.34405 23.4315 3.0426 24.8689 4.47967C26.3059 5.91704 27.0048 7.60314 27.0048 9.63377C27.0048 11.665 26.3059 13.3508 24.8689 14.7882C23.4315 16.2256 21.7454 16.9241 19.7145 16.9241C17.6838 16.9241 15.998 16.2253 14.5604 14.7882C13.123 13.3511 12.4241 11.665 12.4241 9.63377C12.4241 7.60314 13.123 5.91704 14.5604 4.47967Z" fill="currentColor" className="text-[#2290F5] group-hover:text-primary" />
                                        <path d="M36.5725 30.7582C36.5185 29.9788 36.4092 29.1286 36.2484 28.2308C36.0861 27.3262 35.877 26.4711 35.6268 25.6896C35.368 24.8818 35.0167 24.084 34.5819 23.3196C34.1311 22.5261 33.6013 21.8352 33.0068 21.2667C32.3852 20.6719 31.6241 20.1937 30.744 19.8448C29.8669 19.4979 28.8949 19.3221 27.8552 19.3221C27.4469 19.3221 27.052 19.4896 26.2893 19.9861C25.82 20.2922 25.271 20.6462 24.6582 21.0378C24.1342 21.3716 23.4243 21.6844 22.5476 21.9676C21.6922 22.2444 20.8236 22.3848 19.9661 22.3848C19.1092 22.3848 18.2406 22.2444 17.3846 21.9676C16.5088 21.6847 15.7986 21.3719 15.2756 21.0381C14.6686 20.6502 14.1192 20.2962 13.6429 19.9858C12.8808 19.4893 12.4859 19.3218 12.0776 19.3218C11.0376 19.3218 10.0659 19.4979 9.18914 19.8452C8.30962 20.1934 7.54821 20.6716 6.92596 21.267C6.33148 21.8358 5.80169 22.5264 5.35125 23.3196C4.91699 24.084 4.56543 24.8815 4.30664 25.6899C4.0567 26.4714 3.84766 27.3262 3.6853 28.2308C3.52417 29.1274 3.41522 29.9779 3.36121 30.7591C3.30811 31.523 3.28125 32.318 3.28125 33.1212C3.28125 35.2092 3.94501 36.8996 5.2539 38.1462C6.54662 39.3764 8.25683 40.0001 10.3372 40.0001H29.5974C31.6772 40.0001 33.3874 39.3764 34.6804 38.1462C35.9896 36.9005 36.6534 35.2095 36.6534 33.1209C36.6531 32.3149 36.6259 31.5199 36.5725 30.7582ZM33.0642 36.4479C32.21 37.2609 31.076 37.6561 29.5971 37.6561H10.3372C8.85802 37.6561 7.72399 37.2609 6.87011 36.4482C6.0324 35.6508 5.6253 34.5622 5.6253 33.1212C5.6253 32.3717 5.65002 31.6316 5.69946 30.9212C5.74768 30.2242 5.84625 29.4585 5.99243 28.6449C6.13677 27.8414 6.32049 27.0873 6.539 26.4046C6.74865 25.75 7.0346 25.1018 7.38921 24.4774C7.72765 23.8823 8.11706 23.3718 8.54674 22.9604C8.94866 22.5756 9.45525 22.2606 10.0522 22.0244C10.6042 21.8059 11.2247 21.6863 11.8982 21.6683C11.9803 21.7119 12.1264 21.7952 12.3633 21.9496C12.8451 22.2637 13.4006 22.6219 14.0146 23.0141C14.7067 23.4554 15.5984 23.8539 16.6638 24.1979C17.753 24.55 18.8638 24.7289 19.9664 24.7289C21.069 24.7289 22.1801 24.55 23.2687 24.1982C24.335 23.8536 25.2264 23.4554 25.9195 23.0135C26.5478 22.6119 27.0877 22.264 27.5695 21.9496C27.8064 21.7955 27.9525 21.7119 28.0346 21.6683C28.7085 21.6863 29.3289 21.8059 29.8812 22.0244C30.4779 22.2606 30.9844 22.5759 31.3864 22.9604C31.816 23.3715 32.2055 23.882 32.5439 24.4777C32.8988 25.1018 33.1851 25.7503 33.3944 26.4043C33.6132 27.0879 33.7972 27.8417 33.9413 28.6446C34.0872 29.4597 34.186 30.2257 34.2343 30.9215V30.9221C34.284 31.6298 34.309 32.3695 34.3093 33.1212C34.309 34.5625 33.9019 35.6508 33.0642 36.4479Z" fill="currentColor" className="text-[#2290F5] group-hover:text-primary" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_1592">
                                            <rect width="39.9999" height="40" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-primary text-2xl font-bold text-primary mt-8 text-center group-hover:text-secondary">Personal</h3>
                            <h2 className="font-primary text-[44px] font-bold text-title mt-0.5 text-center group-hover:text-white">$10/mth</h2>
                            <p className="font-secondary font-medium text-lg text-description text-center group-hover:text-white">Annual pricing <span className="text-primary group-hover:text-secondary">(save 20%)</span></p>
                            {/* pricing features below*/}
                            <ul className="mt-10">
                                <li className="flex items-start gap-5 font-medium text-description font-secondary text-lg mt-5 group-hover:text-white"><div className="bg-[#F4EBFF] w-6 h-6 rounded-full flex justify-center items-center"><img src={pricingCheck} alt="#pricingCheck" />
                                </div> Calendar View</li>
                                <li className="flex items-start gap-5 font-medium text-description font-secondary text-lg mt-5 group-hover:text-white"><div className="bg-[#F4EBFF] w-6 h-6 rounded-full flex justify-center items-center"><img src={pricingCheck} alt="#pricingCheck" />
                                </div> Custom Templates</li>
                                <li className="flex items-start gap-5 font-medium text-description font-secondary text-lg mt-5 group-hover:text-white"><div className="bg-[#F4EBFF] w-6 h-6 rounded-full flex justify-center items-center"><img src={pricingCheck} alt="#pricingCheck" />
                                </div> list view</li>
                                <li className="flex items-start gap-5 font-medium text-description font-secondary text-lg mt-5 group-hover:text-white"><div className="bg-[#F4EBFF] w-6 h-6 rounded-full flex justify-center items-center"><img src={pricingCheck} alt="#pricingCheck" />
                                </div> board view</li>
                                <li className="flex items-start gap-5 font-medium text-description font-secondary text-lg mt-5 group-hover:text-white"><div className="bg-[#F4EBFF] w-6 h-6 rounded-full flex justify-center items-center"><img src={pricingCheck} alt="#pricingCheck" />
                                </div> Assignees & Due Dates</li>
                            </ul>
                        </div>
                        <button className="font-secondary text-white font-medium text-lg px-[59px] md:px-[104px] py-4 md:py-5 bg-primary rounded-md mt-10 group-hover:bg-secondary group-hover:text-title">Purchase Now</button>
                    </div>
                    <div className="px-12 py-10 border-1 border-[#DCE7FE] rounded-[20px] group hover:bg-primary ease-linear duration-200">
                        <div className="flex justify-center">
                            <div className="w-[90px] h-[90px] rounded-full bg-[rgba(67,195,189,0.1)] flex items-center justify-center group-hover:bg-white ease-linear duration-200">

                                <svg width="40" height="45" viewBox="0 0 40 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_1561)">
                                        <path d="M20.0004 25.411C18.6827 25.411 17.3945 24.9714 16.2989 24.1478C15.2033 23.3242 14.3493 22.1536 13.845 20.7841C13.3408 19.4145 13.2088 17.9074 13.4659 16.4535C13.723 14.9995 14.3575 13.664 15.2893 12.6157C16.2211 11.5675 17.4082 10.8536 18.7006 10.5644C19.993 10.2752 21.3326 10.4237 22.55 10.991C23.7674 11.5583 24.808 12.519 25.5401 13.7516C26.2721 14.9841 26.6629 16.4333 26.6629 17.9157C26.6596 19.9025 25.9566 21.8068 24.7078 23.2116C23.4591 24.6164 21.7664 25.4073 20.0004 25.411ZM20.0004 13.4157C19.2093 13.4157 18.4359 13.6796 17.7781 14.1741C17.1203 14.6686 16.6076 15.3714 16.3049 16.1936C16.0021 17.0159 15.9229 17.9207 16.0773 18.7936C16.2316 19.6665 16.6126 20.4684 17.172 21.0977C17.7314 21.727 18.4441 22.1556 19.22 22.3293C19.996 22.5029 20.8002 22.4138 21.5311 22.0732C22.262 21.7326 22.8867 21.1558 23.3263 20.4158C23.7658 19.6758 24.0004 18.8057 24.0004 17.9157C24.0004 16.7222 23.579 15.5777 22.8288 14.7337C22.0787 13.8898 21.0613 13.4157 20.0004 13.4157Z" fill="currentColor" className="text-secondary group-hover:text-primary" />
                                        <path d="M33.3375 26.9156C32.2818 26.9156 31.2499 26.5635 30.3721 25.9037C29.4944 25.2439 28.8103 24.306 28.4063 23.2088C28.0023 22.1116 27.8966 20.9043 28.1026 19.7395C28.3085 18.5747 28.8169 17.5048 29.5633 16.665C30.3098 15.8252 31.2608 15.2533 32.2962 15.0216C33.3316 14.7899 34.4048 14.9089 35.3801 15.3633C36.3554 15.8178 37.189 16.5874 37.7755 17.5749C38.362 18.5624 38.675 19.7233 38.675 20.9109C38.675 22.5035 38.1127 24.0308 37.1117 25.1569C36.1107 26.283 34.7531 26.9156 33.3375 26.9156ZM33.3375 17.9156C32.8109 17.9156 32.2961 18.0913 31.8583 18.4204C31.4205 18.7496 31.0792 19.2174 30.8777 19.7647C30.6762 20.312 30.6234 20.9143 30.7262 21.4953C30.8289 22.0763 31.0825 22.61 31.4548 23.0289C31.8272 23.4478 32.3016 23.7331 32.8181 23.8487C33.3345 23.9643 33.8699 23.905 34.3564 23.6782C34.8429 23.4515 35.2587 23.0676 35.5513 22.575C35.8439 22.0825 36 21.5034 36 20.9109C35.9967 20.1177 35.7151 19.3579 35.2165 18.797C34.7179 18.2361 34.0426 17.9193 33.3375 17.9156Z" fill="currentColor" className="text-secondary group-hover:text-primary" />
                                        <path d="M6.66367 26.9156C5.60801 26.9156 4.57606 26.5635 3.69832 25.9037C2.82057 25.2439 2.13645 24.306 1.73247 23.2088C1.32848 22.1116 1.22278 20.9043 1.42873 19.7395C1.63468 18.5747 2.14303 17.5048 2.88949 16.665C3.63595 15.8252 4.587 15.2533 5.62238 15.0216C6.65775 14.7899 7.73094 14.9089 8.70624 15.3633C9.68154 15.8178 10.5151 16.5874 11.1016 17.5749C11.6881 18.5624 12.0012 19.7233 12.0012 20.9109C12.0012 22.5035 11.4388 24.0308 10.4379 25.1569C9.43688 26.283 8.07926 26.9156 6.66367 26.9156ZM6.66367 17.9156C6.13708 17.9156 5.62231 18.0913 5.18447 18.4204C4.74662 18.7496 4.40536 19.2174 4.20384 19.7647C4.00233 20.312 3.9496 20.9143 4.05233 21.4953C4.15506 22.0763 4.40864 22.61 4.781 23.0289C5.15336 23.4478 5.62777 23.7331 6.14424 23.8487C6.66072 23.9643 7.19606 23.905 7.68256 23.6782C8.16907 23.4515 8.5849 23.0676 8.87746 22.575C9.17002 22.0825 9.32617 21.5034 9.32617 20.9109C9.32288 20.1177 9.04131 19.3579 8.54271 18.797C8.04411 18.2361 7.3688 17.9193 6.66367 17.9156Z" fill="currentColor" className="text-secondary group-hover:text-primary" />
                                        <path d="M28.0008 37.1391C27.6629 37.1364 27.3384 36.9899 27.0926 36.729C26.8468 36.4681 26.6979 36.1122 26.6758 35.7329C26.5639 34.4449 26.0293 33.25 25.1764 32.3816C24.3236 31.5131 23.2136 31.0334 22.0633 31.036H17.9383C16.7879 31.0334 15.678 31.5131 14.8251 32.3816C13.9723 33.25 13.4377 34.4449 13.3258 35.7329C13.2618 36.1003 13.0783 36.4276 12.8112 36.651C12.5441 36.8743 12.2126 36.9776 11.8814 36.9407C11.5503 36.9038 11.2432 36.7293 11.0203 36.4514C10.7973 36.1734 10.6745 35.812 10.6758 35.4376C10.8676 33.4238 11.7162 31.5615 13.0576 30.2109C14.3991 28.8602 16.138 28.117 17.9383 28.1251H22.0633C23.8752 28.1191 25.6239 28.874 26.9671 30.2421C28.3104 31.6102 29.1514 33.493 29.3258 35.5219C29.3429 35.723 29.3238 35.9259 29.2698 36.1185C29.2157 36.3111 29.1277 36.4894 29.0111 36.643C28.8945 36.7965 28.7515 36.9221 28.5908 37.0121C28.4301 37.1022 28.255 37.155 28.0758 37.1673L28.0008 37.1391Z" fill="currentColor" className="text-secondary group-hover:text-primary" />
                                        <path d="M38.6622 36.1267C38.3243 36.124 37.9998 35.9774 37.754 35.7166C37.5082 35.4557 37.3593 35.0998 37.3372 34.7205C37.2746 33.9845 36.969 33.3018 36.4806 32.8071C35.9923 32.3124 35.3568 32.0417 34.6997 32.0486H31.9497C31.6873 32.0499 31.4265 32.0925 31.1747 32.1752C31.0003 32.285 30.8063 32.3495 30.6069 32.3639C30.4075 32.3784 30.2078 32.3423 30.0224 32.2585C29.837 32.1747 29.6706 32.0452 29.5355 31.8796C29.4004 31.7139 29.3001 31.5163 29.2418 31.3013C29.1835 31.0863 29.1688 30.8593 29.1987 30.6371C29.2286 30.4148 29.3024 30.2029 29.4147 30.0169C29.5269 29.831 29.6748 29.6757 29.8474 29.5625C30.02 29.4492 30.213 29.381 30.4122 29.3626C30.9114 29.1965 31.4291 29.1112 31.9497 29.1095H34.6997C36.0197 29.099 37.2955 29.6444 38.2763 30.6385C39.257 31.6325 39.8718 33.0033 39.9997 34.4814C40.0168 34.6825 39.9977 34.8853 39.9437 35.0779C39.8896 35.2705 39.8016 35.4489 39.685 35.6025C39.5683 35.756 39.4254 35.8815 39.2647 35.9716C39.104 36.0617 38.9289 36.1144 38.7497 36.1267H38.6622Z" fill="currentColor" className="text-secondary group-hover:text-primary" />
                                        <path d="M1.33773 36.1266H1.25023C1.07103 36.1143 0.895865 36.0616 0.735174 35.9715C0.574483 35.8814 0.431555 35.7559 0.314909 35.6024C0.198263 35.4488 0.110287 35.2704 0.0562243 35.0778C0.00216136 34.8853 -0.0168818 34.6824 0.000229777 34.4813C0.127956 33.0057 0.740933 31.6368 1.71903 30.6431C2.69713 29.6494 3.96984 29.1025 5.28773 29.1094H8.03773C8.55832 29.1112 9.07603 29.1964 9.57523 29.3626C9.77438 29.3809 9.96736 29.4492 10.14 29.5624C10.3126 29.6756 10.4605 29.8309 10.5727 30.0169C10.685 30.2028 10.7588 30.4147 10.7887 30.637C10.8186 30.8592 10.8039 31.0862 10.7456 31.3012C10.6873 31.5162 10.5869 31.7138 10.4519 31.8795C10.3168 32.0451 10.1504 32.1746 9.96502 32.2584C9.77962 32.3423 9.57987 32.3783 9.38047 32.3638C9.18106 32.3494 8.98707 32.2849 8.81273 32.1751C8.56091 32.0924 8.30005 32.0498 8.03773 32.0485H5.28773C4.63061 32.0416 3.9951 32.3123 3.50677 32.807C3.01843 33.3017 2.71279 33.9845 2.65023 34.7204C2.62831 35.0973 2.48115 35.4512 2.238 35.7118C1.99484 35.9723 1.67347 36.1204 1.33773 36.1266Z" fill="currentColor" className="text-secondary group-hover:text-primary" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_1561">
                                            <rect width="40" height="45" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                        </div>
                        <div>
                            <h3 className="font-primary text-2xl font-bold text-primary mt-8 text-center group-hover:text-secondary">Team</h3>
                            <h2 className="font-primary text-[44px] font-bold text-title mt-0.5 text-center group-hover:text-white">$25/mth</h2>
                            <p className="font-secondary font-medium text-lg text-description text-center group-hover:text-white">Annual pricing <span className="text-primary group-hover:text-secondary">(save 35%)</span></p>
                            {/* pricing features below*/}
                            <ul className="mt-10">
                                <li className="flex items-start gap-5 font-medium text-description font-secondary text-lg mt-5 group-hover:text-white"><div className="bg-[#F4EBFF] w-6 h-6 rounded-full flex justify-center items-center"><img src={pricingCheck} alt="#pricingCheck" />
                                </div> Timeline Review</li>
                                <li className="flex items-start gap-5 font-medium text-description font-secondary text-lg mt-5 group-hover:text-white"><div className="bg-[#F4EBFF] w-6 h-6 rounded-full flex justify-center items-center"><img src={pricingCheck} alt="#pricingCheck" />
                                </div> Custom fields</li>
                                <li className="flex items-start gap-5 font-medium text-description font-secondary text-lg mt-5 group-hover:text-white"><div className="bg-[#F4EBFF] w-6 h-6 rounded-full flex justify-center items-center"><img src={pricingCheck} alt="#pricingCheck" />
                                </div> Custom Templates</li>
                                <li className="flex items-start gap-5 font-medium text-description font-secondary text-lg mt-5 group-hover:text-white"><div className="bg-[#F4EBFF] w-6 h-6 rounded-full flex justify-center items-center"><img src={pricingCheck} alt="#pricingCheck" />
                                </div> Task dependencies</li>
                                <li className="flex items-start gap-5 font-medium text-description font-secondary text-lg mt-5 group-hover:text-white"><div className="bg-[#F4EBFF] w-6 h-6 rounded-full flex justify-center items-center"><img src={pricingCheck} alt="#pricingCheck" />
                                </div> Milestones Manage</li>
                            </ul>
                        </div>
                        <button className="font-secondary text-white font-medium text-lg px-[59px] md:px-[104px] py-4 md:py-5 bg-primary rounded-md mt-10 group-hover:bg-secondary group-hover:text-title">Purchase Now</button>
                    </div>
                    <div className="px-12 py-10 border-1 border-[#DCE7FE] rounded-[20px] group hover:bg-primary ease-linear duration-200">
                        <div className="flex justify-center">
                            <div className="w-[90px] h-[90px] rounded-full bg-[#ECE8F9] flex items-center justify-center group-hover:bg-white ease-linear duration-200">

                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1_1515)">
                                        <path d="M23.3333 15.1499L38.0167 18.0666C39.2 18.3166 40 19.3166 40 20.4999V37.4999C40 38.8833 38.8833 39.9999 37.5 39.9999H22.5C22.9667 39.9999 23.3333 39.6333 23.3333 39.1666V38.3333H37.5C37.95 38.3333 38.3333 37.9666 38.3333 37.4999V20.4999C38.3333 20.1166 38.0667 19.7666 37.6833 19.6832L23.3333 16.8499V15.1499Z" fill="currentColor" className="text-[#9472F9] group-hover:text-primary"  />
                                        <path d="M32.5007 23.333C32.9673 23.333 33.334 23.6997 33.334 24.1663C33.334 24.633 32.9673 24.9997 32.5007 24.9997H29.1673C28.7007 24.9997 28.334 24.633 28.334 24.1663C28.334 23.6997 28.7007 23.333 29.1673 23.333H32.5007Z" fill="currentColor" className="text-[#9472F9] group-hover:text-primary"  />
                                        <path d="M32.5007 28.333C32.9673 28.333 33.334 28.6997 33.334 29.1663C33.334 29.633 32.9673 29.9997 32.5007 29.9997H29.1673C28.7007 29.9997 28.334 29.633 28.334 29.1663C28.334 28.6997 28.7007 28.333 29.1673 28.333H32.5007Z" fill="currentColor" className="text-[#9472F9] group-hover:text-primary"  />
                                        <path d="M32.5007 33.333C32.9673 33.333 33.334 33.6997 33.334 34.1663C33.334 34.633 32.9673 34.9997 32.5007 34.9997H29.1673C28.7007 34.9997 28.334 34.633 28.334 34.1663C28.334 33.6997 28.7007 33.333 29.1673 33.333H32.5007Z" fill="currentColor" className="text-[#9472F9] group-hover:text-primary"  />
                                        <path d="M23.3327 39.1664C23.3327 39.6331 22.966 39.9998 22.4994 39.9998C22.0327 39.9998 21.666 39.6331 21.666 39.1664V38.3331V15.8331C21.666 15.5831 21.7827 15.3497 21.966 15.1831C22.166 15.0331 22.416 14.9664 22.666 15.0164L23.3327 15.1497V16.8497V38.3331V39.1664Z" fill="currentColor" className="text-[#9472F9] group-hover:text-primary"  />
                                        <path d="M21.6673 38.333V39.1663C21.6673 39.633 22.034 39.9997 22.5007 39.9997H15.834C16.3007 39.9997 16.6673 39.633 16.6673 39.1663V38.333H21.6673Z" fill="currentColor" className="text-[#9472F9] group-hover:text-primary"  />
                                        <path d="M17.5007 8.33301C17.9673 8.33301 18.334 8.69967 18.334 9.16634C18.334 9.63301 17.9673 9.99967 17.5007 9.99967H14.1673C13.7007 9.99967 13.334 9.63301 13.334 9.16634C13.334 8.69967 13.7007 8.33301 14.1673 8.33301H17.5007Z" fill="currentColor" className="text-[#9472F9] group-hover:text-primary"  />
                                        <path d="M18.334 14.1663C18.334 14.633 17.9673 14.9997 17.5007 14.9997H14.1673C13.7007 14.9997 13.334 14.633 13.334 14.1663C13.334 13.6997 13.7007 13.333 14.1673 13.333H17.5007C17.9673 13.333 18.334 13.6997 18.334 14.1663Z" fill="currentColor" className="text-[#9472F9] group-hover:text-primary"  />
                                        <path d="M17.5007 18.333C17.9673 18.333 18.334 18.6997 18.334 19.1663C18.334 19.633 17.9673 19.9997 17.5007 19.9997H14.1673C13.7007 19.9997 13.334 19.633 13.334 19.1663C13.334 18.6997 13.7007 18.333 14.1673 18.333H17.5007Z" fill="currentColor" className="text-[#9472F9] group-hover:text-primary"  />
                                        <path d="M17.5007 23.333C17.9673 23.333 18.334 23.6997 18.334 24.1663C18.334 24.633 17.9673 24.9997 17.5007 24.9997H14.1673C13.7007 24.9997 13.334 24.633 13.334 24.1663C13.334 23.6997 13.7007 23.333 14.1673 23.333H17.5007Z" fill="currentColor" className="text-[#9472F9] group-hover:text-primary"  />
                                        <path d="M10 24.1663C10 24.633 9.63333 24.9997 9.16667 24.9997H5.83333C5.36667 24.9997 5 24.633 5 24.1663C5 23.6997 5.36667 23.333 5.83333 23.333H9.16667C9.63333 23.333 10 23.6997 10 24.1663Z" fill="currentColor" className="text-[#9472F9] group-hover:text-primary"  />
                                        <path d="M9.16667 8.33301C9.63333 8.33301 10 8.69967 10 9.16634C10 9.63301 9.63333 9.99967 9.16667 9.99967H5.83333C5.36667 9.99967 5 9.63301 5 9.16634C5 8.69967 5.36667 8.33301 5.83333 8.33301H9.16667Z" fill="currentColor" className="text-[#9472F9] group-hover:text-primary"  />
                                        <path d="M9.16667 13.333C9.63333 13.333 10 13.6997 10 14.1663C10 14.633 9.63333 14.9997 9.16667 14.9997H5.83333C5.36667 14.9997 5 14.633 5 14.1663C5 13.6997 5.36667 13.333 5.83333 13.333H9.16667Z" fill="currentColor" className="text-[#9472F9] group-hover:text-primary"  />
                                        <path d="M9.16667 18.333C9.63333 18.333 10 18.6997 10 19.1663C10 19.633 9.63333 19.9997 9.16667 19.9997H5.83333C5.36667 19.9997 5 19.633 5 19.1663C5 18.6997 5.36667 18.333 5.83333 18.333H9.16667Z" fill="currentColor" className="text-[#9472F9] group-hover:text-primary"  />
                                        <path d="M14.9993 30.833C14.9993 30.3663 14.616 29.9997 14.166 29.9997H9.16602C8.69935 29.9997 8.33268 30.3663 8.33268 30.833V38.333H6.66602V30.833C6.66602 29.4497 7.78268 28.333 9.16602 28.333H14.166C15.5493 28.333 16.666 29.4497 16.666 30.833V38.333H14.9993V30.833Z" fill="currentColor" className="text-[#9472F9] group-hover:text-primary"  />
                                        <path d="M8.33268 38.333H14.9993H16.666V39.1663C16.666 39.633 16.2993 39.9997 15.8327 39.9997H7.49935C7.03268 39.9997 6.66602 39.633 6.66602 39.1663V38.333H8.33268Z" fill="currentColor" className="text-[#9472F9] group-hover:text-primary"  />
                                        <path d="M2.91667 0.33323L21.2333 3.11656C22.45 3.31656 23.3333 4.3499 23.3333 5.58323V15.1499L22.6667 15.0166C22.4167 14.9666 22.1667 15.0332 21.9667 15.1832C21.7833 15.3499 21.6667 15.5832 21.6667 15.8332V5.58323C21.6667 5.16656 21.3667 4.81656 20.9667 4.7499L2.65 1.98323C2.6 1.96656 2.55 1.96656 2.5 1.96656C2.3 1.96656 2.11667 2.03323 1.96667 2.16656C1.76667 2.33323 1.66667 2.5499 1.66667 2.7999V37.4999C1.66667 37.9666 2.05 38.3332 2.5 38.3332H6.66667V39.1666C6.66667 39.6332 7.03333 39.9999 7.5 39.9999H2.5C1.11667 39.9999 0 38.8832 0 37.4999V2.7999C0 2.06656 0.316667 1.36656 0.883333 0.899896C1.45 0.416563 2.18333 0.216563 2.91667 0.33323Z" fill="currentColor" className="text-[#9472F9] group-hover:text-primary"  />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_1515">
                                            <rect width="40" height="40" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                        </div>
                        <div>
                            <h3 className="font-primary text-2xl font-bold text-primary mt-8 text-center group-hover:text-secondary">Enterprice</h3>
                            <h2 className="font-primary text-[44px] font-bold text-title mt-0.5 text-center group-hover:text-white">$50/mth</h2>
                            <p className="font-secondary font-medium text-lg text-description text-center group-hover:text-white">Annual pricing <span className="text-primary group-hover:text-secondary">(save 40%)</span></p>
                            {/* pricing features below*/}
                            <ul className="mt-10">
                                <li className="flex items-start gap-5 font-medium text-description font-secondary text-lg mt-5 group-hover:text-white"><div className="bg-[#F4EBFF] w-6 h-6 rounded-full flex justify-center items-center"><img src={pricingCheck} alt="#pricingCheck" />
                                </div> Data export & deletion</li>
                                <li className="flex items-start gap-5 font-medium text-description font-secondary text-lg mt-5 group-hover:text-white"><div className="bg-[#F4EBFF] w-6 h-6 rounded-full flex justify-center items-center"><img src={pricingCheck} alt="#pricingCheck" />
                                </div> Block native integrations</li>
                                <li className="flex items-start gap-5 font-medium text-description font-secondary text-lg mt-5 group-hover:text-white"><div className="bg-[#F4EBFF] w-6 h-6 rounded-full flex justify-center items-center"><img src={pricingCheck} alt="#pricingCheck" />
                                </div> Custom branding</li>
                                <li className="flex items-start gap-5 font-medium text-description font-secondary text-lg mt-5 group-hover:text-white"><div className="bg-[#F4EBFF] w-6 h-6 rounded-full flex justify-center items-center"><img src={pricingCheck} alt="#pricingCheck" />
                                </div> Lock custom fields</li>
                                <li className="flex items-start gap-5 font-medium text-description font-secondary text-lg mt-5 group-hover:text-white"><div className="bg-[#F4EBFF] w-6 h-6 rounded-full flex justify-center items-center"><img src={pricingCheck} alt="#pricingCheck" />
                                </div> APriority support</li>
                            </ul>
                        </div>
                        <button className="font-secondary text-white font-medium text-lg px-[59px] md:px-[104px] py-4 md:py-5 bg-primary rounded-md mt-10 group-hover:bg-secondary group-hover:text-title">Purchase Now</button>
                    </div>
                </Flex>
            </Container>
        </section>
    );
};

export default Pricing;