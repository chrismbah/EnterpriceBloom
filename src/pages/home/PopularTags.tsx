import { Link } from "react-router-dom";

const PopularTags = () => {
  const tags = [
    {
      id: 1,
      tag: "#Technology4business",
      posts: 44000,
      link: "/",
    },
    {
      id: 1,
      tag: "#SEOCourses",
      posts: 91,
      link: "/",
    },
    {
      id: 1,
      tag: "#MarketTrends",
      posts: 511,
      link: "/",
    },
    {
      id: 1,
      tag: "#LuxuryMarketing",
      posts: 291,
      link: "/",
    },
    {
      id: 1,
      tag: "#AITechnology",
      posts: 51,
      link: "/",
    },
    {
      id: 1,
      tag: "#Marketing",
      posts: 90,
      link: "/",
    },
  ];
  return (
    <div className="bg-white w-full rounded-lg py-8 px-7">
      <h1 className="text-[#36474F] mb-5 font-bold ">Popular Tags Now</h1>
      <div className="w-full flex flex-col gap-[22px] ">
        {tags.map(({ tag, posts, link }, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="flex flex-col gap-0.5">
              <h1 className="font-bold text-black">{tag}</h1>
              <p className="text-[#576B74] text-xs font-semibold">
                {posts.toLocaleString()} Posts
              </p>
            </div>
            <Link
              to={link}
              className="bg-primary-500 py-1.5 px-3 text-white rounded-[32px] w-fit text-xs "
            >
              Explore
            </Link>
          </div>
        ))}
        <Link to="/" className="text-sm text-primary-500 font-bold ">Show More</Link>
      </div>
    </div>
  );
};

export default PopularTags;
