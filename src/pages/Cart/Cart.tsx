import Banner from "@/components/homePage/Banner";
import Container from "@/components/ui/container";
import cart_banner from "../../assets/images/cart/cart-banner.jpeg";

const Cart = () => {
  return (
    <section>
      <Banner
        isVideo={false}
        mediaSrc={cart_banner}
        headerText1={`./About Us`}
        headerText2={``}
        buttonText="Contact"
        className="relative w-full h-[45vh] md:h-[25vh]"
      />
      <Container>
        <h1 className="text-4xl font-bold text-center">
          Yours Bookmarked Items
        </h1>
      </Container>
    </section>
  );
};

export default Cart;
