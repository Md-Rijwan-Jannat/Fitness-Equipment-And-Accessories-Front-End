import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { TTestimonial } from "@/types"; // Update this import as necessary
import TestimonialCard from "./TestimonialCard"; // Create this component as described

interface TestimonialSliderProps {
  testimonials: TTestimonial[];
}

const TestimonialSlider = ({ testimonials }: TestimonialSliderProps) => {
  return (
    <section>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full -ml-1"
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="md:basis-1/3 lg:basis-1/4"
            >
              <div className="p-1">
                <TestimonialCard {...testimonial} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default TestimonialSlider;
