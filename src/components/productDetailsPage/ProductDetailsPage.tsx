import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useGetSingleProductQuery } from "@/redux/api/baseApi";
import { TProduct } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Breadcrumb from "@/components/ui/breadcrumb";
import HeroIcons from "@/components/icons/HeroIcons";
import RelatedProductsSection from "./RelatedProductsSection";

const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useGetSingleProductQuery(id);

  const product: TProduct = data?.data;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error || !product) return <div>Error loading product</div>;

  return (
    <section>
      <Breadcrumb category={product.category} productName={product.name} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="h-full rounded overflow-hidden">
          <div className="relative h-52 md:h-80 overflow-hidden">
            <motion.div
              className="absolute inset-0 w-full h-52 md:h-80 overflow-hidden"
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={selectedImage || product.images[0]}
                alt={product.name}
                className="w-full h-52 md:h-80 overflow-hidden object-cover"
              />
            </motion.div>
          </div>
          <div className="mt-5">
            <Carousel opts={{ align: "start" }} className="w-full -ml-1">
              <CarouselContent>
                {product.images.map((image, index) => (
                  <CarouselItem key={index} className="basis-1/4 md:basis-1/5">
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-16 h-16 object-cover cursor-pointer border border-gray-200 rounded"
                      onClick={() => handleImageClick(image)}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
        <div className="p-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-primaryColor mb-3">
            {product.category}/{product.name}
          </h1>
          <div className="flex items-center mb-8">
            {[...Array(5)].map((_, i) => (
              <HeroIcons
                icon="star"
                key={i}
                className="h-5 w-5 text-yellow-500"
              />
            ))}
            <span className="ml-2 text-primaryColor">(5 reviews)</span>
          </div>
          <p className="text-lg text-primaryColor mb-4">
            {product.description}
          </p>
          <span className="text-xl md:text-2xl font-bold text-primaryColor mb-4 block">
            ${product.price.toFixed(2)}
          </span>

          <div className="flex items-center gap-16 mt-8">
            <div className="flex items-center">
              <button
                className="px-3 py-1 bg-secondaryColor text-primaryColor hover:text-secondaryColor hover:bg-buttonHoverColor rounded-full border border-buttonHoverColor mr-2"
                onClick={decrementQuantity}
              >
                -
              </button>
              <span className="px-4 py-2 border rounded-full">{quantity}</span>
              <button
                className="px-3 py-1 bg-secondaryColor text-primaryColor hover:text-secondaryColor hover:bg-buttonHoverColor rounded-full border border-buttonHoverColor ml-2"
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>
            <Button
              className="bg-primaryColor text-secondaryColor 
                hover:text-secondaryColor hover:bg-buttonHoverColor rounded-3xl border border-borderColor hover:border-none md:w-[120px] poppins-medium text-[10px] md:text-[16px] md:h-[35px] poppins-regular transition-colors duration-500"
            >
              Add to Cart
            </Button>
          </div>
          <div className="flex flex-col items-start mt-10 space-y-1">
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
      </div>
      {/* Add Related Products Section */}
      <RelatedProductsSection category={product.category} />
    </section>
  );
};

export default ProductDetailsPage;
