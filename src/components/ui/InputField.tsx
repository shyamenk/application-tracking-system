import React from "react";
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
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  placeholder = "",
  value,
  onChange,
  className,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={`mb-4 ${className}`}>
      <Input
        id={id}
        placeholder={placeholder}
        style={inputStyle}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default InputField;
