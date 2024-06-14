import { Link } from "react-router-dom";
import news_feed4 from "../../assets/img/feed/1340be3ac76cb86bdf5bf96270288558.png";
import news_feed3 from "../../assets/img/feed/9c89ea3face241526c9d66e1ae2e743a.png";
import news_feed1 from "../../assets/img/feed/ed5a00c9a834d28d61fd51bf776bc88f.png";
import news_feed2 from "../../assets/img/feed/f9d9bece6187a433d91cf0d91dbf0e23.png";
const NewsFeed = () => {
  const MAX_POST_LENGTH = 80;
  const feed = [
    {
      id: 1,
      img: news_feed1,
      title: "Mastering the Market",
      post: "Entrepreneurs must understand their audience. Effective marketing strategies, like targeted ads and content marketing, ensure sustained growth.",
    },
    {
      id: 2,
      img: news_feed2,
      title: "Innovate to Succeed",
      post: "Innovation is key for entrepreneurs. By developing unique products and leveraging digital marketing, businesses can outpace competition.",
    },
    {
      id: 3,
      img: news_feed3,
      title: "Building Brand Loyalty",
      post: "Creating strong brand loyalty involves consistent engagement. Entrepreneurs can use social media to connect and build lasting relationships.",
    },
    {
      id: 4,
      img: news_feed4,
      title: "Networking for Growth",
      post: "Entrepreneurs grow through networking. By attending events and collaborating, they can expand their reach and discover new opportunities.",
    },
    {
      id: 5,
      img: news_feed4,
      title: "Data-Driven Decisions",
      post: "Data is crucial in entrepreneurship. Analyzing market trends and consumer behavior helps in making informed marketing decisions.",
    },
  ];

  return (
    <div className="bg-white py-6 px-4 rounded-lg w-full">
      <div className="w-full flex justify-between items-center mb-5 ">
        <h1 className="text-lg font-bold text-black ">News Feed</h1>
        <Link to="/" className="font-bold text-primary-500 text-sm ">
          Read More
        </Link>
      </div>
      <div className="flex flex-col gap-5 w-full ">
        {feed.map(({ id, img, title, post }) => (
          <div
            key={id}
            className="w-full flex items-center justify-between gap-1.5"
          >
            <img
              src={img}
              alt=""
              className="w-[108px] h-[76px] rounded-lg object-cover "
            />
            <div className="flex gap-0.5 flex-col ">
              <h1 className="font-bold text-[13px]">{title}</h1>
              <p className="text-[#36474F] font-medium text-[10px] leading-[14px] ">
                {post.length > MAX_POST_LENGTH ? (
                  <>
                    {post.substring(0, MAX_POST_LENGTH)}
                    ...
                    {/* <Link to="#" className="text-primary-500 underline">
                      See More
                    </Link> */}
                  </>
                ) : (
                  post
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
