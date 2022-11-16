import React, { useState } from "react";
import ArrowLeft from "../../images/arrowLeft.png";
import ArrowRight from "../../images/arrowRight.png";
import ClickOptionCard from "./ClickOptionCard/ClickOptionCard";
import EngagementOptionCard from "./EngagementOptionCard/EngagementOptionCard";
import months from "../../utils/getMonths";

const EngagementCard = () => {
  const [selected, setSelected] = useState(1);
  const [monthName, setMonthName] = useState(months[new Date().getMonth()]);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  const handleAheadMonth = () => {
    if (monthName === months[new Date().getMonth()]) {
      return;
    } else {
      setMonthName(months[currentMonth + 1]);
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handlePreviousMonth = () => {
    if (monthName === months[0]) {
      return;
    } else {
      setMonthName(months[currentMonth - 1]);
      setCurrentMonth(currentMonth - 1);
    }
  };
  return (
    <div className="bg-lightGray h-full pt-[2px] pr-[22px] pl-[14px] pb-[30px] flex flex-col items-center rounded-[22px] md:rounded-[30px]">
      <div className="flex items-center space-x-[20px] mb-[4px]">
        <img
          src={ArrowLeft}
          alt="arrowLeft"
          className="hover:cursor-pointer"
          onClick={handlePreviousMonth}
        />
        <span className="font-poppins font-bold text-[13px] md:text-[20px] leading-[20px] md:leading-[30px] text-lightPurple">
          Mese di {monthName}
        </span>
        <img
          src={ArrowRight}
          alt="arrowRight"
          className="hover:cursor-pointer"
          onClick={handleAheadMonth}
        />
      </div>

      <div className="flex items-center space-x-[50px] mb-[14px]">
        <span
          className={`${
            selected === 1 ? "border-b-[2px] border-b-customBlue" : ""
          } text-customBlue text-[12px] md:text-[25px] leading-[18px] md:leading-[40px] font-poppins font-bold`}
          onClick={() => setSelected(1)}
        >
          Engagement
        </span>

        <span
          className={`${
            selected === 2 ? "border-b-[2px] border-b-customBlue" : ""
          } text-customBlue text-[12px] md:text-[25px] leading-[18px] md:leading-[40px] font-poppins font-bold`}
          onClick={() => setSelected(2)}
        >
          Click
        </span>
      </div>

      {selected === 1 && <EngagementOptionCard monthNumber={currentMonth} />}
      {selected === 2 && <ClickOptionCard />}
    </div>
  );
};

export default EngagementCard;
