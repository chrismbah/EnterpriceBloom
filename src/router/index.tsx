import { Fragment } from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import { routes, IRoutes } from "./routes";
const createRouteElements = (route: IRoutes): RouteObject => {
  const { path, element, children } = route;
  return {
    path,
    element: <Fragment>{element}</Fragment>,
    children: children ? children.map(createRouteElements) : undefined,
  };
};

const router = createBrowserRouter(routes.map(createRouteElements));

export default router;
