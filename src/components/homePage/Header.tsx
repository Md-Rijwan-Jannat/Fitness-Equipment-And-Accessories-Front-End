import HeroIcons from "../icons/HeroIcons";
import { Button } from "../ui/button";
import Container from "../ui/container";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <Container>
      <section className="flex justify-between">
        <h1 className="text-secondaryColor poppins-bold text-2xl">
          Fitness Equipment
        </h1>
        <div className="flex items-center gap-6">
          <SearchInput />
          <Button className="bg-primaryColor text-secondaryColor hover:bg-buttonHoverColor rounded-3xl border border-secondaryColor hover:border-none w-[140px] h-[50px]">
            <HeroIcons icon="userGroup" className="size-5 mr-2" />
            Account
          </Button>
          <Button className="bg-secondaryColor text-buttonHoverColor hover:bg-buttonHoverColor rounded-3xl hover:text-secondaryColor w-[140px] h-[50px]">
            <HeroIcons icon="shoppingBag" className="size-5 mr-2" />
            $00.00 (0)
          </Button>
        </div>
      </section>
    </Container>
  );
};

export default Header;
