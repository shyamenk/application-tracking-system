import { Button } from "antd";
import { useFormContext } from "./context/FormContext";

const FormSubmit = () => {
  const { state } = useFormContext();

  const submitHandler = () => {
    console.log(state);
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
