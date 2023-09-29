import { Card, Input, Checkbox, Switch, Divider, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const ProfileCard = () => {
  return (
    <div className="max-w-lg mt-10">
      <Card
        headStyle={{ background: "#D0F7FA", color: "black" }}
        title="Profile"
      >
        <div className="mb-4 flex items-center">
          <label className="block text-sm font-medium ">Education</label>
          <div className="ml-auto flex items-center gap-4">
            <Checkbox id="phone" />
            <label className="block text-sm font-medium">Mandatory</label>
            <Switch size="small" id="showHidePhone" />
            <label className="block text-sm font-medium ml-2">Hide</label>
          </div>
        </div>
        <Divider />
        <div className="mb-4 flex items-center">
          <label className="block text-sm font-medium">Experience</label>
          <div className="ml-auto flex items-center gap-4">
            <Checkbox id="phone" />
            <label className="block text-sm font-medium">Mandatory</label>
            <Switch size="small" id="showHidePhone" />
            <label className="block text-sm font-medium ml-2">Hide</label>
          </div>
        </div>
        <Divider />
        <div className="mb-4 flex items-center">
          <label className="block text-sm font-medium">Resume</label>
          <div className="ml-auto flex items-center gap-4">
            <Checkbox id="phone" />
            <label className="block text-sm font-medium">Mandatory</label>
            <Switch size="small" id="showHidePhone" />
            <label className="block text-sm font-medium ml-2">Hide</label>
          </div>
        </div>
        <Divider />
        <Divider />
        <div className="mb-4 flex items-center gap-4">
          <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
            size={"small"}
            className="bg-white text-black font-extrabold"
          />
          <label className="block text-sm font-medium">Add a question</label>
        </div>
      </Card>
    </div>
  );
};

export default ProfileCard;
