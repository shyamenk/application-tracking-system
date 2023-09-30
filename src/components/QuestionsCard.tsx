import React, { useState } from "react";
import { questionOptions } from "../data/QuestionOptions";
import { Button, Card, Input } from "antd";
import SelectInput from "./ui/Select";
import ParagraphQuestion from "../questions/ParagraphQuestion";
import { useFormContext } from "./context/FormContext";

const QuestionsCard: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [questions, setQuestions] = useState<string[]>([]);
  const [newQuestion, setNewQuestion] = useState<string>("");
  const { state, addCustomisedQuestion } = useFormContext();

  const handleOptionChange = (value: string | null) => {
    setSelectedOption(value);
  };

  const handleAddQuestion = () => {
    if (newQuestion && selectedOption === "multipleChoice") {
      setQuestions([...questions, newQuestion]);
      setNewQuestion("");
    }
  };

  return (
    <div className="max-w-lg mt-10">
      <div className="mb-4">
        <Card
          headStyle={{ background: "#D0F7FA", color: "black" }}
          title="Questions"
        >
          <SelectInput
            title="Questions"
            options={questionOptions}
            placeholder="Select a question type"
            onChange={handleOptionChange}
          />
          {selectedOption === "paragraph" && (
            <ParagraphQuestion newQuestion={newQuestion} />
          )}

          {selectedOption === "multipleChoice" && (
            <div>{/* Render multiple choice questions */}</div>
          )}

          <div>
            {questions.map((question, index) => (
              <div key={index}>{question}</div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button
              type="link"
              className=" text-red-600 font-extrabold hover:bg-red-800"
              onClick={handleAddQuestion}
            >
              Delete Question
            </Button>
            <div className="ml-auto">
              <Button type="primary" className="font-bold bg-[#087B2C]">
                Save
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default QuestionsCard;
