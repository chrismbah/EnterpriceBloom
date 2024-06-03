import { IRoutes } from ".";
import SignUp from "../../pages/auth/onboarding/SignUp";
import AboutYou from "../../pages/auth/onboarding/AboutYou";
import Interests from "../../pages/auth/onboarding/Interests";
export const onboardingRoutes: IRoutes[] = [
  {
    path: "",
    element: <SignUp />,
    authGuard: false,
  },
  {
    path: "register",
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
