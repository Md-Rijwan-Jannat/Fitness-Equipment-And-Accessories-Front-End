import MainLayout from "@/components/layout/MainLayout";
import AboutUs from "@/pages/AboutUs/AboutUs";
import Cart from "@/pages/Cart/Cart";
import Checkout from "@/pages/Checkout/Checkout";
import Home from "@/pages/Home/Home";
import ProductDetails from "@/pages/ProductDetails/ProductDetails";
import ProductManagement from "@/pages/ProductManagement/ProductManagement";
import { createBrowserRouter } from "react-router-dom";
import Products from "@/pages/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product-management",
        element: <ProductManagement />,
      },
      {
        path: "/product-details",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
]);

export default router;
