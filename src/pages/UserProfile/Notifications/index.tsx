import SideNavbar from "../../../components/common/SideNavbar";
import user1 from "../../../assets/img/feed/user.png";
import user2 from "../../../assets/img/feed/user1.png";
import user3 from "../../../assets/img/feed/user2.png";

const notifs = [
  {
    id: 1,
    userImg: user1,
    title: "Kalu Dillion followed you",
    time: "5 hours ago",
  },
  {
    id: 2,
    userImg: user2,
    title: "Christian Mbah made a post in seo group",
    time: "5 hours ago",
  },
  {
    id: 3,
    userImg: user3,
    title: "Jonathan Michael followed you",
    time: "6 hours ago",
  },
  {
    id: 4,
    userImg: user1,
    title: "Ngidadi Musa made a post in seo group",
    time: "6 hours ago",
  }, {
    id: 5,
    userImg: user3,
    title: "Alhaji Osondu made a post in seo group",
    time: "6 hours ago",
  }, {
    id: 6,
    userImg: user2,
    title: "Alozie Jubilee made a post in seo group",
    time: "6 hours ago",
  },
];

const Notifications = () => {
  return (
    <div className="w-full flex gap-10">
      <div className="basis-[30%]">
        <SideNavbar />
      </div>
      <div className="basis-[70%] bg-white rounded-lg py-8 px-6 flex flex-col gap-9 ">
        <div className="flex justify-between">
          <h1 className="font-bold text-lg">Notifications</h1>
          <div className="flex gap-2">
            <button className="font-semibold text-sm">Mark all as read</button>
            <button className="font-semibold text-sm text-primary-500 ">
              Delete all
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col">
          {notifs.map((notif) => (
            <button
              key={notif.id}
              className="w-full flex items-center gap-4 py-6 px-5 border-b border-[#F3F4F5] hover:rounded-lg hover:bg-[#FFEEED] "
            >
              <img
                src={notif.userImg}
                alt="User"
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1 text-left">
                <p className="font-semibold">{notif.title}</p>
                <p className="text-gray-500 text-sm">{notif.time}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
