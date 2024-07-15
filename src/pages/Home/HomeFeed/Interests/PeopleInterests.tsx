const PeopleInterests = ({
  username,
  people,
}: {
  username: string;
  people: {
    id: number;
    cover_photo: string;
    profile_photo: string;
    name: string;
    username: string;
    title: string;
  }[];
}) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full text-left">
        <h1 className="font-bold text-black text-2xl">
          People That Match Your Interest
        </h1>
        <p className="text-xs text-[#576B74] font-semibold ">
          Hi {username}, these are suggested people that matches your interest
        </p>
      </div>
      <div className="w-full grid grid-cols-3 gap-2">
        {people.map(
          ({ cover_photo, profile_photo, name, username, title, id }) => (
            <div
              key={id}
              className="overflow-hidden flex flex-col w-full h-[230px] rounded-lg"
            >
              <div className="w-full rounded-t-lg h-[40%]">
                <img
                  src={cover_photo}
                  alt={username}
                  className="w-full object-cover"
                />
              </div>
              <div className="bg-white h-[60%] px-3">
                <div className="w-12 h-12 relative -mt-6 rounded-full overflow-hidden mb-1">
                  <img
                    className="object-cover w-full bg-gray-100 rounded-full"
                    src={profile_photo}
                    alt={username}
                  />
                </div>
                <div className="flex flex-col gap-1 mb-3 ">
                  <div className="flex flex-col gap-0.5">
                    <h1 className="font-semibold leading-[18px]">{name}</h1>
                    <p className="font-semibold text-xs">@{username}</p>
                  </div>
                  <p className="text-xs font-semibold text-[#36474F]">
                    {title}
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
          )
        )}
      </div>
      <div className="w-full flex items-center justify-center">
        <button className="border border-[#36474F] rounded-[32px] py-2 px-5 text-[#36474F] font-bold text-xs ">
          See More
        </button>
      </div>
    </div>
  );
};

export default PeopleInterests;
