import CheckoutPage from "@/components/checkoutPage/CheckoutPage";
import Container from "@/components/ui/container";
import SectionTittle from "@/components/ui/sectionTittle";

const Checkout = () => {
  return (
    <section className="mt-8 md:mt-14">
      <Container>
        <SectionTittle tittle="Confirm Your Order" />
        <CheckoutPage />
      </Container>
    </section>
  );
};

export default Checkout;
