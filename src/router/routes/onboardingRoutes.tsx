import { IRoutes } from ".";
import SignUp from "../../components/Onboarding/SignUp";
import AboutYou from "../../components/Onboarding/AboutYou";
import Interests from "../../components/Onboarding/Interests";
export const onboardingRoutes: IRoutes[] = [
  {
    path: "signup",
    element: <SignUp />,
    authGuard: false,
  },
  {
    path: "about-you",
    element: <AboutYou />,
    authGuard: false,
  },
  {
    path: "interests",
    element: <Interests />,
    authGuard: false,
  },
];
