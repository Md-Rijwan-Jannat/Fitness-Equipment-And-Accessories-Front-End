import React, { useState } from "react";
import { motion } from "framer-motion";
import { TProduct } from "@/types";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
  useGetProductCategoryQuery,
} from "@/redux/api/baseApi";
import SectionTittle from "../ui/sectionTittle";
import { Button } from "../ui/button";
import UpdateProductForm from "./UpdateProductForm";
import AddProductForm from "./AddProductForm";
import HeroIcons from "../icons/HeroIcons";
import { formatDate } from "@/utils/formatDate";
import ProductFilter from "../filterProduct/ProductFilter";
import DeleteProductConfirmation from "./DeleteProductConfirmation ";
import { toast } from "sonner";

const ProductListTable: React.FC = () => {
  const { data, refetch } = useGetProductsQuery({} || { sort: "createdAt" });
  const { data: productCategory } = useGetProductCategoryQuery({});
  const [deleteProduct] = useDeleteProductMutation();
  const [selectedProduct, setSelectedProduct] = useState<TProduct | null>(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState<number | "">(0);
  const [maxPrice, setMaxPrice] = useState<number | "">(10000);
  const [sort, setSort] = useState("price");

  const products = data?.data;
  const productCategories = productCategory?.data;

  const uniqueProductCategories: string[] = productCategories
    ? Array.from(
        new Set(productCategories.map((item: TProduct) => item.category))
      )
    : [];

  const handleDelete = async (id: string) => {
    await deleteProduct(id);
    toast.success("Product updated successfully");
    refetch();
  };

  const handleFilterChange = ({
    categories,
    minPrice,
    maxPrice,
    sort,
    searchTerm,
  }: {
    categories: string[];
    minPrice: number | "";
    maxPrice: number | "";
    sort: string;
    searchTerm: string;
  }) => {
    setSelectedCategories(categories);
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
    setSort(sort);
    setSearchTerm(searchTerm);
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSearchTerm("");
    setMinPrice(0);
    setMaxPrice(10000);
    setSort("price");
    setSort("createdAt");
  };

  const filteredProducts = products?.filter((product: TProduct) => {
    const minPriceNum = minPrice === "" ? 0 : minPrice;
    const maxPriceNum = maxPrice === "" ? 10000 : maxPrice;

    if (product?.price < minPriceNum || product?.price > maxPriceNum) {
      return false;
    }

    if (
      searchTerm &&
      !product.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }

    if (
      selectedCategories.length > 0 &&
      !selectedCategories.includes(product.category)
    ) {
      return false;
    }

    return true;
  });

  const sortedProducts = filteredProducts?.sort(
    (a: { price: number }, b: { price: number }) => {
      if (sort === "price") return a.price - b.price;
      if (sort === "-price") return b.price - a.price;
      // Add more sorting options as needed
      return 0;
    }
  );

  const totalDataLength = filteredProducts?.length;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="px-2 md:px-4 bg-white rounded-lg border my-8 md:my-14 py-3 md:py-5"
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-3">
          <SectionTittle tittle="Product List" />
          <p className="text-lg md:text-2xl font-semibold text-primaryColor mb-4">
            ({totalDataLength})
          </p>
        </div>
        <Button
          onClick={() => setShowAddForm(true)}
          className="bg-secondaryColor text-primaryColor hover:text-secondaryColor hover:bg-buttonHoverColor rounded-3xl border border-borderColor hover:border-none transition-colors duration-500 w-[150px] mb-3"
        >
          Create New Product
        </Button>
      </div>

      {/* Filters */}
      <ProductFilter
        categories={uniqueProductCategories}
        selectedCategories={selectedCategories}
        minPrice={minPrice}
        maxPrice={maxPrice}
        sort={sort}
        searchTerm={searchTerm}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
      />

      {/* Product List */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="text-start mb-5">
            <tr className="border-b">
              <th className="py-2 px-4 whitespace-nowrap">Product Name</th>
              <th className="py-2 px-4 whitespace-nowrap">Price</th>
              <th className="py-2 px-4 whitespace-nowrap">Category</th>
              <th className="py-2 px-4 whitespace-nowrap">Created At</th>
              <th className="py-2 px-4 whitespace-nowrap">Updated At</th>
              <th className="py-2 px-4 whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedProducts?.map((product: TProduct) => (
              <tr key={product._id} className="text-center border-b">
                <td className="py-2 px-4">{product.name}</td>
                <td className="py-2 px-4">${product.price}</td>
                <td className="py-2 px-4">{product.category}</td>
                <td className="py-2 px-4">{formatDate(product.createdAt)}</td>
                <td className="py-2 px-4">{formatDate(product.updatedAt)}</td>
                <td className="py-2 px-4 space-x-2 flex flex-col gap-3 items-center">
                  <Button
                    onClick={() => {
                      setSelectedProduct(product);
                      setShowUpdateForm(true);
                    }}
                    className="bg-secondaryColor text-primaryColor hover:text-secondaryColor hover:bg-buttonHoverColor rounded-3xl border border-borderColor hover:border-none transition-colors duration-500 w-[120px] flex gap-3"
                  >
                    <HeroIcons icon="update" />
                    Update
                  </Button>
                  <Button
                    onClick={() => {
                      setSelectedProduct(product);
                      setShowDeleteConfirmation(true);
                    }}
                    className="bg-primaryColor text-secondaryColor hover:text-secondaryColor hover:bg-buttonHoverColor rounded-3xl border border-borderColor hover:border-none transition-colors duration-500 w-[120px] flex gap-3"
                  >
                    <HeroIcons icon="trash" />
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showUpdateForm && selectedProduct && (
        <UpdateProductForm
          product={selectedProduct}
          onClose={() => setShowUpdateForm(false)}
          onUpdate={refetch}
        />
      )}

      {showDeleteConfirmation && selectedProduct && (
        <DeleteProductConfirmation
          product={selectedProduct}
          onClose={() => setShowDeleteConfirmation(false)}
          onDelete={() => {
            handleDelete(selectedProduct._id);
            setShowDeleteConfirmation(false);
          }}
        />
      )}

      {showAddForm && (
        <AddProductForm
          onClose={() => setShowAddForm(false)}
          onCreate={refetch}
        />
      )}
    </motion.div>
  );
};

export default ProductListTable;
