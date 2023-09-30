import { FormAction, FormState } from "../types/formType";

export const formReducer = (
  state: FormState,
  action: FormAction
): FormState => {
  switch (action.type) {
    case "SET_COVER_IMAGE":
      return { ...state, coverImage: action.payload };

    case "UPDATE_PERSONAL_INFO":
      return {
        ...state,
        personalInformation: {
          ...state.personalInformation,
          ...action.payload,
        },
      };

    case "UPDATE_PROFILE":
      return {
        ...state,
        profile: {
          ...state.profile,
          ...action.payload,
        },
      };

    case "ADD_CUSTOMISED_QUESTION":
      return {
        ...state,
        customisedQuestions: [...state.customisedQuestions, action.payload],
      };

    case "REMOVE_CUSTOMISED_QUESTION":
      return {
        ...state,
        customisedQuestions: state.customisedQuestions.filter(
          (question) => question.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
