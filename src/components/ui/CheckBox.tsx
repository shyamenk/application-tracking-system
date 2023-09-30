import React from "react";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
interface ToggleCheckboxProps {
  label: string;
  id: string;
  onChange: (value: boolean) => void;
}

const CheckboxInput: React.FC<ToggleCheckboxProps> = ({
  label,
  id,
  onChange,
}) => {
  const handleChange = (e: CheckboxChangeEvent) => {
    const newValue = e.target.checked;
    onChange(newValue);
  };

  return (
    <div className="ml-auto flex items-center">
      <Checkbox id={id} onChange={handleChange} />
      <label className="block text-sm font-medium ml-2">{label}</label>
    </div>
  );
};

export default CheckboxInput;
