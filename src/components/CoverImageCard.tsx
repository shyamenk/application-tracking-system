import React from "react";
import { Card } from "antd";
import ImageUpload from "./ui/ImageUpload";

const CoverImageCard: React.FC = () => (
  <div className="max-w-lg mt-10">
    <Card
      headStyle={{ background: "#D0F7FA", color: "black" }}
      title="Upload Cover Image"
    >
      <div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
        <div className="space-y-1 text-center">
          <ImageUpload />
          <p className="text-xs text-gray-500">
            16:9 ratio is recommended. Max image size 1mb
          </p>
        </div>
      </div>
    </Card>
  </div>
);

export default CoverImageCard;
