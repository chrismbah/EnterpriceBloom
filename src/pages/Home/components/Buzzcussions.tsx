import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import search from "../../../assets/icons/home/search.svg";

const Buzzcussions = () => {
  const discussions = [
    {
      id: 1,
      title:
        "Harnessing social media for brand growth. Tips to engage followers and increase reach.",
      comments: 100,
    },
    {
      id: 2,
      title:
        "Effective content marketing strategies. Creating value and building trust with your audience.",
      comments: 82,
    },
    {
      id: 3,
      title:
        "Innovative approaches to customer acquisition. Techniques to attract and retain clients.",
      comments: 30,
    },
    {
      id: 4,
      title:
        "Using data analytics to drive business decisions. Key metrics for marketing success.",
      comments: 49,
    },
    {
      id: 5,
      title:
        "Building a strong personal brand. Establishing credibility and thought leadership.",
      comments: 10,
    },
  ];
  return (
    <div className="w-full bg-white rounded-lg py-6 px-4 ">
      <div className="flex flex-col gap-6 mb-6">
        <div className="search flex flex-col gap-4 ">
          <div className="flex flex-col ">
            <h1 className="text-[#36474F] font-bold ">#Buzzcussions</h1>
            <span className="text-xs text-[#576B74] font-semibold ">
              Explore what the world is searching for right now
            </span>
          </div>
          <div className="relative z-[1]">
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500">
              <ReactSVG
                src={search}
                beforeInjection={(svg) => {
                  svg.setAttribute("class", "w-[18px] h-[18px]");
                }}
              />
            </div>
            <input
              placeholder="Search Here"
              type="search"
              className="h-[48px] w-full text-xs font-medium caret-[#576B74] rounded bg-[#F4F4F4] pl-[52px] pr-4
                focus:outline-none focus:border-none placeholder:text-[#808C91] placeholder:text-xs placeholder:font-medium appearance-none"
            />
          </div>
        </div>
        <div className="discussions w-full flex flex-col gap-4">
          {discussions.map(({ title, comments, id }) => (
            <div key={id} className="w-full flex flex-col gap-0.5">
              <h1 className="font-bold text-sm ">{title}</h1>
              <p className="text-[#36474F] font-medium text-[10px] leading-[14px]  ">
                {comments} comments
              </p>
            </div>
          ))}
        </div>
      </div>
      <Link to="/" className="text-xs text-primary-500 font-bold ">
        Show More
      </Link>
    </div>
  );
};

export default Buzzcussions;
