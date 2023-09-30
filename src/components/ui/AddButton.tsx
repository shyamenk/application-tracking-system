import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

interface AddButtonProps {
  onToggleQuestions: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ onToggleQuestions }) => {
  return (
    <div className="mb-4 flex items-center gap-4">
      <Button
        type="link"
        icon={<PlusOutlined />}
        size={"small"}
        className="bg-white text-black font-extrabold hover:text-black!important"
        onClick={() => {
          onToggleQuestions();
        }}
      >
        Add a question
      </Button>
    </div>
  );
};

export default AddButton;
