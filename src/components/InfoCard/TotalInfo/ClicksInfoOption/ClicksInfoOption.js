import React from "react";

const ClicksInfo = ({ image, text }) => {
  return (
    <div className="px-[5px] md:px-[15px] py-[6px] md:py-[16px] flex items-center bg-lightGray shadow-lg rounded-md md:rounded-lg space-x-[4px] md:space-x-[10px]">
      <img
        src={image}
        alt="icon"
        className="w-[8px] md:w-[22px] h-[8px] md:h-[22px] object-contain"
      />
      <span className="font-poppins font-bold md:font-semibold text-black1 text-[6px] md:text-[18px] leading-[9px] md:leading-[25px]">
        {text}
      </span>
    </div>
  );
};

export default ClicksInfo;
