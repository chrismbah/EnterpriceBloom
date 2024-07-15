import OnboardingLayout from "../../layout/OnboardingLayout";
import MainLayout from "../../layout/MainLayout";
import Login from "../../pages/auth/Login";
import ForgotPassword from "../../pages/auth/ForgotPassword";
import { mainRoutes } from "./main";
export interface IRoutes {
  path: string;
  element: JSX.Element;
  authGuard: boolean;
  children?: IRoutes[];
}

export const routes: IRoutes[] = [
  {
    path: "/",
    element: <MainLayout />,
    authGuard: true,
    children: mainRoutes,
  },
  {
    path: "/onboarding",
    element: <OnboardingLayout />,
    authGuard: false,
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
