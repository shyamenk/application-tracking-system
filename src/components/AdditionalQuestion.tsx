import { useEffect, useState } from "react";
import { questionOptions } from "../data/QuestionOptions";
import { Button, Card } from "antd";
import SelectInput from "./ui/Select";
import ParagraphQuestion from "./questions/ParagraphQuestion";
import MultipleChoice from "./questions/MultipleChoice";
import DropdownQuestion from "./questions/Dropdown";
import YesOrNoQuestion from "./questions/YesOrNo";
import { useFormContext } from "./context/FormContext";
import { titleCase } from "../utils/util";
import { EditOutlined } from "@ant-design/icons";

type Props = {
  questionCategory: string;
};

interface Question {
  type: string;
  question: string;
}

const AdditionalQuestionCard = ({ questionCategory }: Props) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const [questions, setQuestions] = useState<Question[]>([]);

  const { state } = useFormContext();
  console.log(state);

  useEffect(() => {
    if (state.personalInformation) {
      const personalQuestions = state.personalInformation.personalQuestions;
      setQuestions([...questions, ...personalQuestions]);
    }
    if (state.profile) {
      const profileQuestions = state.profile.profileQuestions;
      setQuestions([...questions, ...profileQuestions]);
    }
  }, []);

  const handleOptionChange = (value: string | null) => {
    setSelectedOption(value);
  };

  const handleSaveQuestion = (newQuestion: Question) => {
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
  };

  return (
    <div className="max-w-lg mt-10">
      <div className="mb-4">
        <Card
          headStyle={{ background: "#D0F7FA", color: "black" }}
          title="Additional Questions"
        >
          {questions.map((question: Question, index: number) => (
            <div key={index} className="mb-4">
              <p className="text-gray-500">{titleCase(question.type)}</p>
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-black">{question.question}</h2>
                <Button
                  icon={<EditOutlined />}
                  type="link"
                  className="text-black hover:text-black"
                ></Button>
              </div>
            </div>
          ))}
          <SelectInput
            title="Questions"
            options={questionOptions}
            placeholder="Select a question type"
            onChange={handleOptionChange}
          />
          {selectedOption === "paragraph" && (
            <ParagraphQuestion
              questionCategory={questionCategory}
              onSave={handleSaveQuestion}
            />
          )}
          {selectedOption === "multipleChoice" && (
            <MultipleChoice
              questionCategory={questionCategory}
              onSave={handleSaveQuestion}
            />
          )}
          {selectedOption === "dropdown" && (
            <DropdownQuestion
              questionCategory={questionCategory}
              onSave={handleSaveQuestion}
            />
          )}
          {selectedOption === "yesorno" && (
            <YesOrNoQuestion
              questionCategory={questionCategory}
              onSave={handleSaveQuestion}
            />
          )}
        </Card>
      </div>
    </div>
  );
};

export default AdditionalQuestionCard;
