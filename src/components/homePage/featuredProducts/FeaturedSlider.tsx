import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { TProduct } from "@/types";
import FeaturedCard from "./FeaturedCard";

interface FeaturedSliderProps {
  products: TProduct[];
}

const FeaturedSlider = ({ products }: FeaturedSliderProps) => {
  return (
    <section>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full -ml-1"
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              key={product._id}
              className="md:basis-1/3 lg:basis-1/4"
            >
              <div className="p-1">
                <FeaturedCard {...product} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default FeaturedSlider;
