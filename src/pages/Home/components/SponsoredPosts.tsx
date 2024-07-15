import { Link } from "react-router-dom";
import feed1 from "../../../assets/img/feed/1340be3ac76cb86bdf5bf96270288558.png";
import feed2 from "../../../assets/img/feed/9c89ea3face241526c9d66e1ae2e743a.png";
const SponsoredPosts = () => {
  const sponsored = [
    {
      id: 1,
      title: "Welcome to Entreprise Buzz, let's get started",
      link: "EntrepriseBuzz.com",
      img: feed1,
    },
    {
      id: 2,
      title: "Get started with our products easily",
      link: "EntrepriseBuzz.com",
      img: feed2,
    },
  ];
  return (
    <div className="bg-white rounded-lg py-6 px-4 w-full">
      <div className="flex flex-col gap-3.5 ">
        <h2 className="text-[#36474F] font-bold ">Sponsored</h2>
        <div className="flex flex-col gap-4">
          {sponsored.map(({ id, title, link, img }) => (
            <div key={id} className="flex items-center gap-1.5">
              <img
                src={img}
                alt=""
                className="w-[112px] h-[72px] object-cover rounded-lg "
              />
              <div className="flex gap-0.5 flex-col ">
                <h1 className="font-bold text-[13px] text-left ">{title}</h1>
                <Link
                  to={link}
                  className="text-[#36474F] font-medium text-[10px] leading-[14px] "
                >
                  {link}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsoredPosts;
