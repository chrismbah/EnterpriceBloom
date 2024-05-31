import { Suspense } from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import { routes, IRoutes } from "./routes";
import AppLoader from "../shared/AppLoader";
const createRouteElements = (route: IRoutes): RouteObject => {
  const { path, element, children } = route;
  return {
    path,
    element: <Suspense fallback={<AppLoader />}>{element}</Suspense>,
    children: children ? children.map(createRouteElements) : undefined,
  };
};

const router = createBrowserRouter(routes.map(createRouteElements));

export default router;
