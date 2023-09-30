import { Card, Divider } from "antd";
import InputField from "./ui/InputField";
import AddButton from "./ui/AddButton";
import ToggleField from "./ui/ToggleField";
import { useState } from "react";
import QuestionsCard from "./QuestionsCard";
import { useFormContext } from "./context/FormContext";

const PersonalInfoCard = () => {
  const { state, updatePersonalInfo } = useFormContext();
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleQuestions = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="max-w-lg mt-10">
      <Card
        headStyle={{ background: "#D0F7FA", color: "black" }}
        title="Personal Information"
      >
        <label className="block text-sm font-medium mb-4">First Name</label>
        <Divider />
        <label className="block text-sm font-medium mb-4">Last Name</label>
        <Divider />
        <label className="block text-sm font-medium mb-4">Email</label>
        <Divider />

        <ToggleField
          label="Phone"
          id="phone"
          onInternalUseChange={(value) => {
            updatePersonalInfo({
              phoneNumber: {
                ...state.personalInformation.phoneNumber,
                internalUse: value,
              },
            });
          }}
          onShowChange={(value) => {
            updatePersonalInfo({
              phoneNumber: {
                ...state.personalInformation.phoneNumber,
                show: value,
              },
            });
          }}
        />
        <Divider />
        <ToggleField
          label="Nationality"
          id="nationality"
          onInternalUseChange={(value) => {
            updatePersonalInfo({
              nationality: {
                ...state.personalInformation.nationality,
                internalUse: value,
              },
            });
          }}
          onShowChange={(value) => {
            updatePersonalInfo({
              nationality: {
                ...state.personalInformation.nationality,
                show: value,
              },
            });
          }}
        />
        <Divider />
        <ToggleField
          label="Current Residence"
          id="currentResidence"
          onInternalUseChange={(value) => {
            updatePersonalInfo({
              currentResidence: {
                ...state.personalInformation.currentResidence,
                internalUse: value,
              },
            });
          }}
          onShowChange={(value) => {
            updatePersonalInfo({
              currentResidence: {
                ...state.personalInformation.currentResidence,
                show: value,
              },
            });
          }}
        />
        <Divider />
        <ToggleField
          label="ID Number"
          id="idNumber"
          onInternalUseChange={(value) => {
            updatePersonalInfo({
              idNumber: {
                ...state.personalInformation.idNumber,
                internalUse: value,
              },
            });
          }}
          onShowChange={(value) => {
            updatePersonalInfo({
              idNumber: {
                ...state.personalInformation.idNumber,
                show: value,
              },
            });
          }}
        />
        <Divider />
        <ToggleField
          label="Date Of Birth"
          id="dateOfBirth"
          onInternalUseChange={(value) => {
            updatePersonalInfo({
              dateOfBirth: {
                ...state.personalInformation.dateOfBirth,
                internalUse: value,
              },
            });
          }}
          onShowChange={(value) => {
            updatePersonalInfo({
              dateOfBirth: {
                ...state.personalInformation.dateOfBirth,
                show: value,
              },
            });
          }}
        />
        <Divider />
        <ToggleField
          label="Gender"
          id="gender"
          onInternalUseChange={(value) => {
            updatePersonalInfo({
              gender: {
                ...state.personalInformation.gender,
                internalUse: value,
              },
            });
          }}
          onShowChange={(value) => {
            updatePersonalInfo({
              gender: {
                ...state.personalInformation.gender,
                show: value,
              },
            });
          }}
        />
        <Divider />
        <AddButton onToggleQuestions={handleToggleQuestions} />
      </Card>
      {isVisible && <QuestionsCard questionCategory="personal" />}
    </div>
  );
};

export default PersonalInfoCard;
