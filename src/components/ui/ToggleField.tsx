import ToggleCheckbox from "./ToggleCheckbox";
import ToggleSwitch from "./ToggleSwitchField";

interface ToggleProps {
  label: string;
  subLabel?: string;
  id: string;
}

const ToggleField: React.FC<ToggleProps> = ({ label, subLabel, id }) => (
  <div className="mb-4 flex items-center gap-6">
    <label className="block text-sm font-medium">{label}</label>
    <ToggleCheckbox label={subLabel ? subLabel : "Internal"} id={id} />
    <ToggleSwitch label="Hide" id={id} />
  </div>
);

export default ToggleField;
