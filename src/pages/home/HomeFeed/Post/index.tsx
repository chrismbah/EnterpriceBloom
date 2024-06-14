import { useState } from "react";
import PostImage from "./PostImage";
import engagement from "../../../../assets/svg/home/feed/engagements.svg";
import add from "../../../../assets/svg/home/feed/add.svg";
import star from "../../../../assets/svg/home/feed/star.svg";
import starred from "../../../../assets/svg/home/feed/star_red.svg";
import comments from "../../../../assets/svg/home/feed/comment_red.svg";
import comment from "../../../../assets/svg/home/feed/comment.svg";
import repost from "../../../../assets/svg/home/feed/repost.svg";
import share from "../../../../assets/svg/home/feed/share.svg";
import save from "../../../../assets/svg/home/feed/save.svg";
interface PostProps {
  userImg: string;
  username: string;
  handle: string;
  role: string;
  engagementCount: string;
  timePosted: string;
  title: string;
  content: string;
  imgSrc?: string;
  starCount: number;
  commentCount: number;
  ratings: { star: number; count: number }[];
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
}: PostProps) => {
  const [isTruncated, setIsTruncated] = useState(true); // Assume text is truncated initially
  const MAX_LENGTH = 336; // Character limit for displaying full text

  const handleSeeMoreClick = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div className="bg-white py-7 rounded-lg">
      <div className="flex flex-col items-center gap-4">
        <div className="post flex flex-col gap-5 w-full px-5">
          <div className="profile rounded-full border border-[#E8E8E8] p-1 px-2 flex items-center justify-between">
            <div className="profile-det flex gap-12">
              <div className="flex items-center gap-2">
                <img
                  src={userImg}
                  alt=""
                  className="w-[52px] h-[52px] rounded-full object-cover"
                />
                <div className="flex flex-col gap-0.5">
                  <h1 className="text-black font-bold">{username}</h1>
                  <p className="font-semibold text-xs text-[#262520]">
                    {handle}
                  </p>
                  <p className="text-[#576B74] font-medium text-xs">{role}</p>
                </div>
              </div>
              <div className="engagementCounts flex items-center gap-1">
                <img
                  src={engagement}
                  alt=""
                  className="w-[15.67px] h-[15.67px]"
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
                <img src={add} alt="" className="w-10 h-10" />
              </button>
            </div>
          </div>
          <div className="post-content flex flex-col gap-1">
            <h1 className="font-bold text-black text-[18px]">{title}</h1>
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
        {imgSrc && <PostImage imgSrc={imgSrc} />}
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
                      <img
                        src={star}
                        alt=""
                        className="w-[12px] h-[12px] mt-[-0.5px]"
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
              <img src={comments} alt="" className="w-5 h-5" />
              <p className="text-sm font-semibold">
                {commentCount.toLocaleString()} comments
              </p>
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <button className="flex items-center gap-2">
              <img src={starred} alt="" className="w-5 h-5" />
              <p className="text-black text-sm font-semibold">
                {starCount.toLocaleString()} Starred
              </p>
            </button>
            <button className="flex items-center gap-2">
              <img src={comment} alt="" className="w-5 h-5" />
              <p className="text-black text-sm font-semibold">Comment</p>
            </button>
            <button className="flex items-center gap-2">
              <img src={repost} alt="" className="w-5 h-5" />
              <p className="text-black text-sm font-semibold">Repost</p>
            </button>
            <button className="flex items-center gap-2">
              <img src={share} alt="" className="w-5 h-5" />
              <p className="text-black text-sm font-semibold">Share</p>
            </button>
            <button className="flex items-center gap-2">
              <img src={save} alt="" className="w-5 h-5" />
              <p className="text-black text-sm font-semibold">Save</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
