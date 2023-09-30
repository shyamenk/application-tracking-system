import { Card, Input, Checkbox, Switch, Divider, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import InputField from "./ui/InputField";
import ToggleField from "./ui/ToggleField";
import AddButton from "./ui/AddButton";

const inputStyle = {
  border: "none",
  borderBottom: "1px solid #d9d9d9",
  paddingLeft: "0px",
  paddingBottom: "10px",
  borderRadius: 0,
  boxShadow: "none",
  width: "100%",
};

const PersonalInfoCard = () => {
  return (
    <div className="max-w-lg mt-10">
      <Card
        headStyle={{ background: "#D0F7FA", color: "black" }}
        title="Personal Information"
      >
        <InputField id="firstName" placeholder="First Name" />
        <InputField id="lastName" placeholder="Last Name" />
        <InputField id="email" placeholder="Email" />

        <ToggleField label="Phone" id="phone" />
        <Divider />
        <ToggleField label="Nationality" id="nationality" />
        <Divider />
        <ToggleField label="Current Residence" id="currentResidence" />
        <Divider />
        <ToggleField label="ID Number" id="idNumber" />
        <Divider />
        <ToggleField label="Date Of Birth" id="dateOfBirth" />
        <Divider />
        <ToggleField label="Gender" id="gender" />
        <Divider />
        <AddButton />
      </Card>
    </div>
  );
};

export default PersonalInfoCard;
