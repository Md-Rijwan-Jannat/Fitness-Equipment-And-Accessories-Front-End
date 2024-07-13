import { motion } from "framer-motion";
import Container from "@/components/ui/container";
import SearchInput from "./SearchInput";
import AccountButton from "./AccountButton";
import CartButton from "./CartButton";
import { NavLink } from "react-router-dom";
import Logo from "@/components/ui/logo";

const Header = () => (
  <Container>
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-between"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center justify-between gap-4 w-full mb-5 md:mb-0"
      >
        <NavLink to={"/"}>
          <Logo />
        </NavLink>
        <div className="flex items-center gap-2 md:gap-6">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <SearchInput />
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <AccountButton />
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <CartButton />
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="block md:hidden w-full"
      >
        <SearchInput />
      </motion.div>
    </motion.section>
  </Container>
);

export default Header;
