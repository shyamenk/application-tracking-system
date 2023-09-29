import { Card, Input, Checkbox, Switch, Divider, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

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
        <div className="mb-4">
          <Input id="firstName" placeholder="First Name" style={inputStyle} />
        </div>

        <div className="mb-4">
          <Input id="lastName" placeholder="Last Name" style={inputStyle} />
        </div>

        <div className="mb-6">
          <Input id="email" placeholder="Email" style={inputStyle} />
        </div>

        <div className="mb-4 flex items-center">
          <label className="block text-sm font-medium ">Phone</label>
          <div className="ml-auto flex items-center gap-4">
            <Checkbox id="phone" />
            <label className="block text-sm font-medium">Internal</label>
            <Switch size="small" id="showHidePhone" />
            <label className="block text-sm font-medium ml-2">Hide</label>
          </div>
        </div>
        <Divider />
        <div className="mb-4 flex items-center">
          <label className="block text-sm font-medium">Nationality</label>
          <div className="ml-auto flex items-center gap-4">
            <Checkbox id="phone" />
            <label className="block text-sm font-medium">Internal</label>
            <Switch size="small" id="showHidePhone" />
            <label className="block text-sm font-medium ml-2">Hide</label>
          </div>
        </div>
        <Divider />
        <div className="mb-4 flex items-center">
          <label className="block text-sm font-medium">Current Residence</label>
          <div className="ml-auto flex items-center gap-4">
            <Checkbox id="phone" />
            <label className="block text-sm font-medium">Internal</label>
            <Switch size="small" id="showHidePhone" />
            <label className="block text-sm font-medium ml-2">Hide</label>
          </div>
        </div>
        <Divider />
        <div className="mb-4 flex items-center">
          <label className="block text-sm font-medium">ID Number</label>
          <div className="ml-auto flex items-center gap-4">
            <Checkbox id="phone" />
            <label className="block text-sm font-medium">Internal</label>
            <Switch size="small" id="showHidePhone" />
            <label className="block text-sm font-medium ml-2">Hide</label>
          </div>
        </div>
        <Divider />

        <div className="mb-4 flex items-center">
          <label className="block text-sm font-medium">Date Of Birth</label>
          <div className="ml-auto flex items-center gap-4">
            <Checkbox id="phone" />
            <label className="block text-sm font-medium">Internal</label>
            <Switch size="small" id="showHidePhone" />
            <label className="block text-sm font-medium ml-2">Hide</label>
          </div>
        </div>
        <Divider />

        <div className="mb-4 flex items-center">
          <label className="block text-sm font-medium">Gender</label>
          <div className="ml-auto flex items-center gap-4">
            <Checkbox id="phone" />
            <label className="block text-sm font-medium">Internal</label>
            <Switch size="small" id="showHidePhone" />
            <label className="block text-sm font-medium ml-2">Hide</label>
          </div>
        </div>
        <Divider />

        <div className="mb-4 flex items-center gap-4">
          <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
            size={"small"}
            className="bg-white text-black font-extrabold"
          />
          {/* <Button type="default" icon={<PlusOutlined />}></Button> */}
          <label className="block text-sm font-medium">Add a question</label>
        </div>
      </Card>
    </div>
  );
};

export default PersonalInfoCard;
