import ContentSelection from "./ContentSelection";
import SideNavbar from "../../components/common/SideNavbar";
import PopularTags from "./PopularTags";
import UtilityLinks from "./UtilityLinks";
import NewsFeed from "./NewsFeed";
import SponsoredPosts from "./SponsoredPosts";
import Buzzcussions from "./Buzzcussions";
import TopSearches from "./TopSearches";
import BuzzChallenges from "./BuzzChallenges";
import CreateAd from "./CreateAd";
import HomeFeed from "./HomeFeed";

const HomePage = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-5 ">
        <ContentSelection />
      </div>
      <div className="flex gap-4 mt-5">
        <div className="basis-[25%]">
          <div className="w-full items-center flex flex-col gap-4 mb-5">
            <SideNavbar />
            <PopularTags />
            <UtilityLinks />
          </div>
        </div>
        <div className="basis-1/2">
          <div className="w-full items-center flex flex-col gap-4 mb-5">
            <HomeFeed />
          </div>
        </div>
        <div className="basis-[28%]">
          <div className="w-full items-center flex flex-col gap-4 mb-5">
            <NewsFeed />
            <SponsoredPosts />
            <Buzzcussions />
            <TopSearches />
            <SponsoredPosts />
            <SponsoredPosts />
            <BuzzChallenges />
            <CreateAd />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
