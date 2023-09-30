import { Button, Input, Checkbox } from "antd";
import { useState } from "react";
import { useFormContext } from "../components/context/FormContext";
import { PlusOutlined, UnorderedListOutlined } from "@ant-design/icons";

type Props = {
  questionCategory: string;
};

const MultipleChoiceQuestion = ({ questionCategory }: Props) => {
  const [newQuestion, setNewQuestion] = useState<string>("");
  const [choices, setChoices] = useState<string[]>([""]);
  const [enableOther, setEnableOther] = useState(false);
  const [maxChoice, setMaxChoice] = useState<number | undefined>(undefined);
  const { state, updatePersonalInfo, updateProfile, addCustomisedQuestion } =
    useFormContext();

  console.log(state);

  const handleSaveQuestion = () => {
    if (newQuestion.trim() !== "") {
      const question = {
        id: "unique-id",
        type: "multipleChoice",
        question: newQuestion,
        choices: choices.filter((choice) => choice.trim() !== ""),
        maxChoice: maxChoice || 0,
        disqualify: false,
        other: enableOther,
      };

      if (questionCategory === "personal") {
        updatePersonalInfo({
          personalQuestions: [
            ...state.personalInformation.personalQuestions,
            question,
          ],
        });
      } else if (questionCategory === "profile") {
        updateProfile({
          profileQuestions: [...state.profile.profileQuestions, question],
        });
      } else {
        addCustomisedQuestion(question);
      }

      setNewQuestion("");
      setChoices([""]);
      setEnableOther(false);
      setMaxChoice(undefined);
    }
  };

  const handleAddChoice = () => {
    setChoices([...choices, ""]);
  };

  const handleChoiceChange = (index: number, choice: string) => {
    const updatedChoices = [...choices];
    updatedChoices[index] = choice;
    setChoices(updatedChoices);
  };

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
      <div className="mt-4">
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
      </div>
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
            onClick={handleSaveQuestion}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MultipleChoiceQuestion;
