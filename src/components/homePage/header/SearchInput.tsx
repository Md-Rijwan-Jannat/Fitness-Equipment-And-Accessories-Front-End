import React, { useState, useEffect } from "react";
import { Input } from "../../ui/input";
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { TProduct } from "@/types";
import SearchModal from "./SearchModal"; // Import the custom modal component

const SearchInput: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<TProduct[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const { data, isLoading, error } = useGetProductsQuery({
    searchTerm: "",
    categories: "",
    page: 1,
    minPrice: 0,
    maxPrice: 10000,
    sort: "price",
    limit: 100, // Fetch a large number of products to show in the search modal
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setFilteredProducts(data.data);
    }
  }, [data]);

  useEffect(() => {
    if (searchTerm) {
      setFilteredProducts(
        data?.data.filter((product: TProduct) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        ) || []
      );
    } else {
      setFilteredProducts(data?.data || []);
    }
  }, [searchTerm, data]);

  const handleProductClick = (productId: string) => {
    navigate(`/product-details/${productId}`);
    setModalOpen(false); // Close the modal after navigating
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products</p>;

  return (
    <>
      <Input
        className="bg-primaryColor text-linkHoverColor placeholder:text-linkHoverColor rounded-3xl border border-buttonHoverColor hover:border-secondaryColor focus:outline-none focus:border-0 focus:ring-[.5px] w-full md:w-[300px] xl:w-[350px] h-[35px] md:h-[50px] mt-4 md:mt-0 relative"
        type="search"
        placeholder="Search for..."
        value={searchTerm}
        onChange={handleSearchChange}
        onFocus={() => setModalOpen(true)} // Open the modal on input focus
      />

      <div className="absolute w-full">
        <SearchModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Search Results"
          description="Select a product to view details."
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <button
                key={product._id}
                onClick={() => handleProductClick(product._id)}
                className="text-linkHoverColor hover:text-primaryColor"
              >
                {product.name}
              </button>
            ))
          ) : (
            <p>No products found</p>
          )}
        </SearchModal>
      </div>
    </>
  );
};

export default SearchInput;
