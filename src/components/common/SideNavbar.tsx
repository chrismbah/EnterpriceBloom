import { NavLink } from "react-router-dom";
import home from "../../assets/icons/home/side_bar/home.svg";
import advertise from "../../assets/icons/home/side_bar/advertise.svg";
import business from "../../assets/icons/home/side_bar/business.svg";
import events from "../../assets/icons/home/side_bar/events.svg";
import marketplace from "../../assets/icons/home/side_bar/marketplace.svg";
import monetization from "../../assets/icons/home/side_bar/monetization.svg";
import premium from "../../assets/icons/home/side_bar/premium.svg";

const SideNavbar = () => {
  const sideLinks = [
    { name: "Home", link: "/", icon: home },
    { name: "Challenges", link: "/challenges", icon: home },
    { name: "Buzz Marketplace", link: "/marketplace", icon: marketplace },
    { name: "Buzz Your Business", link: "/business", icon: business },
    { name: "Advertise", link: "/advertise", icon: advertise },
    { name: "Monetization", link: "/monetization", icon: monetization },
    { name: "Go Premium", link: "/premium", icon: premium },
    { name: "Events", link: "/events", icon: events },
  ];

  return (
    <div className="bg-white w-full rounded-lg py-8 px-7">
      <ul className="flex flex-col gap-7">
        {sideLinks.map(({ name, link, icon }, i) => (
          <NavLink key={i} to={link}>
            <li className="flex items-center gap-2">
              <img
                src={icon}
                alt={name}
                className="w-5 h-5 active:text-primary-500 hover:text-primary-500"
              />
              <p className="font-semibold text-[#262520] active:text-primary-500 hover:text-primary-500">
                {name}
              </p>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default SideNavbar;
