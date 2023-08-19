import React from 'react';
interface Props {
    isOpen: boolean, 
    onClose: () => void, 
    children: JSX.Element
}
const Modal = ({ isOpen, onClose, children }:Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="bg-white rounded-lg p-6 z-10">
        {children}
      </div>
    </div>
  );
};

export default Modal;