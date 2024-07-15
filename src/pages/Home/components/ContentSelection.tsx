import { useState, useEffect } from "react";
const ContentSelection = ({
  onSelect,
}: {
  onSelect: (payload: "interests" | "memes" | "hacks") => void;
}) => {

  const [selected, setSelected] = useState("");

  const handleClick = (option: "interests" | "memes" | "hacks") => {
    setSelected(option);
    onSelect(option);
  };
  useEffect(() => {
    if (selected) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selected]);
  return (
    <div className="content-selection w-full flex items-center justify-center py-5 bg-[#f5f5f5] ">
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
