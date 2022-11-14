import React from "react";

const TotalInfoOption = ({ image, count, text }) => {
  return (
    <div className="bg-lightGray flex items-center rounded-xl pl-[8px] md:pl-[22px] pt-[12px] md:pt-[29px] pr-[20px] md:pr-[32px] pb-[7px] md:pb-[17px] space-x-[2px]">
      <img
        src={image}
        alt="icon"
        className="h-[15px] md:h-[32px] w-[15px] md:w-[32px] object-contain"
      />
      <div className="flex flex-col items-center pr-[4px]">
        <span className="font-poppins font-bold text-[13px] md:text-[25px] leading-[20px] md:leading-[42px] text-black1">
          {count}
        </span>
        <span className="font-poppins font-medium whitespace-nowrap text-black1 text-[6px] md:text-[14px] leading-[9px] md:leading-[20px]">
          {text}
        </span>
      </div>
    </div>
  );
};

export default TotalInfoOption;
