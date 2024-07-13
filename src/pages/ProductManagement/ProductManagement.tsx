import Banner from "@/components/banner/Banner";
import management_banner from "../../assets/images/management/AdobeStock_493161125_Preview.jpeg";
import ProductListTable from "@/components/productManagementPage/ProductListTable";
import Container from "@/components/ui/container";

const ProductManagement = () => {
  return (
    <section>
      <Banner
        isVideo={false}
        mediaSrc={management_banner}
        headerText1={`./Product Management`}
        headerText2={``}
        buttonText="Home"
        className="relative w-full h-[70vh] md:h-[60vh]"
        link="/"
      />
      <Container>
        <ProductListTable />
      </Container>
    </section>
  );
};

export default ProductManagement;
