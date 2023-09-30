import SelectField from "./ui/SelectField";
import { questionOptions } from "../data/QuestionOptions";

const QuestionsCard = () => {
  return (
    <div className="max-w-lg mt-10">
      <SelectField
        title="Questions"
        options={questionOptions}
        placeholder="Select a question type"
      />
    </div>
  );
};

export default QuestionsCard;
