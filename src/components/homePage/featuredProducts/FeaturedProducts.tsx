import { useGetProductsQuery } from "@/redux/api/baseApi";
import { TProduct } from "@/types";
import SectionTittle from "@/components/ui/sectionTittle";
import FeaturedSlider from "./FeaturedSlider";

const FeaturedProductsSection = () => {
  const { data, isLoading, error } = useGetProductsQuery({ limit: 10 });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching featured products</p>;

  const featuredProducts: TProduct[] =
    data?.data.filter((product: TProduct) => product) || [];

  return (
    <section className="mt-8 md:mt-12 w-full">
      <SectionTittle tittle="Featured Products" />
      <FeaturedSlider products={featuredProducts} />
    </section>
  );
};

export default FeaturedProductsSection;
