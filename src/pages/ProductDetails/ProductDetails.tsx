import CustomerReviews from "@/components/productDetailsPage/CustomerReview";
import ProductDetailsPage from "@/components/productDetailsPage/ProductDetailsPage";
import Container from "@/components/ui/container";

const ProductDetails = () => {
  return (
    <section>
      <Container>
        <ProductDetailsPage />
        <CustomerReviews />
      </Container>
    </section>
  );
};

export default ProductDetails;
