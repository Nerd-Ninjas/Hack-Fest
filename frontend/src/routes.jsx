import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import Course from "./pages/dashboard/Course";
import { SiCoursera } from "react-icons/si";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        // path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        // path: "/profile",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Report",
        // path: "/tables",
        element: <Tables />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "Learning Path",
        // path: "/learning-path",
        element: <Notifications />,
      },
      {
        icon: <SiCoursera />,
        name: "Course",
        path: "/course",
        element: <Course />,
      },
      {
        icon: <ServerStackIcon {...icon} />,
        name: "Log out",
        path: "/log-out",
        element: <SignIn />,
      },
      {
        icon: <ServerStackIcon {...icon} />,
        name: "Log out",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <ServerStackIcon {...icon} />,
        name: "Log out",
        path: "/sign-up",
        element: <SignUp/>,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        // icon: <ServerStackIcon {...icon} />,
        // name: "Log out",
        path: "/log-out",
        element: <SignIn />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        // icon: <ServerStackIcon {...icon} />,
        // name: "Log out",
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        // icon: <ServerStackIcon {...icon} />,
        // name: "Log out",
        path: "/sign-up",
        element: <SignUp/>,
      },
    ],
  },
];

export default routes;
