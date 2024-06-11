import HomePage from "../../pages/home/HomePage";
import { IRoutes } from ".";
export const mainRoutes: IRoutes[] = [
  {
    path: "/",
    element: <HomePage />,
    authGuard: false,
  },
];
