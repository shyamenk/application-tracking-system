import React from "react";
import { Select } from "antd";

interface SelectFieldProps {
  title: string;
  options: { value: string; label: string }[];
  placeholder: string;
  onChange?: (value: string | null) => void;
}

const SelectInput: React.FC<SelectFieldProps> = ({
  title,
  options,
  placeholder,
  onChange,
}) => (
  <>
    <label className="block text-sm font-medium mb-2 pl-1">Type</label>
    <Select
      style={{ width: 450 }}
      size="large"
      placeholder={placeholder}
      options={options}
      onChange={onChange}
      className="mb-4"
    />
  </>
);

export default SelectInput;
