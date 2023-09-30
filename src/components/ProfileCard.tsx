import React, { useState } from "react";
import { Card, Divider } from "antd";
import ToggleField from "./ui/ToggleField";
import AddButton from "./ui/AddButton";
import QuestionsCard from "./QuestionsCard";
import { useFormContext } from "./context/FormContext";

const ProfileCard: React.FC = () => {
  const { state, updateProfile } = useFormContext();
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleQuestions = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="max-w-lg mt-10">
      <Card
        headStyle={{ background: "#D0F7FA", color: "black" }}
        title="Profile"
      >
        <ToggleField
          label="Education"
          id="education"
          subLabel="Mandatory"
          onInternalUseChange={(value) => {
            updateProfile({
              education: {
                ...state.profile.education,
                mandatory: value,
              },
            });
          }}
          onShowChange={(value) => {
            updateProfile({
              education: {
                ...state.profile.education,
                show: value,
              },
            });
          }}
        />
        <Divider />
        <ToggleField
          label="Experience"
          id="experience"
          subLabel="Mandatory"
          onInternalUseChange={(value) => {
            updateProfile({
              experience: {
                ...state.profile.experience,
                mandatory: value,
              },
            });
          }}
          onShowChange={(value) => {
            updateProfile({
              experience: {
                ...state.profile.experience,
                show: value,
              },
            });
          }}
        />
        <Divider />
        <ToggleField
          label="Resume"
          id="resume"
          subLabel="Mandatory"
          onInternalUseChange={(value) => {
            updateProfile({
              resume: {
                ...state.profile.resume,
                mandatory: value,
              },
            });
          }}
          onShowChange={(value) => {
            updateProfile({
              resume: {
                ...state.profile.resume,
                show: value,
              },
            });
          }}
        />
        <Divider />
        <AddButton onToggleQuestions={handleToggleQuestions} />
      </Card>
      {isVisible && <QuestionsCard />}
    </div>
  );
};

export default ProfileCard;
