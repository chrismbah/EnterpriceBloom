import { useEffect, useState } from "react";
import { PostProps } from "./Post";
import { ReactSVG } from "react-svg";
import comments from "../../../../assets/icons/home/feed/comment_red.svg";
import cancel from "../../../../assets/icons/home/feed/cancel_black.svg";
import star from "../../../../assets/icons/home/feed/star.svg";
import starred from "../../../../assets/icons/home/feed/star_red.svg";
import comment from "../../../../assets/icons/home/feed/comment.svg";
import repost from "../../../../assets/icons/home/feed/repost.svg";
import share from "../../../../assets/icons/home/feed/share.svg";
import save from "../../../../assets/icons/home/feed/save.svg";
import arrowDown from "../../../../assets/icons/home/feed/arrowDropdown.svg";
import threeDots from "../../../../assets/icons/home/feed/threeDots.svg";
import emoji from "../../../../assets/icons/home/feed/emoji.svg";
import gallery from "../../../../assets/icons/home/feed/gallery.svg";
interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: PostProps;
}

const PostModal = ({ isOpen, onClose, post }: PostModalProps) => {
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

  const MAX_LENGTH = 336; // Character limit for displaying full text
  const [isTruncated, setIsTruncated] = useState(true);
  const handleSeeMoreClick = () => {
    setIsTruncated(!isTruncated);
  };
  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white max-w-[980px] h-3/4 flex rounded-lg overflow-hidden"
      >
        <div className="w-[55%] flex items-center justify-center bg-gray-200">
          <img
            src={post.imgSrc}
            alt=""
            className="max-h-full w-full object-cover "
          />
        </div>
        <div className="w-[45%] flex flex-col overflow-auto">
          <div className="flex justify-between items-start py-5 px-4 sticky top-0 z-[5] bg-white">
            <div className="flex items-center gap-2">
              <img
                src={post.userImg}
                alt=""
                className="w-[52px] h-[52px] rounded-full object-cover"
              />
              <div>
                <h1 className="text-black font-bold">{post.username}</h1>
                <p className="text-xs text-[#576B74] font-medium ">
                  {post.role} .
                </p>
                <div className="flex gap-1 ">
                  <p className="text-xs text-[#576B74] font-medium ">
                    {post.timePosted} .
                  </p>
                  <p className="text-xs text-primary-500 font-semibold ">
                    {post.postVisibility}
                  </p>
                </div>
              </div>
            </div>
            <ReactSVG
              onClick={onClose}
              src={cancel}
              beforeInjection={(svg) => {
                svg.setAttribute("class", "w-[13px] h-[13px] cursor-pointer");
              }}
            />
          </div>
          <div className="overflow-auto px-4">
            <h1 className="font-bold text-md mb-2">{post.title}</h1>
            <p className="text-sm leading-[26px] font-medium text-black mb-4">
              {isTruncated
                ? post.content.substring(0, MAX_LENGTH)
                : post.content}
              {post.content.length > MAX_LENGTH && (
                <button
                  className="text-red inline-block text-primary-500 font-semibold"
                  onClick={handleSeeMoreClick}
                >
                  {isTruncated ? "...See More" : "...See Less"}
                </button>
              )}
            </p>
            <div className="flex flex-col gap-4 w-full mb-5">
              <div className="border-b border-[#E7EAEB] pb-3 flex items-center justify-between gap-4">
                <div className="ratings flex items-center gap-1">
                  {post.ratings.map(
                    (
                      rating: { star: number; count: number },
                      index: number
                    ) => (
                      <div
                        key={index}
                        className="border-[0.36px] border-[#808C91] rounded py-[2px] px-[4px] flex items-center gap-1"
                      >
                        <div className="flex gap-[2px] items-center">
                          <p className="font-semibold text-xxs">
                            {rating.star}
                          </p>
                          <img
                            src={star}
                            alt=""
                            className="w-[9px] h-[9px] mt-[-0.5px]"
                          />
                        </div>
                        <p className="text-xxs block font-semibold text-[#36474F]">
                          {rating.count}
                        </p>
                      </div>
                    )
                  )}
                </div>
                <div className="flex gap-2 items-center">
                  <img src={comments} alt="" className="w-3.5 h-3.5" />
                  <p className="text-xs font-semibold">
                    {post.commentCount.toLocaleString()} comments
                  </p>
                </div>
              </div>
              <div className="w-full flex items-center justify-between">
                <button className="flex items-center gap-1">
                  <img src={starred} alt="" className="w-3.5 h-3.5" />
                  <p className="text-black text-xxs font-semibold">
                    {post.starCount.toLocaleString()} Starred
                  </p>
                </button>
                <button className="flex items-center gap-1">
                  <img src={comment} alt="" className="w-3.5 h-3.5" />
                  <p className="text-black text-xxs font-semibold">Comment</p>
                </button>
                <button className="flex items-center gap-1">
                  <img src={repost} alt="" className="w-3.5 h-3.5" />
                  <p className="text-black text-xxs font-semibold">Repost</p>
                </button>
                <button className="flex items-center gap-1">
                  <img src={share} alt="" className="w-3.5 h-3.5" />
                  <p className="text-black text-xxs font-semibold">Share</p>
                </button>
                <button className="flex items-center gap-1">
                  <img src={save} alt="" className="w-3.5 h-3.5" />
                  <p className="text-black text-xxs font-semibold">Save</p>
                </button>
              </div>
            </div>
            <div className="comment-input flex items-center gap-2 mb-5 w-full ">
              <img
                src={post.userImg}
                alt=""
                className="w-[36px] h-[36px] rounded-full object-cover"
              />
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Add a comment"
                  className="flex-1 rounded-[32px] h-full px-5 py-[10px] w-full 
                    border border-[#36474F] font-semibold text-xs focus:outline-none placeholder:text-[#36474F] 
                    placeholder:font-semibold placeholder:text-xs"
                />
                <div className="absolute top-[10px] right-5 flex items-center gap-2 ">
                  <ReactSVG
                    src={emoji}
                    beforeInjection={(svg) => {
                      svg.setAttribute(
                        "class",
                        "w-[17px] h-[17px] cursor-pointer "
                      );
                    }}
                  />{" "}
                  <ReactSVG
                    src={gallery}
                    beforeInjection={(svg) => {
                      svg.setAttribute(
                        "class",
                        "w-[18px] h-[11px] cursor-pointer "
                      );
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="comments w-full flex flex-col gap-3 mb-2">
              <button className="flex items-center gap-1 ">
                <span className="text-[#36474F] font-semibold text-xs ">
                  Most Relevant
                </span>
                <ReactSVG
                  src={arrowDown}
                  beforeInjection={(svg) => {
                    svg.setAttribute(
                      "class",
                      "w-[10px] h-[5px] cursor-pointer "
                    );
                  }}
                />
              </button>
              {post.comments.map((comment, index) => (
                <div key={index} className="w-full flex items-start gap-2 ">
                  <img
                    src={comment.userImg}
                    alt=""
                    className="w-[36px] h-[36px] rounded-full object-cover"
                  />
                  <div className="w-full flex flex-col gap-2.5">
                    <div className="bg-[#F4F4F4] rounded-xl py-4 px-6 flex flex-col gap-3 flex-1 ">
                      <div className="flex items-start justify-between">
                        <div className="flex flex-col">
                          <h1 className="font-bold text-sm">
                            {comment.username}
                          </h1>
                          <p className="text-[#576B74] font-medium text-xs ">
                            {comment.role}
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[#36474F] font-bold text-xs ">
                            {comment.timePosted}
                          </span>
                          <ReactSVG
                            src={threeDots}
                            beforeInjection={(svg) =>
                              svg.setAttribute(
                                "class",
                                "w-[12px] h-[4px] cursor-pointer "
                              )
                            }
                          />
                        </div>
                      </div>
                      <p className="text-xs leading-[22px] text-[#36474F] font-medium ">
                        {comment.content}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center gap-1">
                        <ReactSVG
                          src={starred}
                          beforeInjection={(svg) =>
                            svg.setAttribute(
                              "class",
                              "w-[16px] h-[16px] cursor-pointer "
                            )
                          }
                        />
                        <span className="text-xs font-semibold">Star</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#36474F]">
                        <span>Starred {comment.starCount}.</span>
                        <span>{comment.repliesCount} Reply</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
