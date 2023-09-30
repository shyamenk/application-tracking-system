import { Input } from "antd";
import React, { FC } from "react";

interface ParagraphProps {
  newQuestion: string;
}
const ParagraphQuestion = ({ newQuestion }: ParagraphProps) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2 pl-1">Question</label>
      <Input
        style={{ width: 450 }}
        type="text"
        size="large"
        placeholder="Enter a paragraph question"
        value={newQuestion}
      />
    </div>
  );
};

export default ParagraphQuestion;
