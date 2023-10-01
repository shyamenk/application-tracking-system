import { Button } from "antd";
import { useFormContext } from "./context/FormContext";
import { transformFormData } from "../utils/transformFormData ";
import { createForm } from "../api/createApplicationForm";

const FormSubmit = () => {
  const { state } = useFormContext();

  const submitHandler = async () => {
    const transformedFormData = transformFormData(state);
    const response = await createForm(transformedFormData);
    console.log(response);
  };

  const buttonStyle = {
    color: "white",
  };

  return (
    <div className="max-w-lg mt-10">
      <Button
        style={buttonStyle}
        onClick={submitHandler}
        className="text-white bg-black w-full hover:bg-black hover:text:white"
      >
        Submit
      </Button>
    </div>
  );
};

export default FormSubmit;
