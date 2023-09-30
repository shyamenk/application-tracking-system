import React from "react";
import CheckboxInput from "./CheckBox";
import SwitchInput from "./Switch";

interface ToggleProps {
  label: string;
  subLabel?: string;
  id: string;
  onInternalUseChange: (value: boolean) => void;
  onShowChange: (value: boolean) => void;
}

const ToggleField: React.FC<ToggleProps> = ({
  label,
  subLabel,
  id,
  onInternalUseChange,
  onShowChange,
}) => {
  return (
    <div className="mb-4 flex items-center gap-6">
      <label className="block text-sm font-medium">{label}</label>
      <CheckboxInput
        label={subLabel ? subLabel : "Internal"}
        id={id}
        onChange={(value) => onInternalUseChange(value)}
      />
      <SwitchInput
        label="Hide"
        id={id}
        onChange={(value) => onShowChange(value)}
      />
    </div>
  );
};

export default ToggleField;
