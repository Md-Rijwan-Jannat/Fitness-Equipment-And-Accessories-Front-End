import { motion } from "framer-motion";
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
      <motion.div
        className="flex items-center justify-between gap-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTittle tittle="Categories" />
        <NavLink
          className="text-buttonHoverColor h-6 hover:border-b border-buttonHoverColor mb-3"
          to={"/products"}
        >
          View All Products
        </NavLink>
      </motion.div>
      <motion.div
        className="flex flex-wrap gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
            scale: 0.8,
          },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {uniqueCategories.map((category: string) => (
          <motion.div
            key={category}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Category
              category={category}
              link={`/products?categories=${encodeURIComponent(category)}`} // Ensure proper URL encoding
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CategoriesSection;
