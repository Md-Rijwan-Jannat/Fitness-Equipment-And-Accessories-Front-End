import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TProduct } from "@/types";
import { NavLink } from "react-router-dom";

const FeaturedCard = ({ _id, images, name, price }: TProduct) => {
  return (
    <div
      key={_id}
      className="bg-secondaryColor border border-gray-200 rounded-lg overflow-hidden duration-300 p-3"
    >
      <div className="h-48 rounded overflow-hidden">
        <motion.img
          src={images[0]}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-primaryColor mb-2">{name}</h2>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-primaryColor">
            ${price.toFixed(2)}
          </span>
          <NavLink to={`/product-details/${_id}`}>
            <Button
              className="bg-secondaryColor text-primaryColor 
                hover:text-secondaryColor hover:bg-buttonHoverColor rounded-3xl border border-borderColor hover:border-none md:w-[120px] poppins-medium text-[10px] md:text-[16px] md:h-[35px] poppins-regular transition-colors duration-500"
            >
              View Details
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
