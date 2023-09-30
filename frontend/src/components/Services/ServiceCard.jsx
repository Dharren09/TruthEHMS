import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const ServiceCard = ({item, index}) => {

  const {name, desc, bgColor, textColor} = item

  return (
    <div className='py-[30px] px-3 lg:px-5 ml-[5rem] mr-[5rem]'>
      <h2 className='text-[20px] leading-9 text-headingColor text-[700]'>
        {name}
      </h2>
      <p className='text-[12px] leading-7 font-[400] text-textColor mt-4'>
        {desc}
      </p>

      <div className='flex items-center justify-between mt-[30px]'>
        <Link
          to ="/doctors" 
          className="w-[35px] h-[35px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:border-none">
            <BsArrowRight group-hover:text-white/>
        </Link>

        <span
          className='w-[44px] h-[44px] flex items-center justify-center text-[16px] leading-[30px] font-[600]'
          style={{
            background: `${bgColor}`,
            color:`${textColor}`,
            borderRadius: "6px 0 0 6px",
          }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard