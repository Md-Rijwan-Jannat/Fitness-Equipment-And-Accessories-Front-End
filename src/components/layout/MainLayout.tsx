import { Outlet } from "react-router-dom";
import Container from "../ui/container";
import Banner from "../homePage/Banner";
import Header from "../homePage/Header";
import Navigation from "../homePage/Navigation";
import Footer from "../homePage/Footer";

const MainLayout = () => {
  return (
    <div>
      <header className="flex items-center bg-primaryColor h-[70px] md:h-[120px] border-b border-buttonHoverColor">
        <Header />
      </header>
      <nav className="flex items-center bg-primaryColor h-[50px] md:h-[80px]">
        <Navigation />
      </nav>
      <Banner />
      <Container>
        <Outlet />
      </Container>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
