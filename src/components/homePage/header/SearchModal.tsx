import { Button } from "@/components/ui/button";
import React, { ReactNode } from "react";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
  description: string;
}

const SearchModal: React.FC<SearchModalProps> = ({
  open,
  onClose,
  children,
  title,
  description,
}) => {
  if (!open) return null;

  return (
    <div className="absolute inset-0 z-50 mt-2 mr-2 -ml-3" onClick={onClose}>
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-4"
        onClick={(e) => e.stopPropagation()} // Prevent click events from closing the modal
      >
        <div className="mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="flex flex-col space-y-4">{children}</div>
        <div className="mt-4 flex justify-end">
          <Button
            className="bg-primaryColor text-white hover:text-primaryColor w-[100px] hover:bg-linkHoverColor rounded-3xl"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
