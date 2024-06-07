import { useState } from "react";
import { interests } from "../../../data/interests";
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
    <div className="w-[90%]">
      <div className="mb-[16px] w-full ">
        <h1 className="font-bold text-3xl mb-[5px] ">Let's get started</h1>
        <p className="font-semibold text-[1.1rem] leading-[1.5rem] text-neutral-800 ">
          Pick Marketing topics you’ll like to see in your home feed
        </p>
      </div>
      <div className="w-full flex items-center gap-[10px] flex-wrap mb-6">
        {interests.map((interest) => (
          <button
            key={interest}
            onClick={() => handleSelectInterest(interest)}
            className={`w-fit text-sm py-2 px-[8px] text-center place-content-center rounded-[32px] mb-1 border font-medium ${
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
        to="/forgot-password"
        className="w-full block place-content-center font-bold bg-primary-500 text-white rounded-[8px] h-[52px] p-[8px] text-center "
      >
        Go to Feed
      </Link>
    </div>
  );
};

export default Interests;
