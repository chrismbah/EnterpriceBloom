/* eslint-disable react-refresh/only-export-components */
import OnboardingLayout from "../../layout/OnboardingLayout";
import Login from "../../pages/auth/Login";
import ForgotPassword from "../../pages/auth/ForgotPassword";
import { onboardingRoutes } from "./onboardingRoutes";
export interface IRoutes {
  path: string;
  element: JSX.Element;
  authGuard: boolean;
  children?: IRoutes[];
}

export const routes: IRoutes[] = [
  {
    path: "/",
    element: <OnboardingLayout />,
    authGuard: false,
    children: onboardingRoutes,
  },
  {
    path: "/login",
    element: <Login />,
    authGuard: false,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
    authGuard: false,
  },
];
