import Banner from "@/components/homePage/Banner";
import banner_video from "../../assets/videos/BannerVideo.mp4";
import Container from "@/components/ui/container";

const Home = () => {
  return (
    <section>
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
        <h1 className="text-4xl font-bold text-center">Home</h1>
      </Container>
    </section>
  );
};

export default Home;
