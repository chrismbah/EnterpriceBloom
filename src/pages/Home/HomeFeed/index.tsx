import HacksFeed from "./Hacks";
import InterestsFeed from "./Interests";
import MemesFeed from "./Memes";
import MainFeed from "./MainFeed";

const HomeFeed = ({
  content,
}: {
  content: "interests" | "memes" | "hacks" | null;
}) => {
  let FeedComponent: () => JSX.Element;
  switch (content) {
    case "interests":
      FeedComponent = InterestsFeed;
      break;
    case "memes":
      FeedComponent = MemesFeed;
      break;
    case "hacks":
      FeedComponent = HacksFeed;
      break;
    default:
      FeedComponent = MainFeed;
  }
  return <FeedComponent />;
};

export default HomeFeed;
