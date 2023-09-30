import React, { FC, useRef } from "react";
import { Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const ImageUpload: FC<{ onImageSelect: (file: File | null) => void }> = ({
  onImageSelect,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file !== undefined) {
      onImageSelect(file);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
        ref={fileInputRef}
      />
      <label>
        <div className=" my-2" style={{ cursor: "pointer" }}>
          <Button
            icon={<UploadOutlined />}
            style={{ marginBottom: "2px" }}
            onClick={handleButtonClick}
          />
          <h1 className="text-md font-bold mt-4">Upload Cover Image</h1>
        </div>
      </label>
    </div>
  );
};

export default ImageUpload;
