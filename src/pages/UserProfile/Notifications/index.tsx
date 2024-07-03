import SideNavbar from "../../../components/common/SideNavbar";
const Notifications = () => {
  return (
    <div className="w-full flex gap-10">
      <div className="basis-[30%]">
        <SideNavbar />
      </div>
      <div className="basis-[70%] bg-white rounded-lg py-8 px-6 flex flex-col ">
        <div className="flex justify-between">
          <h1 className="font-bold text-lg">Notifications</h1>
          <div className="flex gap-2">
            <button className="font-semibold text-sm">Mark all as read</button>
            <button className="font-semibold text-sm text-primary-500 ">
              Delete all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
