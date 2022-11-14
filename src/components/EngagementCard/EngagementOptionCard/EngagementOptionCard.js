import React, { useEffect, useState } from "react";
import EngagementOptions from "../EngagementOptions/EngagementOptions";
import ViewIcon from "../../../images/viewBlue.png";
import ShareIcon from "../../../images/shareBlue.png";
import ClockIcon from "../../../images/clockBlue.png";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

const EngagementOptionCard = () => {
  const [statsType1, setStatsType1] = useState(0);
  const [statsType7, setStatsType7] = useState(0);
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
                  let stats1 = 0;
                  let stats7 = 0;
                  allStatSnapshot.docs.forEach((doc) => {
                    if (
                      doc.data().statsType === 1 &&
                      new Date(doc.data().timestamp.toDate()).getMonth() ===
                        new Date().getMonth()
                    ) {
                      stats1 += 1;
                    }

                    if (
                      doc.data().statsType === 7 &&
                      new Date(doc.data().timestamp.toDate()).getMonth() ===
                        new Date().getMonth()
                    ) {
                      stats7 += 1;
                    }
                  });

                  setStatsType1(stats1);
                  setStatsType7(stats7);
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
  }, []);
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center space-x-[22px] mb-[11px]">
        <div className="basis-1/2">
          <EngagementOptions
            image={ViewIcon}
            text={statsType1}
            subText="Views totali"
          />
        </div>

        <div className="basis-1/2">
          <EngagementOptions
            image={ShareIcon}
            text={statsType7}
            subText="Condivisioni"
          />
        </div>
      </div>

      <EngagementOptions
        image={ClockIcon}
        text="20 sec"
        subText="Tempo Medio sulla Pagina"
        useBigSubtext
      />
    </div>
  );
};

export default EngagementOptionCard;
