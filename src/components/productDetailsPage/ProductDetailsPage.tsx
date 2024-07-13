// src/components/ProductDetailsPage.tsx
import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useGetSingleProductQuery } from "@/redux/api/baseApi";
import { TProduct } from "@/types";
import { RootState } from "@/redux/store";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Breadcrumb from "@/components/ui/breadcrumb";
import HeroIcons from "@/components/icons/HeroIcons";
import RelatedProductsSection from "./RelatedProductsSection";
import { addItemToCart } from "@/redux/features/products/addToCart/cartSlice";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Loading from "../ui/loading";

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetSingleProductQuery(id);
  const cartItems = useAppSelector((state: RootState) => state.cart.items);

  const product: TProduct = data?.data;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    toast.success("Product added successfully");
    dispatch(addItemToCart(product));
  };

  const cartItem = cartItems.find((item) => item?._id === product?._id);
  const cartQuantity = cartItem ? cartItem.quantity : 0;

  if (isLoading) return <Loading />;

  return (
    <section>
      <Breadcrumb category={product.category} productName={product.name} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-full rounded overflow-hidden">
          <div className="relative h-52 md:h-80 overflow-hidden">
            <motion.div
              className="absolute inset-0 w-full h-52 md:h-80 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={selectedImage || product.images[0]}
                alt={product.name}
                className="w-full h-52 md:h-80 overflow-hidden object-cover"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </div>
          <div className="mt-5">
            <Carousel opts={{ align: "start" }} className="w-full -ml-1">
              <CarouselContent>
                {product.images.map((image, index) => (
                  <CarouselItem key={index} className="basis-1/4 md:basis-1/5">
                    <motion.img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-16 h-16 object-cover cursor-pointer border border-gray-200 rounded"
                      onClick={() => handleImageClick(image)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
        <div className="p-4">
          <motion.h1
            className="text-2xl md:text-3xl font-semibold text-primaryColor mb-3"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {product.category}/{product.name}
          </motion.h1>
          <motion.div
            className="flex items-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {[...Array(5)].map((_, i) => (
              <HeroIcons
                icon="star"
                key={i}
                className="h-5 w-5 text-yellow-500"
              />
            ))}
            <span className="ml-2 text-primaryColor">(5 reviews)</span>
          </motion.div>
          <motion.p
            className="text-lg text-primaryColor mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {product.description}
          </motion.p>
          <motion.span
            className="text-xl md:text-2xl font-bold text-primaryColor mb-4 flex items-center gap-3"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            ${product.price.toFixed(2)}{" "}
            {cartQuantity >= product.stock ? (
              <p className="text-[10px] bg-red-200 rounded-3xl px-5 poppins-regular text-red-500 pt-0.5">
                Out of Stock
              </p>
            ) : (
              <p className="text-[10px] bg-green-200 rounded-3xl px-5 poppins-regular text-green-500 pt-0.5">
                In Stock
              </p>
            )}
          </motion.span>

          <motion.div
            className="flex items-center gap-16 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="flex items-center">
              <motion.button
                className="px-3 py-1 bg-secondaryColor text-primaryColor hover:text-secondaryColor hover:bg-buttonHoverColor rounded-full border border-buttonHoverColor mr-2"
                onClick={decrementQuantity}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                -
              </motion.button>
              <span className="px-4 py-2 border rounded-full">{quantity}</span>
              <motion.button
                className="px-3 py-1 bg-secondaryColor text-primaryColor hover:text-secondaryColor hover:bg-buttonHoverColor rounded-full border border-buttonHoverColor ml-2"
                onClick={incrementQuantity}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                +
              </motion.button>
            </div>
            <Button
              onClick={addToCart}
              disabled={cartQuantity >= product.stock}
              className={`bg-primaryColor text-secondaryColor 
                hover:text-secondaryColor hover:bg-buttonHoverColor rounded-3xl border border-borderColor hover:border-none md:w-[120px] poppins-medium text-[10px] md:text-[16px] md:h-[35px] poppins-regular transition-colors duration-500 ${
                  cartQuantity >= product.stock
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
            >
              Add to Cart
            </Button>
          </motion.div>
          <div className="flex flex-col items-start mt-10 space-y-1">
            <motion.p
              className="flex gap-1 items-center text-sm text-primaryColor poppins-regular"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <HeroIcons icon="check" className="size-5" />
              Delivery available ready to ship
            </motion.p>
            <motion.p
              className="flex gap-1 items-center text-sm text-primaryColor poppins-regular"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <HeroIcons icon="check" className="size-5" />
              Select a store to see local availability
            </motion.p>
          </div>
        </div>
      </div>
      <RelatedProductsSection category={product.category} />
    </section>
  );
};

export default ProductDetailsPage;
