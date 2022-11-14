import React from "react";
import MenuIcon from "../../images/menu.png";

const Header = ({ toggleSidebar }) => {
  return (
    <div className="md:hidden bg-bgColor flex items-center px-[22px] pt-[21px]">
      <img
        src={MenuIcon}
        alt="menu"
        className="w-[33px] h-[24px] object-contain"
        onClick={() => toggleSidebar()}
      />

      <span className="inline-block text-center w-full font-poppins font-bold text-[25px] text-[#EB4BB6] leading-[37px]">
        Info<span className="text-[#1967FF]">Ischia </span>
        <span className="text-[12px] leading-[18px]">Pro</span>
      </span>
    </div>
  );
};

export default Header;
