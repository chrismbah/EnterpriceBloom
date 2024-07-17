import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { nextStep } from "../../store/slices/onboardingSlice";
import {
  useCompleteProfileMutation,
  useGetInterestsMutation,
} from "../../store/slices/apiSlices";
import ButtonLoader from "../loaders/ButtonLoader";
import toast from "react-hot-toast";

interface Interest {
  _id: string;
  interest: string;
}

const Interests = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const dispatch = useDispatch();
  const [completeProfile, { isLoading }] = useCompleteProfileMutation();
  const [getInterests, { data, isLoading: isInterestsLoading, isError }] =
    useGetInterestsMutation();

  useEffect(() => {
    const handleGetInterests = async () => {
      try {
        await getInterests().unwrap();
      } catch (error) {
        console.error("Failed to get interests:", error);
      }
    };
    handleGetInterests();
  }, [getInterests]);

  const handleSelectInterest = (interest: Interest) => {
    // Checks if the interest is already selected and toggles the selection
    if (selectedInterests.includes(interest._id))
      return setSelectedInterests(
        selectedInterests.filter((item: string) => item !== interest._id)
      );
    return setSelectedInterests([...selectedInterests, interest._id]);
  };

  const handleSubmitInterests = async (interests: string[]) => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      toast.error("User ID not found");
      return;
    }
    try {
      const profileData = { interests };
      await completeProfile({
        userId,
        profileData,
      }).unwrap();
      toast.success("Setup Complete!");
      dispatch(nextStep());
    } catch (error) {
      console.error("Profile completion error:", error);
      toast.error("Whoops! Something went wrong");
    }
  };

  if (isInterestsLoading) return <div>Loading interests...</div>;
  if (isError)
    return (
      <div>
        Failed to fetch interests. Please reload the page and try again.
      </div>
    );

  const interests: Interest[] = data?.response ?? [];

  return (
    <div className="w-full lg:w-[80%] xl:w-[85%]">
      <div className="mb-[16px] w-full">
        <h1 className="font-bold text-2xl md:text-3xl mb-0.5 md:mb-[5px]">
          Interests
        </h1>
        <p className="font-semibold text-base md:text-[1.05rem] leading-6 text-[#36474F]">
          Pick Marketing topics you’ll like to see in your home feed
        </p>
      </div>
      <div className="w-full">
        <div className="w-full flex items-center gap-[10px] flex-wrap mb-6">
          {interests.map((data: Interest) => (
            <button
              key={data._id}
              onClick={() => handleSelectInterest(data)}
              className={`w-fit text-sm py-2 px-[8px] text-center place-content-center rounded-[32px] mb-1 border font-medium ${
                selectedInterests.includes(data._id)
                  ? "bg-primary-500 text-white border-primary-500"
                  : "bg-white text-[#576B74] border-[#576B74]"
              } hover:text-white hover:bg-primary-500 hover:border-primary-500 transition duration-200 ease-in-out `}
            >
              {data.interest}
            </button>
          ))}
        </div>
        <button
          onClick={() => handleSubmitInterests(selectedInterests)}
          className="w-full block place-content-center font-bold bg-primary-500 text-white rounded-[8px] h-[52px] p-[8px] text-center"
        >
          {isLoading ? <ButtonLoader /> : "Go to Feed"}
        </button>
      </div>
    </div>
  );
};

export default Interests;
