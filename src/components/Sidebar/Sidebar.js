import React, { useEffect, useRef, useState } from "react";
import Logo from "../../images/logo.png";
import CloseIcon from "../../images/closeBlue.png";
import ExitIcon from "../../images/exitIcon.png";
import HomeIcon from "../../images/homeBlue.png";
import OnlineIcon from "../../images/onlineBlue.png";
import CheckIcon from "../../images/checkBlue.png";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = ({ toggleSidebar }) => {
  const sidebarRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = useState(1);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        toggleSidebar();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  useEffect(() => {
    if (location.pathname === "/") {
      setSelected(1);
    } else if (location.pathname === "/vetrina") {
      setSelected(2);
    }
  }, [location.pathname]);

  const handleRoute = (route) => {
    navigate(route);
  };

  return (
    <div
      className="bg-white z-10 flex flex-col fixed md:absolute top-0 left-0 h-full overflow-scroll md:top-[53px] md:left-[58px] md:rounded-[44px] md:shadow-2xl md:h-[970px]"
      ref={sidebarRef}
    >
      <img
        src={CloseIcon}
        alt="cross"
        className="mb-[11px] mt-[22px] ml-[20px] h-[26px] w-[26px] object-cover md:hidden"
        onClick={() => toggleSidebar()}
      />

      <div className="flex flex-col items-center px-[34px] mb-[27px]">
        <img src={Logo} alt="Logo" className="md:mt-[10px]" />
        <span className="font-poppins font-bold text-[15px] leading-[22px] text-customPink">
          Info<span className="text-customBlue">Ischia </span>
          <span className="text-[6px] leading-[9px]">Pro</span>
        </span>
      </div>

      <div className="flex-grow flex flex-col space-y-[18px] pl-[16px] pr-[10px]">
        <div
          className={`${
            selected === 1 ? "bg-[#F2F2FE]" : "bg-white"
          } flex items-center space-x-[8px] py-[5px] pl-[8px] pr-[12px] hover:cursor-pointer hover:bg-[#F2F2FE]`}
          onClick={() => {
            setSelected(1);
            handleRoute("/");
          }}
        >
          <img
            src={HomeIcon}
            alt="home"
            className={`${
              selected === 1 ? "opacity-100" : "opacity-50"
            } w-[24px] h-[23px] object-contain`}
          />
          <span className="font-poppins font-semibold text-customBlue text-[14px] leading-[21px]">
            Dashboard
          </span>
        </div>

        <div
          className={`${
            selected === 2 ? "bg-[#F2F2FE]" : "bg-white"
          } flex items-center space-x-[8px] py-[5px] pl-[8px] pr-[12px] hover:cursor-pointer hover:bg-[#F2F2FE]`}
          onClick={() => {
            setSelected(2);
            handleRoute("/vetrina");
          }}
        >
          <img
            src={OnlineIcon}
            alt="home"
            className={`${
              selected === 2 ? "opacity-100" : "opacity-50"
            } w-[24px] h-[23px] object-contain`}
          />
          <span className="font-poppins font-semibold text-customBlue text-[14px] leading-[21px]">
            Vetrina
          </span>
        </div>

        <div
          className={`${
            selected === 3 ? "bg-[#F2F2FE]" : "bg-white"
          } flex items-center space-x-[8px] py-[5px] pl-[8px] pr-[12px] hover:cursor-pointer hover:bg-[#F2F2FE]`}
          onClick={() => setSelected(3)}
        >
          <img
            src={CheckIcon}
            alt="home"
            className={`${
              selected === 3 ? "opacity-100" : "opacity-50"
            } w-[24px] h-[23px] object-contain`}
          />
          <span className="font-poppins font-semibold text-customBlue text-[14px] leading-[21px]">
            Eventi
          </span>
        </div>
      </div>

      <div className="flex items-end justify-center mb-[13px] space-x-[9px] md:hidden">
        <img
          src={ExitIcon}
          alt="exit"
          className="h-[17px] w-[17px] object-contain mb-[7px] hover:cursor-pointer"
          onClick={() => toggleSidebar()}
        />
        <span
          className="font-poppins font-semibold text-gray3 text-[18px] leading-[27px] hover:cursor-pointer"
          onClick={() => toggleSidebar()}
        >
          Exit
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
