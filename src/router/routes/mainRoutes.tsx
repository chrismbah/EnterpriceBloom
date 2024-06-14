import HomePage from "../../pages/Home";
import { IRoutes } from ".";
export const mainRoutes: IRoutes[] = [
  {
    path: "/",
    element: <HomePage />,
    authGuard: false,
  },
];
