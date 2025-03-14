// src/pages/index.tsx
import React, { useState } from "react";
import LandingPageTemplate from "../components/templates/LandingPageTemplate";
import FileUploadArea from "../components/molecules/FileUploadArea";
import Button from "../components/atoms/Button";

const Home: React.FC = () => {
  const [images, setImages] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImages(files);
    }
  };

  const handleCompress = async () => {
    console.log("Compressing images:", images);
    // Implement image compression logic here
  };

  return (
    <LandingPageTemplate>
      <h1 className="text-2xl font-bold mb-4">Compress JPG</h1>
      <p className="mb-4">
        Compress JPG with the best quality and compression. Reduce the filesize
        of many JPG images at once online.
      </p>
      <FileUploadArea onFileChange={handleFileChange} />
      <Button onClick={handleCompress} className="mt-4">
        Compress Images
      </Button>
    </LandingPageTemplate>
  );
};

export default Home;
