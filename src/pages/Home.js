import EngagementCard from "../components/EngagementCard/EngagementCard";
import InfoCard from "../components/InfoCard/InfoCard";
import RecentActivities from "../components/RecentActivities/RecentActivities";

function Home() {
  return (
    <div className="bg-bgColor">
      <div className="flex flex-col md:flex-row md:space-x-[40px] h-full md:ml-[288px] md:pt-[53px] md:mr-[90px] md:mb-[40px]">
        <div className="px-[16px] pt-[59px] pb-[25px] md:px-0 md:pt-0 md:pb-0 md:basis-2/3">
          <InfoCard />
        </div>
        <div className="px-[15px] pb-[25px] md:px-0 md:pt-0 md:pb-0 md:basis-1/3">
          <EngagementCard />
        </div>
      </div>

      <div className="px-[15px] pb-[105px] bg-bgColor md:ml-[288px] md:px-0 md:mr-[92px]">
        <RecentActivities />
      </div>
    </div>
  );
}

export default Home;
