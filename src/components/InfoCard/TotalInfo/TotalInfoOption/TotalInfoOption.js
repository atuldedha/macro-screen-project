import React from "react";

const TotalInfoOption = ({ image, count, text }) => {
  return (
    <div className="bg-lightGray flex items-center justify-center rounded-xl md:rounded-[24px] shadow-xl md:pl-[22px] pt-[5px] md:pt-[22px] md:pr-[32px] pb-[5px] md:pb-[17px] space-x-[2px]">
      <img
        src={image}
        alt="icon"
        className="h-[15px] md:h-[36px] w-[15px] md:w-[36px] object-contain"
      />
      <div className="flex flex-col items-center pr-[4px]">
        <span className="font-poppins font-bold text-[13px] md:text-[25px] leading-[20px] md:leading-[35px] text-black1">
          {count}
        </span>
        <span className="font-poppins font-medium whitespace-nowrap text-black1 text-[6px] md:text-[15px] leading-[9px] md:leading-[18px]">
          {text}
        </span>
      </div>
    </div>
  );
};

export default TotalInfoOption;
