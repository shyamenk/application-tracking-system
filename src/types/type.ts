export interface PersonalInformationAttribute {
  internalUse: boolean;
  show: boolean;
}

export interface Question {
  id: string;
  type:
    | "Paragraph"
    | "ShortAnswer"
    | "YesNo"
    | "Dropdown"
    | "MultipleChoice"
    | "Date"
    | "Number"
    | "FileUpload";
  question: string;
  choices: string[];
  maxChoice: number;
  disqualify: boolean;
  other: boolean;
}

export interface ApplicationForm {
  id: string;
  type: string;
  attributes: {
    coverImage: string;
    personalInformation: {
      firstName: PersonalInformationAttribute;
      lastName: PersonalInformationAttribute;
      emailId: PersonalInformationAttribute;
      phoneNumber: PersonalInformationAttribute;
      nationality: PersonalInformationAttribute;
      currentResidence: PersonalInformationAttribute;
      idNumber: PersonalInformationAttribute;
      dateOfBirth: PersonalInformationAttribute;
      gender: PersonalInformationAttribute;
      personalQuestions: Question[];
    };
    profile: {
      education: PersonalInformationAttribute;
      experience: PersonalInformationAttribute;
      resume: PersonalInformationAttribute;
      profileQuestions: Question[];
    };
    customisedQuestions: Question[];
  };
}

export const schema = {
  data: {
    id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    type: "applicationForm",
    attributes: {
      coverImage: "http://example.com",
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
          show: true,
        },
        nationality: {
          internalUse: false,
          show: true,
        },
        currentResidence: {
          internalUse: false,
          show: true,
        },
        idNumber: {
          internalUse: false,
          show: true,
        },
        dateOfBirth: {
          internalUse: false,
          show: true,
        },
        gender: {
          internalUse: false,
          show: true,
        },
        personalQuestions: [
          {
            id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            type: "Paragraph",
            question: "string",
            choices: ["string"],
            maxChoice: 0,
            disqualify: false,
            other: false,
          },
        ],
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
        profileQuestions: [
          {
            id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
            type: "Paragraph",
            question: "string",
            choices: ["string"],
            maxChoice: 0,
            disqualify: false,
            other: false,
          },
        ],
      },
      customisedQuestions: [
        {
          id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
          type: "Paragraph",
          question: "string",
          choices: ["string"],
          maxChoice: 0,
          disqualify: false,
          other: false,
        },
      ],
    },
  },
};
