import { motion } from "framer-motion";

const OrderSuccessPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-6 h-[500px] flex flex-col justify-center items-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl font-semibold text-primaryColor mb-6"
      >
        Order Success
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-6 border border-gray-200 rounded-lg shadow-lg bg-white text-center"
      >
        <p className="text-lg text-green-500">
          Thank you for your order! Your order has been placed successfully.
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4"
        >
          <button
            onClick={() => (window.location.href = "/products")}
            className="px-6 py-2 bg-primaryColor text-white rounded-full hover:bg-buttonHoverColor transition-colors duration-300"
          >
            Continue Shopping
          </button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default OrderSuccessPage;
