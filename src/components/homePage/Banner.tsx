import banner_video from "../../assets/videos/Banner Video.mp4";

const Banner = () => {
  return (
    <div className="relative w-full h-[10vh] md:h-[80vh]">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        style={{ filter: "brightness(60%)" }}
      >
        <source src={banner_video} type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <div className="-mt-[100px]">
          <h1 className="poppins-bold text-3xl xl:text-5xl text-white text-center mb-11">
            Welcome to Fitness Equipment <br /> and Accessories
          </h1>
          <p className="text-sm md:text-[16px] text-white mb-8 text-center mx-5 md:mx-10">
            Discover top-quality fitness gear and accessories to elevate your
            workouts. Shop now and transform your fitness journey!
          </p>
        </div>
        <button className="bg-secondaryColor text-buttonHoverColor hover:bg-buttonHoverColor rounded-[32px] hover:text-secondaryColor w-[160px] h-[60px] poppins-bold -mb-8">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
