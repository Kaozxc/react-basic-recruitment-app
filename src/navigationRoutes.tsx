import { DashboardScreen } from "./screens/Dashboard";
import { SportsScreen } from "./screens/Sports";
import { SchedulingScreen } from "./screens/Scheduling";
import { CompetitionsScreen } from "./screens/Competitions";
import { OrganisationsScreen } from "./screens/Organisations";
import { UsersScreen } from "./screens/Users";

type NavigationRoute = {
  path: string;
  element: JSX.Element;
};
type NavigationRoutes = Record<string, NavigationRoute>;

export const navigationRoutes: NavigationRoutes = {
  dashboard: {
    path: "/",
    element: <DashboardScreen />,
  },
  sports: {
    path: "/sports",
    element: <SportsScreen />,
  },
  scheduling: {
    path: "/scheduling",
    element: <SchedulingScreen />,
  },
  competitions: {
    path: "/competitions",
    element: <CompetitionsScreen />,
  },
  organisations: {
    path: "/organisations",
    element: <OrganisationsScreen />,
  },
  users: {
    path: "/users",
    element: <UsersScreen />,
  },
};
