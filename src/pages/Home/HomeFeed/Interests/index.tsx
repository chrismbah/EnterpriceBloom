import { groups, people } from "../../../../data/feed";
import { useUserProfile } from "../../../../hooks/useUserProfile";
import GroupInterests from "./GroupInterests";
import PeopleInterests from "./PeopleInterests";

const InterestsFeed = () => {
  const { userProfile, isLoading, isError } = useUserProfile();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  if (!userProfile) return <div>Loading...</div>;

  return (
    <div className="flex flex-col gap-8">
      <GroupInterests username={userProfile.fullName} groups={groups} />
      <PeopleInterests username={userProfile.fullName} people={people} />
    </div>
  );
};

export default InterestsFeed;
