import { useUpdateProductMutation } from "@/redux/api/baseApi";
import { TProduct } from "@/types";
import { useState } from "react";
import SectionTittle from "../ui/sectionTittle";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";

interface UpdateProductFormProps {
  product: TProduct;
  onClose: () => void;
  onUpdate: () => void;
}

const UpdateProductForm: React.FC<UpdateProductFormProps> = ({
  product,
  onClose,
  onUpdate,
}) => {
  const [updateProduct] = useUpdateProductMutation();
  const [formData, setFormData] = useState({
    name: product.name,
    price: product.price,
    category: product.category,
    description: product.description,
    images: product.images,
    stock: product.stock,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await updateProduct({ id: product._id, product: formData });
    toast.success("Product updated successfully");
    onUpdate();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
        <SectionTittle tittle="Update Product" />
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1">
              Name
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primaryColor"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="price" className="mb-1">
              Price
            </label>
            <Input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primaryColor"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="category" className="mb-1">
              Category
            </label>
            <Input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primaryColor"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description" className="mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primaryColor"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="images" className="mb-1">
              Images
            </label>
            <Input
              type="text"
              id="images"
              name="images"
              value={formData.images}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primaryColor"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="stock" className="mb-1">
              Stock
            </label>
            <Input
              type="number"
              id="stock"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primaryColor"
              required
            />
          </div>
          <div className="flex justify-between mt-4">
            <Button
              onClick={onClose}
              className="bg-secondaryColor text-primaryColor hover:text-secondaryColor hover:bg-buttonHoverColor rounded-3xl border border-borderColor hover:border-none transition-colors duration-500 w-[90px]"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-primaryColor text-secondaryColor hover:text-secondaryColor hover:bg-buttonHoverColor rounded-3xl border border-borderColor hover:border-none transition-colors duration-500 w-[90px]"
            >
              Update
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProductForm;
