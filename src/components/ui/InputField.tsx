import { Input } from "antd";

const inputStyle: React.CSSProperties = {
  border: "none",
  borderBottom: "1px solid #d9d9d9",
  paddingLeft: "0px",
  paddingBottom: "10px",
  borderRadius: 0,
  boxShadow: "none",
  width: "100%",
};

interface InputFieldProps {
  id: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ id, placeholder }) => (
  <div className="mb-4">
    <Input id={id} placeholder={placeholder} style={inputStyle} />
  </div>
);

export default InputField;
