import { useEffect } from "react";
import logo from "../assets/img/logo_white.png";
import { OnboardingSlider } from "../components/carousel/OnboardingSlider";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import SignUp from "../components/Onboarding/SignUp";
import AboutYou from "../components/Onboarding/AboutYou";
import Interests from "../components/Onboarding/Interests";
import { setStep } from "../store/slices/onboardingSlice";
import { Navigate } from "react-router-dom";

const OnboardingLayout = () => {
  const { step, completed } = useSelector(
    (state: RootState) => state.onboarding
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const storedOnboarding = localStorage.getItem("onboarding");
    if (storedOnboarding) {
      const { step } = JSON.parse(storedOnboarding);
      dispatch(setStep(step));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("onboarding", JSON.stringify({ step, completed }));
  }, [step, completed]);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <SignUp />;
      case 2:
        return <AboutYou />;
      case 3:
        return <Interests />;
    }
  };

  if (step > 3) return <Navigate to="/" />;

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
