import { motion } from "framer-motion";
import SectionTittle from "@/components/ui/sectionTittle";

const images = [
  {
    url: "https://i.pinimg.com/736x/f8/6d/df/f86ddf106dd03938a3d8bcca1e0d07e2.jpg",
    name: "Fitness Transformation",
  },
  {
    url: "https://www.bodybuilding.com/fun/images/2015/transform-for-life-previous-winner-2012-jeremiah-peterson.jpg",
    name: "Jeremiah's Journey",
  },
  {
    url: "https://i.ytimg.com/vi/iI6IiLoRenU/maxresdefault.jpg",
    name: "Gym Motivation",
  },
  {
    url: "https://i.pinimg.com/originals/4c/bb/b9/4cbbb93b4e26d221e0bf1ce2ba92202d.jpg",
    name: "Strength Training",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlA8efwoWfxmWjwKDRTVWvWUA-jLN9YzIoWKgxPvdvL6pQyIRs2Aa61Aen5t-IsrU_nFw&usqp=CAU",
    name: "Fitness Goals",
  },
  {
    url: "https://storage.googleapis.com/jacksonh/1/Before-After-Bariatric-Weight-Loss-Jeancarlo.jpg",
    name: "Jeancarlo's Success",
  },
];

const ImageGallery = () => {
  return (
    <section className="mt-8 md:mt-14">
      <SectionTittle tittle="Our Gallery" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden"
            style={{ backgroundImage: `url(${image.url})`, height: "300px" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex items-end">
              <motion.h3
                className="text-white text-lg font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {image.name}
              </motion.h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
