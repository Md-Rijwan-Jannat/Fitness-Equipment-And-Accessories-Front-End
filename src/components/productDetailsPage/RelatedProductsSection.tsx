import { useGetProductsQuery } from "@/redux/api/baseApi";
import { TProduct } from "@/types";
import SectionTittle from "@/components/ui/sectionTittle";
import FeaturedSlider from "../homePage/featuredProducts/FeaturedSlider";

interface RelatedProductsSectionProps {
  category: string;
}

const RelatedProductsSection = ({ category }: RelatedProductsSectionProps) => {
  const { data, isLoading, error } = useGetProductsQuery({
    categories: category,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching related products</p>;

  const relatedProducts: TProduct[] =
    data?.data.filter((product: TProduct) => product) || [];

  return (
    <section className="mt-8 md:mt-12 w-full">
      <SectionTittle tittle="Related Products" />
      <FeaturedSlider products={relatedProducts} />
    </section>
  );
};

export default RelatedProductsSection;
