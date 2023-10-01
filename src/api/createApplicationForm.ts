import { Data } from "../utils/transformFormData ";

type CreateFormResponse = {
  success: boolean;
  message: string;
};

export const createForm = async (
  formData: Data
): Promise<CreateFormResponse> => {
  const version = "version";
  const programId = "program-id";
  try {
    const url = `http://127.0.0.1:3100/api/${version}/programs/${programId}/application-form`;
    const headers = {
      "Content-Type": "application/json",
    };

    const requestOptions = {
      method: "POST",
      headers,
      body: JSON.stringify(formData),
    };

    const response = await fetch(url, requestOptions);

    if (response.status === 201) {
      return { success: true, message: "Form created successfully." };
    } else {
      return { success: false, message: "Form creation failed." };
    }
  } catch (error) {
    console.error("Error creating form:", error);
    return {
      success: false,
      message: "An error occurred while creating the form.",
    };
  }
};
