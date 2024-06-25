import { IGroup } from ".";

const Group = ({ img, title, members }: IGroup) => {
  return (
    <div className="w-full h-[210px] border-[0.88px] border-[#D6DADB] rounded-lg overflow-hidden">
      <img src={img} alt="" className="w-full h-[65%] object-cover" />
      <div className="flex items-center justify-center h-[35%]">
        <div className="flex flex-col items-center">
          <h3 className="font-semibold">{title}</h3>
          <h4 className="text-[#36474F] text-[11px] font-semibold ">
            {members.toLocaleString()} Group Members
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Group;
