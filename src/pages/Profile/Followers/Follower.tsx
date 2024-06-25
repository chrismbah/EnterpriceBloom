import { IFollower } from ".";
const Follower = ({ img, name, title, userFollowing }: IFollower) => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-[58px] h-[58px] rounded-full overflow-hidden ">
          <img
            src={img}
            alt=""
            className="w-full h-full overflow-hidden object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold">{name}</h1>
          <span className="text-[#36474F] font-semibold text-sm ">{title}</span>
        </div>
      </div>
      <button
        className={`rounded-[32px] border border-[#94A5AB] py-1.5 px-[18px] text-[#36474F] font-bold text-sm ${
          userFollowing && "bg-[#DA281C] border-transparent text-white  "
        } `}
      >
        {userFollowing ? "Follow" : "Following"}
      </button>
    </div>
  );
};

export default Follower;
