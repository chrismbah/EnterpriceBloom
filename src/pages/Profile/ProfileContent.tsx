import { useState } from "react";
import ProfileTabs from "./ProfileTabs";
import Posts from "./Posts";
import Followers from "./Followers";
import Following from "./Following";
import Groups from "./Groups";

const ProfileContent = () => {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <div className="user-profile-content">
      <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "posts" && <Posts />}
      {activeTab === "followers" && <Followers />}
      {activeTab === "following" && <Following />}
      {activeTab === "groups" && <Groups />}
    </div>
  );
};

export default ProfileContent;
