import { motion } from "framer-motion";
import SectionTittle from "@/components/ui/sectionTittle";
import ImageModal from "@/components/ui/imageModal";

const benefitsData = [
  {
    image:
      "https://st4.depositphotos.com/12985848/21976/i/450/depositphotos_219769806-stock-photo-handsome-athletic-man-sitting-cube.jpg",
    title: "Achieve Peak Performance",
    improvement: "25% Body Improvement",
    discount: "Save 30%",
    description: "Reach your fitness goals faster with our premium products.",
  },
  {
    image:
      "https://functionalbodysavage.com/wp-content/uploads/2023/03/Battling-ropes-1-1024x576.jpg",
    title: "Intense Workouts",
    improvement: "30% Body Improvement",
    discount: "Save 25%",
    description:
      "Enhance your workout sessions with our state-of-the-art equipment.",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/muscular-adult-brutal-man-training-trx-loops-gym-portrait-caucasian-authentic-bodybuilder-doing-exercises-hiit-workout_154092-15295.jpg",
    title: "Build Strength",
    improvement: "40% Body Improvement",
    discount: "Save 20%",
    description:
      "Get stronger and more resilient with our strength training gear.",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/photo-fitness-man-woman-workout-gym_763111-22742.jpg",
    title: "Train Together",
    improvement: "35% Body Improvement",
    discount: "Save 15%",
    description:
      "Train with a partner and achieve better results with our equipment.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="mt-8 md:mt-14">
      <SectionTittle tittle="Benefits of Our Products" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {benefitsData.map((benefit, index) => (
          <motion.div
            key={index}
            className="relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden"
            style={{
              backgroundImage: `url(${benefit.image})`,
              height: "400px",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end">
              <motion.h2
                className="text-xl md:text-2xl font-semibold text-white mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {benefit.title}
              </motion.h2>
              <motion.p
                className="text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {benefit.description}
              </motion.p>
              <motion.p
                className="text-white mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {benefit.improvement}
              </motion.p>
              <motion.p
                className="text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {benefit.discount}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <ImageModal
                  imageSrc={benefit.image}
                  imageAlt={benefit.title}
                  text="See More"
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
