// src/components/Category.js

import HeroIcons from "@/components/icons/HeroIcons";
import { NavLink } from "react-router-dom";

type TCategoryProps = {
  category: string;
  link: string;
};

const Category = ({ category, link }: TCategoryProps) => {
  return (
    <NavLink
      to={link}
      className="px-4 py-1 border border-primaryColor rounded-3xl shadow-md hover:bg-primaryColor hover:text-white transition-colors duration-500 flex gap-2"
    >
      <HeroIcons icon="tag" className="size-4" />
      {category}
    </NavLink>
  );
};

export default Category;
