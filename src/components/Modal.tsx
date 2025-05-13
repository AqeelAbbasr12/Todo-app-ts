import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className: string;
}

function Modal({ isOpen, onClose, className, children }: ModalProps) {
  if (!isOpen) return null;

  const handleOverlayClick = () => {
    onClose();
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className={` fixed inset-0 bg-black/50  flex justify-center items-center z-50`}
      onClick={handleOverlayClick}
    >
      <div
        className={`${className} bg-white rounded-lg p-6 relative`}
        onClick={handleContentClick}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
