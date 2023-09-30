import React from "react";
import { Switch } from "antd";

interface ToggleSwitchProps {
  label: string;
  id: string;
  onChange: (value: boolean) => void;
}

const SwitchInput: React.FC<ToggleSwitchProps> = ({ label, id, onChange }) => {
  return (
    <>
      <Switch
        size="small"
        id={`showHide${id}`}
        onChange={(checked) => onChange(checked)}
      />
      <label className="block text-sm font-medium ml-2">{label}</label>
    </>
  );
};

export default SwitchInput;
