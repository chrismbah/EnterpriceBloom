import Navbar from "../components/common/Navbar";
import ActionBar from "../components/common/ActionBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="sticky top-0 z-10">
        <Navbar />
        <ActionBar />
      </div>
      <div className="bg-[#f5f5f5] min-h-full">
        <div className="max-w-screen-xl mx-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
