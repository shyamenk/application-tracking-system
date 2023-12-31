import { FormAction, FormState } from "../types/formType";

export const initialFormState: FormState = {
  coverImage: "",
  personalInformation: {
    firstName: {
      internalUse: false,
      show: true,
    },
    lastName: {
      internalUse: false,
      show: true,
    },
    emailId: {
      internalUse: false,
      show: true,
    },
    phoneNumber: {
      internalUse: false,
      show: false,
    },
    nationality: {
      internalUse: false,
      show: false,
    },
    currentResidence: {
      internalUse: false,
      show: false,
    },
    idNumber: {
      internalUse: false,
      show: false,
    },
    dateOfBirth: {
      internalUse: false,
      show: false,
    },
    gender: {
      internalUse: false,
      show: false,
    },
    personalQuestions: [],
  },
  profile: {
    education: {
      mandatory: true,
      show: true,
    },
    experience: {
      mandatory: true,
      show: true,
    },
    resume: {
      mandatory: true,
      show: true,
    },
    profileQuestions: [],
  },
  customisedQuestions: [],
};

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
