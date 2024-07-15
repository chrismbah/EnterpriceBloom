import ContentSelection from "./components/ContentSelection";
import SideNavbar from "../../components/common/SideNavbar";
import PopularTags from "./components/PopularTags";
import UtilityLinks from "./components/UtilityLinks";
import NewsFeed from "./components/NewsFeed";
import SponsoredPosts from "./components/SponsoredPosts";
import Buzzcussions from "./components/Buzzcussions";
import TopSearches from "./components/TopSearches";
import BuzzChallenges from "./components/BuzzChallenges";
import CreateAd from "./components/CreateAd";
import HomeFeed from "./HomeFeed";
import { useState } from "react";
const HomePage = () => {
  const [selectedContent, setSelectedContent] = useState<
    "interests" | "memes" | "hacks" | null
  >(null);

  const handleContentSelection = (option: "interests" | "memes" | "hacks") => {
    setSelectedContent(option);
  };

  return (
    <>
      <div className="sticky top-[159px] z-[2] flex items-center justify-center ">
        <ContentSelection onSelect={handleContentSelection} />
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
          <div className="home_feed w-full items-center flex flex-col gap-4 mb-5">
            <HomeFeed content={selectedContent} />
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
