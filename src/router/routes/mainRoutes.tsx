import HomePage from "../../pages/Home";
import UserProfilePage from "../../pages/UserProfile";
import ProfilePage from "../../pages/Profile";
import { IRoutes } from ".";
export const mainRoutes: IRoutes[] = [
  {
    path: "",
    element: <HomePage />,
    authGuard: false,
  },
  {
    path: "profile",
    element: <UserProfilePage />,
    authGuard: false,
  },
  {
    path: "/:username",
    element: <ProfilePage />,
    authGuard: false,
  },
];
