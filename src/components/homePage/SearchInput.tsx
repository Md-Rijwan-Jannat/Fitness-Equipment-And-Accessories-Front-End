import { Input } from "../ui/input";

const SearchInput = () => {
  return (
    <Input
      className="bg-primaryColor text-linkHoverColor placeholder:text-linkHoverColor rounded-3xl border border-buttonHoverColor hover:border-secondaryColor focus:outline-none focus:border-0 focus:ring-[.5px] w-full md:w-[300px] xl:w-[350px] h-[50px]"
      type="search"
      placeholder="Search for..."
    />
  );
};

export default SearchInput;
