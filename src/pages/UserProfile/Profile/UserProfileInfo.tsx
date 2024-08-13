import cover_photo from "../../../assets/svg/profile/cover_photo.svg";
import user from "../../../assets/img/feed/user.png";
import { ReactSVG } from "react-svg";
import progress from "../../../assets/svg/profile/progress_bar.svg";
import { useUserProfile } from "../../../hooks/useUserProfile";
import badge from "../../../assets/svg/profile/badge.svg";
import { Link } from "react-router-dom";
import attach from "../../../assets/svg/profile/attach_red.svg";
const ProfileInfo = ({
  handleShowProfileSetup,
}: {
  handleShowProfileSetup: (payload: boolean) => void;
}) => {
  const { userProfile } = useUserProfile();
  if (!userProfile) return <p>Loading</p>;
  return (
    <div className="w-full rounded-lg overflow-hidden mb-5">
      <div className="w-full rounded-t-lg -mb-[1px]">
        <img src={cover_photo} alt="CoverPhoto" className="w-full h-[200px]" />
      </div>
      <div className="bg-white px-12 pb-12 ">
        <div className="flex items-center justify-between mb-2.5">
          <div className="w-36 h-36 relative -mt-12 sm:-mt-16 border-4 border-white rounded-full overflow-hidden">
            <img
              className="object-cover object-center w-full bg-gray-100"
              src={user}
              alt="user"
            />
          </div>
          <button
            onClick={() => handleShowProfileSetup(true)}
            className="rounded text-white bg-[#DA281C] py-2 px-4 font-bold text-sm"
          >
            Edit Profile
          </button>
        </div>
        <div className="w-full flex flex-col mb-2">
          <h1 className="font-bold text-[26px]">{userProfile.fullName}</h1>
          <span className=" font-semibold text-[#36474F]">
            @{userProfile.username}
          </span>
        </div>
        <div className="flex flex-col gap-2.5 mb-5">
          <div className="flex flex-col gap-2.5">
            <div className="flex flex-col gap-3.5">
              <div className="followings flex items-center gap-7">
                <div className="flex items-center gap-1">
                  <p className="font-bold text-md">0</p>
                  <span className="text-[#262520] text-sm font-semibold ">
                    posts
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <p className="font-bold text-md">
                    {userProfile.followers.length}
                  </p>
                  <span className="text-[#262520] text-sm font-semibold ">
                    followers
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <p className="font-bold text-md">
                    {userProfile.following.length}
                  </p>
                  <span className="text-[#262520] text-sm font-semibold ">
                    following
                  </span>
                </div>
              </div>
              <div className="bio">
                <p className="font-medium text-[#36474F] text-sm ">
                  {userProfile.bio}
                </p>
              </div>
            </div>
            <div className="badge-join flex items-center gap-3.5">
              <div className="badge flex items-center gap-1 font-bold text-xs">
                <ReactSVG
                  src={badge}
                  beforeInjection={(svg) =>
                    svg.setAttribute("class", "w-[22px] h-[14px] mb-[1px] ")
                  }
                />
                <p>Badge</p>
              </div>
              <div className="joined flex items-center gap-1 font-bold text-xs">
                <p className="text-[#36474F]">Joined:</p>
                <span className="text-black">June 10, 2020</span>
              </div>
            </div>
          </div>
          <div className="title-and-link flex items-center gap-7">
            <p className="text-[#DA281C] font-bold">{userProfile.occupation}</p>
            {userProfile.url1 && (
              <div className="flex items-center gap-1 font-semibold text-[#DA281C]">
                <ReactSVG
                  src={attach}
                  beforeInjection={(svg) =>
                    svg.setAttribute("class", "w-[22px] h-[16px]")
                  }
                />
                <Link to={userProfile.url1}>{userProfile.url1}</Link>
              </div>
            )}{" "}
            {userProfile.url2 && (
              <div className="flex items-center gap-1 font-semibold text-[#DA281C]">
                <ReactSVG
                  src={attach}
                  beforeInjection={(svg) =>
                    svg.setAttribute("class", "w-[22px] h-[16px]")
                  }
                />
                <Link to={userProfile.url2}>{userProfile.url2}</Link>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-4 ">
          <div className=" bg-[#f5f5f5] h-[144px] w-[330px] rounded-lg px-4 py-5 flex items-center justify-center flex-col gap-4 ">
            <div className="w-full flex flex-col gap-1">
              <h1 className="font-bold ">Profile Update</h1>
              <p className="text-xs">
                Your profile is not complete yet, you’re left with a few tiny
                details
              </p>
            </div>
            <div>
              <ReactSVG
                src={progress}
                beforeInjection={(svg) => svg.setAttribute("class", "w-full")}
              />
            </div>
          </div>
          <div className="bg-[#f5f5f5] h-[144px] w-[330px] rounded-lg px-4 py-5 flex items-center justify-center flex-col gap-3 ">
            <div className="w-full flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <h1 className="font-bold">Add a section</h1>
                <p className="text-[#36474F] text-xs ">
                  Add a section to your profile, to improve your profile
                </p>
              </div>
              <button className="w-fit text-white rounded-[6px] bg-[#DA281C] py-2 px-4 text-xs font-semibold ">
                Add a section
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
