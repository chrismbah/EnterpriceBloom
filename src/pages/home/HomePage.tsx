import ContentSelection from "./ContentSelection";
import SideNavbar from "../../components/common/SideNavbar";
import PopularTags from "./PopularTags";
import UtilityLinks from "./UtilityLinks";
import NewsFeed from "./NewsFeed";
import SponsoredPosts from "./SponsoredPosts";

const HomePage = () => {
  return (
    <div className="w-full bg-[#F4F4F4]">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-center">
          <ContentSelection />
        </div>
        <div className="flex gap-4">
          <div className="basis-[25%]">
            <div className="w-full items-center flex flex-col gap-4 mb-5">
              <SideNavbar />
              <PopularTags />
              <UtilityLinks />
            </div>
          </div>
          <div className="basis-1/2">
            <div className="w-full items-center flex flex-col gap-4 mb-5">
              {/* <NewsFeed /> 
              <PopularTags />
              <UtilityLinks /> */}
              Hi!
            </div>
          </div>
          <div className="basis-[28%]">
            <div className="w-full items-center flex flex-col gap-4 mb-5">
              <NewsFeed />
              <SponsoredPosts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
