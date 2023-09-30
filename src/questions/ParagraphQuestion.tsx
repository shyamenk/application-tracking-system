import { Button, Input } from "antd";
import { useState } from "react";
import { useFormContext } from "../components/context/FormContext";

type Props = {
  questionCategory: string;
};

const ParagraphQuestion = ({ questionCategory }: Props) => {
  const [newQuestion, setNewQuestion] = useState<string>("");
  const { state, updatePersonalInfo, updateProfile } = useFormContext();

  const handleSaveQuestion = () => {
    if (newQuestion.trim() !== "") {
      if (questionCategory === "personal") {
        updatePersonalInfo({
          personalQuestions: [
            ...state.personalInformation.personalQuestions,
            {
              id: "unique-id",
              type: "paragraph",
              question: newQuestion,
              choices: [],
              maxChoice: 0,
              disqualify: false,
              other: false,
            },
          ],
        });
      } else if (questionCategory === "profile") {
        updateProfile({
          profileQuestions: [
            ...state.profile.profileQuestions,
            {
              id: "unique-id",
              type: "paragraph",
              question: newQuestion,
              choices: [],
              maxChoice: 0,
              disqualify: false,
              other: false,
            },
          ],
        });
      } else {
        // Handle other categories
      }

      setNewQuestion("");
    }
  };
  console.log(state);

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2 pl-1">Question</label>
      <Input
        style={{ width: 450 }}
        type="text"
        size="large"
        placeholder="Enter a paragraph question"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
      />
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

export default ParagraphQuestion;
