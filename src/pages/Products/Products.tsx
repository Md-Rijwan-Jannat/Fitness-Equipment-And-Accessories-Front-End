import Banner from "@/components/banner/Banner";
import Container from "@/components/ui/container";
import product_banner from "../../assets/images/product/product-banner.avif";
import Product from "@/components/productPage/Product";

const Products = () => {
  return (
    <section>
      <Banner
        isVideo={false}
        mediaSrc={product_banner}
        headerText1={`./Products`}
        headerText2={``}
        buttonText="Shop Now"
        className="relative w-full h-[70vh] md:h-[60vh]"
      />
      <Container>
        <Product />
      </Container>
    </section>
  );
};

export default Products;
