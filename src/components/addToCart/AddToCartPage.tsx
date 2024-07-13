import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TProduct } from "@/types";
import { Button } from "@/components/ui/button";
import ConfirmationModal from "./ConfirmationModal";
import { RootState } from "@/redux/store";
import {
  decrementQuantity,
  incrementQuantity,
  removeItemFromCart,
} from "@/redux/features/products/addToCart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toast } from "sonner";
import EmptyCardItem from "../ui/emptyCardItem";

interface CartItem extends TProduct {
  quantity: number;
}

const AddToCartPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  const total = useAppSelector((state: RootState) => state.cart.total);

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [productToRemove, setProductToRemove] = useState<CartItem | null>(null);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue =
        "Are you sure you want to reload? Your cart will be emptied.";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleRemoveClick = (product: CartItem) => {
    setProductToRemove(product);
    setIsConfirmModalOpen(true);
  };

  const confirmRemoveProduct = () => {
    if (productToRemove) {
      dispatch(removeItemFromCart(productToRemove._id));
      toast.success(`${productToRemove.name} removed from cart`);
    }
    setIsConfirmModalOpen(false);
    setProductToRemove(null);
  };

  const cancelRemoveProduct = () => {
    setIsConfirmModalOpen(false);
    setProductToRemove(null);
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const isAnyProductOutOfStock = cartItems.some(
    (item) => item.quantity > item.stock
  );

  const cartLength = cartItems.length === 0;

  return (
    <section className="container mx-auto p-2 md:p-4 mb-5">
      <h1 className="text-2xl font-semibold text-primaryColor mb-6">
        Shopping Cart
      </h1>
      <div className="md:grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 overflow-x-auto w-full">
          {cartItems.length === 0 ? (
            <EmptyCardItem />
          ) : (
            cartItems.map((product) => (
              <div
                key={product._id}
                className="flex items-center justify-between pd-2 md:p-4 border-b border-gray-200 py-3"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h2 className="text-lg font-medium text-primaryColor">
                      {product.name}
                    </h2>
                    <p className="text-sm text-secondaryColor">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-5 items-center">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => dispatch(decrementQuantity(product._id))}
                      className="px-3 py-1 bg-secondaryColor text-primaryColor hover:text-secondaryColor hover:bg-buttonHoverColor rounded-full border border-buttonHoverColor"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border rounded-full">
                      {product.quantity}
                    </span>
                    <button
                      onClick={() => dispatch(incrementQuantity(product._id))}
                      className="px-3 py-1 bg-secondaryColor text-primaryColor hover:text-secondaryColor hover:bg-buttonHoverColor rounded-full border border-buttonHoverColor"
                    >
                      +
                    </button>
                  </div>
                  <Button
                    onClick={() => handleRemoveClick(product)}
                    className="bg-secondaryColor text-primaryColor hover:text-secondaryColor hover:bg-buttonHoverColor rounded-3xl border border-borderColor hover:border-none transition-colors duration-500 w-[90px]"
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="flex items-center justify-center w-full mt-5 md:mt-0">
          <div className="col-auto p-4 pb-5 border border-gray-200 rounded w-full">
            <h2 className="text-xl font-medium text-primaryColor mb-4">
              Pricing Details
            </h2>
            <div className="mb-4 flex items-center gap-3">
              <p className="text-primaryColor">Subtotal:</p>
              <p className="text-buttonHoverColor">${total.toFixed(2)}</p>
            </div>
            <div className="mb-4 flex items-center gap-3">
              <p className="text-primaryColor">Tax:</p>
              <p className="text-buttonHoverColor">
                ${(total * 0.1).toFixed(2)}
              </p>
            </div>
            <div className="mb-4 flex items-center gap-3">
              <p className="text-primaryColor">Total:</p>
              <p className="text-buttonHoverColor">
                ${(total * 1.1).toFixed(2)}
              </p>
            </div>
            <div className="w-full">
              <Button
                onClick={handleCheckout}
                disabled={isAnyProductOutOfStock || cartLength}
                className={`w-full bg-primaryColor text-secondaryColor hover:text-secondaryColor hover:bg-buttonHoverColor rounded-3xl border border-borderColor hover:border-none transition-colors duration-500 mt-[100px]${
                  isAnyProductOutOfStock ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {isConfirmModalOpen && (
        <ConfirmationModal
          isOpen={isConfirmModalOpen}
          onConfirm={confirmRemoveProduct}
          onCancel={cancelRemoveProduct}
          title="Confirm Remove"
          description="Are you sure you want to remove this product from the cart?"
        />
      )}
    </section>
  );
};

export default AddToCartPage;
