import { useState } from "react";
import PostImage from "./PostImage";
import { ReactSVG } from "react-svg";
import engagement from "../../../../assets/icons/home/feed/engagements.svg";
import add from "../../../../assets/icons/home/feed/add.svg";
import star from "../../../../assets/icons/home/feed/star.svg";
import starred from "../../../../assets/icons/home/feed/star_red.svg";
import commentsIcon from "../../../../assets/icons/home/feed/comment_red.svg";
import comment from "../../../../assets/icons/home/feed/comment.svg";
import repost from "../../../../assets/icons/home/feed/repost.svg";
import share from "../../../../assets/icons/home/feed/share.svg";
import save from "../../../../assets/icons/home/feed/save.svg";
import PostModal from "./PostModal";
import { Link } from "react-router-dom";
export interface PostProps {
  userImg: string;
  username: string;
  handle: string;
  role: string;
  engagementCount: string;
  timePosted: string;
  postVisibility: string;
  title: string;
  content: string;
  imgSrc?: string;
  starCount: number;
  commentCount: number;
  ratings: { star: number; count: number }[];
  comments: {
    userImg: string;
    username: string;
    role: string;
    timePosted: string;
    content: string;
    repliesCount: number;
    starCount: number;
  }[];
}
const Post = ({
  userImg,
  username,
  handle,
  role,
  engagementCount,
  timePosted,
  title,
  content,
  imgSrc,
  starCount,
  commentCount,
  ratings,
  postVisibility,
  comments,
}: PostProps) => {
  const [isTruncated, setIsTruncated] = useState(true); // Assume text is truncated initially
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const MAX_LENGTH = 336;

  const handleSeeMoreClick = () => {
    setIsTruncated(!isTruncated);
  };
  const handleImageClick = () => {
    setIsPostModalOpen(true);
  };

  return (
    <div className="bg-white py-7 rounded-lg">
      <div className="flex flex-col items-center gap-4">
        <div className="post flex flex-col gap-5 w-full px-5">
          <div className="profile rounded-full border border-[#E8E8E8] p-1 px-2 flex items-center justify-between">
            <div className="profile-det flex gap-12">
              <div className="flex items-center gap-2">
                <Link to={`/${username}`}>
                  <img
                    src={userImg}
                    alt=""
                    className="w-[52px] h-[52px] rounded-full object-cover"
                  />
                </Link>
                <div className="flex flex-col gap-0.5">
                  <h1 className="text-black font-bold">{username}</h1>
                  <p className="font-semibold text-xs text-[#262520]">
                    {handle}
                  </p>
                  <p className="text-[#576B74] font-medium text-xs">{role}</p>
                </div>
              </div>
              <div className="engagementCounts flex items-center gap-1">
                <ReactSVG
                  src={engagement}
                  beforeInjection={(svg) => {
                    svg.setAttribute("class", "w-[15.67px] h-[15.67px]");
                  }}
                />
                <span className="font-bold text-[#262520] text-sm">
                  {engagementCount}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <p className="text-[#576B74] font-semibold text-xs">
                {timePosted}
              </p>
              <button>
                <ReactSVG
                  src={add}
                  beforeInjection={(svg) => {
                    svg.setAttribute("class", "w-10 h-10");
                  }}
                />
              </button>
            </div>
          </div>
          <div className="post-content flex flex-col gap-1">
            <h1 className="font-bold text-black text-md">{title}</h1>
            <p className="text-sm leading-[26px] font-medium text-black">
              {isTruncated ? content.substring(0, MAX_LENGTH) : content}
              {content.length > MAX_LENGTH && (
                <button
                  className="text-red inline-block text-primary-500 font-semibold"
                  onClick={handleSeeMoreClick}
                >
                  {isTruncated ? "...See More" : "...See Less"}
                </button>
              )}
            </p>
          </div>
        </div>
        {imgSrc && <PostImage imgSrc={imgSrc} onClick={handleImageClick} />}
        <div className="action-btns px-5 flex flex-col gap-4 w-full">
          <div className="border-b border-[#E7EAEB] pb-5 flex items-center justify-between gap-4">
            <div className="ratings flex items-center gap-1.5">
              {ratings.map(
                (rating: { star: number; count: number }, index: number) => (
                  <div
                    key={index}
                    className="border-[0.5px] border-[#808C91] rounded py-[3px] px-[6px] flex items-center gap-[8px]"
                  >
                    <div className="flex gap-[2px] items-center">
                      <p className="font-semibold text-xs">{rating.star}</p>
                      <ReactSVG
                        src={star}
                        beforeInjection={(svg) => {
                          svg.setAttribute(
                            "class",
                            "w-[12px] h-[12px] mt-[-0.5px]"
                          );
                        }}
                      />
                    </div>
                    <p className="text-xs block font-semibold text-[#36474F]">
                      {rating.count}
                    </p>
                  </div>
                )
              )}
            </div>
            <div className="flex gap-2 items-center">
              <ReactSVG
                src={commentsIcon}
                beforeInjection={(svg) => {
                  svg.setAttribute("class", "w-5 h-5");
                }}
              />
              <p className="text-sm font-semibold">
                {commentCount.toLocaleString()} comments
              </p>
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <button className="flex items-center gap-2">
              <ReactSVG
                src={starred}
                beforeInjection={(svg) => {
                  svg.setAttribute("class", "w-5 h-5");
                }}
              />
              <p className="text-black text-sm font-semibold">
                {starCount.toLocaleString()} Starred
              </p>
            </button>
            <button className="flex items-center gap-2">
              <ReactSVG
                src={comment}
                beforeInjection={(svg) => {
                  svg.setAttribute("class", "w-5 h-5");
                }}
              />
              <p className="text-black text-sm font-semibold">Comment</p>
            </button>
            <button className="flex items-center gap-2">
              <ReactSVG
                src={repost}
                beforeInjection={(svg) => {
                  svg.setAttribute("class", "w-5 h-5");
                }}
              />
              <p className="text-black text-sm font-semibold">Repost</p>
            </button>
            <button className="flex items-center gap-2">
              <ReactSVG
                src={share}
                beforeInjection={(svg) => {
                  svg.setAttribute("class", "w-5 h-5");
                }}
              />
              <p className="text-black text-sm font-semibold">Share</p>
            </button>
            <button className="flex items-center gap-2">
              <ReactSVG
                src={save}
                beforeInjection={(svg) => {
                  svg.setAttribute("class", "w-5 h-5");
                }}
              />
              <p className="text-black text-sm font-semibold">Save</p>
            </button>
          </div>
          {/* <div>
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
                <span>Starred {starCount}.</span>
                <span>{comments.repliesCount} Reply</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <PostModal
        isOpen={isPostModalOpen}
        onClose={() => setIsPostModalOpen(false)}
        post={{
          userImg,
          username,
          handle,
          role,
          engagementCount,
          timePosted,
          title,
          content,
          imgSrc,
          starCount,
          commentCount,
          ratings,
          postVisibility,
          comments,
        }}
      />
    </div>
  );
};

export default Post;
