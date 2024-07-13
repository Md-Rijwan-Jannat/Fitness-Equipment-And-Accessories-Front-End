import { TProduct } from "@/types";
import { Button } from "../ui/button";
import SectionTittle from "../ui/sectionTittle";

interface DeleteProductConfirmationProps {
  product: TProduct;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteProductConfirmation = ({
  product,
  onClose,
  onDelete,
}: DeleteProductConfirmationProps) => (
  <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <SectionTittle tittle="Confirm Deletion" />
      <p>Are you sure you want to delete {product.name}?</p>
      <div className="flex justify-between mt-4">
        <Button
          onClick={onClose}
          className="bg-secondaryColor text-primaryColor hover:text-secondaryColor hover:bg-buttonHoverColor rounded-3xl border border-borderColor hover:border-none transition-colors duration-500 w-[90px]"
        >
          Cancel
        </Button>
        <Button
          onClick={onDelete}
          className="bg-primaryColor text-secondaryColor hover:text-secondaryColor hover:bg-buttonHoverColor rounded-3xl border border-borderColor hover:border-none transition-colors duration-500 w-[90px]"
        >
          Delete
        </Button>
      </div>
    </div>
  </div>
);

export default DeleteProductConfirmation;
