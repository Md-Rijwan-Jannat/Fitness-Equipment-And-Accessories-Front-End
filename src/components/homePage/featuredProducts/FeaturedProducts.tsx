import { useGetProductsQuery } from "@/redux/api/baseApi";
import { TProduct } from "@/types";
import SectionTittle from "@/components/ui/sectionTittle";
import FeaturedSlider from "./FeaturedSlider";
import Loading from "@/components/ui/loading";

const FeaturedProductsSection = () => {
  const { data, isLoading } = useGetProductsQuery({ limit: 10 });

  if (isLoading) return <Loading />;

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
