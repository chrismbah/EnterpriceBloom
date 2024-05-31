import {
  Outlet,
} from "react-router-dom";
import logo from "../assets/logo.png";
import { OnboardingSlider } from "../components/OnboardingSlider";

const OnboardingLayout = () => {
  return (
    <div className="onboarding-layout flex min-h-screen w-screen overflow-x-hidden ">
      <div
        className="slider-section w-[35%] bg-primary-500 min-h-screen z-10
          lg:flex items-center flex-col justify-center"
      >
        <img
          src={logo}
          alt="Entreprise Bloom"
          className="w-[210px] h-[56px] object-cover"
        />
        <OnboardingSlider />
      </div>
      <div className="form-section h-screen overflow-y-auto hide-scrollbar overflow-x-hidden w-[65%] flex flex-col pt-[40px] pb-10 px-[50px]">
        <Outlet />
      </div>
    </div>
  );
};

export default OnboardingLayout;
