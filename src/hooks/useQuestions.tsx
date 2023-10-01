import { useState } from "react";
import { useFormContext } from "../components/context/FormContext";

const useQuestionState = (questionCategory: string) => {
  const [newQuestion, setNewQuestion] = useState<string>("");
  const [choices, setChoices] = useState<string[]>([""]);
  const [enableOther, setEnableOther] = useState(false);
  const [maxChoice, setMaxChoice] = useState<number | undefined>(undefined);
  const [disqualify, setdisqualify] = useState(false);

  const { state, updatePersonalInfo, updateProfile, addCustomisedQuestion } =
    useFormContext();

  const handleAddChoice = () => {
    setChoices([...choices, ""]);
  };

  const handleChoiceChange = (index: number, choice: string) => {
    const updatedChoices = [...choices];
    updatedChoices[index] = choice;
    setChoices(updatedChoices);
  };

  const clearQuestionState = () => {
    setNewQuestion("");
    setChoices([""]);
    setEnableOther(false);
    setMaxChoice(undefined);
  };

  //  Note:Usually id fields are populated by Database
  const saveQuestion = (category: string) => {
    if (newQuestion.trim() !== "") {
      const question = {
        id: "unique-id",
        type: category,
        question: newQuestion,
        choices: choices.filter((choice) => choice.trim() !== ""),
        maxChoice: maxChoice || 0,
        disqualify: disqualify,
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

      clearQuestionState();
    }
  };

  return {
    newQuestion,
    setNewQuestion,
    choices,
    handleAddChoice,
    handleChoiceChange,
    disqualify,
    setdisqualify,
    enableOther,
    setEnableOther,
    maxChoice,
    setMaxChoice,
    clearQuestionState,
    saveQuestion,
  };
};

export default useQuestionState;
