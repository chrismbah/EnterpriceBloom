import { hacks } from "../../../../data/hacks";
import { Fragment } from "react";
import Post from "../MainFeed/Post";

const HacksFeed = () => {
  return (
    <>
      {hacks.map((data, index) => (
        <Fragment key={index}>
          <Post {...data} />
        </Fragment>
      ))}
    </>
  );
};

export default HacksFeed;
