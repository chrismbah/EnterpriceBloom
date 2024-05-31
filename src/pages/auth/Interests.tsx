import { useState } from "react";
import { interests } from "../../data/interests";
import { Link } from "react-router-dom";
const Interests = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const handleSelectInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(
        selectedInterests.filter((item: string) => item !== interest)
      );
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };
  return (
    <div className="w-[996px]">
      <div className="mb-[40px] w-full ">
        <h1 className="font-bold text-[48px] leading-[58.09px] mb-[10px] ">
          Create your account
        </h1>
        <p className="font-semibold text-[24px] leading-[36px] text-[#36474F] ">
          Pick Marketing topics you’ll like to see in your home feed
        </p>
      </div>
      <div className="w-full flex items-center gap-[10px] flex-wrap mb-14">
        {interests.map((interest) => (
          <button
            key={interest}
            onClick={() => handleSelectInterest(interest)}
            className={`w-fit py-3 px-[20px] text-center place-content-center rounded-[32px] mb-6 border font-medium text-[24px] leading-[29.05px] ${
              selectedInterests.includes(interest)
                ? "bg-primary-500 text-white border-primary-500"
                : "bg-white text-[#576B74] border-[#576B74]"
            } hover:text-white hover:bg-primary-500 hover:border-primary-500 transition duration-200 ease-in-out `}
          >
            {interest}
          </button>
        ))}
      </div>
      <Link
        to="/"
        className="block place-content-center text-center w-full bg-primary-500 h-20 p-[10px] rounded-[8px] text-white font-bold text-[24px] leading-[29.05px] "
      >
        Go to Feed
      </Link>
    </div>
  );
};

export default Interests;
