import { ReactSVG } from "react-svg";
import events from "../../assets/icons/home/side_bar/events.svg";
import premium from "../../assets/icons/home/side_bar/premium.svg";
import advertise from "../../assets/icons/home/side_bar/advertise.svg";
import campaign from "../../assets/icons/home/side_bar/business.svg";
import { Link } from "react-router-dom";
const Dropdown = ({
  user,
}: {
  user: {
    name: string;
    avatar: string;
  };
}) => {
  const links = [
    { label: "Run A Campaign", url: "/campaign", icon: campaign },
    { label: "Advertise", url: "/advertise", icon: advertise },
    { label: "Go Premium", url: "/premium", icon: premium },
    { label: "Events", url: "/events", icon: events },
  ];

  return (
    <div className="absolute top-[68px] min-w-[260px] max-w-[300px] bg-white border border-[#F3F4F5] z-[12] rounded-lg py-5">
      <div className="w-full flex items-end justify-between pb-5 px-4 border-b border-[#F3F4F5]">
        <div className=" flex flex-col gap-1.5 ">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <p className="font-bold text-black">{user.name}</p>
        </div>
        <Link
          to="/profile"
          className="block bg-[#DA281C] text-[11px] py-[8px] px-2 text-white rounded-lg font-semibold "
        >
          View Profile
        </Link>
      </div>
      <ul className="w-full flex flex-col gap-6 mt-5 px-4 ">
        {links.map(({ url, label, icon }, index) => (
          <Link to={url}>
            <li key={index} className="w-full flex items-center gap-1.5">
              <ReactSVG
                src={icon}
                beforeInjection={(svg) =>
                  svg.setAttribute(
                    "class",
                    ` ${icon === advertise ? "w-3.5 h-3.5 mr-0.5" : "w-4 h-4"} `
                  )
                }
              />
              <p className=" text-[#262520] hover:text-primary-500 font-semibold text-sm ">
                {label}
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
