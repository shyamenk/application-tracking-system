import { Switch } from "antd";

interface ToggleProps {
  label: string;
  id: string;
}

const ToggleSwitch: React.FC<ToggleProps> = ({ label, id }) => (
  <>
    <Switch size="small" id={`showHide${id}`} />
    <label className="block text-sm font-medium ml-2">Hide</label>
  </>
);

export default ToggleSwitch;
