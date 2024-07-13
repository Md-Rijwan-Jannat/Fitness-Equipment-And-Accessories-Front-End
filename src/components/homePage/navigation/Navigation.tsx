import { motion } from "framer-motion";
import Container from "../../ui/container";
import NavigationDrawer from "./NavigationDrawer";
import NavLinks from "./NavLinks";
import Links from "./Links";

const Navigation = () => {
  const navLink =
    "flex items-center text-secondaryColor hover:text-linkHoverColor text-poppins-semibold transition-colors duration-300";

  return (
    <Container>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between w-full"
      >
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="block md:hidden"
        >
          <NavigationDrawer />
        </motion.div>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:block"
        >
          <NavLinks className="hidden md:block" navLink={navLink} />
        </motion.div>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Links />
        </motion.div>
      </motion.section>
    </Container>
  );
};

export default Navigation;
