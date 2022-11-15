import React from "react";
import TotalInfoOption from "./TotalInfoOption/TotalInfoOption";
import ClicksInfo from "./ClicksInfoOption/ClicksInfoOption";
import ViewIcon from "../../../images/view.png";
import ShareIcon from "../../../images/share.png";
import HeartIcon from "../../../images/heart.png";
import PhoneIcon from "../../../images/phoneGray.png";
import ApplicationIcon from "../../../images/application1Gray.png";
import ApplicationIcon2 from "../../../images/application2Gray.png";

const TotalInfo = () => {
  return (
    <div className="bg-darkGray px-[19px] md:px-[47px] pt-[10px] md:pt-[28px] pb-[8px] md:pb-[20px] rounded-2xl md:rounded-[34px]">
      <div className="flex items-center justify-between w-full space-x-[29px] mb-[9px]">
        <div className="basis-1/3">
          <TotalInfoOption image={ViewIcon} count="23" text="Views totali" />
        </div>
        <div className="basis-1/3">
          <TotalInfoOption image={ShareIcon} count="23" text="Condivisioni" />
        </div>
        <div className="basis-1/3">
          <TotalInfoOption image={HeartIcon} count="23" text="Nei preferiti" />
        </div>
      </div>

      <div className="bg-lightGray md:mt-[21px] py-[6px] md:py-[20px] pl-[8px] md:pl-[20px] pr-[14px] flex flex-col space-y-[4px] rounded-xl md:rounded-[20px] shadow-2xl">
        <ClicksInfo image={PhoneIcon} text="35 Click" />
        <ClicksInfo image={ApplicationIcon} text="2234 Click" />
        <ClicksInfo image={ApplicationIcon2} text="1312 Click" />
      </div>
    </div>
  );
};

export default TotalInfo;
