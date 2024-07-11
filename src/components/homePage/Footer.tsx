import HeroIcons from "../icons/HeroIcons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const navLink =
    "flex items-center text-secondaryColor hover:text-linkHoverColor text-poppins-semibold";

  return (
    <footer className="bg-primaryColor text-secondaryColor py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-10">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">
              Fitness Equipment And Accessories
            </h2>
            <p className="mb-4 text-[10px] md:text-[16px]">
              Sign up for our newsletter for the latest news & product releases
            </p>
            <div className="flex gap-4 items-center">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primaryColor text-linkHoverColor placeholder:text-linkHoverColor rounded-3xl border border-buttonHoverColor hover:border-secondaryColor 
                text-[10px] md:text-[16px] focus:outline-none focus:border-0 focus:ring-[.5px] w-full md:w-[300px] xl:w-[350px] h-[35px] md:h-[50px]"
              />
              <Button className="bg-secondaryColor text-buttonHoverColor hover:bg-buttonHoverColor rounded-3xl hover:text-secondaryColor md:w-[140px] poppins-medium text-[10px] md:text-[16px] md:h-[50px]">
                Submit
              </Button>
            </div>
          </div>
          <div className="mb-8 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <p className="mb-4">123 Fitness St, Wellness City, FIT 45678</p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HeroIcons
                  icon="facebook"
                  className="w-6 h-6 text-gray-400 hover:text-white"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HeroIcons
                  icon="twitter"
                  className="w-6 h-6 text-gray-400 hover:text-white"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HeroIcons
                  icon="instagram"
                  className="w-6 h-6 text-gray-400 hover:text-white"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HeroIcons
                  icon="linkedin"
                  className="w-6 h-6 text-gray-400 hover:text-white"
                />
              </a>
            </div>
          </div>
          <div className="mb-8 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Popular Categories</h2>
            <ul>
              <li className={`${navLink} mb-2`}>Rack & Cages</li>
              <li className={`${navLink} mb-2`}>Benches</li>
              <li className={`${navLink} mb-2`}>Weightlifting</li>
              <li className={`${navLink} mb-2`}>Gym Flooring</li>
              <li className={`${navLink} mb-2`}>Equipment Packages</li>
              <li className={`${navLink} mb-2`}>Clearance</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between mb-10">
          <div className="mb-8 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Order & Deliveries</h2>
            <ul>
              <li className={`${navLink} mb-2`}>Shipping</li>
              <li className={`${navLink} mb-2`}>Return & Refunds</li>
              <li className={`${navLink} mb-2`}>Local Pick-up</li>
              <li className={`${navLink} mb-2`}>Local Delivery</li>
              <li className={`${navLink} mb-2`}>Assembly Services</li>
              <li className={`${navLink} mb-2`}>Terms & Conditions</li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h2 className="text-lg font-bold mb-4">About Us</h2>
            <ul>
              <li className={`${navLink} mb-2`}>Privacy Policy</li>
              <li className={`${navLink} mb-2`}>Terms of Service</li>
              <li className={`${navLink} mb-2`}>Warranty & Service</li>
              <li className={`${navLink} mb-2`}>Customer Care</li>
              <li className={`${navLink} mb-2`}>Contact Us</li>
              <li className={`${navLink} mb-2`}>Financing</li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Resources</h2>
            <ul>
              <li className={`${navLink} mb-2`}>Blog</li>
              <li className={`${navLink} mb-2`}>Gift Cards</li>
              <li className={`${navLink} mb-2`}>Commercial Accounts</li>
              <li className={`${navLink} mb-2`}>Store Locator</li>
              <li className={`${navLink} mb-2`}>Affiliate Program</li>
              <li className={`${navLink} mb-2`}>Deals</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-borderColor pt-4">
          <div className="mb-4 md:mb-0">
            <p className="text-header1Color">Supported payment methods</p>
          </div>
          <div className="text-header1Color">
            <p>
              Copyright © {getCurrentYear()} Fitness Avenue. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
