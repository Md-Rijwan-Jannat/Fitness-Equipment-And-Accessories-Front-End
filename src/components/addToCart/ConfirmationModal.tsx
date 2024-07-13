import React from "react";
import { Button } from "@/components/ui/button";

interface ConfirmationModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  title: string;
  description: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
  title,
  description,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-md w-full mx-2 max-w-md">
        <h2 className="text-xl font-semibold text-primaryColor mb-4">
          {title}
        </h2>
        <p className="text-secondaryColor mb-6">{description}</p>
        <div className="flex justify-end space-x-4">
          <Button
            onClick={onCancel}
            className="bg-secondaryColor text-primaryColor hover:text-secondaryColor hover:bg-buttonHoverColor rounded-3xl border border-borderColor hover:border-none transition-colors duration-500 w-[90px]"
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            className="bg-primaryColor text-secondaryColor hover:text-secondaryColor hover:bg-buttonHoverColor rounded-3xl border border-borderColor hover:border-none transition-colors duration-500 w-[90px]"
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
