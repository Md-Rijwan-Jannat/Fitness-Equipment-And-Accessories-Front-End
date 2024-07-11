import Container from "../../ui/container";
import NavigationDrawer from "./NavigationDrawer";
import NavLinks from "./NavLinks";
import Links from "./Links";

const Navigation = () => {
  const navLink =
    "flex items-center text-secondaryColor hover:text-linkHoverColor text-poppins-semibold transition-colors duration-300";

  return (
    <Container>
      <section className="flex items-center justify-between">
        <NavigationDrawer />
        <NavLinks className="hidden md:block" navLink={navLink} />
        <Links />
      </section>
    </Container>
  );
};

export default Navigation;
