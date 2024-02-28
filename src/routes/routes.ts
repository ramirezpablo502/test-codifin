import { IRoutesProps } from "./model";
import DashboardPage from "../pages/dashboard";

export const routes: IRoutesProps[] = [
  {
    path: "/",
    component: DashboardPage,
    exact: true,
  },
];

export default routes;
