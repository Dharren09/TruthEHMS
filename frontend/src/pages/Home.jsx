import React from "react";
import docImg1 from "../assets/images/doctor7.png";
import icon01 from "../assets/images/findadoctor.png";
import icon02 from "../assets/images/location.png";
import icon03 from "../assets/images/products.png";
import icon04 from "../assets/images/support.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
    return (
        <>
          {/* ================ hero section ==================== */}

            <section className="hero_section pt-[60px] 2xl:h-[800px]">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
                        {/* ================ content =============== */}
                        <div>
                            <div className="lg:w-[570px] pt-7 ml-[5rem]">
                                <h1 className="text-[30px] leading-[30px] text-headingColor font-[800] md:text-[30px]
                                md:leading-[80px]">Be in control of your Health</h1>
                                <p className="text_param">In today's fast-paced world, patients need a convenient and easy way to schedule appointments with their doctors. This electronic appointment scheduling engine is modern and persuasive solution that can help and imporive the
                                  healthcare experience for both patients and providers anytime of day or night, from anywhere at the comfort of yours
                                  your finger tips. A busy schedule is nolonger a limitation to monitor and care for your Health, TruthEHMS has got you!!
                                </p>
                                
                                <button className="btn">Request an Appointment</button>
                            </div>

                            {/* ========================== Hero counter ============================= */}
                            <div className="mt-[30px] lg:mt-[70px] leading-[40px] flex flex-col lg:flex-row lg:items-center gap-5
                            lg:gap-[30px] ml-[5rem]">
                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                                    text-headingColor]">
                                        60+
                                    </h2>
                                    <span className="w-[100px] h-2 bg-stoneColor rounded-full block mt-[-14px]"></span>
                                    <p className="pt-3">Providers</p>
                                </div>
                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                                    text-headingColor]">
                                        100+
                                    </h2>
                                    <span className="w-[100px] h-2 bg-redColor rounded-full block mt-[-14px]"></span>
                                    <p className="pt-3">Reviews</p>
                                </div>
                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                                    text-headingColor]">
                                        3+
                                    </h2>
                                    <span className="w-[100px] h-2 bg-cyanColor rounded-full block mt-[-14px]"></span>
                                    <p className="pt-3">Years of Experience</p>
                                </div>
                                {/* ========================= hero images ============================== */}
                                
                                <div className="flex gap-[20px] ml-[20rem] justify-end mt-[-35rem]">
                                    <div>
                                        <img src={docImg1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ================ hero section end ============== */}
            <section>
                <div className="container">
                    <div className="lg:w-[470px] mx-auto">
                        <h2 className="heading text-center text-[25px] justify-center pt-5 text-stone-500">The future of Healthcare is here!!</h2>
                        <p className="text_param text-center text-[16px] text-stone-[900]">TruthEHMS, changing the way you think about Healthcare in-terms of simplicity, affordability and accessibility
                            all achieved in a modern world for a modern You.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] flex-row justify-between">
                        
                        <div className="py-[30px] px-5 ml-5">
                            <div className="icon">
                                <img src={icon01} alt="" />
                            </div>
                            <div className="mt-[30px]">
                                <h2 className="text-[16px] leading-9 text-headingColor font-[700] text-center">Find a Doctor</h2>
                                <p className="text-[10px] leading-7 text-textColor font-[300] mt-4 text-center">World-class services for everyone, from diagnostics to major operations with excellent and highly expertized Human resource</p>
                                
                                <Link to ="/doctors" className="w-[35px] h-[35px] rounded-full border border-solid border-[#181A1E] mt-[30px]
                                mx-auto flex items-center justify-center group hover:bg-blue-700 hover:border-none">
                                    <BsArrowRight group-hover:text-white/>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="py-[30px] px-5 ml-5">
                            <div className="icon">
                                <img src={icon02} alt="" />
                            </div>
                            <div className="mt-[30px]">
                                <h2 className="text-[16px] leading-9 text-headingColor font-[700] text-center">Find a Location</h2>
                                <p className="text-[10px] leading-7 text-textColor font-[300] mt-4 text-center"> Explore our wide network with locations worldwide, to make sure you find one that's convenient for you</p>
                                
                                <Link to ="/doctors" className="w-[35px] h-[35px] rounded-full border border-solid border-[#181A1E] mt-[30px]
                                mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                                    <BsArrowRight group-hover:text-white/>
                                </Link>
                            </div>
                        </div>

                        <div className="py-[30px] px-5 ml-5">
                            <div className="icon">
                                <img src={icon03} alt="" />
                            </div>
                            <div className="mt-[30px]">
                                <h2 className="text-[16px] leading-9 text-headingColor font-[700] text-center">Similar Products</h2>
                                <p className="text-[10px] leading-7 text-textColor font-[300] mt-4 text-center">We offer a variety of other products and services that can help you safegaurd your Health, Medical facility or Online Medical Website
                                from data storage engines, hospital management systems, chatbots and so much more</p>
                                
                                <Link to ="/doctors" className="w-[35px] h-[35px] rounded-full border border-solid border-[#181A1E] mt-[30px]
                                mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                                    <BsArrowRight group-hover:text-white/>
                                </Link>
                            </div>
                        </div>

                        <div className="py-[30px] px-5 ml-5">
                            <div className="icon">
                                <img src={icon04} alt="" />
                            </div>
                            <div className="mt-[30px]">
                                <h2 className="text-[16px] leading-9 text-headingColor font-[700] text-center">24/7 Support</h2>
                                <p className="text-[10px] leading-7 text-textColor font-[300] mt-4 text-center">Whether you have a question, need help troubleshooting a problem, or simply want to speak to a knowledgeable professional, we're here for you</p>
                                
                                <Link to ="/doctors" className="w-[35px] h-[35px] rounded-full border border-solid border-[#181A1E] mt-[30px]
                                mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                                    <BsArrowRight group-hover:text-white/>
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
};

export default Home;