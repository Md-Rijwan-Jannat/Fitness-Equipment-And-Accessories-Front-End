import Container from "@/components/ui/container";
import SearchInput from "./SearchInput";
import AccountButton from "./AccountButton";
import CartButton from "./CartButton";
import { NavLink } from "react-router-dom";
import Logo from "@/components/ui/logo";

const Header = () => (
  <Container>
    <section className="flex flex-col items-center justify-between">
      <div className="flex items-center justify-between gap-4 w-full mb-5 md:mb-0">
        <NavLink to={"/"}>
          {" "}
          <Logo />
        </NavLink>
        <div className="flex items-center gap-2 md:gap-6">
          <div className="hidden md:block">
            <SearchInput />
          </div>
          <AccountButton />
          <CartButton />
        </div>
      </div>
      <div className="block md:hidden w-full">
        <SearchInput />
      </div>
    </section>
  </Container>
);

export default Header;
