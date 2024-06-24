import NewsFeed from "../Home/NewsFeed";
import CreateAd from "../Home/CreateAd";
import ProfileInfo from "./ProfileInfo";
import ProfileContent from "./ProfileContent";
const ProfilePage = () => {
  return (
    <div className="flex gap-10">
      <div className="basis-3/4 mt-5">
        <ProfileInfo />
        <ProfileContent />
      </div>
      <div className="basis-1/4 mt-5">
        <div className="w-full items-center flex flex-col gap-4 mb-5">
          <NewsFeed />
          <CreateAd />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
