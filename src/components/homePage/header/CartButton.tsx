import HeroIcons from "@/components/icons/HeroIcons";
import { Button } from "@/components/ui/button";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const CartButton = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const cartQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <NavLink to={"/add-to-cart"}>
      {" "}
      <Button className="bg-secondaryColor text-buttonHoverColor hover:bg-buttonHoverColor rounded-3xl hover:text-secondaryColor md:w-[140px] poppins-medium text-[10px] md:text-[16px] md:h-[50px] transition-colors duration-500">
        <HeroIcons icon="shoppingBag" className="size-4 md:size-5 mr-2" />$
        {totalPrice || 0} (
        <p className="text-red-500 poppins-semibold">{cartQuantity || 0}</p>)
      </Button>
    </NavLink>
  );
};

export default CartButton;
