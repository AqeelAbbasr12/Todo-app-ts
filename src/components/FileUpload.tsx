import React, { useRef, useState } from "react";
import uploadImg from "../assets/images/uoload-img.png"

const FileUpload: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files?.[0]) {
      setFileName(files[0].name);
    }
  };

  return (
    <div
      onClick={() => fileInputRef.current?.click()}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      className="w-full h-full py-3 border border-[#A1A3AB] flex flex-col items-center justify-center rounded-lg cursor-pointer hover:border-blue-400 transition"
    >
      <img
        src={uploadImg}
        alt="upload"
        className="w-12 h-12 mb-2 opacity-60"
      />
      <p className="text-sm text-gray-500">Drag & Drop files here</p>
      <span className="text-xs text-gray-400">or</span>
      <button className="mt-2 px-3 py-1 text-sm border border-[#A1A3AB] rounded text-[#A1A3AB] hover:bg-[#A1A3AB]">
        Browse
      </button>
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileChange}
        className="hidden"
      />
      {fileName && (
        <p className="text-xs text-gray-600 mt-2 text-center px-2">
          Selected: {fileName}
        </p>
      )}
    </div>
  );
};

export default FileUpload;
