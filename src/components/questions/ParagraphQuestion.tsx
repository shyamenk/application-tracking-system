import { Button, Input } from "antd";
import useQuestionState from "../../hooks/useQuestions";
import { QuestionTemplate } from "../../types/formType";

type Props = {
  questionCategory: string;
  onSave: (newQuestion: Question) => void;
};

interface Question {
  type: string;
  question: string;
}
const ParagraphQuestion = ({ questionCategory, onSave }: Props) => {
  const { newQuestion, setNewQuestion, saveQuestion } =
    useQuestionState(questionCategory);

  const saveQuestionHandler = () => {
    const questionTemplate: Question = {
      type: "paragraph",
      question: newQuestion,
    };
    saveQuestion("paragraph");
    onSave(questionTemplate);
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
            onClick={saveQuestionHandler}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ParagraphQuestion;
