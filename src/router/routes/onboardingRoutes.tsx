/* eslint-disable react-refresh/only-export-components */
// import { lazy } from "react";
import { IRoutes } from ".";
import SignUp from "../../pages/auth/SignUp";
import AboutYou from "../../pages/auth/AboutYou";
import Interests from "../../pages/auth/Interests";

// const SignUp = lazy(() => import("../../pages/auth/SignUp"));
// const AboutYou = lazy(() => import("../../pages/auth/AboutYou"));
// const Interests = lazy(() => import("../../pages/auth/Interests"));

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
