import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import {
  useCreteOrderMutation,
  useUpdateProductsQuantitiesMutation,
} from "@/redux/api/baseApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { removeAllItemsFromCart } from "@/redux/features/products/addToCart/cartSlice";
import { motion } from "framer-motion";

const CheckoutPage = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [
    createOrder,
    { isError: isCreateOrderError, isSuccess: isCreateOrderSuccess },
  ] = useCreteOrderMutation();
  const [updateProductsQuantities, { isSuccess: isUpdateProductsSuccess }] =
    useUpdateProductsQuantitiesMutation();

  const cartItems = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isCreateOrderSuccess && isUpdateProductsSuccess) {
      toast.success("Order placed successfully!");
      dispatch(removeAllItemsFromCart());
      navigate("/order-success");
    }
  }, [isCreateOrderSuccess, isUpdateProductsSuccess, dispatch, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handlePaymentMethodChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentMethod(e.target.value);
  };

  const handlePlaceOrder = async () => {
    if (paymentMethod === "cash") {
      try {
        // Update product quantities
        const updateData = {
          products: cartItems.map((item) => ({
            id: item._id,
            quantity: item.quantity,
          })),
        };

        await updateProductsQuantities(updateData).unwrap();

        // Create order
        const orderData = {
          paymentMethod,
          products: cartItems.map((item) => ({
            product: item._id,
            quantity: item.quantity,
          })),
          address: userDetails.address,
          email: userDetails.email,
          name: userDetails.name,
          phone: userDetails.phone,
        };

        await createOrder(orderData).unwrap();
      } catch (error) {
        toast.error("Failed to place order. Please try again.");
        console.error("Order placement error:", error);
      }
    } else if (paymentMethod === "stripe") {
      // Redirect to Stripe payment page
      // Example: Implement your Stripe payment flow here
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-4"
    >
      <h1 className="text-2xl font-semibold text-primaryColor mb-6">
        Checkout
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-4 border border-gray-200 rounded"
        >
          <h2 className="text-xl font-medium text-primaryColor mb-4">
            User Details
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-primaryColor">Name</label>
              <Input
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primaryColor"
                required
              />
            </div>
            <div>
              <label className="block text-primaryColor">Email</label>
              <Input
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primaryColor"
                required
              />
            </div>
            <div>
              <label className="block text-primaryColor">Phone</label>
              <Input
                type="text"
                name="phone"
                value={userDetails.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primaryColor"
                required
              />
            </div>
            <div>
              <label className="block text-primaryColor">
                Delivery Address
              </label>
              <Input
                type="text"
                name="address"
                value={userDetails.address}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primaryColor"
                required
              />
            </div>
          </form>
        </motion.div>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-4 border border-gray-200 rounded"
        >
          <h2 className="text-xl font-medium text-primaryColor mb-4">
            Payment Methods
          </h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={paymentMethod === "cash"}
                onChange={handlePaymentMethodChange}
                className="h-4 w-4 text-primaryColor focus"
              />
              <label className="ml-2 text-primaryColor">Cash on Delivery</label>
            </div>
            <div className="flex items-center">
              <Input
                type="radio"
                name="paymentMethod"
                value="stripe"
                checked={paymentMethod === "stripe"}
                onChange={handlePaymentMethodChange}
                className="h-4 w-4 text-primaryColor focus"
              />
              <label className="ml-2 text-primaryColor">Stripe</label>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-6 flex justify-end"
      >
        <Button
          onClick={handlePlaceOrder}
          className="bg-primaryColor text-white px-6 py-3 rounded-3xl hover:bg-buttonHoverColor"
        >
          Place Order
        </Button>
      </motion.div>
      {isCreateOrderError && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-4 text-red-600 border px-2 py-3"
        >
          An error occurred while placing your order. Please try again.
        </motion.div>
      )}
    </motion.section>
  );
};

export default CheckoutPage;
