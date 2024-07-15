import SideNavbar from "../../../components/common/SideNavbar";
import market1 from "../../../assets/img/feed/marketplace1.jpeg";
import market2 from "../../../assets/img/feed/marketplace2.jpeg";
const MarketPlace = () => {
  const marketplace = [
    {
      id: 1,
      title: "Web Design",
      prof_no: 1220,
      img: market1,
    },
    {
      id: 2,
      title: "Digital Marketing",
      prof_no: 1500,
      img: market2,
    },
    {
      id: 3,
      title: "SEO",
      prof_no: 1220,
      img: market1,
    },
    {
      id: 4,
      title: "Content Writer",
      prof_no: 1220,
      img: market2,
    },
    {
      id: 5,
      title: "Web Developer",
      prof_no: 1220,
      img: market1,
    },
    {
      id: 6,
      title: "Software Engineering",
      prof_no: 1220,
      img: market2,
    },
  ];
  return (
    <div className="flex gap-4 py-5 ">
      <div className="basis-1/4">
        <SideNavbar />
      </div>
      <div className="basis-3/4 bg-white rounded-lg py-8 px-7 ">
        <h1 className="text-[28px] font-bold mb-2">
          Different services you need
        </h1>
        <div className="flex flex-col gap-8">
          <div className="w-full">
            <div className="grid grid-cols-1 gap-y-[28px] gap-x-[14px] md:grid-cols-2 lg:grid-cols-3">
              {marketplace.map(({ id, title, prof_no, img }) => (
                <div key={id} className="flex flex-col gap-[8px]">
                  <img
                    src={img}
                    alt=""
                    className="rounded-lg h-[150px] w-full object-cover "
                  />
                  <div className="">
                    <h1 className="font-semibold">{title}</h1>
                    <p className="text-[#36474F] font-semibold text-xxs">
                      Over {prof_no.toLocaleString()} Professionals
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <button className="border border-[#36474F] rounded-[32px] py-2 px-5 text-[#36474F] font-bold text-xs ">
              See More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
