import Banner from "@/components/banner/Banner";
import banner_video from "../../assets/videos/BannerVideo.mp4";
import Container from "@/components/ui/container";
import CategoriesSection from "@/components/homePage/categoriesSection/CategoriesSection";
import FeaturedProducts from "@/components/homePage/featuredProducts/FeaturedProducts";

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
      />
      <Container>
        <CategoriesSection />
        <FeaturedProducts />
      </Container>
    </section>
  );
};

export default Home;
