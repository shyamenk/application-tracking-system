import {
  FormState,
  PersonalInformationField,
  PersonalInformation,
  ProfileTemplate,
  QuestionTemplate,
} from "../types/formType";

interface Attributes {
  coverImage: string;
  personalInformation: Record<
    string,
    PersonalInformationField | QuestionTemplate[]
  >;
  profile: {
    education: ProfileTemplate;
    experience: ProfileTemplate;
    resume: ProfileTemplate;
    profileQuestions: QuestionTemplate[];
  };
  customisedQuestions: QuestionTemplate[];
}

interface FormData {
  id: string;
  type: string;
  attributes: Attributes;
}

export interface Data {
  data: FormData;
}

export const transformFormData = (formData: FormState): Data => {
  const attributes: Attributes = {
    coverImage: formData.coverImage,
    personalInformation: {},
    profile: {
      education: formData.profile.education,
      experience: formData.profile.experience,
      resume: formData.profile.resume,
      profileQuestions: formData.profile.profileQuestions,
    },
    customisedQuestions: formData.customisedQuestions,
  };

  const personalInformationFields = Object.keys(
    formData.personalInformation
  ) as (keyof PersonalInformation)[];

  personalInformationFields.forEach((field) => {
    const fieldData = formData.personalInformation[field];
    if (Array.isArray(fieldData)) {
      attributes.personalInformation[field] = fieldData;
    } else {
      attributes.personalInformation[field] = {
        internalUse: fieldData.internalUse,
        show: fieldData.show,
      };
    }
  });

  const data: FormData = {
    id: "324356664",
    type: "applicationForm",
    attributes,
  };

  const transformedData: Data = {
    data,
  };

  return transformedData;
};
