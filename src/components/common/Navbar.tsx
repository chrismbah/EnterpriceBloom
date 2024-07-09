import { useState, useEffect } from "react";
import logo from "../../assets/img/logo.png";
import messages from "../../assets/icons/nav/messages_icon.svg";
import notif from "../../assets/icons/nav/notif_icon.svg";
import profile from "../../assets/img/user/profile.png";
import search from "../../assets/icons/nav/search.svg";
import Dropdown from "./ProfileDropdown";
import { Link } from "react-router-dom";
import clock from "../../assets/icons/nav/clock.svg";
import { ReactSVG } from "react-svg";
import arrowDown from "../../assets/icons/nav/arrowDown.svg";
import { useUserProfile } from "../../hooks/useUserProfile";

// Navbar component that renders a navigation bar with search functionality and profile dropdown.
const Navbar = () => {
  const { userProfile, isLoading, isError } = useUserProfile();

  // State to track if the search input is focused
  const [isFocused, setIsFocused] = useState(false);

  // Function to handle focus on the search input
  const handleFocus = () => {
    setIsFocused(true);
  };

  // Effect to add and remove "overflow-hidden" class to body based on when the user focuses on the search bar
  useEffect(() => {
    if (isFocused) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  });

  // Function to handle blur on the search input
  const handleBlur = () => {
    // Delay the blur effect to allow click events on the modal
    setTimeout(() => {
      setIsFocused(false);
    }, 300);
  };

  // Array of recent searches
  const recentSearches: string[] = [
    "Social Marketing",
    "User Marketing",
    "Agency Marketing",
    "Media Marketing",
  ];

  // Array of popular searches
  const popularSearches: string[] = [
    "SEO Search Engine",
    "Market Research",
    "Advert In Marketing",
    "Social Marketing",
  ];

  // State to track if the profile dropdown is open
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Function to toggle the profile dropdown
  const toggleProfileDropdown = () => {
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <div className="border-b border-b-neutral-100 bg-white">
      <div className="max-w-screen-xl mx-auto">
        {/* Navigation bar */}
        <div className=" w-full z-10 flex items-center justify-between h-[90px]  ">
          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="Entreprice Bloom"
              className="h-[52px] w-[200px] object-cover"
            />
          </Link>
          {/* Search input and recent/popular searches dropdown */}
          <div className="flex items-center ">
            {/* Search input */}
            <div className="relative">
              {/* Search icon */}
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
              {/* Recent/popular searches dropdown */}
              {isFocused && (
                <div className="absolute top-[68px] w-[500px] bg-white z-[12] rounded-b-lg p-7 ">
                  <div className="flex flex-col gap-5 ">
                    {/* Recent searches */}
                    <div className="flex flex-col gap-3 ">
                      <h3 className="font-bold text-[#36474F]">Recent</h3>
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
                    {/* Popular searches */}
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
            {/* Message and notification icons */}
            <div className="flex items-center gap-4">
              <div className="icons flex items-center gap-[10px]">
                {/* Message icon */}
                <Link to="/profile/messages" className="relative">
                  <div className="w-11 h-11 rounded-full bg-[#F4F4F4] flex items-center justify-center">
                    <img src={messages} alt="messages" className="w-6 h-6" />
                  </div>
                  {/* Notification badge */}
                  <div className="absolute -top-[2.5px] -right-[2.5px] w-[18px] h-[18px] rounded-full  bg-primary-500 flex items-center justify-center ">
                    <p className="text-white font-bold text-[10px] leading-[12.1px] ">
                      1
                    </p>
                  </div>
                </Link>
                {/* Notification icon */}
                <Link to="/profile/notifications" className="relative">
                  <div className="w-11 h-11 rounded-full bg-[#F4F4F4] flex items-center justify-center">
                    <img src={notif} alt="notifications" className="w-6 h-6" />
                  </div>
                  {/* Notification badge */}
                  <div className="absolute -top-[2.5px] -right-[2.5px] w-[18px] h-[18px] rounded-full  bg-primary-500 flex items-center justify-center ">
                    <p className="text-white font-bold text-[10px] leading-[12.1px] ">
                      3
                    </p>
                  </div>
                </Link>
              </div>
              {/* Profile icon */}
              <div className="profile relative">
                <button
                  className="flex items-center gap-3"
                  onClick={toggleProfileDropdown}
                >
                  <img
                    src={profile}
                    alt="Username"
                    className="w-11 h-11 rounded-full"
                  />
                  {isLoading ? (
                    <p className="font-bold text-black">Loading</p>
                  ) : isError ? (
                    <p>Error getting profile</p>
                  ) : (
                    <p className="font-bold text-black">
                      {userProfile?.fullName}
                    </p>
                  )}
                  <ReactSVG src={arrowDown} />
                </button>
                {/* Profile dropdown */}
                {isProfileOpen && userProfile && (
                  <Dropdown userName={userProfile.fullName} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Overlay to prevent scrolling when search input is focused */}
      {isFocused && (
        <div className="fixed top-[90px] bg-black w-screen h-screen bg-opacity-40 z-[2] flex justify-center items-start hide-scrollbar"></div>
      )}
    </div>
  );
};
export default Navbar;
