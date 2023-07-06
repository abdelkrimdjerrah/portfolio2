import { useEffect } from "react";

interface Props {
  closeModal: (e: any) => void;
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ closeModal, children }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
    onClick={closeModal}
    className="z-30 bg-gray-900 text-[#a0ecff] bg-opacity-10 overflow-hidden backdrop-blur-[1px] fixed inset-0 flex items-center justify-center"
  >
    {children}
  </div>
  
  );
};

export default Modal;
