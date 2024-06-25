import Post from "./Post";
import feed1 from "../../../assets/img/feed/1340be3ac76cb86bdf5bf96270288558.png";
import feed2 from "../../../assets/img/feed/884637f9d2ced867495656b15215f46a.png";
import feed3 from "../../../assets/img/feed/9c89ea3face241526c9d66e1ae2e743a.png";
import feed4 from "../../../assets/img/feed/ed5a00c9a834d28d61fd51bf776bc88f.png";
import feed5 from "../../../assets/img/feed/f9d9bece6187a433d91cf0d91dbf0e23.png";

export interface IPost {
  id: number;
  postImg: string;
  postText: string;
  commentsCount: number;
  starCount: number;
}
const Posts = () => {
  const posts: IPost[] = [
    {
      id: 1,
      postImg: feed1,
      postText:
        "Just closed a major deal with a new client! Excited for the opportunities ahead. Hard work pays off. This deal took months of negotiation and countless hours of effort from our entire team.",
      commentsCount: 103,
      starCount: 901,
    },
    {
      id: 2,
      postImg: feed2,
      postText:
        "Sharing some insights on how to scale your startup. It’s all about finding the right team and leveraging your strengths. As a founder, understanding your own capabilities and surrounding yourself with complementary skills is crucial. ",
      commentsCount: 49,
      starCount: 301,
    },
    {
      id: 3,
      postImg: feed3,
      postText:
        "Attended an amazing networking event today! Made some great connections and learned a lot from fellow entrepreneurs. These events are invaluable for gaining new perspectives, sharing experiences, and finding potential collaborators. Each conversation provided unique insights into different industries and business models.",
      commentsCount: 13,
      starCount: 91,
    },
    {
      id: 4,
      postImg: feed4,
      postText:
        "It’s been a challenging week, but persistence is key. Remember, every setback is a setup for a comeback. Challenges test our resolve and help us grow stronger. This week, we faced unexpected hurdles that pushed us to innovate and adapt.",
      commentsCount: 4,
      starCount: 29,
    },
    {
      id: 5,
      postImg: feed5,
      postText:
        "Our team just launched a new product feature today! Can’t wait to hear your feedback. Check it out now! This feature has been in development for months, with numerous iterations and improvements based on user feedback. .",
      commentsCount: 108,
      starCount: 993,
    },
    {
      id: 6,
      postImg: feed3,
      postText:
        "Proud to announce that we’ve been featured in this month’s issue of Entrepreneur Magazine. Thank you for the support! #Press #Entrepreneur",
      commentsCount: 76,
      starCount: 1204,
    },
  ];

  return (
    <div className="bg-white rounded-lg py-8 px-6 flex flex-col gap-14 items-center">
      <div className=" flex flex-col gap-4">
        {posts.map((post, i) => (
          <Post key={i} {...post} />
        ))}
      </div>
      <button className=" rounded-[32px] border border-[#94A5AB] py-1.5 px-[18px] text-[#36474F] font-bold text-sm">
        View All Posts
      </button>
    </div>
  );
};

export default Posts;
