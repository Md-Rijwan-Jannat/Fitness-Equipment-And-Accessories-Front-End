import { NavLink } from "react-router-dom";
import emptyCartVideo from "../../assets/videos/Empty card.mp4";
import { Button } from "./button";

const EmptyCardItem = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center p-4 border border-gray-200 rounded">
      <h2 className="ext-xl font-medium text-primaryColor mb-4">
        Your Cart is Empty
      </h2>
      <p className="text-buttonHoverColor">
        Looks like you haven't added anything to your cart yet.
      </p>
      <div className="mt-5 size-32">
        <video className="w-full" autoPlay loop muted>
          <source src={emptyCartVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <NavLink to="/products">
        <Button className="w-full bg-primaryColor text-secondaryColor hover:text-secondaryColor hover:bg-buttonHoverColor rounded-3xl border border-borderColor hover:border-none transition-colors duration-500 mt-10">
          Shop Now
        </Button>
      </NavLink>
    </div>
  );
};

export default EmptyCardItem;
