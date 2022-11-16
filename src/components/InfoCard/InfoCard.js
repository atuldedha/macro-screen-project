import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import EventInfoCard from "./EventInfoCard/EventInfoCard";
import TotalInfo from "./TotalInfo/TotalInfo";

const InfoCard = ({ data }) => {
  const [licenseDate, setLicenseDate] = useState(0);
  const [eventPublication, setEventPublication] = useState(0);
  const [eventName, setEventName] = useState("");

  useEffect(() => {
    getDoc(doc(db, "Customers", "d0bqIyQ9wx0FGrRhglRh"))
      .then((document) => {
        if (document.data().licenseTimestamp) {
          // serverTimestamp()
          if (
            new Date(document.data().licenseTimestamp.toDate()).getTime() >
            new Date().getTime()
          ) {
            setLicenseDate(
              parseInt(
                (new Date(document.data().licenseTimestamp.toDate()).getTime() -
                  new Date().getTime()) /
                  (1000 * 3600 * 24)
              )
            );
          } else {
            setLicenseDate(0);
          }

          let firstMonth = new Date();
          firstMonth.setDate(
            new Date(document.data().licenseTimestamp.toDate()).getDate() + 30
          );

          let secondMonth = new Date();
          secondMonth.setDate(
            new Date(document.data().licenseTimestamp.toDate()).getDate() + 60
          );

          let thirdMonth = new Date();
          firstMonth.setDate(
            new Date(document.data().licenseTimestamp.toDate()).getDate() + 90
          );

          let fourthMonth = new Date();
          firstMonth.setDate(
            new Date(document.data().licenseTimestamp.toDate()).getDate() + 120
          );

          let fifthMoth = new Date();
          firstMonth.setDate(
            new Date(document.data().licenseTimestamp.toDate()).getDate() + 150
          );

          let sixthMonth = new Date();
          firstMonth.setDate(
            new Date(document.data().licenseTimestamp.toDate()).getDate() + 180
          );

          let seventhMonth = new Date();
          firstMonth.setDate(
            new Date(document.data().licenseTimestamp.toDate()).getDate() + 210
          );

          let eighthMonth = new Date();
          firstMonth.setDate(
            new Date(document.data().licenseTimestamp.toDate()).getDate() + 240
          );

          let ninthMonth = new Date();
          firstMonth.setDate(
            new Date(document.data().licenseTimestamp.toDate()).getDate() + 270
          );

          let tenthMonth = new Date();
          firstMonth.setDate(
            new Date(document.data().licenseTimestamp.toDate()).getDate() + 300
          );

          let eleventhMonth = new Date();
          firstMonth.setDate(
            new Date(document.data().licenseTimestamp.toDate()).getDate() + 330
          );

          let twelwethMonth = new Date();
          firstMonth.setDate(
            new Date(document.data().licenseTimestamp.toDate()).getDate() + 360
          );
          if (new Date().getTime() > firstMonth.getTime()) {
            if (document.data().freeEvent.firstMonth) {
              setEventPublication(document.data().eventNum + 1);
            }
          } else if (new Date().getTime() > secondMonth.getTime()) {
            if (document.data().freeEvent.secondMonth) {
              setEventPublication(document.data().eventNum + 1);
            }
          } else if (new Date().getTime() > thirdMonth.getTime()) {
            if (document.data().freeEvent.thirdMonth) {
              setEventPublication(document.data().eventNum + 1);
            }
          } else if (new Date().getTime() > fourthMonth.getTime()) {
            if (document.data().freeEvent.fourthMonth) {
              setEventPublication(document.data().eventNum + 1);
            }
          } else if (new Date().getTime() > fifthMoth.getTime()) {
            if (document.data().freeEvent.fifthMoth) {
              setEventPublication(document.data().eventNum + 1);
            }
          } else if (new Date().getTime() > sixthMonth.getTime()) {
            if (document.data().freeEvent.sixthMonth) {
              setEventPublication(document.data().eventNum + 1);
            }
          } else if (new Date().getTime() > seventhMonth.getTime()) {
            if (document.data().freeEvent.seventhMonth) {
              setEventPublication(document.data().eventNum + 1);
            }
          } else if (new Date().getTime() > eighthMonth.getTime()) {
            if (document.data().freeEvent.eighthMonth) {
              setEventPublication(document.data().eventNum + 1);
            }
          } else if (new Date().getTime() > ninthMonth.getTime()) {
            if (document.data().freeEvent.ninthMonth) {
              setEventPublication(document.data().eventNum + 1);
            }
          } else if (new Date().getTime() > tenthMonth.getTime()) {
            if (document.data().freeEvent.tenthMonth) {
              setEventPublication(document.data().eventNum + 1);
            }
          } else if (new Date().getTime() > eleventhMonth.getTime()) {
            if (document.data().freeEvent.eleventhMonth) {
              setEventPublication(document.data().eventNum + 1);
            }
          } else if (new Date().getTime() > twelwethMonth.getTime()) {
            if (document.data().freeEvent.twelwethMonth) {
              setEventPublication(document.data().eventNum + 1);
            }
          } else {
            setEventPublication(document.data().eventNum);
          }
        }
        if (document.data().eventSelectedDocumentId) {
          getDoc(
            doc(
              db,
              "Events",
              document
                .data()
                .eventSelectedDocumentId.toString()
                .replace(/\s+/, "")
            )
          ).then((newDoc) => {
            setEventName(newDoc.data().eventName.en);
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="bg-[#A3A2D8] rounded-[24px] md:rounded-[28px] flex flex-col items-center px-[22px] md:px-[58px]">
      <div className="flex items-center mt-[17px] space-x-[14px]">
        <EventInfoCard
          eventName="Eventi da pubblicare"
          number={eventPublication}
        />
        <EventInfoCard
          eventName="Licenza in scadenza"
          number={licenseDate}
          useSubtext
          subText="Giorni Mancanti"
        />
      </div>

      <span className="font-poppins font-bold text-[13px] md:text-[35px] leading-[19.5px] md:leading-[52px] text-lightGray mt-[15px] mb-[6px] md:mt-[34px] md:mb-[10px]">
        {eventName}
      </span>

      <div className="mb-[18px] w-full md:mb-[45px]">
        <TotalInfo />
      </div>
    </div>
  );
};

export default InfoCard;
