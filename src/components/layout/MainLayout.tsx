import { Outlet } from "react-router-dom";
import Container from "../ui/container";

const MainLayout = () => {
  return (
    <Container>
      <header>{/* Your header content */}</header>
      <main>
        <Outlet />
      </main>
      <footer>{/* Your footer content */}</footer>
    </Container>
  );
};

export default MainLayout;
