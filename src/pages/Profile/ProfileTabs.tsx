const ProfileTabs = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (payload: string) => void;
}) => {
  return (
    <div className="user-profile-tabs my-5 flex items-center gap-4 ">
      <button
        onClick={() => setActiveTab("posts")}
        className={`rounded-[32px] border border-[#94A5AB] py-2 px-5 text-[#36474F] font-bold text-sm ${
          activeTab === "posts" &&
          "bg-[#DA281C] border-transparent text-white  "
        } `}
      >
        Posts
      </button>
      <button
        onClick={() => setActiveTab("followers")}
        className={`rounded-[32px] border border-[#94A5AB] py-2 px-5 text-[#36474F] font-bold text-sm ${
          activeTab === "followers" &&
          "bg-[#DA281C] border-transparent text-white  "
        } `}
      >
        Followers
      </button>
      <button
        onClick={() => setActiveTab("following")}
        className={`rounded-[32px] border border-[#94A5AB] py-2 px-5 text-[#36474F] font-bold text-sm ${
          activeTab === "following" &&
          "bg-[#DA281C] border-transparent text-white  "
        } `}
      >
        Following
      </button>
      <button
        onClick={() => setActiveTab("groups")}
        className={`rounded-[32px] border border-[#94A5AB] py-2 px-5 text-[#36474F] font-bold text-sm ${
          activeTab === "groups" &&
          "bg-[#DA281C] border-transparent text-white  "
        } `}
      >
        Groups
      </button>
    </div>
  );
};

export default ProfileTabs;
