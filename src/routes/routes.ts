import React from "react";
import { IRoutesProps } from "./model";

const DashboardPage = React.lazy(() => import("../pages/dashboard/dashboard"));

export const routes: IRoutesProps[] = [
  {
    path: "/",
    component: DashboardPage,
    exact: true,
  },
];

export default routes;
