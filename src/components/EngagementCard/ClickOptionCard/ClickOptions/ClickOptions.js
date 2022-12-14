import React from "react";

const ClickOptions = ({ image, number }) => {
  return (
    <div className="flex justify-between items-center pt-[5px] pb-[2px] pl-[15px] pr-[12px] xl:pt-[16px] xl:pb-[12px] xl:pl-[15px] xl:pr-[20px] bg-white rounded-[16px] shadow-lg border border-[#f5f5f5]">
      <div className="flex items-center space-x-[6px]">
        <img
          src={image}
          alt="icon"
          className="h-[16px] w-[16px] object-contain"
        />
        <span className="text-black2 font-poppins font-bold text-[12px] xl:text-[14px] leading-[27px]">
          {number} Click
        </span>
      </div>
    </div>
  );
};

export default ClickOptions;
