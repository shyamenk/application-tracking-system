import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const AddButton = () => {
  return (
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
  );
};

export default AddButton;
