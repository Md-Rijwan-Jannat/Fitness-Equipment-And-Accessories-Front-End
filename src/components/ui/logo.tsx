import logo from "../../../public/Fitness logo.png";

const Logo = () => {
  return (
    <div
      className="h-8 w-16 md:h-14 md:w-28
    "
    >
      <img src={logo} alt="" className="w-full h-full rounded-lg" />
    </div>
  );
};

export default Logo;
