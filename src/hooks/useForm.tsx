import { useReducer } from "react";
import { formReducer } from "../reducer/FormReducer";
import { FormState, QuestionTemplate } from "../types/formType";

const initialFormState: FormState = {
  coverImage: "",
  personalInformation: {
    firstName: {
      internalUse: false,
      show: false,
      value: "",
    },
    lastName: {
      internalUse: false,
      show: false,
      value: "",
    },
    emailId: {
      internalUse: false,
      show: false,
      value: "",
    },
    phoneNumber: {
      internalUse: false,
      show: false,
      value: "",
    },
    nationality: {
      internalUse: false,
      show: false,
      value: "",
    },
    currentResidence: {
      internalUse: false,
      show: false,
      value: "",
    },
    idNumber: {
      internalUse: false,
      show: false,
      value: "",
    },
    dateOfBirth: {
      internalUse: false,
      show: false,
      value: "",
    },
    gender: {
      internalUse: false,
      show: false,
      value: "",
    },
  },
  profile: {
    education: {
      mandatory: false,
      show: false,
    },
    experience: {
      mandatory: false,
      show: false,
    },
    resume: {
      mandatory: false,
      show: false,
    },
    profileQuestions: [],
  },
  customisedQuestions: [],
};

const useForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialFormState);

  const setCoverImage = (url: string) =>
    dispatch({ type: "SET_COVER_IMAGE", payload: url });

  const updatePersonalInfo = (
    data: Partial<FormState["personalInformation"]>
  ) => dispatch({ type: "UPDATE_PERSONAL_INFO", payload: data });

  const updateProfile = (data: Partial<FormState["profile"]>) =>
    dispatch({ type: "UPDATE_PROFILE", payload: data });

  const addCustomisedQuestion = (question: string) => {
    const questionTemplate: QuestionTemplate = {
      id: "unique-id",
      type: "ShortAnswer",
      question,
      choices: [],
      maxChoice: 0,
      disqualify: false,
      other: false,
    };

    dispatch({ type: "ADD_CUSTOMISED_QUESTION", payload: questionTemplate });
  };

  const removeCustomisedQuestion = (questionId: string) =>
    dispatch({ type: "REMOVE_CUSTOMISED_QUESTION", payload: questionId });

  return {
    state,
    setCoverImage,
    updatePersonalInfo,
    updateProfile,
    addCustomisedQuestion,
    removeCustomisedQuestion,
  };
};

export default useForm;
