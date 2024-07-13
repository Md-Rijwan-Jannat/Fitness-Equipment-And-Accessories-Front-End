import { motion } from "framer-motion";
import HeroIcons from "../icons/HeroIcons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Logo from "../ui/logo";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const navLink =
    "flex items-center text-secondaryColor hover:text-linkHoverColor text-poppins-semibold";

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-primaryColor text-secondaryColor py-10"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between mb-10"
        >
          <div className="mb-8 md:mb-0">
            <Logo />
            <p className="mb-4 text-[10px] md:text-[16px] mt-3">
              Sign up for our newsletter for the latest news & product releases
            </p>
            <div className="flex gap-4 items-center">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primaryColor text-linkHoverColor placeholder:text-linkHoverColor rounded-3xl border border-buttonHoverColor hover:border-secondaryColor 
                text-[10px] md:text-[16px] focus:outline-none focus:border-0 focus:ring-[.5px] w-full md:w-[300px] xl:w-[350px] h-[35px] md:h-[50px]"
              />
              <Button className="bg-secondaryColor text-buttonHoverColor hover:bg-buttonHoverColor rounded-3xl hover:text-secondaryColor md:w-[140px] poppins-medium text-[10px] md:text-[16px] md:h-[50px] transition-colors duration-500">
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
              {[
                "Rack & Cages",
                "Benches",
                "Weightlifting",
                "Gym Flooring",
                "Equipment Packages",
                "Clearance",
              ].map((category, index) => (
                <motion.li
                  key={category}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`${navLink} mb-2`}
                >
                  {category}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between mb-10"
        >
          <div className="mb-8 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Order & Deliveries</h2>
            <ul>
              {[
                "Shipping",
                "Return & Refunds",
                "Local Pick-up",
                "Local Delivery",
                "Assembly Services",
                "Terms & Conditions",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`${navLink} mb-2`}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h2 className="text-lg font-bold mb-4">About Us</h2>
            <ul>
              {[
                "Privacy Policy",
                "Terms of Service",
                "Warranty & Service",
                "Customer Care",
                "Contact Us",
                "Financing",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`${navLink} mb-2`}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Resources</h2>
            <ul>
              {[
                "Blog",
                "Gift Cards",
                "Commercial Accounts",
                "Store Locator",
                "Affiliate Program",
                "Deals",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`${navLink} mb-2`}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center border-t border-borderColor pt-4"
        >
          <div className="mb-4 md:mb-0">
            <p className="text-header1Color">Supported payment methods</p>
          </div>
          <div className="text-header1Color">
            <p>
              Copyright © {getCurrentYear()} Fitness Avenue. All rights
              reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
