import Navbar from "../components/common/Navbar";
import ActionBar from "../components/common/ActionBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="max-w-screen-2xl mx-auto ">
        <Navbar />
        <ActionBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
