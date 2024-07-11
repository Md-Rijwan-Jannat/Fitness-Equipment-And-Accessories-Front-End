import { NavLink } from "react-router-dom";

type TNavLinksProps = {
  navLink: string;
  className: string;
};

const NavLinks = ({ navLink, className }: TNavLinksProps) => {
  return (
    <div className={className}>
      {" "}
      <ul className="flex flex-wrap md:flex-row items-center gap-5 md:gap-10">
        <li>
          <NavLink className={navLink} to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={navLink} to={"/products"}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink className={navLink} to={"/product-management"}>
            Products Management
          </NavLink>
        </li>
        <li>
          <NavLink className={navLink} to={"/about-us"}>
            About Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
