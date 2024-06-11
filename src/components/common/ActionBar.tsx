import edit from "../../assets/icons/action_bar/edit.svg";
import { ArrowDownIcon } from "../../assets/icons/ArrowDownIcon";
import critique from "../../assets/icons/action_bar/critique.png";
import great from "../../assets/icons/action_bar/great.png";
import bad from "../../assets/icons/action_bar/bad.png";
import video from "../../assets/icons/action_bar/video.png";
const ActionBar = () => {
  return (
    <div className="w-full flex items-center justify-center gap-6 py-2.5 bg-white ">
      <div className="flex items-center gap-[10px]">
        <button className="p-px flex items-center justify-center w-[104px] h-[42px] bg-[linear-gradient(98.14deg,#549C30_7.3%,#FFCC00_112.59%)] rounded ">
          <div className="gradient-border bg-white flex items-center justify-center gap-[6px] rounded-[calc(4px-1px)] w-full h-full ">
            <img
              src={critique}
              alt="critique"
              className="w-[24px] h-[24px] object-cover "
            />
            <p className="font-semibold">Critique</p>
          </div>
        </button>
        <button className="p-px flex items-center justify-center w-[104px] h-[42px] bg-[linear-gradient(98.14deg,#549C30_7.3%,#FFCC00_112.59%)] rounded ">
          <div className="gradient-border bg-white flex items-center justify-center gap-[6px] rounded-[calc(4px-1px)] w-full h-full ">
            <img
              src={great}
              alt="great"
              className="w-[24px] h-[24px] object-cover"
            />
            <p className="font-semibold">Great</p>
          </div>
        </button>
        <button className="p-px flex items-center justify-center w-[104px] h-[42px] bg-[linear-gradient(98.34deg,#549C30_-18.86%,#DA281C_112.59%)] rounded ">
          <div className="gradient-border bg-white flex items-center justify-center gap-[6px] rounded-[calc(4px-1px)] w-full h-full ">
            <img
              src={bad}
              alt="bad"
              className="w-[24px] h-[24px] object-cover "
            />
            <p className="font-semibold">Bad</p>
          </div>
        </button>{" "}
        <button className="p-px flex items-center justify-center w-[104px] h-[42px] bg-[linear-gradient(98.14deg,#DA281C_7.3%,#FFCC00_112.59%)] rounded ">
          <div className="gradient-border bg-white flex items-center justify-center gap-[6px] rounded-[calc(4px-1px)] w-full h-full ">
            <img
              src={video}
              alt="video"
              className="w-[24px] h-[24px] object-cover "
            />
            <p className="font-semibold">Video</p>
          </div>
        </button>
        <button className="bg-[#F4F4F4] h-[44px] px-5 flex items-center justify-center gap-[6px] rounded">
          <p className="font-semibold text-black ">Expand</p>
          <ArrowDownIcon className="w-4 h-4 text-[#1C1B1F] " />
        </button>
      </div>
      <button
        className="py-3 px-4 rounded-[8px] bg-primary-500 text-white 
        flex items-center justify-center gap-[6px] "
      >
        <img src={edit} alt="share" className="w-4 h-4 " />
        <p className="font-semibold ">Share Expertise</p>
      </button>
    </div>
  );
};

export default ActionBar;
