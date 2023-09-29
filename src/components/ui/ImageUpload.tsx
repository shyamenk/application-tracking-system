import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

function ImageUpload() {
  return (
    <Upload className="flex justify-center items-center pb-2">
      <Button className="mb-2" icon={<UploadOutlined />}></Button>
      <h1 className="text-md font-bold">Upload Cover Image</h1>
    </Upload>
  );
}

export default ImageUpload;
