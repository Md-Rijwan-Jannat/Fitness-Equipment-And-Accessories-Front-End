import { motion } from "framer-motion";
import { TTestimonial } from "@/types"; // Update this import as necessary

const TestimonialCard = ({ name, photo, review, rating }: TTestimonial) => {
  return (
    <motion.div
      className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      <img src={photo} alt={name} className="w-16 h-16 mb-4 rounded-full" />
      <h3 className="text-lg font-semibold text-primaryColor mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">{review}</p>
      <div className="flex items-center justify-center">
        {Array.from({ length: rating }, (_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .587l3.668 7.431 8.213 1.193-5.936 5.777 1.4 8.162L12 18.897l-7.344 3.854 1.4-8.162L.12 9.211l8.213-1.193L12 .587z" />
          </svg>
        ))}
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
