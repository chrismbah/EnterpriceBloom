import UserProfileInfo from "./UserProfileInfo";
import ProfileSetup from "./ProfileSetup";
import { useState } from "react";

const Profile = () => {
  const [showProfileSetup, setShowProfileSetup] = useState<boolean>(false);
  const handleShowProfileSetup = (payload: boolean) => {
    setShowProfileSetup(payload);
  };
  return (
    <>
      <UserProfileInfo handleShowProfileSetup={handleShowProfileSetup} />
      <ProfileSetup
        showProfileSetup={showProfileSetup}
        handleShowProfileSetup={handleShowProfileSetup}
      />
    </>
  );
};

export default Profile;
