const Category = ({ category }: { category: string }) => {
  return (
    <div
      key={category}
      className="px-4 py-1 border border-primaryColor rounded-3xl shadow-md hover:bg-primaryColor hover:text-white transition-colors duration-500"
    >
      <h2 className="poppins-regular text-[14px]">{category}</h2>
    </div>
  );
};

export default Category;
