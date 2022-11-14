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
    <div className="bg-darkGray px-[19px] md:px-[47px] pt-[10px] md:pt-[28px] pb-[8px] md:pb-[20px] rounded-xl">
      <div className="flex items-center justify-between w-full space-x-[29px] mb-[9px]">
        <TotalInfoOption image={ViewIcon} count="23" text="Views totali" />
        <TotalInfoOption image={ShareIcon} count="23" text="Condivisioni" />
        <TotalInfoOption image={HeartIcon} count="23" text="Nei preferiti" />
      </div>

      <div className="bg-lightGray py-[6px] md:py-[20px] pl-[8px] md:pl-[20px] pr-[14px] flex flex-col space-y-[4px] rounded-xl">
        <ClicksInfo image={PhoneIcon} text="35 Click" />
        <ClicksInfo image={ApplicationIcon} text="2234 Click" />
        <ClicksInfo image={ApplicationIcon2} text="1312 Click" />
      </div>
    </div>
  );
};

export default TotalInfo;
