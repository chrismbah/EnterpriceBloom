import { useState } from "react";
import challenge1 from "../../../assets/svg/home/challenge1.svg";
import challenge2 from "../../../assets/svg/home/challenge2.svg";
import challenge3 from "../../../assets/svg/home/challenge3.svg";
import challenge4 from "../../../assets/svg/home/challenge4.svg";
import challenge5 from "../../../assets/svg/home/challenge5.svg";
import { Link } from "react-router-dom";
const BuzzChallenges = () => {
  const [selectOption, setSelectOption] = useState<"open" | "completed">(
    "open"
  );
  const challenges = [
    {
      id: 1,
      title: "Social Media Campaign",
      desc: "Launch a creative social media campaign. Engage followers with interactive content.",
      img: challenge1,
    },
    {
      id: 2,
      title: "Product Market Fit",
      desc: "Identify your target market. Adjust your product to meet customer needs effectively.",
      img: challenge2,
    },
    {
      id: 3,
      title: "Branding Strategy",
      desc: "Develop a consistent branding strategy. Create a unique and recognizable brand identity.",
      img: challenge3,
    },
    {
      id: 4,
      title: "Customer Feedback",
      desc: "Collect and analyze customer feedback. Implement changes based on insights gathered.",
      img: challenge4,
    },
    {
      id: 5,
      title: "SEO Optimization",
      desc: "Improve your website's SEO. Increase visibility and attract more organic traffic.",
      img: challenge5,
    },
  ];
  return (
    <div className="bg-white rounded-lg py-6 px-4 w-full">
      <div className="flex flex-col gap-3 mb-4">
        <h1 className="text-[#36474F] font-bold ">#Buzz Challenges</h1>
        <div className="flex items-center w-full">
          <button
            onClick={() => setSelectOption("open")}
            className={`w-full rounded-lg py-3 px-4 text-xs font-semibold ${
              selectOption === "open"
                ? "bg-[#F4F4F4] text-black"
                : "bg-white text-[#36474F]"
            }`}
          >
            Open for Conquest
          </button>
          <button
            onClick={() => setSelectOption("completed")}
            className={`w-full rounded-lg py-3 px-4 text-xs font-semibold ${
              selectOption === "completed"
                ? "bg-[#F4F4F4] text-black"
                : "bg-white text-[#36474F]"
            }`}
          >
            Completed
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {challenges.map(({ id, title, desc, img }) => (
          <div key={id} className="flex justify-between items-center gap-6">
            <div className="flex flex-col gap-0.5">
              <h1 className="text-sm font-bold text-black">{title}</h1>
              <p className="text-[#36474F] text-xs font-medium ">{desc}</p>
            </div>
            <img src={img} alt="" />
          </div>
        ))}
        <Link to="/" className="text-xs text-primary-500 font-bold ">
          Show More
        </Link>
      </div>
    </div>
  );
};

export default BuzzChallenges;
