import user1 from "../../../assets/img/feed/user.png";
import user2 from "../../../assets/img/feed/user1.png";
import user3 from "../../../assets/img/feed/user2.png";
import Following from "./Following";

export interface IFollowing {
  id: number;
  img: string;
  name: string;
  title: string;
  userFollowing: boolean;
}
const Followings = () => {
  const followings: IFollowing[] = [
    {
      id: 1,
      img: user1,
      name: "Kalu Dillion",
      title: "SEO Expert",
      userFollowing: false,
    },
    {
      id: 2,
      img: user2,
      name: "Benjamin Tenneson",
      title: "UX Designer",
      userFollowing: false,
    },
    {
      id: 1,
      img: user3,
      name: "Christian Mbah",
      title: "Software Engineer",
      userFollowing: true,
    },
    {
      id: 1,
      img: user1,
      name: "James Aslan",
      title: "Entrepreneur",
      userFollowing: false,
    },
    {
      id: 1,
      img: user2,
      name: "Jonathan Edward",
      title: "Web Designer",
      userFollowing: false,
    },
  ];
  return (
    <div className="bg-white rounded-lg py-8 px-6 flex flex-col gap-8 items-center">
      {followings.map((following, i) => (
        <Following key={i} {...following} />
      ))}
    </div>
  );
};

export default Followings;
