import HomePage from "../../pages/Home";
import UserProfilePage from "../../pages/UserProfile";
import ProfilePage from "../../pages/Profile";
import Notifications from "../../pages/UserProfile/Notifications";
import Messages from "../../pages/UserProfile/Messages";
import Profile from "../../pages/UserProfile/Profile";
import { IRoutes } from ".";
export const mainRoutes: IRoutes[] = [
  {
    path: "",
    element: <HomePage />,
    authGuard: true,
  },
  {
    path: "profile",
    element: <UserProfilePage />,
    authGuard: true,
    children: [
      {
        path: "",
        element: <Profile />,
        authGuard: true,
      },
      {
        path: "notifications",
        element: <Notifications />,
        authGuard: true,
      },
      {
        path: "messages",
        element: <Messages />,
        authGuard: true,
      },
    ],
  },
  {
    path: "/:username",
    element: <ProfilePage />,
    authGuard: true,
  },
];
