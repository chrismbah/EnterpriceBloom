import { useEffect } from "react";
import logo from "../assets/img/logo_white.png";
import { OnboardingSlider } from "../components/carousel/OnboardingSlider";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import SignUp from "../components/Onboarding/SignUp";
import AboutYou from "../components/Onboarding/AboutYou";
import Interests from "../components/Onboarding/Interests";
import { setStep } from "../store/slices/onboardingSlice";
const OnboardingLayout = () => {
  const step = useSelector((state: RootState) => state.onboarding.step);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedStep = localStorage.getItem("onboardingStep");
    if (savedStep) {
      dispatch(setStep(Number(savedStep)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("onboardingStep", step.toString());
  }, [step]);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <SignUp />;
      case 2:
        return <AboutYou />;
      case 3:
        return <Interests />;
      default:
        return null;
    }
  };

  return (
    <div className="onboarding-layout flex min-h-screen w-screen overflow-x-hidden ">
      <div
        className="slider-section hidden mlg:flex mlg:w-[40%] bg-primary-500 min-h-screen z-10
          lg:flex items-center flex-col justify-center"
      >
        <img
          src={logo}
          alt="Entreprise Bloom"
          className="w-[256px] h-[64px] object-cover"
        />
        <OnboardingSlider />
      </div>
      <div
        className="h-screen overflow-y-auto hide-scrollbar overflow-x-hidden 
         w-full mlg:w-[60%] flex flex-col pt-7 md:pt-10 lg:pt-[68px] pb-7 lg:pb-[45px] px-4 md:px-7 lg:px-[50px] xl:px-9"
      >
        {renderStep()}
      </div>
    </div>
  );
};

export default OnboardingLayout;
