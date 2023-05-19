import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="md:min-h-[calc(100vh-341px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
