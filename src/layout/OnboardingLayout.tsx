import { Outlet } from "react-router-dom";
import logo from "../assets/logo_white.png";
import { OnboardingSlider } from "../components/carousel/OnboardingSlider";
const OnboardingLayout = () => {
  return (
    <div className="onboarding-layout flex min-h-screen w-screen overflow-x-hidden ">
      <div
        className="slider-section hidden mlg:block mlg:w-[40%] bg-primary-500 min-h-screen z-10
          lg:flex items-center flex-col justify-center"
      >
        <img
          src={logo}
          alt="Entreprise Bloom"
          className="w-[230px] h-[56px] object-cover"
        />
        <OnboardingSlider />
      </div>
      <div
        className="h-screen overflow-y-auto hide-scrollbar overflow-x-hidden 
         w-full mlg:w-[60%] flex flex-col pt-[68px] pb-[45px] px-[36px] lg:px-[50px]"
      >
        <Outlet />
      </div>
    </div>
  );
};

export default OnboardingLayout;
