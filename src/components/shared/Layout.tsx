import CoverImageCard from "../CoverImageCard";
import PersonalInfoCard from "../PersonalCard";
import ProfileCard from "../ProfileCard";
import QuestionsCard from "../QuestionsCard";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <div className="flex gap-10">
      <SideBar />
      <div className="flex-grow ">
        <CoverImageCard />
        <PersonalInfoCard />
        <ProfileCard />
        <QuestionsCard />
      </div>
    </div>
  );
};

export default Layout;
