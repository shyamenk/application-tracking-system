import React, { createContext, useContext, useReducer, Dispatch } from "react";
import { FormAction, FormState, QuestionTemplate } from "../../types/formType";
import { formReducer, initialFormState } from "../../reducer/FormReducer";

type Props = {
  children: React.ReactNode;
};

interface FormContextType {
  state: FormState;
  dispatch: Dispatch<FormAction>;
  setCoverImage: (payload: string) => void; // Define the setCoverImage function
  updatePersonalInfo: (data: Partial<FormState["personalInformation"]>) => void;
  updateProfile: (data: Partial<FormState["profile"]>) => void;
  addCustomisedQuestion: (question: QuestionTemplate) => void;
  removeCustomisedQuestion: (questionId: string) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

export const FormProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  const contextValue: FormContextType = {
    state,
    dispatch,
    setCoverImage: (payload: string) => {
      // Implement the setCoverImage function
      dispatch({ type: "SET_COVER_IMAGE", payload });
    },
    updatePersonalInfo: (data) =>
      dispatch({ type: "UPDATE_PERSONAL_INFO", payload: data }),
    updateProfile: (data) =>
      dispatch({ type: "UPDATE_PROFILE", payload: data }),
    addCustomisedQuestion: (question) =>
      dispatch({ type: "ADD_CUSTOMISED_QUESTION", payload: question }),
    removeCustomisedQuestion: (questionId) =>
      dispatch({ type: "REMOVE_CUSTOMISED_QUESTION", payload: questionId }),
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};
