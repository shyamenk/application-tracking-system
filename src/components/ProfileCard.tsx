import React from "react";
import { Card, Divider, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import ToggleField from "./ui/ToggleField";
import AddButton from "./ui/AddButton";

const ProfileCard: React.FC = () => {
  return (
    <div className="max-w-lg mt-10">
      <Card
        headStyle={{ background: "#D0F7FA", color: "black" }}
        title="Profile"
      >
        <ToggleField label="Education" id="education" subLabel="Mandatory" />
        <Divider />
        <ToggleField label="Experience" id="experience" subLabel="Mandatory" />
        <Divider />
        <ToggleField label="Resume" id="resume" subLabel="Mandatory" />
        <Divider />
        <AddButton />
      </Card>
    </div>
  );
};

export default ProfileCard;
