import { collection, getDocs, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import RecentActivitiesCard from "./RecentActivitiesard/RecentActivitiesCard";

const RecentActivities = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "Customers")).then((snapshot) => {
      const q = query(
        collection(db, "Customers", snapshot.docs[0].id, "recentActivities"),
        orderBy("timestamp", "desc")
      );
      getDocs(q).then((newSnapshot) => {
        const temp = [];
        newSnapshot.docs.forEach((document) => {
          const obj = {
            text: document.data()?.text,
            date: new Date(
              document.data()?.timestamp.toDate()
            ).toLocaleDateString(),
            timestamp: new Date(
              document.data()?.timestamp.toMillis()
            ).toLocaleTimeString("en-US", {
              hourCycle: "h24",
              hour: "2-digit",
              minute: "2-digit",
            }),
          };
          temp.push(obj);
        });

        setData(temp);
      });
    });
  }, []);
  return (
    <div className="bg-white rounded-3xl md:rounded-[36px] shadow-2xl py-[6px] md:py-[20px] pl-[9px] md:pl-[30px] pr-[12px] md:pr-[40px] h-[70px] md:h-[230px] overflow-scroll flex flex-col">
      <span className="text-customBlue font-poppins font-bold text-[8px] md:text-[25px] leading-[12px] md:leading-[40px]">
        Attività Recenti
      </span>

      {data?.map((item, index) => (
        <RecentActivitiesCard
          key={index}
          text={item.text}
          date={item.date}
          timestamp={item.timestamp}
        />
      ))}
    </div>
  );
};

export default RecentActivities;
