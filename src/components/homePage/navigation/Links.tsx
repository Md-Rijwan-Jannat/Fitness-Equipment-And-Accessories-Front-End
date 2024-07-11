import HeroIcons from "@/components/icons/HeroIcons";
import { NavLink } from "react-router-dom";

const Links = () => {
  const navLink =
    "flex items-center text-secondaryColor hover:text-linkHoverColor text-poppins-semibold";

  return (
    <ul className="flex items-center gap-10">
      <li>
        <NavLink className={`${navLink} text-[10px]`} to={"#"}>
          <HeroIcons icon="dollar" className="size-5 mr-2" />
          Cash On Delivery
        </NavLink>
      </li>
      <li>
        <NavLink className={`${navLink} text-[10px]`} to={"#"}>
          <HeroIcons icon="dollar" className="size-5 mr-2" />
          Banking Methods
        </NavLink>
      </li>
    </ul>
  );
};

export default Links;
