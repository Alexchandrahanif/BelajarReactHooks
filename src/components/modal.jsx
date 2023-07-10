import React from "react";

const Modal = ({ Isvisible, onClose, children }) => {
  if (!Isvisible) return null;

  const handleClose = (e) => {
    e.target.id == "wrepper" ? onClose() : null;
  };
  return (
    <div
      className="w-full h-full fixed inset-0 bg-black bg-opacity-5 backdrop-blur-[2px] flex justify-center items-center"
      onClick={handleClose}
      id="wrepper"
    >
      <div className="min-w-[700px] shadow-lg flex flex-col ">
        <button className="place-self-end p-1" onClick={() => onClose()}>
          X
        </button>
        <div className="bg-white p-3 rounded-md"> {children}</div>
      </div>
    </div>
  );
};

export default Modal;
