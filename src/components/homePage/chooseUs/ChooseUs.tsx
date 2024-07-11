import { motion } from "framer-motion";

const benefits = [
  {
    id: 1,
    title: "High Quality Products",
    description:
      "Our products are crafted with the highest quality materials to ensure durability and performance.",
    imageUrl:
      "https://media.istockphoto.com/id/1391410249/photo/sports-and-gym-activities.jpg?s=612x612&w=0&k=20&c=1S-hAmT-CkRtdYV_hcKi1lZdQkXAN_mCy3ebIXlUEnE=",
  },
  {
    id: 2,
    title: "Affordable Prices",
    description:
      "We offer competitive prices to make fitness equipment accessible to everyone.",
    imageUrl:
      "https://image.made-in-china.com/44f3j00iOPRjbFdLYcu/High-Quality-and-Low-Price-Hot-Sale-Home-and-Gym-Use-Strength-Fitness-Equipment-Smith-Machine-Squat-Rack.webp",
  },
  {
    id: 3,
    title: "Expert Guidance",
    description:
      "Our team of experts is available to guide you through your fitness journey.",
    imageUrl: "https://cdn.globalso.com/dhzfitness/Incline-Press-E4013A-1.jpg",
  },
  {
    id: 4,
    title: "Customer Satisfaction",
    description:
      "We prioritize your satisfaction and offer excellent customer service.",
    imageUrl:
      "https://5.imimg.com/data5/SELLER/Default/2022/12/DB/ZT/SD/8474595/9820956b-8385-449b-a141-fcecb9442dfb-500x500.jpeg",
  },
];

const ChooseUs = () => {
  return (
    <section className="mt-8 md:mt-14">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={benefit.imageUrl}
                alt={benefit.title}
                className="w-16 h-16 mb-4"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.5 }}
              />
              <h3 className="text-lg font-semibold text-primaryColor mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
