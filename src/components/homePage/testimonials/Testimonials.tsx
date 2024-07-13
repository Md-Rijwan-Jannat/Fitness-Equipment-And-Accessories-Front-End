import { Button } from "@/components/ui/button";
import SectionTittle from "@/components/ui/sectionTittle";
import { TTestimonial } from "@/types";
import TestimonialSlider from "./TestimonialSlider";

const testimonials: TTestimonial[] = [
  {
    id: 1,
    name: "John Doe",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    review: "Amazing products! They have significantly improved my workouts.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    review: "Great quality and excellent customer service.",
    rating: 4,
  },
  {
    id: 3,
    name: "Alice Johnson",
    photo: "https://randomuser.me/api/portraits/women/3.jpg",
    review: "Affordable prices and fast delivery. Highly recommended!",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Brown",
    photo: "https://randomuser.me/api/portraits/men/4.jpg",
    review: "The best fitness equipment I've ever used.",
    rating: 5,
  },
  {
    id: 5,
    name: "Emily Davis",
    photo: "https://randomuser.me/api/portraits/women/5.jpg",
    review: "High quality and durable products. Worth every penny.",
    rating: 4,
  },
  {
    id: 6,
    name: "Chris Wilson",
    photo: "https://randomuser.me/api/portraits/men/6.jpg",
    review: "Excellent customer support and quick response time.",
    rating: 5,
  },
  {
    id: 7,
    name: "Olivia Martinez",
    photo: "https://randomuser.me/api/portraits/women/7.jpg",
    review: "Very satisfied with my purchase. Highly recommend!",
    rating: 4,
  },
  {
    id: 8,
    name: "Daniel Anderson",
    photo: "https://randomuser.me/api/portraits/men/8.jpg",
    review: "Top-notch products and service. I'll definitely be back.",
    rating: 5,
  },
  {
    id: 9,
    name: "Sophia Thompson",
    photo: "https://randomuser.me/api/portraits/women/9.jpg",
    review: "Great selection of products at reasonable prices.",
    rating: 4,
  },
  {
    id: 10,
    name: "James White",
    photo: "https://randomuser.me/api/portraits/men/10.jpg",
    review: "Fast shipping and excellent packaging. Very impressed.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-12">
      <div className="p-2">
        <SectionTittle tittle="Customer Testimonials" />
        <TestimonialSlider testimonials={testimonials} />
        <div className="text-center mt-8">
          <Button
            className="bg-primaryColor text-secondaryColor border  hover:text-secondaryColor hover:bg-buttonHoverColor rounded-3xl w-[140px] h-[7opx]"
            variant="outline"
          >
            Add Your Review
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
