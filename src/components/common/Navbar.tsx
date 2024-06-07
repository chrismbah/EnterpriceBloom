import { useState } from "react";
import logo from "../../assets/logo.png";
import messages from "../../assets/icons/nav/messages_icon.svg";
import notif from "../../assets/icons/nav/notif_icon.svg";
import profile from "../../assets/user/profile.png";
import search from "../../assets/icons/nav/search.svg";
import { ArrowDownIcon } from "../../assets/icons/ArrowDownIcon";
import { Link } from "react-router-dom";
import clock from "../../assets/icons/nav/clock.svg";
const Navbar = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    // Delay the blur effect to allow click events on the modal
    setTimeout(() => {
      setIsFocused(false);
    }, 300);
  };

  const recentSearches: string[] = [
    "Social Marketing",
    "User Marketing",
    "Agency Marketing",
    "Media Marketing",
  ];
  const popularSearches: string[] = [
    "SEO Search Engine",
    "Market Research",
    "Advert In Marketing",
    "Social Marketing",
  ];
  return (
    <>
      <div className=" w-full z-10 flex items-center bg-white justify-between h-[90px] border-b border-b-neutral-100 px-20  ">
        <img
          src={logo}
          alt="Entreprice Bloom"
          className="h-[52px] w-[238px] object-cover"
        />
        <div className="flex items-center ">
          <div className="relative">
            <div className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-500">
              <img src={search} alt="search" className="w-5 h-5" />
            </div>
            <input
              placeholder="Search Buzz Community"
              type="search"
              className="h-[48px] w-[500px] text-sm font-medium caret-primary-500 rounded-[32px] bg-[#F4F4F4] py-5 pl-[56px] pr-4
              focus:outline-none focus:border-none placeholder:text-[#808C91] placeholder:text-sm placeholder:font-semibold mr-[56px] appearance-none"
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            {isFocused && (
              <div className="absolute top-[68px] w-[500px] bg-white z-[12] rounded-b-lg p-7 ">
                <div className="flex flex-col gap-5 ">
                  <div className="flex flex-col gap-3 ">
                    <h3 className="font-bold text-[#36474F]">
                      Recent
                    </h3>
                    <ul className=" flex flex-col gap-4 ">
                      {recentSearches.map((name, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm font-semibold "
                        >
                          <img src={clock} alt="" className="w-6 h-4" />{" "}
                          <p>{name}</p>
                        </div>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-3 ">
                    <h3 className="font-bold text-[#36474F]">Popular</h3>
                    <ul className="flex flex-col gap-4 ">
                      {popularSearches.map((name, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm font-semibold "
                        >
                          <img src={clock} alt="" className="w-6 h-4 " />{" "}
                          <p>{name}</p>
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-4">
            <div className="icons flex items-center gap-[10px]">
              <Link to="/messages" className="relative">
                <div className="w-11 h-11 rounded-full bg-[#F4F4F4] flex items-center justify-center">
                  <img src={messages} alt="messages" className="w-6 h-6" />
                </div>
                <div className="absolute -top-[2.5px] -right-[2.5px] w-[18px] h-[18px] rounded-full  bg-primary-500 flex items-center justify-center ">
                  <p className="text-white font-bold text-[10px] leading-[12.1px] ">
                    1
                  </p>
                </div>
              </Link>
              <Link to="/notifications" className="relative">
                <div className="w-11 h-11 rounded-full bg-[#F4F4F4] flex items-center justify-center">
                  <img src={notif} alt="notifications" className="w-6 h-6" />
                </div>
                <div className="absolute -top-[2.5px] -right-[2.5px] w-[18px] h-[18px] rounded-full  bg-primary-500 flex items-center justify-center ">
                  <p className="text-white font-bold text-[10px] leading-[12.1px] ">
                    3
                  </p>
                </div>
              </Link>
            </div>
            <div className="profile flex items-center gap-4 ">
              <div className="flex items-center gap-3 ">
                <img src={profile} alt="Username" className="w-11 h-11" />
                <p className="font-bold text-black">Leonard Victor</p>
              </div>
              <ArrowDownIcon className="w-5 h-5 text-[#1C1B1F] " />
            </div>
          </div>
        </div>
      </div>
      {isFocused && (
        <div className="fixed top-[90px] bg-black w-screen h-screen bg-opacity-40 z-[2] flex justify-center items-start"></div>
      )}
    </>
  );
};

export default Navbar;
