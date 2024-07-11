import SectionTittle from "@/components/ui/sectionTittle";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { TProduct } from "@/types";
import Category from "./Category";

const CategoriesSection = () => {
  const { data } = useGetProductsQuery({});
  const products = data?.data;

  // Filter out duplicate categories
  const uniqueCategories = products
    ? products
        .map((item: TProduct) => item.category) // Extract categories
        .filter(
          (category: string, index: number, self: string | any[]) =>
            self.indexOf(category) === index
        )
    : [];

  return (
    <section className="mt-8 md:mt-12">
      <SectionTittle tittle="Categories" />
      <div className="flex flex-wrap gap-4">
        {uniqueCategories.map((category: string) => (
          <Category category={category} />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
