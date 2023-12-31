export interface PersonalInformationField {
  internalUse: boolean;
  show: boolean;
}

export interface PersonalInformation {
  firstName: PersonalInformationField;
  lastName: PersonalInformationField;
  emailId: PersonalInformationField;
  phoneNumber: PersonalInformationField;
  nationality: PersonalInformationField;
  currentResidence: PersonalInformationField;
  idNumber: PersonalInformationField;
  dateOfBirth: PersonalInformationField;
  gender: PersonalInformationField;
  personalQuestions: QuestionTemplate[];
}

export interface ProfileTemplate {
  mandatory: boolean;
  show: boolean;
}

export interface QuestionTemplate {
  id: string;
  type: string;
  question: string;
  choices: string[];
  maxChoice: number;
  disqualify: boolean;
  other: boolean;
}

export interface FormState {
  coverImage: string;
  personalInformation: PersonalInformation;
  profile: {
    education: ProfileTemplate;
    experience: ProfileTemplate;
    resume: ProfileTemplate;
    profileQuestions: QuestionTemplate[];
  };
  customisedQuestions: QuestionTemplate[];
}

export interface Attributes {
  coverImage: string;
  personalInformation: Record<string, PersonalInformationField>;
  profile: {
    education: ProfileTemplate;
    experience: ProfileTemplate;
    resume: ProfileTemplate;
    profileQuestions: QuestionTemplate[];
  };
  customisedQuestions: QuestionTemplate[];
}

export type FormAction =
  | { type: "SET_COVER_IMAGE"; payload: string }
  | {
      type: "UPDATE_PERSONAL_INFO";
      payload: Partial<PersonalInformation>;
    }
  | {
      type: "UPDATE_PROFILE";
      payload: Partial<{
        education: ProfileTemplate;
        experience: ProfileTemplate;
        resume: ProfileTemplate;
      }>;
    }
  | { type: "ADD_CUSTOMISED_QUESTION"; payload: QuestionTemplate }
  | { type: "REMOVE_CUSTOMISED_QUESTION"; payload: string };
