import { Button } from "antd";
import { useFormContext } from "./context/FormContext";

const FormSubmit = () => {
  const { state } = useFormContext();
  const submitHandler = () => {
    console.log(state);
  };
  return <Button onClick={submitHandler}> Submit</Button>;
};

export default FormSubmit;
