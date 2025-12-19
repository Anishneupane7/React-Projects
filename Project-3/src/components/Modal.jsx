import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";

function Modal({ onClose, isOpen, children }) {
  return createPortal(
    <div>
      {isOpen && (
        <>
          <div className="m-auto relative z-60 min-h-[200px] max-w-[80%] bg-white p-4">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="text-2xl self-end" />
            </div>
            {children}
          </div>
          <div
            onClick={onClose}
            className=" absolute top-0 z-50 backdrop-blur h-screen w-screen"
          />
        </>
      )}
    </div>,
    document.getElementById("modal-root")
  );
}

export default Modal;
