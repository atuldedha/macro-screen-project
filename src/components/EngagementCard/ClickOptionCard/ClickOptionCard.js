import React, { useEffect, useState } from "react";
import EngagementOptions from "../EngagementOptions/EngagementOptions";
import HeartIcon from "../../../images/heartBlue.png";
import LocationIcon from "../../../images/locationBlue.png";
import TapIcon from "../../../images/tapBlue.png";
import DotsIcon from "../../../images/dotsBlue.png";
import ClickOptions from "./ClickOptions/ClickOptions";
import PhoneIcon from "../../../images/call.png";
import FacebookIcon from "../../../images/facebook.png";
import InstagramIcon from "../../../images/instagram.png";
import Application1 from "../../../images/application.png";
import Application2 from "../../../images/application2.png";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

const ClickOptionCard = ({ monthNumber }) => {
  const [statsType0, setStatsType0] = useState(0);
  const [statsType2, setStatsType2] = useState(0);
  const [statsType3, setStatsType3] = useState(0);
  const [statsType4, setStatsType4] = useState(0);
  const [statsType5, setStatsType5] = useState(0);
  const [statsType8, setStatsType8] = useState(0);
  const [statsType10, setStatsType10] = useState(0);
  const [totalStatsClick, setTotalStatsClick] = useState(0);
  useEffect(() => {
    getDocs(collection(db, "Customers"))
      .then((snapshot) => {
        if (snapshot.docs[0]) {
          getDocs(collection(db, snapshot.docs[0].data().shopCategory))
            .then((newSnapshot) => {
              getDocs(
                collection(
                  db,
                  snapshot.docs[0].data().shopCategory,
                  newSnapshot.docs[0].id,
                  "Statistics"
                )
              )
                .then((allStatSnapshot) => {
                  let stats0 = 0;
                  let stats2 = 0;
                  let stats3 = 0;
                  let stats4 = 0;
                  let stats5 = 0;
                  let stats8 = 0;
                  let stats10 = 0;
                  allStatSnapshot.docs.forEach((doc) => {
                    if (
                      doc.data().statsType === 0 &&
                      new Date(doc.data().timestamp.toDate()).getMonth() ===
                        monthNumber
                    ) {
                      stats0 += 1;
                    }

                    if (
                      doc.data().statsType === 2 &&
                      new Date(doc.data().timestamp.toDate()).getMonth() ===
                        monthNumber
                    ) {
                      stats2 += 1;
                    }

                    if (
                      doc.data().statsType === 3 &&
                      new Date(doc.data().timestamp.toDate()).getMonth() ===
                        monthNumber
                    ) {
                      stats3 += 1;
                    }

                    if (
                      doc.data().statsType === 4 &&
                      new Date(doc.data().timestamp.toDate()).getMonth() ===
                        monthNumber
                    ) {
                      stats4 += 1;
                    }

                    if (
                      doc.data().statsType === 5 &&
                      new Date(doc.data().timestamp.toDate()).getMonth() ===
                        monthNumber
                    ) {
                      stats5 += 1;
                    }

                    if (
                      doc.data().statsType === 8 &&
                      new Date(doc.data().timestamp.toDate()).getMonth() ===
                        monthNumber
                    ) {
                      stats8 += 1;
                    }

                    if (
                      doc.data().statsType === 10 &&
                      new Date(doc.data().timestamp.toDate()).getMonth() ===
                        monthNumber
                    ) {
                      stats10 += 1;
                    }
                  });

                  setStatsType0(stats0);
                  setStatsType2(stats2);
                  setStatsType3(stats3);
                  setStatsType4(stats4);
                  setStatsType5(stats5);
                  setStatsType8(stats8);
                  setStatsType10(stats10);
                  setTotalStatsClick(
                    stats0 + stats3 + stats4 + stats5 + stats10
                  );
                })
                .catch((error) => {
                  console.log(error);
                });
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [monthNumber]);
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center space-x-[22px] mb-[28px]">
        <div className="basis-1/2">
          <EngagementOptions
            image={HeartIcon}
            text={statsType2}
            subText="Views totali"
            useArrow
          />
        </div>

        <div className="basis-1/2">
          <EngagementOptions
            image={LocationIcon}
            text={statsType8}
            subText="Condivisioni"
            useArrow
          />
        </div>
      </div>

      <div className="flex flex-col pt-[20px] pl-[22px] pr-[19px] bg-white rounded-[18px] shadow-2xl">
        <div className="flex items-center justify-between mb-[28px]">
          <div className="flex items-center space-x-[12px]">
            <img
              src={TapIcon}
              alt="icon"
              className="h-[16px] md:h-[28px] w-[16px] md:w-[28px] object-contain"
            />
            <span className="font-poppins font-medium text-[12px] md:text-[20px] leading-[25px] md:leading-[30px] text-customBlue">
              {totalStatsClick} click totali
            </span>
          </div>

          <img
            src={DotsIcon}
            alt="icon"
            className="h-[16px] md:h-[24px] w-[16px] md:w-[24px] object-contain text-end"
          />
        </div>

        <div className="pb-[10px]">
          <ClickOptions number={statsType3} image={PhoneIcon} />
        </div>
        <div className="pb-[10px]">
          <ClickOptions number={statsType4} image={FacebookIcon} />
        </div>
        <div className="pb-[10px]">
          <ClickOptions number={statsType5} image={InstagramIcon} />
        </div>
        <div className="pb-[10px]">
          <ClickOptions number={statsType0} image={Application1} />
        </div>
        <div className="pb-[27px]">
          <ClickOptions number={statsType10} image={Application2} />
        </div>
      </div>
    </div>
  );
};

export default ClickOptionCard;
