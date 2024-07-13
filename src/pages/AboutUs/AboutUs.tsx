import Banner from "@/components/banner/Banner";
import Container from "@/components/ui/container";
import aboutUs_banner from "../../assets/images/aboutUs/aboutUs-banner.jpg";
import AboutUsPage from "@/components/aboutUsPage/AboutUsPage";

const AboutUs = () => {
  return (
    <section>
      <Banner
        isVideo={false}
        mediaSrc={aboutUs_banner}
        headerText1={`./About Us`}
        headerText2={``}
        buttonText="Shop Now"
        className="relative w-full h-[70vh] md:h-[60vh]"
        link="/products"
      />
      <Container>
        <AboutUsPage />
      </Container>
    </section>
  );
};

export default AboutUs;
