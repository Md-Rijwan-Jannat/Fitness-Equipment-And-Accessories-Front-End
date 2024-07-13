import React, { ChangeEvent } from "react";
import { motion } from "framer-motion";
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

interface ProductFilterProps {
  categories: string[];
  selectedCategories: string[];
  minPrice: number | "";
  maxPrice: number | "";
  sort: string;
  searchTerm: string;
  onFilterChange: (filters: {
    categories: string[];
    minPrice: number | "";
    maxPrice: number | "";
    sort: string;
    searchTerm: string;
  }) => void;
  onClearFilters: () => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  categories,
  selectedCategories,
  minPrice,
  maxPrice,
  sort,
  searchTerm,
  onFilterChange,
  onClearFilters,
}) => {
  const handleCategoryChange = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];
    onFilterChange({
      categories: updatedCategories,
      minPrice,
      maxPrice,
      sort,
      searchTerm,
    });
  };

  const handlePriceChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: "minPrice" | "maxPrice"
  ) => {
    const value = parseFloat(e.target.value);
    onFilterChange({
      categories: selectedCategories,
      minPrice: type === "minPrice" ? (isNaN(value) ? "" : value) : minPrice,
      maxPrice: type === "maxPrice" ? (isNaN(value) ? "" : value) : maxPrice,
      sort,
      searchTerm,
    });
  };

  const handleSortChange = (value: string) => {
    onFilterChange({
      categories: selectedCategories,
      minPrice,
      maxPrice,
      sort: value,
      searchTerm,
    });
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    onFilterChange({
      categories: selectedCategories,
      minPrice,
      maxPrice,
      sort,
      searchTerm: e.target.value,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-4"
    >
      <h3 className="poppins-bold text-[18px] mb-5 text-lg">Filters</h3>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-start justify-start flex-wrap gap-3"
      >
        {categories?.map((category) => (
          <label
            key={category}
            className="flex items-center gap-2 mr-2 md:mr-6"
          >
            <Input
              type="checkbox"
              className="size-5"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
              id={category}
            />
            <label htmlFor={category}>{category}</label>
          </label>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-5 md:mt-8 flex flex-col md:flex-row justify-start gap-5"
      >
        <label className="flex items-center gap-5 poppins-regular whitespace-nowrap justify-between md:justify-start">
          Min Price:
          <Input
            className="w-full md:w-[180px]"
            type="number"
            value={minPrice || ""}
            onChange={(e) => handlePriceChange(e, "minPrice")}
          />
        </label>
        <label className="flex items-center gap-5 poppins-regular whitespace-nowrap justify-between md:justify-start">
          Max Price:
          <Input
            className="w-full md:w-[180px]"
            type="number"
            value={maxPrice || ""}
            onChange={(e) => handlePriceChange(e, "maxPrice")}
          />
        </label>
        <label className="flex items-center gap-5 poppins-regular whitespace-nowrap justify-between md:justify-start">
          Sort by price:
          <Select
            value={sort}
            onValueChange={(value) => handleSortChange(value)}
          >
            <SelectTrigger className="w-full md:w-[190px]">
              <SelectValue placeholder="Product sort by" />
            </SelectTrigger>
            <SelectContent className="text-buttonHoverColor">
              <SelectGroup>
                <SelectLabel className="text-buttonHoverColor">
                  Sort the Products
                </SelectLabel>
                <SelectItem className="text-buttonHoverColor" value="price">
                  Price (Ascending)
                </SelectItem>
                <SelectItem className="text-buttonHoverColor" value="-price">
                  Price (Descending)
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </label>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-start justify-start"
      >
        <Button
          onClick={onClearFilters}
          className="w-[100px] rounded-3xl hover:bg-buttonHoverColor transition-colors duration-500 mt-5 mb-10"
        >
          Clear Filters
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="my-8 md:my-12 flex items-center gap-5 justify-center"
      >
        <p className="poppins-regular whitespace-nowrap mt-4 md:mt-0">
          Search Here
        </p>
        <Input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="bg-secondaryColor text-primaryColor placeholder:text-linkHoverColor rounded-3xl border border-buttonHoverColor hover:border-buttonHoverColor focus:outline-none focus:border-0 focus:ring-[.5px] md:w-[300px] xl:w-[350px] h-[35px] md:h-[50px] mt-4 md:mt-0"
        />
      </motion.div>
    </motion.div>
  );
};

export default ProductFilter;
