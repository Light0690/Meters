import { lazy } from "react";

import { HomeRoute } from "@constants/routesConst";

const Home = lazy(() => import("@pages/Main"));

export const routes = [
  { path: HomeRoute, element: Home },
];
