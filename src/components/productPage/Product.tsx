import React, { useState, useEffect, ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { TProduct, TProductQueryParams } from "@/types";
import Breadcrumb from "../ui/breadcrumb";
import SectionTittle from "../ui/sectionTittle";
import ProductPagination from "./Pagination";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Product: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const searchTerm = searchParams.get("searchTerm") || "";
  const categories = searchParams.getAll("categories") || [];
  const minPrice = parseFloat(searchParams.get("minPrice") || "");
  const maxPrice = parseFloat(searchParams.get("maxPrice") || "");
  const sort = searchParams.get("sort") || "price";
  const limit = parseInt(searchParams.get("limit") || "6");
  const page = Math.max(parseInt(searchParams.get("page") || "1"), 1);

  const queryParams: TProductQueryParams = {
    searchTerm,
    categories: categories.join(","), // Join categories as a comma-separated string
    page: currentPage,
    minPrice: isNaN(minPrice) ? 0 : minPrice,
    maxPrice: isNaN(maxPrice) ? 10000 : maxPrice,
    sort,
    limit,
  };

  const { data } = useGetProductsQuery(queryParams);

  useEffect(() => {
    setSelectedCategories(categories);
    if (data) {
      const uniqueCats = Array.from(
        new Set<string>(
          data?.data?.map((product: TProduct) => product.category)
        )
      );
      setUniqueCategories(uniqueCats);
      setCurrentPage(page);
    }
  }, [categories, data, page]);

  const handleCategoryChange = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);

    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      categories: updatedCategories.join(","), // Join categories as a comma-separated string
      page: "1",
    });
  };

  const handlePriceChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: "minPrice" | "maxPrice"
  ) => {
    const value = parseFloat(e.target.value);
    if (type === "minPrice") {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        minPrice: isNaN(value) ? "" : value.toString(), // Set to empty if NaN
        page: "1",
      });
    } else if (type === "maxPrice") {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        maxPrice: isNaN(value) ? "" : value.toString(), // Set to empty if NaN
        page: "1",
      });
    }
  };

  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      sort: e.target.value,
      page: "1",
    });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      page: page.toString(),
    });
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSearchParams({
      searchTerm: "", // Clear search term
      minPrice: "", // Show all if empty
      maxPrice: "", // Show all if empty
      sort,
      limit: limit.toString(),
      page: "1",
    });
  };

  const filteredProducts = data?.data.filter((product: TProduct) => {
    // Filter by price range
    if (
      (!isNaN(minPrice) && product.price < minPrice) ||
      (!isNaN(maxPrice) && product.price > maxPrice)
    ) {
      return false;
    }

    // Filter by search term
    if (
      searchTerm &&
      !product.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }

    // Filter by selected categories
    if (
      selectedCategories.length > 0 &&
      !selectedCategories.includes(product.category)
    ) {
      return false;
    }

    return true;
  });

  const totalPages = Math.max(1, Math.ceil((data?.total || 0) / limit));

  return (
    <section className="my-8 md:my-14">
      <Breadcrumb
        category={selectedCategories.join(", ") || "All"}
        productName=""
      />
      <SectionTittle tittle={"Products"} />

      {/* Filters */}
      <div className="mb-4">
        <h3 className="poppins-bold text-[18px] mb-5 text-lg">Filters</h3>
        <div className="flex flex-wrap gap-3 md:gap-14">
          {uniqueCategories?.map((category) => (
            <label key={category} className="flex items-center gap-2">
              <Input
                type="checkbox"
                className="size-5"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                id={`${category}`}
              />
              <label htmlFor={`${category}`}>{category}</label>
            </label>
          ))}
        </div>
        <div className="mt-5">
          <label className="flex mt-2 items-center gap-5 poppins-regular">
            Min Price:
            <Input
              className="w-[100px] h-[30px] border-none bg-gray-200 focus:ring-1 focus:ring-primaryColor rounded-full"
              type="number"
              value={minPrice || ""}
              onChange={(e) => handlePriceChange(e, "minPrice")}
            />
          </label>
          <label className="flex mt-2 items-center gap-5 poppins-regular">
            Max Price:
            <Input
              className="w-[100px] h-[30px] border-none bg-gray-200 focus:ring-1 focus:ring-primaryColor rounded-full"
              type="number"
              value={maxPrice || ""}
              onChange={(e) => handlePriceChange(e, "maxPrice")}
            />
          </label>
        </div>
        <Button
          onClick={handleClearFilters}
          className="w-[100px] rounded-3xl hover:bg-buttonHoverColor transition-colors duration-500 mt-5 mb-10"
        >
          Clear Filters
        </Button>
      </div>

      {/* Sorting */}
      <div className="mb-4">
        <label>
          Sort by:
          <select value={sort} onChange={handleSortChange}>
            <option value="price">Price (Ascending)</option>
            <option value="-price">Price (Descending)</option>
            {/* Add more sorting options as needed */}
          </select>
        </label>
      </div>

      {/* Search Input */}
      <div className="my-8 md:my-12 flex items-center gap-5  justify-center">
        <p className="poppins-regular whitespace-nowrap mt-4 md:mt-0">
          Search Here
        </p>
        <Input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => {
            setSearchParams({
              ...Object.fromEntries(searchParams.entries()),
              searchTerm: e.target.value,
              page: "1",
            });
          }}
          className="bg-secondaryColor text-primaryColor placeholder:text-linkHoverColor rounded-3xl border border-buttonHoverColor hover:border-buttonHoverColor focus:outline-none focus:border-0 focus:ring-[.5px] w-full md:w-[300px] xl:w-[350px] h-[35px] md:h-[50px] mt-4 md:mt-0"
        />
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
        {filteredProducts?.map((product: TProduct) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </div>

      {/* Pagination */}
      <ProductPagination
        totalPages={totalPages}
        currentPage={currentPage}
        goToPage={handlePageChange}
      />
    </section>
  );
};

export default Product;
