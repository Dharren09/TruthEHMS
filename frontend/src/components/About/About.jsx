import React from 'react';
import aboutImg from "../../assets/images/doctor2.png";
import aboutCard from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className='container'>
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row ml-[5rem] mr-[5rem]'>
          
          <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCard} alt="" />
            </div>
          </div>
          
          {/* =================== about content =================== */}
          <div className='w-full lg:1/2 xl:w-[670px] order-1 lg:order-2 -mt-5'>
            <h2 className='text-[20px] leading-[30px] text-stone-500 font-[800] md:text-[22px]
            md:leading-[80px]'>Proud to be one of the nations best</h2>
            <p className='text_para text-[14px] text-stone-900'>3 years in a row of destined work, Uganda and East Africa
            fully recognize us as an outstanding medical platform that deligently performs for both the
            benefit of the patients, medical professionals and medical facilities at large
            </p>

            <p className='text_para mt-[30px] text-[14px]'>Integrity is what we strive for as a platform and body, and each
            day brings beautiful moments unto the next. carinf for our patients is top priority
            so to provide the sole best, If we can acomplish something today, we can do more tomorrow and the other day
            </p>

            <Link to="/">
              <button className='btn'>Learn More</button>
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default About