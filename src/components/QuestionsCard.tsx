import { useEffect, useState } from "react";
import { questionOptions } from "../data/QuestionOptions";
import { Card } from "antd";
import SelectInput from "./ui/Select";
import ParagraphQuestion from "../questions/ParagraphQuestion";
import MultipleChoice from "../questions/MultipleChoice";
import { FormState } from "../types/formType";

type Props = {
  questionCategory: string;
};

const QuestionsCard = ({ questionCategory }: Props) => {
  // const [data, setData] = useState<FormState>();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchQuestions = async () => {
  //     const response = await fetch(
  //       "http://127.0.0.1:4010/api/37.10848585972955/programs/accusamus/application-form"
  //     );
  //     const data = await response.json();
  //     setData(data);
  //   };

  //   fetchQuestions();
  // }, []);

  // console.log(data);

  const handleOptionChange = (value: string | null) => {
    setSelectedOption(value);
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
            <ParagraphQuestion questionCategory={questionCategory} />
          )}
          {selectedOption === "multipleChoice" && (
            <MultipleChoice questionCategory={questionCategory} />
          )}
        </Card>
      </div>
    </div>
  );
};

export default QuestionsCard;
