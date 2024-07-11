import Banner from "@/components/homePage/Banner";
import Container from "@/components/ui/container";
import product_banner from "../../assets/images/product/product-banner.avif";

const Products = () => {
  return (
    <section>
      <Banner
        isVideo={false}
        mediaSrc={product_banner}
        headerText1={`./Products`}
        headerText2={``}
        buttonText="Shop Now"
        className="relative w-full h-[45vh] md:h-[25vh]"
      />
      <Container>
        <h1 className="text-4xl font-bold text-center">Products</h1>
      </Container>
    </section>
  );
};

export default Products;
