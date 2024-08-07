import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TProduct } from "@/types";
import { NavLink } from "react-router-dom";
import HeroIcons from "@/components/icons/HeroIcons";
import { useAppDispatch } from "@/redux/hooks";
import { addItemToCart } from "@/redux/features/products/addToCart/cartSlice";
import { toast } from "sonner";

const ProductCard = ({
  _id,
  images,
  stock,
  category,
  createdAt,
  description,
  isDeleted,
  updatedAt,
  name,
  price,
}: TProduct) => {
  const dispatch = useAppDispatch();

  const addToCart = () => {
    const product: TProduct = {
      name: name,
      _id: _id,
      images: images,
      price: price,
      stock: stock,
      description: description,
      category: category,
      isDeleted: isDeleted,
      updatedAt: updatedAt,
      createdAt: createdAt,
    };
    toast.success("Product added successfully");
    dispatch(addItemToCart(product));
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
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
        <div className="flex justify-between items-center mb-2">
          <span className="text-xl font-bold text-primaryColor">
            ${price.toFixed(2)}
          </span>
        </div>
        <div className="flex flex-row justify-between gap-2 mt-5 md:mt-10">
          <NavLink to={`/product-details/${_id}`}>
            <Button
              className="bg-secondaryColor text-primaryColor 
                  hover:text-secondaryColor hover:bg-buttonHoverColor rounded-3xl border border-borderColor hover:border-none md:w-[120px] poppins-medium text-[10px] md:text-[16px] md:h-[35px] poppins-regular transition-colors duration-500"
            >
              View Details
            </Button>
          </NavLink>
          <Button
            onClick={addToCart}
            className="bg-primaryColor text-secondaryColor 
                  hover:text-secondaryColor hover:bg-buttonHoverColor rounded-3xl hover:border-none md:w-[120px] poppins-medium text-[10px] md:text-[16px] md:h-[35px] poppins-regular transition-colors duration-500"
          >
            Add To Cart
          </Button>
        </div>
        <div className="flex items-center justify-start gap-1 mt-5">
          <HeroIcons icon="star" className="size-4 text-yellow-500" />
          <HeroIcons icon="star" className="size-4 text-yellow-500" />
          <HeroIcons icon="star" className="size-4 text-yellow-500" />
          <HeroIcons icon="star" className="size-4 text-yellow-500" />
          4(3)
        </div>
        <div className="flex flex-col items-start mt-5 space-y-1">
          <p className="flex gap-1 items-center text-sm text-primaryColor poppins-regular">
            <HeroIcons icon="check" className="size-5" />
            Delivery available ready to ship
          </p>
          <p className="flex gap-1 items-center text-sm text-primaryColor poppins-regular">
            <HeroIcons icon="check" className="size-5" />
            Select a store to see local availability
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
