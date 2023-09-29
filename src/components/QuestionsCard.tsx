import { Card, Checkbox, Switch, Divider, Button, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const QuestionsCard = () => {
  return (
    <div className="max-w-lg mt-10">
      <Card
        headStyle={{ background: "#D0F7FA", color: "black" }}
        title="Questions"
      >
        <div className="mb-4">
          <Select
            style={{ width: 450 }}
            size="large"
            placeholder="Questions"
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "tom",
                label: "Tom",
              },
            ]}
          />
        </div>
      </Card>
    </div>
  );
};

export default QuestionsCard;
