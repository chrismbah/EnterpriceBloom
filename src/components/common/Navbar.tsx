import logo from "../../assets/logo.png";
import messages from "../../assets/icons/nav/messages_icon.svg";
import notif from "../../assets/icons/nav/notif_icon.svg";
import profile from "../../assets/user/profile.png";
import search from "../../assets/icons/nav/search.svg";
import { ArrowDownIcon } from "../../assets/icons/ArrowDownIcon";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between h-[90px] border-b border-b-neutral-100 px-20  ">
      <div>
        <img
          src={logo}
          alt="Entreprice Bloom"
          className="h-[52px] w-[238px] object-cover "
        />
      </div>
      <div className="flex items-center ">
        <div className="relative">
          <div className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-500">
            <img src={search} alt="search" className="w-5 h-5 " />
          </div>
          <input
            placeholder="Search Buzz Community"
            type="search"
            className="h-[48px] w-[500px] caret-primary-500 rounded-[32px] bg-[#F4F4F4] py-5 pl-[56px] pr-4 focus:outline-none focus:border-none placeholder:text-[#808C91] placeholder:text-sm placeholder:font-semibold mr-[56px] appearance-none"
          />
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
  );
};

export default Navbar;
