import FeaturedExperts from "./FeaturedExperts";
import Post from "./Post";
import InterestGroups from "./InterestGroups";
import { posts } from "../../../data/posts";
import { Fragment } from "react";

const HomeFeed = () => {
  const midpoint = Math.floor(posts.length / 2);
  return (
    <div className="w-full flex flex-col gap-5">
      <FeaturedExperts />
      {posts.map((data, index) => (
        <Fragment key={index}>
          <Post {...data} />
          {index === midpoint - 1 && <InterestGroups />}
        </Fragment>
      ))}
    </div>
  );
};

export default HomeFeed;
