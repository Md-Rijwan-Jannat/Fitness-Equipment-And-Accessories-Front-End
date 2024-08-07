import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

type TBannerProps = {
  isVideo: boolean;
  mediaSrc: string;
  headerText1: string;
  headerText2: string;
  buttonText: string;
  className: string;
  headerHeight?: string;
  link: string;
};

const Banner = ({
  isVideo = false,
  mediaSrc,
  headerText1,
  headerText2,
  buttonText,
  className,
  headerHeight,
  link,
}: TBannerProps) => {
  return (
    <div className={`${className}`}>
      {isVideo ? (
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          style={{ filter: "brightness(60%)" }}
        >
          <source src={mediaSrc} type="video/mp4" />
        </video>
      ) : (
        <img
          src={mediaSrc}
          alt="Banner"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(60%)" }}
        />
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <div className={`${headerHeight}`}>
          <motion.h1
            className="poppins-bold text-4xl xl:text-6xl text-header1Color text-center mb-11"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {headerText1}
            <br />
            {headerText2}
          </motion.h1>
        </div>
        <NavLink to={link}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button className="bg-secondaryColor text-buttonHoverColor hover:bg-buttonHoverColor rounded-[32px] hover:text-secondaryColor w-[120px] md:w-[160px] h-[40px] md:h-[60px] poppins-bold mt-[88px] md:mt-[150px] transition-colors duration-500">
              {buttonText}
            </Button>
          </motion.div>
        </NavLink>
      </div>
    </div>
  );
};

export default Banner;
