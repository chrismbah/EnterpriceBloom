import { memes } from "../../../../data/memes";
import { Fragment } from "react";
import Post from "../MainFeed/Post";
import InterestGroups from "../components/InterestGroups";
const MemesFeed = () => {
  const midpoint = Math.floor(memes.length / 2);
  return (
    <>
      {memes.map((data, index) => (
        <Fragment key={index}>
          <Post {...data} />
          {index === midpoint - 1 && <InterestGroups />}
        </Fragment>
      ))}
    </>
  );
};

export default MemesFeed;
