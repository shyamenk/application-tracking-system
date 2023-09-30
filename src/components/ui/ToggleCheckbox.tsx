import { Checkbox } from "antd";

interface ToggleProps {
  label: string;
  id: string;
}

const ToggleCheckbox: React.FC<ToggleProps> = ({ label, id }) => (
  <div className="ml-auto flex items-center">
    <Checkbox id={id} />
    <label className="block text-sm font-medium ml-2">{label}</label>
  </div>
);

export default ToggleCheckbox;
