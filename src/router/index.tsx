import { Fragment } from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import { routes, IRoutes } from "./routes";
import ProtectedRoute from "../layout/ProtectedRoute";
const createRouteElements = (route: IRoutes): RouteObject => {
  const { path, element, children, authGuard } = route;
  return {
    path,
    element: (
      <Fragment>
        {authGuard ? <ProtectedRoute element={element} /> : element}
      </Fragment>
    ),
    children: children ? children.map(createRouteElements) : undefined,
  };
};

const router = createBrowserRouter(routes.map(createRouteElements));

export default router;
