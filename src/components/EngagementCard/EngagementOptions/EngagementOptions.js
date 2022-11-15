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
    <div className="w-full flex items-center pt-[7px] md:pt-[15px] pb-[4px] md:pb-[16px] pl-[13px] md:pl-[22px] md:pr-[10px] space-x-[11px] bg-white rounded-[12px] md:rounded-[18px] shadow-2xl">
      <img
        src={image}
        alt="icon"
        className="h-[16px] md:h-[23px] w-[16px] md:w-[23px] object-contain"
      />

      <div className="flex flex-col items-start">
        <span className="font-poppins font-bold md:font-semibold text-customBlue text-[12px] md:text-[22px] leading-[18px] md:leading-[40px]">
          {text}
        </span>
        <span
          className={`${
            useBigSubtext
              ? "text-[8px] md:text-[15px] leading-[12px] md:leading-[20px]"
              : "text-[7px] md:text-[12px] leading-[11px] md:leading-[19px]"
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
