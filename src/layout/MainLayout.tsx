import Navbar from "../components/common/Navbar";
import ActionBar from "../components/common/ActionBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="">
      <div className="sticky top-0 z-10 ">
        <Navbar />
        <ActionBar />
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
