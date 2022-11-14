import React from "react";
import CheckIcon from "../../../images/checkBlue.png";

const RecentActivitiesCard = ({ text, timestamp }) => {
  return (
    <div className="flex relative space-x-1 md:space-x-4 bg-white rounded-lg w-full shadow-lg">
      <img
        src={CheckIcon}
        alt="check"
        className="pl-[5px] md:pl-[10px] pt-[5px] md:pt-[10px] h-[10px] md:h-[30px] w-[10px] md:w-[30px] object-contain"
      />
      <span className="text-black2 mt-[2px] md:mt-[11px] mb-[9px] md:mb-[5px] font-poppins font-normal text-[6px] md:text-[14px] leading-[9px] md:leading-[20px]">
        {text}
      </span>

      <div className="absolute bottom-[5px] right-[5px] font-poppins font-bold text-[6px] md:text-[14px] text-black2 leading-[9px] md:leading-[20px]">
        Oggi alle {timestamp}
      </div>
    </div>
  );
};

export default RecentActivitiesCard;
