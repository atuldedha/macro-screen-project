import React, { useEffect, useState } from "react";
import TotalInfoOption from "./TotalInfoOption/TotalInfoOption";
import ClicksInfo from "./ClicksInfoOption/ClicksInfoOption";
import ViewIcon from "../../../images/view.png";
import ShareIcon from "../../../images/share.png";
import HeartIcon from "../../../images/heart.png";
import PhoneIcon from "../../../images/phoneGray.png";
import ApplicationIcon from "../../../images/application1Gray.png";
import ApplicationIcon2 from "../../../images/application2Gray.png";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

const TotalInfo = () => {
  const [statsType1, setStatsType1] = useState(0);
  const [statsType7, setStatsType7] = useState(0);
  const [statsType2, setStatsType2] = useState(0);
  const [statsType3, setStatsType3] = useState(0);
  const [statsType9, setStatsType9] = useState(0);
  const [statsType10, setStatsType10] = useState(0);
  useEffect(() => {
    getDoc(doc(db, "Customers", "d0bqIyQ9wx0FGrRhglRh")).then((document) => {
      if (document.data().eventSelectedDocumentId) {
        getDocs(
          collection(
            db,
            "Events",
            document
              .data()
              .eventSelectedDocumentId.toString()
              .replace(/\s+/, ""),
            "Statistics"
          )
        ).then((snapshot) => {
          let stats1 = 0;
          let stats7 = 0;
          let stats2 = 0;
          let stats3 = 0;
          let stats9 = 0;
          let stats10 = 0;

          snapshot.docs.forEach((newDoc) => {
            if (newDoc.data().statsType === 1) {
              stats1 += 1;
            } else if (newDoc.data().statsType === 7) {
              stats7 += 1;
            } else if (newDoc.data().statsType === 2) {
              stats2 += 1;
            } else if (newDoc.data().statsType === 3) {
              stats3 += 1;
            } else if (newDoc.data().statsType === 9) {
              stats9 += 1;
            } else if (newDoc.data().statsType === 10) {
              stats10 += 1;
            }
          });

          setStatsType1(stats1);
          setStatsType7(stats7);
          setStatsType2(stats2);
          setStatsType3(stats3);
          setStatsType9(stats9);
          setStatsType10(stats10);
        });
      }
    });
  }, []);
  return (
    <div className="bg-darkGray px-[19px] md:px-[47px] pt-[10px] md:pt-[28px] pb-[8px] md:pb-[20px] rounded-2xl md:rounded-[34px]">
      <div className="flex items-center justify-between w-full space-x-[22px] mb-[9px]">
        <div className="basis-1/3">
          <TotalInfoOption
            image={ViewIcon}
            count={statsType1}
            text="Views totali"
          />
        </div>
        <div className="basis-1/3">
          <TotalInfoOption
            image={ShareIcon}
            count={statsType7}
            text="Condivisioni"
          />
        </div>
        <div className="basis-1/3">
          <TotalInfoOption
            image={HeartIcon}
            count={statsType2}
            text="Nei preferiti"
          />
        </div>
      </div>

      <div className="bg-lightGray md:mt-[21px] py-[6px] md:py-[20px] pl-[8px] md:pl-[20px] pr-[14px] flex flex-col space-y-[4px] rounded-xl md:rounded-[20px] shadow-2xl">
        <ClicksInfo image={PhoneIcon} text={`${statsType3} Click`} />
        <ClicksInfo image={ApplicationIcon} text={`${statsType9} Click`} />
        <ClicksInfo image={ApplicationIcon2} text={`${statsType10} Click`} />
      </div>
    </div>
  );
};

export default TotalInfo;
