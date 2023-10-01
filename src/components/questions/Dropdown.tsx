import { Button, Input, Checkbox } from "antd";
import { PlusOutlined, UnorderedListOutlined } from "@ant-design/icons";
import useQuestionState from "../../hooks/useQuestions";

type Props = {
  questionCategory: string;
};

const DropdownQuestion = ({ questionCategory }: Props) => {
  const {
    newQuestion,
    setNewQuestion,
    choices,
    handleAddChoice,
    handleChoiceChange,
    enableOther,
    setEnableOther,
    maxChoice,
    setMaxChoice,
    // clearQuestionState,
    saveQuestion,
  } = useQuestionState(questionCategory);

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2 pl-1">Question</label>
      <Input
        style={{ width: 450 }}
        type="text"
        size="large"
        placeholder="Type here"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
      />
      <div className="mt-4">
        <label className="block text-sm font-medium mb-2 pl-1">Choices</label>
        {choices.map((choice, index) => (
          <div key={index} className="flex items-center gap-4 mb-4">
            <UnorderedListOutlined />
            <Input
              style={{ width: 350 }}
              type="text"
              size="large"
              placeholder={`Type Here`}
              value={choice}
              onChange={(e) => handleChoiceChange(index, e.target.value)}
            />
            {index === choices.length - 1 && (
              <Button
                icon={<PlusOutlined />}
                onClick={handleAddChoice}
                type="link"
                size="small"
                className="text-black hover:text-black"
              ></Button>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Checkbox
          checked={enableOther}
          onChange={(e) => setEnableOther(e.target.checked)}
        >
          Enable "Other" Option
        </Checkbox>
      </div>
      {/* <div className="mt-4">
        <label className="block text-sm font-medium mb-2 pl-1">
          Max choice allowed
        </label>
        <Input
          style={{ width: 450 }}
          type="text"
          size="large"
          placeholder="Enter max choices"
          value={maxChoice}
          onChange={(e) => setMaxChoice(parseInt(e.target.value))}
        />
      </div> */}
      <div className="flex items-center gap-2 mt-6">
        <Button
          type="link"
          className="text-red-600 font-extrabold hover:bg-red-800"
        >
          Delete Question
        </Button>
        <div className="ml-auto">
          <Button
            type="primary"
            className="font-bold bg-[#087B2C]"
            onClick={() => saveQuestion("dropdown")}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DropdownQuestion;
