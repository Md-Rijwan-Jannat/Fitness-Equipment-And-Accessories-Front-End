import Banner from "@/components/banner/Banner";
import Container from "@/components/ui/container";
import cart_banner from "../../assets/images/cart/cart-banner.jpeg";
import AddToCartPage from "@/components/addToCart/AddToCartPage";

const AddToCart = () => {
  return (
    <section>
      <Banner
        isVideo={false}
        mediaSrc={cart_banner}
        headerText1={`./Bookmark Items`}
        headerText2={``}
        buttonText="Contact Us"
        className="relative w-full h-[70vh] md:h-[60vh]"
        link="/about-us"
      />
      <Container>
        <AddToCartPage />
      </Container>
    </section>
  );
};

export default AddToCart;
