import Banner from "@/components/banner/Banner";
import Container from "@/components/ui/container";
import product_banner from "../../assets/images/product/product-banner.avif";
import ProductPage from "@/components/productPage/ProductPage";

const Products = () => {
  return (
    <section>
      <Banner
        isVideo={false}
        mediaSrc={product_banner}
        headerText1={`./Products`}
        headerText2={``}
        buttonText="Contact Us"
        className="relative w-full h-[70vh] md:h-[60vh]"
        link="/about-us"
      />
      <Container>
        <ProductPage />
      </Container>
    </section>
  );
};

export default Products;
