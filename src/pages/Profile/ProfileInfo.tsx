import cover_photo from "../../assets/svg/profile/cover_photo.svg";
import user from "../../assets/img/feed/user.png";
import badge from "../../assets/svg/profile/badge.svg";
import attach from "../../assets/svg/profile/attach_red.svg";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
const ProfileInfo = () => {
  return (
    <div className="w-full rounded-lg overflow-hidden">
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
          <div className="flex items-center gap-4">
            <button className="rounded text-white bg-[#DA281C] py-2 px-4 font-bold text-sm">
              Follow
            </button>
            <button
              className="rounded border-[1.5px] border-[#DA281C]
               bg-white text-[#DA281C] py-2 px-4 font-bold text-sm"
            >
              Message
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col mb-2">
          <h1 className="font-bold text-[26px]">Leonard Victor</h1>
          <span className="font-semibold text-[#36474F]">
            @Lheonard
          </span>
        </div>
        <div className="flex flex-col gap-2.5 mb-5">
          <div className="flex flex-col gap-2.5">
            <div className="flex flex-col gap-3.5">
              <div className="followings flex items-center gap-7">
                <div className="flex items-center gap-1">
                  <p className="font-bold text-md">12</p>
                  <span className="text-[#262520] text-sm font-semibold ">
                    posts
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <p className="font-bold text-md">4,100</p>
                  <span className="text-[#262520] text-sm font-semibold ">
                    followers
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <p className="font-bold text-md">620</p>
                  <span className="text-[#262520] text-sm font-semibold ">
                    following
                  </span>
                </div>
              </div>
              <div className="bio">
                <p className="font-medium text-[#36474F] text-sm ">
                  Aspiring entrepreneur passionate about tech and innovation.
                  Always eager to connect and share insights on startups,
                  digital marketing, and venture capital. Let's build the future
                  together.
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
            <p className="text-[#DA281C] font-bold">Product Marketer</p>
            <div className="flex items-center gap-1 font-semibold text-[#DA281C]">
              <img src={attach} alt="" />
              <Link to={"saajh82ewe21eq8whh3733hhbfw8wds88w8ew8vbdvjc"}>
                saajh82ewe21eq8whh3733hhbfw8wds88w8ew8vbdvjc
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
