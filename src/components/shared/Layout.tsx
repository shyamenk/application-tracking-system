import AdditionalQuestionCard from "../AdditionalQuestion";
import CoverImageCard from "../CoverImageCard";
import FormSubmit from "../FormSubmit";
import PersonalInfoCard from "../PersonalCard";
import ProfileCard from "../ProfileCard";
import SideBar from "./SideBar";
import TabMenu from "./Tab";

const Layout = () => {
  return (
    <>
      <div className="flex gap-10">
        <SideBar />
        <div className="flex-grow ">
          <TabMenu />
          <CoverImageCard />
          <PersonalInfoCard />
          <ProfileCard />
          <AdditionalQuestionCard questionCategory="additional" />
          <FormSubmit />
        </div>
      </div>
    </>
  );
};

export default Layout;
