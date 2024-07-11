// src/components/CategoriesSection.tsx

import SectionTittle from "@/components/ui/sectionTittle";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { TProduct } from "@/types";
import Category from "./Category";
import { NavLink } from "react-router-dom";

const CategoriesSection = () => {
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

  return (
    <section className="mt-8 md:mt-12">
      <div className="flex items-center justify-between gap-3">
        <SectionTittle tittle="Categories" />
        <NavLink
          className="text-buttonHoverColor h-6 hover:border-b border-buttonHoverColor"
          to={"/products"}
        >
          View All Products
        </NavLink>
      </div>
      <div className="flex flex-wrap gap-4">
        {uniqueCategories.map((category: string) => (
          <Category
            key={category}
            category={category}
            link={`/products?categories=${encodeURIComponent(category)}`} // Ensure proper URL encoding
          />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
