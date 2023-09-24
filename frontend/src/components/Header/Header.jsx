import { useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";
import userImg from "../../assets/images/Dharren.jpg";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

const navLinks = [
    {
      path: '/home',
      display: 'Home'
    },
    {
        path: '/doctors',
        display: 'Find a Doctor'
    },
    {
        path: '/services',
        display: 'Services'
    },
    {
        path: '/contact',
        display: 'Contact'
    },
    {
        path: '/otherProducts',
        display: 'Products'
    },
]

const Header = () => {

    const headerRef = useRef(null)
    const menuRef = useRef(null)

    const handleStickyHeader = () => {
        window.addEventListener('scroll', () => {
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add("sticky_header")                
            } else {
                headerRef.current.classList.remove("sticky_header")
            }
        });
    };

    useEffect(() => {
        handleStickyHeader()

        return () => window.removeEventListener("scroll", handleStickyHeader)
    });

    const toggleMenu = () => menuRef.current.classList.toggle("show_menu")

    return <header className="header flex items-centre px-[50px] py-[2rem]" ref={headerRef}>
        <div className="container">
            <div className="flex items-center justify-between">
                {/* ======== logo ========= */}
                <div>
                <img src={ logo } className="flex items-center w-100% h-auto max-h-[15rem] max-w-[17rem] m-[-40px] -mt-12 py-2 px-7 pt-10 -mb-3.5" alt="logo"/>
                </div>

                {/* =========== menu ========= */}
                <div className="navigator" ref={menuRef} onClick={toggleMenu}>
                    <ul className="menu flex items-center gap-[2rem]">
                        {navLinks.map((link, index) => (
                          <li key={index}>
                            <NavLink
                              to={link.path}
                              className={navClass =>
                                navClass.isActive
                                  ? 'text-primaryColor text-[16px] leading-7 font-[600]'
                                  : 'text-textColor text-[14px] leading-7 font-[500] hover:text-blue-700'
                                  }
                                >
                                    {link.display}
                                </NavLink>
                            </li>
                        ))}       
                    </ul>
                </div>

            {/** ======================= nav right ================= */}
            <div className="flex items-centre gap-5">
                <div>
                    <Link to ="/">
                        <figure className="w-[30px] h-[25px] rounded-full cursor-pointer hidden">
                            <img src={userImg} className="w-full rounded-full" alt="userImg" />
                        </figure>
                    </Link>
                </div>
            
                <Link to ="/login">
                   <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[40px] flex items-center
                   justify-centre rounded-[40px] hover: ">Login</button>
                </Link>

                <span className="pt-[12.5px] md:hidden" onClick={toggleMenu}>
                    <BiMenu className="w-10px h-10px cursor-pointer"></BiMenu>
                </span>
            </div>

            </div>
        </div>
    </header>
};

export default Header;