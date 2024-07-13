import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <section className="container mx-auto p-4 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl font-bold text-primaryColor animate-bounce mb-6">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-primaryColor mb-4">
        Page Not Found
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link to="/">
        <Button className="bg-primaryColor text-white px-6 py-3 rounded-3xl hover:bg-buttonHoverColor transition-all duration-300 transform hover:scale-105">
          Go Home
        </Button>
      </Link>
    </section>
  );
};

export default NotFound;
