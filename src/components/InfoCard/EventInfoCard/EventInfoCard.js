import React from "react";

const EventInfoCard = ({ eventName, number, useSubtext, subText }) => {
  return (
    <div className="flex flex-col items-center bg-white pt-[9px] px-[15px] pb-[2px] rounded-xl md:rounded-[20px] shadow-2xl">
      <span className="font-poppins font-bold text-[7px] md:text-[20px] text-customBlue leading-[10.5px] md:leading-[52.5px]">
        {eventName}
      </span>

      <div className="flex items-center w-full justify-center md:ml-[11px]">
        <span className="font-poppins font-bold text-[19px] md:text-[30px] text-customBlue leading-[28px] md:leading-[40px]">
          {number}
        </span>
        {useSubtext ? (
          <span className="font-bold ml-[3px] font-poppins text-customBlue text-[6px] md:text-[10px] leading-[9px] md:leading-[15px]">
            {subText}
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default EventInfoCard;
