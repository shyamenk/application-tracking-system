import { Button, Checkbox, Input } from "antd";
import useQuestionState from "../../hooks/useQuestions";

interface Question {
  type: string;
  question: string;
}

type Props = {
  questionCategory: string;
  onSave: (newQuestion: Question) => void;
};

const YesOrNoQuestion = ({ questionCategory, onSave }: Props) => {
  const {
    newQuestion,
    setNewQuestion,
    saveQuestion,
    disqualify,
    setdisqualify,
  } = useQuestionState(questionCategory);

  const saveQuestionHandler = () => {
    const questionTemplate: Question = {
      type: "yesorno",
      question: newQuestion,
    };
    saveQuestion("yesorno");
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
      <div className="mt-4">
        <Checkbox
          checked={disqualify}
          onChange={(e) => setdisqualify(e.target.checked)}
        >
          Disqualify candidate if the answer is no
        </Checkbox>
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
            onClick={saveQuestionHandler}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default YesOrNoQuestion;
