import { ReactSVG } from "react-svg";
import { IPost } from ".";
import star from "../../../assets/icons/home/feed/star.svg";
import comments from "../../../assets/icons/home/feed/comment_red.svg";
const Post = ({ postImg, postText, commentsCount, starCount }: IPost) => {
  return (
    <div className="w-full border-b border-[#D6DADB] pb-6 flex flex-col gap-2.5">
      <div className="w-full post flex items-center gap-4">
        <div className="post-img w-[196px] h-[126px] rounded-lg overflow-hidden">
          <img src={postImg} alt="" className=" w-full h-full object-cover " />
        </div>
        <p className="flex-1 text-sm leading-[24px] text-[#36474F] font-semibold ">
          {postText}
        </p>
      </div>
      <div className="post-details w-full flex justify-between">
        <div className="flex items-center gap-2">
          <div className="stars flex items-center gap-0.5">
            <ReactSVG
              src={star}
              beforeInjection={(svg) => svg.setAttribute("class", "")}
            />
            <ReactSVG
              src={star}
              beforeInjection={(svg) => svg.setAttribute("class", "")}
            />
            <ReactSVG
              src={star}
              beforeInjection={(svg) => svg.setAttribute("class", "")}
            />
            <ReactSVG
              src={star}
              beforeInjection={(svg) => svg.setAttribute("class", "")}
            />
            <ReactSVG
              src={star}
              beforeInjection={(svg) => svg.setAttribute("class", "")}
            />
          </div>
          <p className="text-[13px] font-semibold pt-0.5">
            Starred {starCount.toLocaleString()}
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <ReactSVG
            src={comments}
            beforeInjection={(svg) => svg.setAttribute("class", "w-4 h-4 mt-0.5")}
          />
          <p className="text-[13px] font-semibold ">{commentsCount} Comments</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
