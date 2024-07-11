import Banner from "@/components/homePage/Banner";
import Container from "@/components/ui/container";
import aboutUs_banner from "../../assets/images/aboutUs/aboutUs-banner.jpg";

const AboutUs = () => {
  return (
    <section>
      <Banner
        isVideo={false}
        mediaSrc={aboutUs_banner}
        headerText1={`./About Us`}
        headerText2={``}
        buttonText="Contact"
        className="relative w-full h-[45vh] md:h-[25vh]"
      />
      <Container>
        <h1 className="text-4xl font-bold text-center">About Us</h1>
      </Container>
    </section>
  );
};

export default AboutUs;