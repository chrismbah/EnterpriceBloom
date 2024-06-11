import { useState } from "react";
const ContentSelection = () => {
  const [selected, setSelected] = useState("");

  const handleClick = (option: string) => {
    setSelected(option);
  };
  return (
    <div className="content-selection flex items-center justify-center my-5 ">
      <button
        className={`px-7 py-2 text-sm border border-[#94A5AB] rounded-l-[32px]  font-semibold  ${
          selected === "interests"
            ? "bg-primary-500 text-white border-transparent"
            : "bg-white text-[#262520]"
        }`}
        onClick={() => handleClick("interests")}
      >
        Interests
      </button>
      <button
        className={`px-7 py-2 text-sm border-y border-[#94A5AB] font-semibold ${
          selected === "memes"
            ? "bg-primary-500 text-white border-transparent"
            : "bg-white text-[#262520] "
        }`}
        onClick={() => handleClick("memes")}
      >
        Memes
      </button>
      <button
        className={`px-7 py-2 text-sm font-semibold rounded-r-[32px] border border-[#94A5AB] ${
          selected === "hacks"
            ? "bg-primary-500 text-white border-transparent"
            : "bg-white text-[#262520] "
        }`}
        onClick={() => handleClick("hacks")}
      >
        Hacks
      </button>
    </div>
  );
};

export default ContentSelection;
