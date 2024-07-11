import HeroIcons from "../icons/HeroIcons";
import { Button } from "../ui/button";
import SectionTittle from "../ui/sectionTittle";

const CustomerReviews = () => {
  const star = (
    <>
      <HeroIcons icon="star" className="w-6 h-6 text-yellow-400" />
      <HeroIcons icon="star" className="w-6 h-6 text-yellow-400" />
      <HeroIcons icon="star" className="w-6 h-6 text-yellow-400" />
      <HeroIcons icon="star" className="w-6 h-6 text-yellow-400" />
      <HeroIcons icon="star" className="w-6 h-6 text-yellow-400" />
    </>
  );

  return (
    <section className="bg-white p-2 rounded-lg shadow-md mt-3">
      <SectionTittle tittle="Customer Review" />
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div className="flex items-center mb-4">
          {star}
          <span className="ml-2 text-xl font-semibold">5.0</span>
          <span className="ml-2 text-gray-500">(1 review)</span>
        </div>
        <div className="text-gray-700 mb-4">
          <p className="flex items-center gap-1 w-[200px] justify-between">
            <span className="w-[150px] h-2 bg-yellow-300 rounded-full"></span>
            <span className="whitespace-nowrap">100% (5)</span>
          </p>
          <p className="flex items-center gap-1 w-[200px] justify-between">
            <span className="w-[100px] h-2 bg-yellow-300 rounded-full"></span>
            <span className="whitespace-nowrap"> 80% (1)</span>
          </p>
          <p className="flex items-center gap-1 w-[200px] justify-between">
            <span className="w-[100px] h-2 bg-yellow-300 rounded-full"></span>
            <span className="whitespace-nowrap"> 80% (1)</span>
          </p>
          <p className="flex items-center gap-1 w-[200px] justify-between">
            <span className="w-[100px] h-2 bg-yellow-300 rounded-full"></span>
            <span className="whitespace-nowrap"> 80% (1)</span>
          </p>
          <p className="flex items-center gap-1 w-[200px] justify-between">
            <span className="w-[100px] h-2 bg-yellow-300 rounded-full"></span>
            <span className="whitespace-nowrap"> 80% (1)</span>
          </p>
        </div>
        <div className="flex gap-4 mb-6">
          <Button
            className="bg-secondaryColor text-primaryColor 
                hover:text-secondaryColor hover:bg-buttonHoverColor rounded-3xl border border-borderColor hover:border-none md:w-[130px] poppins-medium text-[10px] md:text-[16px] md:h-[35px] poppins-regular transition-colors duration-500"
          >
            Write a review
          </Button>
          <Button
            className="bg-primaryColor text-secondaryColor 
                hover:text-secondaryColor hover:bg-buttonHoverColor rounded-3xl hover:border-none md:w-[130px] poppins-medium text-[10px] md:text-[16px] md:h-[35px] poppins-regular transition-colors duration-500"
          >
            Ask a question
          </Button>
        </div>
      </div>
      <div className="border-t border-gray-300"></div>
      <div className="text-gray-600">
        <p className="flex items-center gap-1">Only Pictures</p>
        <p className="flex items-center gap-1">Reviews (0) Questions (0)</p>
        <p className="flex items-center gap-1">There are no reviews yet.</p>
      </div>
    </section>
  );
};

export default CustomerReviews;
