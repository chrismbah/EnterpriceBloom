import { useEffect } from "react";
import { ReactSVG } from "react-svg";
import userImg from "../../../../assets/img/feed/user.png";
import arrowDown from "../../../../assets/icons/home/feed/arrowDropdown.svg";
import cancel from "../../../../assets/icons/home/feed/cancel_black.svg";
import publicIcon from "../../../../assets/icons/home/feed/public.svg";
import emoji from "../../../../assets/icons/home/feed/emoji.svg";
import gallery from "../../../../assets/icons/home/feed/gallery.svg";
import add from "../../../../assets/icons/home/feed/add_grey.svg";
interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export const CreatePostModal = ({ isOpen, onClose }: CreatePostModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);
  if (!isOpen) return null;
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[45%] max-w-[980px] rounded-[20px] overflow-hidden px-6 py-8"
      >
        <div className="w-full flex justify-between items-start mb-8">
          <div className="flex items-center gap-2">
            <img
              src={userImg}
              alt=""
              className="w-[56px] h-[56px] rounded-full object-cover "
            />
            <div className="flex flex-col">
              <p className="font-bold">Leonard Victor</p>
              <div className="flex items-center gap-1">
                <ReactSVG
                  src={publicIcon}
                  beforeInjection={(svg) =>
                    svg.setAttribute("class", "w-[14px] h-[14px]")
                  }
                />{" "}
                <p className="text-[#36474F] font-semibold">Public</p>{" "}
                <ReactSVG
                  src={arrowDown}
                  beforeInjection={(svg) =>
                    svg.setAttribute("class", "w-[8px] h-[4px]")
                  }
                />{" "}
              </div>
            </div>
          </div>
          <button>
            <ReactSVG
              src={cancel}
              onClick={onClose}
              beforeInjection={(svg) =>
                svg.setAttribute("class", "w-[11px] h-[11px]")
              }
            />
          </button>
        </div>
        <textarea
          name="post"
          className="w-full h-[280px] resize-none focus:outline-none placeholder:text-[#B8C5CA] placeholder:font-semibold "
          placeholder="What do you want to share"
        ></textarea>
        <div className="w-full pb-4 border-b border-[#E7EAEB] mb-8">
          <div className="w-full flex items-center gap-5">
            <ReactSVG
              src={emoji}
              beforeInjection={(svg) =>
                svg.setAttribute("class", "cursor-pointer w-[18px] h-[18px]")
              }
            />{" "}
            <ReactSVG
              src={gallery}
              beforeInjection={(svg) =>
                svg.setAttribute("class", "cursor-pointer w-[20px] h-[14px]")
              }
            />{" "}
            <ReactSVG
              src={add}
              beforeInjection={(svg) =>
                svg.setAttribute("class", "cursor-pointer w-[14px] h-[14px]")
              }
            />
          </div>
        </div>
        <div className="flex items-center justify-end">
          <button className="bg-[#DA281C] py-2 px-8 rounded-[32px] text-white text-sm font-semibold ">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};
