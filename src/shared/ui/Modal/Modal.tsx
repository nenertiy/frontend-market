"use client";

import React, { FC, ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-[rgb(248,249,254)] p-6 rounded-xl shadow-lg w-full max-w-md">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition"
          onClick={onClose}
          aria-label="Закрыть модальное окно">
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
