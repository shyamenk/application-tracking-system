import React from "react";
import { Card, Select } from "antd";

interface SelectFieldProps {
  title: string;
  options: { value: string; label: string }[];
  placeholder: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  title,
  options,
  placeholder,
}) => (
  <div className="mb-4">
    <Card headStyle={{ background: "#D0F7FA", color: "black" }} title={title}>
      <Select
        style={{ width: 450 }}
        size="large"
        placeholder={placeholder}
        options={options}
      />
    </Card>
  </div>
);

export default SelectField;
