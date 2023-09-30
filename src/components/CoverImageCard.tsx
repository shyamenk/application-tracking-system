import React, { FC, useState } from "react";
import { Button, Card } from "antd";
import ImageUpload from "./ui/ImageUpload";
import { CloseOutlined } from "@ant-design/icons";
import { useFormContext } from "./context/FormContext";

const CoverImageCard: FC = () => {
  const { state, setCoverImage } = useFormContext();

  const handleImageSelect = (file: File | null) => {
    if (file) {
      const imageUrl = URL.createObjectURL(file);

      setCoverImage(imageUrl);
    } else {
      setCoverImage("");
    }
  };

  const resetHandler = () => {
    setCoverImage("");
  };

  return (
    <div className="max-w-lg mt-10">
      <Card
        cover
        headStyle={{ background: "#D0F7FA", color: "black" }}
        title="Upload Cover Image"
      >
        {state.coverImage ? (
          <>
            <div>
              <img
                src={state.coverImage}
                alt="Uploaded Cover Image"
                style={{ width: "100%", height: "auto" }}
                className="rounded-b-lg"
              />
            </div>
            <div className="mb-4 flex items-center gap-2 my-4">
              <Button
                type="link"
                icon={<CloseOutlined />}
                size={"large"}
                className=" text-[#A80000] font-bold hover:text-[#A80000]"
                onClick={resetHandler}
              >
                Delete & re-upload
              </Button>
            </div>
          </>
        ) : (
          <div className=" flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
            <div className="space-y-1 text-center">
              <ImageUpload onImageSelect={handleImageSelect} />

              <p className="text-xs text-gray-500">
                16:9 ratio is recommended. Max image size 1mb
              </p>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default CoverImageCard;
