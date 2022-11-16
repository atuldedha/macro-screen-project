import React from "react";
import ArrowIcon from "../../../images/arrowRightBlue.png";

const EngagementOptions = ({
  image,
  text,
  subText,
  useBigSubtext,
  useArrow,
}) => {
  return (
    <div className="w-full flex items-center pt-[7px] md:pt-[15px] pb-[4px] md:pb-[16px] pl-[10px] md:pl-[10px] md:pr-[10px] bg-white rounded-[12px] md:rounded-[18px] shadow-2xl">
      <img
        src={image}
        alt="icon"
        className="h-[16px] md:h-[26px] w-[16px] md:w-[26px] object-contain"
      />

      <div className="flex flex-col items-center justify-center w-full">
        <span className="font-poppins font-bold md:font-semibold text-customBlue text-[12px] md:text-[25px] leading-[18px] md:leading-[40px] md:mr-[5px]">
          {text}
        </span>
        <span
          className={`${
            useBigSubtext
              ? "text-[8px] md:text-[15px] leading-[12px] md:leading-[20px]"
              : "text-[7px] md:text-[14px] leading-[11px] md:leading-[19px]"
          } font-poppins font-medium text-customBlue whitespace-nowrap`}
        >
          {subText}
        </span>
      </div>

      {useArrow && (
        <div className="flex items-center justify-end w-full">
          <img
            src={ArrowIcon}
            alt="icon"
            className="md:h-[20px] md:w-[20px] object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default EngagementOptions;
