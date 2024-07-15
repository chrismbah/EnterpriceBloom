import { Link } from "react-router-dom";
import feed1 from "../../../assets/img/feed/1340be3ac76cb86bdf5bf96270288558.png";
import feed2 from "../../../assets/img/feed/ed5a00c9a834d28d61fd51bf776bc88f.png";
import feed3 from "../../../assets/img/feed/9c89ea3face241526c9d66e1ae2e743a.png";
import feed4 from "../../../assets/img/feed/f9d9bece6187a433d91cf0d91dbf0e23.png";
const TopSearches = () => {
  const searches = [
    {
      id: 1,
      title:
        "Leveraging digital tools for startup success. Embracing new markets",
      time: "15 hours ago",
      img: feed1,
    },
    {
      id: 2,
      title: "Effective networking strategies. Expanding your business network",
      time: "15 hours ago",
      img: feed2,
    },
    {
      id: 3,
      title: "Creating a customer-centric brand. Building trust and loyalty",
      time: "15 hours ago",
      img: feed3,
    },
    {
      id: 4,
      title: "Harnessing data for better decision-making. Strategic insights",
      time: "15 hours ago",
      img: feed4,
    },
    {
      id: 5,
      title: "Adapting to market changes. Staying ahead in competitive times",
      time: "15 hours ago",
      img: feed4,
    },
  ];
  return (
    <div className="bg-white rounded-lg py-6 px-4 w-full">
      <div className="flex flex-col mb-6">
        <h1 className="text-[#36474F] font-bold ">Top Searches Right Now</h1>
        <span className="text-xs text-[#576B74] font-semibold ">
          Explore what the world is searching for right now
        </span>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 ">
          {searches.map(({ id, title, time, img }) => (
            <div
              key={id}
              className="w-full flex items-center gap-1.5 p-3 border border-[#D6DADB] rounded-tr-lg rounded-bl-lg rounded-tl-[32px] rounded-br-[32px] "
            >
              <img
                src={img}
                alt=""
                className="w-[112px] h-[72px] object-cover rounded-lg "
              />
              <div className="flex flex-col gap-1">
                <h1 className="text-xs font-bold ">{title}</h1>
                <span className="text-[#36474F] text-[10px] leading-[14px] ">
                  {time}{" "}
                </span>
              </div>
            </div>
          ))}
        </div>
        <Link to="/" className="text-xs text-primary-500 font-bold">
          +2500 More
        </Link>
      </div>
    </div>
  );
};

export default TopSearches;
