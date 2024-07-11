import { TBreadcrumbProps } from "@/types";
import { NavLink } from "react-router-dom";

const Breadcrumb = ({ category, productName }: TBreadcrumbProps) => {
  return (
    <nav className="my-8 text-gray-600">
      <NavLink to="/" className="hover:text-primaryColor">
        Home
      </NavLink>
      {" / "}
      <NavLink to="/products" className="hover:text-primaryColor">
        Products
      </NavLink>
      {" / "}
      <NavLink
        to={`/products?category=${category}`}
        className="hover:text-primaryColor"
      >
        {category}
      </NavLink>
      {" / "}
      <span className="text-primaryColor">{productName}</span>
    </nav>
  );
};

export default Breadcrumb;
