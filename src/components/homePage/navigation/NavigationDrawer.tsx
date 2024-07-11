import { Button } from "../../ui/button";
import HeroIcons from "../../icons/HeroIcons";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../ui/drawer";
import NavLinks from "./NavLinks";
import CancelButton from "./CancelButton";

const NavigationDrawer = () => {
  const navLink =
    "flex items-center text-primaryColor hover:text-linkHoverColor poppins-semibold rounded-2xl border border-buttonHoverColor whitespace-nowrap px-2 w-full transition-colors duration-500";

  return (
    <div className="block md:hidden">
      <Drawer>
        <DrawerTrigger>
          <Button
            size="sm"
            className="bg-buttonHoverColor text-secondaryColor hover:bg-secondaryColor rounded-full hover:text-buttonHoverColor
            transition-colors duration-500"
          >
            <HeroIcons icon="menu" className="size-6" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>
              <div className="flex items-center justify-between w-full mb-[24px] -mt-5">
                <h1 className="poppins-bold text-2xl flex items-start">
                  Fitness Equipment
                </h1>
                <DrawerClose>
                  <CancelButton />
                </DrawerClose>
              </div>
            </DrawerTitle>
            <NavLinks className="block md:hidden" navLink={navLink} />
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default NavigationDrawer;
