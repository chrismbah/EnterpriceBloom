import cover_photo from "../../assets/svg/profile/cover_photo.svg";
import user from "../../assets/img/feed/user.png";
import { ReactSVG } from "react-svg";
import progress from "../../assets/svg/profile/progress_bar.svg";

const UserProfileInfo = () => {
  return (
    <div className="w-full rounded-lg overflow-hidden mb-5">
    <div className="w-full rounded-t-lg -mb-[1px]">
      <img
        src={cover_photo}
        alt="CoverPhoto"
        className="w-full h-[200px]"
      />
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
        <button className="rounded text-white bg-[#DA281C] py-2 px-4 font-bold text-sm">
          Edit Profile
        </button>
      </div>
      <h1 className="font-bold text-[26px] mb-2">Leonard Victor</h1>
      <div className="followings flex items-center gap-7 mb-5">
        <div className="flex items-center gap-1">
          <p className="font-bold text-md">0</p>
          <span className="text-[#262520] text-sm font-semibold ">
            posts
          </span>
        </div>
        <div className="flex items-center gap-1">
          <p className="font-bold text-md">0</p>
          <span className="text-[#262520] text-sm font-semibold ">
            followers
          </span>
        </div>
        <div className="flex items-center gap-1">
          <p className="font-bold text-md">0</p>
          <span className="text-[#262520] text-sm font-semibold ">
            following
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4 ">
        <div className="bg-[#f5f5f5] h-[144px] w-[330px] rounded px-4 py-5 flex items-center justify-center flex-col gap-4 ">
          <div className="w-full flex flex-col gap-1">
            <h1 className="font-bold ">Profile Update</h1>
            <p className="text-xs">
              Your profile is not complete yet, you’re left with a few
              tiny details
            </p>
          </div>
          <div>
            <ReactSVG
              src={progress}
              beforeInjection={(svg) =>
                svg.setAttribute("class", "w-full")
              }
            />
          </div>
        </div>
        <div className="bg-[#f5f5f5] h-[144px] w-[330px] rounded px-4 py-5 flex items-center justify-center flex-col gap-3 ">
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
  )
}

export default UserProfileInfo