import Group from "./Group";
import group1 from "../../../assets/img/feed/group1.png";
import group2 from "../../../assets/img/feed/group2.png";
import group3 from "../../../assets/img/feed/group3.png";

export interface IGroup {
  id: number;
  img: string;
  title: string;
  members: number;
}
const Groups = () => {
  const groups: IGroup[] = [
    {
      id: 1,
      img: group2,
      title: "SEO Specialists",
      members: 57,
    },
    {
      id: 2,
      img: group1,
      title: "Marketing Strategists",
      members: 5479,
    },
    {
      id: 3,
      img: group3,
      title: "SEO Geniuses",
      members: 84887,
    },
    {
      id: 4,
      img: group2,
      title: "Tech Enthusiasts",
      members: 407,
    },
    {
      id: 5,
      img: group3,
      title: "SEO Analysts",
      members: 8097,
    },
    {
      id: 6,
      img: group1,
      title: "Marketers",
      members: 897,
    },
  ];
  return (
    <div className="bg-white rounded-lg py-8 px-6">
      <div className="w-full grid grid-cols-4 gap-4">
        {groups.map((group, i) => (
          <Group key={i} {...group} />
        ))}
      </div>
    </div>
  );
};

export default Groups;
