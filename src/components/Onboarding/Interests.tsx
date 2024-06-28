import { useState } from "react";
import { interests } from "../../data/interests";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nextStep } from "../../store/slices/onboardingSlice";
import { useCompleteProfileMutation } from "../../store/slices/apiSlices";
import { RootState } from "../../store";
import ButtonLoader from "../loaders/ButtonLoader";
import toast from "react-hot-toast";

const Interests = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state?.auth?.user?.userId);
  const [completeProfile, { isLoading }] = useCompleteProfileMutation();

  // This function is for adding or removing an interest from the
  // selectedInterests array based on whether the interest is already selected
  // or not. The interest is added if it's not in the array, and removed if
  // it is.

  const handleSelectInterest = (interest: string) => {
    // Check if the interest is already selected
    if (selectedInterests.includes(interest))
      return setSelectedInterests(
        selectedInterests.filter((item: string) => item !== interest)
      );
    return setSelectedInterests([...selectedInterests, interest]);
  };

  const handleSubmitInterests = async (data: string[]) => {
    const aboutYouData = JSON.parse(
      localStorage.getItem("aboutYouData") ?? "{}"
    );
    const profileData = { ...aboutYouData, interests: data };
    try {
      const response = await completeProfile({ userId, profileData });
      if (response) {
        localStorage.removeItem("aboutYouData");
        toast.success("Setup Complete! Welcome to EntrepriceBloom");
        navigate("/");
        dispatch(nextStep());
      }
    } catch (error) {
      console.error("Profile completion error:", error);
      toast.error("Whoops! Something went wrong");
    }
  };

  return (
    <div className=" w-full lg:w-[80%] xl:w-[85%]">
      <div className="mb-[16px] w-full ">
        <h1 className="font-bold text-2xl md:text-3xl mb-0.5 md:mb-[5px] ">
          Let's get started
        </h1>
        <p className="font-semibold text-base md:text-[1.05rem] leading-6 text-[#36474F] ">
          Pick Marketing topics you’ll like to see in your home feed
        </p>
      </div>
      <div className="w-full flex items-center gap-[10px] flex-wrap mb-6">
        {interests.map((interest) => (
          <button
            key={interest}
            onClick={() => handleSelectInterest(interest)}
            className={`w-fit text-sm py-2 px-[8px] text-center place-content-center rounded-[32px] mb-1 border font-medium ${
              selectedInterests.includes(interest)
                ? "bg-primary-500 text-white border-primary-500"
                : "bg-white text-[#576B74] border-[#576B74]"
            } hover:text-white hover:bg-primary-500 hover:border-primary-500 transition duration-200 ease-in-out `}
          >
            {interest}
          </button>
        ))}
      </div>
      <button
        onClick={() => handleSubmitInterests(selectedInterests)}
        className="w-full block place-content-center font-bold bg-primary-500 text-white rounded-[8px] h-[52px] p-[8px] text-center "
      >
        {isLoading ? <ButtonLoader /> : "Go to Feed"}
      </button>
    </div>
  );
};

export default Interests;
