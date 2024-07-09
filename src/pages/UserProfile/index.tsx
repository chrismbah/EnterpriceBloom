import NewsFeed from "../Home/NewsFeed";
import CreateAd from "../Home/CreateAd";
import { Outlet } from "react-router-dom";
const UserProfilePage = () => {
  return (
    <div className="flex gap-10 h-[77vh] overflow-hidden">
      <div className="basis-3/4 my-5 h-[73vh] overflow-y-scroll hide-scrollbar">
        <Outlet />
      </div>
      <div className="basis-1/4 mt-5 h-[73vh] overflow-y-scroll hide-scrollbar ">
        <div className="w-full items-center flex flex-col gap-4 mb-5">
          <NewsFeed />
          <CreateAd />
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
