import { Outlet } from "react-router-dom";
import Header from "../homePage/header/Header";
import Navigation from "../homePage/navigation/Navigation";
import Footer from "../homePage/Footer";

const MainLayout = () => {
  return (
    <div>
      <header className="flex items-center w-full bg-primaryColor h-full py-4 md:h-[120px] border-b border-buttonHoverColor">
        <Header />
      </header>
      <nav className="flex items-center bg-primaryColor h-[70px] md:h-[80px]">
        <Navigation />
      </nav>
      <Outlet />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
