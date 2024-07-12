import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TProduct } from "@/types";
import { Button } from "@/components/ui/button";
import ConfirmationModal from "./ConfirmationModal";

interface CartItem extends TProduct {
  quantity: number;
}

const AddToCartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      _id: "1",
      name: "Product 1",
      price: 100,
      stock: 10,
      description: "Product 1 description",
      images: ["/path/to/image.jpg"],
      category: "Category 1",
      quantity: 2,
      isDeleted: false,
      createdAt: "",
      updatedAt: "",
    },
  ]);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [productToRemove, setProductToRemove] = useState<CartItem | null>(null);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    calculateTotal();
  }, [cartItems]);

  const incrementQuantity = (product: CartItem) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item._id === product._id && item.quantity < item.stock
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementQuantity = (product: CartItem) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item._id === product._id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemoveClick = (product: CartItem) => {
    setProductToRemove(product);
    setIsConfirmModalOpen(true);
  };

  const confirmRemoveProduct = () => {
    if (productToRemove) {
      setCartItems((prevCartItems) =>
        prevCartItems.filter((item) => item._id !== productToRemove._id)
      );
    }
    setIsConfirmModalOpen(false);
    setProductToRemove(null);
  };

  const cancelRemoveProduct = () => {
    setIsConfirmModalOpen(false);
    setProductToRemove(null);
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    setTotal(subtotal);
  };

  const handleCheckout = () => {
    // Implement checkout logic here
    navigate("/checkout");
  };

  const isAnyProductOutOfStock = cartItems.some(
    (item) => item.quantity > item.stock
  );

  return (
    <section className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold text-primaryColor mb-6">
        Shopping Cart
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2">
          {cartItems.map((product) => (
            <div
              key={product._id}
              className="flex items-center justify-between p-4 border-b border-gray-200"
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
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => decrementQuantity(product)}
                  className="px-3 py-1 bg-secondaryColor text-primaryColor hover:text-secondaryColor hover:bg-buttonHoverColor rounded-full border border-buttonHoverColor"
                >
                  -
                </button>
                <span className="px-4 py-2 border rounded-full">
                  {product.quantity}
                </span>
                <button
                  onClick={() => incrementQuantity(product)}
                  className="px-3 py-1 bg-secondaryColor text-primaryColor hover:text-secondaryColor hover:bg-buttonHoverColor rounded-full border border-buttonHoverColor"
                >
                  +
                </button>
              </div>
              <Button
                onClick={() => handleRemoveClick(product)}
                className="bg-secondaryColor text-primaryColor hover:text-secondaryColor hover:bg-buttonHoverColor rounded-3xl border border-borderColor hover:border-none transition-colors duration-500 w-[90px] "
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
        <div className="p-4 border border-gray-200 rounded">
          <h2 className="text-xl font-medium text-primaryColor mb-4">
            Pricing Details
          </h2>
          <div className="mb-4 flex items-center gap-3">
            <p className="text-primaryColor">Subtotal:</p>
            <p className="text-buttonHoverColor">${total.toFixed(2)}</p>
          </div>
          <div className="mb-4 flex items-center gap-3">
            <p className="text-primaryColor">Tax:</p>
            <p className="text-buttonHoverColor">${(total * 0.1).toFixed(2)}</p>
          </div>
          <div className="mb-4 flex items-center gap-3">
            <p className="text-primaryColor">Total:</p>
            <p className="text-buttonHoverColor">${(total * 1.1).toFixed(2)}</p>
          </div>
          <Button
            onClick={handleCheckout}
            disabled={isAnyProductOutOfStock}
            className={`w-full bg-primaryColor text-secondaryColor hover:text-secondaryColor hover:bg-buttonHoverColor rounded-3xl border border-borderColor hover:border-none transition-colors duration-500 mt-10 ${
              isAnyProductOutOfStock ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Proceed to Checkout
          </Button>
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
