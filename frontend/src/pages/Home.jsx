import React from "react";
import docImg1 from "../assets/images/doctor7.png";
import icon01 from "../assets/images/findadoctor.png";
import icon02 from "../assets/images/location.png";
import icon03 from "../assets/images/products.png";
import icon04 from "../assets/images/support.png";
import featureImg from "../assets/images/doctor3.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/doctor3.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About"
import ServicesList from "../components/Services/ServicesList";
import DoctorsList from "../components/Doctors/DoctorsList";

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
                            lg:gap-[30px] ml-[5rem] mr-[5rem]">
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
            <section className="px-4 lg:px-8 py-10 lg:py-16">
                <div className="container">
                    <div className="lg:w-[470px] mx-auto">
                        <h2 className="heading text-center text-[25px] justify-center pt-10 text-stone-500">The future of Healthcare is here!!</h2>
                        <p className="text_param text-center text-[16px] text-stone-[900]">TruthEHMS, changing the way you think about Healthcare in-terms of simplicity, affordability and accessibility
                            all achieved in a modern world for a modern You.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-[10px] lg:gap-[30px] mt-[30px] lg:mt-[55px] flex-row justify-center item-center ml-[5rem] mr-[5rem]">
                        
                        <div className="py-[30px] px-5">
                            <div className="icon">
                                <img src={icon01} alt="" />
                            </div>
                            <div className="mt-[30px]">
                                <h2 className="text-[16px] leading-9 text-headingColor font-[700] text-center">Find a Doctor</h2>
                                <p className="text-[10px] leading-7 text-textColor font-[300] mt-4 text-center">World-class services for everyone, from diagnostics to major operations with excellent and highly expertized Human resource to help you out.</p>
                                
                                <Link to ="/doctors" className="w-[35px] h-[35px] rounded-full border border-solid border-[#181A1E] mt-[30px]
                                mx-auto flex items-center justify-center group hover:bg-blue-700 hover:border-none">
                                    <BsArrowRight group-hover:text-white/>
                                </Link>
                            </div>
                        </div>
                        
                        <div className="py-[30px] px-5">
                            <div className="icon">
                                <img src={icon02} alt="" />
                            </div>
                            <div className="mt-[30px]">
                                <h2 className="text-[16px] leading-9 text-headingColor font-[700] text-center">Find a Location</h2>
                                <p className="text-[10px] leading-7 text-textColor font-[300] mt-4 text-center"> Explore our wide network with locations worldwide, to make sure you find one that offers the convenience that you deserve anytime, anywhere.</p>
                                
                                <Link to ="/doctors" className="w-[35px] h-[35px] rounded-full border border-solid border-[#181A1E] mt-[30px]
                                mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                                    <BsArrowRight group-hover:text-white/>
                                </Link>
                            </div>
                        </div>

                        <div className="py-[30px] px-5">
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

                        <div className="py-[30px] px-5">
                            <div className="icon">
                                <img src={icon03} alt="" />
                            </div>
                            <div className="mt-[30px]">
                                <h2 className="text-[16px] leading-9 text-headingColor font-[700] text-center">Similar Products</h2>
                                <p className="text-[10px] leading-7 text-textColor font-[300] mt-4 text-center">Find a variety of other products that help you safegaurd your Health or Medical facility
                                from data storage engines, hms, chatbots and so much more</p>
                                
                                <Link to ="/doctors" className="w-[35px] h-[35px] rounded-full border border-solid border-[#181A1E] mt-[30px]
                                mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                                    <BsArrowRight group-hover:text-white/>
                                </Link>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <About/>

            {/* ====================== services section ========================== */}
            <section>
                <div className="container">
                    <div className="xl:w-[470px] mx-auto">
                        <h2 className="heading text-center text-[25px] text-stone-500">Our Medical Services</h2>
                        <p className="text_para text-center text-stone-900">World-class care for everyone. Services for all man-kind</p>
                    </div>

                    <ServicesList />
                
                </div>
            </section>
            {/* ====================== services section end ========================== */}

            {/* ======================= features section start =================================== */}
            <section>
                <div className="container">
                    <div className="flex items-center justify-between flex-col lg:flex-row">

                        {/* ======================== feature content =========================== */}
                        <div className="xl:w-[670px] ml-[5rem] mr-[5rem]">
                            <h2 className="heading text-[26px]">
                                Get virtual treatment <br /> anytime.
                            </h2>
                            <ul className="pl-4">
                                <li className="text_para text-[14px]">
                                    1. Schedule the appointment directly.
                                </li>
                                <li className="text_para text-[14px]">
                                    2. Search for your best Physician here, and contact their office.
                                </li>
                                <li className="text-para text-[14px]">
                                    3. View our Doctors accepting new patients, use the online
                                    scheduling tool to select an appointment time.
                                </li>
                            </ul>
                            <Link to="/">
                                <button className="btn">Learn More</button>
                            </Link>
                        </div>

                        {/* ============================ feature gallery ========================= */}
                        <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0 ml-[5rem] mr-[5rem]">
                            <img src={featureImg} className="w-600px -mt-16" alt="" />
                            
                            <div className="w-[150px] lg:w-[248px] absolute bottom-[58px] left-0 md:bottom-[100px]
                            md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px] bg-white mt-[5px]">
                                <div className="flex items-center justify-between bg-white">
                                    <div className="flex items-center gap-[6px] lg:gap-3">
                                        <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-slate-500
                                        font-[400]">Tue, 24
                                        </p>
                                        <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-teal-800
                                        font-[400]">
                                            10:00AM
                                        </p>
                                    </div>

                                    <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellow-500
                                    rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                                        <img src={videoIcon} alt="" />
                                    </span>
                                </div>
                            
                                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px]
                                leading-[8px] lg:text-[12px] lg:leading-4 text-blue-400 font-[500] mt-2 lg:mt-4 rounded-full">
                                    Consultation
                                </div>
                                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                                  <img src={avatarIcon} className="rounded-full w-[2rem] h-[2rem]" alt="" />
                                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-stone-600">
                                    Kasenene Francis
                                  </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ======================= features section end =================================== */}
            {/* ======================= our great doctors  =================================== */}
            <section>
                <div className="container">
                    <div className="xl:w-[470px] mx-auto">
                        <h2 className="heading text-center text-[25px] text-stone-500">Our Awesome staff</h2>
                        <p className="text_para text-center text-stone-900">World-class care for everyone. Services for all man-kind</p>
                    </div>

                    <DoctorsList />

                </div>
            </section>
            {/* ======================= our great doctors  =================================== */}

        </>
    );
};

export default Home;