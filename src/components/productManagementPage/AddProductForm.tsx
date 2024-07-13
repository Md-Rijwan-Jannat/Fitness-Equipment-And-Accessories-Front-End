import {
  useCreateProductMutation,
  useGetProductsQuery,
} from "@/redux/api/baseApi";
import { useState } from "react";
import SectionTittle from "../ui/sectionTittle";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { TProduct } from "@/types";
import { toast } from "sonner";

interface AddProductFormProps {
  onClose: () => void;
  onCreate: () => void;
}

const AddProductForm = ({ onClose, onCreate }: AddProductFormProps) => {
  const [createProduct] = useCreateProductMutation();
  const { data } = useGetProductsQuery({});
  const products = data?.data;

  // Filter out duplicate categories
  const uniqueCategories = products
    ? products
        .map((item: TProduct) => item.category) // Extract categories
        .filter(
          (category: string, index: number, self: string[]) =>
            self.indexOf(category) === index
        )
    : [];

  const [formData, setFormData] = useState({
    name: "",
    price: 0, // Initialize price as number
    category: "",
    description: "",
    images: [""],
    stock: 0, // Initialize stock as number
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" || name === "stock" ? +value : value, // Convert to number if name is price or stock
    }));
  };

  const handleCategoryChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      category: value,
    }));
  };

  const handleImageChange = (index: number, value: string) => {
    const updatedImages = formData.images.map((img, i) =>
      i === index ? value : img
    );
    setFormData((prev) => ({
      ...prev,
      images: updatedImages,
    }));
  };

  const handleAddImageField = () => {
    setFormData((prev) => ({
      ...prev,
      images: [...prev.images, ""],
    }));
  };

  const handleRemoveImageField = (index: number) => {
    const updatedImages = formData.images.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      images: updatedImages,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createProduct(formData);
    toast.success("Product create successfully");
    onCreate();
    onClose();
  };

  console.log(formData);

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3 m-2">
        <SectionTittle tittle="Add New Product" />
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
              placeholder="Write product name"
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
              defaultValue={formData.price}
              placeholder="Write price"
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
              defaultValue={formData.stock}
              placeholder="Available stock"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primaryColor"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="category" className="mb-1">
              Category
            </label>
            <Select
              value={formData.category}
              onValueChange={handleCategoryChange}
            >
              <SelectTrigger className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primaryColor">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent className="text-buttonHoverColor">
                <SelectGroup>
                  <SelectLabel className="text-buttonHoverColor">
                    Categories
                  </SelectLabel>
                  {uniqueCategories.map((category: string) => (
                    <SelectItem
                      key={category}
                      className="text-buttonHoverColor"
                      value={category}
                    >
                      {category}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="description" className="mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              placeholder="Write description"
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primaryColor"
              required
            />
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <label htmlFor="images" className="mb-1">
              Images
            </label>
            {formData.images.map((image, index) => (
              <div key={index} className="flex items-center gap-2 mb-2 w-full">
                <Input
                  type="text"
                  name={`image-${index}`}
                  value={image}
                  placeholder={`Image URL ${index + 1}`}
                  onChange={(e) => handleImageChange(index, e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primaryColor"
                  required
                />
                <Button
                  onClick={() => handleRemoveImageField(index)}
                  className="bg-secondaryColor text-primaryColor hover:text-secondaryColor hover:bg-buttonHoverColor rounded-3xl border border-borderColor hover:border-none transition-colors duration-500"
                >
                  Remove
                </Button>
              </div>
            ))}
            <Button
              onClick={handleAddImageField}
              className="w-[180px]
              bg-primaryColor text-white rounded-3xl hover:bg-buttonHoverColor transition-colors duration-500 px-3"
            >
              Add Another Image
            </Button>
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
              className="bg-primaryColor text-secondaryColor hover:text-secondaryColor hover:bg-buttonHoverColor rounded-3xl border border-borderColor hover:border-none transition-colors duration-500 w-[120px]"
            >
              Add Product
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
