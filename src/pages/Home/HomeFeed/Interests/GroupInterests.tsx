const GroupInterests = ({
  username,
  groups,
}: {
  username: string;
  groups: {
    id: number;
    img: string;
    title: string;
    members: number;
  }[];
}) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full text-left">
        <h1 className="font-bold text-black text-2xl">
          Groups That Match Your Interest
        </h1>
        <p className="text-xs text-[#576B74] font-semibold ">
          Hi {username}, these are suggested groups that matches your interest
        </p>
      </div>
      <div className="w-full grid grid-cols-3 gap-2">
        {groups.map(({ img, members, title, id }) => (
          <div
            key={id}
            className="overflow-hidden flex flex-col w-full h-[230px] rounded-lg"
          >
            <img
              src={img}
              alt={title}
              className="w-full h-[60%] object-cover"
            />
            <div className="w-full h-[40%] bg-white px-2 py-2 flex flex-col">
              <div className="flex flex-col gap-0.5 mb-2">
                <h1 className="font-semibold text-sm">{title}</h1>
                <p className="font-semibold text-xxs text-[#36474F] flex items-center gap-1">
                  <span>{members.toLocaleString()}</span> Group Members
                </p>
              </div>
              <div className="flex items-center justify-between gap-2 w-full">
                <button className="py-[4px] px-[10px] h-6 w-[60%] bg-primary-500 text-white rounded text-xxs font-semibold">
                  Follow
                </button>{" "}
                <button className="py-[4px] px-[10px] h-6 w-[40%] bg-[#E7EAEB] text-[#262520] rounded text-xxs font-semibold">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center">
        <button className="border border-[#36474F] rounded-[32px] py-2 px-5 text-[#36474F] font-bold text-xs ">
          See More
        </button>
      </div>
    </div>
  );
};

export default GroupInterests;
