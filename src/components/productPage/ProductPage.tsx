import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import {
  useGetProductCategoryQuery,
  useGetProductsQuery,
} from "@/redux/api/baseApi";
import { TProduct, TProductQueryParams } from "@/types";
import SectionTittle from "../ui/sectionTittle";
import ProductPagination from "./Pagination";
import Breadcrumb from "../ui/breadcrumb";
import ProductFilter from "../filterProduct/ProductFilter";

const ProductPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const searchTerm = searchParams.get("searchTerm") || "";
  const minPrice = parseFloat(searchParams.get("minPrice") || "");
  const maxPrice = parseFloat(searchParams.get("maxPrice") || "");
  const sort = searchParams.get("sort") || "price";
  const page = Math.max(parseInt(searchParams.get("page") || "1"), 1);
  const limit = 6; // Define the limit for the number of products per page

  const { data: productCategory } = useGetProductCategoryQuery({});
  const productCategories = productCategory?.data;

  const uniqueProductCategories: string[] = productCategories
    ? Array.from(
        new Set(productCategories.map((item: TProduct) => item.category))
      )
    : [];

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    setSelectedCategories(
      params.categories ? params.categories.split(",") : []
    );
    setCurrentPage(page);
  }, [searchParams, page]);

  const queryParams: TProductQueryParams = {
    searchTerm,
    categories: selectedCategories.join(","),
    page: currentPage,
    minPrice: isNaN(minPrice) ? 0 : minPrice,
    maxPrice: isNaN(maxPrice) ? 10000 : maxPrice,
    sort,
    limit,
  };

  const { data } = useGetProductsQuery(queryParams);

  const handleFilterChange = (filters: {
    categories: string[];
    minPrice: number | "";
    maxPrice: number | "";
    sort: string;
    searchTerm: string;
  }) => {
    setSelectedCategories(filters.categories);
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      categories: filters.categories.join(","),
      minPrice: filters.minPrice ? filters.minPrice.toString() : "",
      maxPrice: filters.maxPrice ? filters.maxPrice.toString() : "",
      sort: filters.sort,
      searchTerm: filters.searchTerm,
      page: "1",
    });
  };

  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSearchParams({
      searchTerm: "",
      minPrice: "",
      maxPrice: "",
      sort,
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

  const totalDataLength = productCategories?.length || 0;

  // Extract category and productName for breadcrumb
  const category =
    selectedCategories.length > 0 ? selectedCategories[0] : "All Products";
  const productName = searchTerm ? searchTerm : "";

  return (
    <div className="w-full">
      <Breadcrumb category={category} productName={productName} />
      <SectionTittle tittle="Products" />
      <div className="my-10">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {data?.data.map((product: TProduct) => (
            <ProductCard key={product?._id} {...product} />
          ))}
        </div>
        <div className="mt-10">
          <ProductPagination
            currentPage={currentPage}
            goToPage={handlePageChange}
            totalDataLength={totalDataLength}
            productsPerPage={limit}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
