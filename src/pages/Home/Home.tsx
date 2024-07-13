import banner_video from "../../assets/videos/BannerVideo.mp4";
import Container from "@/components/ui/container";
import CategoriesSection from "@/components/homePage/categoriesSection/CategoriesSection";
import FeaturedProducts from "@/components/homePage/featuredProducts/FeaturedProducts";
import BenefitsSection from "@/components/homePage/benefitsSection/BenefitsSection";
import ImageGallery from "@/components/homePage/imageGallery/ImageGallery";
import ChooseUs from "@/components/homePage/chooseUs/ChooseUs";
import Testimonials from "@/components/homePage/testimonials/Testimonials";
import Banner from "@/components/banner/Banner";

const Home = () => {
  return (
    <section className="mb-16">
      <Banner
        isVideo={true}
        mediaSrc={banner_video}
        headerText1={`Welcome to Fitness Equipment`}
        headerText2={`and Accessories`}
        buttonText="Shop Now"
        className="relative w-full h-[70vh] md:h-[80vh]"
        headerHeight="-mt-[70px]"
        link="/products"
      />
      <Container>
        <CategoriesSection />
        <FeaturedProducts />
        <BenefitsSection />
        <ImageGallery />
        <ChooseUs />
        <Testimonials />
      </Container>
    </section>
  );
};

export default Home;
