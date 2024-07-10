import { NavLink } from "react-router-dom";
import Container from "../ui/container";
import HeroIcons from "../icons/HeroIcons";

const Navigation = () => {
  const navLink =
    "flex items-center text-secondaryColor hover:text-linkHoverColor text-poppins-semibold";
  return (
    <Container>
      <section className="flex items-center justify-between">
        <ul className="flex items-center gap-10">
          <li>
            <NavLink className={navLink} to={"#"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={navLink} to={"#"}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink className={navLink} to={"#"}>
              Products Management
            </NavLink>
          </li>
          <li>
            <NavLink className={navLink} to={"#"}>
              About Us
            </NavLink>
          </li>
        </ul>
        <ul className="flex items-center gap-10">
          <li>
            <NavLink className={navLink} to={"#"}>
              <HeroIcons icon="dollar" className="size-5 mr-2" />
              Cash On Delivery
            </NavLink>
          </li>
          <li>
            <NavLink className={navLink} to={"#"}>
              <HeroIcons icon="dollar" className="size-5 mr-2" />
              Banking Methods
            </NavLink>
          </li>
        </ul>
      </section>
    </Container>
  );
};

export default Navigation;
