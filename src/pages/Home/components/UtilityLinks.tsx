import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo_small.png";
const UtilityLinks = () => {
  const links = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Accessibility",
      link: "/about",
    },
    {
      name: "Help Center",
      link: "/about",
    },
    {
      name: "Terms & Conditions",
      link: "/about",
    },
    {
      name: "Ad Choices",
      link: "/about",
    },
    {
      name: "Advertsing",
      link: "/about",
    },
    {
      name: "Business Services",
      link: "/about",
    },
  ];
  return (
    <div className="flex flex-col gap-3 w-[230px] ">
      <div className="w-full flex items-center justify-center gap-4 flex-wrap">
        {links.map(({ name, link }, i) => (
          <Link
            key={i}
            to={link}
            className="text-[#36474F] font-semibold text-xs "
          >
            {name}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-1 ">
        <img
          src={logo}
          alt="Entreprise Buzz"
          className="w-[64px] h-6 object-cover"
        />
        <p className="text-[10px] leading-[14px] font-semibold text-black ">
          Enterprisebuzz Inc. 2024
        </p>
      </div>
    </div>
  );
};

export default UtilityLinks;
