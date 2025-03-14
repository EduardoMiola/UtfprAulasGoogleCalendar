// src/components/molecules/FileUploadArea.tsx
import React from "react";
import Input from "../atoms/Input";

interface FileUploadAreaProps {
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileUploadArea: React.FC<FileUploadAreaProps> = ({ onFileChange }) => (
  <div className="border-2 border-dashed border-gray-300 p-6 text-center cursor-pointer">
    <Input type="file" accept="image/jpeg" onChange={onFileChange} multiple />
    <p className="mt-2 text-gray-600">or drop images here</p>
  </div>
);

export default FileUploadArea;
