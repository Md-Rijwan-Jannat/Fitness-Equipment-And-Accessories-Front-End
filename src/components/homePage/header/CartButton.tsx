import HeroIcons from "@/components/icons/HeroIcons";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const CartButton = () => (
  <NavLink to={"/cart"}>
    {" "}
    <Button className="bg-secondaryColor text-buttonHoverColor hover:bg-buttonHoverColor rounded-3xl hover:text-secondaryColor md:w-[140px] poppins-medium text-[10px] md:text-[16px] md:h-[50px]">
      <HeroIcons icon="shoppingBag" className="size-4 md:size-5 mr-2" />
      $00.00 (<p className="text-red-500 poppins-semibold">0</p>)
    </Button>
  </NavLink>
);

export default CartButton;
